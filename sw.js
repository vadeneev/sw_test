var version = '2018-7-4-4:50:55';

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed version', version);
  event.waitUntil(
    self.skipWaiting
   );
  
});

// `onactivate` is usually called after a worker was installed and the page
// got refreshed. Since we call `skipWaiting()` in `oninstall`, `onactivate` is
// called immediately.
self.addEventListener('activate', function(event) {
  event.waitUntil(
       self.clients.claim
    )
  
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
});
