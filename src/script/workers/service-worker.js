importScripts('fetch-handle.js', 'push-handle.js');

const CACHE_NAME = 'my-site-cache-v1';
const cacheWhitelist = [CACHE_NAME];
const urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
];

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
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

self.addEventListener('install', (event) => {
    // Perform install steps
    // place for caching static resources
    // html, img, style, script, stc
    console.log('Service Worker installed.');
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    if (url.origin === location.origin) {
        return;
    }

    cacheFirstApproach(event);
    //cacheOnlyApproach(event);
    //networkFirstApproach(event);
});

self.addEventListener('push', event => {
    console.log(event);

    var notification = new Notification('ALARMA!', {
        body: 'Notifications are nice',
        tag: 'simple-push-demo-notification',
        //icon: icon
    });
});