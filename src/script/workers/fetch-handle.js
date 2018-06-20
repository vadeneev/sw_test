const cacheOnlyApproach = (event) => {
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

const cacheFirstApproach = (event) => {
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

                    return response;
                }

                return fetchAndCache(event.request);
            }))
            
        console.log('here we are');
}

const networkFirstApproach = (event) => {
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

const fetchAndCache = request => {

    return fetch(request)
        .then(response => {
            const responseClone = response.clone();

            caches
                .open(CACHE_NAME)
                .then(cache => cache.put(request, responseClone));

            return response;
        });
}