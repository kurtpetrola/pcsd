/*! For license information please see main.bundle.js.LICENSE.txt */
  position: absolute;
  top: 0;
  left: ${e=>e.$isShowing?"0":"100%"};

  width: 100%;
  height: 100%;

  background-color: #b9b9b9;
  transition: left 0.2s;

  display: flex;
  flex-direction: column;
`,l=r.Ay.div`
  width: 100%;
  flex: 0 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #919191;
  color: white;
`,h=r.Ay.div`
  width: 40px;
  text-align: center;
  align-items: center;
  background-color: #919191;
  color: white;
  font-weight: bold;
  font-size: 20px;
`,c=r.Ay.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding-right: 40px;
  flex: 1;
`,u=r.Ay.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`,d=r.Ay.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`,f=r.Ay.div`
  padding: 5px;
  padding-bottom: 0;
  box-sizing: border-box;
  width: 100%;
  flex: 0 0 45px;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`,_=r.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`,p=[{name:"Case",url:"res/case_sample.glb",compat:s.x$.parseFromCompatString("case")},{name:"120mm Fan",url:"res/120mm_fan_sample.glb",compat:s.x$.parseFromCompatString("fan,120")},{name:"ATX PowerSupply",url:"res/atx_power_sample.glb",compat:s.x$.parseFromCompatString("powersupply,ATX")},{name:"ATX Motherboard",url:"res/atx_motherboard_sample.glb",compat:s.x$.parseFromCompatString("motherboard,ATX")},{name:"Intel CPU",url:"res/cpu_sample.glb",compat:s.x$.parseFromCompatString("cpu,LGA1700")},{name:"LGA1700 Cooler",url:"res/cooler_sample.glb",compat:s.x$.parseFromCompatString("cooler,LGA1700")},{name:"DDR4 RAM",url:"res/ddr4_ram_sample.glb",compat:s.x$.parseFromCompatString("ram,DDR4")},{name:"NVIDIA GPU",url:"res/gpu_sample.glb",compat:s.x$.parseFromCompatString("pcie,x16")},{name:"NVME SSD",url:"res/nvme_ssd_sample.glb",compat:s.x$.parseFromCompatString("storage,NVMESSD")}];for(let e=0;e<p.length;++e){const t=p[e];if(void 0===t.compat)throw new Error(`Failed to parse compat string for ${t.name}`)}function m(e){const{target:t,onSelected:i}=e;return(0,n.jsxs)(o,{$isShowing:void 0!==t,children:[(0,n.jsxs)(l,{children:[(0,n.jsx)(h,{onClick:()=>i(void 0),children:"◀"}),(0,n.jsxs)(c,{children:["Add to"," ","root"===t?"ROOT":a.f[t?.name||""]||t?.name," ","Location"]})]}),(0,n.jsx)(u,{children:(0,n.jsx)(d,{children:void 0!==t?("root"===t?p:p.filter((e=>{const i=t.points;let n=!1;for(let r=0;r<i.length;++r){const s=i[r];if(t.checkPointAvailability(r)&&s.compatability.isCompatibleWith(e.compat)){n=!0;break}}return n}))).map((e=>(0,n.jsx)(f,{children:(0,n.jsx)(_,{onClick:()=>i(e.url),children:e.name})},e.name))):null})})]})}},949:(e,t,i)=>{"use strict";i.d(t,{x:()=>l});var n=i(848),r=i(715),s=i(540);const a=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: #b9b9b9;

  transition: opacity 0.2s;
  opacity: ${e=>e.$opacity};
  pointer-events: ${e=>e.$pointerEvents};
`,o=r.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 50px;
  height: 50px;

  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;function l(e){const{isShowing:t}=e,[i,r]=(0,s.useState)();(0,s.useEffect)((()=>{t!==i&&r(t)}),[t]);const[l,h]=(0,s.useState)(!1),[c,u]=(0,s.useState)();return(0,s.useEffect)((()=>{h(!0),window.clearTimeout(c),u(window.setTimeout((()=>{h(!1)}),300))}),[i]),t||l?(0,n.jsx)(a,{$opacity:t?1:0,$pointerEvents:"auto",children:(0,n.jsx)(o,{})}):(0,n.jsx)(a,{$opacity:0,$pointerEvents:"none"})}},573:(e,t,i)=>{"use strict";i.a(e,(async(e,n)=>{try{i.d(t,{A:()=>w});var r=i(848),s=i(715),a=i(540),o=i(244),l=i(913),h=i(393),c=i(104),u=i(949),d=e([h]);h=(d.then?(await d)():d)[0];const f=s.Ay.div`
  @media screen and (orientation: portrait) {
    width: 100%;
    height: ${()=>h._};
  }
  @media screen and (orientation: landscape) {
    width: ${()=>h.i};
    height: 100%;
  }
  position: relative;
  overflow: hidden;
`,_=s.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 5px;
`,p=s.Ay.div`
  padding: 5px;
  padding-bottom: 0;
  box-sizing: border-box;
  width: 100%;
  flex: 0 0 45px;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  user-select: none;
`,m=s.Ay.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #919191;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`,g=s.Ay.div`
  width: 40px;
  text-align: center;
  align-items: center;
  background-color: #919191;
  color: white;
  font-weight: bold;
  font-size: 20px;
  position: relative;
`,v=s.Ay.div`
  flex: 1;
  align-content: center;
  text-align: right;
`,E=s.Ay.div`
  width: 40px;
  text-align: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transform: translateY(-2px);
`,T=s.Ay.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`,A=s.Ay.div`
  border-style: solid;
  border-width: 2px;
  border-color: #919191;
  border-top-width: 0;
`,b=s.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d8d8d8;
  opacity: ${e=>e.$enabled?1:.5};
  transition: opacity 0.2s;
`,y={drive_holder:"Drive Holder",front_panel:"Front Panel",side_armour:"Side Armour",side_glass:"Side Glass",power_nail:"Power Nail"},S=(0,a.createContext)((()=>{}));function R(e){const{toggleTarget:t}=e,i=(0,a.useContext)(S),n=(0,a.useCallback)((()=>{t.setEnabled(!t.enabled),i()}),[t,i]);return(0,r.jsx)(T,{children:(0,r.jsx)(b,{onClick:n,$enabled:t.enabled,children:y[t.name]||t.name})})}const C=s.Ay.div`
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`,x=s.Ay.div`
  width: 5px;
  height: 100%;
  margin-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  background-color: #5a5a5a;
  border-radius: 40px;
`,I=s.Ay.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`,M=s.Ay.div`
  padding: 5px;
  padding-bottom: 0;
  box-sizing: border-box;
  width: 100%;
  flex: 0 0 45px;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`,P=s.Ay.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #769955;
  color: white;
  cursor: pointer;
`,D=s.Ay.div`
  font-weight: normal;
  font-size: 16px;
  padding-left: 10px;
`,O=s.Ay.div`
  font-size: 12px;
  font-weight: normal;
  color: #d8d8d8;
  padding-right: 10px;
  cursor: pointer;
`;function N(e){const{mountPoint:t,onClick:i}=e,n="string"==typeof t?t:t.name,s=l.f[n]||n;return(0,r.jsx)(M,{children:(0,r.jsxs)(P,{onClick:()=>i(t),children:[(0,r.jsx)(D,{children:s}),(0,r.jsx)(O,{children:"Click to load new components."})]})},s)}const L=(0,a.createContext)(void 0);function F(e){const{model:t,onClickEmptyMountPoint:i}=e,n=(0,a.useContext)(S),s=(0,a.useContext)(L),[o,l]=(0,a.useState)(!1),h=(0,a.useCallback)((()=>{t.onDisposeObservable.addOnce((()=>s?.disposeUnboundedModels())),t.dispose(),n()}),[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p,{children:[(0,r.jsxs)(m,{children:[t.toggleTargets.length>0?(0,r.jsx)(g,{onClick:()=>l(!o),children:o?"▼":"▶"}):null,(0,r.jsx)(v,{children:t.name}),(0,r.jsx)(E,{onClick:h,children:"✖"})]}),o?(0,r.jsx)(A,{children:t.toggleTargets.map((e=>(0,r.jsx)(R,{toggleTarget:e},e.name)))}):null]}),t.mountPoints.length>0?(0,r.jsxs)(C,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(I,{children:t.mountPoints.map((e=>e.attachedModel?(0,r.jsx)(F,{model:e.attachedModel,onClickEmptyMountPoint:i},e.name):(0,r.jsx)(N,{mountPoint:e,onClick:i},e.name)))})]}):null]})}function w(e){const{percent:t,setPrecent:i}=e,n=(0,o.q)(),[s,l]=(0,a.useState)(!1),[h,d]=(0,a.useState)(!1),[p,m]=(0,a.useState)(void 0),g=(0,a.useCallback)((e=>{m(e)}),[]),[v,E]=(0,a.useState)(),T=(0,a.useCallback)((e=>{if(void 0===n)return;if(void 0===v)return;if(E(void 0),void 0===e)return;const t=n.runtime;(async()=>{try{const i=await t.addModel(e);if(void 0===i)return;if("root"===v)return t.setBaseModel(i),t.disposeUnboundedModels(),void d((e=>!e));v.attach(i)||i.dispose(!0),d((e=>!e))}finally{}})()}),[n,v]);(0,a.useEffect)((()=>{if(void 0===n)return;if(s)return;l(!0);const e=n.runtime;function t(e){return new Promise((t=>{const n=setInterval((function(){i((i=>i>=e?(clearInterval(n),t(),i):i+1))}),100)}))}e.playAnimation(),e.onBaseModelChangedObservable.add(g),(async()=>{const[i]=await Promise.all([e.addModel("res/case_sample.glb"),t(70)]);e.setBaseModel(i);const[n]=await Promise.all([e.addModel("res/atx_motherboard_sample.glb"),t(80)]),[r]=await Promise.all([e.addModel("res/cooler_sample.glb"),t(85)]),[s]=await Promise.all([e.addModel("res/gpu_sample.glb"),t(90)]),[a]=await Promise.all([e.addModel("res/atx_power_sample.glb"),t(95)]),[o]=await Promise.all([e.addModel("res/120mm_fan_sample.glb"),t(97)]),l=[o];for(let t=0;t<4;++t){const t=await e.addModel("res/120mm_fan_sample.glb");l.push(t)}const[h]=await Promise.all([e.addModel("res/ddr4_ram_sample.glb"),t(99)]),c=[h];for(let t=0;t<1;++t){const t=await e.addModel("res/ddr4_ram_sample.glb");c.push(t)}const[u,f]=await Promise.all([e.addModel("res/cpu_sample.glb"),e.addModel("res/nvme_ssd_sample.glb"),t(100)]);await new Promise((e=>setTimeout(e,100)));{let e=0;const t=i.mountPoints;for(let i=0;i<t.length&&(t[i].attach(l[e])&&(e+=1,await new Promise((e=>setTimeout(e,200)))),!(e>=l.length));++i);}{const e=i.mountPoints;for(let t=0;t<e.length&&!e[t].attach(a);++t);}i.toggleTargets.find((e=>"drive_holder"===e.name));{const e=i.mountPoints;for(let t=0;t<e.length;++t)if(e[t].attach(n)){await new Promise((e=>setTimeout(e,200)));break}}{const e=n.mountPoints;for(let t=0;t<e.length;++t)if(e[t].attach(u)){await new Promise((e=>setTimeout(e,200)));break}}{const e=n.mountPoints;for(let t=0;t<e.length;++t)if(e[t].attach(r)){await new Promise((e=>setTimeout(e,200)));break}}{let e=0;const t=n.mountPoints;for(let i=0;i<t.length&&(t[i].attach(c[e])&&(e+=1,await new Promise((e=>setTimeout(e,200)))),!(e>=c.length));++i);}{const e=n.mountPoints;for(let t=0;t<e.length;++t)if(e[t].attach(f)){await new Promise((e=>setTimeout(e,200)));break}}{const e=n.mountPoints;for(let t=0;t<e.length;++t)if(e[t].attach(s)){await new Promise((e=>setTimeout(e,200)));break}}d((e=>!e))})()}),[n,s]);const A=(0,a.useMemo)((()=>(0,r.jsx)(u.x,{isShowing:Boolean(t<100)})),[t]);return(0,r.jsxs)(f,{children:[(0,r.jsx)(_,{children:(0,r.jsx)(S.Provider,{value:()=>d((e=>!e)),children:(0,r.jsx)(L.Provider,{value:n?.runtime,children:p?(0,r.jsx)(F,{model:p,onClickEmptyMountPoint:E}):(0,r.jsx)(N,{mountPoint:"root",onClick:E})})})}),(0,r.jsx)(c.E,{target:v,onSelected:T}),A]})}n()}catch(B){n(B)}}))},312:(e,t,i)=>{"use strict";i.d(t,{t:()=>a,y:()=>o});var n=i(848),r=i(540);const s=(0,r.createContext)(null);function a(e){return(0,n.jsx)(s.Provider,{value:e.canvas,children:e.children})}function o(){return(0,r.useContext)(s)}},393:(e,t,i)=>{"use strict";i.a(e,(async(e,n)=>{try{i.d(t,{_:()=>d,i:()=>f});var r=i(848),s=i(338),a=i(540),o=i(715),l=i(218),h=i(312),c=i(573),u=e([c]);c=(u.then?(await u)():u)[0],await new Promise((e=>window.onload=e));const d="min(120mm, 45%)",f="min(100mm, 35%)",_=o.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: row;
  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
  font-family: 'Arial', sans-serif;
`,p=o.Ay.canvas`
  @media screen and (orientation: portrait) {
    width: 100%;
    height: calc(100% - ${()=>d});
  }
  @media screen and (orientation: landscape) {
    width: calc(100% - ${()=>f});
    height: 100%;
  }
  display: block;
  outline: none;
`;function m(){const e=(0,a.useRef)(null),[t,i]=(0,a.useState)(0),[n,s]=(0,a.useState)(null);return(0,a.useEffect)((()=>{null!==e.current&&s(e.current)}),[e.current]),(0,r.jsxs)(_,{children:[(0,r.jsx)("div",{style:{display:t<100?"flex":"none",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",backgroundColor:"black",opacity:.6,zIndex:100},children:(0,r.jsxs)("div",{style:{width:"50%",maxWidth:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(l.N1,{percent:t,strokeWidth:8,trailWidth:8}),(0,r.jsx)("span",{style:{position:"absolute",alignSelf:"center",userSelect:"none",opacity:.5},children:"loading..."})]})}),(0,r.jsx)(p,{ref:e}),(0,r.jsx)(h.t,{canvas:n,children:(0,r.jsx)(c.A,{percent:t,setPrecent:i})})]})}const g=document.createElement("div");g.style.width="100%",g.style.height="100%",g.style.margin="0",g.style.padding="0",document.body.appendChild(g),s.createRoot(g).render((0,r.jsx)(m,{})),n()}catch(v){n(v)}}),1)},942:(e,t)=>{var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=a(e,s(i)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)n.call(e,i)&&e[i]&&(t=a(t,i));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,a),i.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(r,s,a)=>{var o;a&&((o=[]).d=-1);var l,h,c,u=new Set,d=r.exports,f=new Promise(((e,t)=>{c=t,h=e}));f[t]=d,f[e]=e=>(o&&e(o),u.forEach(e),f.catch((e=>{}))),r.exports=f,s((r=>{var s;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var s=[];s.d=0,r.then((e=>{a[t]=e,n(s)}),(e=>{a[i]=e,n(s)}));var a={};return a[e]=e=>e(s),a}}var o={};return o[e]=e=>{},o[t]=r,o})))(r);var a=()=>l.map((e=>{if(e[i])throw e[i];return e[t]})),h=new Promise((t=>{(s=()=>t(a)).r=0;var i=e=>e!==o&&!u.has(e)&&(u.add(e),e&&!e.d&&(s.r++,e.push(s)));l.map((t=>t[e](i)))}));return s.r?h:a()}),(e=>(e?c(f[i]=e):h(d),n(o)))),o&&o.d<0&&(o.d=0)},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,a(393)})();