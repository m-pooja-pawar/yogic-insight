if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(l(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"assets/chakras-8d85ac0d.js",revision:null},{url:"assets/definition-a100a580.js",revision:null},{url:"assets/generalNotesForPranayama-d1e5df41.js",revision:null},{url:"assets/generalNotesForYogaAsanas-adc0a6b7.js",revision:null},{url:"assets/hathYoga-2f207577.js",revision:null},{url:"assets/hathYogaAsana-bebf0e17.js",revision:null},{url:"assets/home-21ec8e58.js",revision:null},{url:"assets/index-2aa61d30.js",revision:null},{url:"assets/limbsOfHathaYoga-2d10d0d4.js",revision:null},{url:"assets/limbsOfYoga-4478d0e4.js",revision:null},{url:"assets/meditation-bc70c9bb.js",revision:null},{url:"assets/mudras-b00a91b1.js",revision:null},{url:"assets/multipleSectionsWithHeader-3853997c.js",revision:null},{url:"assets/origin-66d3d3e2.js",revision:null},{url:"assets/paths-3596166c.js",revision:null},{url:"assets/prana-19aaca02.js",revision:null},{url:"assets/pranayama-eb63996f.js",revision:null},{url:"assets/sectionWithHeader-dcc1684c.js",revision:null},{url:"index.html",revision:"bf98c18347419afeef6f7198c96c3df9"},{url:"registerSW.js",revision:"8f3892bff3122da5524b51b45b21439d"},{url:"favicon.ico",revision:"f190b9f15bfe62be13b590be9f78eeb0"},{url:"manifest.webmanifest",revision:"2e5d34c21b1427d38e3e636c05a65da2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
