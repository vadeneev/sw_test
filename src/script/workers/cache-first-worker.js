importScripts('service-worker.js');

const handleFetch = (event) => {
    // in that case we may prefer to show any billboards with fresh update, or simple wait for N+1 to show fresh fetch.
    console.log('cache first approach');
    event.respondWith(

        caches
            .match(event.request)
            .then(response => {
                if (response) {
                    fetchAndCache(event.request);
                    // need to push update message
                    // or not to push it at all
                    console.log('cached request');
                    
                    return response;
                }                
                console.log('NOT cached request');

                return fetchAndCache(event.request)
                    .then((response) => { 
                        console.log('Extra request for first visit');
                        fetchAndCache(event.request); 

                        return response;
                    });
            }))
                    
}