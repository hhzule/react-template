const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html',
                    //'API goes here',
                    ];

const self = this;

//activate SW
self.addEventListener('activate', (event) => {
        const cacheWhiteList = [];
        cacheWhiteList.push(CACHE_NAME);

        event.waitUntill(
            caches.keys().then((cacheNames)=>Promise.all(
                cacheNames.map((cacheName)=>{
                    if(!cacheWhiteList.included(cacheName)){
                        return caches.delete(cacheName);
                    }
                })

            ) )
        )

});

//installation
self.addEventListener('install', (event) => {
event.waitUntill(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log(' open');
        return cache.addAll(urlsToCache);
    })
    )
});

//listen for request
self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request)
            .then((response) => {
               return  response || fetch(event.request) 
               
            })
        )
});

