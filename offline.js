/* Offline manager for the field-guide app: language choice, service worker, photo download (no update checks: the app is frozen once installed).
   450c19fc84 and 360×270 are filled in by guide/build/pwa.py. */
const APPSTR={
en:{appName:'Field guide app',offTitle:'Offline use',
 stReady:'Ready for offline use',stDown:(a,t)=>`Downloading photos for offline use… ${a} of ${t}`,stMissing:n=>`${n} photos are not on this device yet.`,
 stNoSW:'This browser cannot store the guide for offline use.',stErr:'The photo download stopped (no connection?). It resumes automatically when you are online, or tap “Download photos”.',
 stIOS:'On iPhone and iPad, add the guide to your Home Screen first (Share → Add to Home Screen) and open it from there: the offline photos are stored inside the app, not in Safari.',
 stOff:'You are offline.',stPhotos:(a,t)=>`${a} of ${t} photos on this device`,stStore:mb=>`Storage used: ${mb} MB`,stPersist:'Storage protected from automatic clean-up',
 btnDown:'Download photos',
 aboutTitle:'About this app',
 aboutText:'Offline edition of the South Tyrol habitat guide: the habitat checklist of Wilhalm et al. (2022) and the typical species after Lasen (2017), in English, Italian and German. The texts of all three languages and all species photos are stored on this device, so the guide works without a mobile signal. Once installed, the app does not need or use the internet: it never checks for updates and stays exactly as installed.',
 credTitle:'Photo credits and licences',credIntro:'Every species photo is an observation record published on GBIF (mostly from iNaturalist), used under the Creative Commons licence chosen by its author. Author, licence and a link to the original record are listed below and shown on each photo.',
 credMod:'Changes: photos were cropped and resized to 360×270 pixels and recompressed as WebP for offline use. Resized versions of CC BY-SA and CC BY-NC-SA photos are shared under the same licence. Photos under an NC licence may not be used commercially; CC0 photos are in the public domain.',
 fontsTitle:'Fonts',fontsText:'Figtree, Spectral and IBM Plex Mono, under the SIL Open Font License 1.1 (licence texts in the fonts folder of the app).',
 version:'Version',loadErr:'The guide could not be loaded. Connect to the internet once and reload.',appBtn:'Offline status and photo credits'},
it:{appName:'App della guida',offTitle:'Uso offline',
 stReady:'Pronta per l\'uso offline',stDown:(a,t)=>`Scaricamento delle foto per l'uso offline… ${a} di ${t}`,stMissing:n=>`${n} foto non sono ancora su questo dispositivo.`,
 stNoSW:'Questo browser non può salvare la guida per l\'uso offline.',stErr:'Lo scaricamento delle foto si è interrotto (manca la connessione?). Riprende da solo quando sei online, oppure tocca “Scarica le foto”.',
 stIOS:'Su iPhone e iPad aggiungi prima la guida alla schermata Home (Condividi → Aggiungi alla schermata Home) e aprila da lì: le foto offline vengono salvate nell\'app, non in Safari.',
 stOff:'Sei offline.',stPhotos:(a,t)=>`${a} di ${t} foto su questo dispositivo`,stStore:mb=>`Spazio occupato: ${mb} MB`,stPersist:'Spazio protetto dalla pulizia automatica',
 btnDown:'Scarica le foto',
 aboutTitle:'Informazioni sull\'app',
 aboutText:'Edizione offline della guida agli habitat dell\'Alto Adige: la checklist degli habitat di Wilhalm et al. (2022) e le specie tipiche secondo Lasen (2017), in inglese, italiano e tedesco. I testi delle tre lingue e tutte le foto delle specie sono salvati su questo dispositivo, quindi la guida funziona anche senza segnale. Una volta installata, l\'app non ha bisogno di internet e non lo usa: non cerca aggiornamenti e resta esattamente com\'è stata installata.',
 credTitle:'Crediti e licenze delle foto',credIntro:'Ogni foto di specie è un\'osservazione pubblicata su GBIF (per lo più da iNaturalist) e usata secondo la licenza Creative Commons scelta dall\'autore. Autore, licenza e collegamento all\'osservazione originale sono elencati qui sotto e indicati su ogni foto.',
 credMod:'Modifiche: le foto sono state ritagliate e ridimensionate a 360×270 pixel e ricompresse in WebP per l\'uso offline. Le versioni ridimensionate di foto CC BY-SA e CC BY-NC-SA sono condivise con la stessa licenza. Le foto con licenza NC non possono essere usate a fini commerciali; le foto CC0 sono di pubblico dominio.',
 fontsTitle:'Caratteri',fontsText:'Figtree, Spectral e IBM Plex Mono, con licenza SIL Open Font License 1.1 (testi della licenza nella cartella fonts dell\'app).',
 version:'Versione',loadErr:'Impossibile caricare la guida. Collegati una volta a internet e ricarica.',appBtn:'Stato offline e crediti delle foto'},
de:{appName:'App zum Führer',offTitle:'Offline-Nutzung',
 stReady:'Bereit für die Offline-Nutzung',stDown:(a,t)=>`Fotos für die Offline-Nutzung werden geladen… ${a} von ${t}`,stMissing:n=>`${n} Fotos sind noch nicht auf diesem Gerät.`,
 stNoSW:'Dieser Browser kann den Führer nicht für die Offline-Nutzung speichern.',stErr:'Der Foto-Download wurde unterbrochen (keine Verbindung?). Er geht automatisch weiter, sobald du online bist, oder tippe auf „Fotos laden“.',
 stIOS:'Auf iPhone und iPad füge den Führer zuerst zum Home-Bildschirm hinzu (Teilen → Zum Home-Bildschirm) und öffne ihn von dort: Die Offline-Fotos werden in der App gespeichert, nicht in Safari.',
 stOff:'Du bist offline.',stPhotos:(a,t)=>`${a} von ${t} Fotos auf diesem Gerät`,stStore:mb=>`Belegter Speicher: ${mb} MB`,stPersist:'Speicher vor automatischem Löschen geschützt',
 btnDown:'Fotos laden',
 aboutTitle:'Über diese App',
 aboutText:'Offline-Ausgabe des Führers zu den Lebensräumen Südtirols: die Checkliste der Lebensräume von Wilhalm et al. (2022) und die typischen Arten nach Lasen (2017), auf Englisch, Italienisch und Deutsch. Die Texte aller drei Sprachen und alle Artfotos sind auf diesem Gerät gespeichert, der Führer funktioniert also auch ohne Netz. Einmal installiert, braucht und nutzt die App kein Internet: Sie sucht nicht nach Updates und bleibt genau so, wie sie installiert wurde.',
 credTitle:'Fotonachweise und Lizenzen',credIntro:'Jedes Artfoto ist ein auf GBIF veröffentlichter Beobachtungsdatensatz (meist von iNaturalist) und wird gemäß der vom Urheber gewählten Creative-Commons-Lizenz verwendet. Urheber, Lizenz und ein Link zum Originaldatensatz stehen unten und auf jedem Foto.',
 credMod:'Änderungen: Die Fotos wurden für die Offline-Nutzung auf 360×270 Pixel zugeschnitten und verkleinert und als WebP neu komprimiert. Verkleinerte Fassungen von Fotos unter CC BY-SA und CC BY-NC-SA werden unter derselben Lizenz weitergegeben. Fotos mit NC-Lizenz dürfen nicht kommerziell genutzt werden; CC0-Fotos sind gemeinfrei.',
 fontsTitle:'Schriften',fontsText:'Figtree, Spectral und IBM Plex Mono, unter der SIL Open Font License 1.1 (Lizenztexte im Ordner fonts der App).',
 version:'Version',loadErr:'Der Führer konnte nicht geladen werden. Verbinde dich einmal mit dem Internet und lade neu.',appBtn:'Offline-Status und Fotonachweise'}
};

