self.addEventListener("install", (event) => {
  console.log("Install event!");
});

self.addEventListener("activate", (event) => {
  console.log("Activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
});

// Precaching resources
const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "app/css/main.css",
  "app/css/mdb.dark.min.css",
  "app/css/mdb.dark.min.css.map",
  "app/css/mdb.dark.rtl.min.css",
  "app/css/mdb.dark.rtl.min.css.map",
  "app/css/mdb.rtl.min.css",
  "app/css/mdb.rtl.min.css.map",
  "app/js/index.js",
  "app/js/mdb.min.js",
  "app/js/mdb.min.js.map",
  "app/img/about/about640x427.jpg",
  "app/img/about/baking-with-chocolate-590x755.jpg",
  "app/img/about/best-cbd.webp",
  "app/img/about/club_feco.webp",
  "app/img/about/honey-jar-with-wooden-honey-dipper_23-2149442335.webp",
  "app/img/about/juiceGlass.webp",
  "app/img/about/shots_selection.webp",
  "app/img/about/smokeless_about.webp",
  "app/img/about/topicals_aboutPage.jpg",
  "app/img/carousel/cannabisPlant.webp",
  "app/img/carousel/gummies.jpg",
  "app/img/carousel/tincturePipe.webp",
  "app/img/cbd_oils/Tincture_Van_1200mg__65374.webp",
  "app/img/chocolates/VODKA & CRANBERRIES 500MG.webp",
  "app/img/contender/CONTENDER_MANGO400x280.webp",
  "app/img/gummies/gum_one.webp",
  "app/img/gummies/gummies_batch.webp",
  "app/img/honey/HONEY 500MG.webp",
  "app/img/logo/IMG_20230329_145702.webp",
  "app/img/logo/leaf.png",
  "app/img/logo/logo75x75.png",
  "app/img/logo/logo95x95.png",
  "app/img/logo/logo113x113.png",
  "app/img/logo/logo128x128.png",
  "app/img/logo/logo144x144.png",
  "app/img/logo/logo152x152.png",
  "app/img/logo/logo192x192.png",
  "app/img/logo/logo384x384.png",
  "app/img/logo/logo512x512.png",
  "app/img/shots/FECO_SHOTS_CHERRY_LITE.webp",
  "app/img/smokeless/pineappleSmokeless.webp",
  "app/img/topicals/topical-rub.jpg",
  "app/img/vape/vape_disp.webp",
  "app/img/vape/vape_in.png",
  "app/img/vape/vape_small.webp",
];

self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});
// Responding with only cached resources
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});
// Implementing cache first
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request)).then((cachedResponse) => {
    return cachedResponse || fetch(event.request);
  });
});
