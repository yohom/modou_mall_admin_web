'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "82e0fae0b81bbcc1cddc3882ab15798d",
"/": "82e0fae0b81bbcc1cddc3882ab15798d",
"main.dart.js": "942722e96f4c8701054989a003e82dc5",
"favicon.png": "fb2cd7312397230872745990d1be4511",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f16af659d63730a6a1b9603138019a62",
".git/config": "249be786bae5afda0317e4577957edfe",
".git/objects/66/65b83e1eaa6ccbd7cb484c85a69d607696b81b": "08ab63eb17a7299ad84df88fc486ba1a",
".git/objects/04/b48921beea2c0757ed45a5cef4b8b7b1d51c37": "71b6743d21edc7b6e48ec725ad08c010",
".git/objects/51/e246b74d9043ed6a1146580fcae2898ca888f8": "b53cc51c6107dc792976c733cf7cd070",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/0f432e09fb6763c87c0a755a7272197a74ef31": "05b26f878b10ca3e8411eb259e080c1d",
".git/objects/e4/d178325cb7b4eec6f80534dd3161781c238b3c": "89c8cb0ede5ed1b08d99f2531a1e029f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/4e/b9ad1f744405ab3dd777c2918170e783a7ae96": "98f9240824256a658871e92f4d906788",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/a5f8ac3af85f6ab87ec81a09f1006fb438cdef": "4a69f9455900396e43e6db88f59ad455",
".git/objects/29/e2f9cc4d926c47d938b516a251829b6add69aa": "b81d51b4ec828cc05a853095849981d4",
".git/objects/8a/fe2adee8a378711e17d361b7baa3220d8e65e8": "40d6447a7e3176d78f944d2dc805147f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/ebd5f291298e06118541592dff1ddf7787e360": "03474878691efe622bc366905be2aad4",
".git/objects/75/eb974242aa731f885e8bab9b7cc7eb67c6e94d": "ca85388ce70a7b8ff92dcd9bc4b52a93",
".git/objects/72/68d4384adef6e7c1cd8f89f6dd9eefab9e9d31": "4badbf7bc69f9a4750be2ed39dc40400",
".git/objects/44/b36d73fb3dac67f225ab8330dd8609da89ed9c": "b9bfe751771cd158f172d0eda22ab6fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bbc492b9405367f36cdd9956e58ec9eb73fbf4": "a8bb1a9bbf252be5dd3f9a5c6231fe8c",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/7d70343a8e0b222a0234f62b71249bcf8ee767": "40be1fee5c9ff75240592f910caf2a9c",
".git/objects/91/c372395a0b31add9265a1c06d61be3ae762ba2": "2dd910ce37ff7c237286f725a74d45e5",
".git/objects/98/65504278f17bca5c692361d2a842f86aa0e819": "e1337321646458391721767ab8b550cf",
".git/objects/39/6cef9586c6a260f65d73212ae252578113d863": "1579be22cb86513bd7b089b8f028d042",
".git/objects/63/f90fa09f28a43c93fd501187ea3d885bf60078": "354406957c0bf61ef40b12f4b57ff7d7",
".git/objects/dc/dd1fde63c837dcf85cd96fd46dc8d6e344bd4b": "4591b6a7c982a927b2b93f1adf97da61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/0103d8b12a7981222099586eaafd1ba1ddf085": "92d300d6e157e241071a1b8b96dcb58a",
".git/objects/ea/7bd1c1aa80f5f7de68a7761039e3aea5c4e298": "3f91a6671c028895d14136a554f46815",
".git/objects/f7/b979a9193cb50e6e7b081524bb7f6b35744013": "c63b801ef7179c01a4774b0bdb866a85",
".git/objects/f8/6025a70430e027d1aaf060a3be1bcecd5162d4": "dc7c298f61a1fb841d6d08b8d555d411",
".git/objects/ce/26fbf26cedc7e6edff4e6626c6df42ad485340": "6f93f8ce36d87fa120414b6da66e11f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c2a1d3e63076c55f7cc2f03c651abf64e3ebea": "368f505b2755990939617d6ccd26da39",
".git/objects/84/9c2bce6146b38dd6dfb4e876aa6096796b8e0b": "d27db9ae49b6e22280f9a6913d03427e",
".git/objects/4f/10dce75f58b9c01cb515dd896d993a3930594a": "5990a8468f7e7dced341d476bbc703a3",
".git/objects/12/a2a968c84000b2c713cfa5574c9723322b4a14": "87add6dd61bca11862a0f01c76bf6d2c",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e72a03e76f73b55df8b496fb9fbbf38",
".git/logs/refs/heads/master": "9e72a03e76f73b55df8b496fb9fbbf38",
".git/logs/refs/remotes/github/master": "21946c20ace47642e08418c4d2ff6803",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "10e0cdee820935df9b4fd7efa4e98944",
".git/refs/remotes/github/master": "10e0cdee820935df9b4fd7efa4e98944",
".git/index": "26e810c2a51b06c77afe3e2408c35cce",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/sourcetreeconfig": "c8affd1a7aaea6242b0f0998e642be9e",
"assets/images/launch_bg_home.png": "3571e81f53ea53d87ca9d23ddff360a4",
"assets/AssetManifest.json": "ed1c536dc3652f25f55f3c0c1ba9826d",
"assets/NOTICES": "ae962827aefead52c0d5dd8bde993328",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
