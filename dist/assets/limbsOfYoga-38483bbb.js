import{a as r,r as a,j as s}from"./index-072cde36.js";import{M as m}from"./multipleSectionsWithHeader-6797d2b9.js";function n(){return r.get("/data/limbs.json")}function f(){const[e,i]=a.useState(),o=a.useCallback(async()=>{n().then(t=>{t&&t.data&&i(t.data.data)})},[i]);return a.useEffect(()=>{o()},[o]),e?s.jsx(m,{...e}):s.jsx(s.Fragment,{})}export{f as default};
