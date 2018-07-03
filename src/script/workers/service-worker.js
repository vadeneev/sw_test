const CACHE_NAME = 'my-site-cache-v1';
const cacheWhitelist = [CACHE_NAME];
const  API_URL = 'http://thecatapi.com';

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // Become available to all pages
    console.log('Service Worker activated.');
});

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
    // Perform install steps
    // place for caching static resources
    // html, img, style, script, stc
    console.log('Service Worker installed.');    
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    if (url.origin !== API_URL) {
        return;
    }
    //
    handleFetch(event);
    //
});

const fetchAndCache = request => {

    return fetch(request)
        .then(response => {
            const responseClone = response.clone();

            caches
                .open(CACHE_NAME)
                .then(cache => cache.put(request, responseClone));

            return response;
        });
}