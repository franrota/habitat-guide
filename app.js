/* Field-guide app: same views as the online guide (guide/build/body4_js.html), adapted for offline use.
   LANG and D come from the loader in index.html; U holds the app strings (offline panel, credits). */
function startGuide(LANG,D){
const T={en:{
 brand:'South Tyrol Habitat Guide',sub:'Habitat checklist 2022 · typical species after Lasen 2017',menu:'Index',search:'Search a habitat, code or species',
 searchAria:'Search habitats and species',index:'Index',vCL:'Checklist 2022',vLA:'Species · Lasen 2017',
 clEyebrow:'Wilhalm et al. 2022 · Checkliste der Lebensräume Südtirols',clH1:'The habitat checklist of South Tyrol',
 clIntro:'The official habitat classification of South Tyrol, in its three levels: habitat domains (Bereiche), habitat groups (Gruppen) and habitat types (Lebensraumtypen). Each type has its code, German and Italian names, the corresponding vegetation units (syntaxa) and, where there is one, the Natura 2000 code of the EU Habitats Directive.',
 clToLA:'For the typical plants of each habitat, switch to the species guide after Lasen (2017).',
 laEyebrow:'Lasen 2017 · Lista completa delle specie tipiche degli habitat dell\'Alto Adige',laH1:'Typical species of the habitats of South Tyrol',
 laIntro:'Lasen’s list of typical species, habitat by habitat. Dominant and characteristic species are shown on illustrated cards, every other typical species as a photo tile. Each habitat links to the matching types of the 2022 checklist.',
 laToCL:'For the official codes and names, switch to the 2022 checklist.',
 sDom:'habitat domains',sGrp:'habitat groups',sTypes:'habitat types',sN2k:'with a Natura 2000 code',sRare:'rare in South Tyrol',
 sHab:'Lasen habitats',sSp:'listed species',sCard:'species cards',sPhoto:'with photos',sThreat:'threatened (RE–VU)',key:'key',
 lv:['Habitat domain','Habitat group','Habitat type'],
 syn:'Syntaxa',n2k:'Natura 2000',cf:'Compare',fR:'rare',fRT:'Rare or only locally developed in South Tyrol',fS:'poorly known',fST:'Insufficiently documented and studied in South Tyrol',
 within:'Habitat types within this unit',lasenHere:'Typical species: Lasen (2017) habitats matched to this type',lasenBelow:'Typical species are listed in Lasen (2017) for the types below.',
 lasenAbove:'Typical species: see the Lasen (2017) habitat matched to the broader type',noList:'Lasen (2017) gives no species list for this habitat type.',
 hasList:'Lasen list',phHere:'Typical species after Lasen (2017)',phBelow:'Key species of the types below, after Lasen (2017)',phAbove:'Key species of the broader type, after Lasen (2017)',clTypes:'Checklist 2022',lasenSyn:'Syntaxon',
 legend:'How to read the badges',protLeg:'Protected under the provincial nature law, where the list marks it',alienLeg:'Introduced species (neophyte)',
 clNote:'Codes, German and Italian names, syntaxa, Natura 2000 codes and the “rare” and “poorly known” flags are taken from the checklist; the English names are informal translations.',
 laNote:'Species lists, red-list categories and the protected and non-native marks come from Lasen (2017). The link from each Lasen habitat (or sub-unit) to a checklist code is our own matching to the closest type. “Key species” are those marked dominant or characteristic; a small green square on a tile marks species with a full card elsewhere in the guide. Photos are observation records from GBIF (mostly iNaturalist), used under their Creative Commons licences; the photographer and licence are shown on each photo, and each species panel links to the original record. Photos are chosen automatically, so a few may show the plant out of flower or only in part.',
 clSource:'Source: Wilhalm T., Stifter S., Gamper U., Mulser J., Erschbamer B., Kußtatscher K., Tomasi M., Lasen C. & Hilpold A. (2022), Checkliste der Lebensräume Südtirols – zweite überarbeitete und erweiterte Auflage, <i>Gredleriana</i> 22: 103–125, doi:10.5281/zenodo.7398740.',
 laSource:'Source: Lasen C. (2017), <i>Descrizione degli habitat dell\'Alto Adige</i>, Provincia Autonoma di Bolzano – Alto Adige: “Lista completa delle specie tipiche degli habitat dell\'Alto Adige”. Species and habitat descriptions are summaries written for learning; check the original list for official use.',
 typical:'typical species',keyCards:'key species with cards',threatened:'threatened',
 keyLabel:'Key species · dominant or characteristic',also:'Also typical',prev:'Previous',next:'Next',
 protected:'Protected',protT:'Marked as protected in the source list',alien:'Non-native',alienT:'Non-native (neophyte)',keyIn:n=>'Key in '+n,keyInT:'Dominant or characteristic in more than one habitat',
 pending:'No photo',unknownAuthor:'unknown author',seeRecord:'GBIF record',close:'Close',nocard:'Listed as typical but not as dominant or characteristic in any habitat, so there is no description yet.',
 redlist:'South Tyrol Red List',foundIn:n=>'In '+n+' Lasen habitat'+(n>1?'s':''),inTypes:'Checklist 2022 types',keyTag:'Key',morePhotos:'More photos',photoBy:'Photo',
 kCL:'Checklist',kLA:'Lasen',kCard:'Card',kListed:'Species',noMatch:q=>'No habitat or species matches “'+q+'”.',
 RL:{RE:'Regionally extinct',CR:'Critically endangered',EN:'Endangered',VU:'Vulnerable',NT:'Near threatened',LC:'Least concern','LC!':'Least concern, special regional responsibility',DD:'Data deficient'}
},it:{
 brand:'Guida agli habitat dell\'Alto Adige',sub:'Checklist degli habitat 2022 · specie tipiche secondo Lasen 2017',menu:'Indice',search:'Cerca un habitat, un codice o una specie',
 searchAria:'Cerca habitat e specie',index:'Indice',vCL:'Checklist 2022',vLA:'Specie · Lasen 2017',
 clEyebrow:'Wilhalm et al. 2022 · Checkliste der Lebensräume Südtirols',clH1:'La checklist degli habitat dell\'Alto Adige',
 clIntro:'La classificazione ufficiale degli habitat dell\'Alto Adige nei suoi tre livelli: ambiti (Bereiche), gruppi (Gruppen) e tipi di habitat (Lebensraumtypen). Per ogni tipo sono indicati il codice, le denominazioni tedesca e italiana, le unità di vegetazione (sintaxa) corrispondenti e, se esiste, il codice Natura 2000 della Direttiva Habitat.',
 clToLA:'Per le piante tipiche di ogni habitat passa alla guida delle specie secondo Lasen (2017).',
 laEyebrow:'Lasen 2017 · Lista completa delle specie tipiche degli habitat dell\'Alto Adige',laH1:'Le specie tipiche degli habitat dell\'Alto Adige',
 laIntro:'La lista delle specie tipiche di Lasen, habitat per habitat. Le specie dominanti e caratteristiche sono su schede illustrate, tutte le altre specie tipiche su riquadri con foto. Ogni habitat rimanda ai tipi corrispondenti della checklist 2022.',
 laToCL:'Per i codici e le denominazioni ufficiali passa alla checklist 2022.',
 sDom:'ambiti',sGrp:'gruppi',sTypes:'tipi di habitat',sN2k:'con codice Natura 2000',sRare:'rari in Alto Adige',
 sHab:'habitat di Lasen',sSp:'specie elencate',sCard:'schede di specie',sPhoto:'con foto',sThreat:'minacciate (RE–VU)',key:'chiave',
 lv:['Ambito','Gruppo','Tipo di habitat'],
 syn:'Sintaxa',n2k:'Natura 2000',cf:'Confronta',fR:'raro',fRT:'Raro o presente solo su piccole superfici in Alto Adige',fS:'poco noto',fST:'Insufficientemente documentato e studiato in Alto Adige',
 within:'Tipi di habitat compresi',lasenHere:'Specie tipiche: habitat di Lasen (2017) attribuiti a questo tipo',lasenBelow:'Le specie tipiche sono elencate in Lasen (2017) per i tipi sottostanti.',
 lasenAbove:'Specie tipiche: vedi l\'habitat di Lasen (2017) attribuito al tipo più ampio',noList:'Lasen (2017) non fornisce un elenco di specie per questo tipo di habitat.',
 hasList:'lista Lasen',phHere:'Specie tipiche secondo Lasen (2017)',phBelow:'Specie chiave dei tipi sottostanti, secondo Lasen (2017)',phAbove:'Specie chiave del tipo più ampio, secondo Lasen (2017)',clTypes:'Checklist 2022',lasenSyn:'Sintaxon',
 legend:'Come leggere i contrassegni',protLeg:'Protetta dalla legge provinciale sulla tutela della natura, dove la lista lo indica',alienLeg:'Specie introdotta (neofita)',
 clNote:'Codici, denominazioni italiane e tedesche, sintaxa, codici Natura 2000 e le indicazioni “raro” e “poco noto” provengono dalla checklist.',
 laNote:'Gli elenchi di specie, le categorie della Lista Rossa e le indicazioni di specie protetta o esotica provengono da Lasen (2017). Il collegamento tra ogni habitat (o sottounità) di Lasen e un codice della checklist è una nostra attribuzione al tipo più vicino. Le “specie chiave” sono quelle indicate come dominanti o caratteristiche; un quadratino verde su un riquadro indica le specie con una scheda completa altrove nella guida. Le foto sono osservazioni pubblicate su GBIF (per lo più da iNaturalist), usate secondo le loro licenze Creative Commons; autore e licenza sono indicati su ogni foto e ogni scheda rimanda all\'osservazione originale. Le foto sono scelte automaticamente: alcune possono mostrare la pianta non fiorita o solo in parte.',
 clSource:'Fonte: Wilhalm T., Stifter S., Gamper U., Mulser J., Erschbamer B., Kußtatscher K., Tomasi M., Lasen C. & Hilpold A. (2022), Checkliste der Lebensräume Südtirols – zweite überarbeitete und erweiterte Auflage, <i>Gredleriana</i> 22: 103–125, doi:10.5281/zenodo.7398740.',
 laSource:'Fonte: Lasen C. (2017), <i>Descrizione degli habitat dell\'Alto Adige</i>, Provincia Autonoma di Bolzano – Alto Adige: “Lista completa delle specie tipiche degli habitat dell\'Alto Adige”. Le descrizioni di specie e habitat sono sintesi a scopo di studio; per usi ufficiali consultare la lista originale.',
 typical:'specie tipiche',keyCards:'specie chiave con scheda',threatened:'minacciate',
 keyLabel:'Specie chiave · dominanti o caratteristiche',also:'Altre specie tipiche',prev:'Precedente',next:'Successivo',
 protected:'Protetta',protT:'Indicata come protetta nella lista di partenza',alien:'Esotica',alienT:'Specie esotica (neofita)',keyIn:n=>'Chiave in '+n,keyInT:'Dominante o caratteristica in più di un habitat',
 pending:'Senza foto',unknownAuthor:'autore sconosciuto',seeRecord:'scheda GBIF',close:'Chiudi',nocard:'Elencata come tipica ma non come dominante o caratteristica in alcun habitat, quindi non c\'è ancora una descrizione.',
 redlist:'Lista Rossa dell\'Alto Adige',foundIn:n=>'In '+n+' habitat di Lasen',inTypes:'Tipi della checklist 2022',keyTag:'Chiave',morePhotos:'Altre foto',photoBy:'Foto',
 kCL:'Checklist',kLA:'Lasen',kCard:'Scheda',kListed:'Specie',noMatch:q=>'Nessun habitat o specie corrisponde a “'+q+'”.',
 RL:{RE:'Estinta in regione',CR:'In pericolo critico',EN:'In pericolo',VU:'Vulnerabile',NT:'Quasi minacciata',LC:'Minor preoccupazione','LC!':'Minor preoccupazione, responsabilità regionale particolare',DD:'Dati insufficienti'}
},de:{
 brand:'Lebensräume Südtirols',sub:'Checkliste der Lebensräume 2022 · typische Arten nach Lasen 2017',menu:'Verzeichnis',search:'Lebensraum, Code oder Art suchen',
 searchAria:'Lebensräume und Arten suchen',index:'Verzeichnis',vCL:'Checkliste 2022',vLA:'Arten · Lasen 2017',
 clEyebrow:'Wilhalm et al. 2022 · Checkliste der Lebensräume Südtirols',clH1:'Die Checkliste der Lebensräume Südtirols',
 clIntro:'Die amtliche Gliederung der Lebensräume Südtirols in drei Ebenen: Bereiche, Gruppen und Lebensraumtypen. Zu jedem Typ stehen Code, deutsche und italienische Bezeichnung, die entsprechenden vegetationskundlichen Einheiten (Syntaxa) und, falls vorhanden, der Natura-2000-Code der FFH-Richtlinie.',
 clToLA:'Die typischen Pflanzen der Lebensräume findest du in der Artenübersicht nach Lasen (2017).',
 laEyebrow:'Lasen 2017 · Lista completa delle specie tipiche degli habitat dell\'Alto Adige',laH1:'Die typischen Arten der Lebensräume Südtirols',
 laIntro:'Lasens Liste der typischen Arten, Lebensraum für Lebensraum. Dominante und charakteristische Arten stehen auf bebilderten Karten, alle weiteren typischen Arten als Fotokacheln. Jeder Lebensraum verweist auf die passenden Typen der Checkliste 2022.',
 laToCL:'Die amtlichen Codes und Bezeichnungen findest du in der Checkliste 2022.',
 sDom:'Bereiche',sGrp:'Gruppen',sTypes:'Lebensraumtypen',sN2k:'mit Natura-2000-Code',sRare:'selten in Südtirol',
 sHab:'Lebensräume bei Lasen',sSp:'gelistete Arten',sCard:'Artkarten',sPhoto:'mit Foto',sThreat:'gefährdet (RE–VU)',key:'Leitarten',
 lv:['Bereich','Gruppe','Lebensraumtyp'],
 syn:'Syntaxa',n2k:'Natura 2000',cf:'Vergleiche',fR:'selten',fRT:'In Südtirol selten bzw. nur kleinräumig ausgebildet',fS:'wenig bekannt',fST:'Für Südtirol unzureichend dokumentiert und untersucht',
 within:'Lebensraumtypen dieser Einheit',lasenHere:'Typische Arten: diesem Typ zugeordnete Lebensräume bei Lasen (2017)',lasenBelow:'Die typischen Arten stehen bei Lasen (2017) unter den untergeordneten Typen.',
 lasenAbove:'Typische Arten: siehe den dem übergeordneten Typ zugeordneten Lebensraum bei Lasen (2017)',noList:'Lasen (2017) gibt für diesen Lebensraumtyp keine Artenliste an.',
 hasList:'Liste Lasen',phHere:'Typische Arten nach Lasen (2017)',phBelow:'Leitarten der untergeordneten Typen nach Lasen (2017)',phAbove:'Leitarten des übergeordneten Typs nach Lasen (2017)',clTypes:'Checkliste 2022',lasenSyn:'Syntaxon',
 legend:'So liest du die Kennzeichen',protLeg:'Nach dem Landesgesetz zum Naturschutz geschützt, wo die Liste es angibt',alienLeg:'Eingeführte Art (Neophyt)',
 clNote:'Codes, deutsche und italienische Bezeichnungen, Syntaxa, Natura-2000-Codes und die Kennzeichen „selten“ und „wenig bekannt“ stammen aus der Checkliste.',
 laNote:'Artenlisten, Kategorien der Roten Liste sowie die Angaben „geschützt“ und „Neophyt“ stammen aus Lasen (2017). Die Verknüpfung jedes Lebensraums (oder jeder Untereinheit) bei Lasen mit einem Code der Checkliste ist unsere eigene Zuordnung zum nächstliegenden Typ. „Leitarten“ sind die als dominant oder charakteristisch gekennzeichneten Arten; ein kleines grünes Quadrat auf einer Kachel markiert Arten mit eigener Karte. Die Fotos stammen aus GBIF-Beobachtungen (meist iNaturalist) und werden gemäß ihren Creative-Commons-Lizenzen verwendet; Fotograf und Lizenz stehen auf jedem Foto, und jede Art verlinkt den Originaldatensatz. Die Fotos sind automatisch ausgewählt, einige zeigen die Pflanze daher nicht blühend oder nur teilweise.',
 clSource:'Quelle: Wilhalm T., Stifter S., Gamper U., Mulser J., Erschbamer B., Kußtatscher K., Tomasi M., Lasen C. & Hilpold A. (2022), Checkliste der Lebensräume Südtirols – zweite überarbeitete und erweiterte Auflage, <i>Gredleriana</i> 22: 103–125, doi:10.5281/zenodo.7398740.',
 laSource:'Quelle: Lasen C. (2017), <i>Descrizione degli habitat dell\'Alto Adige</i>, Autonome Provinz Bozen – Südtirol: „Lista completa delle specie tipiche degli habitat dell\'Alto Adige“. Die Beschreibungen von Arten und Lebensräumen sind Zusammenfassungen zum Lernen; für amtliche Zwecke gilt die Originalliste.',
 typical:'typische Arten',keyCards:'Leitarten mit Karte',threatened:'gefährdet',
 keyLabel:'Leitarten · dominant oder charakteristisch',also:'Weitere typische Arten',prev:'Zurück',next:'Weiter',
 protected:'Geschützt',protT:'In der Quellliste als geschützt gekennzeichnet',alien:'Neophyt',alienT:'Eingeführte Art (Neophyt)',keyIn:n=>'Leitart in '+n,keyInT:'Dominant oder charakteristisch in mehr als einem Lebensraum',
 pending:'Kein Foto',unknownAuthor:'unbekannt',seeRecord:'GBIF-Datensatz',close:'Schließen',nocard:'Als typisch gelistet, aber in keinem Lebensraum als dominant oder charakteristisch, daher noch ohne Beschreibung.',
 redlist:'Rote Liste Südtirol',foundIn:n=>'In '+n+(n>1?' Lebensräumen':' Lebensraum')+' bei Lasen',inTypes:'Typen der Checkliste 2022',keyTag:'Leitart',morePhotos:'Weitere Fotos',photoBy:'Foto',
 kCL:'Checkliste',kLA:'Lasen',kCard:'Karte',kListed:'Art',noMatch:q=>'Kein Lebensraum und keine Art passt zu „'+q+'“.',
 RL:{RE:'Regional ausgestorben',CR:'Vom Aussterben bedroht',EN:'Stark gefährdet',VU:'Gefährdet',NT:'Potenziell gefährdet',LC:'Nicht gefährdet','LC!':'Nicht gefährdet, besondere Verantwortung Südtirols',DD:'Daten unzureichend'}
}}[LANG];
document.documentElement.lang=LANG;
const U=APPSTR[LANG];
const H=D.habitats, SP=D.species, G=D.groups, NL=D.nodes, N={}, KIDS={}, LM={};
NL.forEach(n=>{N[n.c]=n; KIDS[n.c]=[]; LM[n.c]=[]});
NL.forEach(n=>{ if(n.p) KIDS[n.p].push(n.c) });
D.order.forEach(id=>{ H[id].units.forEach((u,i)=>{ const l=LM[u.code]; let e=l.find(x=>x.id===id); if(!e){e={id,units:[]};l.push(e)} e.units.push(i) }) });
const depth=c=>{let d=0;while(N[c].p){c=N[c].p;d++}return d};
const ancestors=c=>{const a=[];while(N[c].p){c=N[c].p;a.unshift(c)}return a};
const desc=c=>KIDS[c].flatMap(k=>[k,...desc(k)]);
const hasL={}; function subL(c){ if(c in hasL) return hasL[c]; return hasL[c]=LM[c].length>0||KIDS[c].some(subL); } NL.forEach(n=>subL(n.c));
const ROOTS=NL.filter(n=>!n.p).map(n=>n.c);
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const bySlug={}; Object.keys(SP).forEach(k=>bySlug[slug(k)]=k);
const RLC={RE:'RE',CR:'CR',EN:'EN',VU:'VU',NT:'NT',LC:'LC','LC!':'LCx',DD:'DD'};
const rlBadge=r=>r&&RLC[r]?`<span class="badge b-${RLC[r]}" title="${esc(T.RL[r])}"><i></i>${esc(r)}</span>`:'';
const localName=s=>LANG==='de'?(s.de||s.it):LANG==='it'?s.it:(s.en||s.it);
const nameLine=s=>LANG==='de'?(s.de?`<b>${esc(s.de)}</b> · ${esc(s.it)}`:esc(s.it)):LANG==='it'?`<b>${esc(s.it)}</b>${s.en?` · ${esc(s.en)}`:''}`:`${s.en?`<b>${esc(s.en)}</b> · `:''}${esc(s.it)}`;
const lvl=c=>T.lv[Math.min(depth(c),2)];
const codeTag=c=>`<span class="code">${esc(c)}</span>`;
$('#brandName').textContent=T.brand; $('#brandSub').textContent=T.sub; $('#menuBtn').textContent=T.menu;
$('#q').placeholder=T.search; $('#q').setAttribute('aria-label',T.searchAria); $('#index').setAttribute('aria-label',T.index);
const LNAME={en:'English',it:'Italiano',de:'Deutsch'};
$('#langs').innerHTML=Object.keys(LNAME).map(l=>l===LANG?`<span class="lang on" aria-current="true">${l.toUpperCase()}</span>`:`<button class="lang" data-lang="${l}" title="${LNAME[l]}" lang="${l}">${l.toUpperCase()}</button>`).join('');
function badges(s,full){
  let b=rlBadge(s.rl);
  if(s.p) b+=`<span class="badge b-P" title="${esc(T.protT)}">${esc(T.protected)}</span>`;
  if(s.a) b+=`<span class="badge b-A" title="${esc(T.alienT)}">${esc(T.alien)}</span>`;
  if(full&&s.key.length>1) b+=`<span class="badge b-K" title="${esc(T.keyInT)}">${esc(T.keyIn(s.key.length))}</span>`;
  return b;
}
function initials(sci){const p=sci.replace('× ','').split(/\s+/);const sp=p[1]&&!/^(sp|spp|agg)\.?$/.test(p[1])?p[1][0]+'.':'';return p[0][0]+'. '+sp;}
function credit(s){ if(!s.cr) return ''; return `© ${esc(s.cr.a||T.unknownAuthor)}${s.cr.l?' · '+esc(s.cr.l):''}`; }
// one downscaled WebP per species, cached by the service worker for offline use
function photo(sci,s){
  if(s.img) return `<div class="ph"><img src="img/${esc(s.img)}" alt="${esc(sci)}" loading="lazy" decoding="async"><span class="cr">${credit(s)}</span></div>`;
  return `<div class="ph" aria-hidden="true"><span class="mono-l">${esc(initials(sci))}</span><span class="pend">${esc(T.pending)}</span></div>`;
}
const rlColor=r=>r&&RLC[r]?`var(--rl-${({RE:'re',CR:'cr',EN:'en',VU:'vu',NT:'nt',LC:'lc','LC!':'resp',DD:'dd'})[r]})`:'transparent';
const isLA=t=>t==='lasen'||t==='credits'||t.startsWith('h-');
let current='home';

/* ---------- index ---------- */
function buildIndex(){
  const la=isLA(current);
  let h=`<div class="vsw" role="tablist"><button role="tab" aria-selected="${!la}" class="${la?'':'on'}" data-go="home">${esc(T.vCL)}</button><button role="tab" aria-selected="${la}" class="${la?'on':''}" data-go="lasen">${esc(T.vLA)}</button></div>`;
  if(la){
    G.forEach(g=>{
      h+=`<h3>${esc(g.name)}</h3>`;
      g.habitats.forEach(id=>{const n=H[id].units.reduce((a,u)=>a+u.items.filter(i=>i.n).length,0);
        h+=`<button class="ix" data-go="h-${id}"><span>${esc(H[id].name)}</span><small>${n}</small></button>`;});
    });
  } else {
    const cur=current.startsWith('c-')?current.slice(2):null, path=cur?[...ancestors(cur),cur]:[];
    ROOTS.forEach(r=>{
      h+=`<button class="ix bx" data-go="c-${r}"><span>${esc(N[r].n)}</span></button>`;
      KIDS[r].forEach(g=>{
        h+=`<button class="ix gx" data-go="c-${g}">${codeTag(g)}<span class="nm">${esc(N[g].n)}</span></button>`;
        if(path.includes(g)) desc(g).forEach(c=>{
          h+=`<button class="ix dx" style="padding-left:${8+(depth(c)-1)*12}px" data-go="c-${c}">${codeTag(c)}<span class="nm">${esc(N[c].n)}</span></button>`;});
      });
    });
  }
  $('#index').innerHTML=h;
}

/* ---------- checklist views ---------- */
function viewCLHome(){
  const nG=ROOTS.reduce((a,r)=>a+KIDS[r].length,0), nN2k=NL.filter(n=>n.n2k).length, nR=NL.filter(n=>n.f.includes('r')).length;
  let h=`<section class="hero"><div class="eyebrow">${esc(T.clEyebrow)}</div><h1>${esc(T.clH1)}</h1><p>${esc(T.clIntro)}</p>
  <div class="stats"><div class="stat"><b>${ROOTS.length}</b><span>${T.sDom}</span></div><div class="stat"><b>${nG}</b><span>${T.sGrp}</span></div><div class="stat"><b>${NL.length}</b><span>${T.sTypes}</span></div><div class="stat"><b>${nN2k}</b><span>${T.sN2k}</span></div><div class="stat"><b>${nR}</b><span>${T.sRare}</span></div></div>
  <p class="switch-note"><button class="lnk" data-go="lasen">${esc(T.clToLA)}</button></p></section><div class="groups">`;
  ROOTS.forEach(r=>{
    h+=`<section class="gcard"><button class="gh" data-go="c-${r}">${codeTag(r)}<span>${esc(N[r].n)}</span></button><ul>`;
    KIDS[r].forEach(g=>{h+=`<li><button data-go="c-${g}"><span>${codeTag(g)} ${esc(N[g].n)}</span>${N[g].n2k?`<small>${esc(N[g].n2k)}</small>`:''}</button></li>`;});
    h+=`</ul></section>`;
  });
  h+=`</div><p class="note">${esc(T.clNote)}</p><p class="foot">${T.clSource}</p>`;
  return h;
}
function lasenLink(e){
  const hb=H[e.id], whole=e.units.length===hb.units.length;
  const part=whole?'':e.units.map(i=>hb.units[i].label).filter(Boolean).map(l=>l.split(' - ')[0]).join('; ');
  const n=new Set(e.units.flatMap(i=>hb.units[i].items.filter(x=>x.n).map(x=>x.n))).size;
  return `<li><button data-go="h-${e.id}"><span><b>${esc(hb.name)}</b>${part?` <span class="sci">· ${esc(part)}</span>`:''}</span><small>${n} spp.</small></button></li>`;
}
function entryItems(e,keysOnly){
  const hb=H[e.id], seen=new Set(), out=[];
  e.units.forEach(i=>hb.units[i].items.forEach(x=>{ if(x.n&&!seen.has(x.n)&&(!keysOnly||x.k)){seen.add(x.n);out.push(x)} }));
  return out.sort((a,b)=>(b.k-a.k));
}
function entryTiles(e,keysOnly,head){
  const it=entryItems(e,keysOnly); if(!it.length) return '';
  const hb=H[e.id], whole=e.units.length===hb.units.length;
  const part=whole?'':e.units.map(i=>hb.units[i].label).filter(Boolean).map(l=>l.split(' - ')[0]).join('; ');
  const ttl=head||`<button class="lnk2" data-go="h-${e.id}">${esc(hb.name)}${part?` <span class="sci">· ${esc(part)}</span>`:''}</button>`;
  const pk=0, ks=it.filter(x=>x.k), os=it.filter(x=>!x.k);
  if(keysOnly) return `<div class="phgroup"><h3>${ttl}</h3><div class="tiles">${ks.map(x=>tileHTML(x,pk)).join('')}</div></div>`;
  return `<div class="phgroup"><h3>${ttl}</h3>${ks.length?`<div class="sec-label sm">${esc(T.keyLabel)}</div><div class="tiles">${ks.map(x=>tileHTML(x,pk)).join('')}</div>`:''}${os.length?`<div class="sec-label sm">${esc(T.also)}</div><div class="tiles">${os.map(x=>tileHTML(x,pk)).join('')}</div>`:''}</div>`;
}
function viewNode(c){
  const n=N[c], anc=ancestors(c);
  let h=`<header class="hab-head"><nav class="crumbs">${anc.map((a,i)=>`<button data-go="c-${a}" style="padding-left:${i*14}px">${i?'<span aria-hidden="true">↳ </span>':''}${codeTag(a)} ${esc(N[a].n)}</button>`).join('')}</nav>
  <div class="eyebrow">${esc(lvl(c))} · <span class="mono">${esc(c)}</span></div><h1>${esc(n.n)}</h1>`;
  if(LANG==='en') h+=`<p class="it-name"><span lang="de">${esc(n.s)}</span><br><span lang="it">${esc(n.s2)}</span></p>`;
  else h+=`<p class="it-name" lang="${LANG==='it'?'de':'it'}">${esc(n.s)}</p>`;
  let m='';
  if(n.syn.length) m+=`<span class="chip">${T.syn} <b class="sci">${n.syn.map(esc).join('; ')}</b></span>`;
  if(n.n2k) m+=`<span class="chip">${T.n2k} <b class="mono">${esc(n.n2k)}</b></span>`;
  n.f.forEach(f=>{m+=`<span class="chip flag" title="${esc(f==='r'?T.fRT:T.fST)}">${esc(f==='r'?T.fR:T.fS)}</span>`});
  n.cf.forEach(x=>{ if(N[x]) m+=`<button class="chip cf" data-go="c-${x}">${esc(T.cf)} <b class="mono">${esc(x)}</b> ${esc(N[x].n)}</button>`});
  if(m) h+=`<div class="meta">${m}</div>`;
  h+=`</header>`;
  const d=desc(c);
  if(d.length){
    h+=`<section class="tree"><div class="sec-label">${esc(T.within)}</div><ul>`;
    const d0=depth(c);
    d.forEach(x=>{h+=`<li style="--lv:${depth(x)-d0-1}"><button data-go="c-${x}">${codeTag(x)}<span class="nm">${esc(N[x].n)}${N[x].n2k?` <span class="n2k">${esc(N[x].n2k)}</span>`:''}</span>${LM[x].length?`<small>${esc(T.hasList)}</small>`:''}</button></li>`;});
    h+=`</ul></section>`;
  }
  h+=`<section class="xref">`;
  if(LM[c].length) h+=`<div class="sec-label">${esc(T.lasenHere)}</div><ul class="hlist">${LM[c].map(lasenLink).join('')}</ul>`;
  else if(d.some(x=>LM[x].length)) h+=`<p class="note">${esc(T.lasenBelow)}</p>`;
  else { const up=anc.slice().reverse().find(a=>LM[a].length);
    h+= up?`<div class="sec-label">${esc(T.lasenAbove)} <button class="lnk" data-go="c-${up}">${esc(up)}</button></div><ul class="hlist">${LM[up].map(lasenLink).join('')}</ul>`:`<p class="note">${esc(T.noList)}</p>`; }
  h+=`</section>`;
  let ph='';
  if(LM[c].length) ph=`<div class="sec-label">${esc(T.phHere)}</div>`+LM[c].map(e=>entryTiles(e,false)).join('');
  else if(d.some(x=>LM[x].length)){ if(depth(c)>0) ph=`<div class="sec-label">${esc(T.phBelow)}</div>`+d.filter(x=>LM[x].length).map(x=>LM[x].map((e,j)=>entryTiles(e,true,`<button class="lnk2" data-go="c-${x}">${codeTag(x)} ${esc(N[x].n)}</button>${LM[x].length>1?` <span class="sub">· ${esc(H[e.id].name)}</span>`:''}`)).join('')).join(''); }
  else { const up=anc.slice().reverse().find(a=>LM[a].length); if(up) ph=`<div class="sec-label">${esc(T.phAbove)}</div>`+LM[up].map(e=>entryTiles(e,true)).join(''); }
  if(ph) h+=`<section class="clphotos">${ph}</section>`;
  const ix=NL.indexOf(n), pv=NL[ix-1], nx=NL[ix+1];
  h+=`<nav class="pager">${pv?`<button data-go="c-${pv.c}"><small>${T.prev} · ${pv.c}</small>${esc(pv.n)}</button>`:'<span></span>'}${nx?`<button data-go="c-${nx.c}" style="text-align:right;margin-left:auto"><small>${T.next} · ${nx.c}</small>${esc(nx.n)}</button>`:''}</nav>`;
  return h;
}

/* ---------- Lasen views ---------- */
function viewLAHome(){
  const all=Object.values(SP);
  const nSp=all.length, nCard=all.filter(s=>s.d).length, nPh=all.filter(s=>s.img).length;
  const nRed=all.filter(s=>['RE','CR','EN','VU'].includes(s.rl)).length;
  let h=`<section class="hero"><div class="eyebrow">${esc(T.laEyebrow)}</div><h1>${esc(T.laH1)}</h1><p>${esc(T.laIntro)}</p>
  <div class="stats"><div class="stat"><b>${D.order.length}</b><span>${T.sHab}</span></div><div class="stat"><b>${nSp}</b><span>${T.sSp}</span></div><div class="stat"><b>${nCard}</b><span>${T.sCard}</span></div><div class="stat"><b>${nPh}</b><span>${T.sPhoto}</span></div><div class="stat"><b>${nRed}</b><span>${T.sThreat}</span></div></div>
  <p class="switch-note"><button class="lnk" data-go="home">${esc(T.laToCL)}</button></p></section><div class="groups">`;
  G.forEach(g=>{
    h+=`<section class="gcard"><h2>${esc(g.name)}</h2><ul>`;
    g.habitats.forEach(id=>{const hb=H[id];const k=hb.units.reduce((a,u)=>a+u.items.filter(i=>i.n&&i.k).length,0);
      h+=`<li><button data-go="h-${id}"><span>${esc(hb.name)}</span><small>${k} ${T.key}</small></button></li>`;});
    h+=`</ul></section>`;
  });
  h+=`</div><section class="legend"><h2>${esc(T.legend)}</h2><div class="legend-grid">`;
  Object.keys(RLC).forEach(k=>{h+=`<div>${rlBadge(k)}<span>${esc(T.RL[k])}</span></div>`});
  h+=`<div><span class="badge b-P">${esc(T.protected)}</span><span>${esc(T.protLeg)}</span></div><div><span class="badge b-A">${esc(T.alien)}</span><span>${esc(T.alienLeg)}</span></div></div>
  <p class="note">${esc(T.laNote)}</p></section><p class="foot">${T.laSource}</p>`;
  return h;
}
function cardHTML(n,pack){
  const s=SP[n];
  return `<button class="card" data-sp="${esc(slug(n))}">${photo(n,s,pack,false)}<div class="card-body">
    <div class="sci">${esc(n)}</div><div class="names">${nameLine(s)}</div>
    <div class="badges">${badges(s,true)}</div><p>${esc(s.d||'')}</p></div></button>`;
}
function tileHTML(i,pack){
  if(i.g) return `<div class="tile gen"><span class="sci">${esc(i.g)}</span></div>`;
  const s=SP[i.n];
  return `<button class="tile${s.d?' card-yes':''}" data-sp="${esc(slug(i.n))}" title="${esc(localName(s))}${s.rl?' · '+esc(s.rl):''}">${photo(i.n,s,pack,!i.k)}<span class="tb"><span class="sci">${esc(i.n)}</span><span class="ln">${s.rl?`<span class="dot" style="background:${rlColor(s.rl)}"></span>`:''}${esc(localName(s))}</span></span></button>`;
}
function codeChip(c){ return `<button class="chip cf" data-go="c-${c}">${esc(T.clTypes)} <b class="mono">${esc(c)}</b> ${esc(N[c].n)}</button>`; }
function viewHab(id){
  const hb=H[id], g=G.find(x=>x.id===hb.group), pack=0;
  const all=hb.units.flatMap(u=>u.items.filter(i=>i.n));
  const nk=all.filter(i=>i.k).length, nThreat=all.filter(i=>['RE','CR','EN','VU'].includes(SP[i.n].rl)).length;
  const multi=hb.codes.length>1;
  let h=`<header class="hab-head"><div class="eyebrow">${esc(T.vLA)} · ${esc(g.name)}</div><h1>${esc(hb.name)}</h1><p class="it-name">${esc(hb.sub)}</p><div class="meta">`;
  if(hb.syn) h+=`<span class="chip">${T.lasenSyn} <b class="sci">${esc(hb.syn)}</b></span>`;
  if(!multi) h+=codeChip(hb.codes[0]);
  h+=`</div><p class="hab-desc">${esc(hb.desc)}</p><div class="counts">${all.length} ${T.typical} · ${nk} ${T.keyCards} · ${nThreat} ${T.threatened}</div>`;
  if(multi) h+=`<div class="xcodes"><div class="sec-label">${esc(T.clTypes)}</div><div class="meta">${hb.codes.map(codeChip).join('')}</div></div>`;
  h+=`</header>`;
  hb.units.forEach(u=>{
    const keys=u.items.filter(i=>i.k&&i.n), others=u.items.filter(i=>!(i.k&&i.n));
    h+=`<section class="unit">`;
    if(u.label){const [a,b]=u.label.split(' - ');h+= b?`<h2><span class="sci" style="font-size:1.2rem;color:var(--ink)">${esc(a)}</span><span>${esc(b)}</span></h2>`:`<h2>${esc(a)}</h2>`;}
    if(multi) h+=`<div class="meta">${codeChip(u.code)}</div>`;
    if(keys.length) h+=`<div class="sec-label">${esc(T.keyLabel)}</div><div class="cards">${keys.map(i=>cardHTML(i.n,pack)).join('')}</div>`;
    if(others.length) h+=`<div class="sec-label">${esc(T.also)}</div><div class="tiles">${others.map(i=>tileHTML(i,pack)).join('')}</div>`;
    h+=`</section>`;
  });
  const ix=D.order.indexOf(id), pv=D.order[ix-1], nx=D.order[ix+1];
  h+=`<nav class="pager">${pv?`<button data-go="h-${pv}"><small>${T.prev}</small>${esc(H[pv].name)}</button>`:'<span></span>'}${nx?`<button data-go="h-${nx}" style="text-align:right;margin-left:auto"><small>${T.next}</small>${esc(H[nx].name)}</button>`:''}</nav>`;
  return h;
}

/* ---------- images ---------- */
function hydrate(){}

/* ---------- species panel ---------- */
let lastFocus=null;
function openSpecies(n){
  const s=SP[n]; if(!s) return;
  lastFocus=document.activeElement;
  const q=encodeURIComponent(n.replace(/ (agg|s\.l|s\.lat|spp?)\.?$/,'').replace(' × ',' '));
  let h=`<button class="dr-close" id="drClose" aria-label="${esc(T.close)}">×</button>${photo(n,s)}<div class="dr-in">
  <h2 id="drTitle">${esc(n)}</h2><div class="names">${nameLine(s)}</div><div class="badges">${badges(s,true)}</div>`;
  h+= s.d?`<p>${esc(s.d)}</p>`:`<p class="nocard">${esc(T.nocard)}</p>`;
  if(s.rl&&T.RL[s.rl]) h+=`<p class="note" style="margin-top:0">${esc(T.redlist)}: ${esc(T.RL[s.rl])} (${esc(s.rl)}).</p>`;
  if(s.cr) h+=`<p class="note" style="margin-top:0">${esc(T.photoBy)}: ${credit(s)}${s.cr.d?' · '+esc(s.cr.d):''}${s.cr.u?` · <a href="${esc(s.cr.u)}" target="_blank" rel="noopener">${esc(T.seeRecord)}</a>`:''}</p>`;
  h+=`<div class="dr-sec"><h3>${esc(T.foundIn(s.hab.length))}</h3><ul class="hlist">`;
  s.hab.forEach(id=>{h+=`<li><button data-go="h-${id}"><span>${esc(H[id].name)}</span>${s.key.includes(id)?`<small>${esc(T.keyTag)}</small>`:''}</button></li>`});
  h+=`</ul></div><div class="dr-sec"><h3>${esc(T.inTypes)}</h3><ul class="hlist">`;
  s.codes.slice().sort().forEach(c=>{h+=`<li><button data-go="c-${c}"><span>${codeTag(c)} ${esc(N[c].n)}</span></button></li>`});
  h+=`</ul></div><div class="dr-sec"><h3>${esc(T.morePhotos)}</h3><div class="links">
  <a href="https://commons.wikimedia.org/w/index.php?search=${q}&title=Special:MediaSearch&type=image" target="_blank" rel="noopener">Wikimedia Commons</a>
  <a href="https://www.inaturalist.org/taxa/search?q=${q}" target="_blank" rel="noopener">iNaturalist</a></div></div></div>`;
  const d=$('#drawer'); d.innerHTML=h; d.hidden=false; $('#scrim').hidden=false; d.scrollTop=0; $('#drClose').focus(); hydrate(d);
}
function closeDrawer(){ $('#drawer').hidden=true; if(!$('#index').classList.contains('open')) $('#scrim').hidden=true; if(lastFocus&&lastFocus.focus) lastFocus.focus(); }

/* ---------- routing with history (offline app) ----------
   Every view, the species panel and the open menu are history entries {v: view, sp: species slug, menu, y: scroll, d: depth},
   so the phone's back gesture steps back through them; the back button in the header does the same. */
const HS=()=>history.state||{v:current,d:0};
function hPush(st,hash,y){ try{ history.replaceState(Object.assign({},HS(),{y:y==null?window.scrollY:y}),''); history.pushState(st,'','#'+hash); }catch(e){} }
function hReplace(st,hash){ try{ history.replaceState(st,'','#'+hash); }catch(e){} }
function go(token){
  if(token.startsWith('s-')){ const n=bySlug[token.slice(2)]; if(n) showSpecies(n); return; }
  const st=HS(), overlay=st.sp||st.menu, y=window.scrollY;
  clearTimeout(window._yT); closeIndex(true); closeDrawer(); render(token);
  const ns={v:current,d:overlay?st.d:(st.d||0)+1};
  if(overlay) hReplace(ns,current); else hPush(ns,current,y);   // a menu or species panel is replaced, not stacked
  backBtn();
}
function showSpecies(n){
  if(!SP[n]) return;
  const st=HS(), ns={v:current,sp:slug(n),d:(st.d||0)+(st.sp?0:1)};
  if(st.sp||st.menu) hReplace(ns,'s-'+slug(n)); else hPush(ns,'s-'+slug(n));
  closeIndex(true); openSpecies(n); backBtn();
}
function hideOverlay(){ const st=HS(); if((st.sp||st.menu)&&st.d>0) history.back(); else { closeDrawer(); closeIndex(true); if(st.sp||st.menu) hReplace({v:current,d:st.d||0},current); } }
function parentOf(v){ return v.startsWith('h-')?'lasen': v.startsWith('c-')?(N[v.slice(2)].p?'c-'+N[v.slice(2)].p:'home'): v==='credits'?'app':'home'; }
function goBack(){
  const st=HS();
  if(st.d>0){ history.back(); return; }
  if(st.sp||st.menu){ hideOverlay(); return; }
  const p=parentOf(current); closeDrawer(); closeIndex(true); render(p); hReplace({v:current,d:0},current); backBtn();
}
function backBtn(){ const top=current==='home'&&!HS().sp; $('#backBtn').hidden=top; document.querySelector('.top').classList.toggle('sub',!top); }
window.addEventListener('popstate',e=>{
  const st=e.state||{v:(location.hash.slice(1)||'home'),d:0};
  if(!st.menu) closeIndex(true); else openIndex(true);
  if(st.v!==current) { closeDrawer(); render(st.v); }
  if(st.sp&&bySlug[st.sp]) openSpecies(bySlug[st.sp]); else if(!$('#drawer').hidden) closeDrawer();
  if(!st.sp&&!st.menu) requestAnimationFrame(()=>window.scrollTo(0,st.y||0));
  backBtn();
});
function render(token){
  current= token==='lasen'?'lasen' : token==='credits'?'credits' : token==='app'?'app' : token.startsWith('c-')&&N[token.slice(2)]?token : token.startsWith('h-')&&H[token.slice(2)]?token : 'home';
  $('#main').innerHTML= current==='home'?viewCLHome(): current==='lasen'?viewLAHome(): current==='credits'?viewCredits(): current==='app'?viewApp(): current.startsWith('c-')?viewNode(current.slice(2)):viewHab(current.slice(2));
  hydrate($('#main'));
  buildIndex();
  document.querySelectorAll('.ix').forEach(b=>b.classList.toggle('on',b.dataset.go===current));
  window.scrollTo(0,0);
  const on=document.querySelector('.ix.on'), ix=$('#index'); if(on&&ix.offsetParent!==null&&getComputedStyle(ix).position!=='fixed') on.scrollIntoView({block:'nearest'});
  try{localStorage.setItem('sth-last',current)}catch(e){}
  if(current==='app') OFF.paint();
}

/* ---------- search ---------- */
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const idx=[];
NL.forEach(n=>idx.push({t:'c',c:n.c,k:norm([n.c,n.n,n.s,n.s2||'',n.syn.join(' '),n.n2k].join(' '))}));
D.order.forEach(id=>{const h=H[id];idx.push({t:'h',id,k:norm(h.name+' '+h.sub+' '+h.syn)})});
Object.entries(SP).forEach(([n,s])=>idx.push({t:'s',n,k:norm(n+' '+s.it+' '+(s.en||'')+' '+(s.de||'')),card:!!s.d}));
let resSel=-1;
function search(q){
  const box=$('#results'); q=norm(q.trim());
  if(q.length<2){box.hidden=true;return}
  const terms=q.split(/\s+/);
  const r=idx.filter(e=>terms.every(t=>e.k.includes(t)));
  const by=t=>r.filter(e=>e.t===t).sort((a,b)=>((b.k.startsWith(q))-(a.k.startsWith(q)))||((b.card||0)-(a.card||0)));
  const out=[...by('c').slice(0,10),...by('h').slice(0,8),...by('s').slice(0,30)];
  if(!out.length){box.innerHTML=`<div class="res-empty">${esc(T.noMatch(q))}</div>`;box.hidden=false;return}
  box.innerHTML=out.map(e=>e.t==='c'
    ?`<button class="res" data-go="c-${e.c}"><span>${esc(N[e.c].n)}</span><span class="sub"><span class="mono">${e.c}</span>${N[e.c].syn.length?' · '+esc(N[e.c].syn[0]):''}</span><span class="kind">${T.kCL}</span></button>`
    :e.t==='h'?`<button class="res" data-go="h-${e.id}"><span>${esc(H[e.id].name)}</span><span class="sub">${esc(H[e.id].syn)}</span><span class="kind">${T.kLA}</span></button>`
    :`<button class="res" data-sp="${esc(slug(e.n))}"><span class="sci">${esc(e.n)}</span><span class="sub">${LANG==='de'?esc((SP[e.n].de?SP[e.n].de+' · ':'')+SP[e.n].it):LANG==='it'?esc(SP[e.n].it):esc((SP[e.n].en?SP[e.n].en+' · ':'')+SP[e.n].it)}</span><span class="kind">${SP[e.n].d?T.kCard:T.kListed}</span></button>`).join('');
  box.hidden=false; resSel=-1;
}
$('#q').addEventListener('input',e=>search(e.target.value));
$('#q').addEventListener('keydown',e=>{
  const items=[...document.querySelectorAll('#results .res')]; if(!items.length) return;
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();resSel=(resSel+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items.forEach((b,i)=>b.classList.toggle('on',i===resSel));items[resSel].scrollIntoView({block:'nearest'})}
  if(e.key==='Enter'){e.preventDefault();(items[resSel]||items[0]).click()}
  if(e.key==='Escape'){$('#results').hidden=true}
});
document.addEventListener('click',e=>{
  if(e.target.closest('#drClose')){hideOverlay();return}
  if(e.target.closest('#backBtn')){goBack();return}
  const lb=e.target.closest('[data-lang]'); if(lb){ setLang(lb.dataset.lang); return; }
  const ab=e.target.closest('[data-app]'); if(ab){ appAction(ab.dataset.app); return; }
  const sp=e.target.closest('[data-sp]'), gt=e.target.closest('[data-go]');
  if(!e.target.closest('.search')) $('#results').hidden=true;
  if(sp){ $('#results').hidden=true; $('#q').blur(); showSpecies(bySlug[sp.dataset.sp]); return;}
  if(gt){ $('#results').hidden=true; $('#q').value=''; $('#q').blur(); go(gt.dataset.go); return;}
});
$('#scrim').addEventListener('click',hideOverlay);
document.addEventListener('keydown',e=>{if(e.key==='Escape') hideOverlay();});
$('#brand').addEventListener('click',e=>{e.preventDefault();go('home')});
function closeIndex(){ $('#index').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded','false'); if($('#drawer').hidden) $('#scrim').hidden=true; }
function openIndex(){ $('#index').classList.add('open'); $('#menuBtn').setAttribute('aria-expanded','true'); $('#scrim').hidden=false; const on=$('#index .ix.on'); if(on) on.scrollIntoView({block:'center'}); }
$('#menuBtn').addEventListener('click',()=>{
  if($('#index').classList.contains('open')){ hideOverlay(); return; }
  const st=HS(); if(st.sp){ closeDrawer(); hReplace({v:current,d:st.d},current); }
  hPush({v:current,menu:true,d:(HS().d||0)+1},current); openIndex();
});
$('#backBtn').innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg><span>${esc(U.back)}</span>`;
document.addEventListener('error',e=>{const im=e.target; if(im.tagName==='IMG'){const ph=im.closest('.ph'); if(ph){ph.innerHTML=`<span class="pend">${esc(T.pending)}</span>`}}},true);

/* ---------- credits and app views (offline version only) ---------- */
const LIC={'CC0':'https://creativecommons.org/publicdomain/zero/1.0/','CC BY 4.0':'https://creativecommons.org/licenses/by/4.0/','CC BY-SA 4.0':'https://creativecommons.org/licenses/by-sa/4.0/','CC BY-NC 4.0':'https://creativecommons.org/licenses/by-nc/4.0/','CC BY-NC-SA 4.0':'https://creativecommons.org/licenses/by-nc-sa/4.0/'};
const licLink=l=>LIC[l]?`<a href="${LIC[l]}" target="_blank" rel="noopener">${esc(l)}</a>`:esc(l||'');
function viewCredits(){
  const rows=Object.keys(SP).filter(n=>SP[n].cr).sort();
  const by={}; rows.forEach(n=>{const l=SP[n].cr.l||'?'; by[l]=(by[l]||0)+1});
  let h=`<section class="hero"><div class="eyebrow">${esc(U.appName)}</div><h1>${esc(U.credTitle)}</h1><p>${esc(U.credIntro)}</p>
  <div class="meta">${Object.keys(by).sort().map(l=>`<span class="chip">${licLink(l)} <b>${by[l]}</b></span>`).join('')}</div>
  <p class="note">${esc(U.credMod)}</p></section><ul class="credits">`;
  rows.forEach(n=>{const c=SP[n].cr; h+=`<li><button class="lnk2" data-sp="${esc(slug(n))}"><span class="sci">${esc(n)}</span></button><span>© ${esc(c.a||T.unknownAuthor)} · ${licLink(c.l)}${c.d?' · '+esc(c.d):''}${c.u?` · <a href="${esc(c.u)}" target="_blank" rel="noopener">${esc(T.seeRecord)}</a>`:''}</span></li>`});
  h+=`</ul><section class="legend"><h2>${esc(U.fontsTitle)}</h2><p class="note" style="margin:0">${esc(U.fontsText)}</p></section>`;
  return h;
}
function viewApp(){
  return `<section class="hero"><div class="eyebrow">${esc(U.appName)}</div><h1>${esc(U.offTitle)}</h1><div id="offBox"></div></section>
  <section class="legend"><h2>${esc(U.aboutTitle)}</h2><p class="note" style="margin:0 0 10px">${esc(U.aboutText)}</p>
  <p class="note" style="margin:0"><button class="lnk" data-go="credits">${esc(U.credTitle)}</button></p>
  <p class="note">${esc(U.version)} <span class="mono">${esc(OFF.version)}</span></p></section>`;
}
window.addEventListener('offline-state',()=>{ if(current==='app') OFF.paint(); OFF.dot(); });
OFF.dot();
const st0=history.state;
if(st0&&st0.v){                                   // reload, e.g. after a language switch: same place, same history
  render(st0.v); if(st0.sp&&bySlug[st0.sp]) openSpecies(bySlug[st0.sp]); else if(st0.menu) openIndex(); else requestAnimationFrame(()=>window.scrollTo(0,st0.y||0));
} else {
  let start=(location.hash||'').slice(1);
  if(!start){try{start=localStorage.getItem('sth-last')||'home'}catch(e){start='home'}}
  if(start.startsWith('s-')&&bySlug[start.slice(2)]){ render('lasen'); hReplace({v:current,d:0},current); showSpecies(bySlug[start.slice(2)]); }
  else { render(start||'home'); hReplace({v:current,d:0},current); }
}
window.addEventListener('scroll',()=>{ clearTimeout(window._yT); window._yT=setTimeout(()=>{ const st=HS(); if(!st.sp&&!st.menu) try{history.replaceState(Object.assign({},st,{y:window.scrollY}),'')}catch(e){} },200); },{passive:true});
backBtn();
}
