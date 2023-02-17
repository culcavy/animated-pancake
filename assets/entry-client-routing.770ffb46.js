import{i as ue,h as I,a as l,s as T,b as Ke,c,d,e as w,p as $,m as O,f as ce,o as g,_ as P,g as Ye,j as Je,k as qe,l as Me,n as Qe,q as Xe,r as Ze,t as et,u as tt,v as nt,w as rt,x as st,y as ot,z as fe,A as G,B as C,C as it,D as at,E as lt,F,G as de,H as ut,I as ct,J as ge,K as ft,L as pe,M as dt,N as he,O as me,P as W,Q as gt,R as pt}from"./chunk-565d2563.js";function R(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function L(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function ht(e,t){if(!R(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function mt(e){return typeof e=="object"&&e!==null&&"then"in e&&ue(e.then)}function _t(e,t){const s=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(I(({filesystemRoot:o})=>o.length))[0];let r;if(s){const{filesystemRoot:o,routeRoot:i}=s,a={pageId:e,filesystemRoot:o,routeRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=T(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+T(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=T(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function yt(e){await Promise.all(e._pageFilesAll.filter(r=>r.fileType===".page.route").map(r=>{var o;return(o=r.loadFile)===null||o===void 0?void 0:o.call(r)}));const{onBeforeRouteHook:t,filesystemRoots:n}=vt(e);return{pageRoutes:bt(n,e),onBeforeRouteHook:t}}function bt(e,t){const n=[];return t._allPageIds.filter(s=>!Ke(s)).forEach(s=>{const r=Pt(s,t._pageFilesAll);if(r){const{filePath:o,fileExports:i}=r;if(l(i),c("default"in i,`${o} should have a default export.`),d(i,"default","string")){const a=i.default;c(a.startsWith("/"),`A Route String should start with a leading \`/\` but \`${o}\` has \`export default '${a}'\`. Make sure to \`export default '/${a}'\` instead.`),n.push({pageId:s,routeString:a,pageRouteFilePath:o,routeType:"STRING"});return}if(d(i,"default","function")){const a=i.default;let f=!1;const u="iKnowThePerformanceRisksOfAsyncRouteFunctions";u in i&&(c(d(i,u,"boolean"),`The export \`${u}\` of ${o} should be a boolean.`),f=i[u]),n.push({pageId:s,routeFunction:a,pageRouteFilePath:o,allowAsync:f,routeType:"FUNCTION"});return}c(!1,`The default export of ${o} should be a string or a function.`)}else{const o=_t(s,e);l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),n.push({pageId:s,routeString:o,pageRouteFilePath:null,routeType:"FILESYSTEM"})}}),n}function vt(e){let t=null;const n=[];return e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:r})=>{if(l(r),"onBeforeRoute"in r){c(d(r,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:o}=r;t={filePath:s,onBeforeRoute:o}}"filesystemRoutingRoot"in r&&(c(d(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),c(d(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${r.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:wt(s),routeRoot:r.filesystemRoutingRoot}))}),{onBeforeRouteHook:t,filesystemRoots:n}}function Pt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function wt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function K(e){l(e.urlOriginal),"urlPathname"in e?l(L(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:ye,enumerable:!0,configurable:!0}),"url"in e?l(L(e,"url")):Object.defineProperty(e,"url",{get:Rt,enumerable:!1,configurable:!0}),"urlParsed"in e?l(L(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:St,enumerable:!0,configurable:!0})}function _e(e){let t=e.urlOriginal;const{_baseUrl:n,_urlProcessor:s}=e;return l(n.startsWith("/")),l(s===null||ue(s)),s!==null&&(t=s(t)),$(t,n)}function ye(){const{pathname:e}=_e(this),t=e;return l(t.startsWith("/")),t}function Rt(){return w(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),ye.call(this)}function St(){const e=_e(this),{origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:f}=e,u={origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:f,get hashString(){return w(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),f},get searchString(){return w(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return X(u,"hashString"),X(u,"searchString"),u}function X(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function Ot(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(R(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const be="@",D=":";function V(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),s=t.split("/"),r={};xt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,s.length);o++){const i=n[o],a=s[o];if(i==="*")return r["*"]=s.slice(Math.max(1,o)).join("/"),{routeParams:r};if(i&&k(i)){if(w(!i.startsWith(D),`Outdated route string \`${e}\`, use \`${e.split(D).join(be)}\` instead.`,{onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function xt(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function x(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(k(i))break;n++}const s=t.filter(i=>!k(i)).length,r=t.filter(i=>k(i)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:s,isCatchAll:o}}function k(e){return e.startsWith(be)||e.startsWith(D)}function Z(e){const n=V(e,e);return l(n),Object.keys(n.routeParams).length===0}function Tt(e){e.sort(Et).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Et(e,t){var n,s;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(s=t.precedence)!==null&&s!==void 0?s:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=I(i=>x(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=I(i=>x(i).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=I(i=>x(i).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(x(t.routeString).isCatchAll)return-1;if(x(e.routeString).isCatchAll)return 1}return 0}async function Ft(e,t,n,s){Ot(n);let r=e(n);if(c(!mt(r)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),c(R(r),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(c(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let o=null;"precedence"in r&&(o=r.precedence,c(typeof o=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),ve(r,`The \`routeParams\` object returned by the Route Function ${s} should`);const i=r.routeParams||{};return c(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),l(R(i)),Object.keys(r).forEach(a=>{c(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function ve(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(c(R(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function Pe(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:s,hookFilePath:r}=t;l(r.startsWith("/")),l(!s.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${s} }\` of ${r}`}c(ce(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),w(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function Ct(e,t){const n=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(n==null||ht(n,["pageContext"])&&d(n,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(c(d(n,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const o=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(d(n.pageContext,"_pageId","string"),`${o} a string or \`null\``),c(t._allPageIds.includes(n.pageContext._pageId),`${o} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&ve(n.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(w(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(c(d(n.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),g(r,{_urlPristine:t.urlOriginal})),Pe(n.pageContext,{hook:{hookFilePath:e.filePath,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var A;function ee(...e){var t,n;A||(A=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),A&&A(...e)}async function we(e){K(e);const{pageRoutes:t,onBeforeRouteHook:n}=await yt(e);ee("Pages routes:",t);const s={};if(n){const f=await Ct(n,e);if(f){if(g(s,f),d(s,"_pageId","string")||d(s,"_pageId","null"))return d(s,"routeParams")?l(d(s,"routeParams","object")):g(s,{routeParams:{}}),g(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};g(e,s)}}g(s,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),c(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const i=[];await Promise.all(t.map(async f=>{const{pageId:u,routeType:m}=f;if(f.routeType==="FILESYSTEM"){const{routeString:p}=f,b=V(p,o);if(b){const{routeParams:_}=b;i.push({pageId:u,routeParams:_,routeString:p,routeType:m})}return}if(f.routeType==="STRING"){const{routeString:p}=f,b=V(p,o);if(b){const{routeParams:_}=b;l(m==="STRING"),i.push({pageId:u,routeString:p,routeParams:_,routeType:m})}return}if(f.routeType==="FUNCTION"){const{routeFunction:p,allowAsync:b,pageRouteFilePath:_}=f,S=await Ft(p,b,e,_);if(S){const{routeParams:v,precedence:y}=S;i.push({pageId:u,precedence:y,routeParams:v,routeType:m})}return}l(!1)})),Tt(i);const a=i[0];if(ee(`Route matches for URL \`${o}\` (in precedence order):`,i),g(s,{_routeMatches:i}),!a)return g(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:f}=a;l(R(f)),g(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const Y={},Re={},At={},H={},It={},kt=!0,jt=Object.assign({"/src/pages/about.page.tsx":()=>P(()=>import("./src/pages/about.page.5f8e57c0.js"),["assets/src/pages/about.page.5f8e57c0.js","assets/chunk-620a7556.js"]),"/src/pages/catalog.page.tsx":()=>P(()=>import("./src/pages/catalog.page.2d2dc1a0.js"),["assets/src/pages/catalog.page.2d2dc1a0.js","assets/chunk-620a7556.js"]),"/src/pages/hello/index.page.tsx":()=>P(()=>import("./src/pages/hello/index.page.96929bf4.js"),["assets/src/pages/hello/index.page.96929bf4.js","assets/index.page.22a74a4f.css","assets/chunk-620a7556.js"]),"/src/pages/index.page.tsx":()=>P(()=>import("./src/pages/index.page.1948ac2e.js"),["assets/src/pages/index.page.1948ac2e.js","assets/chunk-620a7556.js"]),"/src/pages/zh/catalog.page.tsx":()=>P(()=>import("./src/pages/zh/catalog.page.99621156.js"),["assets/src/pages/zh/catalog.page.99621156.js","assets/chunk-620a7556.js"]),"/src/pages/zh/cppintro/index.page.tsx":()=>P(()=>import("./src/pages/zh/cppintro/index.page.94ed9aca.js"),["assets/src/pages/zh/cppintro/index.page.94ed9aca.js","assets/chunk-620a7556.js"]),"/src/pages/zh/ffmpeg/intro.page.tsx":()=>P(()=>import("./src/pages/zh/ffmpeg/intro.page.c38be9da.js"),["assets/src/pages/zh/ffmpeg/intro.page.c38be9da.js","assets/chunk-620a7556.js"]),"/src/pages/zh/java/jdk19.page.tsx":()=>P(()=>import("./src/pages/zh/java/jdk19.page.a60432fe.js"),["assets/src/pages/zh/java/jdk19.page.a60432fe.js","assets/chunk-620a7556.js"]),"/src/renderer/_error.page.tsx":()=>P(()=>import("./src/renderer/_error.page.0ca03106.js"),["assets/src/renderer/_error.page.0ca03106.js","assets/chunk-620a7556.js"])}),$t={...jt};Y[".page"]=$t;const Ht=Object.assign({}),Nt={...Ht};Re[".page.route"]=Nt;const Wt=Object.assign({"/src/renderer/_default.page.client.tsx":()=>P(()=>import("./src/renderer/_default.page.client.5990f459.js"),["assets/src/renderer/_default.page.client.5990f459.js","assets/_default.page.client.19926da1.css","assets/chunk-620a7556.js"])}),Lt={...Wt};Y[".page.client"]=Lt;const Ut=Object.assign({"/src/renderer/_default.page.client.tsx":Ye}),Bt={...Ut};H[".page.client"]=Bt;const Dt=Object.assign({"/src/renderer/_default.page.server.tsx":Je}),Vt={...Dt};H[".page.server"]=Vt;const zt=Object.assign({"/src/pages/about.page.tsx":qe,"/src/pages/catalog.page.tsx":Me,"/src/pages/hello/index.page.tsx":Qe,"/src/pages/index.page.tsx":Xe,"/src/pages/zh/catalog.page.tsx":Ze,"/src/pages/zh/cppintro/index.page.tsx":et,"/src/pages/zh/ffmpeg/intro.page.tsx":tt,"/src/pages/zh/java/jdk19.page.tsx":nt,"/src/renderer/_error.page.tsx":rt}),Gt={...zt};H[".page"]=Gt;const Kt=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:Y,pageFilesEager:Re,pageFilesExportNamesLazy:At,pageFilesExportNamesEager:H,neverLoaded:It,isGeneratedFile:kt},Symbol.toStringTag,{value:"Module"}));st(Kt);function Yt(e){return!!e.startsWith("http")}function Se(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Jt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function qt(e){return $(e,"/").pathname}function N(e){window.location.href=e}function Mt(){return!!Qt()}function Qt(){var e,t,n,s;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),o=!!(!((s=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||s===void 0)&&s.size),i=!!window.__vite_plugin_react_preamble_installed__,a=f=>{w(f,"An internal heuristic needs to be updated, see https://github.com/brillout/vite-plugin-ssr/issues/423",{onlyOnce:!0})};return r||o?(a(r&&i),!0):i?(l(r===!1&&o===!1),!0):!1}function Xt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function Zt(e){return new Promise(t=>setTimeout(t,e))}function te(e){const t=e/1e3;if(t<120)return`${ne(t)} seconds`;const n=t/60;return`${ne(n)} minutes`}function ne(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function z(e,t,n){const{timeoutErr:s,timeoutWarn:r}=en(t);let o,i;const a=new Promise((p,b)=>{o=_=>{f(),p(_)},i=_=>{f(),b(_)}}),f=()=>{clearTimeout(u),clearTimeout(m)},u=setTimeout(()=>{const p=`${ot}[Slow Hook] The ${t}() hook of ${n} is taking more than ${te(s)}`;console.warn(p)},s),m=setTimeout(()=>{const p=fe(`[Hook Timeout] The ${t}() hook of ${n} didn't finish after ${te(r)}`);i(p)},r);return(async()=>{try{const p=await e();o(p)}catch(p){i(p)}})(),a}function en(e){let t=2e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}const re=G("navigationState.ts",{}),tn=C(),Oe={markNavigationChange(){re.navigationChanged=!0},get noNavigationChangeYet(){return!re.navigationChanged&&this.isFirstUrl(C())},isFirstUrl(e){return e===tn}};function xe(e,t){return it(e,t)}async function nn(e,t){const s=xe(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(s.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function rn(e,t,n,s){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${s}`;c(e==null||R(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(sn(e,n,r),"pageContext"in e&&Pe(e.pageContext,{hook:{hookName:t,hookFilePath:s}}))}function sn(e,t,n){const s=[],r=Object.keys(e);for(const o of r)t.includes(o)||s.push(o);c(s.length===0,[n,"returned an object with unknown keys",Q(s)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}function Te(e){return l([!0,!1].includes(e.isHydration)),l([!0,!1,null].includes(e.isBackwardNavigation)),at(e)}const se=["urlPathname","urlParsed"],on=["Page","pageExports","exports"];function Ee(e){[...on,...se].forEach(n=>{n in e&&(se.includes(n)?(l(n.startsWith("url")),w(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):w(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const an="/";function ln(e,t,n){const{pathnameOriginal:s,searchOriginal:r,hashOriginal:o}=$(e,an);e.startsWith("/")&&l(e===`${s}${r||""}${o||""}`,{url:e});const i=s.endsWith("/");let a;return n&&s!=="/"?(i?a=T(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${o||""}`}const un=".pageContext.json",cn=!1;function fn(e){return ln(e,un,cn)}async function dn(e){return e._isFirstRenderAttempt&&Oe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),gn(e)):(l(d(e,"_isFirstRenderAttempt","false")),hn(e))}async function gn(e){const t=lt();return Ee(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await F(e._pageFilesAll,t._pageId)),t}async function pn(e){const t=de(e._allPageIds);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await F(e._pageFilesAll,n._pageId)),n}async function hn(e){let t={};g(t,{isHydration:!1}),g(t,await _n(e)),g(t,await F(e._pageFilesAll,t._pageId));const n=await mn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const s=de(e._allPageIds);return l(s),g(t,{isHydration:!1,_pageId:s}),g(t,n),g(t,await F(e._pageFilesAll,t._pageId)),t}else return g(t,n),t}async function mn(e){const t=ut(e,"onBeforeRender");if(t){const s=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=Te({...e,...r}),i=await z(()=>s(o),"onBeforeRender",t.filePath);rn(i,"onBeforeRender",["pageContext"],t.filePath);const a=i==null?void 0:i.pageContext;return g(r,a),r}else if((await nn(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const s=await yn(e),r={};return Object.assign(r,s),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function _n(e){const n=(await we(e)).pageContextAddendum;if(!n._pageId)throw new Error("No routing match");return l(d(n,"_pageId","string")),n}async function yn(e){var t;const n=fn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(n);{const a=s.headers.get("content-type"),f=a&&a.includes("application/json");if(!f&&s.status===404){N(e.urlOriginal);const u=new Error("Page doesn't exist");throw Object.assign(u,{_abortRendering:!0}),u}c(f,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await s.text(),o=ct(r);if("serverSideError"in o)throw fe("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(o,"pageContext"));const i=o.pageContext;return l(R(i)),l(d(i,"_pageId","string")),Ee(i),i}function Fe(){const e="/animated-pancake/";return Yt(e)?"/":e}const U=G("getGlobalContext.ts",{});async function Ce(){return U.globalContext||(U.globalContext=await bn()),U.globalContext}async function bn(){const e=Fe();ge(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:s}=await ft(!0);return g(t,{_pageFilesAll:n,_allPageIds:s}),t}async function Ae(e){const t=await Ce(),n={urlOriginal:e,...t},s=t._pageFilesAll;K(n);const r=await we(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:s};const o=r.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:s}:{pageId:null,pageFilesAll:s}}function E(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function vn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:s(),isClientRouting:o()};function s(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&E(a).includes("render")))}function r(){const i=e.some(a=>E(a).includes("render"));c(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,f)=>` (${f+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>E(a).includes("clientRouting"))}}function Pn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:s}){let r=[];const o=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),i.push(...o.map(a=>({id:a.filePath,onlyAssets:!0}))),n)r=e.map(a=>a.filePath);else{const a=s?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";i.push({id:a,onlyAssets:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function wn(e,t){let n=pe(e,t);const s=xe(e,t),{isHtmlOnly:r,isClientRouting:o}=vn({pageFilesClientSide:n,pageFilesServerSide:s,pageId:t});r&&(n=n.filter(f=>f.fileType===".page.client"&&!E(f).includes("render")),n=Sn(n));const{clientEntries:i,clientDependencies:a}=Pn({pageFilesClientSide:n,pageFilesServerSide:s,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:s}}async function Rn(e,t,{sharedPageFilesAlreadyLoaded:n}){const s=pe(e,t);await Promise.all(s.map(async r=>{var o;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function Sn(e){const t=[];for(const n of e)if(t.push(n),E(n).includes("overrideDefaultPages"))break;return t}async function Ie(e){const{pageId:t,pageFilesAll:n}=await Ae(e);if(!t)return!1;await Rn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:s,isClientRouting:r}=wn(n,t);return!s&&r}function ke(e){const t=e.getAttribute("href");return!!(t===null||t===""||Se(t)||On(e)||xn(t)||!Tn(t)||!dt(t))}function On(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function xn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Tn(e){const t=Fe();ge(t);const{hasBaseUrl:n}=$(e,t);return n}function En(e,t){const n=Fn(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Fn(e,t){let n=Cn(t),s=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(R(r),o);const i=Object.keys(r);c(i.length===1&&i[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};c(!1,o)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(he(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function Cn(e){let t=e.getAttribute("data-prefetch");if(w(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const je=new Map;function $e(e){const t=Ne(e);return je.has(t)}function He(e){const t=Ne(e);je.set(t,!0)}function Ne(e){return qt(e)}const oe=new Map;async function B(e){if(c(!Se(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),$e(e))return;He(e);const{pageId:t,pageFilesAll:n}=await Ae(e);if(t)try{await F(n,t)}catch(s){if(me(s))De();else throw s}}function An(e){He(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(oe.has(n))return;oe.set(n,!0);const s=n.getAttribute("href");if(ke(n)||(l(s),!await Ie(s))||$e(s))return;const r=En(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>B(s)),n.addEventListener("touchstart",()=>B(s),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(B(s),o.disconnect())})});o.observe(n)}}else return})}function We(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ue()),"scrollPosition"in e||(t=!0,e.scrollPosition=Le()),Be(e),t&&q(e)}function J(){const e=window.history.state||{};return Be(e),e}function Le(){return{x:window.scrollX,y:window.scrollY}}function Ue(){return new Date().getTime()}function ie(){const e=Le(),t=J();q({...t,scrollPosition:e})}function In(e,t){if(t)q(J(),e);else{const n=Ue();kn({timestamp:n,scrollPosition:null},e)}}function Be(e){if(l(ce(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function q(e,t){window.history.replaceState(e,"",t)}function kn(e,t){window.history.pushState(e,"",t)}const h=G("useClientRouter.ts",{previousState:j()});Bn();We();function De(){h.clientRoutingIsDisabled=!0,he(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function jn(){h.isUsingClientRouting=!0,Ln(),$n((r,{keepScrollPosition:o})=>{s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1})}),Hn((r,o)=>{s({scrollTarget:r,isBackwardNavigation:o})}),globalThis.__vite_plugin_ssr__navigate=async(r,{keepScrollPosition:o,overwriteLastHistoryEntry:i})=>{await s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1})};let e=0,t,n=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:r,url:o=C(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a}){var f;if(h.clientRoutingIsDisabled){N(o);return}const u={urlOriginal:o,isBackwardNavigation:a},m=++e;l(m>=1),m>1&&n===!1&&((f=h.onPageTransitionStart)===null||f===void 0||f.call(h,u),n=!0);const p=()=>Mt()&&m===1?!1:m!==e,b=await Ce();if(p())return;const _=m===1;g(u,{_isFirstRenderAttempt:_}),g(u,b),K(u);let S;try{S=await dn(u)}catch(v){if(le(v,u))return;console.error(v);try{S=await pn(u)}catch(y){if(le(y,u)||(_||setTimeout(()=>{window.location.pathname=o},0),Xt(v,y)))return;throw y}}if(!p()&&(g(u,S),W(u,"onPageTransitionStart"),h.onPageTransitionStart=u.exports.onPageTransitionStart,t&&await t,!p())){if(Nn(o,i),Oe.markNavigationChange(),l(t===void 0),t=(async()=>{const v=Te(u);gt(u);const y=u.exportsAll.render[0]._filePath;l(y);const Ge=await z(()=>u.exports.render(v),"render",y);c(Ge===void 0,`The render() hook of ${y} isn't allowed to return a value`),An(u)})(),await t,t=void 0,u._isFirstRenderAttempt){W(u,"onHydrationEnd");const{onHydrationEnd:v}=u.exports;if(v){const y=u.exportsAll.onHydrationEnd[0]._filePath;l(y),await z(()=>v(u),"onHydrationEnd",y)}}else m===e&&(u.exports.onPageTransitionEnd&&(W(u,"onPageTransitionEnd"),u.exports.onPageTransitionEnd(u)),n=!1);Ve(r),M(),h.initialRenderIsDone=!0}}}function $n(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=s(r.target);if(!o)return;const i=o.getAttribute("href");if(ke(o))return;if(l(i),r.preventDefault(),!await Ie(i)){N(i);return}const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function s(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}function Hn(e){window.addEventListener("popstate",()=>{const t=j(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===h.previousState.urlWithoutHash,r=!t.historyState.timestamp||!h.previousState.historyState.timestamp?null:t.historyState.timestamp<h.previousState.historyState.timestamp;h.previousState=t,s?window.history.state===null?(We(),h.previousState=j()):Ve(n):e(n,r)})}function Nn(e,t){C()!==e&&(M(),In(e,t),h.previousState=j())}function j(){return{urlWithoutHash:C({withoutHash:!0}),historyState:J()}}function Ve(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Un();if(n&&n!=="top"){const s=document.getElementById(n)||document.getElementsByName(n)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;Wn(t)}function Wn(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const s=new Date().getTime();for(;;)if(await Zt(10),t(),n()||new Date().getTime()-s>100)return},0)}))}function Ln(){window.addEventListener("scroll",Jt(ie,Math.ceil(1e3/3)),{passive:!0}),ze(ie)}function Un(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function Bn(){ae(),ze(ae),Dn(()=>h.initialRenderIsDone&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function ae(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function ze(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Dn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function le(e,t){return!!(e!=null&&e._abortRendering||Vn(e,t))}function Vn(e,t){if(!me(e))return!1;if(De(),t._isFirstRenderAttempt)throw e;return N(t.urlOriginal),!0}pt();jn();
