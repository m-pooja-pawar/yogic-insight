import{p as g,A as n,g as d,r as e,j as s}from"./index-a07759c2.js";import{S as h}from"./sectionWithHeader-dde91b29.js";function c(){return g.show(),n.getInstance().get(`/data/${d()}/hathaYoga.json`).finally(()=>g.hide())}function f(){const[a,o]=e.useState(),r=e.useCallback(async()=>{c().then(t=>{t&&t.data&&o(t.data)})},[o]);return e.useEffect(()=>{r()},[r]),a?s.jsx(h,{data:a.data,header:a.header,sub_data:a.sub_data}):s.jsx(s.Fragment,{})}export{f as default};
