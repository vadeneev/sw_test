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
    let data = {values: [ { "id": "7f7-fallback", "href": "https://i.pinimg.com/736x/5c/2a/e5/5c2ae5d62af086443da2720a40ab327f--e-cards-holidays.jpg" }  ]};
    let newResponse = new Response(JSON.stringify(data), { headers: {
        'Content-Type': 'application/json'
      }});

    console.log('fallback');
    return Promise.resolve(newResponse);
}
