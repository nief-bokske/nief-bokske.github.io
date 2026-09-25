/* Service worker 't Nief Bokske — cache-first met netwerk-fallback.
   Verhoog het versienummer in CACHE bij ELKE upload, ook bij een testupload:
   een geïnstalleerde app kijkt enkel naar deze naam. Blijft ze gelijk, dan ziet
   de browser geen nieuwe service worker, installeert niets, en blijft ze de
   oude bestanden uit de cache tonen — ook na "Zoek update & herlaad".
   Nooit verlagen: een nummer dat al eens op een toestel stond, is opgebruikt. */
const CACHE = "bokske-v27";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  // Alles van een andere oorsprong (het doorsturen naar de centrale iPad) gaat
  // rechtstreeks naar het net: niet via de cache, en er wordt nooit iets van
  // gecached. Dat staat hier bovenaan i.p.v. verderop bij het wegschrijven,
  // zodat de belofte in de structuur zit en niet in een voorwaarde.
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(event.request).then((res) => {
          // eigen oorsprong is hierboven al gegarandeerd
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return res;
        })
    )
  );
});
