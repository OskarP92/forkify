var t,e,r,n,o,i,a,c,u,s,f,l,d,v,h,p,g,y,m,b,w,_,E,k,O,S,j,A,x,T,P,I,$,M=globalThis;function L(t){return t&&t.__esModule?t.default:t}var R={},C={},F=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
C=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
F("object"==typeof self&&self)||F("object"==typeof M&&M)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||C||Function("return this")();var N={},H={};// Detect IE8's incomplete defineProperty implementation
N=!(H=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var D={},q={};q=!H(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var B=Function.prototype.call;D=q?B.bind(B):function(){return B.apply(B,arguments)};var U={}.propertyIsEnumerable,W=Object.getOwnPropertyDescriptor;r=W&&!U.call({1:2},1)?function(t){var e=W(this,t);return!!e&&e.enumerable}:U;var G={};G=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var z={},J={},K={},Y=Function.prototype,V=Y.call,Q=q&&Y.bind.bind(V,V),X={},Z=(K=q?Q:function(t){return function(){return V.apply(t,arguments)}})({}.toString),tt=K("".slice);X=function(t){return tt(Z(t),8,-1)};var te=Object,tr=K("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
J=H(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!te("z").propertyIsEnumerable(0)})?function(t){return"String"===X(t)?tr(t,""):te(t)}:te;var tn={},to={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
to=function(t){return null==t};var ti=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
tn=function(t){if(to(t))throw new ti("Can't call method on "+t);return t},z=function(t){return J(tn(t))};var ta={},tc={},tu={},ts={},tf={},tl="object"==typeof document&&document.all,td=(tf={all:tl,IS_HTMLDDA:void 0===tl&&void 0!==tl}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
ts=tf.IS_HTMLDDA?function(t){return"function"==typeof t||t===td}:function(t){return"function"==typeof t};var tv=tf.all;tu=tf.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:ts(t)||t===tv}:function(t){return"object"==typeof t?null!==t:ts(t)};var th={},tp={};tp=function(t,e){var r;return arguments.length<2?(r=C[t],ts(r)?r:void 0):C[t]&&C[t][e]};var tg={};tg=K({}.isPrototypeOf);var ty={},tm={},tb={},tw={};tw="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var t_=C.process,tE=C.Deno,tk=t_&&t_.versions||tE&&tE.version,tO=tk&&tk.v8;tO&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(n=tO.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&tw&&(!(n=tw.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=tw.match(/Chrome\/(\d+)/))&&(o=+n[1]),tb=o;var tS=C.String;ty=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tm=!!Object.getOwnPropertySymbols&&!H(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tS(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tb&&tb<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tj=Object;th=ty?function(t){return"symbol"==typeof t}:function(t){var e=tp("Symbol");return ts(e)&&tg(e.prototype,tj(t))};var tA={},tx={},tT={},tP=String;tT=function(t){try{return tP(t)}catch(t){return"Object"}};var tI=TypeError;// `Assert: IsCallable(argument) is true`
tx=function(t){if(ts(t))return t;throw new tI(tT(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tA=function(t,e){var r=t[e];return to(r)?void 0:tx(r)};var t$={},tM=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
t$=function(t,e){var r,n;if("string"===e&&ts(r=t.toString)&&!tu(n=D(r,t))||ts(r=t.valueOf)&&!tu(n=D(r,t))||"string"!==e&&ts(r=t.toString)&&!tu(n=D(r,t)))return n;throw new tM("Can't convert object to primitive value")};var tL={},tR={},tC={};tC=!1;var tF={},tN={},tH=Object.defineProperty;tN=function(t,e){try{tH(C,t,{value:e,configurable:!0,writable:!0})}catch(r){C[t]=e}return e};var tD="__core-js_shared__";tF=C[tD]||tN(tD,{}),(tR=function(t,e){return tF[t]||(tF[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.2",mode:tC?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tq={},tB={},tU=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tB=function(t){return tU(tn(t))};var tW=K({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tq=Object.hasOwn||function(t,e){return tW(tB(t),e)};var tG={},tz=0,tJ=Math.random(),tK=K(1..toString);tG=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tK(++tz+tJ,36)};var tY=C.Symbol,tV=tR("wks"),tQ=ty?tY.for||tY:tY&&tY.withoutSetter||tG,tX=TypeError,tZ=(tL=function(t){return tq(tV,t)||(tV[t]=tm&&tq(tY,t)?tY[t]:tQ("Symbol."+t)),tV[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
tc=function(t,e){if(!tu(t)||th(t))return t;var r,n=tA(t,tZ);if(n){if(void 0===e&&(e="default"),r=D(n,t,e),!tu(r)||th(r))return r;throw new tX("Can't convert object to primitive value")}return void 0===e&&(e="number"),t$(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
ta=function(t){var e=tc(t,"string");return th(e)?e:e+""};var t0={},t1={},t2=C.document,t9=tu(t2)&&tu(t2.createElement);t1=function(t){return t9?t2.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
t0=!N&&!H(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(t1("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var t6=Object.getOwnPropertyDescriptor;e=N?t6:function(t,e){if(t=z(t),e=ta(e),t0)try{return t6(t,e)}catch(t){}if(tq(t,e))return G(!D(r,t,e),t[e])};var t3={},t7={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t7=N&&H(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var t4={},t5=String,t8=TypeError;// `Assert: Type(argument) is Object`
t4=function(t){if(tu(t))return t;throw new t8(t5(t)+" is not an object")};var et=TypeError,ee=Object.defineProperty,er=Object.getOwnPropertyDescriptor,en="enumerable",eo="configurable",ei="writable";i=N?t7?function(t,e,r){if(t4(t),e=ta(e),t4(r),"function"==typeof t&&"prototype"===e&&"value"in r&&ei in r&&!r[ei]){var n=er(t,e);n&&n[ei]&&(t[e]=r.value,r={configurable:eo in r?r[eo]:n[eo],enumerable:en in r?r[en]:n[en],writable:!1})}return ee(t,e,r)}:ee:function(t,e,r){if(t4(t),e=ta(e),t4(r),t0)try{return ee(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new et("Accessors not supported");return"value"in r&&(t[e]=r.value),t},t3=N?function(t,e,r){return i(t,e,G(1,r))}:function(t,e,r){return t[e]=r,t};var ea={},ec={},eu={},es=Function.prototype,ef=N&&Object.getOwnPropertyDescriptor,el=tq(es,"name"),ed=el&&(!N||N&&ef(es,"name").configurable),ev=(eu={EXISTS:el,PROPER:el&&"something"===(function(){}).name,CONFIGURABLE:ed}).CONFIGURABLE,eh={},ep=K(Function.toString);ts(tF.inspectSource)||(tF.inspectSource=function(t){return ep(t)}),eh=tF.inspectSource;var eg={},ey={},em=C.WeakMap;ey=ts(em)&&/native code/.test(String(em));var eb={},ew=tR("keys");eb=function(t){return ew[t]||(ew[t]=tG(t))};var e_={};e_={};var eE="Object already initialized",ek=C.TypeError,eO=C.WeakMap;if(ey||tF.state){var eS=tF.state||(tF.state=new eO);/* eslint-disable no-self-assign -- prototype methods protection */eS.get=eS.get,eS.has=eS.has,eS.set=eS.set,/* eslint-enable no-self-assign -- prototype methods protection */a=function(t,e){if(eS.has(t))throw new ek(eE);return e.facade=t,eS.set(t,e),e},c=function(t){return eS.get(t)||{}},u=function(t){return eS.has(t)}}else{var ej=eb("state");e_[ej]=!0,a=function(t,e){if(tq(t,ej))throw new ek(eE);return e.facade=t,t3(t,ej,e),e},c=function(t){return tq(t,ej)?t[ej]:{}},u=function(t){return tq(t,ej)}}var eA=(eg={set:a,get:c,has:u,enforce:function(t){return u(t)?c(t):a(t,{})},getterFor:function(t){return function(e){var r;if(!tu(e)||(r=c(e)).type!==t)throw new ek("Incompatible receiver, "+t+" required");return r}}}).enforce,ex=eg.get,eT=String,eP=Object.defineProperty,eI=K("".slice),e$=K("".replace),eM=K([].join),eL=N&&!H(function(){return 8!==eP(function(){},"length",{value:8}).length}),eR=String(String).split("String"),eC=ec=function(t,e,r){"Symbol("===eI(eT(e),0,7)&&(e="["+e$(eT(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tq(t,"name")||ev&&t.name!==e)&&(N?eP(t,"name",{value:e,configurable:!0}):t.name=e),eL&&r&&tq(r,"arity")&&t.length!==r.arity&&eP(t,"length",{value:r.arity});try{r&&tq(r,"constructor")&&r.constructor?N&&eP(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eA(t);return tq(n,"source")||(n.source=eM(eR,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eC(function(){return ts(this)&&ex(this).source||eh(this)},"toString"),ea=function(t,e,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:e;if(ts(r)&&ec(r,a,n),n.global)o?t[e]=r:tN(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:i(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var eF={},eN={},eH={},eD={},eq={},eB={},eU={},eW=Math.ceil,eG=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
eU=Math.trunc||function(t){var e=+t;return(e>0?eG:eW)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eB=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:eU(e)};var ez=Math.max,eJ=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eq=function(t,e){var r=eB(t);return r<0?ez(r+e,0):eJ(r,e)};var eK={},eY={},eV=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eY=function(t){return t>0?eV(eB(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eK=function(t){return eY(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eQ=function(t){return function(e,r,n){var o,i=z(e),a=eK(i),c=eq(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eX=(eD={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eQ(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eQ(!1)}).indexOf,eZ=K([].push);eH=function(t,e){var r,n=z(t),o=0,i=[];for(r in n)!tq(e_,r)&&tq(n,r)&&eZ(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tq(n,r=e[o++])&&(~eX(i,r)||eZ(i,r));return i};var e0={},e1=// IE8- don't enum bug keys
(e0=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");s=Object.getOwnPropertyNames||function(t){return eH(t,e1)},f=Object.getOwnPropertySymbols;var e2=K([].concat);// all object keys, includes non-enumerable and symbols
eN=tp("Reflect","ownKeys")||function(t){var e=s(t4(t));return f?e2(e,f(t)):e},eF=function(t,r,n){for(var o=eN(r),a=0;a<o.length;a++){var c=o[a];tq(t,c)||n&&tq(n,c)||i(t,c,e(r,c))}};var e9={},e6=/#|\.prototype\./,e3=function(t,e){var r=e4[e7(t)];return r===e8||r!==e5&&(ts(e)?H(e):!!e)},e7=e3.normalize=function(t){return String(t).replace(e6,".").toLowerCase()},e4=e3.data={},e5=e3.NATIVE="N",e8=e3.POLYFILL="P";e9=e3,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/R=function(t,r){var n,o,i,a,c,u=t.target,s=t.global,f=t.stat;if(n=s?C:f?C[u]||tN(u,{}):(C[u]||{}).prototype)for(o in r){// contained in target
if(a=r[o],i=t.dontCallGetSet?(c=e(n,o))&&c.value:n[o],!e9(s?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;eF(a,i)}(t.sham||i&&i.sham)&&t3(a,"sham",!0),ea(n,o,a,t)}};var rt={},re={},rr=Function.prototype,rn=rr.apply,ro=rr.call;// eslint-disable-next-line es/no-reflect -- safe
re="object"==typeof Reflect&&Reflect.apply||(q?ro.bind(rn):function(){return ro.apply(rn,arguments)});var ri={},ra={},rc=(ra=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===X(t))return K(t)})(ra.bind);// optional / simple context binding
ri=function(t,e){return tx(t),void 0===e?t:q?rc(t,e):function(){return t.apply(e,arguments)}};var ru={};ru=tp("document","documentElement");var rs={};rs=K([].slice);var rf={},rl=TypeError;rf=function(t,e){if(t<e)throw new rl("Not enough arguments");return t};var rd={};// eslint-disable-next-line redos/no-vulnerable -- safe
rd=/(?:ipad|iphone|ipod).*applewebkit/i.test(tw);var rv={};rv="process"===X(C.process);var rh=C.setImmediate,rp=C.clearImmediate,rg=C.process,ry=C.Dispatch,rm=C.Function,rb=C.MessageChannel,rw=C.String,r_=0,rE={},rk="onreadystatechange";H(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
l=C.location});var rO=function(t){if(tq(rE,t)){var e=rE[t];delete rE[t],e()}},rS=function(t){return function(){rO(t)}},rj=function(t){rO(t.data)},rA=function(t){// old engines have not location.origin
C.postMessage(rw(t),l.protocol+"//"+l.host)};rh&&rp||(rh=function(t){rf(arguments.length,1);var e=ts(t)?t:rm(t),r=rs(arguments,1);return rE[++r_]=function(){re(e,void 0,r)},d(r_),r_},rp=function(t){delete rE[t]},rv?d=function(t){rg.nextTick(rS(t))}:ry&&ry.now?d=function(t){ry.now(rS(t))}:rb&&!rd?(h=(v=new rb).port2,v.port1.onmessage=rj,d=ri(h.postMessage,h)):C.addEventListener&&ts(C.postMessage)&&!C.importScripts&&l&&"file:"!==l.protocol&&!H(rA)?(d=rA,C.addEventListener("message",rj,!1)):d=rk in t1("script")?function(t){ru.appendChild(t1("script"))[rk]=function(){ru.removeChild(this),rO(t)}}:function(t){setTimeout(rS(t),0)});var rx=(rt={set:rh,clear:rp}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
R({global:!0,bind:!0,enumerable:!0,forced:C.clearImmediate!==rx},{clearImmediate:rx});var rT=rt.set,rP={},rI={};/* global Bun -- Deno case */rI="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var r$=C.Function,rM=/MSIE .\./.test(tw)||rI&&((t=C.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rP=function(t,e){var r=e?2:1;return rM?function(n,o/* , ...arguments */){var i=rf(arguments.length,1)>r,a=ts(n)?n:r$(n),c=i?rs(arguments,r):[],u=i?function(){re(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rL=C.setImmediate?rP(rT,!1):rT;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
R({global:!0,bind:!0,enumerable:!0,forced:C.setImmediate!==rL},{setImmediate:rL});const rR="https://forkify-api.herokuapp.com/api/v2/recipes/",rC="b30669f2-ea03-4040-95e6-56aaf266e2f7",rF=async function(t,e){try{let r=e?fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}):fetch(t),n=await Promise.race([r,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message} ${n.status}`);return o}catch(t){throw t}},rN={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rH=function(t){let{recipe:e}=t.data;return{id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key&&{key:e.key}}},rD=async function(t){try{let e=await rF(`${rR}${t}?key=${rC}`);rN.recipe=rH(e),rN.bookmarks.some(e=>e.id===t)?rN.recipe.bookmarked=!0:rN.recipe.bookmarked=!1}catch(t){throw console.error(`${t}\u{1F680} `),t}},rq=async function(t){try{rN.search.query=t;let e=await rF(`${rR}?search=${t}&key=${rC}`);console.log(e),rN.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url,...t.key&&{key:t.key}})),rN.search.page=1}catch(t){throw console.error(`${t}\u{1F680} `),t}},rB=function(t=rN.search.page){rN.search.page=t;let e=(t-1)*rN.search.resultsPerPage,r=t*rN.search.resultsPerPage;// 0;
return rN.search.results.slice(e,r)},rU=function(t){rN.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*t/rN.recipe.servings}),rN.recipe.servings=t},rW=function(){localStorage.setItem("bookmarks",JSON.stringify(rN.bookmarks))},rG=function(t){// Add bookmark
rN.bookmarks.push(t),t.id===rN.recipe.id&&(rN.recipe.bookmarked=!0),rW()},rz=function(t){// delete bookmark
let e=rN.bookmarks.findIndex(e=>e.id===t);rN.bookmarks.splice(e,1),t===rN.recipe.id&&(rN.recipe.bookmarked=!1),rW()};!function(){let t=localStorage.getItem("bookmarks");t&&(rN.bookmarks=JSON.parse(t))}(),console.log(rN.bookmarks);const rJ=async function(t){try{let e=Object.entries(t).filter(t=>t[0].startsWith("ingredient")&&""!==t[1]).map(t=>{let e=t[1].split(",").map(t=>t.trim());if(3!==e.length)throw Error("Wrong ingredient format! Please use the correct format!");let[r,n,o]=e;return{quantity:r?+r:null,unit:n,description:o}}),r={title:t.title,source_url:t.sourceUrl,image_url:t.image,publisher:t.publisher,cooking_time:+t.cookingTime,servings:+t.servings,ingredients:e};console.log(r);let n=await rF(`${rR}?key=${rC}`,r);rN.recipe=rH(n),console.log(n),rG(rN.recipe)}catch(t){throw t}};var rK={};rK=new URL("icons.c14567a0.svg",import.meta.url).toString();var rY={};//FRACTY REDUCES THE FRACTION.
function rV(t,e,r,n,o){var i,a,c;let u=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===o)for(let e=3;e*e<=t;e+=2)t%e==0&&u.push(e);let s=0,f=t,l=e;//Initialize counter over the prime number array for the while loop.
for(;s<=u.length;)f%u[s]==0&&l%u[s]==0?(u[s],f/=u[s],l/=u[s]):s++;return i=l,a=f,c=r,1===i&&1===a?(c=`${n}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${n}${c}`:"0"==c?`${n}${a}/${i}`:`${n}${c} ${a}/${i}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rY=function(t){let e,r;if(t<0?(t=Math.abs(t),e="-"):e="",void 0===t)return"Your input was undefined.";if(isNaN(t))return`"${t}" is not a number.`;if(1e16==t)return`${e}9999999999999999`;if(t>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(t))return`${e}${t}`;if(t<1e-6)return"0";let n=t.toString(),o=n.split("."),i=o[0];if("0"==r&&"0"!==i)return i;if("0"==r&&"0"==i)return"0";if("99"==(r=n.length>=17?o[1].slice(0,o[1].length-1):o[1])&&"0"!==i)return`${i} 99/100`;if("99"==r&&"0"==i)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return i;let a=r.split("").reverse().join(""),c=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!c||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(t,e,r){let n=parseInt(t,10),o=Math.pow(10,t.length);//Numerator begins as decimal input converted into an integer.
return rV(n,o,e,r,!1);//Reduce the numerator and denominator.
}(r,i,e));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let t=c[0].split("").reverse().join(""),n=c[1].split("").reverse().join("");if(n.length>1){let t=n.split(""),e=1;for(let r=0;r<t.length;r++)e/=t[0]/t[r];1===e&&(n=t[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(t,e,r,n,o){let i=t.length-r.length>=1?t.length-r.length:1,a=Math.pow(10,i),c=parseFloat(`0.${t}`),u=Math.pow(10,e.length),s=Math.round((c*u-c)*Math.pow(10,i));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rV(s,(u-1)*a,n,o,!0);//Further reduce the numerator and denominator.
}(r,n,t,i,e);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rQ{_data;_clear(){this._parentElement.innerHTML=""}render(t,e=!0){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let r=this._generateMarkup();if(!e)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(t){this._data=t;let e=this._generateMarkup(),r=document.createRange().createContextualFragment(e),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((t,e)=>{let r=o[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent),t.isEqualNode(r)||Array.from(t.attributes).forEach(t=>r.setAttribute(t.name,t.value))})}renderSpinner(){let t=`<div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/L(rK)}#icon-loader"></use>
    </svg>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let e=`<div class="error">
    <div>
      <svg>
        <use href="${/*@__PURE__*/L(rK)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){let e=`<div class="message">
    <div>
      <svg>
        <use href="${/*@__PURE__*/L(rK)}#icon-alert-smile"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rX extends rQ{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}addHandlerUpdateServings(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--update-servings");if(!r)return;console.log(r);let{updateTo:n}=r.dataset;+n>0&&t(+n)})}addHandlerAddBookmark(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--bookmark");r&&t()})}_generateMarkup(){return`
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${/*@__PURE__*/L(rK)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${/*@__PURE__*/L(rK)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    
    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
          <use href="${/*@__PURE__*/L(rK)}#icon-user"></use>
      </svg>
    </div>
    
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/L(rK)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `}_generateMarkupIngredient(t){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${t.quantity?/*@__PURE__*/L(rY)(t.quantity):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${t.unit}</span>
        ${t.description}
      </div>
    </li>`}}var rZ=new rX;class r0{#t=document.querySelector(".search");getQuery(){let t=this.#t.querySelector(".search__field").value;return this.#e(),t}#e(){this.#t.querySelector(".search__field").value=""}addHandlerSearch(t){this.#t.addEventListener("submit",function(e){e.preventDefault(),t()})}}var r1=new r0,r2={},r9={},r6={};r6=function(t,e,r){var n,o;t4(t);try{if(!(n=tA(t,"return"))){if("throw"===e)throw r;return r}n=D(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return t4(n),r},// call something on iterator step with safe closing on error
r9=function(t,e,r,n){try{return n?e(t4(r)[0],r[1]):e(r)}catch(e){r6(t,"throw",e)}};var r3={},r7={};r7={};var r4=tL("iterator"),r5=Array.prototype;// check on default Array iterator
r3=function(t){return void 0!==t&&(r7.Array===t||r5[r4]===t)};var r8={},nt={},ne={},nr=tL("toStringTag"),nn={};nn[nr]="z",ne="[object z]"===String(nn);var no=tL("toStringTag"),ni=Object,na="Arguments"===X(function(){return arguments}()),nc=function(t,e){try{return t[e]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
nt=ne?X:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=nc(e=ni(t),no))?r:na?X(e):"Object"===(n=X(e))&&ts(e.callee)?"Arguments":n};var nu=function(){},ns=[],nf=tp("Reflect","construct"),nl=/^\s*(?:class|function)\b/,nd=K(nl.exec),nv=!nl.test(nu),nh=function(t){if(!ts(t))return!1;try{return nf(nu,ns,t),!0}catch(t){return!1}},np=function(t){if(!ts(t))return!1;switch(nt(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return nv||!!nd(nl,eh(t))}catch(t){return!0}};np.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
r8=!nf||H(function(){var t;return nh(nh.call)||!nh(Object)||!nh(function(){t=!0})||t})?np:nh;var ng={};ng=function(t,e,r){var n=ta(e);n in t?i(t,n,G(0,r)):t[n]=r};var ny={},nm={},nb=tL("iterator");nm=function(t){if(!to(t))return tA(t,nb)||tA(t,"@@iterator")||r7[nt(t)]};var nw=TypeError;ny=function(t,e){var r=arguments.length<2?nm(t):e;if(tx(r))return t4(D(r,t));throw new nw(tT(t)+" is not iterable")};var n_=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
r2=function(t/* , mapfn = undefined, thisArg = undefined */){var e,r,n,o,i,a,c=tB(t),u=r8(this),s=arguments.length,f=s>1?arguments[1]:void 0,l=void 0!==f;l&&(f=ri(f,s>2?arguments[2]:void 0));var d=nm(c),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(d&&!(this===n_&&r3(d)))for(i=(o=ny(c,d)).next,r=u?new this:[];!(n=D(i,o)).done;v++)a=l?r9(o,f,[n.value,v],!0):n.value,ng(r,v,a);else for(e=eK(c),r=u?new this(e):n_(e);e>v;v++)a=l?f(c[v],v):c[v],ng(r,v,a);return r.length=v,r};var nE={},nk=tL("iterator"),nO=!1;try{var nS=0,nj={next:function(){return{done:!!nS++}},return:function(){nO=!0}};nj[nk]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(nj,function(){throw 2})}catch(t){}var nA=!(nE=function(t,e){try{if(!e&&!nO)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var r=!1;try{var n={};n[nk]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
R({target:"Array",stat:!0,forced:nA},{from:r2});var nx={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
nx=Array.isArray||function(t){return"Array"===X(t)},// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
R({target:"Array",stat:!0},{isArray:nx});var nT=Array,nP=H(function(){function t(){}// eslint-disable-next-line es/no-array-of -- safe
return!(nT.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
R({target:"Array",stat:!0,forced:nP},{of:function(){for(var t=0,e=arguments.length,r=new(r8(this)?this:nT)(e);e>t;)ng(r,t,arguments[t++]);return r.length=e,r}});var nI={},n$={},nM={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
nM=Object.keys||function(t){return eH(t,e0)},p=N&&!t7?Object.defineProperties:function(t,e){t4(t);for(var r,n=z(e),o=nM(e),a=o.length,c=0;a>c;)i(t,r=o[c++],n[r]);return t};var nL="prototype",nR="script",nC=eb("IE_PROTO"),nF=function(){},nN=function(t){return"<"+nR+">"+t+"</"+nR+">"},nH=function(t){t.write(nN("")),t.close();var e=t.parentWindow.Object;return t=null,e},nD=function(){// Thrash, waste and sodomy: IE GC bug
var t,e=t1("iframe");return e.style.display="none",ru.appendChild(e),// https://github.com/zloirock/core-js/issues/475
e.src=String("java"+nR+":"),(t=e.contentWindow.document).open(),t.write(nN("document.F=Object")),t.close(),t.F},nq=function(){try{g=new ActiveXObject("htmlfile")}catch(t){}nq="undefined"!=typeof document?document.domain&&g?nH(g)// old IE
:nD():nH(g);// WSH
for(var t=e0.length;t--;)delete nq[nL][e0[t]];return nq()};e_[nC]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
n$=Object.create||function(t,e){var r;return null!==t?(nF[nL]=t4(t),r=new nF,nF[nL]=null,// add "__proto__" for Object.getPrototypeOf polyfill
r[nC]=t):r=nq(),void 0===e?r:p(r,e)};var nB=tL("unscopables"),nU=Array.prototype;void 0===nU[nB]&&i(nU,nB,{configurable:!0,value:n$(null)}),// add a key to Array.prototype[@@unscopables]
nI=function(t){nU[nB][t]=!0},// `Array.prototype.at` method
// https://tc39.es/ecma262/#sec-array.prototype.at
R({target:"Array",proto:!0},{at:function(t){var e=tB(this),r=eK(e),n=eB(t),o=n>=0?n:r+n;return o<0||o>=r?void 0:e[o]}}),nI("at");var nW={},nG=TypeError;nW=function(t){if(t>9007199254740991)throw nG("Maximum allowed index exceeded");return t};var nz={},nJ={},nK=tL("species"),nY=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
nJ=function(t){var e;return nx(t)&&(e=t.constructor,r8(e)&&(e===nY||nx(e.prototype))?e=void 0:tu(e)&&null===(e=e[nK])&&(e=void 0)),void 0===e?nY:e},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
nz=function(t,e){return new(nJ(t))(0===e?0:e)};var nV={},nQ=tL("species");nV=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return tb>=51||!H(function(){var e=[];return(e.constructor={})[nQ]=function(){return{foo:1}},1!==e[t](Boolean).foo})};var nX=tL("isConcatSpreadable"),nZ=tb>=51||!H(function(){var t=[];return t[nX]=!1,t.concat()[0]!==t}),n0=function(t){if(!tu(t))return!1;var e=t[nX];return void 0!==e?!!e:nx(t)},n1=!nZ||!nV("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
R({target:"Array",proto:!0,arity:1,forced:n1},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var e,r,n,o,i,a=tB(this),c=nz(a,0),u=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],n0(i))for(o=eK(i),nW(u+o),r=0;r<o;r++,u++)r in i&&ng(c,u,i[r]);else nW(u+1),ng(c,u++,i);return c.length=u,c}});var n2={},n9={},n6=TypeError;n9=function(t,e){if(!delete t[e])throw new n6("Cannot delete property "+tT(e)+" of "+tT(t))};var n3=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
n2=[].copyWithin||function(t/* = 0 */,e/* = 0, end = @length */){var r=tB(this),n=eK(r),o=eq(t,n),i=eq(e,n),a=arguments.length>2?arguments[2]:void 0,c=n3((void 0===a?n:eq(a,n))-i,n-o),u=1;for(i<o&&o<i+c&&(u=-1,i+=c-1,o+=c-1);c-- >0;)i in r?r[o]=r[i]:n9(r,o),o+=u,i+=u;return r},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
R({target:"Array",proto:!0},{copyWithin:n2}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("copyWithin");var n7={},n4=K([].push),n5=function(t){var e=1===t,r=2===t,n=3===t,o=4===t,i=6===t,a=7===t,c=5===t||i;return function(u,s,f,l){for(var d,v,h=tB(u),p=J(h),g=ri(s,f),y=eK(p),m=0,b=l||nz,w=e?b(u,y):r||a?b(u,0):void 0;y>m;m++)if((c||m in p)&&(v=g(d=p[m],m,h),t)){if(e)w[m]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return d;// find
case 6:return m;// findIndex
case 2:n4(w,d);// filter
}else switch(t){case 4:return!1;// every
case 7:n4(w,d);// filterReject
}}return i?-1:n||o?o:w}},n8=(n7={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:n5(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:n5(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:n5(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:n5(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:n5(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:n5(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:n5(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:n5(7)}).every,ot={},oe=(ot=function(t,e){var r=[][t];return!!r&&H(function(){// eslint-disable-next-line no-useless-call -- required for testing
r.call(null,e||function(){return 1},1)})})("every");// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
R({target:"Array",proto:!0,forced:!oe},{every:function(t/* , thisArg */){return n8(this,t,arguments.length>1?arguments[1]:void 0)}});// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
R({target:"Array",proto:!0},{fill:function(t/* , start = 0, end = @length */){for(var e=tB(this),r=eK(e),n=arguments.length,o=eq(n>1?arguments[1]:void 0,r),i=n>2?arguments[2]:void 0,a=void 0===i?r:eq(i,r);a>o;)e[o++]=t;return e}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("fill");var or=n7.filter,on=nV("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
R({target:"Array",proto:!0,forced:!on},{filter:function(t/* , thisArg */){return or(this,t,arguments.length>1?arguments[1]:void 0)}});var oo=n7.find,oi="find",oa=!0;oi in[]&&[,][oi](function(){oa=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
R({target:"Array",proto:!0,forced:oa},{find:function(t/* , that = undefined */){return oo(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI(oi);var oc=n7.findIndex,ou="findIndex",os=!0;ou in[]&&[,][ou](function(){os=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
R({target:"Array",proto:!0,forced:os},{findIndex:function(t/* , that = undefined */){return oc(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI(ou);var of={},ol=function(t){var e=1===t;return function(r,n,o){for(var i,a=tB(r),c=J(a),u=ri(n,o),s=eK(c);s-- >0;)if(u(i=c[s],s,a))switch(t){case 0:return i;// findLast
case 1:return s;// findLastIndex
}return e?-1:void 0}},od=(of={// `Array.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
findLast:ol(0),// `Array.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
findLastIndex:ol(1)}).findLast;// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
R({target:"Array",proto:!0},{findLast:function(t/* , that = undefined */){return od(this,t,arguments.length>1?arguments[1]:void 0)}}),nI("findLast");var ov=of.findLastIndex;// `Array.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findlastindex
R({target:"Array",proto:!0},{findLastIndex:function(t/* , that = undefined */){return ov(this,t,arguments.length>1?arguments[1]:void 0)}}),nI("findLastIndex");var oh={},op=function(t,e,r,n,o,i,a,c){for(var u,s,f=o,l=0,d=!!a&&ri(a,c);l<n;)l in r&&(u=d?d(r[l],l,e):r[l],i>0&&nx(u)?(s=eK(u),f=op(t,e,u,s,f,i-1)-1):(nW(f+1),t[f]=u),f++),l++;return f};oh=op,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
R({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=tB(this),r=eK(e),n=nz(e,0);return n.length=oh(n,e,e,r,0,void 0===t?1:eB(t)),n}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
R({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var e,r=tB(this),n=eK(r);return tx(t),(e=nz(r,0)).length=oh(e,r,r,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}});var og={},oy=n7.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
og=ot("forEach")?[].forEach:function(t/* , thisArg */){return oy(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
},// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
R({target:"Array",proto:!0,forced:[].forEach!==og},{forEach:og});var om=eD.includes,ob=H(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
R({target:"Array",proto:!0,forced:ob},{includes:function(t/* , fromIndex = 0 */){return om(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("includes");var ow=eD.indexOf,o_=ra([].indexOf),oE=!!o_&&1/o_([1],1,-0)<0,ok=oE||!ot("indexOf");// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
R({target:"Array",proto:!0,forced:ok},{indexOf:function(t/* , fromIndex = 0 */){var e=arguments.length>1?arguments[1]:void 0;return oE?o_(this,t,e)||0:ow(this,t,e)}});var oO={},oS={},oj={},oA={},ox={};ox=!H(function(){function t(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var oT=eb("IE_PROTO"),oP=Object,oI=oP.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
oA=ox?oP.getPrototypeOf:function(t){var e=tB(t);if(tq(e,oT))return e[oT];var r=e.constructor;return ts(r)&&e instanceof r?r.prototype:e instanceof oP?oI:null};var o$=tL("iterator"),oM=!1;[].keys&&("next"in(b=[].keys())?(m=oA(oA(b)))!==Object.prototype&&(y=m):oM=!0),!tu(y)||H(function(){var t={};// FF44- legacy iterators case
return y[o$].call(t)!==t})?y={}:tC&&(y=n$(y)),ts(y[o$])||ea(y,o$,function(){return this});var oL=(oj={IteratorPrototype:y,BUGGY_SAFARI_ITERATORS:oM}).IteratorPrototype,oR={},oC=tL("toStringTag");oR=function(t,e,r){t&&!r&&(t=t.prototype),t&&!tq(t,oC)&&i(t,oC,{configurable:!0,value:e})};var oF=function(){return this};oS=function(t,e,r,n){var o=e+" Iterator";return t.prototype=n$(oL,{next:G(+!n,r)}),oR(t,o,!1,!0),r7[o]=oF,t};var oN={},oH={};oH=function(t,e,r){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return K(tx(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}};var oD={},oq=String,oB=TypeError;oD=function(t){if("object"==typeof t||ts(t))return t;throw new oB("Can't set "+oq(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
oN=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=oH(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return t4(r),oD(n),e?t(r,n):r.__proto__=n,r}}():void 0);var oU=eu.PROPER,oW=eu.CONFIGURABLE,oG=oj.IteratorPrototype,oz=oj.BUGGY_SAFARI_ITERATORS,oJ=tL("iterator"),oK="keys",oY="values",oV="entries",oQ=function(){return this};oO=function(t,e,r,n,o,i,a){oS(r,e,n);var c,u,s,f=function(t){if(t===o&&p)return p;if(!oz&&t&&t in v)return v[t];switch(t){case oK:case oY:case oV:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",d=!1,v=t.prototype,h=v[oJ]||v["@@iterator"]||o&&v[o],p=!oz&&h||f(o),g="Array"===e&&v.entries||h;// export additional methods
if(g&&(c=oA(g.call(new t)))!==Object.prototype&&c.next&&(tC||oA(c)===oG||(oN?oN(c,oG):ts(c[oJ])||ea(c,oJ,oQ)),// Set @@toStringTag to native iterators
oR(c,l,!0,!0),tC&&(r7[l]=oQ)),oU&&o===oY&&h&&h.name!==oY&&(!tC&&oW?t3(v,"name",oY):(d=!0,p=function(){return D(h,this)})),o){if(u={values:f(oY),keys:i?p:f(oK),entries:f(oV)},a)for(s in u)!oz&&!d&&s in v||ea(v,s,u[s]);else R({target:e,proto:!0,forced:oz||d},u)}return(!tC||a)&&v[oJ]!==p&&ea(v,oJ,p,{name:o}),r7[e]=p,u};var oX={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
oX=function(t,e){return{value:t,done:e}};var oZ="Array Iterator",o0=eg.set,o1=eg.getterFor(oZ);oO(Array,"Array",function(t,e){o0(this,{type:oZ,target:z(t),index:0,kind:e// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=o1(this),e=t.target,r=t.index++;if(!e||r>=e.length)return t.target=void 0,oX(void 0,!0);switch(t.kind){case"keys":return oX(r,!1);case"values":return oX(e[r],!1)}return oX([r,e[r]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var o2=r7.Arguments=r7.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("keys"),nI("values"),nI("entries"),!tC&&N&&"values"!==o2.name)try{i(o2,"name",{value:"values"})}catch(t){}var o9=K([].join),o6=J!==Object||!ot("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
R({target:"Array",proto:!0,forced:o6},{join:function(t){return o9(z(this),void 0===t?",":t)}});var o3={},o7=Math.min,o4=[].lastIndexOf,o5=!!o4&&1/[1].lastIndexOf(1,-0)<0,o8=ot("lastIndexOf");// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
R({target:"Array",proto:!0,forced:// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
(o3=o5||!o8?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(o5)return re(o4,this,arguments)||0;var e=z(this),r=eK(e),n=r-1;for(arguments.length>1&&(n=o7(n,eB(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return -1}:o4)!==[].lastIndexOf},{lastIndexOf:o3});var it=n7.map,ie=nV("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
R({target:"Array",proto:!0,forced:!ie},{map:function(t/* , thisArg */){return it(this,t,arguments.length>1?arguments[1]:void 0)}});var ir={},io=TypeError,ii=Object.getOwnPropertyDescriptor;ir=N&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,e){if(nx(t)&&!ii(t,"length").writable)throw new io("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e};var ia=H(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
R({target:"Array",proto:!0,arity:1,forced:ia},{// eslint-disable-next-line no-unused-vars -- required for `.length`
push:function(t){var e=tB(this),r=eK(e),n=arguments.length;nW(r+n);for(var o=0;o<n;o++)e[r]=arguments[o],r++;return ir(e,r),r}});var ic={},iu=TypeError,is=function(t){return function(e,r,n,o){tx(r);var i=tB(e),a=J(i),c=eK(i),u=t?c-1:0,s=t?-1:1;if(n<2)for(;;){if(u in a){o=a[u],u+=s;break}if(u+=s,t?u<0:c<=u)throw new iu("Reduce of empty array with no initial value")}for(;t?u>=0:c>u;u+=s)u in a&&(o=r(o,a[u],u,i));return o}},il=(ic={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:is(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:is(!0)}).left,id=!rv&&tb>79&&tb<83||!ot("reduce");// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
R({target:"Array",proto:!0,forced:id},{reduce:function(t/* , initialValue */){var e=arguments.length;return il(this,t,e,e>1?arguments[1]:void 0)}});var iv=ic.right,ih=!rv&&tb>79&&tb<83||!ot("reduceRight");// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
R({target:"Array",proto:!0,forced:ih},{reduceRight:function(t/* , initialValue */){return iv(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var ip=K([].reverse),ig=[1,2];// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
R({target:"Array",proto:!0,forced:String(ig)===String(ig.reverse())},{reverse:function(){return nx(this)&&(this.length=this.length),ip(this)}});var iy=nV("slice"),im=tL("species"),ib=Array,iw=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
R({target:"Array",proto:!0,forced:!iy},{slice:function(t,e){var r,n,o,i=z(this),a=eK(i),c=eq(t,a),u=eq(void 0===e?a:e,a);if(nx(i)&&(r=i.constructor,r8(r)&&(r===ib||nx(r.prototype))?r=void 0:tu(r)&&null===(r=r[im])&&(r=void 0),r===ib||void 0===r))return rs(i,c,u);for(o=0,n=new(void 0===r?ib:r)(iw(u-c,0));c<u;c++,o++)c in i&&ng(n,o,i[c]);return n.length=o,n}});var i_=n7.some,iE=ot("some");// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
R({target:"Array",proto:!0,forced:!iE},{some:function(t/* , thisArg */){return i_(this,t,arguments.length>1?arguments[1]:void 0)}});var ik={},iO=String;ik=function(t){if("Symbol"===nt(t))throw TypeError("Cannot convert a Symbol value to a string");return iO(t)};var iS={},ij={},iA=Array,ix=Math.max;ij=function(t,e,r){for(var n=eK(t),o=eq(e,n),i=eq(void 0===r?n:r,n),a=iA(ix(i-o,0)),c=0;o<i;o++,c++)ng(a,c,t[o]);return a.length=c,a};var iT=Math.floor,iP=function(t,e){var r=t.length,n=iT(r/2);return r<8?iI(t,e):i$(t,iP(ij(t,0,n),e),iP(ij(t,n),e),e)},iI=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},i$=function(t,e,r,n){for(var o=e.length,i=r.length,a=0,c=0;a<o||c<i;)t[a+c]=a<o&&c<i?0>=n(e[a],r[c])?e[a++]:r[c++]:a<o?e[a++]:r[c++];return t};iS=iP;var iM={},iL=tw.match(/firefox\/(\d+)/i);iM=!!iL&&+iL[1];var iR={};iR=/MSIE|Trident/.test(tw);var iC={},iF=tw.match(/AppleWebKit\/(\d+)\./);iC=!!iF&&+iF[1];var iN=[],iH=K(iN.sort),iD=K(iN.push),iq=H(function(){iN.sort(void 0)}),iB=H(function(){iN.sort(null)}),iU=ot("sort"),iW=!H(function(){// feature detection can be too slow, so check engines versions
if(tb)return tb<70;if(!iM||!(iM>3)){if(iR)return!0;if(iC)return iC<603;var t,e,r,n,o="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)iN.push({k:e+n,v:r})}for(iN.sort(function(t,e){return e.v-t.v}),n=0;n<iN.length;n++)e=iN[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
R({target:"Array",proto:!0,forced:iq||!iB||!iU||!iW},{sort:function(t){void 0!==t&&tx(t);var e,r,n=tB(this);if(iW)return void 0===t?iH(n):iH(n,t);var o=[],i=eK(n);for(r=0;r<i;r++)r in n&&iD(o,n[r]);for(iS(o,function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:ik(e)>ik(r)?1:-1}),e=eK(o),r=0;r<e;)n[r]=o[r++];for(;r<i;)n9(n,r++);return n}});var iG={},iz={};iz=function(t,e,r){return r.get&&ec(r.get,e,{getter:!0}),r.set&&ec(r.set,e,{setter:!0}),i(t,e,r)};var iJ=tL("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(iG=function(t){var e=tp(t);N&&e&&!e[iJ]&&iz(e,iJ,{configurable:!0,get:function(){return this}})})("Array");var iK=nV("splice"),iY=Math.max,iV=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
R({target:"Array",proto:!0,forced:!iK},{splice:function(t,e/* , ...items */){var r,n,o,i,a,c,u=tB(this),s=eK(u),f=eq(t,s),l=arguments.length;for(0===l?r=n=0:1===l?(r=0,n=s-f):(r=l-2,n=iV(iY(eB(e),0),s-f)),nW(s+r-n),o=nz(u,n),i=0;i<n;i++)(a=f+i)in u&&ng(o,i,u[a]);if(o.length=n,r<n){for(i=f;i<s-n;i++)a=i+n,c=i+r,a in u?u[c]=u[a]:n9(u,c);for(i=s;i>s-n+r;i--)n9(u,i-1)}else if(r>n)for(i=s-n;i>f;i--)a=i+n-1,c=i+r-1,a in u?u[c]=u[a]:n9(u,c);for(i=0;i<r;i++)u[i+f]=arguments[i+2];return ir(u,s-n+r),o}});var iQ={};// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
iQ=function(t,e){for(var r=eK(t),n=new e(r),o=0;o<r;o++)n[o]=t[r-o-1];return n};var iX=Array;// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
R({target:"Array",proto:!0},{toReversed:function(){return iQ(z(this),iX)}}),nI("toReversed");var iZ={};iZ=function(t,e){for(var r=0,n=eK(e),o=new t(n);n>r;)o[r]=e[r++];return o};var i0={},i1=Array,i2=K((i0=function(t,e){var r=C[t],n=r&&r.prototype;return n&&n[e]})("Array","sort"));// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
R({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&tx(t);var e=z(this);return i2(iZ(i1,e),t)}}),nI("toSorted");var i9=Array,i6=Math.max,i3=Math.min;// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
R({target:"Array",proto:!0},{toSpliced:function(t,e/* , ...items */){var r,n,o,i,a=z(this),c=eK(a),u=eq(t,c),s=arguments.length,f=0;for(0===s?r=n=0:1===s?(r=0,n=c-u):(r=s-2,n=i3(i6(eB(e),0),c-u)),i=i9(o=nW(c+r-n));f<u;f++)i[f]=a[f];for(;f<u+r;f++)i[f]=arguments[f-u+2];for(;f<o;f++)i[f]=a[f+n-r];return i}}),nI("toSpliced"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
nI("flatMap");// IE8-
var i7=1!==[].unshift(0)||!function(){try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
R({target:"Array",proto:!0,arity:1,forced:i7},{// eslint-disable-next-line no-unused-vars -- required for `.length`
unshift:function(t){var e=tB(this),r=eK(e),n=arguments.length;if(n){nW(r+n);for(var o=r;o--;){var i=o+n;o in e?e[i]=e[o]:n9(e,i)}for(var a=0;a<n;a++)e[a]=arguments[a]}return ir(e,r+n)}});var i4={},i5=RangeError;// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
i4=function(t,e,r,n){var o=eK(t),i=eB(r),a=i<0?o+i:i;if(a>=o||a<0)throw new i5("Incorrect index");for(var c=new e(o),u=0;u<o;u++)c[u]=u===a?n:t[u];return c};var i8=Array;// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
R({target:"Array",proto:!0},{with:function(t,e){return i4(z(this),i8,t,e)}});var at={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
at=ne?({}).toString:function(){return"[object "+nt(this)+"]"},ne||ea(Object.prototype,"toString",at,{unsafe:!0});var ae=K("".charAt),ar=K("".charCodeAt),an=K("".slice),ao=function(t){return function(e,r){var n,o,i=ik(tn(e)),a=eB(r),c=i.length;return a<0||a>=c?t?"":void 0:(n=ar(i,a))<55296||n>56319||a+1===c||(o=ar(i,a+1))<56320||o>57343?t?ae(i,a):n:t?an(i,a,a+2):(n-55296<<10)+(o-56320)+65536}},ai={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:ao(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:ao(!0)}.charAt,aa="String Iterator",ac=eg.set,au=eg.getterFor(aa);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
oO(String,"String",function(t){ac(this,{type:aa,string:ik(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,e=au(this),r=e.string,n=e.index;return n>=r.length?oX(void 0,!0):(t=ai(r,n),e.index+=t.length,oX(t,!1))});C.Array;var as={},af=TypeError;as=function(t,e){if(tg(e,t))return t;throw new af("Incorrect invocation")};var al={},ad={},av=TypeError;// `Assert: IsConstructor(argument) is true`
ad=function(t){if(r8(t))return t;throw new av(tT(t)+" is not a constructor")};var ah=tL("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
al=function(t,e){var r,n=t4(t).constructor;return void 0===n||to(r=t4(n)[ah])?e:ad(r)};var ap=rt.set,ag={},ay=rt.set,am={},ab=function(){this.head=null,this.tail=null};ab.prototype={add:function(t){var e={item:t,next:null},r=this.tail;r?r.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},am=ab;var aw={};aw=/ipad|iphone|ipod/i.test(tw)&&"undefined"!=typeof Pebble;var a_={};a_=/web0s(?!.*chrome)/i.test(tw);var aE=C.MutationObserver||C.WebKitMutationObserver,ak=C.document,aO=C.process,aS=C.Promise,aj=e(C,"queueMicrotask"),aA=aj&&aj.value;// modern engines have queueMicrotask method
if(!aA){var ax=new am,aT=function(){var t,e;for(rv&&(t=aO.domain)&&t.exit();e=ax.get();)try{e()}catch(t){throw ax.head&&w(),t}t&&t.enter()};rd||rv||a_||!aE||!ak?!aw&&aS&&aS.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(k=aS.resolve(void 0)).constructor=aS,O=ri(k.then,k),w=function(){O(aT)}):rv?w=function(){aO.nextTick(aT)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
ay=ri(ay,C),w=function(){ay(aT)}):(_=!0,E=ak.createTextNode(""),new aE(aT).observe(E,{characterData:!0}),w=function(){E.data=_=!_}),aA=function(t){ax.head||w(),ax.add(t)}}ag=aA;var aP={};aP=function(t,e){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,e)}catch(t){}};var aI={};aI=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var a$={};a$=C.Promise;var aM={},aL={},aR={};aL=!/* global Deno -- Deno case */(aR="object"==typeof Deno&&Deno&&"object"==typeof Deno.version)&&!rv&&"object"==typeof window&&"object"==typeof document;var aC=a$&&a$.prototype,aF=tL("species"),aN=!1,aH=ts(C.PromiseRejectionEvent);aM={CONSTRUCTOR:e9("Promise",function(){var t=eh(a$),e=t!==String(a$);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!e&&66===tb||tC&&!(aC.catch&&aC.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!tb||tb<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var r=new a$(function(t){t(1)}),n=function(t){t(function(){},function(){})};if((r.constructor={})[aF]=n,!(aN=r.then(function(){}) instanceof n))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!e&&(aL||aR)&&!aH}),REJECTION_EVENT:aH,SUBCLASSING:aN};var aD=TypeError,aq=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw new aD("Bad Promise constructor");e=t,r=n}),this.resolve=tx(e),this.reject=tx(r)};S=function(t){return new aq(t)};var aB="Promise",aU=aM.CONSTRUCTOR,aW=aM.REJECTION_EVENT,aG=aM.SUBCLASSING,az=eg.getterFor(aB),aJ=eg.set,aK=a$&&a$.prototype,aY=a$,aV=aK,aQ=C.TypeError,aX=C.document,aZ=C.process,a0=S,a1=a0,a2=!!(aX&&aX.createEvent&&C.dispatchEvent),a9="unhandledrejection",a6=function(t){var e;return!!(tu(t)&&ts(e=t.then))&&e},a3=function(t,e){var r,n,o,i=e.value,a=1===e.state,c=a?t.ok:t.fail,u=t.resolve,s=t.reject,f=t.domain;try{c?(a||(2===e.rejection&&ct(e),e.rejection=1),!0===c?r=i:(f&&f.enter(),r=c(i),f&&(f.exit(),o=!0)),r===t.promise?s(new aQ("Promise-chain cycle")):(n=a6(r))?D(n,r,u,s):u(r)):s(i)}catch(t){f&&!o&&f.exit(),s(t)}},a7=function(t,e){t.notified||(t.notified=!0,ag(function(){for(var r,n=t.reactions;r=n.get();)a3(r,t);t.notified=!1,e&&!t.rejection&&a5(t)}))},a4=function(t,e,r){var n,o;a2?((n=aX.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),C.dispatchEvent(n)):n={promise:e,reason:r},!aW&&(o=C["on"+t])?o(n):t===a9&&aP("Unhandled promise rejection",r)},a5=function(t){D(ap,C,function(){var e,r=t.facade,n=t.value;if(a8(t)&&(e=aI(function(){rv?aZ.emit("unhandledRejection",n,r):a4(a9,r,n)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=rv||a8(t)?2:1,e.error))throw e.value})},a8=function(t){return 1!==t.rejection&&!t.parent},ct=function(t){D(ap,C,function(){var e=t.facade;rv?aZ.emit("rejectionHandled",e):a4("rejectionhandled",e,t.value)})},ce=function(t,e,r){return function(n){t(e,n,r)}},cr=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,a7(t,!0))},cn=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw new aQ("Promise can't be resolved itself");var n=a6(e);n?ag(function(){var r={done:!1};try{D(n,e,ce(cn,r,t),ce(cr,r,t))}catch(e){cr(r,e,t)}}):(t.value=e,t.state=1,a7(t,!1))}catch(e){cr({done:!1},e,t)}}};// constructor polyfill
if(aU&&(aV=// 25.4.3.1 Promise(executor)
(aY=function(t){as(this,aV),tx(t),D(j,this);var e=az(this);try{t(ce(cn,e),ce(cr,e))}catch(t){cr(e,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(j=function(t){aJ(this,{type:aB,done:!1,notified:!1,parent:!1,reactions:new am,rejection:!1,state:0,value:void 0})}).prototype=ea(aV,"then",function(t,e){var r=az(this),n=a0(al(this,aY));return r.parent=!0,n.ok=!ts(t)||t,n.fail=ts(e)&&e,n.domain=rv?aZ.domain:void 0,0===r.state?r.reactions.add(n):ag(function(){a3(n,r)}),n.promise}),A=function(){var t=new j,e=az(t);this.promise=t,this.resolve=ce(cn,e),this.reject=ce(cr,e)},S=a0=function(t){return t===aY||t===x?new A(t):a1(t)},!tC&&ts(a$)&&aK!==Object.prototype)){T=aK.then,aG||ea(aK,"then",function(t,e){var r=this;return new aY(function(t,e){D(T,r,t,e)}).then(t,e);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete aK.constructor}catch(t){}oN&&oN(aK,aV)}R({global:!0,constructor:!0,wrap:!0,forced:aU},{Promise:aY}),oR(aY,aB,!1,!0),iG(aB);var co={},ci=TypeError,ca=function(t,e){this.stopped=t,this.result=e},cc=ca.prototype;co=function(t,e,r){var n,o,i,a,c,u,s,f=r&&r.that,l=!!(r&&r.AS_ENTRIES),d=!!(r&&r.IS_RECORD),v=!!(r&&r.IS_ITERATOR),h=!!(r&&r.INTERRUPTED),p=ri(e,f),g=function(t){return n&&r6(n,"normal",t),new ca(!0,t)},y=function(t){return l?(t4(t),h?p(t[0],t[1],g):p(t[0],t[1])):h?p(t,g):p(t)};if(d)n=t.iterator;else if(v)n=t;else{if(!(o=nm(t)))throw new ci(tT(t)+" is not iterable");// optimisation for array iterators
if(r3(o)){for(i=0,a=eK(t);a>i;i++)if((c=y(t[i]))&&tg(cc,c))return c;return new ca(!1)}n=ny(t,o)}for(u=d?t.next:n.next;!(s=D(u,n)).done;){try{c=y(s.value)}catch(t){r6(n,"throw",t)}if("object"==typeof c&&c&&tg(cc,c))return c}return new ca(!1)};var cu={};cu=aM.CONSTRUCTOR||!nE(function(t){a$.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
R({target:"Promise",stat:!0,forced:cu},{all:function(t){var e=this,r=S(e),n=r.resolve,o=r.reject,i=aI(function(){var r=tx(e.resolve),i=[],a=0,c=1;co(t,function(t){var u=a++,s=!1;c++,D(r,e,t).then(function(t){!s&&(s=!0,i[u]=t,--c||n(i))},o)}),--c||n(i)});return i.error&&o(i.value),r.promise}});var cs=aM.CONSTRUCTOR,cf=a$&&a$.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
R({target:"Promise",proto:!0,forced:cs,real:!0},{catch:function(t){return this.then(void 0,t)}}),!tC&&ts(a$)){var cl=tp("Promise").prototype.catch;cf.catch!==cl&&ea(cf,"catch",cl,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
R({target:"Promise",stat:!0,forced:cu},{race:function(t){var e=this,r=S(e),n=r.reject,o=aI(function(){var o=tx(e.resolve);co(t,function(t){D(o,e,t).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}});var cd=aM.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
R({target:"Promise",stat:!0,forced:cd},{reject:function(t){var e=S(this);return D(e.reject,void 0,t),e.promise}});var cv=aM.CONSTRUCTOR,ch={};ch=function(t,e){if(t4(t),tu(e)&&e.constructor===t)return e;var r=S(t);return(0,r.resolve)(e),r.promise};var cp=tp("Promise"),cg=tC&&!cv;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
R({target:"Promise",stat:!0,forced:tC||cv},{resolve:function(t){return ch(cg&&this===cp?a$:this,t)}});var cy={},cm={},cb={};cb=function(t,e,r){for(var n in e)ea(t,n,e[n],r);return t};var cw={},c_="USE_FUNCTION_CONSTRUCTOR",cE=tL("asyncIterator"),ck=C.AsyncIterator,cO=tF.AsyncIteratorPrototype;if(cO)P=cO;else if(ts(ck))P=ck.prototype;else if(tF[c_]||C[c_])try{// eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
I=oA(oA(oA(Function("return async function*(){}()")()))),oA(I)===Object.prototype&&(P=I)}catch(t){}P?tC&&(P=n$(P)):P={},ts(P[cE])||ea(P,cE,function(){return this}),cw=P;var cS=tp("Promise"),cj="AsyncFromSyncIterator",cA=eg.set,cx=eg.getterFor(cj),cT=function(t,e,r){var n=t.done;cS.resolve(t.value).then(function(t){e(oX(t,n))},r)},cP=function(t){t.type=cj,cA(this,t)};cP.prototype=cb(n$(cw),{next:function(){var t=cx(this);return new cS(function(e,r){cT(t4(D(t.next,t.iterator)),e,r)})},return:function(){var t=cx(this).iterator;return new cS(function(e,r){var n=tA(t,"return");if(void 0===n)return e(oX(void 0,!0));cT(t4(D(n,t)),e,r)})}}),cm=cP;var cI={};// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
cI=function(t){return{iterator:t,next:t.next,done:!1}};var c$=tL("asyncIterator");cy=function(t,e){var r=arguments.length<2?tA(t,c$):e;return r?t4(D(r,t)):new cm(cI(ny(t)))};var cM={};cM=function(t,e,r,n){try{var o=tA(t,"return");if(o)return tp("Promise").resolve(D(o,t)).then(function(){e(r)},function(t){n(t)})}catch(t){return n(t)}e(r)};var cL=function(t){var e=0===t,r=1===t,n=2===t,o=3===t;return function(t,i,a){t4(t);var c=void 0!==i;(c||!e)&&tx(i);var u=cI(t),s=tp("Promise"),f=u.iterator,l=u.next,d=0;return new s(function(t,u){var v=function(t){cM(f,u,t,u)},h=function(){try{if(c)try{nW(d)}catch(t){v(t)}s.resolve(t4(D(l,f))).then(function(l){try{if(t4(l).done)e?(a.length=d,t(a)):t(!o&&(n||void 0));else{var p=l.value;try{if(c){var g=i(p,d),y=function(i){if(r)h();else if(n)i?h():cM(f,t,!1,u);else if(e)try{a[d++]=i,h()}catch(t){v(t)}else i?cM(f,t,o||p,u):h()};tu(g)?s.resolve(g).then(y,v):y(g)}else a[d++]=p,h()}catch(t){v(t)}}}catch(t){u(t)}},u)}catch(t){u(t)}};h()})}},cR={toArray:cL(0),forEach:cL(1),every:cL(2),some:cL(3),find:cL(4)}.toArray,cC=tL("asyncIterator"),cF=K(i0("Array","values")),cN=K(cF([]).next),cH=function(){return new cD(this)},cD=function(t){this.iterator=cF(t)};cD.prototype.next=function(){return cN(this.iterator)},// `Array.fromAsync` method
// https://github.com/tc39/proposal-array-from-async
R({target:"Array",stat:!0},{fromAsync:function(t/* , mapfn = undefined, thisArg = undefined */){var e=this,r=arguments.length,n=r>1?arguments[1]:void 0,o=r>2?arguments[2]:void 0;return new(tp("Promise"))(function(r){var i=tB(t);void 0!==n&&(n=ri(n,o));var a=tA(i,cC),c=a?void 0:nm(i)||cH,u=r8(e)?new e:[];r(cR(a?cy(i,a):new cm(cI(ny(i,c))),n,u))})}});var cq={},cB=Array,cU=K([].push);cq=function(t,e,r,n){for(var o,i,a,c=tB(t),u=J(c),s=ri(e,r),f=n$(null),l=eK(u),d=0;l>d;d++)a=u[d],(i=ta(s(a,d,c)))in f?cU(f[i],a):f[i]=[a];// TODO: Remove this block from `core-js@4`
if(n&&(o=n(c))!==cB)for(i in f)f[i]=iZ(o,f[i]);return f},// `Array.prototype.group` method
// https://github.com/tc39/proposal-array-grouping
R({target:"Array",proto:!0},{group:function(t/* , thisArg */){var e=arguments.length>1?arguments[1]:void 0;return cq(this,t,e)}}),nI("group");var cW={},cG={},cz=Map.prototype,cJ=(cG={// eslint-disable-next-line es/no-map -- safe
Map:Map,set:K(cz.set),get:K(cz.get),has:K(cz.has),remove:K(cz.delete),proto:cz}).Map,cK=cG.get,cY=cG.has,cV=cG.set,cQ=K([].push);// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
R({target:"Array",proto:!0,forced:tC},{groupToMap:// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
cW=function(t/* , thisArg */){for(var e,r,n=tB(this),o=J(n),i=ri(t,arguments.length>1?arguments[1]:void 0),a=new cJ,c=eK(o),u=0;c>u;u++)cY(a,e=i(r=o[u],u,n))?cQ(cK(a,e),r):cV(a,e,[r]);return a}}),nI("groupToMap"),// `Array.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
R({target:"Array",proto:!0,forced:!ot("groupBy")},{groupBy:function(t/* , thisArg */){var e=arguments.length>1?arguments[1]:void 0;return cq(this,t,e)}}),nI("groupBy"),// `Array.prototype.groupByToMap` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
R({target:"Array",proto:!0,name:"groupToMap",forced:tC||!ot("groupByToMap")},{groupByToMap:cW}),nI("groupByToMap");var cX={},cZ={},c0=s,c1="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c2=function(t){try{return c0(t)}catch(t){return ij(c1)}};$=function(t){return c1&&"Window"===X(t)?c2(t):c0(z(t))};var c9={},c6={};c6=H(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var c3=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
c9=H(function(){c3(1)})||c6?function(t){return!!tu(t)&&(!c6||"ArrayBuffer"!==X(t))&&(!c3||c3(t))}:c3;var c7={};c7=!H(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var c4=!1,c5=tG("meta"),c8=0,ut=function(t){i(t,c5,{value:{objectID:"O"+c8++,weakData:{}// weak collections IDs
}})},ue=cZ={enable:function(){ue.enable=function(){},c4=!0;var t=s,e=K([].splice),r={};r[c5]=1,t(r).length&&(s=function(r){for(var n=t(r),o=0,i=n.length;o<i;o++)if(n[o]===c5){e(n,o,1);break}return n},R({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:$}))},fastKey:function(t,e){// return a primitive with prefix
if(!tu(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!tq(t,c5)){// can't set metadata to uncaught frozen object
if(!c9(t))return"F";// not necessary to add metadata
if(!e)return"E";// add missing metadata
ut(t);// return object ID
}return t[c5].objectID},getWeakData:function(t,e){if(!tq(t,c5)){// can't set metadata to uncaught frozen object
if(!c9(t))return!0;// not necessary to add metadata
if(!e)return!1;// add missing metadata
ut(t);// return the store of weak collections IDs
}return t[c5].weakData},onFreeze:function(t){return c7&&c4&&c9(t)&&!tq(t,c5)&&ut(t),t}};e_[c5]=!0;var ur={};// makes subclassing work correct for wrapped built-ins
ur=function(t,e,r){var n,o;return oN&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
ts(n=e.constructor)&&n!==r&&tu(o=n.prototype)&&o!==r.prototype&&oN(t,o),t},cX=function(t,e,r){var n=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),i=n?"set":"add",a=C[t],c=a&&a.prototype,u=a,s={},f=function(t){var e=K(c[t]);ea(c,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return(!o||!!tu(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return o&&!tu(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return(!o||!!tu(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(e9(t,!ts(a)||!(o||c.forEach&&!H(function(){new a().entries().next()}))))// create collection constructor
u=r.getConstructor(e,t,n,i),cZ.enable();else if(e9(t,!0)){var l=new u,d=l[i](o?{}:-0,1)!==l,v=H(function(){l.has(1)}),h=nE(function(t){new a(t)}),p=!o&&H(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new a,e=5;e--;)t[i](e,e);return!t.has(-0)});h||((u=e(function(t,e){as(t,c);var r=ur(new a,t,u);return to(e)||co(e,r[i],{that:r,AS_ENTRIES:n}),r})).prototype=c,c.constructor=u),(v||p)&&(f("delete"),f("has"),n&&f("get")),(p||d)&&f(i),o&&c.clear&&delete c.clear}return s[t]=u,R({global:!0,constructor:!0,forced:u!==a},s),oR(u,t),o||r.setStrong(u,t,n),u};var un=cZ.fastKey,uo=eg.set,ui=eg.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
cX("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},{getConstructor:function(t,e,r,n){var o=t(function(t,o){as(t,i),uo(t,{type:e,index:n$(null),first:void 0,last:void 0,size:0}),N||(t.size=0),to(o)||co(o,t[n],{that:t,AS_ENTRIES:r})}),i=o.prototype,a=ui(e),c=function(t,e,r){var n,o,i=a(t),c=u(t,e);return c?c.value=r:(i.last=c={index:o=un(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=c),n&&(n.next=c),N?i.size++:t.size++,"F"!==o&&(i.index[o]=c)),t},u=function(t,e){var r,n=a(t),o=un(e);if("F"!==o)return n.index[o];// frozen object case
for(r=n.first;r;r=r.next)if(r.key===e)return r};return cb(i,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,N?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var e=a(this),r=u(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first===r&&(e.first=n),e.last===r&&(e.last=o),N?e.size--:this.size--}return!!r},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var e,r=a(this),n=ri(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)// revert to the last existing entry
for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!u(this,t)}}),cb(i,r?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var e=u(this,t);return e&&e.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,e){return c(this,0===t?0:t,e)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return c(this,t=0===t?0:t,t)}}),N&&iz(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=ui(e),i=ui(n);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
oO(t,e,function(t,e){uo(this,{type:n,target:t,state:o(t),kind:e,last:void 0})},function(){// revert to the last existing entry
for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return(// get next entry
t.target&&(t.last=r=r?r.next:t.state.first)?"keys"===e?oX(r.key,!1):"values"===e?oX(r.value,!1):oX([r.key,r.value],!1):(// or finish the iteration
t.target=void 0,oX(void 0,!0)))},r?"entries":"values",!r,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
iG(e)}});var ua=n7.filterReject;// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
R({target:"Array",proto:!0,forced:!0},{filterOut:function(t/* , thisArg */){return ua(this,t,arguments.length>1?arguments[1]:void 0)}}),nI("filterOut");var uc=n7.filterReject;// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
R({target:"Array",proto:!0,forced:!0},{filterReject:function(t/* , thisArg */){return uc(this,t,arguments.length>1?arguments[1]:void 0)}}),nI("filterReject");// eslint-disable-next-line es/no-object-isfrozen -- safe
var uu=Object.isFrozen,us=function(t,e){if(!uu||!nx(t)||!uu(t))return!1;for(var r,n=0,o=t.length;n<o;)if(!("string"==typeof(r=t[n++])||e&&void 0===r))return!1;return 0!==o};// `Array.isTemplateObject` method
// https://github.com/tc39/proposal-array-is-template-object
R({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(t){if(!us(t,!0))return!1;var e=t.raw;return e.length===t.length&&us(e,!1)}}),N&&(iz(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=tB(this),e=eK(t);return 0===e?void 0:t[e-1]},set:function(t){var e=tB(this),r=eK(e);return e[0===r?0:r-1]=t}}),nI("lastItem")),N&&(iz(Array.prototype,"lastIndex",{configurable:!0,get:function(){var t=tB(this),e=eK(t);return 0===e?0:e-1}}),nI("lastIndex"));var uf={},ul={};ul=function(t,e,r){for(var n,o,i=r?t:t.iterator,a=t.next;!(n=D(a,i)).done;)if(void 0!==(o=e(n.value)))return o};var ud=cG.Map,uv=cG.proto,uh=K(uv.forEach),up=K(uv.entries),ug=up(new ud).next;uf=function(t,e,r){return r?ul({iterator:up(t),next:ug},function(t){return e(t[1],t[0])}):uh(t,e)};var uy=cG.Map,um=cG.has,ub=cG.set,uw=K([].push);// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
R({target:"Array",proto:!0,forced:!0},{uniqueBy:function(t){var e,r,n,o=tB(this),i=eK(o),a=[],c=new uy,u=to(t)?function(t){return t}:tx(t);for(e=0;e<i;e++)um(c,n=u(r=o[e]))||ub(c,n,r);return uf(c,function(t){uw(a,t)}),a}}),nI("uniqueBy");var u_=new class extends rQ{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
    <li class="preview">
            <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
             
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${/*@__PURE__*/L(rK)}#icon-user"></use>
                </svg>
              </div>
              </div>
            </a>
          </li>`}};class uE extends rQ{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";_message="";_generateMarkup(){return console.log(this._data),this._data.map(t=>u_.render(t,!1)).join("")}}var uk=new uE;class uO extends rQ{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");if(console.log(r),!r)return;let n=+r.dataset.goto;t(n)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// page 1 and there are other pages
1===t&&e>1?`
      <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
      <span>Page ${t+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-arrow-right"></use>
      </svg>
    </button>`:t===e&&e>1?`<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${t-1}</span>
    </button>`:t<e?`<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${t-1}</span>
    </button>
    <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
      <span>Page ${t+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/L(rK)}#icon-arrow-right"></use>
      </svg>
    </button>`:"");// page 1 and no other pages
}}var uS=new uO;class uj extends rQ{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_message="";addHandlerRender(t){window.addEventListener("load",t)}_generateMarkup(){return console.log(this._data),this._data.map(t=>u_.render(t,!1)).join("")}}var uA=new uj;class ux extends rQ{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(t){this._parentElement.addEventListener("submit",function(e){e.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);t(n)})}_generateMarkup(){}}var uT=new ux,uP=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new A(i||[]),c=d,function(r,o){if(c===v)throw Error("Generator is already running");if(c===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),p);var a=l(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,p):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,p)}(i,a);if(u){if(u===p)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===d)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var s=l(t,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?h:"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d="suspendedStart",v="executing",h="completed",p={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==r&&n.call(_,a)&&// of the polyfill.
(b=_);var E=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function k(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=l(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(f).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=t,a(s)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function x(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return y.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},k(O.prototype),s(O.prototype,c,function(){return this}),t.AsyncIterator=O,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
k(E),s(E,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(E,a,function(){return this}),s(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),p}},t}({});try{regeneratorRuntime=uP}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=uP:Function("r","regeneratorRuntime = r")(uP)}// if (module.hot) {
//   module.hot.accept();
// }
const uI=async function(){try{let t=window.location.hash.slice(1);if(!t)return;rZ.renderSpinner(),uk.update(rB()),uA.update(rN.bookmarks),// loading recipe
await rD(t),rZ.render(rN.recipe)}catch(t){rZ.renderError(),console.log(t)}},u$=async function(){try{uk.renderSpinner(),console.log(uk);// 1) Get search query
let t=r1.getQuery();if(!t)return;// 2) Load search results
await rq(t),uk.render(rB()),uS.render(rN.search)}catch(t){console.log(t)}},uM=async function(t){try{uT.renderSpinner(),// upload the new recipe data
await rJ(t),console.log(rN.recipe),rZ.render(rN.recipe),uT.renderMessage(),uA.render(rN.bookmarks),// change id in url
window.history.pushState(null,"",`#${rN.recipe.id}`),// close form window
setTimeout(function(){uT.toggleWindow()},2500)}catch(t){console.log(t),uT.renderError(t.message)}// upload new recipe data
};uA.addHandlerRender(function(){uA.render(rN.bookmarks)}),rZ.addHandlerRender(uI),rZ.addHandlerUpdateServings(function(t){// update recipe servings (in state)
rU(t),rZ.update(rN.recipe)}),rZ.addHandlerAddBookmark(function(){rN.recipe.bookmarked?rz(rN.recipe.id):rG(rN.recipe),rZ.update(rN.recipe),uA.render(rN.bookmarks)}),r1.addHandlerSearch(u$),uS.addHandlerClick(function(t){uk.render(rB(t)),uS.render(rN.search)}),uT.addHandlerUpload(uM);//# sourceMappingURL=index.67bb2083.js.map

//# sourceMappingURL=index.67bb2083.js.map
