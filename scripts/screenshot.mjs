#!/usr/bin/env node
// Capture full-page screenshots at 375/768/1024/1440 and report horizontal overflow.
// Usage: node screenshot.mjs <url> [outDir]
// Requires Playwright in the *project* being audited:
//   npm i -D playwright && npx playwright install chromium
import { mkdir } from "node:fs/promises";
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

const [url, outDir = "./unslop/screenshots"] = process.argv.slice(2);
if (!url) {
  console.error("usage: node screenshot.mjs <url> [outDir]");
  process.exit(1);
}

const viewports = [375, 768, 1024, 1440];
await mkdir(outDir, { recursive: true });

// Prefer Playwright's bundled chromium; fall back to locally installed Chrome.
let browser;
try {
  browser = await chromium.launch();
} catch {
  browser = await chromium.launch({ channel: "chrome" });
}
const results = [];
for (const width of viewports) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(800); // settle entrance animations
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth
  );
  const path = join(outDir, `${width}.png`);
  await page.screenshot({ path, fullPage: true });
  results.push({ width, path, horizontalOverflowPx: Math.max(0, overflow) });
  await page.close();
}
await browser.close();

console.log(JSON.stringify({ url, results }, null, 2));
const bad = results.filter((r) => r.horizontalOverflowPx > 0);
console.log(
  bad.length
    ? `FAIL X2: horizontal scroll at ${bad.map((b) => b.width + "px").join(", ")}`
    : "PASS X2: no horizontal scroll at any viewport"
);
