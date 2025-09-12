(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var By={exports:{}},Ga={},Hy={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),wE=Symbol.for("react.portal"),EE=Symbol.for("react.fragment"),SE=Symbol.for("react.strict_mode"),xE=Symbol.for("react.profiler"),CE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),TE=Symbol.for("react.forward_ref"),kE=Symbol.for("react.suspense"),NE=Symbol.for("react.memo"),RE=Symbol.for("react.lazy"),Zp=Symbol.iterator;function AE(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$y=Object.assign,Gy={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=Gy,this.updater=n||Wy}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ky(){}Ky.prototype=Qi.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Gy,this.updater=n||Wy}var cd=ud.prototype=new Ky;cd.constructor=ud;$y(cd,Qi.prototype);cd.isPureReactComponent=!0;var em=Array.isArray,qy=Object.prototype.hasOwnProperty,hd={current:null},Yy={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qy.call(e,r)&&!Yy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bo,type:t,key:s,ref:o,props:i,_owner:hd.current}}function PE(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function bE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tm=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bE(""+t.key):e.toString(36)}function Ml(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case wE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ku(o,0):r,em(i)?(n="",t!=null&&(n=t.replace(tm,"$&/")+"/"),Ml(i,e,n,"",function(h){return h})):i!=null&&(dd(i)&&(i=PE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",em(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ku(s,a);o+=Ml(s,e,n,u,i)}else if(u=AE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ku(s,a++),o+=Ml(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var r=[],i=0;return Ml(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},jl={transition:null},DE={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:hd};function Xy(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Qi;G.Fragment=EE;G.Profiler=xE;G.PureComponent=ud;G.StrictMode=SE;G.Suspense=kE;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE;G.act=Xy;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$y({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)qy.call(e,u)&&!Yy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:bo,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:IE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CE,_context:t},t.Consumer=t};G.createElement=Qy;G.createFactory=function(t){var e=Qy.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:TE,render:t}};G.isValidElement=dd;G.lazy=function(t){return{$$typeof:RE,_payload:{_status:-1,_result:t},_init:OE}};G.memo=function(t,e){return{$$typeof:NE,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};G.unstable_act=Xy;G.useCallback=function(t,e){return nt.current.useCallback(t,e)};G.useContext=function(t){return nt.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};G.useEffect=function(t,e){return nt.current.useEffect(t,e)};G.useId=function(){return nt.current.useId()};G.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return nt.current.useMemo(t,e)};G.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};G.useRef=function(t){return nt.current.useRef(t)};G.useState=function(t){return nt.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return nt.current.useTransition()};G.version="18.3.1";Hy.exports=G;var O=Hy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE=O,ME=Symbol.for("react.element"),jE=Symbol.for("react.fragment"),FE=Object.prototype.hasOwnProperty,UE=LE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VE={key:!0,ref:!0,__self:!0,__source:!0};function Jy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FE.call(e,r)&&!VE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ME,type:t,key:s,ref:o,props:i,_owner:UE.current}}Ga.Fragment=jE;Ga.jsx=Jy;Ga.jsxs=Jy;By.exports=Ga;var p=By.exports,Zy={exports:{}},gt={},e_={exports:{}},t_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var $=z.length;z.push(W);e:for(;0<$;){var ye=$-1>>>1,se=z[ye];if(0<i(se,W))z[ye]=W,z[$]=se,$=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],$=z.pop();if($!==W){z[0]=$;e:for(var ye=0,se=z.length,Se=se>>>1;ye<Se;){var ln=2*(ye+1)-1,an=z[ln],un=ln+1,cn=z[un];if(0>i(an,$))un<se&&0>i(cn,an)?(z[ye]=cn,z[un]=$,ye=un):(z[ye]=an,z[ln]=$,ye=ln);else if(un<se&&0>i(cn,$))z[ye]=cn,z[un]=$,ye=un;else break e}}return W}function i(z,W){var $=z.sortIndex-W.sortIndex;return $!==0?$:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],f=1,m=null,g=3,N=!1,T=!1,P=!1,L=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=z)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function D(z){if(P=!1,S(z),!T)if(n(u)!==null)T=!0,us(j);else{var W=n(h);W!==null&&on(D,W.startTime-z)}}function j(z,W){T=!1,P&&(P=!1,w(_),_=-1),N=!0;var $=g;try{for(S(W),m=n(u);m!==null&&(!(m.expirationTime>W)||z&&!k());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var se=ye(m.expirationTime<=W);W=t.unstable_now(),typeof se=="function"?m.callback=se:m===n(u)&&r(u),S(W)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var ln=n(h);ln!==null&&on(D,ln.startTime-W),Se=!1}return Se}finally{m=null,g=$,N=!1}}var V=!1,x=null,_=-1,E=5,C=-1;function k(){return!(t.unstable_now()-C<E)}function A(){if(x!==null){var z=t.unstable_now();C=z;var W=!0;try{W=x(!0,z)}finally{W?I():(V=!1,x=null)}}else V=!1}var I;if(typeof v=="function")I=function(){v(A)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,wr=_t.port2;_t.port1.onmessage=A,I=function(){wr.postMessage(null)}}else I=function(){L(A,0)};function us(z){x=z,V||(V=!0,I())}function on(z,W){_=L(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||N||(T=!0,us(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var $=g;g=W;try{return z()}finally{g=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return W()}finally{g=$}},t.unstable_scheduleCallback=function(z,W,$){var ye=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ye+$:ye):$=ye,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,z={id:f++,callback:W,priorityLevel:z,startTime:$,expirationTime:se,sortIndex:-1},$>ye?(z.sortIndex=$,e(h,z),n(u)===null&&z===n(h)&&(P?(w(_),_=-1):P=!0,on(D,$-ye))):(z.sortIndex=se,e(u,z),T||N||(T=!0,us(j))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var W=g;return function(){var $=g;g=W;try{return z.apply(this,arguments)}finally{g=$}}}})(t_);e_.exports=t_;var zE=e_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE=O,mt=zE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n_=new Set,oo={};function Jr(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(oo[t]=e,t=0;t<e.length;t++)n_.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,HE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},rm={};function WE(t){return Vc.call(rm,t)?!0:Vc.call(nm,t)?!1:HE.test(t)?rm[t]=!0:(nm[t]=!0,!1)}function $E(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GE(t,e,n,r){if(e===null||typeof e>"u"||$E(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,pd);Ue[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,pd);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,pd);Ue[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GE(e,n,i,r)&&(n=null),r||i===null?WE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),s_=Symbol.for("react.offscreen"),im=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,qu;function Ms(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Yu=!1;function Qu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function KE(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case zc:return"Profiler";case gd:return"StrictMode";case Bc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case r_:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function qE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YE(t){var e=o_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=YE(t))}function l_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function Gc(t,e){a_(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||na(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(js(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function u_(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,h_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QE=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){QE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function d_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function f_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(XE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Ni=null,Ri=null;function um(t){if(t=Lo(t)){if(typeof Zc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Xa(e),Zc(t.stateNode,t.type,e))}}function p_(t){Ni?Ri?Ri.push(t):Ri=[t]:Ni=t}function m_(){if(Ni){var t=Ni,e=Ri;if(Ri=Ni=null,um(t),e)for(t=0;t<e.length;t++)um(e[t])}}function g_(t,e){return t(e)}function y_(){}var Xu=!1;function __(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return g_(t,e,n)}finally{Xu=!1,(Ni!==null||Ri!==null)&&(y_(),m_())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var eh=!1;if(In)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{eh=!1}function JE(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Hs=!1,ra=null,ia=!1,th=null,ZE={onError:function(t){Hs=!0,ra=t}};function eS(t,e,n,r,i,s,o,a,u){Hs=!1,ra=null,JE.apply(ZE,arguments)}function tS(t,e,n,r,i,s,o,a,u){if(eS.apply(this,arguments),Hs){if(Hs){var h=ra;Hs=!1,ra=null}else throw Error(M(198));ia||(ia=!0,th=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cm(t){if(Zr(t)!==t)throw Error(M(188))}function nS(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cm(i),t;if(s===r)return cm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function w_(t){return t=nS(t),t!==null?E_(t):null}function E_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E_(t);if(e!==null)return e;t=t.sibling}return null}var S_=mt.unstable_scheduleCallback,hm=mt.unstable_cancelCallback,rS=mt.unstable_shouldYield,iS=mt.unstable_requestPaint,Ce=mt.unstable_now,sS=mt.unstable_getCurrentPriorityLevel,wd=mt.unstable_ImmediatePriority,x_=mt.unstable_UserBlockingPriority,sa=mt.unstable_NormalPriority,oS=mt.unstable_LowPriority,C_=mt.unstable_IdlePriority,Ka=null,Zt=null;function lS(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ka,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:cS,aS=Math.log,uS=Math.LN2;function cS(t){return t>>>=0,t===0?32:31-(aS(t)/uS|0)|0}var gl=64,yl=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fs(a):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function hS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=hS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I_(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function fS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var k_,Sd,N_,R_,A_,rh=!1,_l=[],Jn=null,Zn=null,er=null,uo=new Map,co=new Map,Wn=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lo(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mS(t,e,n,r,i){switch(e){case"focusin":return Jn=Is(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=Is(Zn,t,e,n,r,i),!0;case"mouseover":return er=Is(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Is(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,Is(co.get(s)||null,t,e,n,r,i)),!0}return!1}function P_(t){var e=Ar(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,A_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=Lo(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function fm(t,e,n){Fl(t)&&n.delete(e)}function gS(){rh=!1,Jn!==null&&Fl(Jn)&&(Jn=null),Zn!==null&&Fl(Zn)&&(Zn=null),er!==null&&Fl(er)&&(er=null),uo.forEach(fm),co.forEach(fm)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,gS)))}function ho(t){function e(i){return Ts(i,t)}if(0<_l.length){Ts(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Ts(Jn,t),Zn!==null&&Ts(Zn,t),er!==null&&Ts(er,t),uo.forEach(e),co.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&Wn.shift()}var Ai=On.ReactCurrentBatchConfig,la=!0;function yS(t,e,n,r){var i=re,s=Ai.transition;Ai.transition=null;try{re=1,xd(t,e,n,r)}finally{re=i,Ai.transition=s}}function _S(t,e,n,r){var i=re,s=Ai.transition;Ai.transition=null;try{re=4,xd(t,e,n,r)}finally{re=i,Ai.transition=s}}function xd(t,e,n,r){if(la){var i=ih(t,e,n,r);if(i===null)ac(t,e,r,aa,n),dm(t,r);else if(mS(i,t,e,n,r))r.stopPropagation();else if(dm(t,r),e&4&&-1<pS.indexOf(t)){for(;i!==null;){var s=Lo(i);if(s!==null&&k_(s),s=ih(t,e,n,r),s===null&&ac(t,e,r,aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ac(t,e,r,null,n)}}var aa=null;function ih(t,e,n,r){if(aa=null,t=vd(r),t=Ar(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return aa=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sS()){case wd:return 1;case x_:return 4;case sa:case oS:return 16;case C_:return 536870912;default:return 16}default:return 16}}var Qn=null,Cd=null,Ul=null;function O_(){if(Ul)return Ul;var t,e=Cd,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ul=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function pm(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:pm,this.isPropagationStopped=pm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=yt(Xi),Do=we({},Xi,{view:0,detail:0}),vS=yt(Do),Zu,ec,ks,qa=we({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Zu=t.screenX-ks.screenX,ec=t.screenY-ks.screenY):ec=Zu=0,ks=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),mm=yt(qa),wS=we({},qa,{dataTransfer:0}),ES=yt(wS),SS=we({},Do,{relatedTarget:0}),tc=yt(SS),xS=we({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=yt(xS),IS=we({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TS=yt(IS),kS=we({},Xi,{data:0}),gm=yt(kS),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AS[t])?!!e[t]:!1}function Td(){return PS}var bS=we({},Do,{key:function(t){if(t.key){var e=NS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=yt(bS),DS=we({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=yt(DS),LS=we({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),MS=yt(LS),jS=we({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=yt(jS),US=we({},qa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VS=yt(US),zS=[9,13,27,32],kd=In&&"CompositionEvent"in window,Ws=null;In&&"documentMode"in document&&(Ws=document.documentMode);var BS=In&&"TextEvent"in window&&!Ws,D_=In&&(!kd||Ws&&8<Ws&&11>=Ws),_m=" ",vm=!1;function L_(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function HS(t,e){switch(t){case"compositionend":return M_(e);case"keypress":return e.which!==32?null:(vm=!0,_m);case"textInput":return t=e.data,t===_m&&vm?null:t;default:return null}}function WS(t,e){if(pi)return t==="compositionend"||!kd&&L_(t,e)?(t=O_(),Ul=Cd=Qn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var $S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$S[t.type]:e==="textarea"}function j_(t,e,n,r){p_(r),e=ua(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,fo=null;function GS(t){q_(t,0)}function Ya(t){var e=yi(t);if(l_(e))return t}function KS(t,e){if(t==="change")return e}var F_=!1;if(In){var nc;if(In){var rc="oninput"in document;if(!rc){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),rc=typeof Em.oninput=="function"}nc=rc}else nc=!1;F_=nc&&(!document.documentMode||9<document.documentMode)}function Sm(){$s&&($s.detachEvent("onpropertychange",U_),fo=$s=null)}function U_(t){if(t.propertyName==="value"&&Ya(fo)){var e=[];j_(e,fo,t,vd(t)),__(GS,e)}}function qS(t,e,n){t==="focusin"?(Sm(),$s=e,fo=n,$s.attachEvent("onpropertychange",U_)):t==="focusout"&&Sm()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ya(fo)}function QS(t,e){if(t==="click")return Ya(e)}function XS(t,e){if(t==="input"||t==="change")return Ya(e)}function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:JS;function po(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,e){var n=xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xm(n)}}function V_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z_(){for(var t=window,e=na();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=na(t.document)}return e}function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZS(t){var e=z_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V_(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cm(n,s);var o=Cm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=In&&"documentMode"in document&&11>=document.documentMode,mi=null,sh=null,Gs=null,oh=!1;function Im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||mi==null||mi!==na(r)||(r=mi,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&po(Gs,r)||(Gs=r,r=ua(sh,"onSelect"),0<r.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},ic={},B_={};In&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Qa(t){if(ic[t])return ic[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B_)return ic[t]=e[n];return t}var H_=Qa("animationend"),W_=Qa("animationiteration"),$_=Qa("animationstart"),G_=Qa("transitionend"),K_=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){K_.set(t,e),Jr(e,[t])}for(var sc=0;sc<Tm.length;sc++){var oc=Tm[sc],tx=oc.toLowerCase(),nx=oc[0].toUpperCase()+oc.slice(1);mr(tx,"on"+nx)}mr(H_,"onAnimationEnd");mr(W_,"onAnimationIteration");mr($_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(G_,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tS(r,e,void 0,t),t.currentTarget=null}function q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;km(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;km(i,a,h),s=u}}}if(ia)throw t=th,ia=!1,th=null,t}function ue(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(Y_(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),Y_(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[El]){t[El]=!0,n_.forEach(function(n){n!=="selectionchange"&&(rx.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,lc("selectionchange",!1,e))}}function Y_(t,e,n,r){switch(b_(e)){case 1:var i=yS;break;case 4:i=_S;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ac(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}__(function(){var h=s,f=vd(n),m=[];e:{var g=K_.get(t);if(g!==void 0){var N=Id,T=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":N=OS;break;case"focusin":T="focus",N=tc;break;case"focusout":T="blur",N=tc;break;case"beforeblur":case"afterblur":N=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=MS;break;case H_:case W_:case $_:N=CS;break;case G_:N=FS;break;case"scroll":N=vS;break;case"wheel":N=VS;break;case"copy":case"cut":case"paste":N=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ym}var P=(e&4)!==0,L=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,w!==null&&(D=ao(v,w),D!=null&&P.push(go(v,D,S)))),L)break;v=v.return}0<P.length&&(g=new N(g,T,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",g&&n!==Jc&&(T=n.relatedTarget||n.fromElement)&&(Ar(T)||T[Tn]))break e;if((N||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,N?(T=n.relatedTarget||n.toElement,N=h,T=T?Ar(T):null,T!==null&&(L=Zr(T),T!==L||T.tag!==5&&T.tag!==6)&&(T=null)):(N=null,T=h),N!==T)){if(P=mm,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=ym,D="onPointerLeave",w="onPointerEnter",v="pointer"),L=N==null?g:yi(N),S=T==null?g:yi(T),g=new P(D,v+"leave",N,n,f),g.target=L,g.relatedTarget=S,D=null,Ar(f)===h&&(P=new P(w,v+"enter",T,n,f),P.target=S,P.relatedTarget=L,D=P),L=D,N&&T)t:{for(P=N,w=T,v=0,S=P;S;S=ci(S))v++;for(S=0,D=w;D;D=ci(D))S++;for(;0<v-S;)P=ci(P),v--;for(;0<S-v;)w=ci(w),S--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=ci(P),w=ci(w)}P=null}else P=null;N!==null&&Nm(m,g,N,P,!1),T!==null&&L!==null&&Nm(m,L,T,P,!0)}}e:{if(g=h?yi(h):window,N=g.nodeName&&g.nodeName.toLowerCase(),N==="select"||N==="input"&&g.type==="file")var j=KS;else if(wm(g))if(F_)j=XS;else{j=YS;var V=qS}else(N=g.nodeName)&&N.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=QS);if(j&&(j=j(t,h))){j_(m,j,n,f);break e}V&&V(t,g,h),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Kc(g,"number",g.value)}switch(V=h?yi(h):window,t){case"focusin":(wm(V)||V.contentEditable==="true")&&(mi=V,sh=h,Gs=null);break;case"focusout":Gs=sh=mi=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Im(m,n,f);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Im(m,n,f)}var x;if(kd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else pi?L_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(D_&&n.locale!=="ko"&&(pi||_!=="onCompositionStart"?_==="onCompositionEnd"&&pi&&(x=O_()):(Qn=f,Cd="value"in Qn?Qn.value:Qn.textContent,pi=!0)),V=ua(h,_),0<V.length&&(_=new gm(_,t,null,n,f),m.push({event:_,listeners:V}),x?_.data=x:(x=M_(n),x!==null&&(_.data=x)))),(x=BS?HS(t,n):WS(t,n))&&(h=ua(h,"onBeforeInput"),0<h.length&&(f=new gm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=x))}q_(m,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(go(t,s,i)),s=ao(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=ao(n,s),u!=null&&o.unshift(go(n,u,a))):i||(u=ao(n,s),u!=null&&o.push(go(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ix=/\r\n?/g,sx=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(sx,"")}function Sl(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(M(425))}function ca(){}var lh=null,ah=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,lx=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(ax)}:ch;function ax(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Ji,yo="__reactProps$"+Ji,Tn="__reactContainer$"+Ji,hh="__reactEvents$"+Ji,ux="__reactListeners$"+Ji,cx="__reactHandles$"+Ji;function Ar(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pm(t);t!==null;){if(n=t[Qt])return n;t=Pm(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[Qt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Xa(t){return t[yo]||null}var dh=[],_i=-1;function gr(t){return{current:t}}function de(t){0>_i||(t.current=dh[_i],dh[_i]=null,_i--)}function le(t,e){_i++,dh[_i]=t.current,t.current=e}var cr={},Ye=gr(cr),lt=gr(!1),Ur=cr;function Vi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function ha(){de(lt),de(Ye)}function bm(t,e,n){if(Ye.current!==cr)throw Error(M(168));le(Ye,e),le(lt,n)}function Q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,qE(t)||"Unknown",i));return we({},n,r)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Ur=Ye.current,le(Ye,t),le(lt,lt.current),!0}function Om(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Q_(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,de(lt),de(Ye),le(Ye,t)):de(lt),le(lt,n)}var pn=null,Ja=!1,cc=!1;function X_(t){pn===null?pn=[t]:pn.push(t)}function hx(t){Ja=!0,X_(t)}function yr(){if(!cc&&pn!==null){cc=!0;var t=0,e=re;try{var n=pn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,Ja=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),S_(wd,yr),i}finally{re=e,cc=!1}}return null}var vi=[],wi=0,fa=null,pa=0,wt=[],Et=0,Vr=null,gn=1,yn="";function Cr(t,e){vi[wi++]=pa,vi[wi++]=fa,fa=t,pa=e}function J_(t,e,n){wt[Et++]=gn,wt[Et++]=yn,wt[Et++]=Vr,Vr=t;var r=gn;t=yn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Ft(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Rd(t){t.return!==null&&(Cr(t,1),J_(t,1,0))}function Ad(t){for(;t===fa;)fa=vi[--wi],vi[wi]=null,pa=vi[--wi],vi[wi]=null;for(;t===Vr;)Vr=wt[--Et],wt[Et]=null,yn=wt[--Et],wt[Et]=null,gn=wt[--Et],wt[Et]=null}var ft=null,dt=null,me=!1,bt=null;function Z_(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,dt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,dt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(me){var e=dt;if(e){var n=e;if(!Dm(t,e)){if(fh(t))throw Error(M(418));e=tr(n.nextSibling);var r=ft;e&&Dm(t,e)?Z_(r,n):(t.flags=t.flags&-4097|2,me=!1,ft=t)}}else{if(fh(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,ft=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function xl(t){if(t!==ft)return!1;if(!me)return Lm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=dt)){if(fh(t))throw ev(),Error(M(418));for(;e;)Z_(t,e),e=tr(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ft?tr(t.stateNode.nextSibling):null;return!0}function ev(){for(var t=dt;t;)t=tr(t.nextSibling)}function zi(){dt=ft=null,me=!1}function Pd(t){bt===null?bt=[t]:bt.push(t)}var dx=On.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mm(t){var e=t._init;return e(t._payload)}function tv(t){function e(w,v){if(t){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=sr(w,v),w.index=0,w.sibling=null,w}function s(w,v,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,S,D){return v===null||v.tag!==6?(v=yc(S,w.mode,D),v.return=w,v):(v=i(v,S),v.return=w,v)}function u(w,v,S,D){var j=S.type;return j===fi?f(w,v,S.props.children,D,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Bn&&Mm(j)===v.type)?(D=i(v,S.props),D.ref=Ns(w,v,S),D.return=w,D):(D=Kl(S.type,S.key,S.props,null,w.mode,D),D.ref=Ns(w,v,S),D.return=w,D)}function h(w,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=_c(S,w.mode,D),v.return=w,v):(v=i(v,S.children||[]),v.return=w,v)}function f(w,v,S,D,j){return v===null||v.tag!==7?(v=Mr(S,w.mode,D,j),v.return=w,v):(v=i(v,S),v.return=w,v)}function m(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yc(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return S=Kl(v.type,v.key,v.props,null,w.mode,S),S.ref=Ns(w,null,v),S.return=w,S;case di:return v=_c(v,w.mode,S),v.return=w,v;case Bn:var D=v._init;return m(w,D(v._payload),S)}if(js(v)||xs(v))return v=Mr(v,w.mode,S,null),v.return=w,v;Cl(w,v)}return null}function g(w,v,S,D){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(w,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:return S.key===j?u(w,v,S,D):null;case di:return S.key===j?h(w,v,S,D):null;case Bn:return j=S._init,g(w,v,j(S._payload),D)}if(js(S)||xs(S))return j!==null?null:f(w,v,S,D,null);Cl(w,S)}return null}function N(w,v,S,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(S)||null,a(v,w,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fl:return w=w.get(D.key===null?S:D.key)||null,u(v,w,D,j);case di:return w=w.get(D.key===null?S:D.key)||null,h(v,w,D,j);case Bn:var V=D._init;return N(w,v,S,V(D._payload),j)}if(js(D)||xs(D))return w=w.get(S)||null,f(v,w,D,j,null);Cl(v,D)}return null}function T(w,v,S,D){for(var j=null,V=null,x=v,_=v=0,E=null;x!==null&&_<S.length;_++){x.index>_?(E=x,x=null):E=x.sibling;var C=g(w,x,S[_],D);if(C===null){x===null&&(x=E);break}t&&x&&C.alternate===null&&e(w,x),v=s(C,v,_),V===null?j=C:V.sibling=C,V=C,x=E}if(_===S.length)return n(w,x),me&&Cr(w,_),j;if(x===null){for(;_<S.length;_++)x=m(w,S[_],D),x!==null&&(v=s(x,v,_),V===null?j=x:V.sibling=x,V=x);return me&&Cr(w,_),j}for(x=r(w,x);_<S.length;_++)E=N(x,w,_,S[_],D),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?_:E.key),v=s(E,v,_),V===null?j=E:V.sibling=E,V=E);return t&&x.forEach(function(k){return e(w,k)}),me&&Cr(w,_),j}function P(w,v,S,D){var j=xs(S);if(typeof j!="function")throw Error(M(150));if(S=j.call(S),S==null)throw Error(M(151));for(var V=j=null,x=v,_=v=0,E=null,C=S.next();x!==null&&!C.done;_++,C=S.next()){x.index>_?(E=x,x=null):E=x.sibling;var k=g(w,x,C.value,D);if(k===null){x===null&&(x=E);break}t&&x&&k.alternate===null&&e(w,x),v=s(k,v,_),V===null?j=k:V.sibling=k,V=k,x=E}if(C.done)return n(w,x),me&&Cr(w,_),j;if(x===null){for(;!C.done;_++,C=S.next())C=m(w,C.value,D),C!==null&&(v=s(C,v,_),V===null?j=C:V.sibling=C,V=C);return me&&Cr(w,_),j}for(x=r(w,x);!C.done;_++,C=S.next())C=N(x,w,_,C.value,D),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?_:C.key),v=s(C,v,_),V===null?j=C:V.sibling=C,V=C);return t&&x.forEach(function(A){return e(w,A)}),me&&Cr(w,_),j}function L(w,v,S,D){if(typeof S=="object"&&S!==null&&S.type===fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:e:{for(var j=S.key,V=v;V!==null;){if(V.key===j){if(j=S.type,j===fi){if(V.tag===7){n(w,V.sibling),v=i(V,S.props.children),v.return=w,w=v;break e}}else if(V.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Bn&&Mm(j)===V.type){n(w,V.sibling),v=i(V,S.props),v.ref=Ns(w,V,S),v.return=w,w=v;break e}n(w,V);break}else e(w,V);V=V.sibling}S.type===fi?(v=Mr(S.props.children,w.mode,D,S.key),v.return=w,w=v):(D=Kl(S.type,S.key,S.props,null,w.mode,D),D.ref=Ns(w,v,S),D.return=w,w=D)}return o(w);case di:e:{for(V=S.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(w,v.sibling),v=i(v,S.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=_c(S,w.mode,D),v.return=w,w=v}return o(w);case Bn:return V=S._init,L(w,v,V(S._payload),D)}if(js(S))return T(w,v,S,D);if(xs(S))return P(w,v,S,D);Cl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,S),v.return=w,w=v):(n(w,v),v=yc(S,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return L}var Bi=tv(!0),nv=tv(!1),ma=gr(null),ga=null,Ei=null,bd=null;function Od(){bd=Ei=ga=null}function Dd(t){var e=ma.current;de(ma),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){ga=t,bd=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(ga===null)throw Error(M(308));Ei=t,ga.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Pr=null;function Ld(t){Pr===null?Pr=[t]:Pr.push(t)}function rv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ld(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ld(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}function jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=h:a.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,a=s;do{var g=a.lane,N=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,P=a;switch(g=e,N=n,P.tag){case 1:if(T=P.payload,typeof T=="function"){m=T.call(N,m,g);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=P.payload,g=typeof T=="function"?T.call(N,m,g):T,g==null)break e;m=we({},m,g);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else N={eventTime:N,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(h=f=N,u=m):f=f.next=N,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=m}}function Fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Mo={},en=gr(Mo),_o=gr(Mo),vo=gr(Mo);function br(t){if(t===Mo)throw Error(M(174));return t}function jd(t,e){switch(le(vo,e),le(_o,t),le(en,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}de(en),le(en,e)}function Hi(){de(en),de(_o),de(vo)}function sv(t){br(vo.current);var e=br(en.current),n=Yc(e,t.type);e!==n&&(le(_o,t),le(en,n))}function Fd(t){_o.current===t&&(de(en),de(_o))}var _e=gr(0);function _a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=[];function Ud(){for(var t=0;t<hc.length;t++)hc[t]._workInProgressVersionPrimary=null;hc.length=0}var Bl=On.ReactCurrentDispatcher,dc=On.ReactCurrentBatchConfig,zr=0,ve=null,Ne=null,Pe=null,va=!1,Ks=!1,wo=0,fx=0;function He(){throw Error(M(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?yx:_x,t=n(r,i),Ks){s=0;do{if(Ks=!1,wo=0,25<=s)throw Error(M(301));s+=1,Pe=Ne=null,e.updateQueue=null,Bl.current=vx,t=n(r,i)}while(Ks)}if(Bl.current=wa,e=Ne!==null&&Ne.next!==null,zr=0,Pe=Ne=ve=null,va=!1,e)throw Error(M(300));return t}function Bd(){var t=wo!==0;return wo=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Tt(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Pe===null?ve.memoizedState:Pe.next;if(e!==null)Pe=e,Ne=t;else{if(t===null)throw Error(M(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Eo(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=Tt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var f=h.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,ve.lanes|=f,Br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,zt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Tt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ov(){}function lv(t,e){var n=ve,r=Tt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Hd(cv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,So(9,uv.bind(null,n,r,i,e),void 0,null),De===null)throw Error(M(349));zr&30||av(n,e,i)}return i}function av(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uv(t,e,n,r){e.value=n,e.getSnapshot=r,hv(e)&&dv(t)}function cv(t,e,n){return n(function(){hv(e)&&dv(t)})}function hv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function dv(t){var e=kn(t,1);e!==null&&Ut(e,t,1,-1)}function Um(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,ve,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fv(){return Tt().memoizedState}function Hl(t,e,n,r){var i=Kt();ve.flags|=t,i.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function Za(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Vd(r,o.deps)){i.memoizedState=So(e,n,s,r);return}}ve.flags|=t,i.memoizedState=So(1|e,n,s,r)}function Vm(t,e){return Hl(8390656,8,t,e)}function Hd(t,e){return Za(2048,8,t,e)}function pv(t,e){return Za(4,2,t,e)}function mv(t,e){return Za(4,4,t,e)}function gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,Za(4,4,gv.bind(null,e,t),n)}function Wd(){}function _v(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wv(t,e,n){return zr&21?(zt(n,e)||(n=I_(),ve.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function px(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=dc.transition;dc.transition={};try{t(!1),e()}finally{re=n,dc.transition=r}}function Ev(){return Tt().memoizedState}function mx(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sv(t))xv(e,n);else if(n=rv(t,e,n,r),n!==null){var i=et();Ut(n,t,r,i),Cv(n,e,r)}}function gx(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sv(t))xv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var u=e.interleaved;u===null?(i.next=i,Ld(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=rv(t,e,i,r),n!==null&&(i=et(),Ut(n,t,r,i),Cv(n,e,r))}}function Sv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function xv(t,e){Ks=va=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}var wa={readContext:It,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},yx={readContext:It,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mx.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:Wd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=px.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Kt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),De===null)throw Error(M(349));zr&30||av(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vm(cv.bind(null,r,s,t),[t]),r.flags|=2048,So(9,uv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=De.identifierPrefix;if(me){var n=yn,r=gn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:It,useCallback:_v,useContext:It,useEffect:Hd,useImperativeHandle:yv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:vv,useReducer:fc,useRef:fv,useState:function(){return fc(Eo)},useDebugValue:Wd,useDeferredValue:function(t){var e=Tt();return wv(e,Ne.memoizedState,t)},useTransition:function(){var t=fc(Eo)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:ov,useSyncExternalStore:lv,useId:Ev,unstable_isNewReconciler:!1},vx={readContext:It,useCallback:_v,useContext:It,useEffect:Hd,useImperativeHandle:yv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:vv,useReducer:pc,useRef:fv,useState:function(){return pc(Eo)},useDebugValue:Wd,useDeferredValue:function(t){var e=Tt();return Ne===null?e.memoizedState=t:wv(e,Ne.memoizedState,t)},useTransition:function(){var t=pc(Eo)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:ov,useSyncExternalStore:lv,useId:Ev,unstable_isNewReconciler:!1};function At(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=ir(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Ut(e,t,i,r),zl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=ir(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Ut(e,t,i,r),zl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=ir(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Ut(e,t,r,n),zl(e,t,r))}};function zm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function Iv(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=at(e)?Ur:Ye.current,r=e.contextTypes,s=(r=r!=null)?Vi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Md(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=at(e)?Ur:Ye.current,i.context=Vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&eu.enqueueReplaceState(i,i.state,null),ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=KE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,Nh=r),_h(t,e)},n}function kv(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $m(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var Ex=On.ReactCurrentOwner,st=!1;function Je(t,e,n,r){e.child=t===null?nv(e,null,n,r):Bi(e,t.child,n,r)}function Gm(t,e,n,r,i){n=n.render;var s=e.ref;return Pi(e,i),r=zd(t,e,n,r,s,i),n=Bd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(me&&n&&Rd(e),e.flags|=1,Je(t,e,r,i),e.child)}function Km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nv(t,e,s,r,i)):(t=Kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Nv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return vh(t,e,n,r,i)}function Rv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(xi,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(xi,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(xi,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(xi,ct),ct|=r;return Je(t,e,i,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=at(n)?Ur:Ye.current;return s=Vi(e,s),Pi(e,i),n=zd(t,e,n,r,s,i),r=Bd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(me&&r&&Rd(e),e.flags|=1,Je(t,e,n,i),e.child)}function qm(t,e,n,r,i){if(at(n)){var s=!0;da(e)}else s=!1;if(Pi(e,i),e.stateNode===null)Wl(t,e),Iv(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=It(h):(h=at(n)?Ur:Ye.current,h=Vi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&Bm(e,o,r,h),Hn=!1;var g=e.memoizedState;o.state=g,ya(e,r,o,i),u=e.memoizedState,a!==r||g!==u||lt.current||Hn?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(a=Hn||zm(e,n,a,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iv(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:At(e.type,a),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=It(u):(u=at(n)?Ur:Ye.current,u=Vi(e,u));var N=n.getDerivedStateFromProps;(f=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Bm(e,o,r,u),Hn=!1,g=e.memoizedState,o.state=g,ya(e,r,o,i);var T=e.memoizedState;a!==m||g!==T||lt.current||Hn?(typeof N=="function"&&(gh(e,n,N,r),T=e.memoizedState),(h=Hn||zm(e,n,h,r,g,T,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){Av(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Om(e,n,!1),Nn(t,e,s);r=e.stateNode,Ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,a,s)):Je(t,e,a,s),e.memoizedState=r.state,i&&Om(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),jd(t,e.containerInfo)}function Ym(t,e,n,r,i){return zi(),Pd(i),e.flags|=256,Je(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(_e,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Eh,t):$d(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $d(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,r){return r!==null&&Pd(r),Bi(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mc(Error(M(422))),Il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return Il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=mc(s,r,void 0),Il(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Ut(r,t,i,-1))}return Xd(),r=mc(Error(M(421))),Il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Lx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=tr(i.nextSibling),ft=e,me=!0,bt=null,t!==null&&(wt[Et++]=gn,wt[Et++]=yn,wt[Et++]=Vr,gn=t.id,yn=t.overflow,Vr=e),e=$d(e,r.children),e.flags|=4096,e)}function Qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ov(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_a(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_a(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xx(t,e,n){switch(e.tag){case 3:Pv(e),zi();break;case 5:sv(e);break;case 1:at(e.type)&&da(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(le(_e,_e.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);le(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ov(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Rv(t,e,n)}return Nn(t,e,n)}var Dv,xh,Lv,Mv;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};Lv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(en.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=qc(t,i),r=qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}Qc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Mv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cx(t,e,n){var r=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return at(e.type)&&ha(),We(e),null;case 3:return r=e.stateNode,Hi(),de(lt),de(Ye),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Ph(bt),bt=null))),xh(t,e),We(e),null;case 5:Fd(e);var i=br(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Lv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return We(e),null}if(t=br(en.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)ue(Us[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":sm(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":lm(r,s),ue("invalid",r)}Qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":pl(r),om(r,s,!0);break;case"textarea":pl(r),am(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[yo]=r,Dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)ue(Us[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":sm(t,r),i=$c(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",t);break;case"textarea":lm(t,r),i=qc(t,r),ue("invalid",t);break;default:i=r}Qc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?f_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&h_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&md(t,s,u,o))}switch(n){case"input":pl(t),om(t,r,!1);break;case"textarea":pl(t),am(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Mv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=br(vo.current),br(en.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return We(e),null;case 13:if(de(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&dt!==null&&e.mode&1&&!(e.flags&128))ev(),zi(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Qt]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else bt!==null&&(Ph(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Re===0&&(Re=3):Xd())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Hi(),xh(t,e),t===null&&mo(e.stateNode.containerInfo),We(e),null;case 10:return Dd(e.type._context),We(e),null;case 17:return at(e.type)&&ha(),We(e),null;case 19:if(de(_e),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rs(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_a(t),o!==null){for(e.flags|=128,Rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>$i&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=_a(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return We(e),null}else 2*Ce()-s.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=_e.current,le(_e,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function Ix(t,e){switch(Ad(e),e.tag){case 1:return at(e.type)&&ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),de(lt),de(Ye),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(de(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(_e),null;case 4:return Hi(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Tl=!1,$e=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,B=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Xm=!1;function kx(t,e){if(lh=la,t=z_(),Nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var N;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(N=m.firstChild)!==null;)g=m,m=N;for(;;){if(m===t)break t;if(g===n&&++h===i&&(a=o),g===s&&++f===r&&(u=o),(N=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=N}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},la=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var P=T.memoizedProps,L=T.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:At(e.type,P),L);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Ee(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return T=Xm,Xm=!1,T}function qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jv(t){var e=t.alternate;e!==null&&(t.alternate=null,jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[yo],delete e[hh],delete e[ux],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fv(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}var Me=null,Pt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:$e||Si(n,e);case 6:var r=Me,i=Pt;Me=null,Vn(t,e,n),Me=r,Pt=i,Me!==null&&(Pt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Pt?(t=Me,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),ho(t)):uc(Me,n.stateNode));break;case 4:r=Me,i=Pt,Me=n.stateNode.containerInfo,Pt=!0,Vn(t,e,n),Me=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!$e&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Vn(t,e,n),$e=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(r){var i=Mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Pt=!1;break e;case 3:Me=a.stateNode.containerInfo,Pt=!0;break e;case 4:Me=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Me===null)throw Error(M(160));Uv(s,o,i),Me=null,Pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Gt(t),r&4){try{qs(3,t,t.return),tu(3,t)}catch(P){Ee(t,t.return,P)}try{qs(5,t,t.return)}catch(P){Ee(t,t.return,P)}}break;case 1:Rt(e,t),Gt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Rt(e,t),Gt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(P){Ee(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a_(i,s),Xc(a,o);var h=Xc(a,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?f_(i,m):f==="dangerouslySetInnerHTML"?h_(i,m):f==="children"?lo(i,m):md(i,f,m,h)}switch(a){case"input":Gc(i,s);break;case"textarea":u_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?ki(i,!!s.multiple,N,!1):g!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(P){Ee(t,t.return,P)}}break;case 6:if(Rt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ee(t,t.return,P)}}break;case 3:if(Rt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(P){Ee(t,t.return,P)}break;case 4:Rt(e,t),Gt(t);break;case 13:Rt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=Ce())),r&4&&Zm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?($e=(h=$e)||f,Rt(e,t),$e=h):Rt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,N=g.child,g.tag){case 0:case 11:case 14:case 15:qs(4,g,g.return);break;case 1:Si(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(P){Ee(r,n,P)}}break;case 5:Si(g,g.return);break;case 22:if(g.memoizedState!==null){tg(m);continue}}N!==null?(N.return=g,B=N):tg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=d_("display",o))}catch(P){Ee(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Ee(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Rt(e,t),Gt(t),r&4&&Zm(t);break;case 21:break;default:Rt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Jm(t);kh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jm(t);Th(t,a,o);break;default:throw Error(M(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nx(t,e,n){B=t,zv(t)}function zv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||$e;a=Tl;var h=$e;if(Tl=o,($e=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?ng(i):u!==null?(u.return=o,B=u):ng(i);for(;s!==null;)B=s,zv(s),s=s.sibling;B=i,Tl=a,$e=h}eg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):eg(t)}}function eg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ho(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}$e||e.flags&512&&Ih(e)}catch(g){Ee(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function tg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function ng(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{Ih(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{Ih(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var Rx=Math.ceil,Ea=On.ReactCurrentDispatcher,Gd=On.ReactCurrentOwner,Ct=On.ReactCurrentBatchConfig,Z=0,De=null,Te=null,Fe=0,ct=0,xi=gr(0),Re=0,xo=null,Br=0,nu=0,Kd=0,Ys=null,it=null,qd=0,$i=1/0,fn=null,Sa=!1,Nh=null,rr=null,kl=!1,Xn=null,xa=0,Qs=0,Rh=null,$l=-1,Gl=0;function et(){return Z&6?Ce():$l!==-1?$l:$l=Ce()}function ir(t){return t.mode&1?Z&2&&Fe!==0?Fe&-Fe:dx.transition!==null?(Gl===0&&(Gl=I_()),Gl):(t=re,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function Ut(t,e,n,r){if(50<Qs)throw Qs=0,Rh=null,Error(M(185));Oo(t,n,r),(!(Z&2)||t!==De)&&(t===De&&(!(Z&2)&&(nu|=n),Re===4&&$n(t,Fe)),ut(t,r),n===1&&Z===0&&!(e.mode&1)&&($i=Ce()+500,Ja&&yr()))}function ut(t,e){var n=t.callbackNode;dS(t,e);var r=oa(t,t===De?Fe:0);if(r===0)n!==null&&hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hm(n),e===1)t.tag===0?hx(rg.bind(null,t)):X_(rg.bind(null,t)),lx(function(){!(Z&6)&&yr()}),n=null;else{switch(T_(r)){case 1:n=wd;break;case 4:n=x_;break;case 16:n=sa;break;case 536870912:n=C_;break;default:n=sa}n=Yv(n,Bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bv(t,e){if($l=-1,Gl=0,Z&6)throw Error(M(327));var n=t.callbackNode;if(bi()&&t.callbackNode!==n)return null;var r=oa(t,t===De?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ca(t,r);else{e=r;var i=Z;Z|=2;var s=Wv();(De!==t||Fe!==e)&&(fn=null,$i=Ce()+500,Lr(t,e));do try{bx();break}catch(a){Hv(t,a)}while(!0);Od(),Ea.current=s,Z=i,Te!==null?e=0:(De=null,Fe=0,e=Re)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Ah(t,i))),e===1)throw n=xo,Lr(t,0),$n(t,r),ut(t,Ce()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ax(i)&&(e=Ca(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Ah(t,s))),e===1))throw n=xo,Lr(t,0),$n(t,r),ut(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ir(t,it,fn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=qd+500-Ce(),10<e)){if(oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(Ir.bind(null,t,it,fn),e);break}Ir(t,it,fn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rx(r/1960))-r,10<r){t.timeoutHandle=ch(Ir.bind(null,t,it,fn),r);break}Ir(t,it,fn);break;case 5:Ir(t,it,fn);break;default:throw Error(M(329))}}}return ut(t,Ce()),t.callbackNode===n?Bv.bind(null,t):null}function Ah(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Ca(t,e),t!==2&&(e=it,it=n,e!==null&&Ph(e)),t}function Ph(t){it===null?it=t:it.push.apply(it,t)}function Ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~Kd,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function rg(t){if(Z&6)throw Error(M(327));bi();var e=oa(t,0);if(!(e&1))return ut(t,Ce()),null;var n=Ca(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Ah(t,r))}if(n===1)throw n=xo,Lr(t,0),$n(t,e),ut(t,Ce()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,it,fn),ut(t,Ce()),null}function Yd(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&($i=Ce()+500,Ja&&yr())}}function Hr(t){Xn!==null&&Xn.tag===0&&!(Z&6)&&bi();var e=Z;Z|=1;var n=Ct.transition,r=re;try{if(Ct.transition=null,re=1,t)return t()}finally{re=r,Ct.transition=n,Z=e,!(Z&6)&&yr()}}function Qd(){ct=xi.current,de(xi)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ox(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Hi(),de(lt),de(Ye),Ud();break;case 5:Fd(r);break;case 4:Hi();break;case 13:de(_e);break;case 19:de(_e);break;case 10:Dd(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(De=t,Te=t=sr(t.current,null),Fe=ct=e,Re=0,xo=null,Kd=nu=Br=0,it=Ys=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function Hv(t,e){do{var n=Te;try{if(Od(),Bl.current=wa,va){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}va=!1}if(zr=0,Pe=Ne=ve=null,Ks=!1,wo=0,Gd.current=null,n===null||n.return===null){Re=1,xo=e,Te=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var N=Wm(o);if(N!==null){N.flags&=-257,$m(N,o,a,s,e),N.mode&1&&Hm(s,h,e),e=N,u=h;var T=e.updateQueue;if(T===null){var P=new Set;P.add(u),e.updateQueue=P}else T.add(u);break e}else{if(!(e&1)){Hm(s,h,e),Xd();break e}u=Error(M(426))}}else if(me&&a.mode&1){var L=Wm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),$m(L,o,a,s,e),Pd(Wi(u,a));break e}}s=u=Wi(u,a),Re!==4&&(Re=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Tv(s,u,e);jm(s,w);break e;case 1:a=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(rr===null||!rr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=kv(s,a,e);jm(s,D);break e}}s=s.return}while(s!==null)}Gv(n)}catch(j){e=j,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Wv(){var t=Ea.current;return Ea.current=wa,t===null?wa:t}function Xd(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Br&268435455)&&!(nu&268435455)||$n(De,Fe)}function Ca(t,e){var n=Z;Z|=2;var r=Wv();(De!==t||Fe!==e)&&(fn=null,Lr(t,e));do try{Px();break}catch(i){Hv(t,i)}while(!0);if(Od(),Z=n,Ea.current=r,Te!==null)throw Error(M(261));return De=null,Fe=0,Re}function Px(){for(;Te!==null;)$v(Te)}function bx(){for(;Te!==null&&!rS();)$v(Te)}function $v(t){var e=qv(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?Gv(t):Te=e,Gd.current=null}function Gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Te=null;return}}else if(n=Cx(n,e,ct),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Re===0&&(Re=5)}function Ir(t,e,n){var r=re,i=Ct.transition;try{Ct.transition=null,re=1,Ox(t,e,n,r)}finally{Ct.transition=i,re=r}return null}function Ox(t,e,n,r){do bi();while(Xn!==null);if(Z&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fS(t,s),t===De&&(Te=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,Yv(sa,function(){return bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=re;re=1;var a=Z;Z|=4,Gd.current=null,kx(t,n),Vv(n,t),ZS(ah),la=!!lh,ah=lh=null,t.current=n,Nx(n),iS(),Z=a,re=o,Ct.transition=s}else t.current=n;if(kl&&(kl=!1,Xn=t,xa=i),s=t.pendingLanes,s===0&&(rr=null),lS(n.stateNode),ut(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sa)throw Sa=!1,t=Nh,Nh=null,t;return xa&1&&t.tag!==0&&bi(),s=t.pendingLanes,s&1?t===Rh?Qs++:(Qs=0,Rh=t):Qs=0,yr(),null}function bi(){if(Xn!==null){var t=T_(xa),e=Ct.transition,n=re;try{if(Ct.transition=null,re=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,xa=0,Z&6)throw Error(M(331));var i=Z;for(Z|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:qs(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,N=f.return;if(jv(f),f===h){B=null;break}if(g!==null){g.return=N,B=g;break}B=N}}}var T=s.alternate;if(T!==null){var P=T.child;if(P!==null){T.child=null;do{var L=P.sibling;P.sibling=null,P=L}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=v;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(j){Ee(a,a.return,j)}if(a===o){B=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,B=D;break e}B=a.return}}if(Z=i,yr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ka,t)}catch{}r=!0}return r}finally{re=n,Ct.transition=e}}return!1}function ig(t,e,n){e=Wi(n,e),e=Tv(t,e,1),t=nr(t,e,1),e=et(),t!==null&&(Oo(t,1,e),ut(t,e))}function Ee(t,e,n){if(t.tag===3)ig(t,t,n);else for(;e!==null;){if(e.tag===3){ig(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Wi(n,t),t=kv(e,t,1),e=nr(e,t,1),t=et(),e!==null&&(Oo(e,1,t),ut(e,t));break}}e=e.return}}function Dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Fe&n)===n&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Ce()-qd?Lr(t,0):Kd|=n),ut(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=et();t=kn(t,e),t!==null&&(Oo(t,e,n),ut(t,n))}function Lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function Mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),Kv(t,n)}var qv;qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,xx(t,e,n);st=!!(t.flags&131072)}else st=!1,me&&e.flags&1048576&&J_(e,pa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var i=Vi(e,Ye.current);Pi(e,n),i=zd(null,e,r,t,i,n);var s=Bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Md(e),i.updater=eu,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Rd(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Fx(r),t=At(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=qm(null,e,r,t,n);break e;case 11:e=Gm(null,e,r,t,n);break e;case 14:e=Km(null,e,r,At(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),qm(t,e,r,i,n);case 3:e:{if(Pv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iv(t,e),ya(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(M(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(M(424)),e),e=Ym(t,e,r,n,i);break e}else for(dt=tr(e.stateNode.containerInfo.firstChild),ft=e,me=!0,bt=null,n=nv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=Nn(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return sv(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),Av(t,e),Je(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return bv(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Gm(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(ma,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!lt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pi(e,n),i=It(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),Km(t,e,r,i,n);case 15:return Nv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Wl(t,e),e.tag=1,at(r)?(t=!0,da(e)):t=!1,Pi(e,n),Iv(e,r,i),yh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return Ov(t,e,n);case 22:return Rv(t,e,n)}throw Error(M(156,e.tag))};function Yv(t,e){return S_(t,e)}function jx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new jx(t,e,n,r)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===_d)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Mr(n.children,i,s,e);case gd:o=8,i|=8;break;case zc:return t=St(12,n,e,i|2),t.elementType=zc,t.lanes=s,t;case Bc:return t=St(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case Hc:return t=St(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case s_:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r_:o=10;break e;case i_:o=9;break e;case yd:o=11;break e;case _d:o=14;break e;case Bn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=St(22,t,r,e),t.elementType=s_,t.lanes=n,t.stateNode={isHidden:!1},t}function yc(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ux(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,r,i,s,o,a,u){return t=new Ux(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),t}function Vx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return cr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(at(n))return Q_(t,n,e)}return e}function Xv(t,e,n,r,i,s,o,a,u){return t=Zd(n,r,!0,t,i,s,o,a,u),t.context=Qv(null),n=t.current,r=et(),i=ir(n),s=En(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,Oo(t,i,r),ut(t,r),t}function iu(t,e,n,r){var i=e.current,s=et(),o=ir(i);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Ut(t,i,o,s),zl(t,i,o)),o}function Ia(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){sg(t,e),(t=t.alternate)&&sg(t,e)}function zx(){return null}var Jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function tf(t){this._internalRoot=t}su.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));iu(t,e,null,null)};su.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){iu(null,t,null,null)}),e[Tn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&P_(t)}};function nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function og(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ia(o);s.call(h)}}var o=Xv(e,r,t,0,null,!1,!1,"",og);return t._reactRootContainer=o,t[Tn]=o.current,mo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=Ia(u);a.call(h)}}var u=Zd(t,0,!1,null,null,!1,!1,"",og);return t._reactRootContainer=u,t[Tn]=u.current,mo(t.nodeType===8?t.parentNode:t),Hr(function(){iu(e,u,n,r)}),u}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ia(o);a.call(u)}}iu(e,o,t,i)}else o=Bx(n,e,t,i,r);return Ia(o)}k_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(Ed(e,n|1),ut(e,Ce()),!(Z&6)&&($i=Ce()+500,yr()))}break;case 13:Hr(function(){var r=kn(t,1);if(r!==null){var i=et();Ut(r,t,1,i)}}),ef(t,1)}};Sd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=et();Ut(e,t,134217728,n)}ef(t,134217728)}};N_=function(t){if(t.tag===13){var e=ir(t),n=kn(t,e);if(n!==null){var r=et();Ut(n,t,e,r)}ef(t,e)}};R_=function(){return re};A_=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Zc=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xa(r);if(!i)throw Error(M(90));l_(r),Gc(r,i)}}}break;case"textarea":u_(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};g_=Yd;y_=Hr;var Hx={usingClientEntryPoint:!1,Events:[Lo,yi,Xa,p_,m_,Yd]},As={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wx={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w_(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Ka=Nl.inject(Wx),Zt=Nl}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(e))throw Error(M(200));return Vx(t,e,null,n)};gt.createRoot=function(t,e){if(!nf(t))throw Error(M(299));var n=!1,r="",i=Jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,mo(t.nodeType===8?t.parentNode:t),new tf(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=w_(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Hr(t)};gt.hydrate=function(t,e,n){if(!ou(e))throw Error(M(200));return lu(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!nf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xv(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};gt.render=function(t,e,n){if(!ou(e))throw Error(M(200));return lu(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!ou(t))throw Error(M(40));return t._reactRootContainer?(Hr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};gt.unstable_batchedUpdates=Yd;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return lu(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(t){console.error(t)}}Zv(),Zy.exports=gt;var $x=Zy.exports,e0,lg=$x;e0=lg.createRoot,lg.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ag="popstate";function Gx(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return bh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Co(i)}return qx(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kx(){return Math.random().toString(36).substring(2,10)}function ug(t,e){return{usr:t.state,key:t.key,idx:e}}function bh(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Zi(e):e,state:n,key:e&&e.key||r||Kx()}}function Co({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function qx(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",u=null,h=f();h==null&&(h=0,o.replaceState({...o.state,idx:h},""));function f(){return(o.state||{idx:null}).idx}function m(){a="POP";let L=f(),w=L==null?null:L-h;h=L,u&&u({action:a,location:P.location,delta:w})}function g(L,w){a="PUSH";let v=bh(P.location,L,w);h=f()+1;let S=ug(v,h),D=P.createHref(v);try{o.pushState(S,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(D)}s&&u&&u({action:a,location:P.location,delta:1})}function N(L,w){a="REPLACE";let v=bh(P.location,L,w);h=f();let S=ug(v,h),D=P.createHref(v);o.replaceState(S,"",D),s&&u&&u({action:a,location:P.location,delta:0})}function T(L){return Yx(L)}let P={get action(){return a},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ag,m),u=L,()=>{i.removeEventListener(ag,m),u=null}},createHref(L){return e(i,L)},createURL:T,encodeLocation(L){let w=T(L);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:N,go(L){return o.go(L)}};return P}function Yx(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ge(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Co(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function t0(t,e,n="/"){return Qx(t,e,n,!1)}function Qx(t,e,n,r){let i=typeof e=="string"?Zi(e):e,s=Rn(i.pathname||"/",n);if(s==null)return null;let o=n0(t);Xx(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=aC(s);a=oC(o[u],h,r)}return a}function n0(t,e=[],n=[],r="",i=!1){let s=(o,a,u=i,h)=>{let f={relativePath:h===void 0?o.path||"":h,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ge(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=Sn([r,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),n0(o.children,e,g,m,u)),!(o.path==null&&!o.index)&&e.push({path:m,score:iC(m,o.index),routesMeta:g})};return t.forEach((o,a)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,a);else for(let h of r0(o.path))s(o,a,!0,h)}),e}function r0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=r0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Xx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Jx=/^:[\w-]+$/,Zx=3,eC=2,tC=1,nC=10,rC=-2,cg=t=>t==="*";function iC(t,e){let n=t.split("/"),r=n.length;return n.some(cg)&&(r+=rC),e&&(r+=eC),n.filter(i=>!cg(i)).reduce((i,s)=>i+(Jx.test(s)?Zx:s===""?tC:nC),r)}function sC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oC(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=Ta({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!m&&h&&n&&!r[r.length-1].route.index&&(m=Ta({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Sn([s,m.pathname]),pathnameBase:dC(Sn([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Sn([s,m.pathnameBase]))}return o}function Ta(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:m},g)=>{if(f==="*"){let T=a[g]||"";o=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}const N=a[g];return m&&!N?h[f]=void 0:h[f]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function lC(t,e=!1,n=!0){Bt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Rn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uC(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zi(t):t;return{pathname:n?n.startsWith("/")?n:cC(n,e):e,search:fC(r),hash:pC(i)}}function cC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vc(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rf(t){let e=hC(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function sf(t,e,n,r=!1){let i;typeof t=="string"?i=Zi(t):(i={...t},ge(!i.pathname||!i.pathname.includes("?"),vc("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),vc("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),vc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let u=uC(i,a),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}var Sn=t=>t.join("/").replace(/\/\/+/g,"/"),dC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var i0=["POST","PUT","PATCH","DELETE"];new Set(i0);var gC=["GET",...i0];new Set(gC);var es=O.createContext(null);es.displayName="DataRouter";var au=O.createContext(null);au.displayName="DataRouterState";O.createContext(!1);var s0=O.createContext({isTransitioning:!1});s0.displayName="ViewTransition";var yC=O.createContext(new Map);yC.displayName="Fetchers";var _C=O.createContext(null);_C.displayName="Await";var Wt=O.createContext(null);Wt.displayName="Navigation";var jo=O.createContext(null);jo.displayName="Location";var sn=O.createContext({outlet:null,matches:[],isDataRoute:!1});sn.displayName="Route";var of=O.createContext(null);of.displayName="RouteError";function vC(t,{relative:e}={}){ge(ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=O.useContext(Wt),{hash:i,pathname:s,search:o}=Fo(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Sn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function ts(){return O.useContext(jo)!=null}function Dn(){return ge(ts(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(jo).location}var o0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l0(t){O.useContext(Wt).static||O.useLayoutEffect(t)}function uu(){let{isDataRoute:t}=O.useContext(sn);return t?bC():wC()}function wC(){ge(ts(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(es),{basename:e,navigator:n}=O.useContext(Wt),{matches:r}=O.useContext(sn),{pathname:i}=Dn(),s=JSON.stringify(rf(r)),o=O.useRef(!1);return l0(()=>{o.current=!0}),O.useCallback((u,h={})=>{if(Bt(o.current,o0),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=sf(u,JSON.parse(s),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Sn([e,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[e,n,s,i,t])}O.createContext(null);function Fo(t,{relative:e}={}){let{matches:n}=O.useContext(sn),{pathname:r}=Dn(),i=JSON.stringify(rf(n));return O.useMemo(()=>sf(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function EC(t,e){return a0(t,e)}function a0(t,e,n,r,i){var v;ge(ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=O.useContext(Wt),{matches:o}=O.useContext(sn),a=o[o.length-1],u=a?a.params:{},h=a?a.pathname:"/",f=a?a.pathnameBase:"/",m=a&&a.route;{let S=m&&m.path||"";u0(h,!m||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=Dn(),N;if(e){let S=typeof e=="string"?Zi(e):e;ge(f==="/"||((v=S.pathname)==null?void 0:v.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${S.pathname}" was given in the \`location\` prop.`),N=S}else N=g;let T=N.pathname||"/",P=T;if(f!=="/"){let S=f.replace(/^\//,"").split("/");P="/"+T.replace(/^\//,"").split("/").slice(S.length).join("/")}let L=t0(t,{pathname:P});Bt(m||L!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Bt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=TC(L&&L.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:Sn([f,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Sn([f,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r,i);return e&&w?O.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},w):w}function SC(){let t=PC(),e=mC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,o)}var xC=O.createElement(SC,null),CC=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?O.createElement(sn.Provider,{value:this.props.routeContext},O.createElement(of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function IC({routeContext:t,match:e,children:n}){let r=O.useContext(es);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(sn.Provider,{value:t},n)}function TC(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let h=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);ge(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let a=!1,u=-1;if(n)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:m,errors:g}=n,N=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||N){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,f,m)=>{let g,N=!1,T=null,P=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,T=f.route.errorElement||xC,a&&(u<0&&m===0?(u0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,P=null):u===m&&(N=!0,P=f.route.hydrateFallbackElement||null)));let L=e.concat(s.slice(0,m+1)),w=()=>{let v;return g?v=T:N?v=P:f.route.Component?v=O.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=h,O.createElement(IC,{match:f,routeContext:{outlet:h,matches:L,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(CC,{location:n.location,revalidation:n.revalidation,component:T,error:g,children:w(),routeContext:{outlet:null,matches:L,isDataRoute:!0},unstable_onError:r}):w()},null)}function lf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kC(t){let e=O.useContext(es);return ge(e,lf(t)),e}function NC(t){let e=O.useContext(au);return ge(e,lf(t)),e}function RC(t){let e=O.useContext(sn);return ge(e,lf(t)),e}function af(t){let e=RC(t),n=e.matches[e.matches.length-1];return ge(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function AC(){return af("useRouteId")}function PC(){var r;let t=O.useContext(of),e=NC("useRouteError"),n=af("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function bC(){let{router:t}=kC("useNavigate"),e=af("useNavigate"),n=O.useRef(!1);return l0(()=>{n.current=!0}),O.useCallback(async(i,s={})=>{Bt(n.current,o0),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var hg={};function u0(t,e,n){!e&&!hg[t]&&(hg[t]=!0,Bt(!1,n))}O.memo(OC);function OC({routes:t,future:e,state:n,unstable_onError:r}){return a0(t,void 0,n,r,e)}function c0({to:t,replace:e,state:n,relative:r}){ge(ts(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=O.useContext(Wt);Bt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=O.useContext(sn),{pathname:o}=Dn(),a=uu(),u=sf(t,rf(s),o,r==="path"),h=JSON.stringify(u);return O.useEffect(()=>{a(JSON.parse(h),{replace:e,state:n,relative:r})},[a,h,r,e,n]),null}function Tr(t){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DC({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){ge(!ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Zi(n));let{pathname:u="/",search:h="",hash:f="",state:m=null,key:g="default"}=n,N=O.useMemo(()=>{let T=Rn(u,o);return T==null?null:{location:{pathname:T,search:h,hash:f,state:m,key:g},navigationType:r}},[o,u,h,f,m,g,r]);return Bt(N!=null,`<Router basename="${o}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:O.createElement(Wt.Provider,{value:a},O.createElement(jo.Provider,{children:e,value:N}))}function LC({children:t,location:e}){return EC(Oh(t),e)}function Oh(t,e=[]){let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Oh(r.props.children,s));return}ge(r.type===Tr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Oh(r.props.children,s)),n.push(o)}),n}var ql="get",Yl="application/x-www-form-urlencoded";function cu(t){return t!=null&&typeof t.tagName=="string"}function MC(t){return cu(t)&&t.tagName.toLowerCase()==="button"}function jC(t){return cu(t)&&t.tagName.toLowerCase()==="form"}function FC(t){return cu(t)&&t.tagName.toLowerCase()==="input"}function UC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VC(t,e){return t.button===0&&(!e||e==="_self")&&!UC(t)}var Rl=null;function zC(){if(Rl===null)try{new FormData(document.createElement("form"),0),Rl=!1}catch{Rl=!0}return Rl}var BC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(t){return t!=null&&!BC.has(t)?(Bt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yl}"`),null):t}function HC(t,e){let n,r,i,s,o;if(jC(t)){let a=t.getAttribute("action");r=a?Rn(a,e):null,n=t.getAttribute("method")||ql,i=wc(t.getAttribute("enctype"))||Yl,s=new FormData(t)}else if(MC(t)||FC(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||a.getAttribute("action");if(r=u?Rn(u,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||ql,i=wc(t.getAttribute("formenctype"))||wc(a.getAttribute("enctype"))||Yl,s=new FormData(a,t),!zC()){let{name:h,type:f,value:m}=t;if(f==="image"){let g=h?`${h}.`:"";s.append(`${g}x`,"0"),s.append(`${g}y`,"0")}else h&&s.append(h,m)}}else{if(cu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ql,r=null,i=Yl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function WC(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Rn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function $C(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function KC(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await $C(s,n);return o.links?o.links():[]}return[]}));return XC(r.flat(1).filter(GC).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function dg(t,e,n,r,i,s){let o=(u,h)=>n[h]?u.route.id!==n[h].route.id:!0,a=(u,h)=>{var f;return n[h].pathname!==u.pathname||((f=n[h].route.path)==null?void 0:f.endsWith("*"))&&n[h].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,h)=>o(u,h)||a(u,h)):s==="data"?e.filter((u,h)=>{var m;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,h)||a(u,h))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function qC(t,e,{includeHydrateFallback:n}={}){return YC(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function YC(t){return[...new Set(t)]}function QC(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function XC(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(QC(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function h0(){let t=O.useContext(es);return uf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function JC(){let t=O.useContext(au);return uf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var cf=O.createContext(void 0);cf.displayName="FrameworkContext";function d0(){let t=O.useContext(cf);return uf(t,"You must render this element inside a <HydratedRouter> element"),t}function ZC(t,e){let n=O.useContext(cf),[r,i]=O.useState(!1),[s,o]=O.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:h,onMouseLeave:f,onTouchStart:m}=e,g=O.useRef(null);O.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=w=>{w.forEach(v=>{o(v.isIntersecting)})},L=new IntersectionObserver(P,{threshold:.5});return g.current&&L.observe(g.current),()=>{L.disconnect()}}},[t]),O.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let N=()=>{i(!0)},T=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,g,{}]:[s,g,{onFocus:Ps(a,N),onBlur:Ps(u,T),onMouseEnter:Ps(h,N),onMouseLeave:Ps(f,T),onTouchStart:Ps(m,N)}]:[!1,g,{}]}function Ps(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function eI({page:t,...e}){let{router:n}=h0(),r=O.useMemo(()=>t0(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?O.createElement(nI,{page:t,matches:r,...e}):null}function tI(t){let{manifest:e,routeModules:n}=d0(),[r,i]=O.useState([]);return O.useEffect(()=>{let s=!1;return KC(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function nI({page:t,matches:e,...n}){let r=Dn(),{manifest:i,routeModules:s}=d0(),{basename:o}=h0(),{loaderData:a,matches:u}=JC(),h=O.useMemo(()=>dg(t,e,u,i,r,"data"),[t,e,u,i,r]),f=O.useMemo(()=>dg(t,e,u,i,r,"assets"),[t,e,u,i,r]),m=O.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,P=!1;if(e.forEach(w=>{var S;let v=i.routes[w.route.id];!v||!v.hasLoader||(!h.some(D=>D.route.id===w.route.id)&&w.route.id in a&&((S=s[w.route.id])!=null&&S.shouldRevalidate)||v.hasClientLoader?P=!0:T.add(w.route.id))}),T.size===0)return[];let L=WC(t,o,"data");return P&&T.size>0&&L.searchParams.set("_routes",e.filter(w=>T.has(w.route.id)).map(w=>w.route.id).join(",")),[L.pathname+L.search]},[o,a,r,i,h,e,t,s]),g=O.useMemo(()=>qC(f,i),[f,i]),N=tI(f);return O.createElement(O.Fragment,null,m.map(T=>O.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),g.map(T=>O.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),N.map(({key:T,link:P})=>O.createElement("link",{key:T,nonce:n.nonce,...P})))}function rI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var f0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{f0&&(window.__reactRouterVersion="7.8.2")}catch{}function iI({basename:t,children:e,window:n}){let r=O.useRef();r.current==null&&(r.current=Gx({window:n,v5Compat:!0}));let i=r.current,[s,o]=O.useState({action:i.action,location:i.location}),a=O.useCallback(u=>{O.startTransition(()=>o(u))},[o]);return O.useLayoutEffect(()=>i.listen(a),[i,a]),O.createElement(DC,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var p0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=O.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:u,to:h,preventScrollReset:f,viewTransition:m,...g},N){let{basename:T}=O.useContext(Wt),P=typeof h=="string"&&p0.test(h),L,w=!1;if(typeof h=="string"&&P&&(L=h,f0))try{let E=new URL(window.location.href),C=h.startsWith("//")?new URL(E.protocol+h):new URL(h),k=Rn(C.pathname,T);C.origin===E.origin&&k!=null?h=k+C.search+C.hash:w=!0}catch{Bt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=vC(h,{relative:i}),[S,D,j]=ZC(r,g),V=aI(h,{replace:o,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function x(E){e&&e(E),E.defaultPrevented||V(E)}let _=O.createElement("a",{...g,...j,href:L||v,onClick:w||s?e:x,ref:rI(N,D),target:u,"data-discover":!P&&n==="render"?"true":void 0});return S&&!P?O.createElement(O.Fragment,null,_,O.createElement(eI,{page:v})):_});Ie.displayName="Link";var sI=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:u,...h},f){let m=Fo(o,{relative:h.relative}),g=Dn(),N=O.useContext(au),{navigator:T,basename:P}=O.useContext(Wt),L=N!=null&&fI(m)&&a===!0,w=T.encodeLocation?T.encodeLocation(m).pathname:m.pathname,v=g.pathname,S=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;n||(v=v.toLowerCase(),S=S?S.toLowerCase():null,w=w.toLowerCase()),S&&P&&(S=Rn(S,P)||S);const D=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let j=v===w||!i&&v.startsWith(w)&&v.charAt(D)==="/",V=S!=null&&(S===w||!i&&S.startsWith(w)&&S.charAt(w.length)==="/"),x={isActive:j,isPending:V,isTransitioning:L},_=j?e:void 0,E;typeof r=="function"?E=r(x):E=[r,j?"active":null,V?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let C=typeof s=="function"?s(x):s;return O.createElement(Ie,{...h,"aria-current":_,className:E,ref:f,style:C,to:o,viewTransition:a},typeof u=="function"?u(x):u)});sI.displayName="NavLink";var oI=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=ql,action:a,onSubmit:u,relative:h,preventScrollReset:f,viewTransition:m,...g},N)=>{let T=hI(),P=dI(a,{relative:h}),L=o.toLowerCase()==="get"?"get":"post",w=typeof a=="string"&&p0.test(a),v=S=>{if(u&&u(S),S.defaultPrevented)return;S.preventDefault();let D=S.nativeEvent.submitter,j=(D==null?void 0:D.getAttribute("formmethod"))||o;T(D||S.currentTarget,{fetcherKey:e,method:j,navigate:n,replace:i,state:s,relative:h,preventScrollReset:f,viewTransition:m})};return O.createElement("form",{ref:N,method:L,action:P,onSubmit:r?u:v,...g,"data-discover":!w&&t==="render"?"true":void 0})});oI.displayName="Form";function lI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m0(t){let e=O.useContext(es);return ge(e,lI(t)),e}function aI(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=uu(),u=Dn(),h=Fo(t,{relative:s});return O.useCallback(f=>{if(VC(f,e)){f.preventDefault();let m=n!==void 0?n:Co(u)===Co(h);a(t,{replace:m,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,a,h,n,r,e,t,i,s,o])}var uI=0,cI=()=>`__${String(++uI)}__`;function hI(){let{router:t}=m0("useSubmit"),{basename:e}=O.useContext(Wt),n=AC();return O.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:u,body:h}=HC(r,e);if(i.navigate===!1){let f=i.fetcherKey||cI();await t.fetch(f,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function dI(t,{relative:e}={}){let{basename:n}=O.useContext(Wt),r=O.useContext(sn);ge(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Fo(t||".",{relative:e})},o=Dn();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),u=a.getAll("index");if(u.some(f=>f==="")){a.delete("index"),u.filter(m=>m).forEach(m=>a.append("index",m));let f=a.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Sn([n,s.pathname])),Co(s)}function fI(t,{relative:e}={}){let n=O.useContext(s0);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=m0("useViewTransitionState"),i=Fo(t,{relative:e});if(!n.isTransitioning)return!1;let s=Rn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Rn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ta(i.pathname,o)!=null||Ta(i.pathname,s)!=null}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const pI=()=>{};var fg={};/**
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
 */const g0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+g0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|h>>6,N=h&63;u||(N=64,o||(g=64)),r.push(n[f],n[m],n[g],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||m==null)throw new gI;const g=s<<2|a>>4;if(r.push(g),h!==64){const N=a<<4&240|h>>2;if(r.push(N),m!==64){const T=h<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _0=function(t){const e=y0(t);return hf.encodeByteArray(e,!0)},ka=function(t){return _0(t).replace(/\./g,"")},Na=function(t){try{return hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yI(t){return v0(void 0,t)}function v0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_I(n)||(t[n]=v0(t[n],e[n]));return t}function _I(t){return t!=="__proto__"}/**
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
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wI=()=>vI().__FIREBASE_DEFAULTS__,EI=()=>{if(typeof process>"u"||typeof fg>"u")return;const t=fg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Na(t[1]);return e&&JSON.parse(e)},df=()=>{try{return pI()||wI()||EI()||SI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=t=>{var e,n;return(n=(e=df())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},E0=t=>{const e=w0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S0=()=>{var t;return(t=df())==null?void 0:t.config},x0=t=>{var e;return(e=df())==null?void 0:e[`_${t}`]};/**
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
 */class ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function C0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ka(JSON.stringify(n)),ka(JSON.stringify(o)),""].join(".")}const Xs={};function xI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?t.emulator.push(e):t.prod.push(e);return t}function CI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pg=!1;function mf(t,e){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||Xs[t]===e||Xs[t]||pg)return;Xs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=xI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,N){g.setAttribute("width","24"),g.setAttribute("id",N),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{pg=!0,o()},g}function f(g,N){g.setAttribute("id",N),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=CI(r),N=n("text"),T=document.getElementById(N)||document.createElement("span"),P=n("learnmore"),L=document.getElementById(P)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;a(S),f(L,P);const D=h();u(v,w),S.append(v,T,L,D),document.body.appendChild(S)}s?(T.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function II(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kI(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T0(){return g0.NODE_ADMIN===!0}function NI(){try{return typeof indexedDB=="object"}catch{return!1}}function RI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const AI="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AI,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,a,r)}}function PI(t,e){return t.replace(bI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bI=/\{\$([^}]+)}/g;/**
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
 */function Io(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
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
 */const k0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Io(Na(s[0])||""),n=Io(Na(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},OI=function(t){const e=k0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DI=function(t){const e=k0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mg(s)&&mg(o)){if(!hr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mg(t){return t!==null&&typeof t=="object"}/**
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
 */function rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class LI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)r[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const g=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,f;for(let m=0;m<80;m++){m<40?m<20?(h=a^s&(o^a),f=1518500249):(h=s^o^a,f=1859775393):m<60?(h=s&o|a&(s|o),f=2400959708):(h=s^o^a,f=3395469782);const g=(i<<5|i>>>27)+h+u+f+r[m]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function MI(t,e){const n=new jI(t,e);return n.subscribe.bind(n)}class jI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}function UI(t,e){return`${t} failed: ${e} argument `}/**
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
 */const VI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,U(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ff;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===kr?void 0:t}function HI(t){return t.instantiationMode==="EAGER"}/**
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
 */class WI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const $I={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},GI=te.INFO,KI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const YI=(t,e)=>e.some(n=>t instanceof n);let gg,yg;function QI(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return yg||(yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,Lh=new WeakMap,R0=new WeakMap,Sc=new WeakMap,yf=new WeakMap;function JI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function ZI(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eT(t){Mh=t(Mh)}function tT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return R0.set(r,e.sort?e.sort():[e]),or(r)}:XI().includes(t)?function(...e){return t.apply(xc(this),e),or(N0.get(this))}:function(...e){return or(t.apply(xc(this),e))}}function nT(t){return typeof t=="function"?tT(t):(t instanceof IDBTransaction&&ZI(t),YI(t,QI())?new Proxy(t,Mh):t)}function or(t){if(t instanceof IDBRequest)return JI(t);if(Sc.has(t))return Sc.get(t);const e=nT(t);return e!==t&&(Sc.set(t,e),yf.set(e,t)),e}const xc=t=>yf.get(t);function rT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const iT=["get","getKey","getAll","getAllKeys","count"],sT=["put","add","delete","clear"],Cc=new Map;function _g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iT.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return Cc.set(e,s),s}eT(t=>({...t,get:(e,n,r)=>_g(e,n)||t.get(e,n,r),has:(e,n)=>!!_g(e,n)||t.has(e,n)}));/**
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
 */class oT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",vg="0.14.2";/**
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
 */const An=new du("@firebase/app"),aT="@firebase/app-compat",uT="@firebase/analytics-compat",cT="@firebase/analytics",hT="@firebase/app-check-compat",dT="@firebase/app-check",fT="@firebase/auth",pT="@firebase/auth-compat",mT="@firebase/database",gT="@firebase/data-connect",yT="@firebase/database-compat",_T="@firebase/functions",vT="@firebase/functions-compat",wT="@firebase/installations",ET="@firebase/installations-compat",ST="@firebase/messaging",xT="@firebase/messaging-compat",CT="@firebase/performance",IT="@firebase/performance-compat",TT="@firebase/remote-config",kT="@firebase/remote-config-compat",NT="@firebase/storage",RT="@firebase/storage-compat",AT="@firebase/firestore",PT="@firebase/ai",bT="@firebase/firestore-compat",OT="firebase",DT="12.2.0";/**
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
 */const Fh="[DEFAULT]",LT={[jh]:"fire-core",[aT]:"fire-core-compat",[cT]:"fire-analytics",[uT]:"fire-analytics-compat",[dT]:"fire-app-check",[hT]:"fire-app-check-compat",[fT]:"fire-auth",[pT]:"fire-auth-compat",[mT]:"fire-rtdb",[gT]:"fire-data-connect",[yT]:"fire-rtdb-compat",[_T]:"fire-fn",[vT]:"fire-fn-compat",[wT]:"fire-iid",[ET]:"fire-iid-compat",[ST]:"fire-fcm",[xT]:"fire-fcm-compat",[CT]:"fire-perf",[IT]:"fire-perf-compat",[TT]:"fire-rc",[kT]:"fire-rc-compat",[NT]:"fire-gcs",[RT]:"fire-gcs-compat",[AT]:"fire-fst",[bT]:"fire-fst-compat",[PT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const Aa=new Map,MT=new Map,Uh=new Map;function wg(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(Uh.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of Aa.values())wg(n,t);for(const n of MT.values())wg(n,t);return!0}function fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new Uo("app","Firebase",jT);/**
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
 */class FT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=DT;function A0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Fh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=S0()),!n)throw lr.create("no-options");const s=Aa.get(i);if(s){if(hr(n,s.options)&&hr(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new WI(i);for(const u of Uh.values())o.addComponent(u);const a=new FT(n,r,o);return Aa.set(i,a),a}function _f(t=Fh){const e=Aa.get(t);if(!e&&t===Fh&&S0())return A0();if(!e)throw lr.create("no-app",{appName:t});return e}function tn(t,e,n){let r=LT[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(o.join(" "));return}Wr(new dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UT="firebase-heartbeat-database",VT=1,To="firebase-heartbeat-store";let Ic=null;function P0(){return Ic||(Ic=rT(UT,VT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function zT(t){try{const n=(await P0()).transaction(To),r=await n.objectStore(To).get(b0(t));return await n.done,r}catch(e){if(e instanceof Ln)An.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Eg(t,e){try{const r=(await P0()).transaction(To,"readwrite");await r.objectStore(To).put(e,b0(t)),await r.done}catch(n){if(n instanceof Ln)An.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function b0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BT=1024,HT=30;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>HT){const o=KT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sg(),{heartbeatsToSend:r,unsentEntries:i}=$T(this._heartbeatsCache.heartbeats),s=ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function Sg(){return new Date().toISOString().substring(0,10)}function $T(t,e=BT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NI()?RI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xg(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}function KT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function qT(t){Wr(new dr("platform-logger",e=>new oT(e),"PRIVATE")),Wr(new dr("heartbeat",e=>new WT(e),"PRIVATE")),tn(jh,vg,t),tn(jh,vg,"esm2020"),tn("fire-js","")}qT("");function O0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YT=O0,D0=new Uo("auth","Firebase",O0());/**
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
 */const Pa=new du("@firebase/auth");function QT(t,...e){Pa.logLevel<=te.WARN&&Pa.warn(`Auth (${ti}): ${t}`,...e)}function Ql(t,...e){Pa.logLevel<=te.ERROR&&Pa.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw vf(t,...e)}function nn(t,...e){return vf(t,...e)}function L0(t,e,n){const r={...YT(),[e]:n};return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return L0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return D0.create(t,...e)}function H(t,e,...n){if(!t)throw vf(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Pn(t,e){t||_n(e)}/**
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
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function XT(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function JT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XT()||TI()||"connection"in navigator)?navigator.onLine:!0}function ZT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=gf()||I0()}get(){return JT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wf(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class M0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nk=new Vo(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vr(t,e,n,r,i={}){return j0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rs({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return II()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ei(t.emulatorConfig.host)&&(h.credentials="include"),M0.fetch()(await F0(t,t.config.apiHost,n,a),h)})}async function j0(t,e,n){t._canInitEmulator=!1;const r={...ek,...e};try{const i=new ik(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Al(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw L0(t,f,h);Ht(t,f)}}catch(i){if(i instanceof Ln)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function zo(t,e,n,r,i={}){const s=await vr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function F0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?wf(t.config,i):`${t.config.apiScheme}://${i}`;return tk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function rk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ik{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),nk.get())})}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function Ig(t){return t!==void 0&&t.enterprise!==void 0}class sk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ok(t,e){return vr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
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
 */async function lk(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function ba(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ak(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=Ef(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(Tc(i.auth_time)),issuedAtTime:Js(Tc(i.iat)),expirationTime:Js(Tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function Ef(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=Na(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tg(t){const e=Ef(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oa(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ko(t,ba(e,{idToken:n}));H(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?U0(i.providerUserInfo):[],o=dk(t.providerData,s),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function hk(t){const e=$t(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fk(t,e){const n=await j0(t,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await F0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&ei(t.emulatorConfig.host)&&(u.credentials="include"),M0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pk(t,e){return vr(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Tg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oi;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function zn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ak(this,e)}reload(){return hk(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await ko(this,lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:N,providerData:T,stsTokenManager:P}=n;H(m&&P,e,"internal-error");const L=Oi.fromJSON(this.name,P);H(typeof m=="string",e,"internal-error"),zn(r,e.name),zn(i,e.name),H(typeof g=="boolean",e,"internal-error"),H(typeof N=="boolean",e,"internal-error"),zn(s,e.name),zn(o,e.name),zn(a,e.name),zn(u,e.name),zn(h,e.name),zn(f,e.name);const w=new Lt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:N,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:L,createdAt:h,lastLoginAt:f});return T&&Array.isArray(T)&&(w.providerData=T.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oi;i.updateFromServerResponse(n);const s=new Lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Oi;a.updateFromIdToken(r);const u=new Lt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const kg=new Map;function vn(t){Pn(t instanceof Function,"Expected a class definition");let e=kg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kg.set(t,e),e)}/**
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
 */class V0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V0.type="NONE";const Ng=V0;/**
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
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ba(this.auth,{idToken:e}).catch(()=>{});return n?Lt._fromGetAccountInfoResponse(this.auth,n,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(vn(Ng),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vn(Ng);const o=Xl(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await ba(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Lt._fromGetAccountInfoResponse(e,g,f)}else m=Lt._fromJSON(e,f);h!==s&&(a=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Di(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Di(s,e,r))}}/**
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
 */function Rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G0(e))return"Blackberry";if(K0(e))return"Webos";if(B0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if($0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=tt()){return/firefox\//i.test(t)}function B0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=tt()){return/crios\//i.test(t)}function W0(t=tt()){return/iemobile/i.test(t)}function $0(t=tt()){return/android/i.test(t)}function G0(t=tt()){return/blackberry/i.test(t)}function K0(t=tt()){return/webos/i.test(t)}function Sf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mk(t=tt()){var e;return Sf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function gk(){return kI()&&document.documentMode===10}function q0(t=tt()){return Sf(t)||$0(t)||K0(t)||G0(t)||/windows phone/i.test(t)||W0(t)}/**
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
 */function Y0(t,e=[]){let n;switch(t){case"Browser":n=Rg(tt());break;case"Worker":n=`${Rg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _k(t,e={}){return vr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
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
 */const vk=6;class wk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ag(this),this.idTokenSubscription=new Ag(this),this.beforeStateQueue=new yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ba(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(xn(this));const n=e?$t(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _k(this),n=new wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&QT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ni(t){return $t(t)}class Ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=MI(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sk(t){pu=t}function Q0(t){return pu.loadJS(t)}function xk(){return pu.recaptchaEnterpriseScript}function Ck(){return pu.gapiScript}function Ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Tk{constructor(){this.enterprise=new kk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Nk="recaptcha-enterprise",X0="NO_RECAPTCHA";class Rk{constructor(e){this.type=Nk,this.auth=ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ok(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new sk(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Ig(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(X0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ig(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xk();u.length!==0&&(u+=a),Q0(u).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Pg(t,e,n,r=!1,i=!1){const s=new Rk(t);let o;if(i)o=X0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Bh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Pg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function Ak(t,e){const n=fu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hr(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function Pk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bk(t,e,n){const r=ni(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=J0(e),{host:o,port:a}=Ok(e),u=a===null?"":`:${a}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(hr(h,r.config.emulator)&&hr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ei(o)?(pf(`${s}//${o}${u}`),mf("Auth",!0)):Dk()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ok(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function Lk(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Mk(t,e){return zo(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
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
 */async function jk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function Fk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
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
 */class No extends xf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,n,"signInWithPassword",Mk);case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,r,"signUpPassword",Lk);case"emailLink":return Fk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(t,e){return zo(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
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
 */const Uk="http://localhost";class $r extends xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:Uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rs(n)}return e}}/**
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
 */function Vk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zk(t){const e=Vs(zs(t)).link,n=e?Vs(zs(e)).deep_link_id:null,r=Vs(zs(t)).deep_link_id;return(r?Vs(zs(r)).link:null)||r||n||e||t}class Cf{constructor(e){const n=Vs(zs(e)),r=n.apiKey??null,i=n.oobCode??null,s=Vk(n.mode??null);H(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=zk(e);try{return new Cf(n)}catch{return null}}}/**
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
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cf.parseLink(n);return H(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Z0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends Z0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Bo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class qn extends Bo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Bo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function Bk(t,e){return zo(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lt._fromIdTokenResponse(e,r,i),o=Og(r);return new Gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Og(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Da extends Ln{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Da(e,n,r,i)}}function ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,s,e,r):s})}async function Hk(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function Wk(t,e,n=!1){const{auth:r}=t;if(ht(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await ko(t,ew(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Ef(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
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
 */async function tw(t,e,n=!1){if(ht(t.app))return Promise.reject(xn(t));const r="signIn",i=await ew(t,r,e),s=await Gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $k(t,e){return tw(ni(t),e)}/**
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
 */async function nw(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gk(t,e,n){if(ht(t.app))return Promise.reject(xn(t));const r=ni(t),o=await Bh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&nw(t),u}),a=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Kk(t,e,n){return ht(t.app)?Promise.reject(xn(t)):$k($t(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nw(t),r})}function qk(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function Yk(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}function Qk(t,e,n,r){return $t(t).onAuthStateChanged(e,n,r)}function Xk(t){return $t(t).signOut()}const La="__sak";/**
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
 */class rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jk=1e3,Zk=10;class iw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const e2=iw;/**
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
 */class sw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sw.type="SESSION";const ow=sw;/**
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
 */function t2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await t2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mu.receivers=[];/**
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
 */function If(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class n2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=If("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function r2(t){rn().location.href=t}/**
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
 */function lw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function i2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function o2(){return lw()?self:null}/**
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
 */const aw="firebaseLocalStorageDb",l2=1,Ma="firebaseLocalStorage",uw="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gu(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function a2(){const t=indexedDB.deleteDatabase(aw);return new Ho(t).toPromise()}function Hh(){const t=indexedDB.open(aw,l2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ma,{keyPath:uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ma)?e(r):(r.close(),await a2(),e(await Hh()))})})}async function Dg(t,e,n){const r=gu(t,!0).put({[uw]:e,value:n});return new Ho(r).toPromise()}async function u2(t,e){const n=gu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function Lg(t,e){const n=gu(t,!0).delete(e);return new Ho(n).toPromise()}const c2=800,h2=3;class cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mu._getInstance(o2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await i2(),!this.activeServiceWorker)return;this.sender=new n2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await Dg(e,La,"1"),await Lg(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gu(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cw.type="LOCAL";const d2=cw;new Vo(3e4,6e4);/**
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
 */function f2(t,e){return e?vn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tf extends xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p2(t){return tw(t.auth,new Tf(t),t.bypassAuthState)}function m2(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Wk(n,new Tf(t),t.bypassAuthState)}async function g2(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Hk(n,new Tf(t),t.bypassAuthState)}/**
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
 */class hw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p2;case"linkViaPopup":case"linkViaRedirect":return g2;case"reauthViaPopup":case"reauthViaRedirect":return m2;default:Ht(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const y2=new Vo(2e3,1e4);class Ci extends hw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y2.get())};e()}}Ci.currentPopupAction=null;/**
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
 */const _2="pendingRedirect",Jl=new Map;class v2 extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await w2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w2(t,e){const n=x2(e),r=S2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function E2(t,e){Jl.set(t._key(),e)}function S2(t){return vn(t._redirectPersistence)}function x2(t){return Xl(_2,t.config.apiKey,t.name)}async function C2(t,e,n=!1){if(ht(t.app))return Promise.reject(xn(t));const r=ni(t),i=f2(r,e),o=await new v2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const I2=10*60*1e3;class T2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(t);default:return!1}}/**
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
 */async function N2(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
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
 */const R2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A2=/^https?/;async function P2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N2(t);for(const n of e)try{if(b2(n))return}catch{}Ht(t,"unauthorized-domain")}function b2(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A2.test(n))return!1;if(R2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const O2=new Vo(3e4,6e4);function jg(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function D2(t){return new Promise((e,n)=>{var i,s,o;function r(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),n(nn(t,"network-request-failed"))},timeout:O2.get()})}if((s=(i=rn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=rn().gapi)!=null&&o.load)r();else{const a=Ik("iframefcb");return rn()[a]=()=>{gapi.load?r():n(nn(t,"network-request-failed"))},Q0(`${Ck()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function L2(t){return Zl=Zl||D2(t),Zl}/**
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
 */const M2=new Vo(5e3,15e3),j2="__/auth/iframe",F2="emulator/auth/iframe",U2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z2(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wf(e,F2):`https://${t.config.authDomain}/${j2}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=V2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rs(r).slice(1)}`}async function B2(t){const e=await L2(t),n=rn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:z2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},M2.get());function u(){rn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const H2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W2=500,$2=600,G2="_blank",K2="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q2(t,e,n,r=W2,i=$2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...H2,width:r.toString(),height:i.toString(),top:s,left:o},h=tt().toLowerCase();n&&(a=H0(h)?G2:n),z0(h)&&(e=e||K2,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[N,T])=>`${g}${N}=${T},`,"");if(mk(h)&&a!=="_self")return Y2(e||"",a),new Fg(null);const m=window.open(e||"",a,f);H(m,t,"popup-blocked");try{m.focus()}catch{}return new Fg(m)}function Y2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q2="__/auth/handler",X2="emulator/auth/handler",J2=encodeURIComponent("fac");async function Ug(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof Z0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Bo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),h=u?`#${J2}=${encodeURIComponent(u)}`:"";return`${Z2(t)}?${rs(a).slice(1)}${h}`}function Z2({config:t}){return t.emulator?wf(t,X2):`https://${t.authDomain}/${Q2}`}/**
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
 */const kc="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=C2,this._overrideRedirectResult=E2}async _openPopup(e,n,r,i){var o;Pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ug(e,n,r,Vh(),i);return q2(e,s,If())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ug(e,n,r,Vh(),i);return r2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B2(e),r=new T2(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[kc];s!==void 0&&n(!!s),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q0()||B0()||Sf()}}const tN=eN;var Vg="@firebase/auth",zg="1.11.0";/**
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
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iN(t){Wr(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y0(t)},h=new Ek(r,i,s,u);return Pk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new dr("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Vg,zg,rN(t)),tn(Vg,zg,"esm2020")}/**
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
 */const sN=5*60,oN=x0("authIdTokenMaxAge")||sN;let Bg=null;const lN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const i=n==null?void 0:n.token;Bg!==i&&(Bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aN(t=_f()){const e=fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ak(t,{popupRedirectResolver:tN,persistence:[d2,e2,ow]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lN(s.toString());Yk(n,o,()=>o(n.currentUser)),qk(n,a=>o(a))}}const i=w0("auth");return i&&bk(n,`http://${i}`),n}function uN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iN("Browser");var cN="firebase",hN="12.2.1";/**
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
 */tn(cN,hN,"app");var Hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,_){function E(){}E.prototype=_.prototype,x.D=_.prototype,x.prototype=new E,x.prototype.constructor=x,x.C=function(C,k,A){for(var I=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)I[_t-2]=arguments[_t];return _.prototype[k].apply(C,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,_,E){E||(E=0);var C=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)C[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;16>k;++k)C[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=x.g[0],E=x.g[1],k=x.g[2];var A=x.g[3],I=_+(A^E&(k^A))+C[0]+3614090360&4294967295;_=E+(I<<7&4294967295|I>>>25),I=A+(k^_&(E^k))+C[1]+3905402710&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(E^A&(_^E))+C[2]+606105819&4294967295,k=A+(I<<17&4294967295|I>>>15),I=E+(_^k&(A^_))+C[3]+3250441966&4294967295,E=k+(I<<22&4294967295|I>>>10),I=_+(A^E&(k^A))+C[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=A+(k^_&(E^k))+C[5]+1200080426&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(E^A&(_^E))+C[6]+2821735955&4294967295,k=A+(I<<17&4294967295|I>>>15),I=E+(_^k&(A^_))+C[7]+4249261313&4294967295,E=k+(I<<22&4294967295|I>>>10),I=_+(A^E&(k^A))+C[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=A+(k^_&(E^k))+C[9]+2336552879&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(E^A&(_^E))+C[10]+4294925233&4294967295,k=A+(I<<17&4294967295|I>>>15),I=E+(_^k&(A^_))+C[11]+2304563134&4294967295,E=k+(I<<22&4294967295|I>>>10),I=_+(A^E&(k^A))+C[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=A+(k^_&(E^k))+C[13]+4254626195&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(E^A&(_^E))+C[14]+2792965006&4294967295,k=A+(I<<17&4294967295|I>>>15),I=E+(_^k&(A^_))+C[15]+1236535329&4294967295,E=k+(I<<22&4294967295|I>>>10),I=_+(k^A&(E^k))+C[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=A+(E^k&(_^E))+C[6]+3225465664&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^E&(A^_))+C[11]+643717713&4294967295,k=A+(I<<14&4294967295|I>>>18),I=E+(A^_&(k^A))+C[0]+3921069994&4294967295,E=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(E^k))+C[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=A+(E^k&(_^E))+C[10]+38016083&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^E&(A^_))+C[15]+3634488961&4294967295,k=A+(I<<14&4294967295|I>>>18),I=E+(A^_&(k^A))+C[4]+3889429448&4294967295,E=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(E^k))+C[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=A+(E^k&(_^E))+C[14]+3275163606&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^E&(A^_))+C[3]+4107603335&4294967295,k=A+(I<<14&4294967295|I>>>18),I=E+(A^_&(k^A))+C[8]+1163531501&4294967295,E=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(E^k))+C[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=A+(E^k&(_^E))+C[2]+4243563512&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^E&(A^_))+C[7]+1735328473&4294967295,k=A+(I<<14&4294967295|I>>>18),I=E+(A^_&(k^A))+C[12]+2368359562&4294967295,E=k+(I<<20&4294967295|I>>>12),I=_+(E^k^A)+C[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=A+(_^E^k)+C[8]+2272392833&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^E)+C[11]+1839030562&4294967295,k=A+(I<<16&4294967295|I>>>16),I=E+(k^A^_)+C[14]+4259657740&4294967295,E=k+(I<<23&4294967295|I>>>9),I=_+(E^k^A)+C[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=A+(_^E^k)+C[4]+1272893353&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^E)+C[7]+4139469664&4294967295,k=A+(I<<16&4294967295|I>>>16),I=E+(k^A^_)+C[10]+3200236656&4294967295,E=k+(I<<23&4294967295|I>>>9),I=_+(E^k^A)+C[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=A+(_^E^k)+C[0]+3936430074&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^E)+C[3]+3572445317&4294967295,k=A+(I<<16&4294967295|I>>>16),I=E+(k^A^_)+C[6]+76029189&4294967295,E=k+(I<<23&4294967295|I>>>9),I=_+(E^k^A)+C[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=A+(_^E^k)+C[12]+3873151461&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^E)+C[15]+530742520&4294967295,k=A+(I<<16&4294967295|I>>>16),I=E+(k^A^_)+C[2]+3299628645&4294967295,E=k+(I<<23&4294967295|I>>>9),I=_+(k^(E|~A))+C[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=A+(E^(_|~k))+C[7]+1126891415&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~E))+C[14]+2878612391&4294967295,k=A+(I<<15&4294967295|I>>>17),I=E+(A^(k|~_))+C[5]+4237533241&4294967295,E=k+(I<<21&4294967295|I>>>11),I=_+(k^(E|~A))+C[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=A+(E^(_|~k))+C[3]+2399980690&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~E))+C[10]+4293915773&4294967295,k=A+(I<<15&4294967295|I>>>17),I=E+(A^(k|~_))+C[1]+2240044497&4294967295,E=k+(I<<21&4294967295|I>>>11),I=_+(k^(E|~A))+C[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=A+(E^(_|~k))+C[15]+4264355552&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~E))+C[6]+2734768916&4294967295,k=A+(I<<15&4294967295|I>>>17),I=E+(A^(k|~_))+C[13]+1309151649&4294967295,E=k+(I<<21&4294967295|I>>>11),I=_+(k^(E|~A))+C[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=A+(E^(_|~k))+C[11]+3174756917&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~E))+C[2]+718787259&4294967295,k=A+(I<<15&4294967295|I>>>17),I=E+(A^(k|~_))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+_&4294967295,x.g[1]=x.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+A&4294967295}r.prototype.u=function(x,_){_===void 0&&(_=x.length);for(var E=_-this.blockSize,C=this.B,k=this.h,A=0;A<_;){if(k==0)for(;A<=E;)i(this,x,A),A+=this.blockSize;if(typeof x=="string"){for(;A<_;)if(C[k++]=x.charCodeAt(A++),k==this.blockSize){i(this,C),k=0;break}}else for(;A<_;)if(C[k++]=x[A++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var _=1;_<x.length-8;++_)x[_]=0;var E=8*this.o;for(_=x.length-8;_<x.length;++_)x[_]=E&255,E/=256;for(this.u(x),x=Array(16),_=E=0;4>_;++_)for(var C=0;32>C;C+=8)x[E++]=this.g[_]>>>C&255;return x};function s(x,_){var E=a;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=_(x)}function o(x,_){this.h=_;for(var E=[],C=!0,k=x.length-1;0<=k;k--){var A=x[k]|0;C&&A==_||(E[k]=A,C=!1)}this.g=E}var a={};function u(x){return-128<=x&&128>x?s(x,function(_){return new o([_|0],0>_?-1:0)}):new o([x|0],0>x?-1:0)}function h(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return L(h(-x));for(var _=[],E=1,C=0;x>=E;C++)_[C]=x/E|0,E*=4294967296;return new o(_,0)}function f(x,_){if(x.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(x.charAt(0)=="-")return L(f(x.substring(1),_));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),C=m,k=0;k<x.length;k+=8){var A=Math.min(8,x.length-k),I=parseInt(x.substring(k,k+A),_);8>A?(A=h(Math.pow(_,A)),C=C.j(A).add(h(I))):(C=C.j(E),C=C.add(h(I)))}return C}var m=u(0),g=u(1),N=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-L(this).m();for(var x=0,_=1,E=0;E<this.g.length;E++){var C=this.i(E);x+=(0<=C?C:4294967296+C)*_,_*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(T(this))return"0";if(P(this))return"-"+L(this).toString(x);for(var _=h(Math.pow(x,6)),E=this,C="";;){var k=D(E,_).g;E=w(E,k.j(_));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(x);if(E=k,T(E))return A+C;for(;6>A.length;)A="0"+A;C=A+C}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function T(x){if(x.h!=0)return!1;for(var _=0;_<x.g.length;_++)if(x.g[_]!=0)return!1;return!0}function P(x){return x.h==-1}t.l=function(x){return x=w(this,x),P(x)?-1:T(x)?0:1};function L(x){for(var _=x.g.length,E=[],C=0;C<_;C++)E[C]=~x.g[C];return new o(E,~x.h).add(g)}t.abs=function(){return P(this)?L(this):this},t.add=function(x){for(var _=Math.max(this.g.length,x.g.length),E=[],C=0,k=0;k<=_;k++){var A=C+(this.i(k)&65535)+(x.i(k)&65535),I=(A>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);C=I>>>16,A&=65535,I&=65535,E[k]=I<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(x,_){return x.add(L(_))}t.j=function(x){if(T(this)||T(x))return m;if(P(this))return P(x)?L(this).j(L(x)):L(L(this).j(x));if(P(x))return L(this.j(L(x)));if(0>this.l(N)&&0>x.l(N))return h(this.m()*x.m());for(var _=this.g.length+x.g.length,E=[],C=0;C<2*_;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<x.g.length;k++){var A=this.i(C)>>>16,I=this.i(C)&65535,_t=x.i(k)>>>16,wr=x.i(k)&65535;E[2*C+2*k]+=I*wr,v(E,2*C+2*k),E[2*C+2*k+1]+=A*wr,v(E,2*C+2*k+1),E[2*C+2*k+1]+=I*_t,v(E,2*C+2*k+1),E[2*C+2*k+2]+=A*_t,v(E,2*C+2*k+2)}for(C=0;C<_;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=_;C<2*_;C++)E[C]=0;return new o(E,0)};function v(x,_){for(;(x[_]&65535)!=x[_];)x[_+1]+=x[_]>>>16,x[_]&=65535,_++}function S(x,_){this.g=x,this.h=_}function D(x,_){if(T(_))throw Error("division by zero");if(T(x))return new S(m,m);if(P(x))return _=D(L(x),_),new S(L(_.g),L(_.h));if(P(_))return _=D(x,L(_)),new S(L(_.g),_.h);if(30<x.g.length){if(P(x)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,C=_;0>=C.l(x);)E=j(E),C=j(C);var k=V(E,1),A=V(C,1);for(C=V(C,2),E=V(E,2);!T(C);){var I=A.add(C);0>=I.l(x)&&(k=k.add(E),A=I),C=V(C,1),E=V(E,1)}return _=w(x,k.j(_)),new S(k,_)}for(k=m;0<=x.l(_);){for(E=Math.max(1,Math.floor(x.m()/_.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),A=h(E),I=A.j(_);P(I)||0<I.l(x);)E-=C,A=h(E),I=A.j(_);T(A)&&(A=g),k=k.add(A),x=w(x,I)}return new S(k,x)}t.A=function(x){return D(this,x).h},t.and=function(x){for(var _=Math.max(this.g.length,x.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)&x.i(C);return new o(E,this.h&x.h)},t.or=function(x){for(var _=Math.max(this.g.length,x.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)|x.i(C);return new o(E,this.h|x.h)},t.xor=function(x){for(var _=Math.max(this.g.length,x.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)^x.i(C);return new o(E,this.h^x.h)};function j(x){for(var _=x.g.length+1,E=[],C=0;C<_;C++)E[C]=x.i(C)<<1|x.i(C-1)>>>31;return new o(E,x.h)}function V(x,_){var E=_>>5;_%=32;for(var C=x.g.length-E,k=[],A=0;A<C;A++)k[A]=0<_?x.i(A+E)>>>_|x.i(A+E+1)<<32-_:x.i(A+E);return new o(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,kf=o}).apply(typeof Hg<"u"?Hg:typeof self<"u"?self:typeof window<"u"?window:{});var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,d){return l==Array.prototype||l==Object.prototype||(l[c]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pl=="object"&&Pl];for(var c=0;c<l.length;++c){var d=l[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var d=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var R=l[y];if(!(R in d))break e;d=d[R]}l=l[l.length-1],y=d[l],c=c(y),c!=y&&c!=null&&e(d,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var d=0,y=!1,R={next:function(){if(!y&&d<l.length){var b=d++;return{value:c(b,l[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function f(l,c,d){return l.call.apply(l.bind,arguments)}function m(l,c,d){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),l.apply(c,R)}}return function(){return l.apply(c,arguments)}}function g(l,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function N(l,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,c){function d(){}d.prototype=c.prototype,l.aa=c.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(y,R,b){for(var F=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)F[oe-2]=arguments[oe];return c.prototype[R].apply(y,F)}}function P(l){const c=l.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=l[y];return d}return[]}function L(l,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const R=l.length||0,b=y.length||0;l.length=R+b;for(let F=0;F<b;F++)l[R+F]=y[F]}else l.push(y)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(l,c,d){for(const y in l)c.call(d,l[y],y,l)}function x(l,c){for(const d in l)c.call(void 0,l[d],d,l)}function _(l){const c={};for(const d in l)c[d]=l[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,c){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)l[d]=y[d];for(let b=0;b<E.length;b++)d=E[b],Object.prototype.hasOwnProperty.call(y,d)&&(l[d]=y[d])}}function k(l){var c=1;l=l.split(":");const d=[];for(;0<c&&l.length;)d.push(l.shift()),c--;return l.length&&d.push(l.join(":")),d}function A(l){a.setTimeout(()=>{throw l},0)}function I(){var l=W;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class _t{constructor(){this.h=this.g=null}add(c,d){const y=wr.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var wr=new w(()=>new us,l=>l.reset());class us{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let on,z=!1,W=new _t,$=()=>{const l=a.Promise.resolve(void 0);on=()=>{l.then(ye)}};var ye=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(d){A(d)}var c=wr;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return l}();function an(l,c){if(Se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(j){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=l.fromElement:d=="mouseout"&&(c=l.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:un[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&an.aa.h.call(this)}}T(an,Se);var un={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),z1=0;function B1(l,c,d,y,R){this.listener=l,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=R,this.key=++z1,this.da=this.fa=!1}function Xo(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jo(l){this.src=l,this.g={},this.h=0}Jo.prototype.add=function(l,c,d,y,R){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var F=xu(l,c,y,R);return-1<F?(c=l[F],d||(c.fa=!1)):(c=new B1(c,this.src,b,!!y,R),c.fa=d,l.push(c)),c};function Su(l,c){var d=c.type;if(d in l.g){var y=l.g[d],R=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=R)&&Array.prototype.splice.call(y,R,1),b&&(Xo(c),l.g[d].length==0&&(delete l.g[d],l.h--))}}function xu(l,c,d,y){for(var R=0;R<l.length;++R){var b=l[R];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==y)return R}return-1}var Cu="closure_lm_"+(1e6*Math.random()|0),Iu={};function np(l,c,d,y,R){if(Array.isArray(c)){for(var b=0;b<c.length;b++)np(l,c[b],d,y,R);return null}return d=sp(d),l&&l[cn]?l.K(c,d,h(y)?!!y.capture:!!y,R):H1(l,c,d,!1,y,R)}function H1(l,c,d,y,R,b){if(!c)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,oe=ku(l);if(oe||(l[Cu]=oe=new Jo(l)),d=oe.add(c,d,y,F,b),d.proxy)return d;if(y=W1(),d.proxy=y,y.src=l,y.listener=d,l.addEventListener)ln||(R=F),R===void 0&&(R=!1),l.addEventListener(c.toString(),y,R);else if(l.attachEvent)l.attachEvent(ip(c.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function W1(){function l(d){return c.call(l.src,l.listener,d)}const c=$1;return l}function rp(l,c,d,y,R){if(Array.isArray(c))for(var b=0;b<c.length;b++)rp(l,c[b],d,y,R);else y=h(y)?!!y.capture:!!y,d=sp(d),l&&l[cn]?(l=l.i,c=String(c).toString(),c in l.g&&(b=l.g[c],d=xu(b,d,y,R),-1<d&&(Xo(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete l.g[c],l.h--)))):l&&(l=ku(l))&&(c=l.g[c.toString()],l=-1,c&&(l=xu(c,d,y,R)),(d=-1<l?c[l]:null)&&Tu(d))}function Tu(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[cn])Su(c.i,l);else{var d=l.type,y=l.proxy;c.removeEventListener?c.removeEventListener(d,y,l.capture):c.detachEvent?c.detachEvent(ip(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=ku(c))?(Su(d,l),d.h==0&&(d.src=null,c[Cu]=null)):Xo(l)}}}function ip(l){return l in Iu?Iu[l]:Iu[l]="on"+l}function $1(l,c){if(l.da)l=!0;else{c=new an(c,this);var d=l.listener,y=l.ha||l.src;l.fa&&Tu(l),l=d.call(y,c)}return l}function ku(l){return l=l[Cu],l instanceof Jo?l:null}var Nu="__closure_events_fn_"+(1e9*Math.random()>>>0);function sp(l){return typeof l=="function"?l:(l[Nu]||(l[Nu]=function(c){return l.handleEvent(c)}),l[Nu])}function Ve(){se.call(this),this.i=new Jo(this),this.M=this,this.F=null}T(Ve,se),Ve.prototype[cn]=!0,Ve.prototype.removeEventListener=function(l,c,d,y){rp(this,l,c,d,y)};function Qe(l,c){var d,y=l.F;if(y)for(d=[];y;y=y.F)d.push(y);if(l=l.M,y=c.type||c,typeof c=="string")c=new Se(c,l);else if(c instanceof Se)c.target=c.target||l;else{var R=c;c=new Se(y,l),C(c,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var F=c.g=d[b];R=Zo(F,y,!0,c)&&R}if(F=c.g=l,R=Zo(F,y,!0,c)&&R,R=Zo(F,y,!1,c)&&R,d)for(b=0;b<d.length;b++)F=c.g=d[b],R=Zo(F,y,!1,c)&&R}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var d=l.g[c],y=0;y<d.length;y++)Xo(d[y]);delete l.g[c],l.h--}}this.F=null},Ve.prototype.K=function(l,c,d,y){return this.i.add(String(l),c,!1,d,y)},Ve.prototype.L=function(l,c,d,y){return this.i.add(String(l),c,!0,d,y)};function Zo(l,c,d,y){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,b=0;b<c.length;++b){var F=c[b];if(F&&!F.da&&F.capture==d){var oe=F.listener,Le=F.ha||F.src;F.fa&&Su(l.i,F),R=oe.call(Le,y)!==!1&&R}}return R&&!y.defaultPrevented}function op(l,c,d){if(typeof l=="function")d&&(l=g(l,d));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function lp(l){l.g=op(()=>{l.g=null,l.i&&(l.i=!1,lp(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class G1 extends se{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lp(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(l){se.call(this),this.h=l,this.g={}}T(cs,se);var ap=[];function up(l){V(l.g,function(c,d){this.g.hasOwnProperty(d)&&Tu(c)},l),l.g={}}cs.prototype.N=function(){cs.aa.N.call(this),up(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ru=a.JSON.stringify,K1=a.JSON.parse,q1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Au(){}Au.prototype.h=null;function cp(l){return l.h||(l.h=l.i())}function Y1(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pu(){Se.call(this,"d")}T(Pu,Se);function bu(){Se.call(this,"c")}T(bu,Se);var si={},hp=null;function Ou(){return hp=hp||new Ve}si.La="serverreachability";function dp(l){Se.call(this,si.La,l)}T(dp,Se);function ds(l){const c=Ou();Qe(c,new dp(c))}si.STAT_EVENT="statevent";function fp(l,c){Se.call(this,si.STAT_EVENT,l),this.stat=c}T(fp,Se);function Xe(l){const c=Ou();Qe(c,new fp(c,l))}si.Ma="timingevent";function pp(l,c){Se.call(this,si.Ma,l),this.size=c}T(pp,Se);function fs(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function Q1(l,c,d,y,R,b){l.info(function(){if(l.g)if(b)for(var F="",oe=b.split("&"),Le=0;Le<oe.length;Le++){var ee=oe[Le].split("=");if(1<ee.length){var ze=ee[0];ee=ee[1];var Be=ze.split("_");F=2<=Be.length&&Be[1]=="type"?F+(ze+"="+ee+"&"):F+(ze+"=redacted&")}}else F=null;else F=b;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function X1(l,c,d,y,R,b,F){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+c+`
`+d+`
`+b+" "+F})}function oi(l,c,d,y){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+Z1(l,d)+(y?" "+y:"")})}function J1(l,c){l.info(function(){return"TIMEOUT: "+c})}ps.prototype.info=function(){};function Z1(l,c){if(!l.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var y=d[l];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Ru(d)}catch{return c}}var Du={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eE={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lu;function el(){}T(el,Au),el.prototype.g=function(){return new XMLHttpRequest},el.prototype.i=function(){return{}},Lu=new el;function jn(l,c,d,y){this.j=l,this.i=c,this.l=d,this.R=y||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mp}function mp(){this.i=null,this.g="",this.h=!1}var gp={},Mu={};function ju(l,c,d){l.L=1,l.v=il(hn(c)),l.m=d,l.P=!0,yp(l,null)}function yp(l,c){l.F=Date.now(),tl(l),l.A=hn(l.v);var d=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Pp(d.i,"t",y),l.C=0,d=l.j.J,l.h=new mp,l.g=Yp(l.j,d?c:null,!l.m),0<l.O&&(l.M=new G1(g(l.Y,l,l.g),l.O)),c=l.U,d=l.g,y=l.ca;var R="readystatechange";Array.isArray(R)||(R&&(ap[0]=R.toString()),R=ap);for(var b=0;b<R.length;b++){var F=np(d,R[b],y||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),ds(),Q1(l.i,l.u,l.A,l.l,l.R,l.m)}jn.prototype.ca=function(l){l=l.target;const c=this.M;c&&dn(l)==3?c.j():this.Y(l)},jn.prototype.Y=function(l){try{if(l==this.g)e:{const Be=dn(this.g);var c=this.g.Ba();const ui=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||Fp(this.g)))){this.J||Be!=4||c==7||(c==8||0>=ui?ds(3):ds(2)),Fu(this);var d=this.g.Z();this.X=d;t:if(_p(this)){var y=Fp(this.g);l="";var R=y.length,b=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),ms(this);var F="";break t}this.h.i=new a.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,l+=this.h.i.decode(y[c],{stream:!(b&&c==R-1)});y.length=0,this.h.g+=l,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,X1(this.i,this.u,this.A,this.l,this.R,Be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Le=this.g;if((oe=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(oe)){var ee=oe;break t}}ee=null}if(d=ee)oi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uu(this,d);else{this.o=!1,this.s=3,Xe(12),Er(this),ms(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<F.length;)if(Nt=tE(this,F),Nt==Mu){Be==4&&(this.s=4,Xe(14),d=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==gp){this.s=4,Xe(15),oi(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else oi(this.i,this.l,Nt,null),Uu(this,Nt);if(_p(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||F.length!=0||this.h.h||(this.s=1,Xe(16),d=!1),this.o=this.o&&d,!d)oi(this.i,this.l,F,"[Invalid Chunked Response]"),Er(this),ms(this);else if(0<F.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),$u(ze),ze.M=!0,Xe(11))}}else oi(this.i,this.l,F,null),Uu(this,F);Be==4&&Er(this),this.o&&!this.J&&(Be==4?$p(this.j,this):(this.o=!1,tl(this)))}else _E(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),Er(this),ms(this)}}}catch{}finally{}};function _p(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tE(l,c){var d=l.C,y=c.indexOf(`
`,d);return y==-1?Mu:(d=Number(c.substring(d,y)),isNaN(d)?gp:(y+=1,y+d>c.length?Mu:(c=c.slice(y,y+d),l.C=y+d,c)))}jn.prototype.cancel=function(){this.J=!0,Er(this)};function tl(l){l.S=Date.now()+l.I,vp(l,l.I)}function vp(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=fs(g(l.ba,l),c)}function Fu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}jn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(J1(this.i,this.A),this.L!=2&&(ds(),Xe(17)),Er(this),this.s=2,ms(this)):vp(this,this.S-l)};function ms(l){l.j.G==0||l.J||$p(l.j,l)}function Er(l){Fu(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,up(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function Uu(l,c){try{var d=l.j;if(d.G!=0&&(d.g==l||Vu(d.h,l))){if(!l.K&&Vu(d.h,l)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)cl(d),al(d);else break e;Wu(d),Xe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=fs(g(d.Za,d),6e3));if(1>=Sp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xr(d,11)}else if((l.K||d.g==l)&&cl(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ee=R[c];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const ze=ee[3];ze!=null&&(d.la=ze,d.j.info("VER="+d.la));const Be=ee[4];Be!=null&&(d.Aa=Be,d.j.info("SVER="+d.Aa));const ui=ee[5];ui!=null&&typeof ui=="number"&&0<ui&&(y=1.5*ui,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Nt=l.g;if(Nt){const hl=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var b=y.h;b.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(zu(b,b.h),b.h=null))}if(y.D){const Gu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(y.ya=Gu,ae(y.I,y.D,Gu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var F=l;if(y.qa=qp(y,y.J?y.ia:null,y.W),F.K){xp(y.h,F);var oe=F,Le=y.L;Le&&(oe.I=Le),oe.B&&(Fu(oe),tl(oe)),y.g=F}else Hp(y);0<d.i.length&&ul(d)}else ee[0]!="stop"&&ee[0]!="close"||xr(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?xr(d,7):Hu(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}ds(4)}catch{}}var nE=class{constructor(l,c){this.g=l,this.map=c}};function wp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ep(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sp(l){return l.h?1:l.g?l.g.size:0}function Vu(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function zu(l,c){l.g?l.g.add(c):l.h=c}function xp(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}wp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const d of l.g.values())c=c.concat(d.D);return c}return P(l.i)}function rE(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],d=l.length,y=0;y<d;y++)c.push(l[y]);return c}c=[],d=0;for(y in l)c[d++]=l[y];return c}function iE(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var d=0;d<l;d++)c.push(d);return c}c=[],d=0;for(const y in l)c[d++]=y;return c}}}function Ip(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var d=iE(l),y=rE(l),R=y.length,b=0;b<R;b++)c.call(void 0,y[b],d&&d[b],l)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sE(l,c){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var y=l[d].indexOf("="),R=null;if(0<=y){var b=l[d].substring(0,y);R=l[d].substring(y+1)}else b=l[d];c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Sr){this.h=l.h,nl(this,l.j),this.o=l.o,this.g=l.g,rl(this,l.s),this.l=l.l;var c=l.i,d=new _s;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),kp(this,d),this.m=l.m}else l&&(c=String(l).match(Tp))?(this.h=!1,nl(this,c[1]||"",!0),this.o=gs(c[2]||""),this.g=gs(c[3]||"",!0),rl(this,c[4]),this.l=gs(c[5]||"",!0),kp(this,c[6]||"",!0),this.m=gs(c[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}Sr.prototype.toString=function(){var l=[],c=this.j;c&&l.push(ys(c,Np,!0),":");var d=this.g;return(d||c=="file")&&(l.push("//"),(c=this.o)&&l.push(ys(c,Np,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(ys(d,d.charAt(0)=="/"?aE:lE,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",ys(d,cE)),l.join("")};function hn(l){return new Sr(l)}function nl(l,c,d){l.j=d?gs(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function rl(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function kp(l,c,d){c instanceof _s?(l.i=c,hE(l.i,l.h)):(d||(c=ys(c,uE)),l.i=new _s(c,l.h))}function ae(l,c,d){l.i.set(c,d)}function il(l){return ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function gs(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ys(l,c,d){return typeof l=="string"?(l=encodeURI(l).replace(c,oE),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function oE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Np=/[#\/\?@]/g,lE=/[#\?:]/g,aE=/[#\?]/g,uE=/[#\?@]/g,cE=/#/g;function _s(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&sE(l.i,function(c,d){l.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=_s.prototype,t.add=function(l,c){Fn(this),this.i=null,l=li(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(c),this.h+=1,this};function Rp(l,c){Fn(l),c=li(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function Ap(l,c){return Fn(l),c=li(l,c),l.g.has(c)}t.forEach=function(l,c){Fn(this),this.g.forEach(function(d,y){d.forEach(function(R){l.call(c,R,y,this)},this)},this)},t.na=function(){Fn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const R=l[y];for(let b=0;b<R.length;b++)d.push(c[y])}return d},t.V=function(l){Fn(this);let c=[];if(typeof l=="string")Ap(this,l)&&(c=c.concat(this.g.get(li(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)c=c.concat(l[d])}return c},t.set=function(l,c){return Fn(this),this.i=null,l=li(this,l),Ap(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function Pp(l,c,d){Rp(l,c),0<d.length&&(l.i=null,l.g.set(li(l,c),P(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const b=encodeURIComponent(String(y)),F=this.V(y);for(y=0;y<F.length;y++){var R=b;F[y]!==""&&(R+="="+encodeURIComponent(String(F[y]))),l.push(R)}}return this.i=l.join("&")};function li(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function hE(l,c){c&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(d,y){var R=y.toLowerCase();y!=R&&(Rp(this,y),Pp(this,R,d))},l)),l.j=c}function dE(l,c){const d=new ps;if(a.Image){const y=new Image;y.onload=N(Un,d,"TestLoadImage: loaded",!0,c,y),y.onerror=N(Un,d,"TestLoadImage: error",!1,c,y),y.onabort=N(Un,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=N(Un,d,"TestLoadImage: timeout",!1,c,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else c(!1)}function fE(l,c){const d=new ps,y=new AbortController,R=setTimeout(()=>{y.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:y.signal}).then(b=>{clearTimeout(R),b.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Un(d,"TestPingServer: error",!1,c)})}function Un(l,c,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function pE(){this.g=new q1}function mE(l,c,d){const y=d||"";try{Ip(l,function(R,b){let F=R;h(R)&&(F=Ru(R)),c.push(y+b+"="+encodeURIComponent(F))})}catch(R){throw c.push(y+"type="+encodeURIComponent("_badmap")),R}}function sl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(sl,Au),sl.prototype.g=function(){return new ol(this.l,this.j)},sl.prototype.i=function(l){return function(){return l}}({});function ol(l,c){Ve.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ol,Ve),t=ol.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,ws(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function bp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?vs(this):ws(this),this.readyState==3&&bp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,vs(this))},t.Qa=function(l){this.g&&(this.response=l,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ws(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=c.next();return l.join(`\r
`)};function ws(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Op(l){let c="";return V(l,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Bu(l,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Op(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):ae(l,c,d))}function xe(l){Ve.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(xe,Ve);var gE=/^https?$/i,yE=["POST","PUT"];t=xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lu.g(),this.v=this.o?cp(this.o):cp(Lu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(b){Dp(this,b);return}if(l=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())d.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yE,c,void 0))||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,F]of d)this.g.setRequestHeader(b,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jp(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){Dp(this,b)}};function Dp(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,Lp(l),ll(l)}function Lp(l){l.A||(l.A=!0,Qe(l,"complete"),Qe(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Qe(this,"complete"),Qe(this,"abort"),ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ll(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mp(this):this.bb())},t.bb=function(){Mp(this)};function Mp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||dn(l)!=4||l.Z()!=2)){if(l.u&&dn(l)==4)op(l.Ea,0,l);else if(Qe(l,"readystatechange"),dn(l)==4){l.h=!1;try{const F=l.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=F===0){var R=String(l.D).match(Tp)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),y=!gE.test(R?R.toLowerCase():"")}d=y}if(d)Qe(l,"complete"),Qe(l,"success");else{l.m=6;try{var b=2<dn(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",Lp(l)}}finally{ll(l)}}}}function ll(l,c){if(l.g){jp(l);const d=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||Qe(l,"ready");try{d.onreadystatechange=y}catch{}}}function jp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function dn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),K1(c)}};function Fp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function _E(l){const c={};l=(l.g&&2<=dn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var d=k(l[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[R]||[];c[R]=b,b.push(d)}x(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(l,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||c}function Up(l){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,l),this.cb=Es("retryDelaySeedMs",1e4,l),this.Wa=Es("forwardChannelMaxRetries",2,l),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new wp(l&&l.concurrentRequestLimit),this.Da=new pE,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Up.prototype,t.la=8,t.G=1,t.connect=function(l,c,d,y){Xe(0),this.W=l,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=qp(this,null,this.W),ul(this)};function Hu(l){if(Vp(l),l.G==3){var c=l.U++,d=hn(l.I);if(ae(d,"SID",l.K),ae(d,"RID",c),ae(d,"TYPE","terminate"),Ss(l,d),c=new jn(l,l.j,c),c.L=2,c.v=il(hn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=Yp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),tl(c)}Kp(l)}function al(l){l.g&&($u(l),l.g.cancel(),l.g=null)}function Vp(l){al(l),l.u&&(a.clearTimeout(l.u),l.u=null),cl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ul(l){if(!Ep(l.h)&&!l.s){l.s=!0;var c=l.Ga;on||$(),z||(on(),z=!0),W.add(c,l),l.B=0}}function vE(l,c){return Sp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=fs(g(l.Ga,l,c),Gp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const R=new jn(this,this.j,l);let b=this.o;if(this.S&&(b?(b=_(b),C(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Bp(this,R,c),d=hn(this.I),ae(d,"RID",l),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Ss(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(Op(b)))+"&"+c:this.m&&Bu(d,this.m,b)),zu(this.h,R),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",c),ae(d,"SID","null"),R.T=!0,ju(R,d,null)):ju(R,d,c),this.G=2}}else this.G==3&&(l?zp(this,l):this.i.length==0||Ep(this.h)||zp(this))};function zp(l,c){var d;c?d=c.l:d=l.U++;const y=hn(l.I);ae(y,"SID",l.K),ae(y,"RID",d),ae(y,"AID",l.T),Ss(l,y),l.m&&l.o&&Bu(y,l.m,l.o),d=new jn(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),c&&(l.i=c.D.concat(l.i)),c=Bp(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zu(l.h,d),ju(d,y,c)}function Ss(l,c){l.H&&V(l.H,function(d,y){ae(c,y,d)}),l.l&&Ip({},function(d,y){ae(c,y,d)})}function Bp(l,c,d){d=Math.min(l.i.length,d);var y=l.l?g(l.l.Na,l.l,l):null;e:{var R=l.i;let b=-1;for(;;){const F=["count="+d];b==-1?0<d?(b=R[0].g,F.push("ofs="+b)):b=0:F.push("ofs="+b);let oe=!0;for(let Le=0;Le<d;Le++){let ee=R[Le].g;const ze=R[Le].map;if(ee-=b,0>ee)b=Math.max(0,R[Le].g-100),oe=!1;else try{mE(ze,F,"req"+ee+"_")}catch{y&&y(ze)}}if(oe){y=F.join("&");break e}}}return l=l.i.splice(0,d),c.D=l,y}function Hp(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;on||$(),z||(on(),z=!0),W.add(c,l),l.v=0}}function Wu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=fs(g(l.Fa,l),Gp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Wp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=fs(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),al(this),Wp(this))};function $u(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Wp(l){l.g=new jn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=hn(l.qa);ae(c,"RID","rpc"),ae(c,"SID",l.K),ae(c,"AID",l.T),ae(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&ae(c,"TO",l.ja),ae(c,"TYPE","xmlhttp"),Ss(l,c),l.m&&l.o&&Bu(c,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=il(hn(c)),d.m=null,d.P=!0,yp(d,l)}t.Za=function(){this.C!=null&&(this.C=null,al(this),Wu(this),Xe(19))};function cl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function $p(l,c){var d=null;if(l.g==c){cl(l),$u(l),l.g=null;var y=2}else if(Vu(l.h,c))d=c.D,xp(l.h,c),y=1;else return;if(l.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=l.B;y=Ou(),Qe(y,new pp(y,d)),ul(l)}else Hp(l);else if(R=c.s,R==3||R==0&&0<c.X||!(y==1&&vE(l,c)||y==2&&Wu(l)))switch(d&&0<d.length&&(c=l.h,c.i=c.i.concat(d)),R){case 1:xr(l,5);break;case 4:xr(l,10);break;case 3:xr(l,6);break;default:xr(l,2)}}}function Gp(l,c){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*c}function xr(l,c){if(l.j.info("Error code "+c),c==2){var d=g(l.fb,l),y=l.Xa;const R=!y;y=new Sr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||nl(y,"https"),il(y),R?dE(y.toString(),d):fE(y.toString(),d)}else Xe(2);l.G=0,l.l&&l.l.sa(c),Kp(l),Vp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Kp(l){if(l.G=0,l.ka=[],l.l){const c=Cp(l.h);(c.length!=0||l.i.length!=0)&&(L(l.ka,c),L(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function qp(l,c,d){var y=d instanceof Sr?hn(d):new Sr(d);if(y.g!="")c&&(y.g=c+"."+y.g),rl(y,y.s);else{var R=a.location;y=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var b=new Sr(null);y&&nl(b,y),c&&(b.g=c),R&&rl(b,R),d&&(b.l=d),y=b}return d=l.D,c=l.ya,d&&c&&ae(y,d,c),ae(y,"VER",l.la),Ss(l,y),y}function Yp(l,c,d){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new xe(new sl({eb:d})):new xe(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qp(){}t=Qp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vt(l,c){Ve.call(this),this.g=new Up(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!v(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new ai(this)}T(vt,Ve),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Hu(this.g)},vt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=Ru(l),l=d);c.i.push(new nE(c.Ya++,l)),c.G==3&&ul(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,vt.aa.N.call(this)};function Xp(l){Pu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const d in c){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}T(Xp,Pu);function Jp(){bu.call(this),this.status=1}T(Jp,bu);function ai(l){this.g=l}T(ai,Qp),ai.prototype.ua=function(){Qe(this.g,"a")},ai.prototype.ta=function(l){Qe(this.g,new Xp(l))},ai.prototype.sa=function(l){Qe(this.g,new Jp)},ai.prototype.ra=function(){Qe(this.g,"b")},vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Du.NO_ERROR=0,Du.TIMEOUT=8,Du.HTTP_ERROR=6,eE.COMPLETE="complete",Y1.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});const Wg="@firebase/firestore",$g="4.9.1";/**
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
 */let Ze=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Wo="12.2.0";/**
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
 */const Ki=new du("@firebase/firestore");function Mt(t,...e){if(Ki.logLevel<=te.DEBUG){const n=e.map(Nf);Ki.debug(`Firestore (${Wo}): ${t}`,...n)}}function fw(t,...e){if(Ki.logLevel<=te.ERROR){const n=e.map(Nf);Ki.error(`Firestore (${Wo}): ${t}`,...n)}}function dN(t,...e){if(Ki.logLevel<=te.WARN){const n=e.map(Nf);Ki.warn(`Firestore (${Wo}): ${t}`,...n)}}function Nf(t){if(typeof t=="string")return t;try{/**
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
 */function Ro(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,pw(t,r,n)}function pw(t,e,n){let r=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw fw(r),new Error(r)}function Zs(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||pw(e,i,r)}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class eo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class pN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mN{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Zs(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new eo;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new eo,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new eo)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Zs(typeof r.accessToken=="string",31837,{l:r}),new mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zs(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class gN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new gN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _N{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Zs(this.o===void 0,3512);const r=s=>{s.error!=null&&Mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Mt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Zs(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wN{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function fr(t,e){return t<e?-1:t>e?1:0}function EN(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Nc(i)===Nc(s)?fr(i,s):Nc(i)?1:-1}return fr(t.length,e.length)}const SN=55296,xN=57343;function Nc(t){const e=t.charCodeAt(0);return e>=SN&&e<=xN}/**
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
 */const Kg="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ro(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ro(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=qt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return fr(e.length,n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),i=qt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?qt.extractNumericId(e).compare(qt.extractNumericId(n)):EN(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kf.fromString(e.substring(4,e.length-2))}}class Ot extends qt{construct(e,n,r){return new Ot(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ot(n)}static emptyPath(){return new Ot([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rr extends qt{construct(e,n,r){return new Rr(e,n,r)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kg}static keyField(){return new Rr([Kg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rr(n)}static emptyPath(){return new Rr([])}}/**
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
 */class Or{constructor(e){this.path=e}static fromPath(e){return new Or(Ot.fromString(e))}static fromName(e){return new Or(Ot.fromString(e).popFirst(5))}static empty(){return new Or(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Or(new Ot(e.slice()))}}function IN(t,e,n,r){if(e===!0&&r===!0)throw new J(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TN(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ro(12329,{type:typeof t})}function NN(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kN(t);throw new J(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function $o(t,e){if(!TN(t))throw new J(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new J(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const qg=-62135596800,Yg=1e6;class Yt{static now(){return Yt.fromMillis(Date.now())}static fromDate(e){return Yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yg);return new Yt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<qg)throw new J(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yg}_compareTo(e){return this.seconds===e.seconds?fr(this.nanoseconds,e.nanoseconds):fr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($o(e,Yt._jsonSchema))return new Yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Yt._jsonSchemaVersion="firestore/timestamp/1.0",Yt._jsonSchema={type:ke("string",Yt._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};function RN(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class AN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AN("Invalid base64 string: "+s):s}}(e);return new Kr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Kr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kr.EMPTY_BYTE_STRING=new Kr("");const Wh="(default)";class ja{constructor(e,n){this.projectId=e,this.database=n||Wh}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===Wh}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class PN{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bN(t){return new PN(t)}/**
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
 */var Qg,q;(q=Qg||(Qg={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new kf([4294967295,4294967295],0);/**
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
 */const ON=41943040;/**
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
 */const DN=1048576;function Rc(){return typeof document<"u"?document:null}/**
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
 */class LN{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new eo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Xg,Jg;(Jg=Xg||(Xg={})).Ma="default",Jg.Cache="cache";/**
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
 */function MN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Zg=new Map;/**
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
 */const gw="firestore.googleapis.com",ey=!0;class ty{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gw,this.ssl=ey}else this.host=e.host,this.ssl=e.ssl??ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ON;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DN)throw new J(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MN(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yw{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fN;switch(r.type){case"firstParty":return new yN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zg.get(n);r&&(Mt("ComponentProvider","Removing Datastore"),Zg.delete(n),r.terminate())}(this),Promise.resolve()}}function jN(t,e,n,r={}){var h;t=NN(t,yw);const i=ei(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(pf(`https://${a}`),mf("Firestore",!0)),s.host!==gw&&s.host!==a&&dN("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:a,ssl:i,emulatorOptions:r};if(!hr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ze.MOCK_USER;else{f=C0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new J(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ze(g)}t._authCredentials=new pN(new mw(f,m))}}/**
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
 */class Af{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Af(this.firestore,e,this._query)}}class Xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}toJSON(){return{type:Xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if($o(n,Xt._jsonSchema))return new Xt(e,r||null,new Or(Ot.fromString(n.referencePath)))}}Xt._jsonSchemaVersion="firestore/documentReference/1.0",Xt._jsonSchema={type:ke("string",Xt._jsonSchemaVersion),referencePath:ke("string")};class Pf extends Af{constructor(e,n,r){super(e,n,bN(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new Or(e))}withConverter(e){return new Pf(this.firestore,e,this._path)}}/**
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
 */const ny="AsyncQueue";class ry{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LN(this,"async_queue_retry"),this._c=()=>{const r=Rc();r&&Mt(ny,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new eo;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!RN(e))throw e;Mt(ny,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,fw("INTERNAL UNHANDLED ERROR: ",iy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Rf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Ro(47125,{Pc:iy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function iy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class FN extends yw{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ry,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function UN(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:Wh,i=fu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=E0("firestore");s&&jN(i,...s)}return i}/**
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
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(Kr.fromBase64String(e))}catch(n){throw new J(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mn(Kr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($o(e,mn._jsonSchema))return mn.fromBase64String(e.bytes)}}mn._jsonSchemaVersion="firestore/bytes/1.0",mn._jsonSchema={type:ke("string",mn._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class _w{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fr(this._lat,e._lat)||fr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jr._jsonSchemaVersion}}static fromJSON(e){if($o(e,jr._jsonSchema))return new jr(e.latitude,e.longitude)}}jr._jsonSchemaVersion="firestore/geoPoint/1.0",jr._jsonSchema={type:ke("string",jr._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($o(e,Fr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Fr(e.vectorValues);throw new J(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fr._jsonSchemaVersion="firestore/vectorValue/1.0",Fr._jsonSchema={type:ke("string",Fr._jsonSchemaVersion),vectorValues:ke("object")};const VN=new RegExp("[~\\*/\\[\\]]");function zN(t,e,n){if(e.search(VN)>=0)throw sy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new _w(...e.split("."))._internalPath}catch{throw sy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function sy(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new J(X.INVALID_ARGUMENT,s+t+o)}/**
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
 */class vw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ww("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BN extends vw{data(){return super.data()}}function ww(t,e){return typeof e=="string"?zN(t,e):e instanceof _w?e._internalPath:e._delegate._internalPath}class bl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends vw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ww("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:ke("string",Mi._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class ea extends Mi{data(e={}){return super.data(e)}}class to{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ea(this._firestore,this._userDataWriter,r.key,r,new bl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ea(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ea(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:HN(a.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=to._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wN.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ro(61501,{type:t})}}to._jsonSchemaVersion="firestore/querySnapshot/1.0",to._jsonSchema={type:ke("string",to._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};(function(e,n=!0){(function(i){Wo=i})(ti),Wr(new dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new FN(new mN(r.getProvider("auth-internal")),new _N(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(Wg,$g,e),tn(Wg,$g,"esm2020")})();var oy={};const ly="@firebase/database",ay="1.1.0";/**
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
 */let Ew="";function WN(t){Ew=t}/**
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
 */class $N{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Io(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Sw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $N(e)}}catch{}return new GN},Dr=Sw("localStorage"),KN=Sw("sessionStorage");/**
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
 */const ji=new du("@firebase/database"),qN=function(){let t=1;return function(){return t++}}(),xw=function(t){const e=VI(t),n=new LI;n.update(e);const r=n.digest();return hf.encodeByteArray(r)},Go=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Go.apply(null,r):typeof r=="object"?e+=je(r):e+=r,e+=" "}return e};let no=null,uy=!0;const YN=function(t,e){U(!e,"Can't turn on custom loggers persistently."),ji.logLevel=te.VERBOSE,no=ji.log.bind(ji)},Ge=function(...t){if(uy===!0&&(uy=!1,no===null&&KN.get("logging_enabled")===!0&&YN()),no){const e=Go.apply(null,t);no(e)}},Ko=function(t){return function(...e){Ge(t,...e)}},$h=function(...t){const e="FIREBASE INTERNAL ERROR: "+Go(...t);ji.error(e)},bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Go(...t)}`;throw ji.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+Go(...t);ji.warn(e)},QN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qi="[MIN_NAME]",qr="[MAX_NAME]",ss=function(t,e){if(t===e)return 0;if(t===qi||e===qr)return-1;if(e===qi||t===qr)return 1;{const n=cy(t),r=cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},JN=function(t,e){return t===e?0:t<e?-1:1},bs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},bf=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=je(e[r]),n+=":",n+=bf(t[e[r]]);return n+="}",n},Iw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tw=function(t){U(!Cw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const f=h.join("");let m="";for(u=0;u<64;u+=8){let g=parseInt(f.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),m=m+g}return m.toLowerCase()},ZN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tR=new RegExp("^-?(0*)\\d{1,10}$"),nR=-2147483648,rR=2147483647,cy=function(t){if(tR.test(t)){const e=Number(t);if(e>=nR&&e<=rR)return e}return null},qo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},iR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ro=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class ta{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ta.OWNER="owner";/**
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
 */const Of="5",kw="v",Nw="s",Rw="r",Aw="f",Pw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bw="ls",Ow="p",Gh="ac",Dw="websocket",Lw="long_polling";/**
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
 */class Mw{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1,h=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jw(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let r;if(e===Dw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lR(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class aR{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yI(this.counters_)}}/**
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
 */const Ac={},Pc={};function Df(t){const e=t.toString();return Ac[e]||(Ac[e]=new aR),Ac[e]}function uR(t,e){const n=t.toString();return Pc[n]||(Pc[n]=e()),Pc[n]}/**
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
 */class cR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hy="start",hR="close",dR="pLPCommand",fR="pRTLPCB",Fw="id",Uw="pw",Vw="ser",pR="cb",mR="seg",gR="ts",yR="d",_R="dframe",zw=1870,Bw=30,vR=zw-Bw,wR=25e3,ER=3e4;class Ii{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ko(e),this.stats_=Df(n),this.urlFn=u=>(this.appCheckToken&&(u[Gh]=this.appCheckToken),jw(n,Lw,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ER)),XN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lf((...s)=>{const[o,a,u,h,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hy)this.id=a,this.password=u;else if(o===hR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hy]="t",r[Vw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kw]=Of,this.transportSessionId&&(r[Nw]=this.transportSessionId),this.lastSessionId&&(r[bw]=this.lastSessionId),this.applicationId&&(r[Ow]=this.applicationId),this.appCheckToken&&(r[Gh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pw.test(location.hostname)&&(r[Rw]=Aw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ii.forceAllow_=!0}static forceDisallow(){Ii.forceDisallow_=!0}static isAvailable(){return Ii.forceAllow_?!0:!Ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZN()&&!eR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_0(n),i=Iw(r,vR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_R]="t",r[Fw]=e,r[Uw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qN(),window[dR+this.uniqueCallbackIdentifier]=e,window[fR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fw]=this.myID,e[Uw]=this.myPW,e[Vw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bw+r.length<=zw;){const o=this.pendingSegs.shift();r=r+"&"+mR+i+"="+o.seg+"&"+gR+i+"="+o.ts+"&"+yR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const SR=16384,xR=45e3;let Fa=null;typeof MozWebSocket<"u"?Fa=MozWebSocket:typeof WebSocket<"u"&&(Fa=WebSocket);class Dt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ko(this.connId),this.stats_=Df(n),this.connURL=Dt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kw]=Of,typeof location<"u"&&location.hostname&&Pw.test(location.hostname)&&(o[Rw]=Aw),n&&(o[Nw]=n),r&&(o[bw]=r),i&&(o[Gh]=i),s&&(o[Ow]=s),jw(e,Dw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dr.set("previous_websocket_failure",!0);try{let r;T0(),this.mySock=new Fa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fa!==null&&!Dt.forceDisallow_}static previouslyFailed(){return Dr.isInMemoryStorage||Dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Io(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iw(n,SR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
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
 */class Ao{static get ALL_TRANSPORTS(){return[Ii,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Dt&&Dt.isAvailable();let r=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Dt];else{const i=this.transports_=[];for(const s of Ao.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ao.globalTransportInitialized_=!1;/**
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
 */const CR=6e4,IR=5e3,TR=10*1024,kR=100*1024,bc="t",dy="d",NR="s",fy="r",RR="e",py="o",my="a",gy="n",yy="p",AR="h";class PR{constructor(e,n,r,i,s,o,a,u,h,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ko("c:"+this.id+":"),this.transportManager_=new Ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bc in e){const n=e[bc];n===my?this.upgradeIfSecondaryHealthy_():n===fy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===py&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bs("t",e),r=bs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bs("t",e),r=bs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bs(bc,e);if(dy in e){const r=e[dy];if(n===AR){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NR?this.onConnectionShutdown_(r):n===fy?this.onReset_(r):n===RR?$h("Server Error: "+r):n===py?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$h("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Of!==r&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ww{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ua extends Ww{static getInstance(){return new Ua}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _y=32,vy=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new fe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function $w(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function xt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return xt(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qw(t,e){if(pr(t)!==pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pr(t)>pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class OR{constructor(e,n){this.errorPrefix_=n,this.parts_=Gw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=hu(this.parts_[r]);Yw(this)}}function DR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=hu(e),Yw(t)}function LR(t){const e=t.parts_.pop();t.byteLength_-=hu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yw(t){if(t.byteLength_>vy)throw new Error(t.errorPrefix_+"has a key path longer than "+vy+" bytes ("+t.byteLength_+").");if(t.parts_.length>_y)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+Nr(t))}function Nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mf extends Ww{static getInstance(){return new Mf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Os=1e3,MR=60*5*1e3,wy=30*1e3,jR=1.3,FR=3e4,UR="server_kill",Ey=3;class Cn extends Hw{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Cn.nextPersistentConnectionId_++,this.log_=Ko("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Os,this.maxReconnectDelay_=MR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!T0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(je(s)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ff,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;Cn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const r=Gi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$h("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FR&&(this.reconnectDelay_=Os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(m){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=g&&g.token,a=new PR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,N=>{pt(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(UR)},s))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&pt(m),u())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dh(this.interruptReasons_)&&(this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>bf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ey&&(this.reconnectDelay_=wy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ey&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ew.replace(/\./g,"-")]=1,gf()?e["framework.cordova"]=1:I0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ua.getInstance().currentlyOnline();return Dh(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class yu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(qi,e),i=new Q(qi,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
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
 */let Ol;class Qw extends yu{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return ss(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(qr,Ol)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Ol)}toString(){return".key"}}const Fi=new Qw;/**
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
 */class Dl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??ot.EMPTY_NODE,this.right=s??ot.EMPTY_NODE}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class VR{copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ot{constructor(e,n=ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Dl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Dl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Dl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Dl(this.root_,null,this.comparator_,!0,e)}}ot.EMPTY_NODE=new VR;/**
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
 */function zR(t,e){return ss(t.name,e.name)}function jf(t,e){return ss(t,e)}/**
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
 */let Kh;function BR(t){Kh=t}const Xw=function(t){return typeof t=="number"?"number:"+Tw(t):"string:"+t},Jw=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else U(t===Kh||t.isEmpty(),"priority of unexpected type.");U(t===Kh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sy;class Ae{static set __childrenNodeConstructor(e){Sy=e}static get __childrenNodeConstructor(){return Sy}constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:Y(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tw(this.value_):e+=this.value_,this.lazyHash_=xw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return U(i>=0,"Unknown leaf type: "+n),U(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zw,e1;function HR(t){Zw=t}function WR(t){e1=t}class $R extends yu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ss(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(qr,new Ae("[PRIORITY-POST]",e1))}makePost(e,n){const r=Zw(e);return new Q(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const qe=new $R;/**
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
 */const GR=Math.log(2);class KR{constructor(e){const n=s=>parseInt(Math.log(s)/GR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Va=function(t,e,n,r){t.sort(e);const i=function(u,h){const f=h-u;let m,g;if(f===0)return null;if(f===1)return m=t[u],g=n?n(m):m,new be(g,m.node,be.BLACK,null,null);{const N=parseInt(f/2,10)+u,T=i(u,N),P=i(N+1,h);return m=t[N],g=n?n(m):m,new be(g,m.node,be.BLACK,T,P)}},s=function(u){let h=null,f=null,m=t.length;const g=function(T,P){const L=m-T,w=m;m-=T;const v=i(L+1,w),S=t[L],D=n?n(S):S;N(new be(D,S.node,P,null,v))},N=function(T){h?(h.left=T,h=T):(f=T,h=T)};for(let T=0;T<u.count;++T){const P=u.nextBitIsOne(),L=Math.pow(2,u.count-(T+1));P?g(L,be.BLACK):(g(L,be.BLACK),g(L,be.RED))}return f},o=new KR(t.length),a=s(o);return new ot(r||e,a)};/**
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
 */let Oc;const hi={};class wn{static get Default(){return U(hi&&qe,"ChildrenNode.ts has not been loaded"),Oc=Oc||new wn({".priority":hi},{".priority":qe}),Oc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ot?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Va(r,e.getCompare()):a=hi;const u=e.toString(),h={...this.indexSet_};h[u]=e;const f={...this.indexes_};return f[u]=a,new wn(f,h)}addToIndexes(e,n){const r=Ra(this.indexes_,(i,s)=>{const o=Gi(this.indexSet_,s);if(U(o,"Missing index implementation for "+s),i===hi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(Q.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Va(a,o.getCompare())}else return hi;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new Q(e.name,a))),u.insert(e,e.node)}});return new wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ra(this.indexes_,i=>{if(i===hi)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new wn(r,this.indexSet_)}}/**
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
 */let Ds;class ne{static get EMPTY_NODE(){return Ds||(Ds=new ne(new ot(jf),null,wn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jw(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ds:this.priorityNode_;return new ne(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{U(Y(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(qe,(o,a)=>{n[o]=a.val(e),r++,s&&ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xw(this.getPriority().val())+":"),this.forEachChild(qe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yo?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(qe),i=n.getIterator(qe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qR extends ne{constructor(){super(new ot(jf),ne.EMPTY_NODE,wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Yo=new qR;Object.defineProperties(Q,{MIN:{value:new Q(qi,ne.EMPTY_NODE)},MAX:{value:new Q(qr,Yo)}});Qw.__EMPTY_NODE=ne.EMPTY_NODE;Ae.__childrenNodeConstructor=ne;BR(Yo);WR(Yo);/**
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
 */const YR=!0;function Ke(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Ke(e))}if(!(t instanceof Array)&&YR){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ke(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new Q(o,u)))}}),n.length===0)return ne.EMPTY_NODE;const s=Va(n,zR,o=>o.name,jf);if(r){const o=Va(n,qe.getCompare());return new ne(s,Ke(e),new wn({".priority":o},{".priority":qe}))}else return new ne(s,Ke(e),wn.Default)}else{let n=ne.EMPTY_NODE;return kt(t,(r,i)=>{if(Mn(t,r)&&r.substring(0,1)!=="."){const s=Ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ke(e))}}HR(Ke);/**
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
 */class QR extends yu{constructor(e){super(),this.indexPath_=e,U(!K(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ss(e.name,n.name):s}makePost(e,n){const r=Ke(e),i=ne.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Yo);return new Q(qr,e)}toString(){return Gw(this.indexPath_,0).join("/")}}/**
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
 */class XR extends yu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ss(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=Ke(e);return new Q(n,r)}toString(){return".value"}}const JR=new XR;/**
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
 */function ZR(t){return{type:"value",snapshotNode:t}}function eA(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tA(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new Ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qe?n="$priority":t.index_===JR?n="$value":t.index_===Fi?n="$key":(U(t.index_ instanceof QR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Iy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qe&&(e.i=t.index_.toString()),e}/**
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
 */class za extends Hw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ko("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=za.getListenId_(e,r),a={};this.listens_[o]=a;const u=Cy(e._queryParams);this.restRequest_(s+".json",u,(h,f)=>{let m=f;if(h===404&&(m=null,h=null),h===null&&this.onDataUpdate_(s,m,!1,r),Gi(this.listens_,o)===a){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,n){const r=za.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Cy(e._queryParams),r=e._path.toString(),i=new ff;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Io(a.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rA{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ba(){return{value:null,children:new Map}}function t1(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Ba());const i=t.children.get(r);e=he(e),t1(i,e,n)}}function qh(t,e,n){t.value!==null?n(e,t.value):iA(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);qh(i,s,n)})}function iA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class sA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ty=10*1e3,oA=30*1e3,lA=5*60*1e3;class aA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sA(e);const r=Ty+(oA-Ty)*Math.random();ro(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*lA))}}/**
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
 */var Jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function n1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function r1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i1(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ha{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Jt.ACK_USER_WRITE,this.source=n1()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Ha(ie(),n,this.revert)}}else return U(Y(this.path)===e,"operationForChild called for unrelated child."),new Ha(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Yr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Jt.OVERWRITE}operationForChild(e){return K(this.path)?new Yr(this.source,ie(),this.snap.getImmediateChild(e)):new Yr(this.source,he(this.path),this.snap)}}/**
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
 */class Po{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Jt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Yr(this.source,ie(),n.value):new Po(this.source,ie(),n)}else return U(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Po(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Uf{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(nA(o.childName,o.snapshotNode))}),Ls(t,i,"child_removed",e,r,n),Ls(t,i,"child_added",e,r,n),Ls(t,i,"child_moved",s,r,n),Ls(t,i,"child_changed",e,r,n),Ls(t,i,"value",e,r,n),i}function Ls(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>hA(t,a,u)),o.forEach(a=>{const u=cA(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function cA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hA(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function s1(t,e){return{eventCache:t,serverCache:e}}function io(t,e,n,r){return s1(new Uf(e,n,r),t.serverCache)}function o1(t,e,n,r){return s1(t.eventCache,new Uf(e,n,r))}function Yh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Dc;const dA=()=>(Dc||(Dc=new ot(JN)),Dc);class ce{static fromObject(e){let n=new ce(null);return kt(e,(r,i)=>{n=n.set(new fe(r),i)}),n}constructor(e,n=dA()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(K(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:Oe(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new ce(null)}}set(e,n){if(K(e))return new ce(n,this.children);{const r=Y(e),s=(this.children.get(r)||new ce(null)).set(he(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const r=Y(e),s=(this.children.get(r)||new ce(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(he(e),Oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),Oe(n,i),r):new ce(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new ce(null))}}function so(t,e,n){if(K(e))return new Vt(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xt(i,e);return s=s.updateChild(o,n),new Vt(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new Vt(s)}}}function ky(t,e,n){let r=t;return kt(n,(i,s)=>{r=so(r,Oe(e,i),s)}),r}function Ny(t,e){if(K(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Vt(n)}}function Qh(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xt(n.path,e)):null}function Ry(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function ar(t,e){if(K(e))return t;{const n=ri(t,e);return n!=null?new Vt(new ce(n)):new Vt(t.writeTree_.subtree(e))}}function Xh(t){return t.writeTree_.isEmpty()}function Yi(t,e){return l1(ie(),t.writeTree_,e)}function l1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(U(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=l1(Oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
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
 */function a1(t,e){return f1(e,t)}function fA(t,e,n,r,i){U(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=so(t.visibleWrites,e,n)),t.lastWriteId=r}function pA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gA(a,r.path)?i=!1:jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return yA(t),!0;if(r.snap)t.visibleWrites=Ny(t.visibleWrites,r.path);else{const a=r.children;kt(a,u=>{t.visibleWrites=Ny(t.visibleWrites,Oe(r.path,u))})}return!0}else return!1}function gA(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(Oe(t.path,n),e))return!0;return!1}function yA(t){t.visibleWrites=u1(t.allWrites,_A,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _A(t){return t.visible}function u1(t,e,n){let r=Vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jt(n,o)?(a=xt(n,o),r=so(r,a,s.snap)):jt(o,n)&&(a=xt(o,n),r=so(r,ie(),s.snap.getChild(a)));else if(s.children){if(jt(n,o))a=xt(n,o),r=ky(r,a,s.children);else if(jt(o,n))if(a=xt(o,n),K(a))r=ky(r,ie(),s.children);else{const u=Gi(s.children,Y(a));if(u){const h=u.getChild(he(a));r=so(r,ie(),h)}}}else throw ns("WriteRecord should have .snap or .children")}}return r}function c1(t,e,n,r,i){if(!r&&!i){const s=ri(t.visibleWrites,e);if(s!=null)return s;{const o=ar(t.visibleWrites,e);if(Xh(o))return n;if(n==null&&!Qh(o,ie()))return null;{const a=n||ne.EMPTY_NODE;return Yi(o,a)}}}else{const s=ar(t.visibleWrites,e);if(!i&&Xh(s))return n;if(!i&&n==null&&!Qh(s,ie()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(jt(h.path,e)||jt(e,h.path))},a=u1(t.allWrites,o,e),u=n||ne.EMPTY_NODE;return Yi(a,u)}}}function vA(t,e,n){let r=ne.EMPTY_NODE;const i=ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(qe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ar(t.visibleWrites,e);return n.forEachChild(qe,(o,a)=>{const u=Yi(ar(s,new fe(o)),a);r=r.updateImmediateChild(o,u)}),Ry(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(t.visibleWrites,e);return Ry(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wA(t,e,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(Qh(t.visibleWrites,s))return null;{const o=ar(t.visibleWrites,s);return Xh(o)?i.getChild(n):Yi(o,i.getChild(n))}}function EA(t,e,n,r){const i=Oe(e,n),s=ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ar(t.visibleWrites,i);return Yi(o,r.getNode().getImmediateChild(n))}else return null}function SA(t,e){return ri(t.visibleWrites,e)}function xA(t,e,n,r,i,s,o){let a;const u=ar(t.visibleWrites,e),h=ri(u,ie());if(h!=null)a=h;else if(n!=null)a=Yi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],m=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let N=g.getNext();for(;N&&f.length<i;)m(N,r)!==0&&f.push(N),N=g.getNext();return f}else return[]}function CA(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Jh(t,e,n,r){return c1(t.writeTree,t.treePath,e,n,r)}function h1(t,e){return vA(t.writeTree,t.treePath,e)}function Ay(t,e,n,r){return wA(t.writeTree,t.treePath,e,n,r)}function Wa(t,e){return SA(t.writeTree,Oe(t.treePath,e))}function IA(t,e,n,r,i,s){return xA(t.writeTree,t.treePath,e,n,r,i,s)}function Vf(t,e,n){return EA(t.writeTree,t.treePath,e,n)}function d1(t,e){return f1(Oe(t.treePath,e),t.writeTree)}function f1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class TA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xy(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,tA(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,eA(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xy(r,e.snapshotNode,i.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const p1=new kA;class zf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Uf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qr(this.viewCache_),s=IA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function NA(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RA(t,e,n,r,i){const s=new TA;let o,a;if(n.type===Jt.OVERWRITE){const h=n;h.source.fromUser?o=Zh(t,e,h.path,h.snap,r,i,s):(U(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!K(h.path),o=$a(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Jt.MERGE){const h=n;h.source.fromUser?o=PA(t,e,h.path,h.children,r,i,s):(U(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=ed(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Jt.ACK_USER_WRITE){const h=n;h.revert?o=DA(t,e,h.path,r,i,s):o=bA(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Jt.LISTEN_COMPLETE)o=OA(t,e,n.path,r,s);else throw ns("Unknown operation type: "+n.type);const u=s.getChanges();return AA(e,o,u),{viewCache:o,changes:u}}function AA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ZR(Yh(e)))}}function m1(t,e,n,r,i,s){const o=e.eventCache;if(Wa(r,n)!=null)return e;{let a,u;if(K(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Qr(e),f=h instanceof ne?h:ne.EMPTY_NODE,m=h1(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),m,s)}else{const h=Jh(r,Qr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=Y(n);if(h===".priority"){U(pr(n)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const m=Ay(r,n,f,u);m!=null?a=t.filter.updatePriority(f,m):a=o.getNode()}else{const f=he(n);let m;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const g=Ay(r,n,o.getNode(),u);g!=null?m=o.getNode().getImmediateChild(h).updateChild(f,g):m=o.getNode().getImmediateChild(h)}else m=Vf(r,h,e.serverCache);m!=null?a=t.filter.updateChild(o.getNode(),h,m,f,i,s):a=o.getNode()}}return io(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function $a(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const f=o?t.filter:t.filter.getIndexedFilter();if(K(n))h=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const N=u.getNode().updateChild(n,r);h=f.updateFullNode(u.getNode(),N,null)}else{const N=Y(n);if(!u.isCompleteForPath(n)&&pr(n)>1)return e;const T=he(n),L=u.getNode().getImmediateChild(N).updateChild(T,r);N===".priority"?h=f.updatePriority(u.getNode(),L):h=f.updateChild(u.getNode(),N,L,T,p1,null)}const m=o1(e,h,u.isFullyInitialized()||K(n),f.filtersNodes()),g=new zf(i,m,s);return m1(t,m,n,i,g,a)}function Zh(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const f=new zf(i,e,s);if(K(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=io(e,h,!0,t.filter.filtersNodes());else{const m=Y(n);if(m===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=io(e,h,a.isFullyInitialized(),a.isFiltered());else{const g=he(n),N=a.getNode().getImmediateChild(m);let T;if(K(g))T=r;else{const P=f.getCompleteChild(m);P!=null?$w(g)===".priority"&&P.getChild(Kw(g)).isEmpty()?T=P:T=P.updateChild(g,r):T=ne.EMPTY_NODE}if(N.equals(T))u=e;else{const P=t.filter.updateChild(a.getNode(),m,T,g,f,o);u=io(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Py(t,e){return t.eventCache.isCompleteForChild(e)}function PA(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const f=Oe(n,u);Py(e,Y(f))&&(a=Zh(t,a,f,h,i,s,o))}),r.foreach((u,h)=>{const f=Oe(n,u);Py(e,Y(f))||(a=Zh(t,a,f,h,i,s,o))}),a}function by(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ed(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;K(n)?h=r:h=new ce(null).setTree(n,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((m,g)=>{if(f.hasChild(m)){const N=e.serverCache.getNode().getImmediateChild(m),T=by(t,N,g);u=$a(t,u,new fe(m),T,i,s,o,a)}}),h.children.inorderTraversal((m,g)=>{const N=!e.serverCache.isCompleteForChild(m)&&g.value===null;if(!f.hasChild(m)&&!N){const T=e.serverCache.getNode().getImmediateChild(m),P=by(t,T,g);u=$a(t,u,new fe(m),P,i,s,o,a)}}),u}function bA(t,e,n,r,i,s,o){if(Wa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(K(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return $a(t,e,n,u.getNode().getChild(n),i,s,a,o);if(K(n)){let h=new ce(null);return u.getNode().forEachChild(Fi,(f,m)=>{h=h.set(new fe(f),m)}),ed(t,e,n,h,i,s,a,o)}else return e}else{let h=new ce(null);return r.foreach((f,m)=>{const g=Oe(n,f);u.isCompleteForPath(g)&&(h=h.set(f,u.getNode().getChild(g)))}),ed(t,e,n,h,i,s,a,o)}}function OA(t,e,n,r,i){const s=e.serverCache,o=o1(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return m1(t,o,n,r,p1,i)}function DA(t,e,n,r,i,s){let o;if(Wa(r,n)!=null)return e;{const a=new zf(r,e,i),u=e.eventCache.getNode();let h;if(K(n)||Y(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Jh(r,Qr(e));else{const m=e.serverCache.getNode();U(m instanceof ne,"serverChildren would be complete if leaf node"),f=h1(r,m)}f=f,h=t.filter.updateFullNode(u,f,s)}else{const f=Y(n);let m=Vf(r,f,e.serverCache);m==null&&e.serverCache.isCompleteForChild(f)&&(m=u.getImmediateChild(f)),m!=null?h=t.filter.updateChild(u,f,m,he(n),a,s):e.eventCache.getNode().hasChild(f)?h=t.filter.updateChild(u,f,ne.EMPTY_NODE,he(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jh(r,Qr(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Wa(r,ie())!=null,io(e,h,o,t.filter.filtersNodes())}}function LA(t,e){const n=Qr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Oy(t,e,n,r){e.type===Jt.MERGE&&e.source.queryId!==null&&(U(Qr(t.viewCache_),"We should always have a full cache before handling merges"),U(Yh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=RA(t.processor_,i,e,n,r);return NA(t.processor_,s.viewCache),U(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,MA(t,s.changes,s.viewCache.eventCache.getNode())}function MA(t,e,n,r){const i=t.eventRegistrations_;return uA(t.eventGenerator_,e,n,i)}/**
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
 */let Dy;function jA(t){U(!Dy,"__referenceConstructor has already been defined"),Dy=t}function Bf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return U(s!=null,"SyncTree gave us an op for an invalid query."),Oy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Oy(o,e,n,r));return s}}function Hf(t,e){let n=null;for(const r of t.views.values())n=n||LA(r,e);return n}/**
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
 */let Ly;function FA(t){U(!Ly,"__referenceConstructor has already been defined"),Ly=t}class My{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=CA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function UA(t,e,n,r,i){return fA(t.pendingWriteTree_,e,n,r,i),i?vu(t,new Yr(n1(),e,n)):[]}function Ti(t,e,n=!1){const r=pA(t.pendingWriteTree_,e);if(mA(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(ie(),!0):kt(r.children,o=>{s=s.set(new fe(o),!0)}),vu(t,new Ha(r.path,s,n))}else return[]}function _u(t,e,n){return vu(t,new Yr(r1(),e,n))}function VA(t,e,n){const r=ce.fromObject(n);return vu(t,new Po(r1(),e,r))}function zA(t,e,n,r){const i=v1(t,r);if(i!=null){const s=w1(i),o=s.path,a=s.queryId,u=xt(o,e),h=new Yr(i1(a),u,n);return E1(t,o,h)}else return[]}function BA(t,e,n,r){const i=v1(t,r);if(i){const s=w1(i),o=s.path,a=s.queryId,u=xt(o,e),h=ce.fromObject(n),f=new Po(i1(a),u,h);return E1(t,o,f)}else return[]}function g1(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=xt(o,e),h=Hf(a,u);if(h)return h});return c1(i,e,s,n,!0)}function vu(t,e){return y1(e,t.syncPointTree_,null,a1(t.pendingWriteTree_,ie()))}function y1(t,e,n,r){if(K(t.path))return _1(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=Hf(i,ie()));let s=[];const o=Y(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,f=d1(r,o);s=s.concat(y1(a,u,h,f))}return i&&(s=s.concat(Bf(i,t,r,n))),s}}function _1(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=Hf(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=d1(r,o),f=t.operationForChild(o);f&&(s=s.concat(_1(f,a,u,h)))}),i&&(s=s.concat(Bf(i,t,r,n))),s}function v1(t,e){return t.tagToQueryMap.get(e)}function w1(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function E1(t,e,n){const r=t.syncPointTree_.get(e);U(r,"Missing sync point for query tag that we're tracking");const i=a1(t.pendingWriteTree_,e);return Bf(r,n,i,null)}/**
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
 */class Wf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wf(n)}node(){return this.node_}}class $f{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new $f(this.syncTree_,n)}node(){return g1(this.syncTree_,this.path_)}}const HA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jy=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $A(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},$A=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const i=e.node();if(U(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},GA=function(t,e,n,r){return Gf(e,new $f(n,t),r)},KA=function(t,e,n){return Gf(t,new Wf(e),n)};function Gf(t,e,n){const r=t.getPriority().val(),i=jy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(qe,(a,u)=>{const h=Gf(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
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
 */class Kf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qf(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=Y(n);for(;i!==null;){const s=Gi(r.node.children,i)||{children:{},childCount:0};r=new Kf(i,r,s),n=he(n),i=Y(n)}return r}function os(t){return t.node.value}function S1(t,e){t.node.value=e,td(t)}function x1(t){return t.node.childCount>0}function qA(t){return os(t)===void 0&&!x1(t)}function wu(t,e){kt(t.node.children,(n,r)=>{e(new Kf(n,t,r))})}function C1(t,e,n,r){n&&!r&&e(t),wu(t,i=>{C1(i,e,!0,r)}),n&&r&&e(t)}function YA(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qo(t){return new fe(t.parent===null?t.name:Qo(t.parent)+"/"+t.name)}function td(t){t.parent!==null&&QA(t.parent,t.name,t)}function QA(t,e,n){const r=qA(n),i=Mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,td(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,td(t))}/**
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
 */const XA=/[\[\].#$\/\u0000-\u001F\u007F]/,JA=/[\[\].#$\u0000-\u001F\u007F]/,Lc=10*1024*1024,I1=function(t){return typeof t=="string"&&t.length!==0&&!XA.test(t)},ZA=function(t){return typeof t=="string"&&t.length!==0&&!JA.test(t)},eP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ZA(t)},T1=function(t,e,n){const r=n instanceof fe?new OR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nr(r)+" with contents = "+e.toString());if(Cw(e))throw new Error(t+"contains "+e.toString()+" "+Nr(r));if(typeof e=="string"&&e.length>Lc/3&&hu(e)>Lc)throw new Error(t+"contains a string greater than "+Lc+" utf8 bytes "+Nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!I1(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DR(r,o),T1(t,a,r),LR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nr(r)+" in addition to actual children.")}},tP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!I1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eP(n))throw new Error(UI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rP(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ii(t,e,n){rP(t,n),iP(t,r=>jt(r,e)||jt(e,r))}function iP(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();no&&Ge("event: "+n.toString()),qo(r)}}}/**
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
 */const oP="repo_interrupt",lP=25;class aP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ba(),this.transactionQueueTree_=new Kf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uP(t,e,n){if(t.stats_=Df(t.repoInfo_),t.forceRestClient_||iR())t.server_=new za(t.repoInfo_,(r,i,s,o)=>{Fy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Cn(t.repoInfo_,e,(r,i,s,o)=>{Fy(t,r,i,s,o)},r=>{Uy(t,r)},r=>{hP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uR(t.repoInfo_,()=>new aA(t.stats_,t.server_)),t.infoData_=new rA,t.infoSyncTree_=new My({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=_u(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yf(t,"connected",!1),t.serverSyncTree_=new My({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);ii(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cP(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function k1(t){return HA({timestamp:cP(t)})}function Fy(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Ra(n,h=>Ke(h));o=BA(t.serverSyncTree_,s,u,i)}else{const u=Ke(n);o=zA(t.serverSyncTree_,s,u,i)}else if(r){const u=Ra(n,h=>Ke(h));o=VA(t.serverSyncTree_,s,u)}else{const u=Ke(n);o=_u(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Xf(t,s)),ii(t.eventQueue_,a,o)}function Uy(t,e){Yf(t,"connected",e),e===!1&&fP(t)}function hP(t,e){kt(e,(n,r)=>{Yf(t,n,r)})}function Yf(t,e,n){const r=new fe("/.info/"+e),i=Ke(n);t.infoData_.updateSnapshot(r,i);const s=_u(t.infoSyncTree_,r,i);ii(t.eventQueue_,r,s)}function dP(t){return t.nextWriteId_++}function fP(t){N1(t,"onDisconnectEvents");const e=k1(t),n=Ba();qh(t.onDisconnect_,ie(),(i,s)=>{const o=GA(i,s,t.serverSyncTree_,e);t1(n,i,o)});let r=[];qh(n,ie(),(i,s)=>{r=r.concat(_u(t.serverSyncTree_,i,s));const o=yP(t,i);Xf(t,o)}),t.onDisconnect_=Ba(),ii(t.eventQueue_,ie(),r)}function pP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oP)}function N1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function R1(t,e,n){return g1(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Qf(t,e=t.transactionQueueTree_){if(e||Eu(t,e),os(e)){const n=P1(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mP(t,Qo(e),n)}else x1(e)&&wu(e,n=>{Qf(t,n)})}function mP(t,e,n){const r=n.map(h=>h.currentWriteId),i=R1(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const f=n[h];U(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const m=xt(e,f.path);s=s.updateChild(m,f.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{N1(t,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const m=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(Ti(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&m.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Eu(t,qf(t.transactionQueueTree_,e)),Qf(t,t.transactionQueueTree_),ii(t.eventQueue_,e,f);for(let g=0;g<m.length;g++)qo(m[g])}else{if(h==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{pt("transaction at "+u.toString()+" failed: "+h);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=h}Xf(t,e)}},o)}function Xf(t,e){const n=A1(t,e),r=Qo(n),i=P1(t,n);return gP(t,i,r),r}function gP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=xt(n,u.path);let f=!1,m;if(U(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,m=u.abortReason,i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=lP)f=!0,m="maxretry",i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0));else{const g=R1(t,u.path,o);u.currentInputSnapshot=g;const N=e[a].update(g.val());if(N!==void 0){T1("transaction failed: Data returned ",N,u.path);let T=Ke(N);typeof N=="object"&&N!=null&&Mn(N,".priority")||(T=T.updatePriority(g.getPriority()));const L=u.currentWriteId,w=k1(t),v=KA(T,g,w);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=v,u.currentWriteId=dP(t),o.splice(o.indexOf(L),1),i=i.concat(UA(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(Ti(t.serverSyncTree_,L,!0))}else f=!0,m="nodata",i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0))}ii(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(m),!1,null))))}Eu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qo(r[a]);Qf(t,t.transactionQueueTree_)}function A1(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&os(r)===void 0;)r=qf(r,n),e=he(e),n=Y(e);return r}function P1(t,e){const n=[];return b1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function b1(t,e,n){const r=os(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wu(e,i=>{b1(t,i,n)})}function Eu(t,e){const n=os(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,S1(e,n.length>0?n:void 0)}wu(e,r=>{Eu(t,r)})}function yP(t,e){const n=Qo(A1(t,e)),r=qf(t.transactionQueueTree_,e);return YA(r,i=>{Mc(t,i)}),Mc(t,r),C1(r,i=>{Mc(t,i)}),n}function Mc(t,e){const n=os(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ti(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?S1(e,void 0):n.length=s+1,ii(t.eventQueue_,Qo(e),i);for(let o=0;o<r.length;o++)qo(r[o])}}/**
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
 */function _P(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vy=function(t,e){const n=wP(t),r=n.namespace;n.domain==="firebase.com"&&bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},wP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let f=t.indexOf("/");f===-1&&(f=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(f,m)),f<m&&(i=_P(t.substring(f,m)));const g=vP(t.substring(Math.min(t.length,m)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const N=e.slice(0,h);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Jf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:$w(this._path)}get ref(){return new ls(this._repo,this._path)}get _queryIdentifier(){const e=Iy(this._queryParams),n=bf(e);return n==="{}"?"default":n}get _queryObject(){return Iy(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof Jf))return!1;const n=this._repo===e._repo,r=qw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bR(this._path)}}class ls extends Jf{constructor(e,n){super(e,n,new Ff,!1)}get parent(){const e=Kw(this._path);return e===null?null:new ls(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}jA(ls);FA(ls);/**
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
 */const EP="FIREBASE_DATABASE_EMULATOR_HOST",nd={};let SP=!1;function xP(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ei(s);t.repoInfo_=new Mw(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function CP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vy(s,i),a=o.repoInfo,u;typeof process<"u"&&oy&&(u=oy[EP]),u?(s=`http://${u}?ns=${a.namespace}`,o=Vy(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new oR(t.name,t.options,e);tP("Invalid Firebase Database URL",o),K(o.path)||bn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=TP(a,t,h,new sR(t,n));return new kP(f,t)}function IP(t,e){const n=nd[e];(!n||n[t.key]!==t)&&bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pP(t),delete n[t.key]}function TP(t,e,n,r){let i=nd[e.name];i||(i={},nd[e.name]=i);let s=i[t.toURLString()];return s&&bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new aP(t,SP,n,r),i[t.toURLString()]=s,s}class kP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ls(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(IP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bn("Cannot call "+e+" on a deleted database.")}}function NP(t=_f(),e){const n=fu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=E0("database");r&&RP(n,...r)}return n}function RP(t,e,n,r={}){t=$t(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&hr(r,s.repoInfo_.emulatorOptions))return;bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ta(ta.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:C0(r.mockUserToken,t.app.options.projectId);o=new ta(a)}ei(e)&&(pf(e),mf("Database",!0)),xP(s,i,r,o)}/**
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
 */function AP(t){WN(ti),Wr(new dr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return CP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),tn(ly,ay,t),tn(ly,ay,"esm2020")}Cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AP();const PP={apiKey:"AIzaSyAqd8HUGxKJt739Q6LcTJqTjzbI8JeVuAk",authDomain:"nila-hack.firebaseapp.com",databaseURL:"https://nila-hack-default-rtdb.firebaseio.com",projectId:"nila-hack",storageBucket:"nila-hack.firebasestorage.app",messagingSenderId:"762092660854",appId:"1:762092660854:web:ab55c3ccb0263d50859757",measurementId:"G-JXDHYVNHKH"},Zf=A0(PP),Ll=aN(Zf);UN(Zf);NP(Zf);const O1=O.createContext(void 0),as=()=>{const t=O.useContext(O1);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},bP=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!0);O.useEffect(()=>Qk(Ll,f=>{n(f),i(!1)}),[]);const u={user:e,login:async(h,f)=>{await Kk(Ll,h,f)},signup:async(h,f)=>{await Gk(Ll,h,f)},logout:async()=>{await Xk(Ll)},loading:r};return p.jsx(O1.Provider,{value:u,children:!r&&t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...h},f)=>O.createElement("svg",{ref:f,...OP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${DP(t)}`,a].join(" "),...h},[...e.map(([m,g])=>O.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=pe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=pe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=pe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=pe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=pe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=pe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=pe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=pe("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=pe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=pe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=pe("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),HP=()=>{const[t,e]=O.useState(!1),n=Dn(),{user:r,logout:i}=as(),s=[{name:"Home",path:"/"},{name:"Dashboard",path:"/dashboard"},{name:"Emergency Response",path:"/emergency"},{name:"Health Advisories",path:"/health"}],o=async()=>{try{await i()}catch(a){console.error("Failed to logout:",a)}};return p.jsxs("nav",{className:"bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm",children:[p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16",children:[p.jsx("div",{className:"flex items-center",children:p.jsxs(Ie,{to:"/",className:"flex items-center space-x-2 group",children:[p.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg group-hover:shadow-lg transition-all duration-300",children:p.jsx(Xr,{className:"h-6 w-6 text-white"})}),p.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent",children:"AirGuard"})]})}),p.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[s.map(a=>p.jsx(Ie,{to:a.path,className:`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${n.pathname===a.path?"bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg":"text-gray-700 hover:text-emerald-600 hover:bg-gray-50"}`,children:a.name},a.name)),r?p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsxs("div",{className:"flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg",children:[p.jsx(U1,{className:"h-4 w-4 text-gray-600"}),p.jsx("span",{className:"text-sm text-gray-700",children:r.email})]}),p.jsxs("button",{onClick:o,className:"flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200",children:[p.jsx(FP,{className:"h-4 w-4"}),p.jsx("span",{children:"Logout"})]})]}):p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(Ie,{to:"/login",className:"px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200",children:"Login"}),p.jsx(Ie,{to:"/signup",className:"px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200",children:"Sign Up"})]})]}),p.jsx("div",{className:"md:hidden flex items-center",children:p.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors duration-200",children:t?p.jsx(BP,{className:"h-6 w-6"}):p.jsx(UP,{className:"h-6 w-6"})})})]})}),t&&p.jsx("div",{className:"md:hidden bg-white border-t border-gray-200 shadow-lg",children:p.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[s.map(a=>p.jsx(Ie,{to:a.path,className:`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${n.pathname===a.path?"bg-gradient-to-r from-emerald-500 to-blue-600 text-white":"text-gray-700 hover:text-emerald-600 hover:bg-gray-50"}`,onClick:()=>e(!1),children:a.name},a.name)),r?p.jsxs("div",{className:"pt-4 border-t border-gray-200",children:[p.jsxs("div",{className:"px-3 py-2 text-sm text-gray-600",children:["Signed in as: ",r.email]}),p.jsx("button",{onClick:o,className:"w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200",children:"Logout"})]}):p.jsxs("div",{className:"pt-4 border-t border-gray-200 space-y-2",children:[p.jsx(Ie,{to:"/login",className:"block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors duration-200",onClick:()=>e(!1),children:"Login"}),p.jsx(Ie,{to:"/signup",className:"block px-3 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg text-center",onClick:()=>e(!1),children:"Sign Up"})]})]})})]})},WP=()=>{const t=new Date().getFullYear();return p.jsx("footer",{className:"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"lg:col-span-2",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg",children:p.jsx(Xr,{className:"h-8 w-8 text-white"})}),p.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent",children:"AirGuard"})]}),p.jsx("p",{className:"text-gray-300 mb-6 max-w-md leading-relaxed",children:"Advanced environmental monitoring platform providing real-time air quality data, emergency response coordination, and strategic remediation planning for healthier communities."}),p.jsxs("div",{className:"flex space-x-4",children:[p.jsx("a",{href:"#",className:"p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-all duration-300 transform hover:scale-110",children:p.jsx(MP,{className:"h-5 w-5"})}),p.jsx("a",{href:"#",className:"p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110",children:p.jsx(zP,{className:"h-5 w-5"})}),p.jsx("a",{href:"#",className:"p-2 bg-gray-800 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-110",children:p.jsx(jP,{className:"h-5 w-5"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent",children:"Quick Links"}),p.jsx("ul",{className:"space-y-3",children:["Dashboard","Emergency Response","Health Advisories","Environmental Data","Remediation Plans"].map(e=>p.jsx("li",{children:p.jsxs("a",{href:"#",className:"text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2",children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full"}),p.jsx("span",{children:e})]})},e))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent",children:"Contact Info"}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center space-x-3 text-gray-300",children:[p.jsx(ep,{className:"h-4 w-4 text-emerald-400"}),p.jsx("span",{className:"text-sm",children:"support@airguard.com"})]}),p.jsxs("div",{className:"flex items-center space-x-3 text-gray-300",children:[p.jsx(VP,{className:"h-4 w-4 text-emerald-400"}),p.jsx("span",{className:"text-sm",children:"+1 (555) 123-4567"})]}),p.jsxs("div",{className:"flex items-center space-x-3 text-gray-300",children:[p.jsx(tp,{className:"h-4 w-4 text-emerald-400"}),p.jsx("span",{className:"text-sm",children:"Environmental Research Center"})]})]})]})]}),p.jsx("div",{className:"mt-12 pt-8 border-t border-gray-700",children:p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[p.jsxs("div",{className:"text-gray-400 text-sm",children:["© ",t," AirGuard. All rights reserved. Built for a healthier planet."]}),p.jsxs("div",{className:"flex space-x-6 text-sm text-gray-400",children:[p.jsx("a",{href:"#",className:"hover:text-emerald-400 transition-colors duration-200",children:"Privacy Policy"}),p.jsx("a",{href:"#",className:"hover:text-emerald-400 transition-colors duration-200",children:"Terms of Service"}),p.jsx("a",{href:"#",className:"hover:text-emerald-400 transition-colors duration-200",children:"Cookie Policy"})]})]})})]})})},$P=()=>{const t=[{icon:p.jsx(rd,{className:"h-8 w-8 text-red-500"}),title:"Emergency Response & Evacuation",description:"Advanced predictive modeling maps pollutant spread from explosions or major events, enabling targeted evacuation plans and proactive safety measures.",color:"from-red-500 to-orange-500"},{icon:p.jsx(ad,{className:"h-8 w-8 text-green-500"}),title:"Strategic Environmental Remediation",description:"Identifies specific pollutants (NO₂, SO₂) and correlates them with tree species known to absorb them for data-driven urban planning.",color:"from-green-500 to-emerald-500"},{icon:p.jsx(j1,{className:"h-8 w-8 text-pink-500"}),title:"Public Health Advisories",description:"Predicts health risks associated with specific pollution levels, empowering officials to issue hyper-local and personalized advisories.",color:"from-pink-500 to-rose-500"}],e=[{number:"10,000+",label:"Air Quality Readings Daily",icon:p.jsx(Xr,{className:"h-6 w-6"})},{number:"50+",label:"Cities Monitored",icon:p.jsx(tp,{className:"h-6 w-6"})},{number:"24/7",label:"Real-time Monitoring",icon:p.jsx(M1,{className:"h-6 w-6"})},{number:"99.9%",label:"Accuracy Rate",icon:p.jsx(F1,{className:"h-6 w-6"})}],n=["Real-time air quality monitoring with precision sensors","AI-powered predictive analytics for pollution patterns","Automated emergency response system integration","Personalized health risk assessments","Data-driven environmental remediation strategies","Community-wide notification systems"];return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50",children:[p.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-700 text-white",children:[p.jsx("div",{className:"absolute inset-0 bg-black/20"}),p.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"flex justify-center mb-6",children:p.jsx("div",{className:"p-4 bg-white/20 backdrop-blur-md rounded-2xl",children:p.jsx(ld,{className:"h-16 w-16 text-white"})})}),p.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6 leading-tight",children:["Advanced Environmental",p.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300",children:"Monitoring & Response"})]}),p.jsx("p",{className:"text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed",children:"Protecting communities through real-time air quality monitoring, predictive emergency response, and strategic environmental remediation"}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsxs(Ie,{to:"/signup",className:"group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2",children:[p.jsx("span",{children:"Get Started"}),p.jsx(jc,{className:"h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"})]}),p.jsx(Ie,{to:"/dashboard",className:"px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-all duration-300",children:"View Dashboard"})]})]})})]}),p.jsx("section",{className:"py-16 bg-white",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:e.map((r,i)=>p.jsxs("div",{className:"text-center group",children:[p.jsx("div",{className:"flex justify-center mb-4",children:p.jsx("div",{className:"p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl text-white group-hover:shadow-lg transition-all duration-300",children:r.icon})}),p.jsx("div",{className:"text-3xl font-bold text-gray-900 mb-2",children:r.number}),p.jsx("div",{className:"text-gray-600",children:r.label})]},i))})})}),p.jsx("section",{className:"py-20 bg-gradient-to-br from-gray-50 to-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-gray-900 mb-6",children:["Key Use Cases &",p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600",children:" Impact"})]}),p.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our platform delivers three critical capabilities that transform how communities respond to environmental challenges"})]}),p.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.map((r,i)=>p.jsx("div",{className:"group",children:p.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100",children:[p.jsx("div",{className:"mb-6",children:p.jsx("div",{className:`w-16 h-16 rounded-2xl bg-gradient-to-r ${r.color} p-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`,children:r.icon})}),p.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:r.title}),p.jsx("p",{className:"text-gray-600 leading-relaxed",children:r.description}),p.jsx("div",{className:"mt-6",children:p.jsxs("button",{className:"text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center space-x-2 group",children:[p.jsx("span",{children:"Learn more"}),p.jsx(jc,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"})]})})]})},i))})]})}),p.jsx("section",{className:"py-20 bg-gradient-to-br from-emerald-600 to-blue-700 text-white",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Why Choose AirGuard?"}),p.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Our comprehensive platform provides the tools and insights needed to protect communities and improve environmental health outcomes."}),p.jsx("div",{className:"space-y-4",children:n.map((r,i)=>p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(L1,{className:"h-6 w-6 text-green-400 flex-shrink-0"}),p.jsx("span",{className:"text-blue-100",children:r})]},i))})]}),p.jsx("div",{className:"relative",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-8",children:[p.jsxs("div",{className:"text-center mb-6",children:[p.jsx(V1,{className:"h-12 w-12 text-yellow-300 mx-auto mb-4"}),p.jsx("h3",{className:"text-2xl font-bold mb-2",children:"Join Our Community"}),p.jsx("p",{className:"text-blue-100",children:"Connect with environmental professionals, researchers, and community leaders working together for cleaner air."})]}),p.jsx(Ie,{to:"/signup",className:"block w-full text-center py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105",children:"Start Monitoring Today"})]})})]})})}),p.jsx("section",{className:"py-16 bg-white",children:p.jsxs("div",{className:"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",children:[p.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-6",children:"Ready to Make a Difference?"}),p.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Join the growing network of communities using AirGuard to protect public health and improve environmental outcomes."}),p.jsxs(Ie,{to:"/signup",className:"inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:[p.jsx("span",{children:"Get Started Now"}),p.jsx(jc,{className:"h-5 w-5"})]})]})})]})},GP=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(!1),[o,a]=O.useState(""),[u,h]=O.useState(!1),{login:f}=as(),m=uu(),g=async N=>{if(N.preventDefault(),!t||!n){a("Please fill in all fields");return}try{a(""),h(!0),await f(t,n),m("/dashboard")}catch(T){a("Failed to log in. Please check your credentials."),console.error("Login error:",T)}finally{h(!1)}};return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"max-w-md w-full",children:[p.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",children:[p.jsxs("div",{className:"bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-8 text-center",children:[p.jsx("div",{className:"flex justify-center mb-4",children:p.jsx("div",{className:"p-3 bg-white/20 backdrop-blur-md rounded-2xl",children:p.jsx(Xr,{className:"h-8 w-8 text-white"})})}),p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Welcome Back"}),p.jsx("p",{className:"text-blue-100",children:"Sign in to access your environmental dashboard"})]}),p.jsxs("div",{className:"px-6 py-8",children:[o&&p.jsxs("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3",children:[p.jsx(D1,{className:"h-5 w-5 text-red-500 flex-shrink-0"}),p.jsx("span",{className:"text-red-700 text-sm",children:o})]}),p.jsxs("form",{onSubmit:g,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(ep,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"email",type:"email",value:t,onChange:N=>e(N.target.value),className:"block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200",placeholder:"Enter your email",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(od,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"password",type:i?"text":"password",value:n,onChange:N=>r(N.target.value),className:"block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200",placeholder:"Enter your password",required:!0}),p.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:i?p.jsx(id,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"}):p.jsx(sd,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"}),p.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),p.jsx(Ie,{to:"/forgot-password",className:"text-sm text-emerald-600 hover:text-emerald-500 transition-colors duration-200",children:"Forgot password?"})]}),p.jsx("button",{type:"submit",disabled:u,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105",children:u?p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),p.jsx("span",{children:"Signing in..."})]}):"Sign In"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-sm text-gray-600",children:["Don't have an account?"," ",p.jsx(Ie,{to:"/signup",className:"font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-200",children:"Sign up now"})]})})]})]}),p.jsx("div",{className:"mt-8 text-center",children:p.jsxs("p",{className:"text-sm text-gray-500",children:["By signing in, you agree to our"," ",p.jsx(Ie,{to:"/terms",className:"text-emerald-600 hover:text-emerald-500",children:"Terms of Service"})," ","and"," ",p.jsx(Ie,{to:"/privacy",className:"text-emerald-600 hover:text-emerald-500",children:"Privacy Policy"})]})})]})})},KP=()=>{const[t,e]=O.useState({name:"",email:"",password:"",confirmPassword:""}),[n,r]=O.useState(!1),[i,s]=O.useState(!1),[o,a]=O.useState(""),[u,h]=O.useState(!1),{signup:f}=as(),m=uu(),g=w=>{e({...t,[w.target.name]:w.target.value})},T=(w=>[{test:w.length>=8,text:"At least 8 characters"},{test:/[A-Z]/.test(w),text:"One uppercase letter"},{test:/[a-z]/.test(w),text:"One lowercase letter"},{test:/\d/.test(w),text:"One number"}])(t.password),P=T.every(w=>w.test),L=async w=>{if(w.preventDefault(),!t.name||!t.email||!t.password||!t.confirmPassword){a("Please fill in all fields");return}if(!P){a("Please meet all password requirements");return}if(t.password!==t.confirmPassword){a("Passwords do not match");return}try{a(""),h(!0),await f(t.email,t.password),m("/dashboard")}catch(v){a("Failed to create account. Please try again."),console.error("Signup error:",v)}finally{h(!1)}};return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:p.jsx("div",{className:"max-w-md w-full",children:p.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",children:[p.jsxs("div",{className:"bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-8 text-center",children:[p.jsx("div",{className:"flex justify-center mb-4",children:p.jsx("div",{className:"p-3 bg-white/20 backdrop-blur-md rounded-2xl",children:p.jsx(Xr,{className:"h-8 w-8 text-white"})})}),p.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Join AirGuard"}),p.jsx("p",{className:"text-blue-100",children:"Create your account to start monitoring"})]}),p.jsxs("div",{className:"px-6 py-8",children:[o&&p.jsxs("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3",children:[p.jsx(D1,{className:"h-5 w-5 text-red-500 flex-shrink-0"}),p.jsx("span",{className:"text-red-700 text-sm",children:o})]}),p.jsxs("form",{onSubmit:L,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(U1,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"name",name:"name",type:"text",value:t.name,onChange:g,className:"block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200",placeholder:"Enter your full name",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(ep,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"email",name:"email",type:"email",value:t.email,onChange:g,className:"block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200",placeholder:"Enter your email",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(od,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"password",name:"password",type:n?"text":"password",value:t.password,onChange:g,className:"block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200",placeholder:"Create a password",required:!0}),p.jsx("button",{type:"button",onClick:()=>r(!n),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:n?p.jsx(id,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"}):p.jsx(sd,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]}),t.password&&p.jsx("div",{className:"mt-3 space-y-2",children:T.map((w,v)=>p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(L1,{className:`h-4 w-4 ${w.test?"text-green-500":"text-gray-300"}`}),p.jsx("span",{className:`text-xs ${w.test?"text-green-700":"text-gray-500"}`,children:w.text})]},v))})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(od,{className:"h-5 w-5 text-gray-400"})}),p.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",value:t.confirmPassword,onChange:g,className:`block w-full pl-10 pr-12 py-3 border rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 transition-all duration-200 ${t.confirmPassword&&t.password!==t.confirmPassword?"border-red-300 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`,placeholder:"Confirm your password",required:!0}),p.jsx("button",{type:"button",onClick:()=>s(!i),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:i?p.jsx(id,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"}):p.jsx(sd,{className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]}),t.confirmPassword&&t.password!==t.confirmPassword&&p.jsx("p",{className:"mt-2 text-sm text-red-600",children:"Passwords do not match"})]}),p.jsxs("div",{className:"flex items-center",children:[p.jsx("input",{id:"terms",name:"terms",type:"checkbox",className:"h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded",required:!0}),p.jsxs("label",{htmlFor:"terms",className:"ml-2 block text-sm text-gray-900",children:["I agree to the"," ",p.jsx(Ie,{to:"/terms",className:"text-emerald-600 hover:text-emerald-500",children:"Terms of Service"})," ","and"," ",p.jsx(Ie,{to:"/privacy",className:"text-emerald-600 hover:text-emerald-500",children:"Privacy Policy"})]})]}),p.jsx("button",{type:"submit",disabled:u||!P,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105",children:u?p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),p.jsx("span",{children:"Creating account..."})]}):"Create Account"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-sm text-gray-600",children:["Already have an account?"," ",p.jsx(Ie,{to:"/login",className:"font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-200",children:"Sign in here"})]})})]})]})})})},Fc=()=>{var i;const{user:t}=as(),e=[{location:"Downtown District",aqi:42,status:"Good",color:"text-green-600 bg-green-100"},{location:"Industrial Zone",aqi:89,status:"Moderate",color:"text-yellow-600 bg-yellow-100"},{location:"Residential Area",aqi:28,status:"Good",color:"text-green-600 bg-green-100"},{location:"Harbor District",aqi:156,status:"Unhealthy",color:"text-red-600 bg-red-100"}],n=[{time:"2 min ago",message:"High NO₂ levels detected in Industrial Zone",priority:"high"},{time:"15 min ago",message:"Air quality improving in Downtown District",priority:"low"},{time:"1 hour ago",message:"Emergency response plan activated for Harbor District",priority:"critical"}],r=[{icon:p.jsx(Xr,{className:"h-6 w-6"}),label:"Air Quality Index",value:"52",change:"+3%",color:"text-emerald-600"},{icon:p.jsx(rd,{className:"h-6 w-6"}),label:"Active Alerts",value:"3",change:"-2",color:"text-red-600"},{icon:p.jsx(V1,{className:"h-6 w-6"}),label:"People Protected",value:"125K",change:"+5.2%",color:"text-blue-600"},{icon:p.jsx(ad,{className:"h-6 w-6"}),label:"Trees Recommended",value:"847",change:"+12",color:"text-green-600"}];return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[p.jsxs("div",{className:"mb-8",children:[p.jsxs("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:["Welcome back, ",(i=t==null?void 0:t.email)==null?void 0:i.split("@")[0],"!"]}),p.jsx("p",{className:"text-gray-600",children:"Here's your environmental monitoring overview for today."})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:r.map((s,o)=>p.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("div",{className:`p-3 rounded-xl ${s.color} bg-opacity-10`,children:p.jsx("div",{className:s.color,children:s.icon})}),p.jsxs("div",{className:"text-sm text-gray-500 flex items-center space-x-1",children:[p.jsx(F1,{className:"h-4 w-4"}),p.jsx("span",{children:s.change})]})]}),p.jsx("div",{className:"text-2xl font-bold text-gray-900 mb-1",children:s.value}),p.jsx("div",{className:"text-gray-600 text-sm",children:s.label})]},o))}),p.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[p.jsx("div",{className:"lg:col-span-2",children:p.jsxs("div",{className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-6",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center space-x-2",children:[p.jsx(Xr,{className:"h-6 w-6 text-emerald-600"}),p.jsx("span",{children:"Real-time Air Quality"})]}),p.jsx("button",{className:"px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors duration-200",children:"Refresh Data"})]}),p.jsx("div",{className:"space-y-4",children:e.map((s,o)=>p.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200",children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(tp,{className:"h-5 w-5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-gray-900",children:s.location}),p.jsxs("div",{className:"text-sm text-gray-600",children:["AQI: ",s.aqi]})]})]}),p.jsx("div",{className:`px-3 py-1 rounded-full text-sm font-medium ${s.color}`,children:s.status})]},o))}),p.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl",children:[p.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Today's Summary"}),p.jsxs("p",{className:"text-gray-600 text-sm",children:["Overall air quality is ",p.jsx("span",{className:"font-semibold text-emerald-600",children:"moderate"})," across monitored areas. Harbor District requires immediate attention due to elevated pollution levels."]})]})]})}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-6",children:[p.jsxs("h2",{className:"text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2",children:[p.jsx(rd,{className:"h-6 w-6 text-red-600"}),p.jsx("span",{children:"Recent Alerts"})]}),p.jsx("div",{className:"space-y-4",children:n.map((s,o)=>p.jsx("div",{className:"p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200",children:p.jsxs("div",{className:"flex items-start space-x-3",children:[p.jsx("div",{className:`w-2 h-2 rounded-full mt-2 ${s.priority==="critical"?"bg-red-500":s.priority==="high"?"bg-orange-500":"bg-green-500"}`}),p.jsxs("div",{className:"flex-1",children:[p.jsx("p",{className:"text-sm text-gray-900 mb-1",children:s.message}),p.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-500",children:[p.jsx(M1,{className:"h-3 w-3"}),p.jsx("span",{children:s.time})]})]})]})},o))})]}),p.jsxs("div",{className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-6",children:[p.jsxs("h2",{className:"text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2",children:[p.jsx(LP,{className:"h-6 w-6 text-blue-600"}),p.jsx("span",{children:"Quick Actions"})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("button",{className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition-colors duration-200 flex items-center space-x-3",children:[p.jsx(ld,{className:"h-5 w-5"}),p.jsx("span",{children:"Activate Emergency Response"})]}),p.jsxs("button",{className:"w-full p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors duration-200 flex items-center space-x-3",children:[p.jsx(ad,{className:"h-5 w-5"}),p.jsx("span",{children:"View Remediation Plan"})]}),p.jsxs("button",{className:"w-full p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors duration-200 flex items-center space-x-3",children:[p.jsx(j1,{className:"h-5 w-5"}),p.jsx("span",{children:"Issue Health Advisory"})]})]})]})]})]}),p.jsxs("div",{className:"mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsxs("h2",{className:"text-xl font-bold text-red-900 flex items-center space-x-2",children:[p.jsx(ld,{className:"h-6 w-6"}),p.jsx("span",{children:"Emergency Response Status"})]}),p.jsx("div",{className:"px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium",children:"All Systems Normal"})]}),p.jsx("p",{className:"text-red-700 mb-4",children:"Emergency response systems are online and monitoring for critical air quality events. Evacuation plans are ready for deployment if needed."}),p.jsxs("div",{className:"flex space-x-4",children:[p.jsx("button",{className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200",children:"View Emergency Plans"}),p.jsx("button",{className:"px-4 py-2 bg-white text-red-600 border border-red-300 hover:bg-red-50 rounded-lg transition-colors duration-200",children:"Configure Alerts"})]})]})]})})},Uc=({children:t})=>{const{user:e}=as();return e?p.jsx(p.Fragment,{children:t}):p.jsx(c0,{to:"/login"})},zy=({children:t})=>{const{user:e}=as();return e?p.jsx(c0,{to:"/dashboard"}):p.jsx(p.Fragment,{children:t})};function qP(){return p.jsxs("div",{className:"min-h-screen flex flex-col",children:[p.jsx(HP,{}),p.jsx("main",{className:"flex-1",children:p.jsxs(LC,{children:[p.jsx(Tr,{path:"/",element:p.jsx($P,{})}),p.jsx(Tr,{path:"/login",element:p.jsx(zy,{children:p.jsx(GP,{})})}),p.jsx(Tr,{path:"/signup",element:p.jsx(zy,{children:p.jsx(KP,{})})}),p.jsx(Tr,{path:"/dashboard",element:p.jsx(Uc,{children:p.jsx(Fc,{})})}),p.jsx(Tr,{path:"/emergency",element:p.jsx(Uc,{children:p.jsx(Fc,{})})}),p.jsx(Tr,{path:"/health",element:p.jsx(Uc,{children:p.jsx(Fc,{})})})]})}),p.jsx(WP,{})]})}function YP(){return p.jsx(bP,{children:p.jsx(iI,{children:p.jsx(qP,{})})})}e0(document.getElementById("root")).render(p.jsx(O.StrictMode,{children:p.jsx(YP,{})}));
