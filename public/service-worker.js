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
    let data = {values: [ { "id": "FALLBACK", "href": "cats/fallback.svg" }  ]};
    let newResponse = new Response(JSON.stringify(data), { headers: {
        'Content-Type': 'application/json'
      }});

    console.log('fallback');
    return Promise.resolve(newResponse);
}
