// code based on wittr project from Udacity
const cacheName = 'restaurant-reviews-v1';


// service worker install event, register the cache
self.addEventListener('install', function(evt) {
    evt.waitUntil(caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/data/restaurants.json',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/dbhelper.js',
                '/css/styles.css',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
            ]);
        }));
});

self.addEventListener('fetch', function(evt) {
	// console.log("testing the fetch");
    console.log(evt.request);
    evt.respondWith(caches.match(evt.request).then(function(resp){
    	return resp || fetch(evt.request);
    }))
    // event.respondWith(caches.match(event.request).then(function(response) {
        // return response || fetch(event.request);
    // }));
});