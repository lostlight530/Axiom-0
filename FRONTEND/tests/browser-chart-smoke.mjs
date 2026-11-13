/**
 * Real Chromium paint/interaction smoke using Node's built-in CDP WebSocket.
 * No additional dependencies or remote browser/CDN are required.
 */
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const preview = 'http://127.0.0.1:4175/';
const port = 9227;
const profile = mkdtempSync(join(tmpdir(), 'axiom-chart-browser-'));
const chrome = spawn(process.env.CHROME_BIN || 'google-chrome', [
  '--headless=new', '--no-sandbox', '--disable-dev-shm-usage',
  '--disable-gpu', '--no-first-run', '--disable-extensions',
  '--remote-debugging-address=127.0.0.1',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' });
let ws;
try {
  async function retry(label, fn) {
    let last;
    for (let i = 0; i < 50; i++) {
      try {
        const value = await fn();
        if (value) return value;
      } catch (error) {
        last = error;
      }
      await sleep(400);
    }
    throw new Error(`Timed out: ${label}; ${String(last || '')}`);
  }
  await retry('Vite preview', async () => (await fetch(preview)).ok);
  const target = await retry('Chrome debugging tab', async () =>
    (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((tab) => tab.type === 'page')
  );
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  let nextId = 0;
  const requests = new Map();
  const exceptions = [];
  ws.addEventListener('message', (evt) => {
    const response = JSON.parse(String(evt.data));
    if (response.method === 'Runtime.exceptionThrown') exceptions.push(response.params?.exceptionDetails?.text);
    const p = requests.get(response.id);
    if (!p) return;
    requests.delete(response.id);
    if (response.error) p.reject(new Error(JSON.stringify(response.error)));
    else p.resolve(response.result);
  });
  async function cdp(method, params = {}) {
    const id = ++nextId;
    return new Promise((resolve, reject) => {
      requests.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async function evalOnPage(expression) {
    const result = await cdp('Runtime.evaluate', { expression, returnByValue: true });
    if (result.exceptionDetails) throw new Error('Browser evaluation: ' + result.exceptionDetails.text);
    return result.result.value;
  }
  await cdp('Runtime.enable');
  await cdp('Page.enable');
  await cdp('Page.navigate', { url: preview });
  const all = await retry('all-repo bars', async () => {
    const value = await evalOnPage(`({
      h1: document.querySelectorAll('h1').length,
      meters: document.querySelectorAll('[role="meter"]').length,
      positiveBars: [...document.querySelectorAll('[role="meter"]')].filter(b => b.getBoundingClientRect().width > 0).length,
      bodyWidth: document.body.getBoundingClientRect().width
    })`);
    return value?.meters === 10 ? value : null;
  });
  if (all.h1 !== 1 || all.positiveBars < 6 || all.bodyWidth <= 0)
    throw new Error('All-repository bars did not paint: ' + JSON.stringify(all));
  const clicked = await evalOnPage(`(() => {
    const node = [...document.querySelectorAll('button[role="tab"]')].find(b => b.textContent.includes('Zero Entropy Lab'));
    if (!node) return false;
    node.click();
    return true;
  })()`);
  if (!clicked) throw new Error('Repository tab was not clickable');
  const single = await retry('interval and C/V SVG after repository click', async () => {
    const value = await evalOnPage(`({
      count: document.querySelectorAll('svg[role="img"]').length,
      geometry: [...document.querySelectorAll('svg[role="img"]')].map(s => ({
        width: s.getBoundingClientRect().width,
        height: s.getBoundingClientRect().height,
        paths: s.querySelectorAll('polyline').length,
      }))
    })`);
    return value?.count === 2 ? value : null;
  });
  if (single.geometry.some(g => g.width <= 0 || g.height <= 0))
    throw new Error('Single repository SVG has zero size: ' + JSON.stringify(single));
  await cdp('Emulation.setDeviceMetricsOverride', {
    width: 390, height: 844, deviceScaleFactor: 1, mobile: true,
  });
  const mobile = await evalOnPage(`[...document.querySelectorAll('svg[role="img"]')].map(s => ({
    width:s.getBoundingClientRect().width,height:s.getBoundingClientRect().height
  }))`);
  if (mobile.length !== 2 || mobile.some(g => g.width <= 0 || g.height <= 0))
    throw new Error('Mobile SVG has zero size: ' + JSON.stringify(mobile));
  if (exceptions.length) throw new Error('Browser JS exceptions: ' + JSON.stringify(exceptions));
  console.log(JSON.stringify({
    outcome: 'BROWSER_CHART_RENDER_PASS',
    defaultComparison: all,
    singleRepository: single,
    mobile390px: mobile,
    runtimeExceptions: exceptions.length,
  }, null, 2));
} finally {
  if (ws && ws.readyState === WebSocket.OPEN) ws.close();
  chrome.kill('SIGTERM');
  rmSync(profile, { recursive: true, force: true });
}
