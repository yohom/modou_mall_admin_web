'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ccf80cdb44f8fa430056b416865bf6a7",
"/": "ccf80cdb44f8fa430056b416865bf6a7",
"main.dart.js": "ee4fa3a8e1655fd4461d1fd99ca8fbe3",
"favicon.png": "fb2cd7312397230872745990d1be4511",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f16af659d63730a6a1b9603138019a62",
".git/config": "c1829d78515ddbeca69fa697e99ee8f1",
".git/objects/0d/9cd16f9182259ce14fcd1b9a522d69bc9a6872": "4f983adee16de3af110516cb521ce0e8",
".git/objects/66/539b524171c597bcec24a3f65c8fbb56824955": "33ef8f703ac2a172b918e21080e78d41",
".git/objects/66/65b83e1eaa6ccbd7cb484c85a69d607696b81b": "08ab63eb17a7299ad84df88fc486ba1a",
".git/objects/66/46c6b6c8423ea000fe56e3d42843ca025e9aeb": "2bc8b9639bb75e6db6f3d607fc2200f9",
".git/objects/9e/a0678501d93e04be5b9e43524b19ab669e0beb": "e16735258ce65e21e1ffecfa3a35af97",
".git/objects/04/b48921beea2c0757ed45a5cef4b8b7b1d51c37": "71b6743d21edc7b6e48ec725ad08c010",
".git/objects/51/e246b74d9043ed6a1146580fcae2898ca888f8": "b53cc51c6107dc792976c733cf7cd070",
".git/objects/3d/3ff63e8a22a11d89b924cae5e9f20795783cc1": "d432df5575adf267e6d6655082a677a1",
".git/objects/67/efe6e19e314fe5c9cb2e53178b80e69d465192": "bdb37478d22868dc2014195b382d2283",
".git/objects/a3/65731c52a74d3430e4727067914c710e205c8f": "61fd8ea9e9c84b53e82c3daf55754848",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/0f43bc3d40c89e0883debd53661a6cc439a34a": "3ded30e1f9648f116751f22027dd14da",
".git/objects/d0/4819248a40dd3b4357ffb1b741bca58aa2193c": "f43da09724037263a2cd37c797ec0de3",
".git/objects/be/d7eb8beba722670c98f007f5dbc7021219c945": "cbd9334f39a5a6a34352d7fdfedf0934",
".git/objects/bd/15c7df59f0ce22e9dea44b4a2c2b5b9ee3270f": "dfd8ba847b4a3e86d06d4eff385b0a8d",
".git/objects/e2/09b6e4976e2181299ab7c95607a71b993afab3": "1ddcf45fa152ded9ef0f6f1d7e5386f6",
".git/objects/ee/78f31c31934a9838e04772b0ae607025f28f9c": "f3c1e4ad7535dca545ef46e9ffe49679",
".git/objects/f2/ab038f584f23ac69a06ccf6efc96e1df88815e": "15e74de4690dd2d4bfa69156bef5f53f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/0f432e09fb6763c87c0a755a7272197a74ef31": "05b26f878b10ca3e8411eb259e080c1d",
".git/objects/cf/e74bdb938639dc91998ac5c66d10cbb2a2838b": "f154249ed481123d7ed66414811d1efc",
".git/objects/e4/d178325cb7b4eec6f80534dd3161781c238b3c": "89c8cb0ede5ed1b08d99f2531a1e029f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c8/4ae5cc22ffb176f20d62c45b60d334ca4d1804": "a45255ca528a2a3c3b63e964115d5fd7",
".git/objects/4e/b9ad1f744405ab3dd777c2918170e783a7ae96": "98f9240824256a658871e92f4d906788",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/a5f8ac3af85f6ab87ec81a09f1006fb438cdef": "4a69f9455900396e43e6db88f59ad455",
".git/objects/29/e2f9cc4d926c47d938b516a251829b6add69aa": "b81d51b4ec828cc05a853095849981d4",
".git/objects/28/208c142220dbff6795325487beb0d3c9a682b0": "1e2edf46026bfcd8c885fc76f83be5cd",
".git/objects/8f/0ee78cd63dd7e32b009aed0e04b6876148f7a0": "0cc38cf7efe396fdbb92423d2e435dc8",
".git/objects/8a/fe2adee8a378711e17d361b7baa3220d8e65e8": "40d6447a7e3176d78f944d2dc805147f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/540d3ee389a031134a5da5e0489b0ff6c9e4c5": "fb995fcc738def41b75cf4e081028c45",
".git/objects/4d/ebd5f291298e06118541592dff1ddf7787e360": "03474878691efe622bc366905be2aad4",
".git/objects/75/eb974242aa731f885e8bab9b7cc7eb67c6e94d": "ca85388ce70a7b8ff92dcd9bc4b52a93",
".git/objects/72/68d4384adef6e7c1cd8f89f6dd9eefab9e9d31": "4badbf7bc69f9a4750be2ed39dc40400",
".git/objects/44/b36d73fb3dac67f225ab8330dd8609da89ed9c": "b9bfe751771cd158f172d0eda22ab6fe",
".git/objects/44/8eced16579e20963bcb81bf5a3c8d0b2c4dda0": "435b134a312f5e1408b84e4bb1bcf42c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bbc492b9405367f36cdd9956e58ec9eb73fbf4": "a8bb1a9bbf252be5dd3f9a5c6231fe8c",
".git/objects/00/6bf62002040c2b6485d6ec8e665678ded0d219": "fb0075b00a5b6f44436dfbf4edd74c37",
".git/objects/6e/2bf27084b842e20a78d09c534a83a68804f528": "149b4682fc06fe2fbf8f90c1b0645f65",
".git/objects/6e/ffa41f3a1524743c2c3e967b4dfd1d3d96f007": "5c7bde676dc7500d165c05a3eaed5fd0",
".git/objects/9a/6aad4d9443b8c45104927b3a2bd1da61d8eda6": "ac62459b9fd389e5338a009e235d1846",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/7d70343a8e0b222a0234f62b71249bcf8ee767": "40be1fee5c9ff75240592f910caf2a9c",
".git/objects/91/c372395a0b31add9265a1c06d61be3ae762ba2": "2dd910ce37ff7c237286f725a74d45e5",
".git/objects/62/a83721cb3271912d8583eab6390a871f17016e": "a62e3f2b0fdb92cd07f2bbbcd8c01d3d",
".git/objects/98/65504278f17bca5c692361d2a842f86aa0e819": "e1337321646458391721767ab8b550cf",
".git/objects/5e/fac89854d74cddcd3ed4ad0041c7681a18c509": "c0d07f9187d74dfef0562688914b1c84",
".git/objects/5b/a7a804ca8cd3a42a8507178b1822b5d276ccb2": "00e43637ab2250656f0614a909c35b25",
".git/objects/6c/cd6458ae1ebc849c1ba5b95637cfc7f46085db": "65ea7e3693ed767f3c9cf98e8b1f7763",
".git/objects/39/6cef9586c6a260f65d73212ae252578113d863": "1579be22cb86513bd7b089b8f028d042",
".git/objects/63/f90fa09f28a43c93fd501187ea3d885bf60078": "354406957c0bf61ef40b12f4b57ff7d7",
".git/objects/0a/dae8492fedd1345bd461597e2178bc221f70a9": "1dc38139eece9b0d4d4b63905e5ef741",
".git/objects/0a/4ea7839b5a71653397e46dce5c325db7b26aaa": "c051e04d411a8a10cebc66b4103ac937",
".git/objects/d4/b623ca44933325e8325cf5ff65b99ae2fbceb9": "f2db727a0a8328a594c9e56572b6aae1",
".git/objects/d4/0883ce096447739f457a17bf761f3a10dbbae0": "2c8c32a084c0ff2238f7471ad37318dc",
".git/objects/b8/5309fab4bd0376ce5964e10ea9e09198a44060": "d3e03b9ae276caa67147818e6eb95f9e",
".git/objects/b8/ce9f9877eeb3cefed5316f5187b3b580ac9a8d": "ae6f7cdce10b7cea7a26f096e088814e",
".git/objects/dc/0bab11718f328786e137a4d5c4fa12fd6cd66a": "fdc0f422f673b16f2531f698bff57ca3",
".git/objects/dc/dd1fde63c837dcf85cd96fd46dc8d6e344bd4b": "4591b6a7c982a927b2b93f1adf97da61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/16dc6c67dfeb65c0f9a33f4c3ec6fafda3f04c": "16bbd78a74ef9b4e5456d44a07365332",
".git/objects/a1/0103d8b12a7981222099586eaafd1ba1ddf085": "92d300d6e157e241071a1b8b96dcb58a",
".git/objects/a1/5f20dd4fae8eecdf3b8852d83a8c8f285b0e77": "65ccf0fb7b9fa5c89fcdabea77ca0db2",
".git/objects/ea/7bd1c1aa80f5f7de68a7761039e3aea5c4e298": "3f91a6671c028895d14136a554f46815",
".git/objects/cc/b079e030055610067d8f574417bc4a105c369a": "be41a158f486de2f0d28fde747521f08",
".git/objects/f9/98b90fe947b061413af34d69bc065ab3be0b7e": "753090af89e50545f7ab9992658f26e6",
".git/objects/f7/b979a9193cb50e6e7b081524bb7f6b35744013": "c63b801ef7179c01a4774b0bdb866a85",
".git/objects/c5/767d0dcbf0f94aa1f083908416ebd9c34d93d4": "c5cf814ae6c3e0d0d2f0da16df524538",
".git/objects/c5/2707913d8e778a19651bf01125816b67f0192a": "67bd0ccd2a77b4b7f4a51e17ae81efdd",
".git/objects/f8/6025a70430e027d1aaf060a3be1bcecd5162d4": "dc7c298f61a1fb841d6d08b8d555d411",
".git/objects/ce/26fbf26cedc7e6edff4e6626c6df42ad485340": "6f93f8ce36d87fa120414b6da66e11f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/47ebb9a2058ac98a5816c430bf3566f7803a95": "8a1cc3b2d5c8fad7fdeacfd45375a79c",
".git/objects/48/c2a1d3e63076c55f7cc2f03c651abf64e3ebea": "368f505b2755990939617d6ccd26da39",
".git/objects/84/9c2bce6146b38dd6dfb4e876aa6096796b8e0b": "d27db9ae49b6e22280f9a6913d03427e",
".git/objects/4f/10dce75f58b9c01cb515dd896d993a3930594a": "5990a8468f7e7dced341d476bbc703a3",
".git/objects/12/a2a968c84000b2c713cfa5574c9723322b4a14": "87add6dd61bca11862a0f01c76bf6d2c",
".git/objects/2e/e520437658662cc536a92333761dfd4d168622": "3eff2199ecbe9250e22b297d8d2ed33e",
".git/objects/78/57e5d3a9eb6fa2e3b41849e7478d9aa2316adb": "ced1045c567f54369b1c97d1c0014d27",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7a/b304bed9fe81252e7c854d8ffddb7c428d418b": "7bb2531ad0fbbbb8a687bdac5abc8d80",
".git/objects/14/2963e0663a7e0c0d871869ffbc804a099b8081": "d9f62949482578ed494d2e58a23fa721",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e897a6a6cfa1399931770e73b999001",
".git/logs/refs/heads/master": "3e897a6a6cfa1399931770e73b999001",
".git/logs/refs/remotes/gitee/master": "407bcff3a30f1d62527c5ac62f40027f",
".git/logs/refs/remotes/github/master": "ffe20eb91444a046da473d3fc6bb3526",
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
".git/refs/heads/master": "61e769d66621601620ca000b477e60d9",
".git/refs/remotes/gitee/master": "61e769d66621601620ca000b477e60d9",
".git/refs/remotes/github/master": "1bf941f6fb19f5454565fdf332d1c41e",
".git/index": "0aef43c9ba73b2569925e1c4a6ee3eb5",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "2e2b3547f2ff0d39324a63d0f995530b",
".git/sourcetreeconfig": "487112be6706e8e3f7f94689291fb4f6",
"assets/images/category.png": "b1b1fa85813f03577e745945804489fd",
"assets/images/recommend.png": "ecad9c1b2cd86e07654c4090c733f03a",
"assets/images/category_selected.png": "fde5fa3093eff04c87a0d5966716f990",
"assets/images/discount.png": "5aeb3c798400a69fc6e4559db316b5bd",
"assets/images/commodity_selected.png": "139f70ad8656b0fd2eb1124a5b97dc00",
"assets/images/discount_selected.png": "2d127b67d8e0fdadee4b82b48bd3702b",
"assets/images/recommend_selected.png": "e08d06c241faac8540d49b2a7b918282",
"assets/images/commodity.png": "29633d37f7c595e77177cd5578cd4849",
"assets/images/launch_bg_home.png": "3571e81f53ea53d87ca9d23ddff360a4",
"assets/AssetManifest.json": "2bfd32161199c29c443a04bd8a1fca45",
"assets/NOTICES": "dff5389fee45145df88adf668511f3fd",
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
