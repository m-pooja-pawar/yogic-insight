import{p as r,A as c,g as i,r as t,j as a}from"./index-60fba1e4.js";import{M as g}from"./multipleSectionsWithHeader-05334af0.js";function l(){return r.show(),c.getInstance().get(`/data/${i()}/generalNotesForAsanas.json`).finally(()=>r.hide())}function d(){const[s,n]=t.useState(),o=t.useCallback(async()=>{l().then(e=>{e&&e.data&&n(e.data)})},[n]);return t.useEffect(()=>{o()},[o]),s?a.jsx(g,{...s}):a.jsx(a.Fragment,{})}export{d as default};