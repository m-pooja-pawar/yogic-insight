if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"assets/chakras-41bae26f.js",revision:null},{url:"assets/definition-92cd3571.js",revision:null},{url:"assets/generalNotesForPranayama-403c42b9.js",revision:null},{url:"assets/generalNotesForYogaAsanas-118f2bae.js",revision:null},{url:"assets/hathYoga-73bfd24e.js",revision:null},{url:"assets/hathYogaAsana-58a8c28e.js",revision:null},{url:"assets/home-aa69a074.js",revision:null},{url:"assets/index-8ea6a821.js",revision:null},{url:"assets/limbsOfHathaYoga-8b652e0b.js",revision:null},{url:"assets/limbsOfYoga-0d0633b5.js",revision:null},{url:"assets/meditation-572ccaaf.js",revision:null},{url:"assets/mudras-907304bd.js",revision:null},{url:"assets/multipleSectionsWithHeader-63a1dd84.js",revision:null},{url:"assets/origin-2668c822.js",revision:null},{url:"assets/paths-6bebc611.js",revision:null},{url:"assets/prana-8b355697.js",revision:null},{url:"assets/pranayama-a2f39390.js",revision:null},{url:"assets/sectionWithHeader-9a7b7a5a.js",revision:null},{url:"index.html",revision:"424ec1742ccf03c91b3498839f734065"},{url:"registerSW.js",revision:"8f3892bff3122da5524b51b45b21439d"},{url:"manifest.webmanifest",revision:"caab472dc4c35f3c0cca2cd2e83a8020"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
