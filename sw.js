// Service Worker para Inventario PWA
// Permite que la app funcione sin conexión a internet una vez instalada

const CACHE_NAME = 'inventario-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './etiquetas.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar: guarda los archivos principales en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activar: limpia cachés viejos de versiones anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: intenta red primero, si falla usa caché (para que siempre tengas la versión más reciente cuando hay internet)
self.addEventListener('fetch', (event) => {
  // Solo manejamos peticiones GET del mismo origen
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Actualiza la caché con la respuesta fresca
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Sin internet: usa lo que esté en caché
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
  );
});
