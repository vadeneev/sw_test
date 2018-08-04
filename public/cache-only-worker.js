importScripts('service-worker.js');

const handleFetch = (event) => {
    console.log('cache only approach');
    event.respondWith(
        caches
            .match(event.request)
            .then(response => {
                // response would be undefined in case if request not found in storage

                // if we found it in cache
                // always return it
                // in that case we are able to update only with SW re-activation
                if (response) {
                    return response;
                }

                return fetchAndCache(event.request);
            })
    );
}