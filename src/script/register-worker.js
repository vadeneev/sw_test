export const registerWorker = (type = 'cacheFirst') => {
    const workerPath  = '/' + type;
    let workerUrl;

    switch (type) {
        case 'networkFirst':
            workerUrl = '/network-first-worker.js';
            break;
        case 'cacheOnly':
            workerUrl = '/cache-only-worker.js';
            break;
        default:
            workerUrl = '/cache-first-worker.js';
            break;
    }

    if ('serviceWorker' in navigator) {
        document.addEventListener('DOMContentLoaded', function () {            
            navigator.serviceWorker.register(workerUrl, { scope: workerPath }).then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}