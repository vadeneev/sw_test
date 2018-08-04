//export const API_URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=50';
export const API_URL_CACHED = '/api/cats/cached';
export const API_URL = '/api/cats';
export const API_TOGGLE = '/api/busy';
export const API_HEALTH = '/api/health';
export const XML_SEARCH = 'image';

export const TITLES = {
    cacheFirst: {first: 'No Cache (N)', second: 'Cache (N+1)'},
    networkFirst:  {first: 'No Cache', second: 'Cache Fallback'},
};