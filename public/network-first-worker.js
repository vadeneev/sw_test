importScripts('service-worker.js');

const CACHE_NAME = 'my-site-cache-v1';
const cacheWhitelist = [CACHE_NAME];
const  API_URL = '/api/cats/cached';
 
self.addEventListener('activate', function (evt) {
    // `self.clients.claim()` allows the service worker to start intercepting
    // requests immediately. In addition to `self.skipWaiting()` it's needed to
    // allow serving fallbacks from the beginning.
    evt.waitUntil(self.clients.claim());
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
    if (!url.pathname.includes('cache') && !url.search.includes('cache')) {
        return;
    }
    console.log(`Execute fetch in worker for ${url.pathname}`);    
    //
    handleFetch(event);
    //
});

const handleFetch = (event) => {
    console.log('network first approach');
    event.respondWith(
        fetchAndCache(event.request)
        .then(response => {
            if(!response.ok) {
                return fromCache(event.request);
            }

            return response;
        }) 
        .catch(() => {
            return fallBack();
        })
    )
}