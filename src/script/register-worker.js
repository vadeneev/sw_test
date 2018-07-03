export const registerWorker = (type = 'cacheFirst') => {
    const workerPath = '/' + type;
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
        if (document.readyState === 'complete') {
            proceedRegister(workerUrl, workerPath);
        } else {
            document.addEventListener('DOMContentLoaded', () => proceedRegister(workerUrl, workerPath));
        }
    }
}

const proceedRegister = (workerUrl, workerPath) => {
    navigator.serviceWorker.register(workerUrl, { scope: workerPath })
        .then((registration) => { console.log('ServiceWorker registration successful with scope: ', registration.scope); })
        .catch((err) => { console.log('ServiceWorker registration failed: ', err); });
}