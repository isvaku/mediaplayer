const VERSION = "v1";

self.addEventListener('install', event => {	
	event.waitUntil(precache())
});

self.addEventListener('fetch', event =>{	
	const request = event.request;
	
	if(request.method !== 'GET') {
		return;
	}

	event.respondWith(cachedResponse(request));

	event.waitUntil(response)
})

async function precache() {	
	const cache = await caches.open(VERSION);
	return cache.addAll([
		'/',
		'../public/index.html',
		'/src/index.js',
		'/src/MediaPlayer.js',
		'/src/plugins/AutoPlay.js',
		'/src/plugins/AutoPause.js',
		'/src/styles/index.css',
		'/src/assets/videos/BigBuckBunny.mp4',
	]);
}

async function cachedResponse(request) {	
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request);
}

async function updateCache(request) {	
	const cache = await caches.open(VERSION);
	const response = await caches.match(request);
	return cache.put(request, response);
}