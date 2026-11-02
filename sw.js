/* Service worker of the field-guide app (frozen design).
   This file is identical in every build, so a browser never finds a "new" service worker to install: once the app is
   installed, it keeps serving the copy it stored, even if the website changes or disappears. A different version can only
   be had by removing the app (clearing its site data) and installing it again.
   shell : page, scripts, styles, fonts, icons and the data of all three languages (list in shell.json, read once at install).
   photos: species photos, added by the page until all photos listed in photos.json are on the device. */
const SHELL='shell', PHOTOS='photos';

self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const list=await (await fetch('shell.json',{cache:'reload'})).json();
    const c=await caches.open(SHELL);
    await c.addAll(list.map(u=>new Request(u,{cache:'reload'})));
    self.skipWaiting();
  })());
});
self.addEventListener('activate',e=>{ e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==self.location.origin) return;
  if(url.searchParams.has('dl')) return;                       // photo download by the page: straight to the network
  if(req.mode==='navigate'){
    e.respondWith((async()=>{
      const c=await caches.open(SHELL); const m=await c.match('./index.html');
      if(m) return m;
      try{ return await fetch(req); }catch(err){ return new Response('Offline',{status:503}); }
    })());
    return;
  }
  e.respondWith((async()=>{
    const shell=await caches.open(SHELL);
    let m=await shell.match(req,{ignoreSearch:true}); if(m) return m;
    const isPhoto=url.pathname.includes('/img/');
    if(isPhoto){ const p=await caches.open(PHOTOS); m=await p.match(req,{ignoreSearch:true}); if(m) return m; }
    try{
      const res=await fetch(req);
      if(res.ok&&isPhoto){ const p=await caches.open(PHOTOS); p.put(new Request(url.pathname),res.clone()); }
      return res;
    }catch(err){ return new Response('',{status:504,statusText:'Offline'}); }
  })());
});
