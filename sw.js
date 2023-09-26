self.addEventListener("install", (event) => {
  console.log("Install event!");
});

self.addEventListener("activate", (event) => {
  console.log("Activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
});


const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "app/css/main.css",
  "app/css/mdb.dark.min.css",
  "app/css/mdb.dark.min.css.map",
  "app/css/mdb.dark.rtl.min.css",
  "app/css/mdb.dark.rtl.min.css.map",
  "app/css/mdb.min.css",
  "app/css/mdb.min.css.map",
  "app/css/mdb.rtl.min.css",
  "app/css/mdb.rtl.min.css.map",
  "app/js/index.js",
  "app/js/mdb.min.js",
  "app/js/mdb.min.js.map",
  "app/img/about/about_club_500x334.webp",
  "app/img/about/chocolate_about_500x391.webp",
  "app/img/cbd_oils/Cannabis-Oil--500x629.png",
  "app/img/about/club_feco_500x282.webp",
  "app/img/about/gummies_batch.webp",
  "app/img/about/about_honey_500x334.webp",
  "app/img/about/juiceGlass.webp",
  "app/img/about/shots_selection_500x332.webp",
  "app/img/smokeless/pineappleSmokeless.webp",
  "app/img/about/topicals_aboutPage.webp",
  "app/img/carousel/cannabisPlant.webp",
  "app/img/carousel/gummies.webp",
  "app/img/carousel/tincturePipe.webp",
  "app/img/cbd_oils/Cannabis-Oil--382x400.webp",
  "app/img/chocolates/VODKA_&_CRANBERRIES_500MG.webp",
  "app/img/contender/CONTENDER_MANGO382x281.webp",
  "app/img/gummies/gum_one.webp",
  "app/img/gummies/gummies_batch.webpapp/img/gummies/gummies_batch.webp",
  "app/img/honey/HONEY_500MG.webp",
  "app/img/logo/hero2_501x301.webp",
  "app/img/logo/leaf.webp",
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
  "app/img/topicals/muscle_rub.webp",
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

// Implementing cache-first
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request)).then((cachedResponse) => {
    return cachedResponse || fetch(event.request);
  });
});