const LANGS=['en','it','de'];
function pickLang(){
  try{const l=localStorage.getItem('sth-lang'); if(LANGS.includes(l)) return l;}catch(e){}
  for(const l of (navigator.languages||[navigator.language||'en'])){const p=String(l).slice(0,2).toLowerCase(); if(LANGS.includes(p)) return p;}
  return 'en';
}
function setLang(l){ try{localStorage.setItem('sth-lang',l)}catch(e){} location.reload(); }

const OFF={
  version:'450c19fc84', state:'idle', have:0, total:0, usage:null, persisted:false,
  ios:/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),
  standalone:matchMedia('(display-mode: standalone)').matches||navigator.standalone===true,
  reg:null, running:false,
  emit(){ window.dispatchEvent(new Event('offline-state')); },
  dot(){
    const b=document.getElementById('offBtn'); if(!b) return;
    const st=this.state==='ready'?'ok':this.state==='nosw'?'no':'part';
    b.dataset.st=st; b.title=APPSTR[document.documentElement.lang||'en'].appBtn;
    const t=document.getElementById('toast'); const U=APPSTR[document.documentElement.lang||'en'];
    if(this.state==='downloading'){ t.innerHTML=`<span>${U.stDown(this.have,this.total)}</span><i style="--p:${this.total?Math.round(100*this.have/this.total):0}%"></i>`; t.hidden=false; }
    else t.hidden=true;
  },
  paint(){
    const box=document.getElementById('offBox'); if(!box) return; const U=APPSTR[document.documentElement.lang||'en'];
    let h='';
    const pct=this.total?Math.round(100*this.have/this.total):0;
    if(this.state==='nosw') h+=`<p class="off-st no">${U.stNoSW}</p>`;
    else if(this.state==='ready') h+=`<p class="off-st ok">✓ ${U.stReady}</p>`;
    else if(this.state==='downloading') h+=`<p class="off-st part">${U.stDown(this.have,this.total)}</p>`;
    else if(this.state==='error') h+=`<p class="off-st part">${U.stErr}</p>`;
    else if(this.total&&this.have<this.total) h+=`<p class="off-st part">${U.stMissing(this.total-this.have)}</p>`;
    if(this.ios&&!this.standalone) h+=`<p class="note">${U.stIOS}</p>`;
    if(!navigator.onLine) h+=`<p class="note">${U.stOff}</p>`;
    if(this.total) h+=`<div class="bar"><i style="width:${pct}%"></i></div><p class="note" style="margin-top:6px">${U.stPhotos(this.have,this.total)}${this.usage!=null?' · '+U.stStore(this.usage):''}${this.persisted?' · '+U.stPersist:''}</p>`;
    h+=`<div class="links" style="margin-top:12px">`;
    if(this.state!=='nosw'&&this.have<this.total&&this.state!=='downloading') h+=`<button class="btn" data-app="download">${U.btnDown}</button>`;
    h+=`</div>`;
    box.innerHTML=h;
  },
  async storage(){
    try{ if(navigator.storage&&navigator.storage.estimate){const e=await navigator.storage.estimate(); this.usage=Math.round((e.usage||0)/1e6);} }catch(e){}
    try{ if(navigator.storage&&navigator.storage.persisted) this.persisted=await navigator.storage.persisted(); }catch(e){}
  },
  async download(manual){
    if(this.running||!('caches' in window)) return; this.running=true;
    try{
      if(navigator.storage&&navigator.storage.persist){ try{await navigator.storage.persist()}catch(e){} }
      const list=await (await fetch('photos.json')).json();
      const cache=await caches.open('photos'), keys=await cache.keys();
      const want=new Set(list.files), have=new Set();
      for(const k of keys){ const f=decodeURIComponent(new URL(k.url).pathname.split('/').pop()); if(want.has(f)) have.add(f); else await cache.delete(k); }
      const miss=list.files.filter(f=>!have.has(f));
      this.total=list.files.length; this.have=this.total-miss.length;
      if(!miss.length){ this.state='ready'; return; }
      if(!manual&&this.ios&&!this.standalone){ this.state='idle'; return; }   // iOS: Safari and the Home Screen app keep separate storage
      if(!manual&&navigator.connection&&navigator.connection.saveData){ this.state='idle'; return; }
      this.state='downloading'; this.emit();
      let i=0, failed=0, last=0;
      const worker=async()=>{ while(i<miss.length){ const f=miss[i++];
        try{ const r=await fetch('img/'+encodeURIComponent(f)+'?dl=1',{cache:'no-cache'}); if(!r.ok) throw 0; await cache.put(new Request('img/'+encodeURIComponent(f)),r); this.have++; }
        catch(e){ failed++; if(!navigator.onLine) { i=miss.length; } }
        if(Date.now()-last>250){ last=Date.now(); this.emit(); } } };
      await Promise.all([worker(),worker(),worker(),worker(),worker(),worker()]);
      this.state= this.have>=this.total?'ready':'error';
    }catch(e){ this.state='error'; }
    finally{ this.running=false; await this.storage(); this.emit(); }
  },
  async init(){
    if(!('serviceWorker' in navigator)){ this.state='nosw'; this.emit(); return; }
    try{
      this.reg=await navigator.serviceWorker.register('sw.js');
      await navigator.serviceWorker.ready;
      await this.storage(); this.emit();
      this.download(false);
      window.addEventListener('online',()=>{ if(this.state!=='ready') this.download(false); this.emit(); });   // only to finish an interrupted first download
      window.addEventListener('offline',()=>this.emit());
    }catch(e){ this.state='nosw'; this.emit(); }
  }
};
function appAction(a){ if(a==='download') OFF.download(true); }

(async function boot(){
  const lang=pickLang(); document.documentElement.lang=lang;
  try{
    const r=await fetch('data/'+lang+'.json'); if(!r.ok) throw new Error(r.status);
    const D=await r.json();
    startGuide(lang,D);
  }catch(e){
    document.getElementById('main').innerHTML=`<p class="note" style="padding:20px 0">${APPSTR[lang].loadErr}</p>`;
  }
  OFF.init();
})();
