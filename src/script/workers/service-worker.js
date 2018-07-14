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
    console.log(url.origin);
    if (url.pathname !== API_URL) {
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
            
            if(response.ok) {
                caches
                .open(CACHE_NAME)
                .then(cache => cache.put(request, responseClone));
            }

            return response;
        });
}

const fromCache = (request) => {
    return caches
        .match(request)
        .then(response => {
            return response || Promise.reject('request-not-in-cache');
        })    
}

const fallBack = () => {
    let data = {values: [ { "id": "7f7-fallback", "href": "https://i.pinimg.com/736x/5c/2a/e5/5c2ae5d62af086443da2720a40ab327f--e-cards-holidays.jpg" }  ]};
    let newResponse = new Response(JSON.stringify(data), { headers: {
        'Content-Type': 'application/json'
      }});

    console.log('fallback');
    return Promise.resolve(newResponse);
}