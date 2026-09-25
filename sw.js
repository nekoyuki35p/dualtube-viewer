const CACHE_NAME="dualtube-viewer-v0.5.1";
const APP_SHELL=["./","./index.html","./share-target.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))),
      self.clients.claim()
    ])
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  // Navigation is network-first so GitHub Pages updates appear on the next launch.
  // Keep share-target.html separate from index.html so the relay page never overwrites the app fallback.
  if(event.request.mode==="navigate"){
    const fallback=url.pathname.endsWith("/share-target.html")?"./share-target.html":"./index.html";
    event.respondWith(fetch(event.request).catch(()=>caches.match(fallback)));
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response=>{
        const copy=response.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)).catch(()=>{});
        return response;
      })
      .catch(()=>caches.match(event.request))
  );
});
