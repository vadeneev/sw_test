importScripts('service-worker.js');

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