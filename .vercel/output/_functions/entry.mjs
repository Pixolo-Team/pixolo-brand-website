import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter__8cT89gZ.mjs';
import { manifest } from './manifest_qKIYvFPU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blogs/_pagetitle_.astro.mjs');
const _page4 = () => import('./pages/careers.astro.mjs');
const _page5 = () => import('./pages/case-studies/_pagetitle_.astro.mjs');
const _page6 = () => import('./pages/case-studies.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/leads/login.astro.mjs');
const _page9 = () => import('./pages/leads.astro.mjs');
const _page10 = () => import('./pages/portfolio/_pagetitle_.astro.mjs');
const _page11 = () => import('./pages/portfolio.astro.mjs');
const _page12 = () => import('./pages/robots.txt.astro.mjs');
const _page13 = () => import('./pages/services/_title_.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blogs/[pageTitle]/index.astro", _page3],
    ["src/pages/careers.astro", _page4],
    ["src/pages/case-studies/[pageTitle]/index.astro", _page5],
    ["src/pages/case-studies/index.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/leads/login.astro", _page8],
    ["src/pages/leads/index.astro", _page9],
    ["src/pages/portfolio/[pageTitle]/index.astro", _page10],
    ["src/pages/portfolio/index.astro", _page11],
    ["src/pages/robots.txt.ts", _page12],
    ["src/pages/services/[title]/index.astro", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "34abd8e4-3a5a-4d04-9c88-135aff35966a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
