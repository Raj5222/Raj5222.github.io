// High-Performance Offline Service Worker for Portfolio PWA
const CACHE_NAME = "portfolio-offline-v1";
const MEDIA_CACHE_NAME = "portfolio-media-v1";

const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/Raj-logo.ico",
  "/Raj-logo.jpg",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
];

// Install Event: Pre-cache App Shell Core Assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("Service Worker pre-cache partial warning:", err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Cleanup Stale Cache Versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== MEDIA_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Offline-First & Stale-While-Revalidate Strategy
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests or browser extension requests
  if (request.method !== "GET" || !url.protocol.startsWith("http")) {
    return;
  }

  // Strategy for Images & SVGs: Cache-First with Network Fallback
  if (
    request.destination === "image" ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif|ico)$/i) ||
    url.hostname.includes("raw.githubusercontent.com") ||
    url.hostname.includes("githubusercontent.com")
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              const responseClone = networkResponse.clone();
              caches.open(MEDIA_CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Offline fallback for images
            return cachedResponse || Response.error();
          });
      })
    );
    return;
  }

  // Strategy for Application Assets & Data (Stale-While-Revalidate / Network-First with Cache Fallback)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return cachedResponse || Response.error();
        });

      return cachedResponse || fetchPromise;
    })
  );
});
