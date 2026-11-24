// Invoice Builder app helper (service worker).
// It keeps a copy of the page and icons so the installed app opens even on a weak connection.
// It always asks the network first, so a new version shows as soon as it's online.
// GitHub (your invoices) is never cached here; the page handles that itself.
const VERSION = "1.29.0";
const CACHE = "invoices-" + VERSION;
const CORE = ["./", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon-32.png"];
const PDF_LIB = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("invoices-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const url = new URL(r.url);
  // The PDF engine from cdnjs: keep a copy so PDFs still work offline.
  if (r.url.startsWith(PDF_LIB)) {
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => {
      if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); }   // a plain <script> load comes back "opaque"
      return res;
    })));
    return;
  }
  if (url.origin !== self.location.origin) return;            // GitHub API, fonts, Google: straight to the network
  const isPage = r.mode === "navigate";
  const net = isPage ? fetch(url.pathname, { cache: "no-store", credentials: "same-origin" }) : fetch(r);
  e.respondWith(net.then(res => {
    if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(isPage ? "./" : r, c)); }
    return res;
  }).catch(() => caches.match(isPage ? "./" : r, { ignoreSearch: true }).then(hit => hit || caches.match("./"))));
});
