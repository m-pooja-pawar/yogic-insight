import{a as d,r,j as e}from"./index-76a3aa38.js";import{S as o}from"./sectionWithHeader-16fb59da.js";function u(){return d.get("/data/prana.json")}function f(){const[a,n]=r.useState(),s=r.useCallback(async()=>{u().then(t=>{t&&t.data&&n(t.data.data)})},[n]);return r.useEffect(()=>{s()},[s]),a?e.jsx(o,{data:a.data,header:a.header,sub_data:a.sub_data}):e.jsx(e.Fragment,{})}export{f as default};