'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e445e3ba9ab6255ff71cb5bbc0a2e6f3",
"version.json": "5e7d1d368b351d28c12e2d2b31956e62",
"index.html": "b1de2ddd94c1950efdb4262b8e0e2138",
"/": "b1de2ddd94c1950efdb4262b8e0e2138",
"main.dart.js": "e2c1532877d8902086db694f03f1cbe3",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c316f685897c89b8ab082c73423566e",
"assets/AssetManifest.json": "f84781b115d2c119271b1d47c99e21c7",
"assets/NOTICES": "770bc24da115f048a71578fd6728f779",
"assets/FontManifest.json": "b69aaa29e5c151c88a745ff5ef6f626c",
"assets/AssetManifest.bin.json": "ab2e32c85604acd59ef936989cba4819",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7105c2c9079adfb26c6d7d1bda7b85eb",
"assets/fonts/MaterialIcons-Regular.otf": "885ce55fe0e1d5b09f75144997093bbf",
"assets/assets/empty2.png": "2a421cca6e54841fcb416e5285b3d5ab",
"assets/assets/drawer3.png": "6cf320f9bb10f65b667768c31a82ba81",
"assets/assets/drawer2.png": "c6f2b76479e7bc48d37de2bd97783579",
"assets/assets/about_cafe.png": "0804d37e5f4e8d31f0197df8405993ed",
"assets/assets/drawer1.png": "6c9a577eb1b32c4a7ef63ca3c5634eeb",
"assets/assets/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/regulations.png": "d0fa264f01a270a41d85783b05968300",
"assets/assets/drawer5.png": "055e93ecff7e2a4e624b4c8b5a1b077d",
"assets/assets/drawer4.png": "445960024a90518aafcd89cce7ccbf9d",
"assets/assets/instagram.png": "15e54a262ae6ef2d9460d25415c032e3",
"assets/assets/cafe.jpg": "09f84024ae5439e170cde7995e419a28",
"assets/assets/empty.png": "7f36530c06340ff4a0998bcaed147635",
"assets/assets/map.png": "14699aa7405a5540f2da8b6645cdb653",
"assets/assets/burger_menu.png": "b2e103ff67320b4c1ec8f1f628c34c9a",
"assets/assets/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/search.png": "413a3d7e03b308aeba2939cbd7ffd1a2",
"assets/assets/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/heart.png": "5ce185ab98c9a83c504980bfafaefb6b",
"assets/assets/photo.png": "a8dab692dce49ec75ab3fd1fe6e36544",
"assets/assets/food.png": "3f25111a8445115b136c638d7a7ea0f4",
"assets/assets/switch.png": "643f67555f5e26879b742159ffdd0510",
"assets/assets/privacy_policy.png": "81e4fd2b8aafbd38feb507c5574fae5b",
"assets/assets/exit.png": "33c7c455fe7db67f1616457a21f3ac11",
"assets/assets/bg_grid.png": "b78c5cd7c6c94e200f3ab8af541baddc",
"assets/assets/whatsapp.png": "94ba37c7203def9d188f7e0c5ddfd644",
"assets/assets/facebook.png": "386193284804c1aabcae4dd19f271e02",
"assets/assets/vector2.png": "1cd8c2f6db6b1fd951f0d6873a36ce5e",
"assets/assets/images.png": "4e84f50f15d0113909884003ee8369c4",
"assets/assets/vector1.png": "7dc7931fd5d49a4e16037bded75b2c74",
"assets/assets/full.png": "edb0b211d7aea5ca40f2a12859a23f0a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
