function xw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ow(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gg={exports:{}},kl={},Qg={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),Lw=Symbol.for("react.fragment"),Mw=Symbol.for("react.strict_mode"),Fw=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),$w=Symbol.for("react.context"),bw=Symbol.for("react.forward_ref"),jw=Symbol.for("react.suspense"),Bw=Symbol.for("react.memo"),zw=Symbol.for("react.lazy"),up=Symbol.iterator;function Ww(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Jg={};function Pi(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Pi.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}var Qh=Gh.prototype=new Zg;Qh.constructor=Gh;Xg(Qh,Pi.prototype);Qh.isPureReactComponent=!0;var cp=Array.isArray,ey=Object.prototype.hasOwnProperty,Yh={current:null},ty={key:!0,ref:!0,__self:!0,__source:!0};function ny(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ey.call(e,r)&&!ty.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:co,type:t,key:s,ref:o,props:i,_owner:Yh.current}}function Hw(t,e){return{$$typeof:co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===co}function qw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qw(""+t.key):e.toString(36)}function ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case co:case Vw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pu(o,0):r,cp(i)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),ha(i,e,n,"",function(u){return u})):i!=null&&(Xh(i)&&(i=Hw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pu(s,a);o+=ha(s,e,n,l,i)}else if(l=Ww(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pu(s,a++),o+=ha(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uo(t,e,n){if(t==null)return t;var r=[],i=0;return ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Kw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},da={transition:null},Gw={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:da,ReactCurrentOwner:Yh};H.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Pi;H.Fragment=Lw;H.Profiler=Fw;H.PureComponent=Gh;H.StrictMode=Mw;H.Suspense=jw;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ey.call(e,l)&&!ty.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:co,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:$w,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uw,_context:t},t.Consumer=t};H.createElement=ny;H.createFactory=function(t){var e=ny.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:bw,render:t}};H.isValidElement=Xh;H.lazy=function(t){return{$$typeof:zw,_payload:{_status:-1,_result:t},_init:Kw}};H.memo=function(t,e){return{$$typeof:Bw,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=da.transition;da.transition={};try{t()}finally{da.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Xe.current.useCallback(t,e)};H.useContext=function(t){return Xe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Xe.current.useEffect(t,e)};H.useId=function(){return Xe.current.useId()};H.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Xe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};H.useRef=function(t){return Xe.current.useRef(t)};H.useState=function(t){return Xe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Xe.current.useTransition()};H.version="18.2.0";Qg.exports=H;var S=Qg.exports;const ry=Ow(S),Qw=xw({__proto__:null,default:ry},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw=S,Xw=Symbol.for("react.element"),Jw=Symbol.for("react.fragment"),Zw=Object.prototype.hasOwnProperty,eI=Yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tI={key:!0,ref:!0,__self:!0,__source:!0};function iy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zw.call(e,r)&&!tI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xw,type:t,key:s,ref:o,props:i,_owner:eI.current}}kl.Fragment=Jw;kl.jsx=iy;kl.jsxs=iy;Gg.exports=kl;var R=Gg.exports,Ic={},sy={exports:{}},ct={},oy={exports:{}},ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var z=D.length;D.push(j);e:for(;0<z;){var de=z-1>>>1,Ie=D[de];if(0<i(Ie,j))D[de]=j,D[z]=Ie,z=de;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],z=D.pop();if(z!==j){D[0]=z;e:for(var de=0,Ie=D.length,Mo=Ie>>>1;de<Mo;){var Yn=2*(de+1)-1,Ru=D[Yn],Xn=Yn+1,Fo=D[Xn];if(0>i(Ru,z))Xn<Ie&&0>i(Fo,Ru)?(D[de]=Fo,D[Xn]=z,de=Xn):(D[de]=Ru,D[Yn]=z,de=Yn);else if(Xn<Ie&&0>i(Fo,z))D[de]=Fo,D[Xn]=z,de=Xn;else break e}}return j}function i(D,j){var z=D.sortIndex-j.sortIndex;return z!==0?z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=D)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function v(D){if(y=!1,m(D),!_)if(n(l)!==null)_=!0,Su(A);else{var j=n(u);j!==null&&Au(v,j.startTime-D)}}function A(D,j){_=!1,y&&(y=!1,p(V),V=-1),g=!0;var z=d;try{for(m(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!Et());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ie=de(h.expirationTime<=j);j=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),m(j)}else r(l);h=n(l)}if(h!==null)var Mo=!0;else{var Yn=n(u);Yn!==null&&Au(v,Yn.startTime-j),Mo=!1}return Mo}finally{h=null,d=z,g=!1}}var C=!1,x=null,V=-1,J=5,B=-1;function Et(){return!(t.unstable_now()-B<J)}function Bi(){if(x!==null){var D=t.unstable_now();B=D;var j=!0;try{j=x(!0,D)}finally{j?zi():(C=!1,x=null)}}else C=!1}var zi;if(typeof f=="function")zi=function(){f(Bi)};else if(typeof MessageChannel<"u"){var lp=new MessageChannel,Dw=lp.port2;lp.port1.onmessage=Bi,zi=function(){Dw.postMessage(null)}}else zi=function(){w(Bi,0)};function Su(D){x=D,C||(C=!0,zi())}function Au(D,j){V=w(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Su(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(D,j,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,D){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=z+Ie,D={id:c++,callback:j,priorityLevel:D,startTime:z,expirationTime:Ie,sortIndex:-1},z>de?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(y?(p(V),V=-1):y=!0,Au(v,z-de))):(D.sortIndex=Ie,e(l,D),_||g||(_=!0,Su(A))),D},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(D){var j=d;return function(){var z=d;d=j;try{return D.apply(this,arguments)}finally{d=z}}}})(ay);oy.exports=ay;var nI=oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=S,lt=nI;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,ks={};function Sr(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(ks[t]=e,t=0;t<e.length;t++)uy.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,rI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function iI(t){return Tc.call(fp,t)?!0:Tc.call(dp,t)?!1:rI.test(t)?fp[t]=!0:(dp[t]=!0,!1)}function sI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oI(t,e,n,r){if(e===null||typeof e>"u"||sI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function Zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);Oe[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jh,Zh);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oI(e,n,i,r)&&(n=null),r||i===null?iI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var un=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),dy=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Wi(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Cu;function ts(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var ku=!1;function Nu(t,e){if(!t||ku)return"";ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ts(t):""}function aI(t){switch(t.tag){case 5:return ts(t.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Ur:return"Portal";case Sc:return"Profiler";case td:return"StrictMode";case Ac:return"Suspense";case Rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hy:return(t.displayName||"Context")+".Consumer";case cy:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:Pc(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return Pc(t(e))}catch{}}return null}function lI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pc(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uI(t){var e=fy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bo(t){t._valueTracker||(t._valueTracker=uI(t))}function py(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$n(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function kc(t,e){my(t,e);var n=$n(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nc(t,e.type,$n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nc(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ns=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$n(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ns(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$n(n)}}function gy(t,e){var n=$n(e.value),r=$n(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,_y=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cI=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(t){cI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fs[e]=fs[t]})});function vy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fs.hasOwnProperty(t)&&fs[t]?(""+e).trim():e+"px"}function Ey(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hI=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(t,e){if(e){if(hI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mc=null,Zr=null,ei=null;function vp(t){if(t=po(t)){if(typeof Mc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Vl(e),Mc(t.stateNode,t.type,e))}}function wy(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function Iy(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function Ty(t,e){return t(e)}function Sy(){}var Du=!1;function Ay(t,e,n){if(Du)return t(e,n);Du=!0;try{return Ty(t,e,n)}finally{Du=!1,(Zr!==null||ei!==null)&&(Sy(),Iy())}}function Ds(t,e){var n=t.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Fc=!1;if(en)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Fc=!1}function dI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ps=!1,xa=null,Oa=!1,Uc=null,fI={onError:function(t){ps=!0,xa=t}};function pI(t,e,n,r,i,s,o,a,l){ps=!1,xa=null,dI.apply(fI,arguments)}function mI(t,e,n,r,i,s,o,a,l){if(pI.apply(this,arguments),ps){if(ps){var u=xa;ps=!1,xa=null}else throw Error(T(198));Oa||(Oa=!0,Uc=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(Ar(t)!==t)throw Error(T(188))}function gI(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ep(i),t;if(s===r)return Ep(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Py(t){return t=gI(t),t!==null?Cy(t):null}function Cy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cy(t);if(e!==null)return e;t=t.sibling}return null}var ky=lt.unstable_scheduleCallback,wp=lt.unstable_cancelCallback,yI=lt.unstable_shouldYield,_I=lt.unstable_requestPaint,fe=lt.unstable_now,vI=lt.unstable_getCurrentPriorityLevel,sd=lt.unstable_ImmediatePriority,Ny=lt.unstable_UserBlockingPriority,Va=lt.unstable_NormalPriority,EI=lt.unstable_LowPriority,Dy=lt.unstable_IdlePriority,Nl=null,Ut=null;function wI(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:SI,II=Math.log,TI=Math.LN2;function SI(t){return t>>>=0,t===0?32:31-(II(t)/TI|0)|0}var Bo=64,zo=4194304;function rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=rs(a):(s&=o,s!==0&&(r=rs(s)))}else o=n&~i,o!==0?r=rs(o):s!==0&&(r=rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rt(e),i=1<<n,r|=t[n],e&=~i;return r}function AI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xy(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rt(e),t[e]=n}function PI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Oy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vy,ad,Ly,My,Fy,bc=!1,Wo=[],Rn=null,Pn=null,Cn=null,xs=new Map,Os=new Map,gn=[],CI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=po(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kI(t,e,n,r,i){switch(e){case"focusin":return Rn=qi(Rn,t,e,n,r,i),!0;case"dragenter":return Pn=qi(Pn,t,e,n,r,i),!0;case"mouseover":return Cn=qi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xs.set(s,qi(xs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Os.set(s,qi(Os.get(s)||null,t,e,n,r,i)),!0}return!1}function Uy(t){var e=tr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Ry(n),e!==null){t.blockedOn=e,Fy(t.priority,function(){Ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lc=r,n.target.dispatchEvent(r),Lc=null}else return e=po(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Tp(t,e,n){fa(t)&&n.delete(e)}function NI(){bc=!1,Rn!==null&&fa(Rn)&&(Rn=null),Pn!==null&&fa(Pn)&&(Pn=null),Cn!==null&&fa(Cn)&&(Cn=null),xs.forEach(Tp),Os.forEach(Tp)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,bc||(bc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,NI)))}function Vs(t){function e(i){return Ki(i,t)}if(0<Wo.length){Ki(Wo[0],t);for(var n=1;n<Wo.length;n++){var r=Wo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rn!==null&&Ki(Rn,t),Pn!==null&&Ki(Pn,t),Cn!==null&&Ki(Cn,t),xs.forEach(e),Os.forEach(e),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Uy(n),n.blockedOn===null&&gn.shift()}var ti=un.ReactCurrentBatchConfig,Ma=!0;function DI(t,e,n,r){var i=Y,s=ti.transition;ti.transition=null;try{Y=1,ld(t,e,n,r)}finally{Y=i,ti.transition=s}}function xI(t,e,n,r){var i=Y,s=ti.transition;ti.transition=null;try{Y=4,ld(t,e,n,r)}finally{Y=i,ti.transition=s}}function ld(t,e,n,r){if(Ma){var i=jc(t,e,n,r);if(i===null)Bu(t,e,r,Fa,n),Ip(t,r);else if(kI(i,t,e,n,r))r.stopPropagation();else if(Ip(t,r),e&4&&-1<CI.indexOf(t)){for(;i!==null;){var s=po(i);if(s!==null&&Vy(s),s=jc(t,e,n,r),s===null&&Bu(t,e,r,Fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bu(t,e,r,null,n)}}var Fa=null;function jc(t,e,n,r){if(Fa=null,t=id(r),t=tr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function $y(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vI()){case sd:return 1;case Ny:return 4;case Va:case EI:return 16;case Dy:return 536870912;default:return 16}default:return 16}}var In=null,ud=null,pa=null;function by(){if(pa)return pa;var t,e=ud,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pa=i.slice(t,1<r?1-r:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Sp(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Sp,this.isPropagationStopped=Sp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=ht(Ci),fo=le({},Ci,{view:0,detail:0}),OI=ht(fo),Ou,Vu,Gi,Dl=le({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(Ou=t.screenX-Gi.screenX,Vu=t.screenY-Gi.screenY):Vu=Ou=0,Gi=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),Ap=ht(Dl),VI=le({},Dl,{dataTransfer:0}),LI=ht(VI),MI=le({},fo,{relatedTarget:0}),Lu=ht(MI),FI=le({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),UI=ht(FI),$I=le({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bI=ht($I),jI=le({},Ci,{data:0}),Rp=ht(jI),BI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WI[t])?!!e[t]:!1}function hd(){return HI}var qI=le({},fo,{key:function(t){if(t.key){var e=BI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KI=ht(qI),GI=le({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=ht(GI),QI=le({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),YI=ht(QI),XI=le({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),JI=ht(XI),ZI=le({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eT=ht(ZI),tT=[9,13,27,32],dd=en&&"CompositionEvent"in window,ms=null;en&&"documentMode"in document&&(ms=document.documentMode);var nT=en&&"TextEvent"in window&&!ms,jy=en&&(!dd||ms&&8<ms&&11>=ms),Cp=String.fromCharCode(32),kp=!1;function By(t,e){switch(t){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function rT(t,e){switch(t){case"compositionend":return zy(e);case"keypress":return e.which!==32?null:(kp=!0,Cp);case"textInput":return t=e.data,t===Cp&&kp?null:t;default:return null}}function iT(t,e){if(br)return t==="compositionend"||!dd&&By(t,e)?(t=by(),pa=ud=In=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jy&&e.locale!=="ko"?null:e.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sT[t.type]:e==="textarea"}function Wy(t,e,n,r){wy(r),e=Ua(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gs=null,Ls=null;function oT(t){t_(t,0)}function xl(t){var e=zr(t);if(py(e))return t}function aT(t,e){if(t==="change")return e}var Hy=!1;if(en){var Mu;if(en){var Fu="oninput"in document;if(!Fu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Fu=typeof Dp.oninput=="function"}Mu=Fu}else Mu=!1;Hy=Mu&&(!document.documentMode||9<document.documentMode)}function xp(){gs&&(gs.detachEvent("onpropertychange",qy),Ls=gs=null)}function qy(t){if(t.propertyName==="value"&&xl(Ls)){var e=[];Wy(e,Ls,t,id(t)),Ay(oT,e)}}function lT(t,e,n){t==="focusin"?(xp(),gs=e,Ls=n,gs.attachEvent("onpropertychange",qy)):t==="focusout"&&xp()}function uT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Ls)}function cT(t,e){if(t==="click")return xl(e)}function hT(t,e){if(t==="input"||t==="change")return xl(e)}function dT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:dT;function Ms(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tc.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,e){var n=Op(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Op(n)}}function Ky(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ky(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gy(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fT(t){var e=Gy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ky(n.ownerDocument.documentElement,n)){if(r!==null&&fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vp(n,s);var o=Vp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pT=en&&"documentMode"in document&&11>=document.documentMode,jr=null,Bc=null,ys=null,zc=!1;function Lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||jr==null||jr!==Da(r)||(r=jr,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ys&&Ms(ys,r)||(ys=r,r=Ua(Bc,"onSelect"),0<r.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Br={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Uu={},Qy={};en&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ol(t){if(Uu[t])return Uu[t];if(!Br[t])return t;var e=Br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qy)return Uu[t]=e[n];return t}var Yy=Ol("animationend"),Xy=Ol("animationiteration"),Jy=Ol("animationstart"),Zy=Ol("transitionend"),e_=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(t,e){e_.set(t,e),Sr(e,[t])}for(var $u=0;$u<Mp.length;$u++){var bu=Mp[$u],mT=bu.toLowerCase(),gT=bu[0].toUpperCase()+bu.slice(1);Wn(mT,"on"+gT)}Wn(Yy,"onAnimationEnd");Wn(Xy,"onAnimationIteration");Wn(Jy,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(Zy,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yT=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mI(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Fp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Fp(i,a,u),s=l}}}if(Oa)throw t=Uc,Oa=!1,Uc=null,t}function ee(t,e){var n=e[Gc];n===void 0&&(n=e[Gc]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function ju(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[Ko]){t[Ko]=!0,uy.forEach(function(n){n!=="selectionchange"&&(yT.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ko]||(e[Ko]=!0,ju("selectionchange",!1,e))}}function n_(t,e,n,r){switch($y(e)){case 1:var i=DI;break;case 4:i=xI;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ay(function(){var u=s,c=id(n),h=[];e:{var d=e_.get(t);if(d!==void 0){var g=cd,_=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":g=KI;break;case"focusin":_="focus",g=Lu;break;case"focusout":_="blur",g=Lu;break;case"beforeblur":case"afterblur":g=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=LI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=YI;break;case Yy:case Xy:case Jy:g=UI;break;case Zy:g=JI;break;case"scroll":g=OI;break;case"wheel":g=eT;break;case"copy":case"cut":case"paste":g=bI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pp}var y=(e&4)!==0,w=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ds(f,p),v!=null&&y.push(Us(f,v,m)))),w)break;f=f.return}0<y.length&&(d=new g(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Lc&&(_=n.relatedTarget||n.fromElement)&&(tr(_)||_[tn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?tr(_):null,_!==null&&(w=Ar(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Ap,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Pp,v="onPointerLeave",p="onPointerEnter",f="pointer"),w=g==null?d:zr(g),m=_==null?d:zr(_),d=new y(v,f+"leave",g,n,c),d.target=w,d.relatedTarget=m,v=null,tr(c)===u&&(y=new y(p,f+"enter",_,n,c),y.target=m,y.relatedTarget=w,v=y),w=v,g&&_)t:{for(y=g,p=_,f=0,m=y;m;m=Or(m))f++;for(m=0,v=p;v;v=Or(v))m++;for(;0<f-m;)y=Or(y),f--;for(;0<m-f;)p=Or(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Or(y),p=Or(p)}y=null}else y=null;g!==null&&Up(h,d,g,y,!1),_!==null&&w!==null&&Up(h,w,_,y,!0)}}e:{if(d=u?zr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=aT;else if(Np(d))if(Hy)A=hT;else{A=uT;var C=lT}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=cT);if(A&&(A=A(t,u))){Wy(h,A,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Nc(d,"number",d.value)}switch(C=u?zr(u):window,t){case"focusin":(Np(C)||C.contentEditable==="true")&&(jr=C,Bc=u,ys=null);break;case"focusout":ys=Bc=jr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Lp(h,n,c);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":Lp(h,n,c)}var x;if(dd)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else br?By(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(jy&&n.locale!=="ko"&&(br||V!=="onCompositionStart"?V==="onCompositionEnd"&&br&&(x=by()):(In=c,ud="value"in In?In.value:In.textContent,br=!0)),C=Ua(u,V),0<C.length&&(V=new Rp(V,t,null,n,c),h.push({event:V,listeners:C}),x?V.data=x:(x=zy(n),x!==null&&(V.data=x)))),(x=nT?rT(t,n):iT(t,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new Rp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}t_(h,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ds(t,n),s!=null&&r.unshift(Us(t,s,i)),s=Ds(t,e),s!=null&&r.push(Us(t,s,i))),t=t.return}return r}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ds(n,s),l!=null&&o.unshift(Us(n,l,a))):i||(l=Ds(n,s),l!=null&&o.push(Us(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _T=/\r\n?/g,vT=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(_T,`
`).replace(vT,"")}function Go(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(T(425))}function $a(){}var Wc=null,Hc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,ET=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,wT=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(IT)}:Kc;function IT(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Vt="__reactFiber$"+ki,$s="__reactProps$"+ki,tn="__reactContainer$"+ki,Gc="__reactEvents$"+ki,TT="__reactListeners$"+ki,ST="__reactHandles$"+ki;function tr(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jp(t);t!==null;){if(n=t[Vt])return n;t=jp(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[Vt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Vl(t){return t[$s]||null}var Qc=[],Wr=-1;function Hn(t){return{current:t}}function re(t){0>Wr||(t.current=Qc[Wr],Qc[Wr]=null,Wr--)}function Z(t,e){Wr++,Qc[Wr]=t.current,t.current=e}var bn={},He=Hn(bn),tt=Hn(!1),dr=bn;function hi(t,e){var n=t.type.contextTypes;if(!n)return bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function ba(){re(tt),re(He)}function Bp(t,e,n){if(He.current!==bn)throw Error(T(168));Z(He,e),Z(tt,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,lI(t)||"Unknown",i));return le({},n,r)}function ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,dr=He.current,Z(He,t),Z(tt,tt.current),!0}function zp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=r_(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,re(tt),re(He),Z(He,t)):re(tt),Z(tt,n)}var qt=null,Ll=!1,Wu=!1;function i_(t){qt===null?qt=[t]:qt.push(t)}function AT(t){Ll=!0,i_(t)}function qn(){if(!Wu&&qt!==null){Wu=!0;var t=0,e=Y;try{var n=qt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,Ll=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),ky(sd,qn),i}finally{Y=e,Wu=!1}}return null}var Hr=[],qr=0,Ba=null,za=0,dt=[],ft=0,fr=null,Kt=1,Gt="";function Jn(t,e){Hr[qr++]=za,Hr[qr++]=Ba,Ba=t,za=e}function s_(t,e,n){dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=fr,fr=t;var r=Kt;t=Gt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var s=32-Rt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Rt(e)+i|n<<i|r,Gt=s+t}else Kt=1<<s|n<<i|r,Gt=t}function pd(t){t.return!==null&&(Jn(t,1),s_(t,1,0))}function md(t){for(;t===Ba;)Ba=Hr[--qr],Hr[qr]=null,za=Hr[--qr],Hr[qr]=null;for(;t===fr;)fr=dt[--ft],dt[ft]=null,Gt=dt[--ft],dt[ft]=null,Kt=dt[--ft],dt[ft]=null}var ot=null,st=null,se=!1,St=null;function o_(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:Kt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function Yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xc(t){if(se){var e=st;if(e){var n=e;if(!Wp(t,e)){if(Yc(t))throw Error(T(418));e=kn(n.nextSibling);var r=ot;e&&Wp(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,se=!1,ot=t)}}else{if(Yc(t))throw Error(T(418));t.flags=t.flags&-4097|2,se=!1,ot=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function Qo(t){if(t!==ot)return!1;if(!se)return Hp(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=st)){if(Yc(t))throw a_(),Error(T(418));for(;e;)o_(t,e),e=kn(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?kn(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=st;t;)t=kn(t.nextSibling)}function di(){st=ot=null,se=!1}function gd(t){St===null?St=[t]:St.push(t)}var RT=un.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wa=Hn(null),Ha=null,Kr=null,yd=null;function _d(){yd=Kr=Ha=null}function vd(t){var e=Wa.current;re(Wa),t._currentValue=e}function Jc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ha=t,yd=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(Ha===null)throw Error(T(308));Kr=t,Ha.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var nr=null;function Ed(t){nr===null?nr=[t]:nr.push(t)}function l_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}function qp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qa(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=le({},h,d);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=h}}function Kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var c_=new ly.Component().refs;function Zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=xn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nn(t,s,i),e!==null&&(Pt(e,t,i,r),ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=xn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nn(t,s,i),e!==null&&(Pt(e,t,i,r),ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=xn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nn(t,i,r),e!==null&&(Pt(e,t,r,n),ga(e,t,r))}};function Gp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,r)||!Ms(i,s):!0}function h_(t,e,n){var r=!1,i=bn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=nt(e)?dr:He.current,r=e.contextTypes,s=(r=r!=null)?hi(t,i):bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=c_,wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=nt(e)?dr:He.current,i.context=hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ml.enqueueReplaceState(i,i.state,null),qa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===c_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Yo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function d_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=On(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,v){return f===null||f.tag!==6?(f=Xu(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,v){var A=m.type;return A===$r?c(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===pn&&Yp(A)===f.type)?(v=i(f,m.props),v.ref=Qi(p,f,m),v.return=p,v):(v=Ia(m.type,m.key,m.props,null,p.mode,v),v.ref=Qi(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ju(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,v,A){return f===null||f.tag!==7?(f=lr(m,p.mode,v,A),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $o:return m=Ia(f.type,f.key,f.props,null,p.mode,m),m.ref=Qi(p,null,f),m.return=p,m;case Ur:return f=Ju(f,p.mode,m),f.return=p,f;case pn:var v=f._init;return h(p,v(f._payload),m)}if(ns(f)||Wi(f))return f=lr(f,p.mode,m,null),f.return=p,f;Yo(p,f)}return null}function d(p,f,m,v){var A=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $o:return m.key===A?l(p,f,m,v):null;case Ur:return m.key===A?u(p,f,m,v):null;case pn:return A=m._init,d(p,f,A(m._payload),v)}if(ns(m)||Wi(m))return A!==null?null:c(p,f,m,v,null);Yo(p,m)}return null}function g(p,f,m,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(f,p,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:return p=p.get(v.key===null?m:v.key)||null,l(f,p,v,A);case Ur:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,A);case pn:var C=v._init;return g(p,f,m,C(v._payload),A)}if(ns(v)||Wi(v))return p=p.get(m)||null,c(f,p,v,A,null);Yo(f,v)}return null}function _(p,f,m,v){for(var A=null,C=null,x=f,V=f=0,J=null;x!==null&&V<m.length;V++){x.index>V?(J=x,x=null):J=x.sibling;var B=d(p,x,m[V],v);if(B===null){x===null&&(x=J);break}t&&x&&B.alternate===null&&e(p,x),f=s(B,f,V),C===null?A=B:C.sibling=B,C=B,x=J}if(V===m.length)return n(p,x),se&&Jn(p,V),A;if(x===null){for(;V<m.length;V++)x=h(p,m[V],v),x!==null&&(f=s(x,f,V),C===null?A=x:C.sibling=x,C=x);return se&&Jn(p,V),A}for(x=r(p,x);V<m.length;V++)J=g(x,p,V,m[V],v),J!==null&&(t&&J.alternate!==null&&x.delete(J.key===null?V:J.key),f=s(J,f,V),C===null?A=J:C.sibling=J,C=J);return t&&x.forEach(function(Et){return e(p,Et)}),se&&Jn(p,V),A}function y(p,f,m,v){var A=Wi(m);if(typeof A!="function")throw Error(T(150));if(m=A.call(m),m==null)throw Error(T(151));for(var C=A=null,x=f,V=f=0,J=null,B=m.next();x!==null&&!B.done;V++,B=m.next()){x.index>V?(J=x,x=null):J=x.sibling;var Et=d(p,x,B.value,v);if(Et===null){x===null&&(x=J);break}t&&x&&Et.alternate===null&&e(p,x),f=s(Et,f,V),C===null?A=Et:C.sibling=Et,C=Et,x=J}if(B.done)return n(p,x),se&&Jn(p,V),A;if(x===null){for(;!B.done;V++,B=m.next())B=h(p,B.value,v),B!==null&&(f=s(B,f,V),C===null?A=B:C.sibling=B,C=B);return se&&Jn(p,V),A}for(x=r(p,x);!B.done;V++,B=m.next())B=g(x,p,V,B.value,v),B!==null&&(t&&B.alternate!==null&&x.delete(B.key===null?V:B.key),f=s(B,f,V),C===null?A=B:C.sibling=B,C=B);return t&&x.forEach(function(Bi){return e(p,Bi)}),se&&Jn(p,V),A}function w(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===$r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case $o:e:{for(var A=m.key,C=f;C!==null;){if(C.key===A){if(A=m.type,A===$r){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===pn&&Yp(A)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Qi(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===$r?(f=lr(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=Ia(m.type,m.key,m.props,null,p.mode,v),v.ref=Qi(p,f,m),v.return=p,p=v)}return o(p);case Ur:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ju(m,p.mode,v),f.return=p,p=f}return o(p);case pn:return C=m._init,w(p,f,C(m._payload),v)}if(ns(m))return _(p,f,m,v);if(Wi(m))return y(p,f,m,v);Yo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Xu(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return w}var fi=d_(!0),f_=d_(!1),mo={},$t=Hn(mo),bs=Hn(mo),js=Hn(mo);function rr(t){if(t===mo)throw Error(T(174));return t}function Id(t,e){switch(Z(js,e),Z(bs,t),Z($t,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}re($t),Z($t,e)}function pi(){re($t),re(bs),re(js)}function p_(t){rr(js.current);var e=rr($t.current),n=xc(e,t.type);e!==n&&(Z(bs,t),Z($t,n))}function Td(t){bs.current===t&&(re($t),re(bs))}var oe=Hn(0);function Ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function Sd(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var ya=un.ReactCurrentDispatcher,qu=un.ReactCurrentBatchConfig,pr=0,ae=null,Ee=null,Se=null,Ga=!1,_s=!1,Bs=0,PT=0;function Le(){throw Error(T(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function Rd(t,e,n,r,i,s){if(pr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?DT:xT,t=n(r,i),_s){s=0;do{if(_s=!1,Bs=0,25<=s)throw Error(T(301));s+=1,Se=Ee=null,e.updateQueue=null,ya.current=OT,t=n(r,i)}while(_s)}if(ya.current=Qa,e=Ee!==null&&Ee.next!==null,pr=0,Se=Ee=ae=null,Ga=!1,e)throw Error(T(300));return t}function Pd(){var t=Bs!==0;return Bs=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=t:Se=Se.next=t,Se}function vt(){if(Ee===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Se===null?ae.memoizedState:Se.next;if(e!==null)Se=e,Ee=t;else{if(t===null)throw Error(T(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Se===null?ae.memoizedState=Se=t:Se=Se.next=t}return Se}function zs(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=vt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,mr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ct(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,mr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=vt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function m_(){}function g_(t,e){var n=ae,r=vt(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,Cd(v_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ws(9,__.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(T(349));pr&30||y_(n,e,i)}return i}function y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,r){e.value=n,e.getSnapshot=r,E_(e)&&w_(t)}function v_(t,e,n){return n(function(){E_(e)&&w_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function w_(t){var e=nn(t,1);e!==null&&Pt(e,t,1,-1)}function Xp(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=NT.bind(null,ae,t),[e.memoizedState,t]}function Ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I_(){return vt().memoizedState}function _a(t,e,n,r){var i=Ot();ae.flags|=t,i.memoizedState=Ws(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Ad(r,o.deps)){i.memoizedState=Ws(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Ws(1|e,n,s,r)}function Jp(t,e){return _a(8390656,8,t,e)}function Cd(t,e){return Fl(2048,8,t,e)}function T_(t,e){return Fl(4,2,t,e)}function S_(t,e){return Fl(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,A_.bind(null,e,t),n)}function kd(){}function P_(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return pr&21?(Ct(n,e)||(n=xy(),ae.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function CT(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=qu.transition;qu.transition={};try{t(!1),e()}finally{Y=n,qu.transition=r}}function N_(){return vt().memoizedState}function kT(t,e,n){var r=xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))x_(e,n);else if(n=l_(t,e,n,r),n!==null){var i=Ye();Pt(n,t,r,i),O_(n,e,r)}}function NT(t,e,n){var r=xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))x_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,o)){var l=e.interleaved;l===null?(i.next=i,Ed(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=l_(t,e,i,r),n!==null&&(i=Ye(),Pt(n,t,r,i),O_(n,e,r))}}function D_(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function x_(t,e){_s=Ga=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}var Qa={readContext:_t,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},DT={readContext:_t,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_a(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _a(4194308,4,t,e)},useInsertionEffect:function(t,e){return _a(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kT.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:kd,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=CT.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Ot();if(se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ae===null)throw Error(T(349));pr&30||y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jp(v_.bind(null,r,s,t),[t]),r.flags|=2048,Ws(9,__.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=Ae.identifierPrefix;if(se){var n=Gt,r=Kt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xT={readContext:_t,useCallback:P_,useContext:_t,useEffect:Cd,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:S_,useMemo:C_,useReducer:Ku,useRef:I_,useState:function(){return Ku(zs)},useDebugValue:kd,useDeferredValue:function(t){var e=vt();return k_(e,Ee.memoizedState,t)},useTransition:function(){var t=Ku(zs)[0],e=vt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1},OT={readContext:_t,useCallback:P_,useContext:_t,useEffect:Cd,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:S_,useMemo:C_,useReducer:Gu,useRef:I_,useState:function(){return Gu(zs)},useDebugValue:kd,useDeferredValue:function(t){var e=vt();return Ee===null?e.memoizedState=t:k_(e,Ee.memoizedState,t)},useTransition:function(){var t=Gu(zs)[0],e=vt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1};function mi(t,e){try{var n="",r=e;do n+=aI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VT=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xa||(Xa=!0,hh=r),th(t,e)},n}function L_(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){th(t,e),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GT.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,Nn(n,e,1))),n.lanes|=1),t)}var LT=un.ReactCurrentOwner,et=!1;function Ge(t,e,n,r){e.child=t===null?f_(e,null,n,r):fi(e,t.child,n,r)}function nm(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=Rd(t,e,n,r,s,i),n=Pd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&n&&pd(e),e.flags|=1,Ge(t,e,r,i),e.child)}function rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M_(t,e,s,r,i)):(t=Ia(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ms,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=On(s,r),t.ref=e.ref,t.return=e,e.child=t}function M_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ms(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,rn(t,e,i)}return nh(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Qr,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Qr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Qr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Qr,it),it|=r;return Ge(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nh(t,e,n,r,i){var s=nt(n)?dr:He.current;return s=hi(e,s),ni(e,i),n=Rd(t,e,n,r,s,i),r=Pd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&r&&pd(e),e.flags|=1,Ge(t,e,n,i),e.child)}function im(t,e,n,r,i){if(nt(n)){var s=!0;ja(e)}else s=!1;if(ni(e,i),e.stateNode===null)va(t,e),h_(e,n,r),eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=nt(n)?dr:He.current,u=hi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qp(e,o,r,u),mn=!1;var d=e.memoizedState;o.state=d,qa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||mn?(typeof c=="function"&&(Zc(e,n,c,r),l=e.memoizedState),(a=mn||Gp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?dr:He.current,l=hi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Qp(e,o,r,l),mn=!1,d=e.memoizedState,o.state=d,qa(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||tt.current||mn?(typeof g=="function"&&(Zc(e,n,g,r),_=e.memoizedState),(u=mn||Gp(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return rh(t,e,n,r,s,i)}function rh(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zp(e,n,!1),rn(t,e,s);r=e.stateNode,LT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,s),e.child=fi(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&zp(e,n,!0),e.child}function $_(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),Id(t,e.containerInfo)}function sm(t,e,n,r,i){return di(),gd(i),e.flags|=256,Ge(t,e,n,r),e.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function b_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sh(n),e.memoizedState=ih,t):Nd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=On(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=On(a,s):(s=lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ih,r}return s=t.child,t=s.sibling,r=On(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nd(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,r){return r!==null&&gd(r),fi(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qu(Error(T(422))),Xo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=ih,s);if(!(e.mode&1))return Xo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Qu(s,r,void 0),Xo(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Pt(r,t,i,-1))}return Md(),r=Qu(Error(T(421))),Xo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=kn(i.nextSibling),ot=e,se=!0,St=null,t!==null&&(dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=fr,Kt=t.id,Gt=t.overflow,fr=e),e=Nd(e,r.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jc(t.return,e,n)}function Yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ka(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ka(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=On(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=On(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FT(t,e,n){switch(e.tag){case 3:$_(e),di();break;case 5:p_(e);break;case 1:nt(e.type)&&ja(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?b_(t,e,n):(Z(oe,oe.current&1),t=rn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return rn(t,e,n)}var B_,oh,z_,W_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};z_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rr($t.current);var s=null;switch(n){case"input":i=Cc(t,i),r=Cc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Dc(t,i),r=Dc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$a)}Oc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yi(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UT(t,e,n){var r=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return nt(e.type)&&ba(),Me(e),null;case 3:return r=e.stateNode,pi(),re(tt),re(He),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,St!==null&&(ph(St),St=null))),oh(t,e),Me(e),null;case 5:Td(e);var i=rr(js.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=rr($t.current),Qo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[$s]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)ee(is[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":mp(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":yp(r,s),ee("invalid",r)}Oc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Go(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Go(r.textContent,a,t),i=["children",""+a]):ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":bo(r),gp(r,s,!0);break;case"textarea":bo(r),_p(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$a)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[$s]=r,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)ee(is[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":mp(t,r),i=Cc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":yp(t,r),i=Dc(t,r),ee("invalid",t);break;default:i=r}Oc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ey(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_y(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ns(t,l):typeof l=="number"&&Ns(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&ed(t,s,l,o))}switch(n){case"input":bo(t),gp(t,r,!1);break;case"textarea":bo(t),_p(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$n(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)W_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=rr(js.current),rr($t.current),Qo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:Go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return Me(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&st!==null&&e.mode&1&&!(e.flags&128))a_(),di(),e.flags|=98560,s=!1;else if(s=Qo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Vt]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else St!==null&&(ph(St),St=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?we===0&&(we=3):Md())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return pi(),oh(t,e),t===null&&Fs(e.stateNode.containerInfo),Me(e),null;case 10:return vd(e.type._context),Me(e),null;case 17:return nt(e.type)&&ba(),Me(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ka(t),o!==null){for(e.flags|=128,Yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>gi&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ka(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Me(e),null}else 2*fe()-s.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function $T(t,e){switch(md(e),e.tag){case 1:return nt(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),re(tt),re(He),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return pi(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Jo=!1,$e=!1,bT=typeof WeakSet=="function"?WeakSet:Set,k=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function ah(t,e,n){try{n()}catch(r){ce(t,e,r)}}var am=!1;function jT(t,e){if(Wc=Ma,t=Gy(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},Ma=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:It(e.type,y),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){ce(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=am,am=!1,_}function vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ah(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[$s],delete e[Gc],delete e[TT],delete e[ST])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(r!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}function ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}var Ce=null,Tt=!1;function dn(t,e,n){for(n=n.child;n!==null;)K_(t,e,n),n=n.sibling}function K_(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:$e||Gr(n,e);case 6:var r=Ce,i=Tt;Ce=null,dn(t,e,n),Ce=r,Tt=i,Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Vs(t)):zu(Ce,n.stateNode));break;case 4:r=Ce,i=Tt,Ce=n.stateNode.containerInfo,Tt=!0,dn(t,e,n),Ce=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ah(n,e,o),i=i.next}while(i!==r)}dn(t,e,n);break;case 1:if(!$e&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,dn(t,e,n),$e=r):dn(t,e,n);break;default:dn(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bT),e.forEach(function(r){var i=YT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,Tt=!1;break e;case 3:Ce=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ce=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ce===null)throw Error(T(160));K_(s,o,i),Ce=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),xt(t),r&4){try{vs(3,t,t.return),Ul(3,t)}catch(y){ce(t,t.return,y)}try{vs(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:wt(e,t),xt(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(wt(e,t),xt(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{Ns(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&my(i,s),Vc(a,o);var u=Vc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ey(i,h):c==="dangerouslySetInnerHTML"?_y(i,h):c==="children"?Ns(i,h):ed(i,c,h,u)}switch(a){case"input":kc(i,s);break;case"textarea":gy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Jr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[$s]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(wt(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(wt(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:wt(e,t),xt(t);break;case 13:wt(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Od=fe())),r&4&&um(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,wt(e,t),$e=u):wt(e,t),xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,g=d.child,d.tag){case 0:case 11:case 14:case 15:vs(4,d,d.return);break;case 1:Gr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Gr(d,d.return);break;case 22:if(d.memoizedState!==null){hm(h);continue}}g!==null?(g.return=d,k=g):hm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vy("display",o))}catch(y){ce(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ce(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(e,t),xt(t),r&4&&um(t);break;case 21:break;default:wt(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ns(i,""),r.flags&=-33);var s=lm(t);ch(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=lm(t);uh(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BT(t,e,n){k=t,Q_(t)}function Q_(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Jo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=Jo;var u=$e;if(Jo=o,($e=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?dm(i):l!==null?(l.return=o,k=l):dm(i);for(;s!==null;)k=s,Q_(s),s=s.sibling;k=i,Jo=a,$e=u}cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):cm(t)}}function cm(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Vs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}$e||e.flags&512&&lh(e)}catch(d){ce(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function hm(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function dm(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{lh(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{lh(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var zT=Math.ceil,Ya=un.ReactCurrentDispatcher,Dd=un.ReactCurrentOwner,yt=un.ReactCurrentBatchConfig,G=0,Ae=null,ye=null,De=0,it=0,Qr=Hn(0),we=0,Hs=null,mr=0,$l=0,xd=0,Es=null,Ze=null,Od=0,gi=1/0,Ht=null,Xa=!1,hh=null,Dn=null,Zo=!1,Tn=null,Ja=0,ws=0,dh=null,Ea=-1,wa=0;function Ye(){return G&6?fe():Ea!==-1?Ea:Ea=fe()}function xn(t){return t.mode&1?G&2&&De!==0?De&-De:RT.transition!==null?(wa===0&&(wa=xy()),wa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:$y(t.type)),t):1}function Pt(t,e,n,r){if(50<ws)throw ws=0,dh=null,Error(T(185));ho(t,n,r),(!(G&2)||t!==Ae)&&(t===Ae&&(!(G&2)&&($l|=n),we===4&&yn(t,De)),rt(t,r),n===1&&G===0&&!(e.mode&1)&&(gi=fe()+500,Ll&&qn()))}function rt(t,e){var n=t.callbackNode;RI(t,e);var r=La(t,t===Ae?De:0);if(r===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?AT(fm.bind(null,t)):i_(fm.bind(null,t)),wT(function(){!(G&6)&&qn()}),n=null;else{switch(Oy(r)){case 1:n=sd;break;case 4:n=Ny;break;case 16:n=Va;break;case 536870912:n=Dy;break;default:n=Va}n=rv(n,Y_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y_(t,e){if(Ea=-1,wa=0,G&6)throw Error(T(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=La(t,t===Ae?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Za(t,r);else{e=r;var i=G;G|=2;var s=J_();(Ae!==t||De!==e)&&(Ht=null,gi=fe()+500,ar(t,e));do try{qT();break}catch(a){X_(t,a)}while(1);_d(),Ya.current=s,G=i,ye!==null?e=0:(Ae=null,De=0,e=we)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=fh(t,i))),e===1)throw n=Hs,ar(t,0),yn(t,r),rt(t,fe()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WT(i)&&(e=Za(t,r),e===2&&(s=$c(t),s!==0&&(r=s,e=fh(t,s))),e===1))throw n=Hs,ar(t,0),yn(t,r),rt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Zn(t,Ze,Ht);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=Od+500-fe(),10<e)){if(La(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kc(Zn.bind(null,t,Ze,Ht),e);break}Zn(t,Ze,Ht);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zT(r/1960))-r,10<r){t.timeoutHandle=Kc(Zn.bind(null,t,Ze,Ht),r);break}Zn(t,Ze,Ht);break;case 5:Zn(t,Ze,Ht);break;default:throw Error(T(329))}}}return rt(t,fe()),t.callbackNode===n?Y_.bind(null,t):null}function fh(t,e){var n=Es;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=Za(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&ph(e)),t}function ph(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function WT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~xd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rt(e),r=1<<n;t[n]=-1,e&=~r}}function fm(t){if(G&6)throw Error(T(327));ri();var e=La(t,0);if(!(e&1))return rt(t,fe()),null;var n=Za(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=fh(t,r))}if(n===1)throw n=Hs,ar(t,0),yn(t,e),rt(t,fe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zn(t,Ze,Ht),rt(t,fe()),null}function Vd(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(gi=fe()+500,Ll&&qn())}}function gr(t){Tn!==null&&Tn.tag===0&&!(G&6)&&ri();var e=G;G|=1;var n=yt.transition,r=Y;try{if(yt.transition=null,Y=1,t)return t()}finally{Y=r,yt.transition=n,G=e,!(G&6)&&qn()}}function Ld(){it=Qr.current,re(Qr)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ET(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ba();break;case 3:pi(),re(tt),re(He),Sd();break;case 5:Td(r);break;case 4:pi();break;case 13:re(oe);break;case 19:re(oe);break;case 10:vd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(Ae=t,ye=t=On(t.current,null),De=it=e,we=0,Hs=null,xd=$l=mr=0,Ze=Es=null,nr!==null){for(e=0;e<nr.length;e++)if(n=nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nr=null}return t}function X_(t,e){do{var n=ye;try{if(_d(),ya.current=Qa,Ga){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ga=!1}if(pr=0,Se=Ee=ae=null,_s=!1,Bs=0,Dd.current=null,n===null||n.return===null){we=1,Hs=e,ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=em(o);if(g!==null){g.flags&=-257,tm(g,o,a,s,e),g.mode&1&&Zp(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Zp(s,u,e),Md();break e}l=Error(T(426))}}else if(se&&a.mode&1){var w=em(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),tm(w,o,a,s,e),gd(mi(l,a));break e}}s=l=mi(l,a),we!==4&&(we=2),Es===null?Es=[s]:Es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=V_(s,l,e);qp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=L_(s,a,e);qp(s,v);break e}}s=s.return}while(s!==null)}ev(n)}catch(A){e=A,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function J_(){var t=Ya.current;return Ya.current=Qa,t===null?Qa:t}function Md(){(we===0||we===3||we===2)&&(we=4),Ae===null||!(mr&268435455)&&!($l&268435455)||yn(Ae,De)}function Za(t,e){var n=G;G|=2;var r=J_();(Ae!==t||De!==e)&&(Ht=null,ar(t,e));do try{HT();break}catch(i){X_(t,i)}while(1);if(_d(),G=n,Ya.current=r,ye!==null)throw Error(T(261));return Ae=null,De=0,we}function HT(){for(;ye!==null;)Z_(ye)}function qT(){for(;ye!==null&&!yI();)Z_(ye)}function Z_(t){var e=nv(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?ev(t):ye=e,Dd.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$T(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ye=null;return}}else if(n=UT(n,e,it),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);we===0&&(we=5)}function Zn(t,e,n){var r=Y,i=yt.transition;try{yt.transition=null,Y=1,KT(t,e,n,r)}finally{yt.transition=i,Y=r}return null}function KT(t,e,n,r){do ri();while(Tn!==null);if(G&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PI(t,s),t===Ae&&(ye=Ae=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,rv(Va,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Y;Y=1;var a=G;G|=4,Dd.current=null,jT(t,n),G_(n,t),fT(Hc),Ma=!!Wc,Hc=Wc=null,t.current=n,BT(n),_I(),G=a,Y=o,yt.transition=s}else t.current=n;if(Zo&&(Zo=!1,Tn=t,Ja=i),s=t.pendingLanes,s===0&&(Dn=null),wI(n.stateNode),rt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=hh,hh=null,t;return Ja&1&&t.tag!==0&&ri(),s=t.pendingLanes,s&1?t===dh?ws++:(ws=0,dh=t):ws=0,qn(),null}function ri(){if(Tn!==null){var t=Oy(Ja),e=yt.transition,n=Y;try{if(yt.transition=null,Y=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,Ja=0,G&6)throw Error(T(331));var i=G;for(G|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:vs(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,g=c.return;if(H_(c),c===u){k=null;break}if(d!==null){d.return=g,k=d;break}k=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(A){ce(a,a.return,A)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(G=i,qn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Nl,t)}catch{}r=!0}return r}finally{Y=n,yt.transition=e}}return!1}function pm(t,e,n){e=mi(n,e),e=V_(t,e,1),t=Nn(t,e,1),e=Ye(),t!==null&&(ho(t,1,e),rt(t,e))}function ce(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){t=mi(n,t),t=L_(e,t,1),e=Nn(e,t,1),t=Ye(),e!==null&&(ho(e,1,t),rt(e,t));break}}e=e.return}}function GT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>fe()-Od?ar(t,0):xd|=n),rt(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=Ye();t=nn(t,e),t!==null&&(ho(t,e,n),rt(t,n))}function QT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function YT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,FT(t,e,n);et=!!(t.flags&131072)}else et=!1,se&&e.flags&1048576&&s_(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;va(t,e),t=e.pendingProps;var i=hi(e,He.current);ni(e,n),i=Rd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,ja(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wd(e),i.updater=Ml,e.stateNode=i,i._reactInternals=e,eh(e,r,t,n),e=rh(null,e,r,!0,s,n)):(e.tag=0,se&&s&&pd(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(va(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JT(r),t=It(r,t),i){case 0:e=nh(null,e,r,t,n);break e;case 1:e=im(null,e,r,t,n);break e;case 11:e=nm(null,e,r,t,n);break e;case 14:e=rm(null,e,r,It(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),nh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),im(t,e,r,i,n);case 3:e:{if($_(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u_(t,e),qa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mi(Error(T(423)),e),e=sm(t,e,r,n,i);break e}else if(r!==i){i=mi(Error(T(424)),e),e=sm(t,e,r,n,i);break e}else for(st=kn(e.stateNode.containerInfo.firstChild),ot=e,se=!0,St=null,n=f_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===i){e=rn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return p_(e),t===null&&Xc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qc(r,i)?o=null:s!==null&&qc(r,s)&&(e.flags|=32),U_(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&Xc(e),null;case 13:return b_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),nm(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Wa,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!tt.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=_t(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),rm(t,e,r,i,n);case 15:return M_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),va(t,e),e.tag=1,nt(r)?(t=!0,ja(e)):t=!1,ni(e,n),h_(e,r,i),eh(e,r,i,n),rh(null,e,r,!0,t,n);case 19:return j_(t,e,n);case 22:return F_(t,e,n)}throw Error(T(156,e.tag))};function rv(t,e){return ky(t,e)}function XT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new XT(t,e,n,r)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JT(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===rd)return 14}return 2}function On(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ia(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return lr(n.children,i,s,e);case td:o=8,i|=8;break;case Sc:return t=gt(12,n,e,i|2),t.elementType=Sc,t.lanes=s,t;case Ac:return t=gt(13,n,e,i),t.elementType=Ac,t.lanes=s,t;case Rc:return t=gt(19,n,e,i),t.elementType=Rc,t.lanes=s,t;case dy:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cy:o=10;break e;case hy:o=9;break e;case nd:o=11;break e;case rd:o=14;break e;case pn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function lr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=gt(22,t,r,e),t.elementType=dy,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function Ju(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,o,a,l){return t=new ZT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function e1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return bn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(nt(n))return r_(t,n,e)}return e}function sv(t,e,n,r,i,s,o,a,l){return t=Ud(n,r,!0,t,i,s,o,a,l),t.context=iv(null),n=t.current,r=Ye(),i=xn(n),s=Jt(r,i),s.callback=e??null,Nn(n,s,i),t.current.lanes=i,ho(t,i,r),rt(t,r),t}function jl(t,e,n,r){var i=e.current,s=Ye(),o=xn(i);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nn(i,e,o),t!==null&&(Pt(t,i,o,s),ga(t,i,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function t1(){return null}var ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}Bl.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));jl(t,e,null,null)};Bl.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){jl(null,t,null,null)}),e[tn]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=My();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gn.length&&e!==0&&e<gn[n].priority;n++);gn.splice(n,0,t),n===0&&Uy(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function n1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=el(o);s.call(u)}}var o=sv(e,r,t,0,null,!1,!1,"",gm);return t._reactRootContainer=o,t[tn]=o.current,Fs(t.nodeType===8?t.parentNode:t),gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=el(l);a.call(u)}}var l=Ud(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[tn]=l.current,Fs(t.nodeType===8?t.parentNode:t),gr(function(){jl(e,l,n,r)}),l}function Wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=el(o);a.call(l)}}jl(e,o,t,i)}else o=n1(n,e,t,i,r);return el(o)}Vy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rs(e.pendingLanes);n!==0&&(od(e,n|1),rt(e,fe()),!(G&6)&&(gi=fe()+500,qn()))}break;case 13:gr(function(){var r=nn(t,1);if(r!==null){var i=Ye();Pt(r,t,1,i)}}),$d(t,1)}};ad=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Ye();Pt(e,t,134217728,n)}$d(t,134217728)}};Ly=function(t){if(t.tag===13){var e=xn(t),n=nn(t,e);if(n!==null){var r=Ye();Pt(n,t,e,r)}$d(t,e)}};My=function(){return Y};Fy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Mc=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vl(r);if(!i)throw Error(T(90));py(r),kc(r,i)}}}break;case"textarea":gy(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};Ty=Vd;Sy=gr;var r1={usingClientEntryPoint:!1,Events:[po,zr,Vl,wy,Iy,Vd]},Xi={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i1={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Py(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Nl=ea.inject(i1),Ut=ea}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(T(200));return e1(t,e,null,n)};ct.createRoot=function(t,e){if(!jd(t))throw Error(T(299));var n=!1,r="",i=ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,Fs(t.nodeType===8?t.parentNode:t),new bd(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Py(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return gr(t)};ct.hydrate=function(t,e,n){if(!zl(e))throw Error(T(200));return Wl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sv(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,Fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bl(e)};ct.render=function(t,e,n){if(!zl(e))throw Error(T(200));return Wl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!zl(t))throw Error(T(40));return t._reactRootContainer?(gr(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};ct.unstable_batchedUpdates=Vd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Wl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),sy.exports=ct;var s1=sy.exports,ym=s1;Ic.createRoot=ym.createRoot,Ic.hydrateRoot=ym.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qs.apply(this,arguments)}var Sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sn||(Sn={}));const _m="popstate";function o1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return mh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return l1(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function a1(){return Math.random().toString(36).substr(2,8)}function vm(t,e){return{usr:t.state,key:t.key,idx:e}}function mh(t,e,n,r){return n===void 0&&(n=null),qs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ni(e):e,{state:n,key:e&&e.key||r||a1()})}function tl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ni(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function l1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(qs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Sn.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:p})}function d(w,p){a=Sn.Push;let f=mh(y.location,w,p);n&&n(f,w),u=c()+1;let m=vm(f,u),v=y.createHref(f);try{o.pushState(m,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function g(w,p){a=Sn.Replace;let f=mh(y.location,w,p);n&&n(f,w),u=c();let m=vm(f,u),v=y.createHref(f);o.replaceState(m,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:tl(w);return pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_m,h),l=w,()=>{i.removeEventListener(_m,h),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(w){return o.go(w)}};return y}var Em;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Em||(Em={}));function u1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ni(e):e,i=zd(r.pathname||"/",n);if(i==null)return null;let s=lv(t);c1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=v1(s[a],I1(i));return o}function lv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:y1(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of uv(s.path))i(s,o,l)}),e}function uv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function c1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h1=/^:\w+$/,d1=3,f1=2,p1=1,m1=10,g1=-2,wm=t=>t==="*";function y1(t,e){let n=t.split("/"),r=n.length;return n.some(wm)&&(r+=g1),e&&(r+=f1),n.filter(i=>!wm(i)).reduce((i,s)=>i+(h1.test(s)?d1:s===""?p1:m1),r)}function _1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function v1(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=E1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Vn([i,c.pathname]),pathnameBase:R1(Vn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Vn([i,c.pathnameBase]))}return s}function E1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=w1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=T1(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function w1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function I1(t){try{return decodeURI(t)}catch(e){return Bd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function T1(t,e){try{return decodeURIComponent(t)}catch(n){return Bd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function S1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ni(t):t;return{pathname:n?n.startsWith("/")?n:A1(n,e):e,search:P1(r),hash:C1(i)}}function A1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wd(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ni(t):(i=qs({},t),pe(!i.pathname||!i.pathname.includes("?"),Zu("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Zu("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Zu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=S1(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Vn=t=>t.join("/").replace(/\/\/+/g,"/"),R1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),P1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,C1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function k1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cv=["post","put","patch","delete"];new Set(cv);const N1=["get",...cv];new Set(N1);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}const qd=S.createContext(null),hv=S.createContext(null),Rr=S.createContext(null),Hl=S.createContext(null),cn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),dv=S.createContext(null);function D1(t,e){let{relative:n}=e===void 0?{}:e;Di()||pe(!1);let{basename:r,navigator:i}=S.useContext(Rr),{hash:s,pathname:o,search:a}=Kd(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Di(){return S.useContext(Hl)!=null}function xi(){return Di()||pe(!1),S.useContext(Hl).location}function fv(t){S.useContext(Rr).static||S.useLayoutEffect(t)}function pv(){let{isDataRoute:t}=S.useContext(cn);return t?H1():x1()}function x1(){Di()||pe(!1);let t=S.useContext(qd),{basename:e,navigator:n}=S.useContext(Rr),{matches:r}=S.useContext(cn),{pathname:i}=xi(),s=JSON.stringify(Wd(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return fv(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Hd(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Vn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function O1(){let{matches:t}=S.useContext(cn),e=t[t.length-1];return e?e.params:{}}function Kd(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(cn),{pathname:i}=xi(),s=JSON.stringify(Wd(r).map(o=>o.pathnameBase));return S.useMemo(()=>Hd(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function V1(t,e){return L1(t,e)}function L1(t,e,n){Di()||pe(!1);let{navigator:r}=S.useContext(Rr),{matches:i}=S.useContext(cn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=xi(),u;if(e){var c;let y=typeof e=="string"?Ni(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||pe(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=u1(t,{pathname:d}),_=b1(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Vn([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Vn([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?S.createElement(Hl.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Sn.Pop}},_):_}function M1(){let t=W1(),e=k1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const F1=S.createElement(M1,null);class U1 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(cn.Provider,{value:this.props.routeContext},S.createElement(dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $1(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(qd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cn.Provider,{value:e},r)}function b1(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||F1);let d=e.concat(s.slice(0,u+1)),g=()=>{let _;return c?_=h:l.route.Component?_=S.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,S.createElement($1,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(U1,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var mv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mv||{}),rl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rl||{});function j1(t){let e=S.useContext(qd);return e||pe(!1),e}function B1(t){let e=S.useContext(hv);return e||pe(!1),e}function z1(t){let e=S.useContext(cn);return e||pe(!1),e}function gv(t){let e=z1(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function W1(){var t;let e=S.useContext(dv),n=B1(rl.UseRouteError),r=gv(rl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function H1(){let{router:t}=j1(mv.UseNavigateStable),e=gv(rl.UseNavigateStable),n=S.useRef(!1);return fv(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nl({fromRouteId:e},s)))},[t,e])}function ec(t){let{to:e,replace:n,state:r,relative:i}=t;Di()||pe(!1);let{matches:s}=S.useContext(cn),{pathname:o}=xi(),a=pv(),l=Hd(e,Wd(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ss(t){pe(!1)}function q1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:s,static:o=!1}=t;Di()&&pe(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ni(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,_=S.useMemo(()=>{let y=zd(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return _==null?null:S.createElement(Rr.Provider,{value:l},S.createElement(Hl.Provider,{children:n,value:_}))}function K1(t){let{children:e,location:n}=t;return V1(gh(e),n)}new Promise(()=>{});function gh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,gh(r.props.children,s));return}r.type!==ss&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},il.apply(this,arguments)}function yv(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function G1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Q1(t,e){return t.button===0&&(!e||e==="_self")&&!G1(t)}const Y1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],X1=["aria-current","caseSensitive","className","end","style","to","children"],J1="startTransition",Im=Qw[J1];function Z1(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=o1({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&Im?Im(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(q1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const eS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_v=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=yv(e,Y1),{basename:d}=S.useContext(Rr),g,_=!1;if(typeof u=="string"&&tS.test(u)&&(g=u,eS))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),v=zd(m.pathname,d);m.origin===f.origin&&v!=null?u=v+m.search+m.hash:_=!0}catch{}let y=D1(u,{relative:i}),w=nS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return S.createElement("a",il({},h,{href:g||y,onClick:_||s?r:p,ref:n,target:l}))}),ta=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=yv(e,X1),h=Kd(l,{relative:c.relative}),d=xi(),g=S.useContext(hv),{navigator:_}=S.useContext(Rr),y=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,w=d.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let f=w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/",m=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),v=f?r:void 0,A;typeof s=="function"?A=s({isActive:f,isPending:m}):A=[s,f?"active":null,m?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:f,isPending:m}):a;return S.createElement(_v,il({},c,{"aria-current":v,className:A,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:f,isPending:m}):u)});var Tm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Tm||(Tm={}));var Sm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sm||(Sm={}));function nS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=pv(),l=xi(),u=Kd(t,{relative:o});return S.useCallback(c=>{if(Q1(c,n)){c.preventDefault();let h=r!==void 0?r:tl(l)===tl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new iS;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sS=function(t){const e=vv(t);return Ev.encodeByteArray(e,!0)},sl=function(t){return sS(t).replace(/\./g,"")},wv=function(t){try{return Ev.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=()=>oS().__FIREBASE_DEFAULTS__,lS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wv(t[1]);return e&&JSON.parse(e)},Gd=()=>{try{return aS()||lS()||uS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iv=t=>{var e,n;return(n=(e=Gd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cS=t=>{const e=Iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tv=()=>{var t;return(t=Gd())===null||t===void 0?void 0:t.config},Sv=t=>{var e;return(e=Gd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sl(JSON.stringify(n)),sl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function pS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gS(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yS(){try{return typeof indexedDB=="object"}catch{return!1}}function _S(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vS,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ES(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function ES(t,e){return t.replace(wS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wS=/\{\$([^}]+)}/g;function IS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Am(s)&&Am(o)){if(!ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Am(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function as(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TS(t,e){const n=new SS(t,e);return n.subscribe.bind(n)}class SS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tc),i.error===void 0&&(i.error=tc),i.complete===void 0&&(i.complete=tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CS(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(t){return t===er?void 0:t}function CS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const NS={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},DS=q.INFO,xS={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},OS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=OS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const VS=(t,e)=>e.some(n=>t instanceof n);let Rm,Pm;function LS(){return Rm||(Rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MS(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,yh=new WeakMap,Rv=new WeakMap,nc=new WeakMap,Yd=new WeakMap;function FS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Av.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function US(t){if(yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yh.set(t,e)}let _h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $S(t){_h=t(_h)}function bS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return Rv.set(r,e.sort?e.sort():[e]),Ln(r)}:MS().includes(t)?function(...e){return t.apply(rc(this),e),Ln(Av.get(this))}:function(...e){return Ln(t.apply(rc(this),e))}}function jS(t){return typeof t=="function"?bS(t):(t instanceof IDBTransaction&&US(t),VS(t,LS())?new Proxy(t,_h):t)}function Ln(t){if(t instanceof IDBRequest)return FS(t);if(nc.has(t))return nc.get(t);const e=jS(t);return e!==t&&(nc.set(t,e),Yd.set(e,t)),e}const rc=t=>Yd.get(t);function BS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],ic=new Map;function Cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ic.set(e,s),s}$S(t=>({...t,get:(e,n,r)=>Cm(e,n)||t.get(e,n,r),has:(e,n)=>!!Cm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",km="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Qd("@firebase/app"),KS="@firebase/app-compat",GS="@firebase/analytics-compat",QS="@firebase/analytics",YS="@firebase/app-check-compat",XS="@firebase/app-check",JS="@firebase/auth",ZS="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",iA="@firebase/installations",sA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",uA="@firebase/performance-compat",cA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/firestore-compat",gA="firebase",yA="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="[DEFAULT]",_A={[vh]:"fire-core",[KS]:"fire-core-compat",[QS]:"fire-analytics",[GS]:"fire-analytics-compat",[XS]:"fire-app-check",[YS]:"fire-app-check-compat",[JS]:"fire-auth",[ZS]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[iA]:"fire-iid",[sA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[uA]:"fire-perf-compat",[cA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[mA]:"fire-fst-compat","fire-js":"fire-js",[gA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,wh=new Map;function vA(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(wh.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;wh.set(e,t);for(const n of al.values())vA(n,t);return!0}function Xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new go("app","Firebase",EA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=yA;function Pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=Tv()),!n)throw Mn.create("no-options");const s=al.get(i);if(s){if(ol(n,s.options)&&ol(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const o=new kS(i);for(const l of wh.values())o.addComponent(l);const a=new wA(n,r,o);return al.set(i,a),a}function Cv(t=Eh){const e=al.get(t);if(!e&&t===Eh&&Tv())return Pv();if(!e)throw Mn.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let i=(r=_A[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}yi(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="firebase-heartbeat-database",TA=1,Ks="firebase-heartbeat-store";let sc=null;function kv(){return sc||(sc=BS(IA,TA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ks)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function SA(t){try{return await(await kv()).transaction(Ks).objectStore(Ks).get(Nv(t))}catch(e){if(e instanceof hn)_r.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function Nm(t,e){try{const r=(await kv()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,Nv(t)),await r.done}catch(n){if(n instanceof hn)_r.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function Nv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=1024,RA=30*24*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=RA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dm(),{heartbeatsToSend:n,unsentEntries:r}=CA(this._heartbeatsCache.heartbeats),i=sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dm(){return new Date().toISOString().substring(0,10)}function CA(t,e=AA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yS()?_S().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xm(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){yi(new yr("platform-logger",e=>new HS(e),"PRIVATE")),yi(new yr("heartbeat",e=>new PA(e),"PRIVATE")),Fn(vh,km,t),Fn(vh,km,"esm2017"),Fn("fire-js","")}NA("");var DA="firebase",xA="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(DA,xA,"app");var OA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Jd=Jd||{},U=OA||self;function ql(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _o(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VA(t){return Object.prototype.hasOwnProperty.call(t,oc)&&t[oc]||(t[oc]=++LA)}var oc="closure_uid_"+(1e9*Math.random()>>>0),LA=0;function MA(t,e,n){return t.call.apply(t.bind,arguments)}function FA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=MA:Be=FA,Be.apply(null,arguments)}function na(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var UA=0;Kn.prototype.s=!1;Kn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),UA!=0)&&VA(this)};Kn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Om(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ql(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var $A=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return t}();function Gs(t){return/^[\s\xa0]*$/.test(t)}function Kl(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return Kl().indexOf(t)!=-1}function ef(t){return ef[" "](t),t}ef[" "]=function(){};function bA(t,e){var n=xR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jA=Lt("Opera"),_i=Lt("Trident")||Lt("MSIE"),xv=Lt("Edge"),Ih=xv||_i,Ov=Lt("Gecko")&&!(Kl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),BA=Kl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Vv(){var t=U.document;return t?t.documentMode:void 0}var Th;e:{var ac="",lc=function(){var t=Kl();if(Ov)return/rv:([^\);]+)(\)|;)/.exec(t);if(xv)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BA)return/WebKit\/(\S+)/.exec(t);if(jA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lc&&(ac=lc?lc[1]:""),_i){var uc=Vv();if(uc!=null&&uc>parseFloat(ac)){Th=String(uc);break e}}Th=ac}var Sh;if(U.document&&_i){var Vm=Vv();Sh=Vm||parseInt(Th,10)||void 0}else Sh=void 0;var zA=Sh;function Qs(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ov){e:{try{ef(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qs.$.h.call(this)}}Pe(Qs,ze);var WA={2:"touch",3:"pen",4:"mouse"};Qs.prototype.h=function(){Qs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),HA=0;function qA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++HA,this.fa=this.ia=!1}function Gl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function KA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Lv(t){const e={};for(const n in t)e[n]=t[n];return e}const Lm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Lm.length;s++)n=Lm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ql(t){this.src=t,this.g={},this.h=0}Ql.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new qA(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ah(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Dv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var nf="closure_lm_"+(1e6*Math.random()|0),cc={};function Fv(t,e,n,r,i){if(r&&r.once)return $v(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fv(t,e[s],n,r,i);return null}return n=of(n),t&&t[vo]?t.O(e,n,_o(r)?!!r.capture:!!r,i):Uv(t,e,n,!1,r,i)}function Uv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=_o(i)?!!i.capture:!!i,a=sf(t);if(a||(t[nf]=a=new Ql(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)$A||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(jv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GA(){function t(n){return e.call(t.src,t.listener,n)}const e=QA;return t}function $v(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$v(t,e[s],n,r,i);return null}return n=of(n),t&&t[vo]?t.P(e,n,_o(r)?!!r.capture:!!r,i):Uv(t,e,n,!0,r,i)}function bv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bv(t,e[s],n,r,i);else r=_o(r)?!!r.capture:!!r,n=of(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rh(s,n,r,i),-1<n&&(Gl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=sf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rh(e,n,r,i)),(n=-1<t?e[t]:null)&&rf(n))}function rf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vo])Ah(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=sf(e))?(Ah(n,t),n.h==0&&(n.src=null,e[nf]=null)):Gl(t)}}}function jv(t){return t in cc?cc[t]:cc[t]="on"+t}function QA(t,e){if(t.fa)t=!0;else{e=new Qs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&rf(t),t=n.call(r,e)}return t}function sf(t){return t=t[nf],t instanceof Ql?t:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function of(t){return typeof t=="function"?t:(t[hc]||(t[hc]=function(e){return t.handleEvent(e)}),t[hc])}function Re(){Kn.call(this),this.i=new Ql(this),this.S=this,this.J=null}Pe(Re,Kn);Re.prototype[vo]=!0;Re.prototype.removeEventListener=function(t,e,n,r){bv(this,t,e,n,r)};function xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),Mv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ra(o,r,!0,e)&&i}if(o=e.g=t,i=ra(o,r,!0,e)&&i,i=ra(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ra(o,r,!1,e)&&i}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gl(n[r]);delete t.g[e],t.h--}}this.J=null};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ra(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ah(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var af=U.JSON.stringify;class YA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function XA(){var t=lf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JA{constructor(){this.h=this.g=null}add(e,n){const r=Bv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bv=new YA(()=>new ZA,t=>t.reset());class ZA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tR(t){U.setTimeout(()=>{throw t},0)}let Ys,Xs=!1,lf=new JA,zv=()=>{const t=U.Promise.resolve(void 0);Ys=()=>{t.then(nR)}};var nR=()=>{for(var t;t=XA();){try{t.h.call(t.g)}catch(n){tR(n)}var e=Bv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xs=!1};function Yl(t,e){Re.call(this),this.h=t||1,this.g=e||U,this.j=Be(this.qb,this),this.l=Date.now()}Pe(Yl,Re);P=Yl.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xe(this,"tick"),this.ga&&(uf(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Yl.$.N.call(this),uf(this),delete this.g};function cf(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function Wv(t){t.g=cf(()=>{t.g=null,t.i&&(t.i=!1,Wv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rR extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wv(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Js(t){Kn.call(this),this.h=t,this.g={}}Pe(Js,Kn);var Mm=[];function Hv(t,e,n,r){Array.isArray(n)||(n&&(Mm[0]=n.toString()),n=Mm);for(var i=0;i<n.length;i++){var s=Fv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qv(t){tf(t.g,function(e,n){this.g.hasOwnProperty(n)&&rf(e)},t),t.g={}}Js.prototype.N=function(){Js.$.N.call(this),qv(this)};Js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xl(){this.g=!0}Xl.prototype.Ea=function(){this.g=!1};function iR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Yr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aR(t,n)+(r?" "+r:"")})}function oR(t,e){t.info(function(){return"TIMEOUT: "+e})}Xl.prototype.info=function(){};function aR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return af(n)}catch{return e}}var Pr={},Fm=null;function Jl(){return Fm=Fm||new Re}Pr.Ta="serverreachability";function Kv(t){ze.call(this,Pr.Ta,t)}Pe(Kv,ze);function Zs(t){const e=Jl();xe(e,new Kv(e))}Pr.STAT_EVENT="statevent";function Gv(t,e){ze.call(this,Pr.STAT_EVENT,t),this.stat=e}Pe(Gv,ze);function Qe(t){const e=Jl();xe(e,new Gv(e,t))}Pr.Ua="timingevent";function Qv(t,e){ze.call(this,Pr.Ua,t),this.size=e}Pe(Qv,ze);function Eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Zl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hf(){}hf.prototype.h=null;function Um(t){return t.h||(t.h=t.i())}function Xv(){}var wo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function df(){ze.call(this,"d")}Pe(df,ze);function ff(){ze.call(this,"c")}Pe(ff,ze);var Ph;function eu(){}Pe(eu,hf);eu.prototype.g=function(){return new XMLHttpRequest};eu.prototype.i=function(){return{}};Ph=new eu;function Io(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Js(this),this.P=lR,t=Ih?125:void 0,this.V=new Yl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jv}function Jv(){this.i=null,this.g="",this.h=!1}var lR=45e3,Ch={},ll={};P=Io.prototype;P.setTimeout=function(t){this.P=t};function kh(t,e,n){t.L=1,t.v=nu(sn(e)),t.s=n,t.S=!0,Zv(t,null)}function Zv(t,e){t.G=Date.now(),To(t),t.A=sn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),a0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Jv,t.g=C0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rR(Be(t.Pa,t,t.g),t.O)),Hv(t.U,t.g,"readystatechange",t.nb),e=t.I?Lv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Zs(),iR(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=Mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ih||this.g&&(this.h.h||this.g.ja()||Bm(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Zs(3):Zs(2)),tu(this);var n=this.g.da();this.ca=n;t:if(e0(this)){var r=Bm(this.g);t="";var i=r.length,s=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Is(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gs(a)){var u=a;break t}}u=null}if(n=u)Yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nh(this,n);else{this.i=!1,this.o=3,Qe(12),ir(this),Is(this);break e}}this.S?(t0(this,c,o),Ih&&this.i&&c==3&&(Hv(this.U,this.V,"tick",this.mb),this.V.start())):(Yr(this.j,this.m,o,null),Nh(this,o)),c==4&&ir(this),this.i&&!this.J&&(c==4?S0(this.l,this):(this.i=!1,To(this)))}else kR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),ir(this),Is(this)}}}catch{}finally{}};function e0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function t0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=uR(t,n),i==ll){e==4&&(t.o=4,Qe(14),r=!1),Yr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ch){t.o=4,Qe(15),Yr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yr(t.j,t.m,i,null),Nh(t,i);e0(t)&&i!=ll&&i!=Ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vf(e),e.M=!0,Qe(11))):(Yr(t.j,t.m,n,"[Invalid Chunked Response]"),ir(t),Is(t))}P.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(tu(this),t0(this,t,e),this.i&&t!=4&&To(this))}};function uR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ll:(n=Number(e.substring(n,r)),isNaN(n)?Ch:(r+=1,r+n>e.length?ll:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,ir(this)};function To(t){t.Y=Date.now()+t.P,n0(t,t.P)}function n0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Eo(Be(t.lb,t),e)}function tu(t){t.B&&(U.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oR(this.j,this.A),this.L!=2&&(Zs(),Qe(17)),ir(this),this.o=2,Is(this)):n0(this,this.Y-t)};function Is(t){t.l.H==0||t.J||S0(t.l,t)}function ir(t){tu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,uf(t.V),qv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Nh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dh(n.i,t))){if(!t.K&&Dh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)hl(n),ou(n);else break e;_f(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Eo(Be(n.ib,n),6e3));if(1>=c0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&hl(n),!Gs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pf(s,s.h),s.h=null))}if(r.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,te(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=P0(r,r.J?r.pa:null,r.Y),o.K){h0(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(tu(a),To(a)),r.g=o}else I0(r);0<n.j.length&&au(n)}else u[0]!="stop"&&u[0]!="close"||sr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?sr(n,7):yf(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Zs(4)}catch{}}function cR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ql(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ql(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function r0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ql(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hR(t),r=cR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var i0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ur(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=t.h,ul(this,t.j),this.s=t.s,this.g=t.g,cl(this,t.m),this.l=t.l;var e=t.i,n=new eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$m(this,n),this.o=t.o}else t&&(e=String(t).match(i0))?(this.h=!1,ul(this,e[1]||"",!0),this.s=ls(e[2]||""),this.g=ls(e[3]||"",!0),cl(this,e[4]),this.l=ls(e[5]||"",!0),$m(this,e[6]||"",!0),this.o=ls(e[7]||"")):(this.h=!1,this.i=new eo(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,bm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(us(e,bm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(us(n,n.charAt(0)=="/"?mR:pR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,yR)),t.join("")};function sn(t){return new ur(t)}function ul(t,e,n){t.j=n?ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $m(t,e,n){e instanceof eo?(t.i=e,_R(t.i,t.h)):(n||(e=us(e,gR)),t.i=new eo(e,t.h))}function te(t,e,n){t.i.set(e,n)}function nu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bm=/[#\/\?@]/g,pR=/[#\?:]/g,mR=/[#\?]/g,gR=/[#\?@]/g,yR=/#/g;function eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&dR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=eo.prototype;P.add=function(t,e){Gn(this),this.i=null,t=Vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function s0(t,e){Gn(t),e=Vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function o0(t,e){return Gn(t),e=Vi(t,e),t.g.has(e)}P.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Gn(this);let e=[];if(typeof t=="string")o0(this,t)&&(e=e.concat(this.g.get(Vi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Gn(this),this.i=null,t=Vi(this,t),o0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function a0(t,e,n){s0(t,e),0<n.length&&(t.i=null,t.g.set(Vi(t,e),Zd(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _R(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(s0(this,r),a0(this,i,n))},t)),t.j=e}var vR=class{constructor(t,e){this.g=t,this.map=e}};function l0(t){this.l=t||ER,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ER=10;function u0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function c0(t){return t.h?1:t.g?t.g.size:0}function Dh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pf(t,e){t.g?t.g.add(e):t.h=e}function h0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}l0.prototype.cancel=function(){if(this.i=d0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function d0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zd(t.i)}var wR=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function IR(){this.g=new wR}function TR(t,e,n){const r=n||"";try{r0(t,function(i,s){let o=i;_o(i)&&(o=af(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SR(t,e){const n=new Xl;if(U.Image){const r=new Image;r.onload=na(ia,n,r,"TestLoadImage: loaded",!0,e),r.onerror=na(ia,n,r,"TestLoadImage: error",!1,e),r.onabort=na(ia,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=na(ia,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ia(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ru(t){this.l=t.ec||null,this.j=t.ob||!1}Pe(ru,hf);ru.prototype.g=function(){return new iu(this.l,this.j)};ru.prototype.i=function(t){return function(){return t}}({});function iu(t,e){Re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(iu,Re);var mf=0;P=iu.prototype;P.open=function(t,e){if(this.readyState!=mf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,to(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=mf};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function f0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?So(this):to(this),this.readyState==3&&f0(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,So(this))};P.Ya=function(t){this.g&&(this.response=t,So(this))};P.ka=function(){this.g&&So(this)};function So(t){t.readyState=4,t.l=null,t.j=null,t.A=null,to(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function to(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(iu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AR=U.JSON.parse;function he(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=p0,this.L=this.M=!1}Pe(he,Re);var p0="",RR=/^https?$/i,PR=["POST","PUT"];P=he.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?Um(this.u):Um(Ph),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){jm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=Dv(PR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{y0(this),0<this.B&&((this.L=CR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=cf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){jm(this,s)}};function CR(t){return _i&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Jd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function jm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,m0(t),su(t)}function m0(t){t.F||(t.F=!0,xe(t,"complete"),xe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),su(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),su(this,!0)),he.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?g0(this):this.kb())};P.kb=function(){g0(this)};function g0(t){if(t.h&&typeof Jd<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)cf(t.La,0,t);else if(xe(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(i0)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!RR.test(i?i.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var s=2<Mt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",m0(t)}}finally{su(t)}}}}function su(t,e){if(t.g){y0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function y0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AR(e)}};function Bm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case p0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kR(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Gs(t[r]))continue;var n=eR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}KA(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _0(t){let e="";return tf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function gf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Ji(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function v0(t){this.Ga=0,this.j=[],this.l=new Xl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ji("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ji("baseRetryDelayMs",5e3,t),this.hb=Ji("retryDelaySeedMs",1e4,t),this.eb=Ji("forwardChannelMaxRetries",2,t),this.xa=Ji("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new l0(t&&t.concurrentRequestLimit),this.Ja=new IR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=v0.prototype;P.ra=8;P.H=1;function yf(t){if(E0(t),t.H==3){var e=t.W++,n=sn(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),Ao(t,n),e=new Io(t,t.l,e),e.L=2,e.v=nu(sn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=C0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}R0(t)}function ou(t){t.g&&(vf(t),t.g.cancel(),t.g=null)}function E0(t){ou(t),t.u&&(U.clearTimeout(t.u),t.u=null),hl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function au(t){if(!u0(t.i)&&!t.m){t.m=!0;var e=t.Na;Ys||zv(),Xs||(Ys(),Xs=!0),lf.add(e,t),t.C=0}}function NR(t,e){return c0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Eo(Be(t.Na,t,e),A0(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Io(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Lv(s),Mv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=w0(this,i,e),n=sn(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),Ao(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(_0(s)))+"&"+e:this.o&&gf(n,this.o,s)),pf(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,kh(i,n,null)):kh(i,n,e),this.H=2}}else this.H==3&&(t?zm(this,t):this.j.length==0||u0(this.i)||zm(this))};function zm(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),Ao(t,r),t.o&&t.s&&gf(r,t.o,t.s),n=new Io(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=w0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),pf(t.i,n),kh(n,r,e)}function Ao(t,e){t.na&&tf(t.na,function(n,r){te(e,r,n)}),t.h&&r0({},function(n,r){te(e,r,n)})}function w0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Be(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{TR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function I0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ys||zv(),Xs||(Ys(),Xs=!0),lf.add(e,t),t.A=0}}function _f(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Eo(Be(t.Ma,t),A0(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,T0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Eo(Be(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),ou(this),T0(this))};function vf(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function T0(t){t.g=new Io(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),Ao(t,e),t.o&&t.s&&gf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nu(sn(e)),n.s=null,n.S=!0,Zv(n,t)}P.ib=function(){this.v!=null&&(this.v=null,ou(this),_f(this),Qe(19))};function hl(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function S0(t,e){var n=null;if(t.g==e){hl(t),vf(t),t.g=null;var r=2}else if(Dh(t.i,e))n=e.F,h0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Jl(),xe(r,new Qv(r,n)),au(t)}else I0(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&NR(t,e)||r==2&&_f(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function A0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Be(t.pb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||ul(n,"https"),nu(n)),SR(n.toString(),r)}else Qe(2);t.H=0,t.h&&t.h.za(e),R0(t),E0(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function R0(t){if(t.H=0,t.ma=[],t.h){const e=d0(t.i);(e.length!=0||t.j.length!=0)&&(Om(t.ma,e),Om(t.ma,t.j),t.i.i.length=0,Zd(t.j),t.j.length=0),t.h.ya()}}function P0(t,e,n){var r=n instanceof ur?sn(n):new ur(n);if(r.g!="")e&&(r.g=e+"."+r.g),cl(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ur(null);r&&ul(s,r),e&&(s.g=e),i&&cl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),Ao(t,r),r}function C0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new ru({ob:!0})):new he(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function k0(){}P=k0.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function dl(){if(_i&&!(10<=Number(zA)))throw Error("Environmental error: no available transport.")}dl.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Re.call(this),this.g=new v0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Li(this)}Pe(ut,Re);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=P0(t,null,t.Y),au(t)};ut.prototype.close=function(){yf(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=af(t),t=n);e.j.push(new vR(e.fb++,t)),e.H==3&&au(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,yf(this.g),delete this.g,ut.$.N.call(this)};function N0(t){df.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(N0,df);function D0(){ff.call(this),this.status=1}Pe(D0,ff);function Li(t){this.g=t}Pe(Li,k0);Li.prototype.Ba=function(){xe(this.g,"a")};Li.prototype.Aa=function(t){xe(this.g,new N0(t))};Li.prototype.za=function(t){xe(this.g,new D0)};Li.prototype.ya=function(){xe(this.g,"b")};function DR(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(kt,DR);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)dc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){dc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){dc(this,r),i=0;break}}this.h=i,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xR={};function Ef(t){return-128<=t&&128>t?bA(t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function Ft(t){if(isNaN(t)||!isFinite(t))return ii;if(0>t)return Ne(Ft(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xh;return new X(e,0)}function x0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ne(x0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ft(Math.pow(e,8)),r=ii,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ft(Math.pow(e,s)),r=r.R(s).add(Ft(o))):(r=r.R(n),r=r.add(Ft(o)))}return r}var xh=4294967296,ii=Ef(0),Oh=Ef(1),Wm=Ef(16777216);P=X.prototype;P.ea=function(){if(pt(this))return-Ne(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xh+r)*e,e*=xh}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qt(this))return"0";if(pt(this))return"-"+Ne(this).toString(t);for(var e=Ft(Math.pow(t,6)),n=this,r="";;){var i=pl(n,e).g;n=fl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Qt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}P.X=function(t){return t=fl(this,t),pt(t)?-1:Qt(t)?0:1};function Ne(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(Oh)}P.abs=function(){return pt(this)?Ne(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function fl(t,e){return t.add(Ne(e))}P.R=function(t){if(Qt(this)||Qt(t))return ii;if(pt(this))return pt(t)?Ne(this).R(Ne(t)):Ne(Ne(this).R(t));if(pt(t))return Ne(this.R(Ne(t)));if(0>this.X(Wm)&&0>t.X(Wm))return Ft(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,sa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,sa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,sa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,sa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function sa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zi(t,e){this.g=t,this.h=e}function pl(t,e){if(Qt(e))throw Error("division by zero");if(Qt(t))return new Zi(ii,ii);if(pt(t))return e=pl(Ne(t),e),new Zi(Ne(e.g),Ne(e.h));if(pt(e))return e=pl(t,Ne(e)),new Zi(Ne(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Oh,r=e;0>=r.X(t);)n=Hm(n),r=Hm(r);var i=Vr(n,1),s=Vr(r,1);for(r=Vr(r,2),n=Vr(n,2);!Qt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Vr(r,1),n=Vr(n,1)}return e=fl(t,i.R(e)),new Zi(i,e)}for(i=ii;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ft(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=Ft(n),o=s.R(e);Qt(s)&&(s=Oh),i=i.add(s),t=fl(t,o)}return new Zi(i,t)}P.gb=function(t){return pl(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Hm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function Vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}dl.prototype.createWebChannel=dl.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Zl.NO_ERROR=0;Zl.TIMEOUT=8;Zl.HTTP_ERROR=6;Yv.COMPLETE="complete";Xv.EventType=wo;wo.OPEN="a";wo.CLOSE="b";wo.ERROR="c";wo.MESSAGE="d";Re.prototype.listen=Re.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=Ft;X.fromString=x0;var OR=function(){return new dl},VR=function(){return Jl()},fc=Zl,LR=Yv,MR=Pr,qm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oa=Xv,FR=he,UR=kt,si=X;const Km="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Qd("@firebase/firestore");function es(){return vr.logLevel}function O(t,...e){if(vr.logLevel<=q.DEBUG){const n=e.map(wf);vr.debug(`Firestore (${Mi}): ${t}`,...n)}}function on(t,...e){if(vr.logLevel<=q.ERROR){const n=e.map(wf);vr.error(`Firestore (${Mi}): ${t}`,...n)}}function vi(t,...e){if(vr.logLevel<=q.WARN){const n=e.map(wf);vr.warn(`Firestore (${Mi}): ${t}`,...n)}}function wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function ie(t,e){t||F()}function b(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jR{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new O0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ue(e)}}class BR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new WR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ve(0,0))}static max(){return new $(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends no{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends no{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}function GR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new jn(i,L.empty(),e)}function QR(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn($.min(),L.empty(),-1)}static max(){return new jn($.max(),L.empty(),-1)}}function YR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==XR)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}If.ae=-1;function lu(t){return t==null}function ml(t){return t===0&&1/t==-1/0}function ZR(t){return typeof t=="number"&&Number.isInteger(t)&&!ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qm(this.data.getIterator())}getIteratorFrom(e){return new Qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new At([])}unionWith(e){let n=new We(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new M0("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const eP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(ie(!!t),typeof t=="string"){let e=0;const n=eP.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sf(t){const e=t.mapValue.fields.__previous_value__;return Tf(e)?Sf(e):e}function ro(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tf(t)?4:nP(t)?9007199254740991:10:F()}function Wt(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Bn(i.timestampValue),a=Bn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Er(i.bytesValue).isEqual(Er(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ge(i.doubleValue),a=ge(s.doubleValue);return o===a?ml(o)===ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Gm(o)!==Gm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wt(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function so(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ge(s.integerValue||s.doubleValue),l=ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ym(t.timestampValue,e.timestampValue);case 4:return Ym(ro(t),ro(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Er(s),l=Er(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(ge(s.latitude),ge(o.latitude));return a!==0?a:Q(ge(s.longitude),ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=wi(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const g=wi(a[l[h]],u[c[h]]);if(g!==0)return g}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function Ym(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Bn(t),r=Bn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Ii(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):F()}function Xm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lh(t){return!!t&&"integerValue"in t}function Af(t){return!!t&&"arrayValue"in t}function Jm(t){return!!t&&"nullValue"in t}function Zm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ts(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ta(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Ts(this.value))}}function F0(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new je([n]);if(Ta(r)){const s=F0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,$.min(),$.min(),$.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new be(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new be(e,2,n,$.min(),$.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,$.min(),$.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.position=e,this.inclusive=n}}function eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n="asc"){this.field=e,this.dir=n}}function rP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{}class _e extends U0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sP(e,n,r):n==="array-contains"?new lP(e,r):n==="in"?new uP(e,r):n==="not-in"?new cP(e,r):n==="array-contains-any"?new hP(e,r):new _e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oP(e,r):new aP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nt extends U0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Nt(e,n)}matches(e){return $0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $0(t){return t.op==="and"}function b0(t){return iP(t)&&$0(t)}function iP(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function Mh(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(b0(t))return t.filters.map(e=>Mh(e)).join(",");{const e=t.filters.map(n=>Mh(n)).join(",");return`${t.op}(${e})`}}function j0(t,e){return t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(t,e):t instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&j0(o,i.filters[a]),!0):!1}(t,e):void F()}function B0(t){return t instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(B0).join(" ,")+"}"}(t):"Filter"}class sP extends _e{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class oP extends _e{constructor(e,n){super(e,"in",n),this.keys=z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aP extends _e{constructor(e,n){super(e,"not-in",n),this.keys=z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class lP extends _e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Af(n)&&so(n.arrayValue,this.value)}}class uP extends _e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class cP extends _e{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class hP extends _e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dP(t,e,n,r,i,s,o)}function Rf(t){const e=b(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.he=n}return e.he}function Pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!j0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tg(t.startAt,e.startAt)&&tg(t.endAt,e.endAt)}function Fh(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function fP(t,e,n,r,i,s,o,a){return new Ui(t,e,n,r,i,s,o,a)}function Cf(t){return new Ui(t)}function rg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function W0(t){return t.collectionGroup!==null}function Ss(t){const e=b(t);if(e.Pe===null){e.Pe=[];const n=uu(e),r=kf(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new oi(n)),e.Pe.push(new oi(je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new oi(je.keyField(),s))}}}return e.Pe}function bt(t){const e=b(t);return e.Ie||(e.Ie=pP(e,Ss(t))),e.Ie}function pP(t,e){if(t.limitType==="F")return ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oi(i.field,s)});const n=t.endAt?new gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gl(t.startAt.position,t.startAt.inclusive):null;return ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uh(t,e){e.getFirstInequalityField(),uu(t);const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $h(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return Pf(bt(t),bt(e))&&t.limitType===e.limitType}function H0(t){return`${Rf(bt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>B0(i)).join(", ")}]`),lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${r})`}(bt(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ss(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=eg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ss(r),i)||r.endAt&&!function(o,a,l){const u=eg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ss(r),i))}(t,e)}function mP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q0(t){return(e,n)=>{let r=!1;for(const i of Ss(t)){const s=gP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gP(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?wi(l,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return L0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new ue(L.comparator);function an(){return yP}const K0=new ue(L.comparator);function cs(...t){let e=K0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=K0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return As()}function Q0(){return As()}function As(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const _P=new ue(L.comparator),vP=new We(L.comparator);function W(...t){let e=vP;for(const n of t)e=e.add(n);return e}const EP=new We(Q);function wP(){return EP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ml(e)?"-0":e}}function X0(t){return{integerValue:""+t}}function IP(t,e){return ZR(e)?X0(e):Y0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this._=void 0}}function TP(t,e,n){return t instanceof yl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tf(s)&&(s=Sf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oo?Z0(t,e):t instanceof ao?eE(t,e):function(i,s){const o=J0(i,s),a=ig(o)+ig(i.Te);return Lh(o)&&Lh(i.Te)?X0(a):Y0(i.serializer,a)}(t,e)}function SP(t,e,n){return t instanceof oo?Z0(t,e):t instanceof ao?eE(t,e):n}function J0(t,e){return t instanceof _l?function(r){return Lh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yl extends du{}class oo extends du{constructor(e){super(),this.elements=e}}function Z0(t,e){const n=tE(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends du{constructor(e){super(),this.elements=e}}function eE(t,e){let n=tE(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class _l extends du{constructor(e,n){super(),this.serializer=e,this.Te=n}}function ig(t){return ge(t.integerValue||t.doubleValue)}function tE(t){return Af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof ao&&i instanceof ao?Ei(r.elements,i.elements,Wt):r instanceof _l&&i instanceof _l?Wt(r.Te,i.Te):r instanceof yl&&i instanceof yl}(t.transform,e.transform)}class RP{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function nE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iE(t.key,Zt.none()):new Co(t.key,t.data,Zt.none());{const n=t.data,r=mt.empty();let i=new We(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new At(i.toArray()),Zt.none())}}function PP(t,e,n){t instanceof Co?function(i,s,o){const a=i.value.clone(),l=og(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!Sa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=og(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(rE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,r){return t instanceof Co?function(s,o,a,l){if(!Sa(s.precondition,o))return a;const u=s.value.clone(),c=ag(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,a,l){if(!Sa(s.precondition,o))return a;const u=ag(s.fieldTransforms,l,o),c=o.data;return c.setAll(rE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Sa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=J0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ei(r,i,(s,o)=>AP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function og(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SP(o,a,n[i]))}return r}function ag(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TP(s,o,e))}return r}class iE extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kP extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=nE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>sg(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>sg(n,r))}}class Nf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return _P}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Nf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,K;function OP(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function sE(t){if(t===void 0)return on("GRPC error has no .code"),E.UNKNOWN;switch(t){case me.OK:return E.OK;case me.CANCELLED:return E.CANCELLED;case me.UNKNOWN:return E.UNKNOWN;case me.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case me.INTERNAL:return E.INTERNAL;case me.UNAVAILABLE:return E.UNAVAILABLE;case me.UNAUTHENTICATED:return E.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case me.NOT_FOUND:return E.NOT_FOUND;case me.ALREADY_EXISTS:return E.ALREADY_EXISTS;case me.PERMISSION_DENIED:return E.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case me.ABORTED:return E.ABORTED;case me.OUT_OF_RANGE:return E.OUT_OF_RANGE;case me.UNIMPLEMENTED:return E.UNIMPLEMENTED;case me.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(K=me||(me={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new si([4294967295,4294967295],0);function lg(t){const e=VP().encode(t),n=new UR;return n.update(e),new Uint8Array(n.digest())}function ug(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new si([n,r],0),new si([i,s],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hs(`Invalid padding: ${n}`);if(r<0)throw new hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=si.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(si.fromNumber(r)));return i.compare(LP)===1&&(i=new si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Df(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pu($.min(),i,new ue(Q),an(),W())}}class ko{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ko(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class oE{constructor(e,n){this.targetId=e,this.ye=n}}class aE{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cg{constructor(){this.we=0,this.Se=dg(),this.be=Ke.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=W(),n=W(),r=W();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new ko(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=dg()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class MP{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=an(),this.Ue=hg(),this.We=new ue(Q)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Fh(s))if(r===0){const o=new L(s.path);this.je(n,o,be.newNoDocument(o,$.min()))}else ie(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Er(r).toUint8Array()}catch(l){if(l instanceof M0)return vi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Df(o,i,s)}catch(l){return vi(l instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Fh(a.target)){const l=new L(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,be.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=W();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new pu(e,n,this.We,this.$e,r);return this.$e=an(),this.Ue=hg(),this.We=new ue(Q),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new cg,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new We(Q),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new cg),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function hg(){return new ue(L.comparator)}function dg(){return new ue(L.comparator)}const FP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$P=(()=>({and:"AND",or:"OR"}))();class bP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||lu(e)?e:{value:e}}function vl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jP(t,e){return vl(t,e.toTimestamp())}function jt(t){return ie(!!t),$.fromTimestamp(function(n){const r=Bn(n);return new ve(r.seconds,r.nanos)}(t))}function xf(t,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function uE(t){const e=ne.fromString(t);return ie(fE(e)),e}function jh(t,e){return xf(t.databaseId,e.path)}function pc(t,e){const n=uE(e);if(n.get(1)!==t.databaseId.projectId)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(cE(n))}function Bh(t,e){return xf(t.databaseId,e)}function BP(t){const e=uE(t);return e.length===4?ne.emptyPath():cE(e)}function zh(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cE(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function zP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),Ke.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),Ke.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:sE(u.code);return new N(c,u.message||"")}(o);n=new aE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pc(t,r.document.name),s=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):$.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Aa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pc(t,r.document),s=r.readTime?jt(r.readTime):$.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pc(t,r.document),s=r.removedTargetIds||[];n=new Aa([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xP(i,s),a=r.targetId;n=new oE(a,o)}}return n}function WP(t,e){let n;if(e instanceof Co)n={update:fg(t,e.key,e.value)};else if(e instanceof iE)n={delete:jh(t,e.key)};else if(e instanceof Cr)n={update:fg(t,e.key,e.data),updateMask:ZP(e.fieldMask)};else{if(!(e instanceof kP))return F();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _l)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(t,e.precondition)),n}function HP(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?jt(i.updateTime):jt(s);return o.isEqual($.min())&&(o=jt(s)),new RP(o,i.transformResults||[])}(n,e))):[]}function qP(t,e){return{documents:[Bh(t,e.path)]}}function KP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Bh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return dE(Nt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Mr(h.field),direction:YP(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GP(t){let e=BP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=hE(h);return d instanceof Nt&&b0(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new oi(Fr(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,lu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new gl(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new gl(g,d)}(n.endAt)),fP(e,i,o,s,a,"F",l,u)}function QP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fr(n.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fr(n.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(n){return _e.create(Fr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>hE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(t):F()}function YP(t){return FP[t]}function XP(t){return UP[t]}function JP(t){return $P[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return je.fromServerFormat(t.fieldPath)}function dE(t){return t instanceof _e?function(n){if(n.op==="=="){if(Zm(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NAN"}};if(Jm(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zm(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NAN"}};if(Jm(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(n.field),op:XP(n.op),value:n.value}}}(t):t instanceof Nt?function(n){const r=n.getFilters().map(i=>dE(i));return r.length===1?r[0]:{compositeFilter:{op:JP(n.op),filters:r}}}(t):F()}function ZP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.ht=e}}function tC(t){const e=GP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$h(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.an=new rC}addToCollectionParentIndex(e,n){return this.an.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(jn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class rC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ti(0)}static Ln(){return new Ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rs(r.mutation,i,At.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=cs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=an();const o=As(),a=function(){return As()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Rs(c.mutation,u,c.mutation.getFieldMask(),ve.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new sC(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=As();let i=new ue((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||At.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Q0();c.forEach(d=>{if(!s.has(d)){const g=nE(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(or());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:G0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=cs();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(h,d){return new Ui(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,be.newInvalidDocument(c)))});let a=cs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Rs(c.mutation,u,At.empty(),ve.now()),hu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return I.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:jt(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:tC(i.bundledQuery),readTime:jt(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.overlays=new ue(L.comparator),this.Pr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=or(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=or(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DP(n,r));let s=this.Pr.get(n);s===void 0&&(s=W(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.Ir=new We(Te.dr),this.Tr=new We(Te.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Te(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Te(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new L(new ne([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new L(new ne([])),r=new Te(n,e),i=new Te(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return L.comparator(e.key,n.key)||Q(e.yr,n.yr)}static Er(e,n){return Q(e.yr,n.yr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new We(Te.dr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(Q);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),I.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Te(new L(s),0);let a=new We(Q);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),I.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return I.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Te(n,0),i=this.Sr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.Fr=e,this.docs=function(){return new ue(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=an();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YR(QR(c),r)<=0||(i.has(c.key)||hu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}Mr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hC(this)}getSize(e){return I.resolve(this.size)}}class hC extends iC{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.persistence=e,this.Or=new $i(n=>Rf(n),Pf),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Of,this.targetCount=0,this.Lr=Ti.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),I.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Qn(n),I.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.kr={},this.overlays={},this.qr=new If(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new dC(this),this.indexManager=new nC,this.remoteDocumentCache=function(i){return new cC(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new eC(n),this.Ur=new aC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new uC(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new pC(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return I.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class pC extends JR{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.jr=new Of,this.Hr=null}static Jr(e){return new Vf(e)}get Yr(){if(this.Hr)return this.Hr;throw F()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),I.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Yr,r=>{const i=L.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return I.or([()=>I.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new mC;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(es()<=q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),I.resolve()):(es()<=q.DEBUG&&O("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(es()<=q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(n))):I.resolve())}Hi(e,n){if(rg(n))return I.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$h(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,$h(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return rg(n)||i.isEqual($.min())?I.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?I.resolve(null):(es()<=q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lr(n)),this.ts(e,o,n,GR(i,-1)).next(a=>a))})}Xi(e,n){let r=new We(q0(e));return n.forEach((i,s)=>{hu(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return es()<=q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.ji.getDocumentsMatchingQuery(e,n,jn.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new ue(Q),this.ss=new $i(s=>Rf(s),Pf),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oC(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function _C(t,e,n,r){return new yC(t,e,n,r)}async function pE(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function vC(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let g=I.resolve();return d.forEach(_=>{g=g.next(()=>c.getEntry(l,_)).next(y=>{const w=u.docVersions.get(_);ie(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mE(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function EC(t,e){const n=b(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,w,p){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,g,c)&&a.push(n.Kr.updateTargetData(s,g))});let l=an(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(wC(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual($.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function wC(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=an();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function IC(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TC(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new An(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=b(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Po(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function pg(t,e,n){const r=b(t);let i=$.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=b(l),d=h.ss.get(c);return d!==void 0?I.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:W())).next(a=>(SC(r,mP(e),a),{documents:a,Ps:s})))}function SC(t,e,n){let r=t.os.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class mg{constructor(){this.activeTargetIds=wP()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AC{constructor(){this.ro=new mg,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function mc(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class kC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=mc(),l=this.Do(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw vi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=PC[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=mc();return new Promise((o,a)=>{const l=new FR;l.setWithCredentials(!0),l.listenOnce(LR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fc.NO_ERROR:const c=l.getResponseJson();O(Fe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case fc.TIMEOUT:O(Fe,`RPC '${e}' ${s} timed out`),a(new N(E.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const h=l.getStatus();if(O(Fe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(p)>=0?p:E.UNKNOWN}(g.status);a(new N(_,g.message))}else a(new N(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(Fe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(Fe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=mc(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OR(),a=VR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(Fe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const _=new CC({ho:w=>{g?O(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(O(Fe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(Fe,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},Po:()=>h.close()}),y=(w,p,f)=>{w.listen(p,m=>{try{f(m)}catch(v){setTimeout(()=>{throw v},0)}})};return y(h,oa.EventType.OPEN,()=>{g||O(Fe,`RPC '${e}' stream ${i} transport opened.`)}),y(h,oa.EventType.CLOSE,()=>{g||(g=!0,O(Fe,`RPC '${e}' stream ${i} transport closed`),_.mo())}),y(h,oa.EventType.ERROR,w=>{g||(g=!0,vi(Fe,`RPC '${e}' stream ${i} transport errored:`,w),_.mo(new N(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,oa.EventType.MESSAGE,w=>{var p;if(!g){const f=w.data[0];ie(!!f);const m=f,v=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(v){O(Fe,`RPC '${e}' stream ${i} received error:`,v);const A=v.status;let C=function(J){const B=me[J];if(B!==void 0)return sE(B)}(A),x=v.message;C===void 0&&(C=E.INTERNAL,x="Unknown error status: "+A+" with message "+v.message),g=!0,_.mo(new N(C,x)),h.close()}else O(Fe,`RPC '${e}' stream ${i} received:`,f),_.fo(f)}}),y(a,MR.STAT_EVENT,w=>{w.stat===qm.PROXY?O(Fe,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===qm.NOPROXY&&O(Fe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){return new bP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new gE(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new N(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NC extends yE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=zP(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?jt(o.readTime):$.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=zh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Fh(l)?{documents:qP(s,l)}:{query:KP(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lE(s,o.resumeToken);const u=bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=vl(s,o.snapshotVersion.toTimestamp());const u=bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=QP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=zh(this.serializer),n.removeTarget=e,this.n_(n)}}class DC extends yE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=HP(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.T_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=zh(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WP(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(E.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(E.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class OC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(on(n),this.p_=!1):O("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{kr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=b(l);u.F_.add(4),await No(u),u.O_.set("Unknown"),u.F_.delete(4),await gu(u)}(this))})}),this.O_=new OC(r,i)}}async function gu(t){if(kr(t))for(const e of t.M_)await e(!0)}async function No(t){for(const e of t.M_)await e(!1)}function _E(t,e){const n=b(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Uf(n)?Ff(n):bi(n).Yo()&&Mf(n,e))}function vE(t,e){const n=b(t),r=bi(n);n.v_.delete(e),r.Yo()&&EE(n,e),n.v_.size===0&&(r.Yo()?r.e_():kr(n)&&n.O_.set("Unknown"))}function Mf(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bi(t).l_(e)}function EE(t,e){t.N_.Le(e),bi(t).h_(e)}function Ff(t){t.N_=new MP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),bi(t).start(),t.O_.y_()}function Uf(t){return kr(t)&&!bi(t).Jo()&&t.v_.size>0}function kr(t){return b(t).F_.size===0}function wE(t){t.N_=void 0}async function LC(t){t.v_.forEach((e,n)=>{Mf(t,e)})}async function MC(t,e){wE(t),Uf(t)?(t.O_.b_(e),Ff(t)):t.O_.set("Unknown")}async function FC(t,e,n){if(t.O_.set("Online"),e instanceof aE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await El(t,r)}else if(e instanceof Aa?t.N_.Ge(e):e instanceof oE?t.N_.Xe(e):t.N_.He(e),!n.isEqual($.min()))try{const r=await mE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),EE(s,l);const h=new An(c.target,l,u,c.sequenceNumber);Mf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await El(t,r)}}async function El(t,e,n){if(!Po(e))throw e;t.F_.add(1),await No(t),t.O_.set("Offline"),n||(n=()=>mE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await gu(t)})}function IE(t,e){return e().catch(n=>El(t,n,e))}async function yu(t){const e=b(t),n=zn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;UC(e);)try{const i=await IC(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,$C(e,i)}catch(i){await El(e,i)}TE(e)&&SE(e)}function UC(t){return kr(t)&&t.C_.length<10}function $C(t,e){t.C_.push(e);const n=zn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function TE(t){return kr(t)&&!zn(t).Jo()&&t.C_.length>0}function SE(t){zn(t).start()}async function bC(t){zn(t).A_()}async function jC(t){const e=zn(t);for(const n of t.C_)e.d_(n.mutations)}async function BC(t,e,n){const r=t.C_.shift(),i=Nf.from(r,e,n);await IE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yu(t)}async function zC(t,e){e&&zn(t).I_&&await async function(r,i){if(function(o){return OP(o)&&o!==E.ABORTED}(i.code)){const s=r.C_.shift();zn(r).Xo(),await IE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yu(r)}}(t,e),TE(t)&&SE(t)}async function yg(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=kr(n);n.F_.add(3),await No(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await gu(n)}async function WC(t,e){const n=b(t);e?(n.F_.delete(2),await gu(n)):e||(n.F_.add(2),await No(n),n.O_.set("Unknown"))}function bi(t){return t.B_||(t.B_=function(n,r,i){const s=b(n);return s.V_(),new NC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:LC.bind(null,t),Eo:MC.bind(null,t),c_:FC.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Uf(t)?Ff(t):t.O_.set("Unknown")):(await t.B_.stop(),wE(t))})),t.B_}function zn(t){return t.L_||(t.L_=function(n,r,i){const s=b(n);return s.V_(),new DC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:bC.bind(null,t),Eo:zC.bind(null,t),E_:jC.bind(null,t),T_:BC.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await yu(t)):(await t.L_.stop(),t.C_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $f(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(on("AsyncQueue",`${e}: ${t}`),Po(t))return new N(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=cs(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.k_=new ue(L.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):F():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.Q_=void 0,this.listeners=[]}}class qC{constructor(){this.queries=new $i(e=>H0(e),cu),this.onlineState="Unknown",this.K_=new Set}}async function KC(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new HC),i)try{s.Q_=await n.onListen(r)}catch(o){const a=bf(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&jf(n)}async function GC(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function QC(t,e){const n=b(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&jf(n)}function YC(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function jf(t){t.K_.forEach(e=>{e.next()})}class XC{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.key=e}}class RE{constructor(e){this.key=e}}class JC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=W(),this.mutatedKeys=W(),this.ua=q0(e),this.ca=new ai(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new _g,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=hu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?_!==y&&(r.track({type:3,doc:g}),w=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),w=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),w=!0):d&&!g&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,g){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return _(d)-_(g)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Si(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new _g,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=W(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new RE(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new AE(r))}),n}Ra(e){this.oa=e.Ps,this.aa=W();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Si.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class ZC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ek{constructor(e){this.key=e,this.ma=!1}}class tk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new $i(a=>H0(a),cu),this.pa=new Map,this.ya=new Set,this.wa=new ue(L.comparator),this.Sa=new Map,this.ba=new Of,this.Da={},this.Ca=new Map,this.va=Ti.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function nk(t,e){const n=dk(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await TC(n.localStore,bt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await rk(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&_E(n.remoteStore,o)}return i}async function rk(t,e,n,r,i){t.Ma=(h,d,g)=>async function(y,w,p,f){let m=w.view.ha(p);m.es&&(m=await pg(y.localStore,w.query,!1).then(({documents:C})=>w.view.ha(C,m)));const v=f&&f.targetChanges.get(w.targetId),A=w.view.applyChanges(m,y.isPrimaryClient,v);return Eg(y,w.targetId,A.Ea),A.snapshot}(t,h,d,g);const s=await pg(t.localStore,e,!0),o=new JC(e,s.Ps),a=o.ha(s.documents),l=ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Eg(t,n,u.Ea);const c=new ZC(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function ik(t,e){const n=b(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!cu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vE(n.remoteStore,r.targetId),Hh(n,r.targetId)}).catch(Ro)):(Hh(n,r.targetId),await Wh(n.localStore,r.targetId,!0))}async function sk(t,e,n){const r=fk(t);try{const i=await function(o,a){const l=b(o),u=ve.now(),c=a.reduce((g,_)=>g.add(_.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=an(),y=W();return l._s.getEntries(g,c).next(w=>{_=w,_.forEach((p,f)=>{f.isValidDocument()||(y=y.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(w=>{h=w;const p=[];for(const f of a){const m=CP(f,h.get(f.key).overlayedDocument);m!=null&&p.push(new Cr(f.key,m,F0(m.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,p,a)}).next(w=>{d=w;const p=w.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(g,w.batchId,p)})}).then(()=>({batchId:d.batchId,changes:G0(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ue(Q)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Do(r,i.changes),await yu(r.remoteStore)}catch(i){const s=bf(i,"Failed to persist write");n.reject(s)}}async function PE(t,e){const n=b(t);try{const r=await EC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?ie(o.ma):i.removedDocuments.size>0&&(ie(o.ma),o.ma=!1))}),await Do(n,r,e)}catch(r){await Ro(r)}}function vg(t,e,n){const r=b(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=b(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&jf(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ok(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ue(L.comparator);o=o.insert(s,be.newNoDocument(s,$.min()));const a=W().add(s),l=new pu($.min(),new Map,new ue(Q),o,a);await PE(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Bf(r)}else await Wh(r.localStore,e,!1).then(()=>Hh(r,e,n)).catch(Ro)}async function ak(t,e){const n=b(t),r=e.batch.batchId;try{const i=await vC(n.localStore,e);kE(n,r,null),CE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Do(n,i)}catch(i){await Ro(i)}}async function lk(t,e,n){const r=b(t);try{const i=await function(o,a){const l=b(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);kE(r,e,n),CE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Do(r,i)}catch(i){await Ro(i)}}function CE(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function kE(t,e,n){const r=b(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Hh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||NE(t,r)})}function NE(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(vE(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Bf(t))}function Eg(t,e,n){for(const r of n)r instanceof AE?(t.ba.addReference(r.key,e),uk(t,r)):r instanceof RE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||NE(t,r.key)):F()}function uk(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ya.add(r),Bf(t))}function Bf(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new L(ne.fromString(e)),r=t.va.next();t.Sa.set(r,new ek(n)),t.wa=t.wa.insert(n,r),_E(t.remoteStore,new An(bt(Cf(n.path)),r,"TargetPurposeLimboResolution",If.ae))}}async function Do(t,e,n){const r=b(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Lf.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=b(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(u,d=>I.forEach(d.Qi,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>I.forEach(d.Ki,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Po(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.rs.get(d),_=g.snapshotVersion,y=g.withLastLimboFreeSnapshotVersion(_);c.rs=c.rs.insert(d,y)}}}(r.localStore,s))}async function ck(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await pE(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new N(E.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Do(n,r.cs)}}function hk(t,e){const n=b(t),r=n.Sa.get(e);if(r&&r.ma)return W().add(r.key);{let i=W();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function dk(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ok.bind(null,e),e.fa.c_=QC.bind(null,e.eventManager),e.fa.xa=YC.bind(null,e.eventManager),e}function fk(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lk.bind(null,e),e}class wg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _C(this.persistence,new gC,e.initialUser,this.serializer)}createPersistence(e){return new fC(Vf.Jr,this.serializer)}createSharedClientState(e){return new AC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ck.bind(null,this.syncEngine),await WC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qC}()}createDatastore(e){const n=mu(e.databaseInfo.databaseId),r=function(s){return new kC(s)}(e.databaseInfo);return function(s,o,a,l){return new xC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new VC(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return gg.C()?new gg:new RC}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new tk(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=b(n);O("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await No(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ue.UNAUTHENTICATED,this.clientId=V0.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ig(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _k(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yg(e.remoteStore,s)),t._onlineComponents=e}function yk(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _k(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!yk(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new wg)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await yc(t,new wg);return t._offlineComponents}async function DE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ig(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ig(t,new pk))),t._onlineComponents}function vk(t){return DE(t).then(e=>e.syncEngine)}async function Tg(t){const e=await DE(t),n=e.eventManager;return n.onListen=nk.bind(null,e.syncEngine),n.onUnlisten=ik.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e,n){if(!n)throw new N(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ek(t,e,n,r){if(e===!0&&r===!0)throw new N(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ag(t){if(!L.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(L.isDocumentKey(t))throw new N(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new N(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new zR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sg.get(n);r&&(O("ComponentProvider","Removing Datastore"),Sg.delete(n),r.terminate())}(this),Promise.resolve()}}function wk(t,e,n,r={}){var i;const s=(t=Ps(t,vu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ue.MOCK_USER;else{a=dS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ue(u)}t._authCredentials=new bR(new O0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Un extends Nr{constructor(e,n,r){super(e,n,Cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new L(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function VE(t,e,...n){if(t=Ve(t),OE("collection","path",e),t instanceof vu){const r=ne.fromString(e,...n);return Rg(r),new Un(t,null,r)}{if(!(t instanceof at||t instanceof Un))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Rg(r),new Un(t.firestore,null,r)}}function Ik(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=V0.V()),OE("doc","path",e),t instanceof vu){const r=ne.fromString(e,...n);return Ag(r),new at(t,null,new L(r))}{if(!(t instanceof at||t instanceof Un))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Ag(r),new at(t.firestore,t instanceof Un?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new gE(this,"async_queue_retry"),this.ou=()=>{const n=gc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new cr;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Po(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=$f.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&F()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Cg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class wl extends vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Tk}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ME(this),this._firestoreClient.terminate()}}function Sk(t,e){const n=typeof t=="object"?t:Cv(),r=typeof t=="string"?t:e||"(default)",i=Xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cS("firestore");s&&wk(i,...s)}return i}function LE(t){return t._firestoreClient||ME(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ME(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new tP(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,xE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new gk(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ai(Ke.fromBase64String(e))}catch(n){throw new N(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ai(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/^__.*__$/;class Rk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}function UE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Hf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Il(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(UE(this.Tu)&&Ak.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mu(e)}wu(e,n,r,i=!1){return new Hf({Tu:e,methodName:n,yu:r,path:je.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $E(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new Pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ck(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);BE("Data must be an object, but it was:",o,r);const a=bE(r,o);let l,u;if(s.merge)l=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Nk(e,h,n);if(!o.contains(d))throw new N(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xk(c,d)||c.push(d)}l=new At(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Rk(new mt(a),l,u)}function kk(t,e,n,r=!1){return qf(n,t.wu(r?4:3,e))}function qf(t,e){if(jE(t=Ve(t)))return BE("Unsupported field value:",e,t),bE(t,e);if(t instanceof FE)return function(r,i){if(!UE(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=qf(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ve.fromDate(r);return{timestampValue:vl(i.serializer,s)}}if(r instanceof ve){const s=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vl(i.serializer,s)}}if(r instanceof Wf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ai)return{bytesValue:lE(i.serializer,r._byteString)};if(r instanceof at){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${_u(r)}`)}(t,e)}function bE(t,e){const n={};return L0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=qf(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Wf||t instanceof Ai||t instanceof at||t instanceof FE)}function BE(t,e,n){if(!jE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_u(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Nk(t,e,n){if((e=Ve(e))instanceof zf)return e._internalPath;if(typeof e=="string")return zE(t,e);throw Il("Field path arguments must be of type string or ",t,!1,void 0,n)}const Dk=new RegExp("[~\\*/\\[\\]]");function zE(t,e,n){if(e.search(Dk)>=0)throw Il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zf(...e.split("."))._internalPath}catch{throw Il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Il(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(E.INVALID_ARGUMENT,a+t+l)}function xk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ok extends WE{data(){return super.data()}}function Kf(t,e){return typeof e=="string"?zE(t,e):e instanceof zf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{}class HE extends Gf{}function Lk(t,e,...n){let r=[];e instanceof Gf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Yf).length,a=s.filter(l=>l instanceof Qf).length;if(o>1||o>0&&a>0)throw new N(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qf extends HE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qf(e,n,r)}_apply(e){const n=this._parse(e);return qE(e._query,n),new Nr(e.firestore,e.converter,Uh(e._query,n))}_parse(e){const n=$E(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ng(h,c);const g=[];for(const _ of h)g.push(kg(l,s,_));d={arrayValue:{values:g}}}else d=kg(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ng(h,c),d=kk(a,o,h,c==="in"||c==="not-in");return _e.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Yf extends Gf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)qE(o,l),o=Uh(o,l)}(e._query,n),new Nr(e.firestore,e.converter,Uh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xf extends HE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new oi(s,o);return function(u,c){if(kf(u)===null){const h=uu(u);h!==null&&KE(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Nr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ui(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Mk(t,e="asc"){const n=e,r=Kf("orderBy",t);return Xf._create(r,n)}function kg(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new N(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W0(e)&&n.indexOf("/")!==-1)throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!L.isDocumentKey(r))throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xm(t,new L(r))}if(n instanceof at)return Xm(t,n._key);throw new N(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_u(n)}.`)}function Ng(t,e){if(!Array.isArray(t)||t.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qE(t,e){if(e.isInequality()){const r=uu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new N(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=kf(t);s!==null&&KE(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function KE(t,e,n){if(!n.isEqual(e))throw new N(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fk{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wf(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(fE(r));const i=new io(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GE extends WE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ra extends GE{data(e={}){return super.data(e)}}class $k{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ra(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ra(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ds(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ra(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ds(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:bk(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class QE extends Fk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function jk(t,e){const n=Ps(t.firestore,wl),r=Ik(t),i=Uk(t.converter,e);return zk(n,[Ck($E(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Bk(t,...e){var n,r,i;t=Ve(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Cg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Cg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof at)u=Ps(t.firestore,wl),c=Cf(t._key.path),l={next:h=>{e[o]&&e[o](Wk(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ps(t,Nr);u=Ps(h.firestore,wl),c=h._query;const d=new QE(u);l={next:g=>{e[o]&&e[o](new $k(u,d,h,g))},error:e[o+1],complete:e[o+2]},Vk(t._query)}return function(d,g,_,y){const w=new mk(y),p=new XC(g,w,_);return d.asyncQueue.enqueueAndForget(async()=>KC(await Tg(d),p)),()=>{w.La(),d.asyncQueue.enqueueAndForget(async()=>GC(await Tg(d),p))}}(LE(u),c,a,l)}function zk(t,e){return function(r,i){const s=new cr;return r.asyncQueue.enqueueAndForget(async()=>sk(await vk(r),i,s)),s.promise}(LE(t),e)}function Wk(t,e,n){const r=n.docs.get(e._key),i=new QE(t);return new GE(t,i,e._key,r,new ds(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Mi=i})(Oi),yi(new yr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new wl(new jR(r.getProvider("auth-internal")),new HR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(Km,"4.2.0",e),Fn(Km,"4.2.0","esm2017")})();const Hk={apiKey:"AIzaSyAA4__dfLFO12bobIKpPb9MExXXbBZDTgA",authDomain:"whatsapp-217bb.firebaseapp.com",projectId:"whatsapp-217bb",storageBucket:"whatsapp-217bb.appspot.com",messagingSenderId:"315103816029",appId:"1:315103816029:web:942cd469291a4cf49ee0b4"},qk=Pv(Hk),YE=Sk(qk),XE=t=>({insertDocument:async n=>{try{const r={...n,createAt:ve.now()},i=await jk(VE(YE,t),r)}catch(r){console.log(r)}}}),JE=S.createContext(),Kk=({children:t,value:e})=>R.jsx(JE.Provider,{value:e,children:t}),Jf=()=>S.useContext(JE),ZE=t=>{const[e,n]=S.useState(null),[r,i]=S.useState(!1);return S.useEffect(()=>{async function s(){if(r)return;const o=VE(YE,t);try{let a;a=Lk(o,Mk("createAt","asc")),Bk(a,l=>{n(l.docs.map(u=>({id:u.id,...u.data()})))})}catch(a){console.log(a)}}s()},[t,r]),S.useEffect(()=>()=>{i(!0)},[]),{documents:e}},Gk=({uid:t})=>{const[e,n]=S.useState(""),{insertDocument:r}=XE("messages"),{documents:i}=ZE("messages"),{user:s}=Jf(),o=a=>{if(a.preventDefault(),!e)return;const l={toId:t,fromId:s.uid,text:e};r(l),n("")};return R.jsx("div",{className:"chat-container",children:t&&R.jsxs(R.Fragment,{children:[R.jsx("ul",{className:"chat",children:i&&i.filter(a=>a.fromId===s.uid&&a.toId===t||a.fromId===t&&a.toId===s.uid).map((a,l)=>R.jsx("li",{className:a.fromId===s.uid?"chat-box you-chat":"chat-box other-chat",children:R.jsx("p",{children:a.text})},l))}),R.jsxs("form",{onSubmit:o,children:[R.jsx("input",{type:"text",value:e,onChange:a=>{n(a.target.value)}}),R.jsx("button",{children:"Enviar"})]})]})})};const Qk=()=>{const{documents:t}=ZE("users"),{uid:e}=O1(),{user:n}=Jf();return R.jsxs("div",{className:"chat-screen",children:[R.jsx("div",{className:"chats",children:R.jsx("ul",{children:t&&t.filter(r=>r.uid!=n.uid).map((r,i)=>R.jsx("li",{children:R.jsx(_v,{to:`/chat/${r.uid}`,children:r.name})},i))})}),R.jsx(Gk,{uid:e})]})},Yk=()=>R.jsx("div",{children:"teste de um site pra trocar mensagens by sopa 😎, cria conta e manda umas mensagem"});function Zf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Dg(t){return t!==void 0&&t.enterprise!==void 0}class Xk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jk=ew,tw=new go("auth","Firebase",ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Qd("@firebase/auth");function Zk(t,...e){Tl.logLevel<=q.WARN&&Tl.warn(`Auth (${Oi}): ${t}`,...e)}function Pa(t,...e){Tl.logLevel<=q.ERROR&&Tl.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw ep(t,...e)}function Bt(t,...e){return ep(t,...e)}function eN(t,e,n){const r=Object.assign(Object.assign({},Jk()),{[e]:n});return new go("auth","Firebase",r).create(e,{appName:t.name})}function ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tw.create(t,...e)}function M(t,e,...n){if(!t)throw ep(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function ln(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tN(){return xg()==="http:"||xg()==="https:"}function xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tN()||pS()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=fS()||mS()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new xo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return rw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nw.fetch()(iw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iN),e);try{const i=new oN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eN(t,c,u);Dt(t,c)}}catch(i){if(i instanceof hn)throw i;Dt(t,"network-request-failed",{message:String(i)})}}async function Oo(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&Dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tp(t.config,i):`${t.config.apiScheme}://${i}`}class oN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),sN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}async function aN(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=np(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs(_c(i.auth_time)),issuedAtTime:Cs(_c(i.iat)),expirationTime:Cs(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function np(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=wv(n);return i?JSON.parse(i):(Pa("Failed to decode base64 JWT payload"),null)}catch(i){return Pa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hN(t){const e=np(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ri(t,uN(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function pN(t){const e=Ve(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=Zf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){const n=await rw(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lo;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ri(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:A,providerData:C,stsTokenManager:x}=n;M(m&&x,e,"internal-error");const V=lo.fromJSON(this.name,x);M(typeof m=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),fn(g,e.name),fn(_,e.name),fn(y,e.name),fn(w,e.name),fn(p,e.name),fn(f,e.name);const J=new hr({uid:m,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:V,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(J.providerData=C.map(B=>Object.assign({},B))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new lo;i.updateFromServerResponse(n);const s=new hr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;function Xt(t){ln(t instanceof Function,"Expected a class definition");let e=Og.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Og.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ow.type="NONE";const Vg=ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ca(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ca("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(Xt(Vg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(Vg);const o=Ca(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=hr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new li(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(dw(e))return"Webos";if(rp(e))return"Safari";if((e.includes("chrome/")||lw(e))&&!e.includes("edge/"))return"Chrome";if(cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aw(t=qe()){return/firefox\//i.test(t)}function rp(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lw(t=qe()){return/crios\//i.test(t)}function uw(t=qe()){return/iemobile/i.test(t)}function cw(t=qe()){return/android/i.test(t)}function hw(t=qe()){return/blackberry/i.test(t)}function dw(t=qe()){return/webos/i.test(t)}function Eu(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _N(t=qe()){var e;return Eu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vN(){return gS()&&document.documentMode===10}function fw(t=qe()){return Eu(t)||cw(t)||dw(t)||hw(t)||/windows phone/i.test(t)||uw(t)}function EN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e=[]){let n;switch(t){case"Browser":n=Lg(qe());break;case"Worker":n=`${Lg(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=6;class SN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mg(this),this.idTokenSubscription=new Mg(this),this.beforeStateQueue=new wN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IN(this),n=new SN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Zk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return Ve(t)}class Mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=TS(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RN().appendChild(r)})}function PN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CN="https://www.google.com/recaptcha/enterprise.js?render=",kN="recaptcha-enterprise",NN="NO_RECAPTCHA";class DN{constructor(e){this.type=kN,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{aN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Xk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Dg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(NN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Dg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mw(CN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Al(t,e,n,r=!1){const i=new DN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t,e){const n=Xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ol(s,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function ON(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VN(t,e,n){const r=xr(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gw(e),{host:o,port:a}=LN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MN()}function gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LN(t){const e=gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fg(o)}}}function Fg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function FN(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function $N(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends ip{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Al(e,r,"signInWithPassword");return vc(e,i)}else return vc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Al(e,r,"signInWithPassword");return vc(e,s)}else return Promise.reject(i)});case"emailLink":return UN(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return FN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $N(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="http://localhost";class Ir extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:bN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BN(t){const e=os(as(t)).link,n=e?os(as(e)).deep_link_id:null,r=os(as(t)).deep_link_id;return(r?os(as(r)).link:null)||r||n||e||t}class sp{constructor(e){var n,r,i,s,o,a;const l=os(as(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=jN((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BN(e);try{return new sp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sp.parseLink(n);return M(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Vo{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Vo{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e){return Oo(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hr._fromIdTokenResponse(e,r,i),o=Ug(r);return new Tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ug(r);return new Tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function zN(t,e,n=!1){const r=await Ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ri(t,_w(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=np(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t,e,n=!1){const r="signIn",i=await _w(t,r,e),s=await Tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HN(t,e){return vw(xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qN(t,e,n){var r;const i=xr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Al(i,s,"signUpPassword");o=Ec(i,u)}else o=Ec(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Al(i,s,"signUpPassword");return Ec(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ew(t),u}),l=await Tr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function KN(t,e,n){return HN(Ve(t),ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ew(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ri(r,GN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YN(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function XN(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function JN(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function ZN(t){return Ve(t).signOut()}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(){const t=qe();return rp(t)||Eu(t)}const tD=1e3,nD=10;class Iw extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eD()&&EN(),this.fallbackToPolling=fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const rD=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tw.type="SESSION";const Sw=Tw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await iD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=op("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function oD(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function aD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uD(){return Aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="firebaseLocalStorageDb",cD=1,Cl="firebaseLocalStorage",Pw="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function hD(){const t=indexedDB.deleteDatabase(Rw);return new Lo(t).toPromise()}function Kh(){const t=indexedDB.open(Rw,cD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:Pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await hD(),e(await Kh()))})})}async function $g(t,e,n){const r=Iu(t,!0).put({[Pw]:e,value:n});return new Lo(r).toPromise()}async function dD(t,e){const n=Iu(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function bg(t,e){const n=Iu(t,!0).delete(e);return new Lo(n).toPromise()}const fD=800,pD=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(uD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aD(),!this.activeServiceWorker)return;this.sender=new sD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await $g(e,Pl,"1"),await bg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const mD=Cw;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t,e){return e?Xt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yD(t){return vw(t.auth,new ap(t),t.bypassAuthState)}function _D(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),WN(n,new ap(t),t.bypassAuthState)}async function vD(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),zN(n,new ap(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yD;case"linkViaPopup":case"linkViaRedirect":return vD;case"reauthViaPopup":case"reauthViaRedirect":return _D;default:Dt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=new xo(2e3,1e4);class Xr extends kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ED.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="pendingRedirect",ka=new Map;class ID extends kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await TD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TD(t,e){const n=RD(e),r=AD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SD(t,e){ka.set(t._key(),e)}function AD(t){return Xt(t._redirectPersistence)}function RD(t){return Ca(wD,t.config.apiKey,t.name)}async function PD(t,e,n=!1){const r=xr(t),i=gD(r,e),o=await new ID(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=10*60*1e3;class kD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ND(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CD&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ND(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OD=/^https?/;async function VD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DD(t);for(const n of e)try{if(LD(n))return}catch{}Dt(t,"unauthorized-domain")}function LD(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OD.test(n))return!1;if(xD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new xo(3e4,6e4);function Bg(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FD(t){return new Promise((e,n)=>{var r,i,s;function o(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(Bt(t,"network-request-failed"))},timeout:MD.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=PN("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},mw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Na=null,e})}let Na=null;function UD(t){return Na=Na||FD(t),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new xo(5e3,15e3),bD="__/auth/iframe",jD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WD(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tp(e,jD):`https://${t.config.authDomain}/${bD}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=zD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yo(r).slice(1)}`}async function HD(t){const e=await UD(t),n=zt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:WD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},$D.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KD=500,GD=600,QD="_blank",YD="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XD(t,e,n,r=KD,i=GD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=lw(u)?QD:n),aw(u)&&(e=e||YD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(_N(u)&&a!=="_self")return JD(e||"",a),new zg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new zg(h)}function JD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD="__/auth/handler",ex="emulator/auth/handler",tx=encodeURIComponent("fac");async function Wg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Vo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${tx}=${encodeURIComponent(l)}`:"";return`${nx(t)}?${yo(a).slice(1)}${u}`}function nx({config:t}){return t.emulator?tp(t,ex):`https://${t.authDomain}/${ZD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class rx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sw,this._completeRedirectFn=PD,this._overrideRedirectResult=SD}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wg(e,n,r,qh(),i);return XD(e,o,op())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wg(e,n,r,qh(),i);return oD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HD(e),r=new kD(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wc];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fw()||rp()||Eu()}}const ix=rx;var Hg="@firebase/auth",qg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ax(t){yi(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(t)},u=new AN(r,i,s,l);return ON(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yi(new yr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new sx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Hg,qg,ox(t)),Fn(Hg,qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=5*60,ux=Sv("authIdTokenMaxAge")||lx;let Kg=null;const cx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ux)return;const i=n==null?void 0:n.token;Kg!==i&&(Kg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hx(t=Cv()){const e=Xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xN(t,{popupRedirectResolver:ix,persistence:[mD,rD,Sw]}),r=Sv("authTokenSyncURL");if(r){const s=cx(r);XN(n,s,()=>s(n.currentUser)),YN(n,o=>s(o))}const i=Iv("auth");return i&&VN(n,`http://${i}`),n}ax("Browser");const Tu=()=>{const t=hx(),[e,n]=S.useState(!1),{insertDocument:r}=XE("users"),i=()=>{ZN(t)},s=async a=>{try{const{user:l}=await qN(t,a.email,a.password);return await QN(l,{name:a.name}),await r({name:a.username,email:a.email,uid:l.uid}),l}catch(l){console.log(l)}},o=async a=>{try{await KN(t,a.email,a.password)}catch(l){console.log(l)}};return S.useEffect(()=>()=>n(!0),[]),{createUser:s,auth:t,login:o,logout:i}},dx=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),{login:i}=Tu(),s=o=>{o.preventDefault(),i({email:t,password:n}),e(""),r("")};return R.jsxs("div",{className:"login",children:[R.jsx("h2",{children:"Entrar"}),R.jsxs("form",{onSubmit:s,children:[R.jsxs("label",{children:[R.jsx("span",{children:"Email:"}),R.jsx("input",{onChange:o=>{e(o.target.value)},value:t,type:"email",required:!0})]}),R.jsxs("label",{children:[R.jsx("span",{children:"Senha:"}),R.jsx("input",{onChange:o=>{r(o.target.value)},value:n,type:"password",required:!0})]}),R.jsx("button",{children:"Entrar"})]})]})};const fx=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),{createUser:l}=Tu(),u=c=>{if(c.preventDefault(),i!=o){alert("senhas diferentes");return}l({username:t,email:n,password:i}),e(""),r(""),s(""),a("")};return R.jsxs("div",{className:"register",children:[R.jsx("h2",{children:"Registro"}),R.jsxs("form",{onSubmit:u,children:[R.jsxs("label",{children:[R.jsx("span",{children:"Nome:"}),R.jsx("input",{onChange:c=>{e(c.target.value)},value:t,type:"text",required:!0})]}),R.jsxs("label",{children:[R.jsx("span",{children:"Email:"}),R.jsx("input",{onChange:c=>{r(c.target.value)},value:n,type:"email",required:!0})]}),R.jsxs("label",{children:[R.jsx("span",{children:"Senha:"}),R.jsx("input",{onChange:c=>{s(c.target.value)},value:i,type:"password",required:!0})]}),R.jsxs("label",{children:[R.jsx("span",{children:"Confimar senha:"}),R.jsx("input",{onChange:c=>{a(c.target.value)},value:o,type:"password",required:!0})]}),R.jsx("button",{children:"Cadastrar"})]})]})};const px=()=>{const{user:t}=Jf(),{logout:e}=Tu();return R.jsxs("nav",{className:"navbar",children:[R.jsx("h4",{children:"Whatsapp 7"}),R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx(ta,{to:"/",children:"Home"})}),!t&&R.jsxs(R.Fragment,{children:[R.jsx("li",{children:R.jsx(ta,{to:"/login",children:"Login"})}),R.jsx("li",{children:R.jsx(ta,{to:"/register",children:"Registar"})})]}),t&&R.jsxs(R.Fragment,{children:[R.jsx("li",{children:R.jsx(ta,{to:"/chat",children:"Chatzada"})}),R.jsx("li",{children:R.jsx("button",{onClick:e,children:"Sair"})})]})]})]})},mx=()=>{const[t,e]=S.useState(void 0),{auth:n}=Tu();return S.useEffect(()=>{JN(n,r=>{e(r)})},[n]),R.jsx(R.Fragment,{children:R.jsx(Kk,{value:{user:t},children:R.jsxs(Z1,{children:[R.jsx(px,{}),R.jsxs(K1,{children:[R.jsx(ss,{path:"/",element:R.jsx(Yk,{})}),R.jsx(ss,{path:"/login",element:t?R.jsx(ec,{to:"/"}):R.jsx(dx,{})}),R.jsx(ss,{path:"/register",element:t?R.jsx(ec,{to:"/"}):R.jsx(fx,{})}),R.jsx(ss,{path:"/chat/:uid?",element:t?R.jsx(Qk,{}):R.jsx(ec,{to:"/"})})]})]})})})};Ic.createRoot(document.getElementById("root")).render(R.jsx(ry.StrictMode,{children:R.jsx(mx,{})}));
