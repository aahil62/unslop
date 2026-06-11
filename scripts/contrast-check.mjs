#!/usr/bin/env node
// WCAG AA contrast check on a rendered page (checklist item C3).
// Usage: node contrast-check.mjs <url>
// Requires Playwright in the *project* being audited.
// Text over background-images/gradients is reported under "manualReview",
// not as a failure — verify those by looking at the screenshots.
import { createRequire } from "node:module";
import { join } from "node:path";

const requireFromProject = createRequire(join(process.cwd(), "package.json"));
let chromium;
try {
  ({ chromium } = requireFromProject("playwright"));
} catch {
  console.error(
    "Playwright not found in this project. Install it first:\n" +
      "  npm i -D playwright && npx playwright install chromium"
  );
  process.exit(1);
}

const [url] = process.argv.slice(2);
if (!url) {
  console.error("usage: node contrast-check.mjs <url>");
  process.exit(1);
}

// Prefer Playwright's bundled chromium; fall back to locally installed Chrome.
let browser;
try {
  browser = await chromium.launch();
} catch {
  browser = await chromium.launch({ channel: "chrome" });
}
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(800);

const samples = await page.evaluate(() => {
  // Normalize any CSS color (rgb, oklch, lab, color(srgb …)) to RGBA bytes
  // by drawing it on a canvas.
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const toRGBA = (cssColor) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#fff";
    ctx.fillStyle = cssColor; // invalid values keep previous fillStyle
    ctx.fillRect(0, 0, 1, 1);
    return [...ctx.getImageData(0, 0, 1, 1).data]; // [r,g,b,a 0-255]
  };

  // Walk ancestors for the first opaque background; flag gradients/images.
  const effectiveBg = (el) => {
    let node = el;
    while (node && node instanceof Element) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== "none")
        return { image: true };
      const rgba = toRGBA(cs.backgroundColor);
      if (rgba[3] >= 230) return { rgb: rgba.slice(0, 3) };
      node = node.parentElement;
    }
    return { rgb: [255, 255, 255] };
  };

  const out = [];
  const els = document.querySelectorAll(
    "p,h1,h2,h3,h4,h5,h6,a,button,li,label,td,th,span,em,strong,blockquote,figcaption"
  );
  for (const el of els) {
    const hasDirectText = [...el.childNodes].some(
      (n) => n.nodeType === 3 && n.textContent.trim()
    );
    if (!hasDirectText) continue;
    // Decorative text is exempt from WCAG contrast requirements.
    if (el.closest('[aria-hidden="true"],[role="presentation"]')) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el);
    const fg = toRGBA(cs.color);
    if (fg[3] < 128) continue;
    out.push({
      text: el.textContent.trim().slice(0, 50),
      tag: el.tagName.toLowerCase(),
      fg: fg.slice(0, 3),
      bg: effectiveBg(el),
      fontSize: parseFloat(cs.fontSize),
      fontWeight: parseInt(cs.fontWeight, 10) || 400,
    });
  }
  return out;
});
await browser.close();

const luminance = ([r, g, b]) => {
  const f = (v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const seen = new Set();
const failures = [];
const manualReview = [];
let checked = 0;
for (const s of samples) {
  const large = s.fontSize >= 24 || (s.fontSize >= 18.66 && s.fontWeight >= 700);
  if (s.bg.image) {
    const key = `img|${s.fg}|${s.text}`;
    if (!seen.has(key)) {
      seen.add(key);
      manualReview.push({
        sample: `<${s.tag}> "${s.text}"`,
        reason: "text over background-image/gradient — check screenshots",
        fg: `rgb(${s.fg.join(",")})`,
      });
    }
    continue;
  }
  const key = `${s.fg}|${s.bg.rgb}|${large}`;
  if (seen.has(key)) continue;
  seen.add(key);
  checked++;
  const r = ratio(s.fg, s.bg.rgb);
  const threshold = large ? 3 : 4.5;
  if (r < threshold) {
    failures.push({
      sample: `<${s.tag}> "${s.text}"`,
      ratio: +r.toFixed(2),
      required: threshold,
      fg: `rgb(${s.fg.join(",")})`,
      bg: `rgb(${s.bg.rgb.join(",")})`,
      fontSize: s.fontSize,
    });
  }
}

console.log(
  JSON.stringify(
    { url, uniquePairsChecked: checked, failures, manualReview },
    null,
    2
  )
);
console.log(
  failures.length
    ? `FAIL C3: ${failures.length} contrast failure(s) below WCAG AA`
    : "PASS C3: all sampled solid-background text meets WCAG AA" +
      (manualReview.length ? ` (${manualReview.length} need manual review)` : "")
);
