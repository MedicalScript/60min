const CACHE_NAME = 'devocional-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si el archivo ya está en la memoria del teléfono, lo saca de ahí. Si no, lo busca en internet.
                return response || fetch(event.request);
            })
    );
});
