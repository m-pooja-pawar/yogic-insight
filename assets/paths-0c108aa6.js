import{p as i,A as o,g as c,r as a,j as e}from"./index-60fba1e4.js";import{M as u}from"./multipleSectionsWithHeader-05334af0.js";function g(){return i.show(),o.getInstance().get(`/data/${c()}/paths.json`).finally(()=>i.hide())}function p(){const[s,n]=a.useState(),r=a.useCallback(async()=>{g().then(t=>{t&&t.data&&n(t.data)})},[n]);return a.useEffect(()=>{r()},[r]),s?e.jsx(u,{...s}):e.jsx(e.Fragment,{})}export{p as default};