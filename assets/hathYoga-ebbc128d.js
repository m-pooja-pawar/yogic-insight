import{a as d,r as e,j as o}from"./index-072cde36.js";import{S as h}from"./sectionWithHeader-1eaa338f.js";function n(){return d.get("/data/hathaYoga.json")}function c(){const[a,s]=e.useState(),r=e.useCallback(async()=>{n().then(t=>{t&&t.data&&s(t.data.data)})},[s]);return e.useEffect(()=>{r()},[r]),a?o.jsx(h,{data:a.data,header:a.header,sub_data:a.sub_data}):o.jsx(o.Fragment,{})}export{c as default};
