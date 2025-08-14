const CACHE_NAME = "secura-app-cache-v1";
const urlsToCache = [
  "/",
  "index.html",
  "/offline.html",
  "/favicon.svg",
  "/icon.png",
  "/manifest.json",
  "/assets/css/index.css",
  "/icons/icon-32x32.png",
  "/icons/icon-96x96.png",
  "/icons/icon-192x192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});
