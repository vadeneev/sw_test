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
    event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
        return cache.addAll(['cats/fallback.svg?cache']);
    })
    .then(()=> {
        return self.skipWaiting()
    }));
    // Perform install steps
    // place for caching static resources
    // html, img, style, script, stc    
    console.log('Service Worker installed.');
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    if (!url.href.includes('cache')) {
        return;
    }
    console.log(`Handle fetch in worker for ${url.pathname}`);   
    //
    handleFetch(event);
    //
});

const handleFetch = (event) => {
    // in that case we may prefer to show any billboards with fresh update, or simple wait for N+1 to show fresh fetch.
    console.log('cache first approach');                
    event.respondWith(
        caches
            .match(event.request)
            .then(response => {
                if (response) {
                    if (event.request['destination'] && event.request.destination === 'image') {
                        console.log('Serve IMAGE from CACHE');
                        return response;
                    }
                    fetchAndCache(event.request)
                        
                        // fetch first img
                        .then(extraCachingForImg);
                        // end fetch first img

                    // need to push update message
                    // or not
                    console.log('cached request');
                    
                    return response;
                }                
                console.log('NOT cached request');

                return fetchAndCache(event.request)
                    .then((response) => {
                        if (!response.ok) {
                            return fromCache(event.request);
                        }
                        console.log('Extra request for first visit');
                        fetchAndCache(event.request)

                            // fetch first img
                            .then(extraCachingForImg);
                            // end fetch first img


                        return response;                        
                    })
                    .catch(() => {
                        return fallBack();
                    })
            }))
                    
}

const extraCachingForImg = response => {
    
    const url = new URL(response.url);

    if (url.pathname.includes('cache')) {
        response.json()
            .then(data => handleJSONresponse(data))
            .catch((error)=>{console.log(error)});
    }
}


const handleJSONresponse = (data) => {
    if ('values' in data && data.values.length) {
        const imgURL = data.values[0].href;
        //return
        console.log(imgURL);
        //fetch(imgURL);

        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([`${imgURL}?cache`]);
        });
        console.log(`Serve to cache ${imgURL}`);
    }    
}