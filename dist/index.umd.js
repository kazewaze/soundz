(function(p,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react"),require("howler"),require("lucide-react")):typeof define=="function"&&define.amd?define(["exports","react","howler","lucide-react"],o):(p=typeof globalThis<"u"?globalThis:p||self,o(p.Soundz={},p.React,p.Howler,p.Lucide))})(this,function(p,o,q,O){"use strict";var J={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function we(){if(ue)return N;ue=1;var c=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function s(w,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var R in l)R!=="key"&&(f[R]=l[R])}else f=l;return l=f.ref,{$$typeof:c,type:w,key:h,ref:l!==void 0?l:null,props:f}}return N.Fragment=m,N.jsx=s,N.jsxs=s,N}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function ve(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){function c(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case oe:return"Profiler";case $:return"StrictMode";case ae:return"Suspense";case se:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case re:return"Portal";case G:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:c(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return c(e(t))}catch{}}return null}function m(e){return""+e}function s(e){try{m(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,n=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),m(e)}}function w(e){if(e===F)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===I)return"<...>";try{var t=c(e);return t?"<"+t+">":"<...>"}catch{return"<...>"}}function l(){var e=_.A;return e===null?null:e.getOwner()}function f(){return Error("react-stack-top-frame")}function h(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function R(e,t){function r(){U||(U=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function te(){var e=c(this.type);return H[e]||(H[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function T(e,t,r,n,d,u,A,y){return r=u.ref,e={$$typeof:D,type:e,key:t,props:u,_owner:d},(r!==void 0?r:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:te}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:A}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:y}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function g(e,t,r,n,d,u,A,y){var a=t.children;if(a!==void 0)if(n)if(Z(a)){for(n=0;n<a.length;n++)Y(a[n]);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Y(a);if(W.call(t,"key")){a=c(e);var k=Object.keys(t).filter(function(ie){return ie!=="key"});n=0<k.length?"{key: someKey, "+k.join(": ..., ")+": ...}":"{key: someKey}",K[a+n]||(k=0<k.length?"{"+k.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,n,a,k,a),K[a+n]=!0)}if(a=null,r!==void 0&&(s(r),a=""+r),h(t)&&(s(t.key),a=""+t.key),"key"in t){r={};for(var S in t)S!=="key"&&(r[S]=t[S])}else r=t;return a&&R(r,typeof e=="function"?e.displayName||e.name||"Unknown":e),T(e,a,u,d,l(),r,A,y)}function Y(e){typeof e=="object"&&e!==null&&e.$$typeof===D&&e._store&&(e._store.validated=1)}var v=o,D=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),G=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),M=Symbol.for("react.client.reference"),_=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=Object.prototype.hasOwnProperty,Z=Array.isArray,b=console.createTask?console.createTask:function(){return null};v={"react-stack-bottom-frame":function(e){return e()}};var U,H={},j=v["react-stack-bottom-frame"].bind(v,f)(),Q=b(w(f)),K={};L.Fragment=F,L.jsx=function(e,t,r,n,d){var u=1e4>_.recentlyCreatedOwnerStacks++;return g(e,t,r,!1,n,d,u?Error("react-stack-top-frame"):j,u?b(w(e)):Q)},L.jsxs=function(e,t,r,n,d){var u=1e4>_.recentlyCreatedOwnerStacks++;return g(e,t,r,!0,n,d,u?Error("react-stack-top-frame"):j,u?b(w(e)):Q)}}()),L}var de;function be(){return de||(de=1,process.env.NODE_ENV==="production"?J.exports=we():J.exports=ve()),J.exports}var E=be();const Ee=(c,m)=>{const s={className:m?"sound-indicator":"",size:c.size??20,strokeWidth:c.strokeWidth??2.5};switch(c.name){case"speaker":return E.jsx(O.Volume2,{...s});case"waves":return E.jsx(O.Waves,{...s});case"audioLines":return E.jsx(O.AudioLines,{...s});case"audioWaves":return E.jsx(O.AudioWaveform,{...s});case"trophy":return E.jsx(O.Trophy,{...s});default:return null}},pe=o.createContext({});function he({children:c,...m}){return o.useEffect(()=>{const s=()=>{const w=new Audio;w.muted=!0,w.play().catch(()=>{}),window.removeEventListener("click",s)};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]),E.jsx(pe.Provider,{value:m,children:c})}const ee=new Map;function ye(c){var me;const m=o.useContext(pe),{children:s,providedFX:w="boop",customFX:l=null,noClickSound:f=!1,loading:h=null,wrap:R=null,fetchCooldown:te=1e4,clickCooldown:T=0,hoverFX:g=null,enableHaptics:Y=!0,keyboardKey:v=null,icon:D=null,showTooltip:re=!1,tooltipText:F="Now playing…",tooltipPosition:$="top",tooltipAnimation:oe="fade",theme:V="auto",customTheme:G=null,animationSpeed:ne="1s",layout:ae="inline-flex",className:se="",style:le={},apiBaseUrl:I}={...m,...c},[z,M]=o.useState(null),[_,W]=o.useState(!0),[Z,b]=o.useState(!1),U=o.useRef(0),H=o.useRef(0),j=o.useRef(null),Q=typeof window<"u"&&((me=window.matchMedia)==null?void 0:me.call(window,"(prefers-color-scheme: dark)").matches),K=V==="auto"?Q?"dark":"light":V,e={light:{tooltipBg:"#333",tooltipColor:"#fff",pulseColor:"#888"},dark:{tooltipBg:"#000",tooltipColor:"#fff",pulseColor:"#fff"},neon:{tooltipBg:"#0ff",tooltipColor:"#000",pulseColor:"#0ff"},pastel:{tooltipBg:"#ffeef1",tooltipColor:"#222",pulseColor:"#ffaacc"},mono:{tooltipBg:"#666",tooltipColor:"#eee",pulseColor:"#aaa"}},t=e[K]??e.light,r=G?{...t,...G}:t,n={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)"},d={top:"top: -1.5rem; left: 50%;",bottom:"bottom: -1.5rem; left: 50%;",left:"left: -1.5rem; top: 50%;",right:"right: -1.5rem; top: 50%;"},u={fade:"opacity 0.3s ease-in-out",scale:"transform 0.3s ease-in-out",slide:"top 0.3s ease-in-out"},A=R??`
    .wrap,
    .wrap:before,
    .wrap:after {
      margin: 0;
      padding: 0;
    }
    .wrap {
      position: relative;
      display: ${ae};
      align-items: center;
      gap: 0.5rem;
      border: none;
      font-family: inherit;
      cursor: pointer;
      color: inherit;
      background: transparent;
    }
    .wrap.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .sound-indicator {
      animation: pulse ${ne} ease-in-out infinite;
      color: ${r.pulseColor};
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 1; }
    }
    .tooltip {
      position: absolute;
      ${d[$]||d.top}
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: inherit;
      opacity: 0.9;
      white-space: nowrap;
      color: ${r.tooltipColor};
      background: ${r.tooltipBg};
      transform: ${n[$]||"translateX(-50%)"};
      transition: ${u[oe]||u.fade};
    }
  `,y=w||"boop",a=o.useCallback(i=>{if(!i)return;const P=Date.now();new q.Howl({src:[`${i}?t=${P}`],autoplay:!0,onloaderror:(C,X)=>console.error("Howler load error:",X),onplay:()=>b(!0),onend:()=>b(!1)}).play(),Y&&window.navigator.vibrate&&window.navigator.vibrate(50),T>0&&(W(!1),setTimeout(()=>W(!0),T))},[T,Y]),k=async()=>{const i=Date.now();if(l){ee.set("custom",l),M(l);return}const P=ee.get(y);if(P&&i-U.current<te){M(P);return}try{const C=await fetch(`${I||"https://soundzjs.vercel.app"}/api/sounds?sound=${y}`),X=C.headers.get("content-type");if(!C.ok)throw new Error(`Fetch failed: ${C.status} ${C.statusText}`);if(!(X!=null&&X.includes("application/json"))){const ke=await C.text();throw new Error(`Expected JSON, got: ${ke.slice(0,100)}...`)}const B=await C.json();B!=null&&B.url&&(ee.set(y,B.url),M(B.url),U.current=i)}catch(x){console.error("Sound fetch failed:",x)}};o.useEffect(()=>{k();const i=document.createElement("style");return i.innerHTML=A,document.head.appendChild(i),j.current=i,()=>{j.current&&document.head.removeChild(j.current)}},[l,y,A]);const S=()=>{if(!f){const i=Date.now();if(!z||T>0&&i-H.current<T)return;H.current=i,a(z)}},ie=()=>{const i=I||"https://soundzjs.vercel.app";g&&(g.includes("/")?new q.Howl({src:[`${g}?t=${Date.now()}`],autoplay:!0,onloaderror:(P,x)=>console.error("Howler load error:",x),onplay:()=>b(!0),onend:()=>b(!1)}).play():new q.Howl({src:[`${i}/sounds/${g}.mp3?t=${Date.now()}`],autoplay:!0,onloaderror:(P,x)=>console.error("Howler load error:",x),onplay:()=>b(!0),onend:()=>b(!1)}).play())},ce=o.useCallback(i=>{v&&i.key.toLowerCase()===v.toLowerCase()&&_&&S()},[v,_,S]);return o.useEffect(()=>{if(v)return window.addEventListener("keydown",ce),()=>window.removeEventListener("keydown",ce)},[v,ce]),z?E.jsxs("div",{className:`wrap ${_?"":"disabled"} ${se}`,onClick:S,onMouseEnter:ie,style:le,tabIndex:0,children:[Z&&re&&E.jsx("div",{className:"tooltip",children:F}),D&&Ee(D,Z),s]}):h?h():E.jsx("p",{children:"Loading sound…"})}p.Soundz=ye,p.SoundzProvider=he,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
