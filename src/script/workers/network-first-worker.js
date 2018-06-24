importScripts('service-worker.js');

const handleFetch = (event) => {
    console.log('network first approach');
    event.respondWith(
        fetchAndCache(event.request)
            .catch(() => {
                caches
                    .match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                    })
            })
    )
}