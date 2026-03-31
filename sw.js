self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Para esta versión básica, simplemente dejamos que haga las peticiones normales a internet.
    // Esto es lo mínimo requerido para que Chrome ofrezca la opción de instalar.
});
