const CACHE_NAME = 'my-site-cache-v1';
const cacheWhitelist = [CACHE_NAME];
const urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
];

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log(`Service Worker deleting cache ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    console.log('Service Worker activated.');
});

self.addEventListener('install', function (event) {
    // Perform install steps
    console.log('Service Worker installing.');
});

self.addEventListener('fetch', function (event) {
    const url = new URL(event.request.url);

    // for dev-server purpose only
    if (url.origin == location.origin) {
        return;
    }

    console.log('fetch detected');
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        let responseToCache = response.clone();

                        console.log('get response in worker');
                        console.log(responseToCache);

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});