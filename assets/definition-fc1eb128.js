import{p as s,A as r,g as f,r as a,j as i}from"./index-a07759c2.js";import{S as d}from"./sectionWithHeader-dde91b29.js";function c(){return s.show(),r.getInstance().get(`/data/${f()}/definition.json`).finally(()=>s.hide())}function h(){const[t,n]=a.useState(),o=a.useCallback(async()=>{c().then(e=>{e&&e.data&&n(e.data)})},[n]);return a.useEffect(()=>{o()},[o]),t?i.jsx(d,{data:t.data,header:t.header}):i.jsx(i.Fragment,{})}export{h as default};
