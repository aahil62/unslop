#!/usr/bin/env node
// Static scan for AI-slop tells in a React + Tailwind codebase.
// Usage: node slop-scan.mjs [projectDir]
// No dependencies. Maps findings to anti-slop-checklist IDs with file:line evidence.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";

const root = process.argv[2] || ".";
const SKIP_DIRS = new Set([
  "node_modules", ".next", ".git", "dist", "build", "out",
  ".turbo", ".vercel", "coverage", "design-rescue",
]);
const EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".mdx"]);

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (!SKIP_DIRS.has(name) && !name.startsWith(".")) walk(full);
    } else if (EXTS.has(extname(name))) {
      files.push(full);
    }
  }
})(root);

const findings = {}; // id -> { rule, samples: ["file:line  snippet"] }
const add = (id, rule, file, lineNo, snippet) => {
  findings[id] ??= { rule, count: 0, samples: [] };
  findings[id].count++;
  if (findings[id].samples.length < 5)
    findings[id].samples.push(
      `${relative(root, file)}:${lineNo}  ${snippet.trim().slice(0, 90)}`
    );
};

const RE = {
  arbitraryPx: /\b(?:[pm][trblxy]?|gap|space-[xy]|inset|top|left|right|bottom)-\[(\d+)px\]/g,
  transitionAll: /\btransition-all\b/,
  stockAccent: /\b(?:bg|text|border|ring|from|to)-(?:indigo|violet)-(?:500|600|700)\b|\bbg-blue-600\b/,
  gradientTell: /from-(?:purple|violet|indigo)-\d+.*to-(?:blue|cyan|indigo)-\d+/,
  rounded: /\brounded(?:-(?:none|sm|md|lg|xl|2xl|3xl|full|\[[^\]]+\]))?\b/g,
  fontWeight: /\bfont-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b/g,
  motion: /\b(?:animate-|transition\b|transition-)/,
  motionReduce: /motion-reduce:|prefers-reduced-motion/,
};

const roundedCounts = {};
const weights = new Set();
let hasMotion = false;
let hasMotionReduce = false;

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    const n = i + 1;
    let m;
    while ((m = RE.arbitraryPx.exec(line)) !== null) {
      if (Number(m[1]) % 4 !== 0)
        add("S1", "arbitrary spacing off the 4px scale", file, n, m[0]);
    }
    if (RE.transitionAll.test(line))
      add("M2", "transition-all (transition specific properties instead)", file, n, line);
    if (RE.stockAccent.test(line))
      add("C1", "stock Tailwind accent palette (indigo/blue/violet defaults)", file, n, line);
    if (RE.gradientTell.test(line))
      add("C1", "purple-to-blue gradient (the classic AI tell)", file, n, line);
    for (const r of line.match(RE.rounded) ?? [])
      roundedCounts[r] = (roundedCounts[r] || 0) + 1;
    for (const w of line.match(RE.fontWeight) ?? []) weights.add(w);
    if (RE.motion.test(line)) hasMotion = true;
    if (RE.motionReduce.test(line)) hasMotionReduce = true;
  });
}

// R1: uniform radius — one variant dominating
const totalRounded = Object.values(roundedCounts).reduce((a, b) => a + b, 0);
if (totalRounded >= 10) {
  const [topVariant, topCount] = Object.entries(roundedCounts).sort(
    (a, b) => b[1] - a[1]
  )[0];
  if (topCount / totalRounded > 0.85)
    add("R1", `uniform radius: ${topVariant} is ${topCount}/${totalRounded} of all radius classes`,
      root, 0, `${topVariant} ×${topCount}`);
}

// T1: font-weight sprawl (>3 named weights; font-normal counts)
if (weights.size > 3)
  add("T1", `font-weight sprawl: ${weights.size} weights in use (${[...weights].join(", ")})`,
    root, 0, [...weights].join(" "));

// M3: motion without reduced-motion handling
if (hasMotion && !hasMotionReduce)
  add("M3", "animations/transitions present but no motion-reduce / prefers-reduced-motion handling",
    root, 0, "(project-wide)");

const ids = Object.keys(findings).sort();
console.log(JSON.stringify({ root, filesScanned: files.length, findings }, null, 2));
console.log(
  ids.length
    ? `FAIL: ${ids.length} checklist item(s) flagged — ${ids.join(", ")}`
    : "PASS: no static slop tells found (visual checks still required)"
);
