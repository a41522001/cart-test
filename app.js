(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const de={},_n=[],Be=()=>{},Zl=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bi=t=>t.startsWith("onUpdate:"),be=Object.assign,Ei=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eu=Object.prototype.hasOwnProperty,Q=(t,e)=>eu.call(t,e),F=Array.isArray,vn=t=>ir(t)==="[object Map]",Qr=t=>ir(t)==="[object Set]",oo=t=>ir(t)==="[object Date]",q=t=>typeof t=="function",ye=t=>typeof t=="string",Ut=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Va=t=>(le(t)||q(t))&&q(t.then)&&q(t.catch),Ha=Object.prototype.toString,ir=t=>Ha.call(t),tu=t=>ir(t).slice(8,-1),ja=t=>ir(t)==="[object Object]",wi=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nu=/-(\w)/g,nt=Zr(t=>t.replace(nu,(e,n)=>n?n.toUpperCase():"")),ru=/\B([A-Z])/g,sn=Zr(t=>t.replace(ru,"-$1").toLowerCase()),es=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=Zr(t=>t?`on${es(t)}`:""),$t=(t,e)=>!Object.is(t,e),Cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e},su=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let ao;const Wa=()=>ao||(ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ii(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?cu(r):Ii(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ye(t)||le(t))return t}const iu=/;(?![^(]*\))/g,ou=/:([^]+)/,au=/\/\*[^]*?\*\//g;function cu(t){const e={};return t.replace(au,"").split(iu).forEach(n=>{if(n){const r=n.split(ou);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ts(t){let e="";if(ye(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=ts(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uu=yi(lu);function Ka(t){return!!t||t===""}function fu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ns(t[r],e[r]);return n}function ns(t,e){if(t===e)return!0;let n=oo(t),r=oo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ut(t),r=Ut(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?fu(t,e):!1;if(n=le(t),r=le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ns(t[o],e[o]))return!1}}return String(t)===String(e)}function za(t,e){return t.findIndex(n=>ns(n,e))}const $e=t=>ye(t)?t:t==null?"":F(t)||le(t)&&(t.toString===Ha||!q(t.toString))?JSON.stringify(t,qa,2):String(t),qa=(t,e)=>e&&e.__v_isRef?qa(t,e.value):vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ts(r,i)+" =>"]=s,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ts(n))}:Ut(e)?Ts(e):le(e)&&!F(e)&&!ja(e)?String(e):e,Ts=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class Ga{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ja(t){return new Ga(t)}function du(t,e=Ue){e&&e.active&&e.effects.push(t)}function Ya(){return Ue}function hu(t){Ue&&Ue.cleanups.push(t)}let Qt;class Si{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,du(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,on();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(pu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),an()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ot,n=Qt;try{return Ot=!0,Qt=this,this._runnings++,co(this),this.fn()}finally{lo(this),this._runnings--,Qt=n,Ot=e}}stop(){var e;this.active&&(co(this),lo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function pu(t){return t.value}function co(t){t._trackId++,t._depsLength=0}function lo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Xa(t.deps[e],t);t.deps.length=t._depsLength}}function Xa(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ot=!0,zs=0;const Qa=[];function on(){Qa.push(Ot),Ot=!1}function an(){const t=Qa.pop();Ot=t===void 0?!0:t}function Ci(){zs++}function Ti(){for(zs--;!zs&&qs.length;)qs.shift()()}function Za(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Xa(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qs=[];function ec(t,e,n){Ci();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&qs.push(r.scheduler)))}Ti()}const tc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Dr=new WeakMap,Zt=Symbol(""),Gs=Symbol("");function De(t,e,n){if(Ot&&Qt){let r=Dr.get(t);r||Dr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=tc(()=>r.delete(n))),Za(Qt,s)}}function lt(t,e,n,r,s,i){const o=Dr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Ut(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(Zt)),vn(t)&&a.push(o.get(Gs)));break;case"delete":F(t)||(a.push(o.get(Zt)),vn(t)&&a.push(o.get(Gs)));break;case"set":vn(t)&&a.push(o.get(Zt));break}Ci();for(const c of a)c&&ec(c,4);Ti()}function gu(t,e){var n;return(n=Dr.get(t))==null?void 0:n.get(e)}const mu=yi("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut)),uo=_u();function _u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)De(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on(),Ci();const r=X(this)[e].apply(this,n);return Ti(),an(),r}}),t}function vu(t){const e=X(this);return De(e,"has",t),e.hasOwnProperty(t)}class rc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ou:ac:i?oc:ic).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&Q(uo,n))return Reflect.get(uo,n,r);if(n==="hasOwnProperty")return vu}const a=Reflect.get(e,n,r);return(Ut(n)?nc.has(n):mu(n))||(s||De(e,"get",n),i)?a:Ee(a)?o&&wi(n)?a:a.value:le(a)?s?lc(a):or(a):a}}class sc extends rc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Rn(i);if(!xr(r)&&!Rn(r)&&(i=X(i),r=X(r)),!F(e)&&Ee(i)&&!Ee(r))return c?!1:(i.value=r,!0)}const o=F(e)&&wi(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,s);return e===X(s)&&(o?$t(r,i)&&lt(e,"set",n,r):lt(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&lt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ut(n)||!nc.has(n))&&De(e,"has",n),r}ownKeys(e){return De(e,"iterate",F(e)?"length":Zt),Reflect.ownKeys(e)}}class yu extends rc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bu=new sc,Eu=new yu,wu=new sc(!0),Ri=t=>t,rs=t=>Reflect.getPrototypeOf(t);function _r(t,e,n=!1,r=!1){t=t.__v_raw;const s=X(t),i=X(e);n||($t(e,i)&&De(s,"get",e),De(s,"get",i));const{has:o}=rs(s),a=r?Ri:n?ki:Jn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function vr(t,e=!1){const n=this.__v_raw,r=X(n),s=X(t);return e||($t(t,s)&&De(r,"has",t),De(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function yr(t,e=!1){return t=t.__v_raw,!e&&De(X(t),"iterate",Zt),Reflect.get(t,"size",t)}function fo(t){t=X(t);const e=X(this);return rs(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function ho(t,e){e=X(e);const n=X(this),{has:r,get:s}=rs(n);let i=r.call(n,t);i||(t=X(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$t(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function po(t){const e=X(this),{has:n,get:r}=rs(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lt(e,"delete",t,void 0),i}function go(){const t=X(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function br(t,e){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=e?Ri:t?ki:Jn;return!t&&De(a,"iterate",Zt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Er(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=vn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ri:e?ki:Jn;return!e&&De(i,"iterate",c?Gs:Zt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Iu(){const t={get(i){return _r(this,i)},get size(){return yr(this)},has:vr,add:fo,set:ho,delete:po,clear:go,forEach:br(!1,!1)},e={get(i){return _r(this,i,!1,!0)},get size(){return yr(this)},has:vr,add:fo,set:ho,delete:po,clear:go,forEach:br(!1,!0)},n={get(i){return _r(this,i,!0)},get size(){return yr(this,!0)},has(i){return vr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:br(!0,!1)},r={get(i){return _r(this,i,!0,!0)},get size(){return yr(this,!0)},has(i){return vr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Er(i,!1,!1),n[i]=Er(i,!0,!1),e[i]=Er(i,!1,!0),r[i]=Er(i,!0,!0)}),[t,n,e,r]}const[Su,Cu,Tu,Ru]=Iu();function Ai(t,e){const n=e?t?Ru:Tu:t?Cu:Su;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const Au={get:Ai(!1,!1)},Pu={get:Ai(!1,!0)},ku={get:Ai(!0,!1)},ic=new WeakMap,oc=new WeakMap,ac=new WeakMap,Ou=new WeakMap;function Nu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lu(t){return t.__v_skip||!Object.isExtensible(t)?0:Nu(tu(t))}function or(t){return Rn(t)?t:Pi(t,!1,bu,Au,ic)}function cc(t){return Pi(t,!1,wu,Pu,oc)}function lc(t){return Pi(t,!0,Eu,ku,ac)}function Pi(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Lu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Nt(t){return Rn(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function xr(t){return!!(t&&t.__v_isShallow)}function uc(t){return Nt(t)||Rn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function ss(t){return Object.isExtensible(t)&&Mr(t,"__v_skip",!0),t}const Jn=t=>le(t)?or(t):t,ki=t=>le(t)?lc(t):t;class fc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Si(()=>e(this._value),()=>Tr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=X(this);return(!e._cacheable||e.effect.dirty)&&$t(e._value,e._value=e.effect.run())&&Tr(e,4),dc(e),e.effect._dirtyLevel>=2&&Tr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Mu(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new fc(r,s,i||!s,n)}function dc(t){var e;Ot&&Qt&&(t=X(t),Za(Qt,(e=t.dep)!=null?e:t.dep=tc(()=>t.dep=void 0,t instanceof fc?t:void 0)))}function Tr(t,e=4,n){t=X(t);const r=t.dep;r&&ec(r,e)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function re(t){return hc(t,!1)}function Du(t){return hc(t,!0)}function hc(t,e){return Ee(t)?t:new xu(t,e)}class xu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Jn(e)}get value(){return dc(this),this._value}set value(e){const n=this.__v_isShallow||xr(e)||Rn(e);e=n?e:X(e),$t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jn(e),Tr(this,4))}}function Lt(t){return Ee(t)?t.value:t}const Uu={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pc(t){return Nt(t)?t:new Proxy(t,Uu)}function $u(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Bu(t,n);return e}class Fu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gu(X(this._object),this._key)}}function Bu(t,e,n){const r=t[e];return Ee(r)?r:new Fu(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(t,e,n,r){try{return r?t(...r):t()}catch(s){is(s,e,n)}}function He(t,e,n,r){if(q(t)){const i=Mt(t,e,n,r);return i&&Va(i)&&i.catch(o=>{is(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(He(t[i],e,n,r));return s}function is(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mt(c,null,10,[t,o,a]);return}}Vu(t,n,s,r)}function Vu(t,e,n,r=!0){console.error(t)}let Yn=!1,Js=!1;const Te=[];let Qe=0;const yn=[];let Et=null,Gt=0;const gc=Promise.resolve();let Oi=null;function Ni(t){const e=Oi||gc;return t?e.then(this?t.bind(this):t):e}function Hu(t){let e=Qe+1,n=Te.length;for(;e<n;){const r=e+n>>>1,s=Te[r],i=Xn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Li(t){(!Te.length||!Te.includes(t,Yn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Te.push(t):Te.splice(Hu(t.id),0,t),mc())}function mc(){!Yn&&!Js&&(Js=!0,Oi=gc.then(vc))}function ju(t){const e=Te.indexOf(t);e>Qe&&Te.splice(e,1)}function Wu(t){F(t)?yn.push(...t):(!Et||!Et.includes(t,t.allowRecurse?Gt+1:Gt))&&yn.push(t),mc()}function mo(t,e,n=Yn?Qe+1:0){for(;n<Te.length;n++){const r=Te[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Te.splice(n,1),n--,r()}}}function _c(t){if(yn.length){const e=[...new Set(yn)].sort((n,r)=>Xn(n)-Xn(r));if(yn.length=0,Et){Et.push(...e);return}for(Et=e,Gt=0;Gt<Et.length;Gt++)Et[Gt]();Et=null,Gt=0}}const Xn=t=>t.id==null?1/0:t.id,Ku=(t,e)=>{const n=Xn(t)-Xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vc(t){Js=!1,Yn=!0,Te.sort(Ku);try{for(Qe=0;Qe<Te.length;Qe++){const e=Te[Qe];e&&e.active!==!1&&Mt(e,null,14)}}finally{Qe=0,Te.length=0,_c(),Yn=!1,Oi=null,(Te.length||yn.length)&&vc()}}function zu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||de;p&&(s=n.map(g=>ye(g)?g.trim():g)),d&&(s=n.map(Ks))}let a,c=r[a=Cs(e)]||r[a=Cs(nt(e))];!c&&i&&(c=r[a=Cs(sn(e))]),c&&He(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,He(l,t,6,s)}}function yc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=yc(l,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):be(o,i),le(t)&&r.set(t,o),o)}function os(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,sn(e))||Q(t,e))}let Re=null,as=null;function Ur(t){const e=Re;return Re=t,as=t&&t.type.__scopeId||null,e}function cn(t){as=t}function ln(){as=null}function kt(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ao(-1);const i=Ur(e);let o;try{o=t(...s)}finally{Ur(i),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:g,ctx:w,inheritAttrs:C}=t;let N,L;const U=Ur(t);try{if(n.shapeFlag&4){const z=s||r,W=z;N=Xe(u.call(W,z,d,i,g,p,w)),L=c}else{const z=e;N=Xe(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),L=e.props?c:qu(c)}}catch(z){Wn.length=0,is(z,t,1),N=fe(Ke)}let B=N;if(L&&C!==!1){const z=Object.keys(L),{shapeFlag:W}=B;z.length&&W&7&&(o&&z.some(bi)&&(L=Gu(L,o)),B=Ft(B,L))}return n.dirs&&(B=Ft(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),N=B,Ur(U),N}const qu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},Gu=(t,e)=>{const n={};for(const r in t)(!bi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ju(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_o(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!os(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_o(r,o,l):!0:!!o;return!1}function _o(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!os(n,i))return!0}return!1}function Yu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bc="components";function cs(t,e){return Qu(bc,t,!0,e)||t}const Xu=Symbol.for("v-ndc");function Qu(t,e,n=!0,r=!1){const s=Re||Ie;if(s){const i=s.type;if(t===bc){const a=Yf(i,!1);if(a&&(a===e||a===nt(e)||a===es(nt(e))))return i}const o=vo(s[t]||i[t],e)||vo(s.appContext[t],e);return!o&&r?i:o}}function vo(t,e){return t&&(t[e]||t[nt(e)]||t[es(nt(e))])}const Zu=t=>t.__isSuspense;function ef(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Wu(t)}const tf=Symbol.for("v-scx"),nf=()=>Ae(tf);function rf(t,e){return Mi(t,null,e)}const wr={};function bn(t,e,n){return Mi(t,e,n)}function Mi(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=de){if(e&&i){const V=e;e=(...ee)=>{V(...ee),W()}}const c=Ie,l=V=>r===!0?V:Xt(V,r===!1?1:void 0);let u,d=!1,p=!1;if(Ee(t)?(u=()=>t.value,d=xr(t)):Nt(t)?(u=()=>l(t),d=!0):F(t)?(p=!0,d=t.some(V=>Nt(V)||xr(V)),u=()=>t.map(V=>{if(Ee(V))return V.value;if(Nt(V))return l(V);if(q(V))return Mt(V,c,2)})):q(t)?e?u=()=>Mt(t,c,2):u=()=>(g&&g(),He(t,c,3,[w])):u=Be,e&&r){const V=u;u=()=>Xt(V())}let g,w=V=>{g=B.onStop=()=>{Mt(V,c,4),g=B.onStop=void 0}},C;if(ps)if(w=Be,e?n&&He(e,c,3,[u(),p?[]:void 0,w]):u(),s==="sync"){const V=nf();C=V.__watcherHandles||(V.__watcherHandles=[])}else return Be;let N=p?new Array(t.length).fill(wr):wr;const L=()=>{if(!(!B.active||!B.dirty))if(e){const V=B.run();(r||d||(p?V.some((ee,P)=>$t(ee,N[P])):$t(V,N)))&&(g&&g(),He(e,c,3,[V,N===wr?void 0:p&&N[0]===wr?[]:N,w]),N=V)}else B.run()};L.allowRecurse=!!e;let U;s==="sync"?U=L:s==="post"?U=()=>Le(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),U=()=>Li(L));const B=new Si(u,Be,U),z=Ya(),W=()=>{B.stop(),z&&Ei(z.effects,B)};return e?n?L():N=B.run():s==="post"?Le(B.run.bind(B),c&&c.suspense):B.run(),C&&C.push(W),W}function sf(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?Ec(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=cr(this),a=Mi(s,i.bind(r),n);return o(),a}function Ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xt(t,e,n=0,r){if(!le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ee(t))Xt(t.value,e,n,r);else if(F(t))for(let s=0;s<t.length;s++)Xt(t[s],e,n,r);else if(Qr(t)||vn(t))t.forEach(s=>{Xt(s,e,n,r)});else if(ja(t))for(const s in t)Xt(t[s],e,n,r);return t}function me(t,e){if(Re===null)return t;const n=gs(Re)||Re.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=de]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Xt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(on(),He(c,n,8,[t.el,a,t,e]),an())}}const wt=Symbol("_leaveCb"),Ir=Symbol("_enterCb");function of(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ar(()=>{t.isMounted=!0}),Rc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],wc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},af={name:"BaseTransition",props:wc,setup(t,{slots:e}){const n=Kf(),r=of();return()=>{const s=e.default&&Sc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==Ke){i=p;break}}const o=X(t),{mode:a}=o;if(r.isLeaving)return As(i);const c=yo(i);if(!c)return As(i);const l=Ys(c,o,r,n);Xs(c,l);const u=n.subTree,d=u&&yo(u);if(d&&d.type!==Ke&&!Jt(c,d)){const p=Ys(d,o,r,n);if(Xs(d,p),a==="out-in")return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},As(i);a==="in-out"&&c.type!==Ke&&(p.delayLeave=(g,w,C)=>{const N=Ic(r,d);N[String(d.key)]=d,g[wt]=()=>{w(),g[wt]=void 0,delete l.delayedLeave},l.delayedLeave=C})}return i}}},cf=af;function Ic(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ys(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:C,onAppear:N,onAfterAppear:L,onAppearCancelled:U}=e,B=String(t.key),z=Ic(n,t),W=(P,x)=>{P&&He(P,r,9,x)},V=(P,x)=>{const G=x[1];W(P,x),F(P)?P.every(ae=>ae.length<=1)&&G():P.length<=1&&G()},ee={mode:i,persisted:o,beforeEnter(P){let x=a;if(!n.isMounted)if(s)x=C||a;else return;P[wt]&&P[wt](!0);const G=z[B];G&&Jt(t,G)&&G.el[wt]&&G.el[wt](),W(x,[P])},enter(P){let x=c,G=l,ae=u;if(!n.isMounted)if(s)x=N||c,G=L||l,ae=U||u;else return;let M=!1;const Z=P[Ir]=Se=>{M||(M=!0,Se?W(ae,[P]):W(G,[P]),ee.delayedLeave&&ee.delayedLeave(),P[Ir]=void 0)};x?V(x,[P,Z]):Z()},leave(P,x){const G=String(t.key);if(P[Ir]&&P[Ir](!0),n.isUnmounting)return x();W(d,[P]);let ae=!1;const M=P[wt]=Z=>{ae||(ae=!0,x(),Z?W(w,[P]):W(g,[P]),P[wt]=void 0,z[G]===t&&delete z[G])};z[G]=t,p?V(p,[P,M]):M()},clone(P){return Ys(P,e,n,r)}};return ee}function As(t){if(ls(t))return t=Ft(t),t.children=null,t}function yo(t){return ls(t)?t.children?t.children[0]:void 0:t}function Xs(t,e){t.shapeFlag&6&&t.component?Xs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&s++,r=r.concat(Sc(o.children,e,a))):(e||o.type!==Ke)&&r.push(a!=null?Ft(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cc(t,e){return q(t)?be({name:t.name},e,{setup:t}):t}const Rr=t=>!!t.type.__asyncLoader,ls=t=>t.type.__isKeepAlive;function lf(t,e){Tc(t,"a",e)}function uf(t,e){Tc(t,"da",e)}function Tc(t,e,n=Ie){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ls(s.parent.vnode)&&ff(r,e,n,s),s=s.parent}}function ff(t,e,n,r){const s=us(e,t,r,!0);Di(()=>{Ei(r[e],s)},n)}function us(t,e,n=Ie,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on();const a=cr(n),c=He(e,n,t,o);return a(),an(),c});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=Ie)=>(!ps||t==="sp")&&us(t,(...r)=>e(...r),n),df=dt("bm"),ar=dt("m"),hf=dt("bu"),pf=dt("u"),Rc=dt("bum"),Di=dt("um"),gf=dt("sp"),mf=dt("rtg"),_f=dt("rtc");function vf(t,e=Ie){us("ec",t,e)}function $r(t,e,n,r){let s;const i=n&&n[r];if(F(t)||ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Qs=t=>t?Fc(t)?gs(t)||t.proxy:Qs(t.parent):null,Hn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qs(t.parent),$root:t=>Qs(t.root),$emit:t=>t.emit,$options:t=>xi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Li(t.update)}),$nextTick:t=>t.n||(t.n=Ni.bind(t.proxy)),$watch:t=>sf.bind(t)}),Ps=(t,e)=>t!==de&&!t.__isScriptSetup&&Q(t,e),yf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ps(r,e))return o[e]=1,r[e];if(s!==de&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==de&&Q(n,e))return o[e]=4,n[e];Zs&&(o[e]=0)}}const u=Hn[e];let d,p;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==de&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ps(s,e)?(s[e]=n,!0):r!==de&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&Q(t,o)||Ps(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(Hn,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bo(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zs=!0;function bf(t){const e=xi(t),n=t.proxy,r=t.ctx;Zs=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:C,deactivated:N,beforeDestroy:L,beforeUnmount:U,destroyed:B,unmounted:z,render:W,renderTracked:V,renderTriggered:ee,errorCaptured:P,serverPrefetch:x,expose:G,inheritAttrs:ae,components:M,directives:Z,filters:Se}=e;if(l&&Ef(l,r,null),o)for(const ie in o){const te=o[ie];q(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);le(ie)&&(t.data=or(ie))}if(Zs=!0,i)for(const ie in i){const te=i[ie],st=q(te)?te.bind(n,n):q(te.get)?te.get.bind(n,n):Be,pt=!q(te)&&q(te.set)?te.set.bind(n):Be,Ge=ve({get:st,set:pt});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ne=>Ge.value=Ne})}if(a)for(const ie in a)Ac(a[ie],r,n,ie);if(c){const ie=q(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(te=>{jn(te,ie[te])})}u&&Eo(u,t,"c");function Y(ie,te){F(te)?te.forEach(st=>ie(st.bind(n))):te&&ie(te.bind(n))}if(Y(df,d),Y(ar,p),Y(hf,g),Y(pf,w),Y(lf,C),Y(uf,N),Y(vf,P),Y(_f,V),Y(mf,ee),Y(Rc,U),Y(Di,z),Y(gf,x),F(G))if(G.length){const ie=t.exposed||(t.exposed={});G.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:st=>n[te]=st})})}else t.exposed||(t.exposed={});W&&t.render===Be&&(t.render=W),ae!=null&&(t.inheritAttrs=ae),M&&(t.components=M),Z&&(t.directives=Z)}function Ef(t,e,n=Be){F(t)&&(t=ei(t));for(const r in t){const s=t[r];let i;le(s)?"default"in s?i=Ae(s.from||r,s.default,!0):i=Ae(s.from||r):i=Ae(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){He(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ac(t,e,n,r){const s=r.includes(".")?Ec(n,r):()=>n[r];if(ye(t)){const i=e[t];q(i)&&bn(s,i)}else if(q(t))bn(s,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>Ac(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&bn(s,i,t)}}function xi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Fr(c,l,o,!0)),Fr(c,e,o)),le(e)&&i.set(e,c),c}function Fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fr(t,i,n,!0),s&&s.forEach(o=>Fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=wf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wf={data:wo,props:Io,emits:Io,methods:$n,computed:$n,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:$n,directives:$n,watch:Sf,provide:wo,inject:If};function wo(t,e){return e?t?function(){return be(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function If(t,e){return $n(ei(t),ei(e))}function ei(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?be(Object.create(null),t,e):e}function Io(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:be(Object.create(null),bo(t),bo(e??{})):e}function Sf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const r in e)n[r]=Oe(t[r],e[r]);return n}function Pc(){return{app:null,config:{isNativeTag:Zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Tf(t,e){return function(r,s=null){q(r)||(r=be({},r)),s!=null&&!le(s)&&(s=null);const i=Pc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Cf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=fe(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,gs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=En;En=c;try{return l()}finally{En=u}}};return c}}let En=null;function jn(t,e){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[t]=e}}function Ae(t,e,n=!1){const r=Ie||Re;if(r||En){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:En._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function Rf(){return!!(Ie||Re||En)}function Af(t,e,n,r=!1){const s={},i={};Mr(i,ds,1),t.propsDefaults=Object.create(null),kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(os(t.emitsOptions,p))continue;const g=e[p];if(c)if(Q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const w=nt(p);s[w]=ti(c,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{kc(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!Q(e,d)&&((u=sn(d))===d||!Q(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=ti(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Q(e,d))&&(delete i[d],l=!0)}l&&lt(t,"set","$attrs")}function kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vn(c))continue;const l=e[c];let u;s&&Q(s,u=nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:os(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||de;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ti(s,c,d,l[d],t,!Q(l,d))}}return o}function ti(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=cr(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function Oc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=d=>{c=!0;const[p,g]=Oc(d,e,!0);be(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,_n),_n;if(F(i))for(let u=0;u<i.length;u++){const d=nt(i[u]);So(d)&&(o[d]=de)}else if(i)for(const u in i){const d=nt(u);if(So(d)){const p=i[u],g=o[d]=F(p)||q(p)?{type:p}:be({},p);if(g){const w=Ro(Boolean,g.type),C=Ro(String,g.type);g[0]=w>-1,g[1]=C<0||w<C,(w>-1||Q(g,"default"))&&a.push(d)}}}const l=[o,a];return le(t)&&r.set(t,l),l}function So(t){return t[0]!=="$"&&!Vn(t)}function Co(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function To(t,e){return Co(t)===Co(e)}function Ro(t,e){return F(e)?e.findIndex(n=>To(n,t)):q(e)&&To(e,t)?0:-1}const Nc=t=>t[0]==="_"||t==="$stable",Ui=t=>F(t)?t.map(Xe):[Xe(t)],kf=(t,e,n)=>{if(e._n)return e;const r=kt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Lc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nc(s))continue;const i=t[s];if(q(i))e[s]=kf(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},Mc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},Of=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Mr(e,"_",n)):Lc(e,t.slots={})}else t.slots={},e&&Mc(t,e);Mr(t.slots,ds,1)},Nf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(be(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Lc(e,s)),o=e}else e&&(Mc(t,e),o={default:1});if(i)for(const a in s)!Nc(a)&&o[a]==null&&delete s[a]};function ni(t,e,n,r,s=!1){if(F(t)){t.forEach((p,g)=>ni(p,e&&(F(e)?e[g]:e),n,r,s));return}if(Rr(r)&&!s)return;const i=r.shapeFlag&4?gs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,Q(d,l)&&(d[l]=null)):Ee(l)&&(l.value=null)),q(c))Mt(c,a,12,[o,u]);else{const p=ye(c),g=Ee(c);if(p||g){const w=()=>{if(t.f){const C=p?Q(d,c)?d[c]:u[c]:c.value;s?F(C)&&Ei(C,i):F(C)?C.includes(i)||C.push(i):p?(u[c]=[i],Q(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Le(w,n)):w()}}}const Le=ef;function Lf(t){return Mf(t)}function Mf(t,e){const n=Wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Be,insertStaticContent:w}=t,C=(f,h,m,b=null,v=null,S=null,A=void 0,I=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!Jt(f,h)&&(b=y(f),Ne(f,v,S,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:E,ref:O,shapeFlag:H}=h;switch(E){case fs:N(f,h,m,b);break;case Ke:L(f,h,m,b);break;case Os:f==null&&U(h,m,b,A);break;case _e:M(f,h,m,b,v,S,A,I,T);break;default:H&1?W(f,h,m,b,v,S,A,I,T):H&6?Z(f,h,m,b,v,S,A,I,T):(H&64||H&128)&&E.process(f,h,m,b,v,S,A,I,T,D)}O!=null&&v&&ni(O,f&&f.ref,S,h||f,!h)},N=(f,h,m,b)=>{if(f==null)r(h.el=a(h.children),m,b);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},L=(f,h,m,b)=>{f==null?r(h.el=c(h.children||""),m,b):h.el=f.el},U=(f,h,m,b)=>{[f.el,f.anchor]=w(f.children,h,m,b,f.el,f.anchor)},B=({el:f,anchor:h},m,b)=>{let v;for(;f&&f!==h;)v=p(f),r(f,m,b),f=v;r(h,m,b)},z=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},W=(f,h,m,b,v,S,A,I,T)=>{h.type==="svg"?A="svg":h.type==="math"&&(A="mathml"),f==null?V(h,m,b,v,S,A,I,T):x(f,h,v,S,A,I,T)},V=(f,h,m,b,v,S,A,I)=>{let T,E;const{props:O,shapeFlag:H,transition:$,dirs:K}=f;if(T=f.el=o(f.type,S,O&&O.is,O),H&8?u(T,f.children):H&16&&P(f.children,T,null,b,v,ks(f,S),A,I),K&&jt(f,null,b,"created"),ee(T,f,f.scopeId,A,b),O){for(const oe in O)oe!=="value"&&!Vn(oe)&&i(T,oe,null,O[oe],S,f.children,b,v,Ce);"value"in O&&i(T,"value",null,O.value,S),(E=O.onVnodeBeforeMount)&&Ye(E,b,f)}K&&jt(f,null,b,"beforeMount");const J=Df(v,$);J&&$.beforeEnter(T),r(T,h,m),((E=O&&O.onVnodeMounted)||J||K)&&Le(()=>{E&&Ye(E,b,f),J&&$.enter(T),K&&jt(f,null,b,"mounted")},v)},ee=(f,h,m,b,v)=>{if(m&&g(f,m),b)for(let S=0;S<b.length;S++)g(f,b[S]);if(v){let S=v.subTree;if(h===S){const A=v.vnode;ee(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},P=(f,h,m,b,v,S,A,I,T=0)=>{for(let E=T;E<f.length;E++){const O=f[E]=I?It(f[E]):Xe(f[E]);C(null,O,h,m,b,v,S,A,I)}},x=(f,h,m,b,v,S,A)=>{const I=h.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:O}=h;T|=f.patchFlag&16;const H=f.props||de,$=h.props||de;let K;if(m&&Wt(m,!1),(K=$.onVnodeBeforeUpdate)&&Ye(K,m,h,f),O&&jt(h,f,m,"beforeUpdate"),m&&Wt(m,!0),E?G(f.dynamicChildren,E,I,m,b,ks(h,v),S):A||te(f,h,I,null,m,b,ks(h,v),S,!1),T>0){if(T&16)ae(I,h,H,$,m,b,v);else if(T&2&&H.class!==$.class&&i(I,"class",null,$.class,v),T&4&&i(I,"style",H.style,$.style,v),T&8){const J=h.dynamicProps;for(let oe=0;oe<J.length;oe++){const pe=J[oe],we=H[pe],je=$[pe];(je!==we||pe==="value")&&i(I,pe,we,je,v,f.children,m,b,Ce)}}T&1&&f.children!==h.children&&u(I,h.children)}else!A&&E==null&&ae(I,h,H,$,m,b,v);((K=$.onVnodeUpdated)||O)&&Le(()=>{K&&Ye(K,m,h,f),O&&jt(h,f,m,"updated")},b)},G=(f,h,m,b,v,S,A)=>{for(let I=0;I<h.length;I++){const T=f[I],E=h[I],O=T.el&&(T.type===_e||!Jt(T,E)||T.shapeFlag&70)?d(T.el):m;C(T,E,O,null,b,v,S,A,!0)}},ae=(f,h,m,b,v,S,A)=>{if(m!==b){if(m!==de)for(const I in m)!Vn(I)&&!(I in b)&&i(f,I,m[I],null,A,h.children,v,S,Ce);for(const I in b){if(Vn(I))continue;const T=b[I],E=m[I];T!==E&&I!=="value"&&i(f,I,E,T,A,h.children,v,S,Ce)}"value"in b&&i(f,"value",m.value,b.value,A)}},M=(f,h,m,b,v,S,A,I,T)=>{const E=h.el=f?f.el:a(""),O=h.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:$,slotScopeIds:K}=h;K&&(I=I?I.concat(K):K),f==null?(r(E,m,b),r(O,m,b),P(h.children||[],m,O,v,S,A,I,T)):H>0&&H&64&&$&&f.dynamicChildren?(G(f.dynamicChildren,$,m,v,S,A,I),(h.key!=null||v&&h===v.subTree)&&Dc(f,h,!0)):te(f,h,m,O,v,S,A,I,T)},Z=(f,h,m,b,v,S,A,I,T)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?v.ctx.activate(h,m,b,A,T):Se(h,m,b,v,S,A,T):ke(f,h,T)},Se=(f,h,m,b,v,S,A)=>{const I=f.component=Wf(f,b,v);if(ls(f)&&(I.ctx.renderer=D),zf(I),I.asyncDep){if(v&&v.registerDep(I,Y),!f.el){const T=I.subTree=fe(Ke);L(null,T,h,m)}}else Y(I,f,h,m,v,S,A)},ke=(f,h,m)=>{const b=h.component=f.component;if(Ju(f,h,m))if(b.asyncDep&&!b.asyncResolved){ie(b,h,m);return}else b.next=h,ju(b.update),b.effect.dirty=!0,b.update();else h.el=f.el,b.vnode=h},Y=(f,h,m,b,v,S,A)=>{const I=()=>{if(f.isMounted){let{next:O,bu:H,u:$,parent:K,vnode:J}=f;{const hn=xc(f);if(hn){O&&(O.el=J.el,ie(f,O,A)),hn.asyncDep.then(()=>{f.isUnmounted||I()});return}}let oe=O,pe;Wt(f,!1),O?(O.el=J.el,ie(f,O,A)):O=J,H&&Cr(H),(pe=O.props&&O.props.onVnodeBeforeUpdate)&&Ye(pe,K,O,J),Wt(f,!0);const we=Rs(f),je=f.subTree;f.subTree=we,C(je,we,d(je.el),y(je),f,v,S),O.el=we.el,oe===null&&Yu(f,we.el),$&&Le($,v),(pe=O.props&&O.props.onVnodeUpdated)&&Le(()=>Ye(pe,K,O,J),v)}else{let O;const{el:H,props:$}=h,{bm:K,m:J,parent:oe}=f,pe=Rr(h);if(Wt(f,!1),K&&Cr(K),!pe&&(O=$&&$.onVnodeBeforeMount)&&Ye(O,oe,h),Wt(f,!0),H&&he){const we=()=>{f.subTree=Rs(f),he(H,f.subTree,f,v,null)};pe?h.type.__asyncLoader().then(()=>!f.isUnmounted&&we()):we()}else{const we=f.subTree=Rs(f);C(null,we,m,b,f,v,S),h.el=we.el}if(J&&Le(J,v),!pe&&(O=$&&$.onVnodeMounted)){const we=h;Le(()=>Ye(O,oe,we),v)}(h.shapeFlag&256||oe&&Rr(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&Le(f.a,v),f.isMounted=!0,h=m=b=null}},T=f.effect=new Si(I,Be,()=>Li(E),f.scope),E=f.update=()=>{T.dirty&&T.run()};E.id=f.uid,Wt(f,!0),E()},ie=(f,h,m)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,Pf(f,h.props,b,m),Nf(f,h.children,m),on(),mo(f),an()},te=(f,h,m,b,v,S,A,I,T=!1)=>{const E=f&&f.children,O=f?f.shapeFlag:0,H=h.children,{patchFlag:$,shapeFlag:K}=h;if($>0){if($&128){pt(E,H,m,b,v,S,A,I,T);return}else if($&256){st(E,H,m,b,v,S,A,I,T);return}}K&8?(O&16&&Ce(E,v,S),H!==E&&u(m,H)):O&16?K&16?pt(E,H,m,b,v,S,A,I,T):Ce(E,v,S,!0):(O&8&&u(m,""),K&16&&P(H,m,b,v,S,A,I,T))},st=(f,h,m,b,v,S,A,I,T)=>{f=f||_n,h=h||_n;const E=f.length,O=h.length,H=Math.min(E,O);let $;for($=0;$<H;$++){const K=h[$]=T?It(h[$]):Xe(h[$]);C(f[$],K,m,null,v,S,A,I,T)}E>O?Ce(f,v,S,!0,!1,H):P(h,m,b,v,S,A,I,T,H)},pt=(f,h,m,b,v,S,A,I,T)=>{let E=0;const O=h.length;let H=f.length-1,$=O-1;for(;E<=H&&E<=$;){const K=f[E],J=h[E]=T?It(h[E]):Xe(h[E]);if(Jt(K,J))C(K,J,m,null,v,S,A,I,T);else break;E++}for(;E<=H&&E<=$;){const K=f[H],J=h[$]=T?It(h[$]):Xe(h[$]);if(Jt(K,J))C(K,J,m,null,v,S,A,I,T);else break;H--,$--}if(E>H){if(E<=$){const K=$+1,J=K<O?h[K].el:b;for(;E<=$;)C(null,h[E]=T?It(h[E]):Xe(h[E]),m,J,v,S,A,I,T),E++}}else if(E>$)for(;E<=H;)Ne(f[E],v,S,!0),E++;else{const K=E,J=E,oe=new Map;for(E=J;E<=$;E++){const xe=h[E]=T?It(h[E]):Xe(h[E]);xe.key!=null&&oe.set(xe.key,E)}let pe,we=0;const je=$-J+1;let hn=!1,ro=0;const Ln=new Array(je);for(E=0;E<je;E++)Ln[E]=0;for(E=K;E<=H;E++){const xe=f[E];if(we>=je){Ne(xe,v,S,!0);continue}let Je;if(xe.key!=null)Je=oe.get(xe.key);else for(pe=J;pe<=$;pe++)if(Ln[pe-J]===0&&Jt(xe,h[pe])){Je=pe;break}Je===void 0?Ne(xe,v,S,!0):(Ln[Je-J]=E+1,Je>=ro?ro=Je:hn=!0,C(xe,h[Je],m,null,v,S,A,I,T),we++)}const so=hn?xf(Ln):_n;for(pe=so.length-1,E=je-1;E>=0;E--){const xe=J+E,Je=h[xe],io=xe+1<O?h[xe+1].el:b;Ln[E]===0?C(null,Je,m,io,v,S,A,I,T):hn&&(pe<0||E!==so[pe]?Ge(Je,m,io,2):pe--)}}},Ge=(f,h,m,b,v=null)=>{const{el:S,type:A,transition:I,children:T,shapeFlag:E}=f;if(E&6){Ge(f.component.subTree,h,m,b);return}if(E&128){f.suspense.move(h,m,b);return}if(E&64){A.move(f,h,m,D);return}if(A===_e){r(S,h,m);for(let H=0;H<T.length;H++)Ge(T[H],h,m,b);r(f.anchor,h,m);return}if(A===Os){B(f,h,m);return}if(b!==2&&E&1&&I)if(b===0)I.beforeEnter(S),r(S,h,m),Le(()=>I.enter(S),v);else{const{leave:H,delayLeave:$,afterLeave:K}=I,J=()=>r(S,h,m),oe=()=>{H(S,()=>{J(),K&&K()})};$?$(S,J,oe):oe()}else r(S,h,m)},Ne=(f,h,m,b=!1,v=!1)=>{const{type:S,props:A,ref:I,children:T,dynamicChildren:E,shapeFlag:O,patchFlag:H,dirs:$}=f;if(I!=null&&ni(I,null,m,f,!0),O&256){h.ctx.deactivate(f);return}const K=O&1&&$,J=!Rr(f);let oe;if(J&&(oe=A&&A.onVnodeBeforeUnmount)&&Ye(oe,h,f),O&6)mr(f.component,m,b);else{if(O&128){f.suspense.unmount(m,b);return}K&&jt(f,null,h,"beforeUnmount"),O&64?f.type.remove(f,h,m,v,D,b):E&&(S!==_e||H>0&&H&64)?Ce(E,h,m,!1,!0):(S===_e&&H&384||!v&&O&16)&&Ce(T,h,m),b&&fn(f)}(J&&(oe=A&&A.onVnodeUnmounted)||K)&&Le(()=>{oe&&Ye(oe,h,f),K&&jt(f,null,h,"unmounted")},m)},fn=f=>{const{type:h,el:m,anchor:b,transition:v}=f;if(h===_e){dn(m,b);return}if(h===Os){z(f);return}const S=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,T=()=>A(m,S);I?I(f.el,S,T):T()}else S()},dn=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},mr=(f,h,m)=>{const{bum:b,scope:v,update:S,subTree:A,um:I}=f;b&&Cr(b),v.stop(),S&&(S.active=!1,Ne(A,f,h,m)),I&&Le(I,h),Le(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ce=(f,h,m,b=!1,v=!1,S=0)=>{for(let A=S;A<f.length;A++)Ne(f[A],h,m,b,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let k=!1;const R=(f,h,m)=>{f==null?h._vnode&&Ne(h._vnode,null,null,!0):C(h._vnode||null,f,h,null,null,null,m),k||(k=!0,mo(),_c(),k=!1),h._vnode=f},D={p:C,um:Ne,m:Ge,r:fn,mt:Se,mc:P,pc:te,pbc:G,n:y,o:t};let ne,he;return e&&([ne,he]=e(D)),{render:R,hydrate:ne,createApp:Tf(R,ne)}}function ks({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Df(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dc(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),n||Dc(o,a)),a.type===fs&&(a.el=o.el)}}function xf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function xc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xc(e)}const Uf=t=>t.__isTeleport,_e=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Wn=[];let We=null;function ue(t=!1){Wn.push(We=t?null:[])}function $f(){Wn.pop(),We=Wn[Wn.length-1]||null}let Qn=1;function Ao(t){Qn+=t}function Uc(t){return t.dynamicChildren=Qn>0?We||_n:null,$f(),Qn>0&&We&&We.push(t),t}function ge(t,e,n,r,s,i){return Uc(_(t,e,n,r,s,i,!0))}function Br(t,e,n,r,s){return Uc(fe(t,e,n,r,s,!0))}function ri(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const ds="__vInternal",$c=({key:t})=>t??null,Ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ee(t)||q(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$c(e),ref:e&&Ar(e),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?($i(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),Qn>0&&!o&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const fe=Ff;function Ff(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xu)&&(t=Ke),ri(t)){const a=Ft(t,e,!0);return n&&$i(a,n),Qn>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(t)]=a:We.push(a)),a.patchFlag|=-2,a}if(Xf(t)&&(t=t.__vccOpts),e){e=Bf(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=ts(a)),le(c)&&(uc(c)&&!F(c)&&(c=be({},c)),e.style=Ii(c))}const o=ye(t)?1:Zu(t)?128:Uf(t)?64:le(t)?4:q(t)?2:0;return _(t,e,n,r,s,o,i,!0)}function Bf(t){return t?uc(t)||ds in t?be({},t):t:null}function Ft(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Vf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$c(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Ar(e)):[s,Ar(e)]:Ar(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ft(t.ssContent),ssFallback:t.ssFallback&&Ft(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Me(t=" ",e=0){return fe(fs,null,t,e)}function hs(t="",e=!1){return e?(ue(),Br(Ke,null,t)):fe(Ke,null,t)}function Xe(t){return t==null||typeof t=="boolean"?fe(Ke):F(t)?fe(_e,null,t.slice()):typeof t=="object"?It(t):fe(fs,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ft(t)}function $i(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$i(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ds in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ts([e.class,r.class]));else if(s==="style")e.style=Ii([e.style,r.style]);else if(Xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){He(t,e,7,[n,r])}const Hf=Pc();let jf=0;function Wf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hf,i={uid:jf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oc(r,s),emitsOptions:yc(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zu.bind(null,i),t.ce&&t.ce(i),i}let Ie=null;const Kf=()=>Ie||Re;let Vr,si;{const t=Wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vr=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),si=e("__VUE_SSR_SETTERS__",n=>ps=n)}const cr=t=>{const e=Ie;return Vr(t),t.scope.on(),()=>{t.scope.off(),Vr(e)}},Po=()=>{Ie&&Ie.scope.off(),Vr(null)};function Fc(t){return t.vnode.shapeFlag&4}let ps=!1;function zf(t,e=!1){e&&si(e);const{props:n,children:r}=t.vnode,s=Fc(t);Af(t,n,s,e),Of(t,r);const i=s?qf(t,e):void 0;return e&&si(!1),i}function qf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ss(new Proxy(t.ctx,yf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Jf(t):null,i=cr(t);on();const o=Mt(r,t,0,[t.props,s]);if(an(),i(),Va(o)){if(o.then(Po,Po),e)return o.then(a=>{ko(t,a,e)}).catch(a=>{is(a,t,0)});t.asyncDep=o}else ko(t,o,e)}else Bc(t,e)}function ko(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=pc(e)),Bc(t,n)}let Oo;function Bc(t,e,n){const r=t.type;if(!t.render){if(!e&&Oo&&!r.render){const s=r.template||xi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=be(be({isCustomElement:i,delimiters:a},o),c);r.render=Oo(s,l)}}t.render=r.render||Be}{const s=cr(t);on();try{bf(t)}finally{an(),s()}}}function Gf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}}))}function Jf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Gf(t)},slots:t.slots,emit:t.emit,expose:e}}function gs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pc(ss(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hn)return Hn[n](t)},has(e,n){return n in e||n in Hn}}))}function Yf(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Xf(t){return q(t)&&"__vccOpts"in t}const ve=(t,e)=>Mu(t,e,ps);function Fi(t,e,n){const r=arguments.length;return r===2?le(e)&&!F(e)?ri(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ri(n)&&(n=[n]),fe(t,e,n))}const Qf="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zf="http://www.w3.org/2000/svg",ed="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,No=St&&St.createElement("template"),td={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?St.createElementNS(Zf,t):e==="mathml"?St.createElementNS(ed,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=No.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mt="transition",Mn="animation",Zn=Symbol("_vtc"),Bi=(t,{slots:e})=>Fi(cf,nd(t),e);Bi.displayName="Transition";const Vc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bi.props=be({},wc,Vc);const Kt=(t,e=[])=>{F(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lo=t=>t?F(t)?t.some(e=>e.length>1):t.length>1:!1;function nd(t){const e={};for(const M in t)M in Vc||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=rd(s),C=w&&w[0],N=w&&w[1],{onBeforeEnter:L,onEnter:U,onEnterCancelled:B,onLeave:z,onLeaveCancelled:W,onBeforeAppear:V=L,onAppear:ee=U,onAppearCancelled:P=B}=e,x=(M,Z,Se)=>{zt(M,Z?u:a),zt(M,Z?l:o),Se&&Se()},G=(M,Z)=>{M._isLeaving=!1,zt(M,d),zt(M,g),zt(M,p),Z&&Z()},ae=M=>(Z,Se)=>{const ke=M?ee:U,Y=()=>x(Z,M,Se);Kt(ke,[Z,Y]),Mo(()=>{zt(Z,M?c:i),_t(Z,M?u:a),Lo(ke)||Do(Z,r,C,Y)})};return be(e,{onBeforeEnter(M){Kt(L,[M]),_t(M,i),_t(M,o)},onBeforeAppear(M){Kt(V,[M]),_t(M,c),_t(M,l)},onEnter:ae(!1),onAppear:ae(!0),onLeave(M,Z){M._isLeaving=!0;const Se=()=>G(M,Z);_t(M,d),od(),_t(M,p),Mo(()=>{M._isLeaving&&(zt(M,d),_t(M,g),Lo(z)||Do(M,r,N,Se))}),Kt(z,[M,Se])},onEnterCancelled(M){x(M,!1),Kt(B,[M])},onAppearCancelled(M){x(M,!0),Kt(P,[M])},onLeaveCancelled(M){G(M),Kt(W,[M])}})}function rd(t){if(t==null)return null;if(le(t))return[Ns(t.enter),Ns(t.leave)];{const e=Ns(t);return[e,e]}}function Ns(t){return su(t)}function _t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zn]||(t[Zn]=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Zn];n&&(n.delete(e),n.size||(t[Zn]=void 0))}function Mo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sd=0;function Do(t,e,n,r){const s=t._endId=++sd,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=id(t,e);if(!o)return r();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,p),i()},p=g=>{g.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,p)}function id(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${mt}Delay`),i=r(`${mt}Duration`),o=xo(s,i),a=r(`${Mn}Delay`),c=r(`${Mn}Duration`),l=xo(a,c);let u=null,d=0,p=0;e===mt?o>0&&(u=mt,d=o,p=i.length):e===Mn?l>0&&(u=Mn,d=l,p=c.length):(d=Math.max(o,l),u=d>0?o>l?mt:Mn:null,p=u?u===mt?i.length:c.length:0);const g=u===mt&&/\b(transform|all)(,|$)/.test(r(`${mt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function xo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Uo(n)+Uo(t[r])))}function Uo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function od(){return document.body.offsetHeight}function ad(t,e,n){const r=t[Zn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hr=Symbol("_vod"),Hc=Symbol("_vsh"),Ve={beforeMount(t,{value:e},{transition:n}){t[Hr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Dn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Dn(t,!0),r.enter(t)):r.leave(t,()=>{Dn(t,!1)}):Dn(t,e))},beforeUnmount(t,{value:e}){Dn(t,e)}};function Dn(t,e){t.style.display=e?t[Hr]:"none",t[Hc]=!e}const cd=Symbol(""),ld=/(^|;)\s*display\s*:/;function ud(t,e,n){const r=t.style,s=ye(n);let i=!1;if(n&&!s){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pr(r,a,"")}else for(const o in e)n[o]==null&&Pr(r,o,"");for(const o in n)o==="display"&&(i=!0),Pr(r,o,n[o])}else if(s){if(e!==n){const o=r[cd];o&&(n+=";"+o),r.cssText=n,i=ld.test(n)}}else e&&t.removeAttribute("style");Hr in t&&(t[Hr]=i?r.display:"",t[Hc]&&(r.display="none"))}const $o=/\s*!important$/;function Pr(t,e,n){if(F(n))n.forEach(r=>Pr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fd(t,e);$o.test(n)?t.setProperty(sn(r),n.replace($o,""),"important"):t[r]=n}}const Fo=["Webkit","Moz","ms"],Ls={};function fd(t,e){const n=Ls[e];if(n)return n;let r=nt(e);if(r!=="filter"&&r in t)return Ls[e]=r;r=es(r);for(let s=0;s<Fo.length;s++){const i=Fo[s]+r;if(i in t)return Ls[e]=i}return e}const Bo="http://www.w3.org/1999/xlink";function dd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bo,e.slice(6,e.length)):t.setAttributeNS(Bo,e,n);else{const i=uu(e);n==null||i&&!Ka(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ka(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function pd(t,e,n,r){t.removeEventListener(e,n,r)}const Vo=Symbol("_vei");function gd(t,e,n,r,s=null){const i=t[Vo]||(t[Vo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=md(e);if(r){const l=i[e]=yd(r,s);Yt(t,a,l,c)}else o&&(pd(t,a,o,c),i[e]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function md(t){let e;if(Ho.test(t)){e={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let Ms=0;const _d=Promise.resolve(),vd=()=>Ms||(_d.then(()=>Ms=0),Ms=Date.now());function yd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(bd(r,n.value),e,5,[r])};return n.value=t,n.attached=vd(),n}function bd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ed=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?ad(t,r,l):e==="style"?ud(t,n,r):Xr(e)?bi(e)||gd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wd(t,e,r,l))?hd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dd(t,e,r,l))};function wd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jo(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jo(e)&&ye(n)?!1:e in t}const jr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Cr(e,n):e};function Id(t){t.target.composing=!0}function Wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wn=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[wn]=jr(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ks(a)),t[wn](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",Id),Yt(t,"compositionend",Wo),Yt(t,"change",Wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[wn]=jr(i),t.composing)return;const o=s||t.type==="number"?Ks(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Ko={deep:!0,created(t,e,n){t[wn]=jr(n),Yt(t,"change",()=>{const r=t._modelValue,s=Sd(t),i=t.checked,o=t[wn];if(F(r)){const a=za(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Qr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(jc(t,i))})},mounted:zo,beforeUpdate(t,e,n){t[wn]=jr(n),zo(t,e,n)}};function zo(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=za(e,r.props.value)>-1:Qr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ns(e,jc(t,!0)))}function Sd(t){return"_value"in t?t._value:t.value}function jc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Cd=["ctrl","shift","alt","meta"],Td={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cd.some(n=>t[`${n}Key`]&&!e.includes(n))},Wc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Td[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Rd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ad=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=sn(s.key);if(e.some(o=>o===i||Rd[o]===i))return t(s)})},Pd=be({patchProp:Ed},td);let qo;function kd(){return qo||(qo=Lf(Pd))}const Od=(...t)=>{const e=kd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ld(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Nd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ld(t){return ye(t)?document.querySelector(t):t}var Md=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Kc;const ms=t=>Kc=t,zc=Symbol();function ii(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kn||(Kn={}));function Dd(){const t=Ja(!0),e=t.run(()=>re({}));let n=[],r=[];const s=ss({install(i){ms(s),s._a=i,i.provide(zc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Md?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const qc=()=>{};function Go(t,e,n,r=qc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ya()&&hu(s),s}function pn(t,...e){t.slice().forEach(n=>{n(...e)})}const xd=t=>t();function oi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ii(s)&&ii(r)&&t.hasOwnProperty(n)&&!Ee(r)&&!Nt(r)?t[n]=oi(s,r):t[n]=r}return t}const Ud=Symbol();function $d(t){return!ii(t)||!t.hasOwnProperty(Ud)}const{assign:bt}=Object;function Fd(t){return!!(Ee(t)&&t.effect)}function Bd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=$u(n.state.value[t]);return bt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=ss(ve(()=>{ms(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return c=Gc(t,l,e,n,r,!0),c}function Gc(t,e,n={},r,s,i){let o;const a=bt({actions:{}},n),c={deep:!0};let l,u,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),re({});let C;function N(P){let x;l=u=!1,typeof P=="function"?(P(r.state.value[t]),x={type:Kn.patchFunction,storeId:t,events:g}):(oi(r.state.value[t],P),x={type:Kn.patchObject,payload:P,storeId:t,events:g});const G=C=Symbol();Ni().then(()=>{C===G&&(l=!0)}),u=!0,pn(d,x,r.state.value[t])}const L=i?function(){const{state:x}=n,G=x?x():{};this.$patch(ae=>{bt(ae,G)})}:qc;function U(){o.stop(),d=[],p=[],r._s.delete(t)}function B(P,x){return function(){ms(r);const G=Array.from(arguments),ae=[],M=[];function Z(Y){ae.push(Y)}function Se(Y){M.push(Y)}pn(p,{args:G,name:P,store:W,after:Z,onError:Se});let ke;try{ke=x.apply(this&&this.$id===t?this:W,G)}catch(Y){throw pn(M,Y),Y}return ke instanceof Promise?ke.then(Y=>(pn(ae,Y),Y)).catch(Y=>(pn(M,Y),Promise.reject(Y))):(pn(ae,ke),ke)}}const z={_p:r,$id:t,$onAction:Go.bind(null,p),$patch:N,$reset:L,$subscribe(P,x={}){const G=Go(d,P,x.detached,()=>ae()),ae=o.run(()=>bn(()=>r.state.value[t],M=>{(x.flush==="sync"?u:l)&&P({storeId:t,type:Kn.direct,events:g},M)},bt({},c,x)));return G},$dispose:U},W=or(z);r._s.set(t,W);const ee=(r._a&&r._a.runWithContext||xd)(()=>r._e.run(()=>(o=Ja()).run(e)));for(const P in ee){const x=ee[P];if(Ee(x)&&!Fd(x)||Nt(x))i||(w&&$d(x)&&(Ee(x)?x.value=w[P]:oi(x,w[P])),r.state.value[t][P]=x);else if(typeof x=="function"){const G=B(P,x);ee[P]=G,a.actions[P]=x}}return bt(W,ee),bt(X(W),ee),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:P=>{N(x=>{bt(x,P)})}}),r._p.forEach(P=>{bt(W,o.run(()=>P({store:W,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(W.$state,w),l=!0,u=!0,W}function Vd(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Rf();return a=a||(l?Ae(zc,null):null),a&&ms(a),a=Kc,a._s.has(r)||(i?Gc(r,e,s,a):Bd(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof document<"u";function Hd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const se=Object.assign;function Ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const zn=()=>{},ze=Array.isArray,Jc=/#/g,jd=/&/g,Wd=/\//g,Kd=/=/g,zd=/\?/g,Yc=/\+/g,qd=/%5B/g,Gd=/%5D/g,Xc=/%5E/g,Jd=/%60/g,Qc=/%7B/g,Yd=/%7C/g,Zc=/%7D/g,Xd=/%20/g;function Vi(t){return encodeURI(""+t).replace(Yd,"|").replace(qd,"[").replace(Gd,"]")}function Qd(t){return Vi(t).replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function ai(t){return Vi(t).replace(Yc,"%2B").replace(Xd,"+").replace(Jc,"%23").replace(jd,"%26").replace(Jd,"`").replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function Zd(t){return ai(t).replace(Kd,"%3D")}function eh(t){return Vi(t).replace(Jc,"%23").replace(zd,"%3F")}function th(t){return t==null?"":eh(t).replace(Wd,"%2F")}function er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const nh=/\/$/,rh=t=>t.replace(nh,"");function xs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ah(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:er(o)}}function sh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ih(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(e.matched[r],n.matched[s])&&el(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function el(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oh(t[n],e[n]))return!1;return!0}function oh(t,e){return ze(t)?Yo(t,e):ze(e)?Yo(e,t):t===e}function Yo(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ah(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var tr;(function(t){t.pop="pop",t.push="push"})(tr||(tr={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function ch(t){if(!t)if(gn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rh(t)}const lh=/^[^#]+#/;function uh(t,e){return t.replace(lh,"#")+e}function fh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _s=()=>({left:window.scrollX,top:window.scrollY});function dh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xo(t,e){return(history.state?history.state.position-e:-1)+t}const ci=new Map;function hh(t,e){ci.set(t,e)}function ph(t){const e=ci.get(t);return ci.delete(t),e}let gh=()=>location.protocol+"//"+location.host;function tl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Jo(c,"")}return Jo(n,t)+r+s}function mh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=tl(t,location),w=n.value,C=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}N=C?p.position-C.position:0}else r(g);s.forEach(L=>{L(n.value,w,{delta:N,type:tr.pop,direction:N?N>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(se({},p.state,{scroll:_s()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Qo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_s():null}}function _h(t){const{history:e,location:n}=window,r={value:tl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:gh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=se({},e.state,Qo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=se({},s.value,e.state,{forward:c,scroll:_s()});i(u.current,u,!0);const d=se({},Qo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function vh(t){t=ch(t);const e=_h(t),n=mh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=se({location:"",base:t,go:r,createHref:uh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yh(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),vh(t)}function bh(t){return typeof t=="string"||t&&typeof t=="object"}function nl(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rl=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function Pn(t,e){return se(new Error,{type:t,[rl]:!0},e)}function it(t,e){return t instanceof Error&&rl in t&&(e==null||!!(t.type&e))}const ea="[^/]+?",Eh={sensitive:!1,strict:!1,start:!0,end:!0},wh=/[.+*?^${}()[\]/\\]/g;function Ih(t,e){const n=se({},Eh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(wh,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:C,optional:N,regexp:L}=p;i.push({name:w,repeatable:C,optional:N});const U=L||ea;if(U!==ea){g+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${w}" (${U}): `+z.message)}}let B=C?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;d||(B=N&&l.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),s+=B,g+=20,N&&(g+=-8),C&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:C,optional:N}=g,L=w in l?l[w]:"";if(ze(L)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const U=ze(L)?L.join("/"):L;if(!U)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=U}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Sh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ch(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ta(r))return 1;if(ta(s))return-1}return s.length-r.length}function ta(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Th={type:0,value:""},Rh=/[a-zA-Z0-9_]/;function Ah(t){if(!t)return[[]];if(t==="/")return[[Th]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Rh.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Ph(t,e,n){const r=Ih(Ah(t.path),n),s=se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kh(t,e){const n=[],r=new Map;e=sa({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const g=!p,w=Oh(u);w.aliasOf=p&&p.record;const C=sa(e,u),N=[w];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of B)N.push(se({},w,{components:p?p.record.components:w.components,path:z,aliasOf:p?p.record:w}))}let L,U;for(const B of N){const{path:z}=B;if(d&&z[0]!=="/"){const W=d.record.path,V=W[W.length-1]==="/"?"":"/";B.path=d.record.path+(z&&V+z)}if(L=Ph(B,d,C),p?p.alias.push(L):(U=U||L,U!==L&&U.alias.push(L),g&&u.name&&!ra(L)&&o(u.name)),w.children){const W=w.children;for(let V=0;V<W.length;V++)i(W[V],L,p&&p.children[V])}p=p||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&c(L)}return U?()=>{o(U)}:zn}function o(u){if(nl(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Ch(u,n[d])>=0&&(u.record.path!==n[d].record.path||!sl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!ra(u)&&r.set(u.record.name,u)}function l(u,d){let p,g={},w,C;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Pn(1,{location:u});C=p.record.name,g=se(na(d.params,p.keys.filter(U=>!U.optional).concat(p.parent?p.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),u.params&&na(u.params,p.keys.map(U=>U.name))),w=p.stringify(g)}else if(u.path!=null)w=u.path,p=n.find(U=>U.re.test(w)),p&&(g=p.parse(w),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(U=>U.re.test(d.path)),!p)throw Pn(1,{location:u,currentLocation:d});C=p.record.name,g=se({},d.params,u.params),w=p.stringify(g)}const N=[];let L=p;for(;L;)N.unshift(L.record),L=L.parent;return{name:C,path:w,params:g,matched:N,meta:Lh(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function na(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Oh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ra(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lh(t){return t.reduce((e,n)=>se(e,n.meta),{})}function sa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sl(t,e){return e.children.some(n=>n===t||sl(t,n))}function Mh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yc," "),o=i.indexOf("="),a=er(o<0?i:i.slice(0,o)),c=o<0?null:er(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ia(t){let e="";for(let n in t){const r=t[n];if(n=Zd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&ai(i)):[r&&ai(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Dh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const xh=Symbol(""),oa=Symbol(""),vs=Symbol(""),Hi=Symbol(""),li=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ct(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Pn(4,{from:n,to:e})):p instanceof Error?c(p):bh(p)?c(Pn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function Us(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Uh(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Ct(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=Hd(u)?u.default:u;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Ct(g,n,r,o,a,s)()}))}}return i}function Uh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aa(t){const e=Ae(vs),n=Ae(Hi),r=ve(()=>e.resolve(Lt(t.to))),s=ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(An.bind(null,u));if(p>-1)return p;const g=ca(c[l-2]);return l>1&&ca(u)===g&&d[d.length-1].path!==g?d.findIndex(An.bind(null,c[l-2])):p}),i=ve(()=>s.value>-1&&Vh(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&el(n.params,r.value.params));function a(c={}){return Bh(c)?e[Lt(t.replace)?"replace":"push"](Lt(t.to)).catch(zn):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const $h=Cc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:aa,setup(t,{slots:e}){const n=or(aa(t)),{options:r}=Ae(vs),s=ve(()=>({[la(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Fh=$h;function Bh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Vh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,Hh=Cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ae(li),s=ve(()=>t.route||r.value),i=Ae(oa,0),o=ve(()=>{let l=Lt(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=ve(()=>s.value.matched[o.value]);jn(oa,ve(()=>o.value+1)),jn(xh,a),jn(li,s);const c=re();return bn(()=>[c.value,a.value,t.name],([l,u,d],[p,g,w])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!An(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return ua(n.default,{Component:p,route:l});const g=d.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=Fi(p,se({},w,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return ua(n.default,{Component:N,route:l})||N}}});function ua(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jh=Hh;function Wh(t){const e=kh(t.routes,t),n=t.parseQuery||Mh,r=t.stringifyQuery||ia,s=t.history,i=xn(),o=xn(),a=xn(),c=Du(vt);let l=vt;gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ds.bind(null,y=>""+y),d=Ds.bind(null,th),p=Ds.bind(null,er);function g(y,k){let R,D;return nl(y)?(R=e.getRecordMatcher(y),D=k):D=y,e.addRoute(D,R)}function w(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function C(){return e.getRoutes().map(y=>y.record)}function N(y){return!!e.getRecordMatcher(y)}function L(y,k){if(k=se({},k||c.value),typeof y=="string"){const h=xs(n,y,k.path),m=e.resolve({path:h.path},k),b=s.createHref(h.fullPath);return se(h,m,{params:p(m.params),hash:er(h.hash),redirectedFrom:void 0,href:b})}let R;if(y.path!=null)R=se({},y,{path:xs(n,y.path,k.path).path});else{const h=se({},y.params);for(const m in h)h[m]==null&&delete h[m];R=se({},y,{params:d(h)}),k.params=d(k.params)}const D=e.resolve(R,k),ne=y.hash||"";D.params=u(p(D.params));const he=sh(r,se({},y,{hash:Qd(ne),path:D.path})),f=s.createHref(he);return se({fullPath:he,hash:ne,query:r===ia?Dh(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function U(y){return typeof y=="string"?xs(n,y,c.value.path):se({},y)}function B(y,k){if(l!==y)return Pn(8,{from:k,to:y})}function z(y){return ee(y)}function W(y){return z(se(U(y),{replace:!0}))}function V(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=U(D):{path:D},D.params={}),se({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function ee(y,k){const R=l=L(y),D=c.value,ne=y.state,he=y.force,f=y.replace===!0,h=V(R);if(h)return ee(se(U(h),{state:typeof h=="object"?se({},ne,h.state):ne,force:he,replace:f}),k||R);const m=R;m.redirectedFrom=k;let b;return!he&&ih(r,D,R)&&(b=Pn(16,{to:m,from:D}),Ge(D,D,!0,!1)),(b?Promise.resolve(b):G(m,D)).catch(v=>it(v)?it(v,2)?v:pt(v):te(v,m,D)).then(v=>{if(v){if(it(v,2))return ee(se({replace:f},U(v.to),{state:typeof v.to=="object"?se({},ne,v.to.state):ne,force:he}),k||m)}else v=M(m,D,!0,f,ne);return ae(m,D,v),v})}function P(y,k){const R=B(y,k);return R?Promise.reject(R):Promise.resolve()}function x(y){const k=dn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function G(y,k){let R;const[D,ne,he]=Kh(y,k);R=Us(D.reverse(),"beforeRouteLeave",y,k);for(const h of D)h.leaveGuards.forEach(m=>{R.push(Ct(m,y,k))});const f=P.bind(null,y,k);return R.push(f),Ce(R).then(()=>{R=[];for(const h of i.list())R.push(Ct(h,y,k));return R.push(f),Ce(R)}).then(()=>{R=Us(ne,"beforeRouteUpdate",y,k);for(const h of ne)h.updateGuards.forEach(m=>{R.push(Ct(m,y,k))});return R.push(f),Ce(R)}).then(()=>{R=[];for(const h of he)if(h.beforeEnter)if(ze(h.beforeEnter))for(const m of h.beforeEnter)R.push(Ct(m,y,k));else R.push(Ct(h.beforeEnter,y,k));return R.push(f),Ce(R)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),R=Us(he,"beforeRouteEnter",y,k,x),R.push(f),Ce(R))).then(()=>{R=[];for(const h of o.list())R.push(Ct(h,y,k));return R.push(f),Ce(R)}).catch(h=>it(h,8)?h:Promise.reject(h))}function ae(y,k,R){a.list().forEach(D=>x(()=>D(y,k,R)))}function M(y,k,R,D,ne){const he=B(y,k);if(he)return he;const f=k===vt,h=gn?history.state:{};R&&(D||f?s.replace(y.fullPath,se({scroll:f&&h&&h.scroll},ne)):s.push(y.fullPath,ne)),c.value=y,Ge(y,k,R,f),pt()}let Z;function Se(){Z||(Z=s.listen((y,k,R)=>{if(!mr.listening)return;const D=L(y),ne=V(D);if(ne){ee(se(ne,{replace:!0}),D).catch(zn);return}l=D;const he=c.value;gn&&hh(Xo(he.fullPath,R.delta),_s()),G(D,he).catch(f=>it(f,12)?f:it(f,2)?(ee(f.to,D).then(h=>{it(h,20)&&!R.delta&&R.type===tr.pop&&s.go(-1,!1)}).catch(zn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),te(f,D,he))).then(f=>{f=f||M(D,he,!1),f&&(R.delta&&!it(f,8)?s.go(-R.delta,!1):R.type===tr.pop&&it(f,20)&&s.go(-1,!1)),ae(D,he,f)}).catch(zn)}))}let ke=xn(),Y=xn(),ie;function te(y,k,R){pt(y);const D=Y.list();return D.length?D.forEach(ne=>ne(y,k,R)):console.error(y),Promise.reject(y)}function st(){return ie&&c.value!==vt?Promise.resolve():new Promise((y,k)=>{ke.add([y,k])})}function pt(y){return ie||(ie=!y,Se(),ke.list().forEach(([k,R])=>y?R(y):k()),ke.reset()),y}function Ge(y,k,R,D){const{scrollBehavior:ne}=t;if(!gn||!ne)return Promise.resolve();const he=!R&&ph(Xo(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Ni().then(()=>ne(y,k,he)).then(f=>f&&dh(f)).catch(f=>te(f,y,k))}const Ne=y=>s.go(y);let fn;const dn=new Set,mr={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:N,getRoutes:C,resolve:L,options:t,push:z,replace:W,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:st,install(y){const k=this;y.component("RouterLink",Fh),y.component("RouterView",jh),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(c)}),gn&&!fn&&c.value===vt&&(fn=!0,z(s.location).catch(ne=>{}));const R={};for(const ne in vt)Object.defineProperty(R,ne,{get:()=>c.value[ne],enumerable:!0});y.provide(vs,k),y.provide(Hi,cc(R)),y.provide(li,c);const D=y.unmount;dn.add(y),y.unmount=function(){dn.delete(y),dn.size<1&&(l=vt,Z&&Z(),Z=null,c.value=vt,fn=!1,ie=!1),D()}}};function Ce(y){return y.reduce((k,R)=>k.then(()=>x(R)),Promise.resolve())}return mr}function Kh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}function il(){return Ae(vs)}function zh(){return Ae(Hi)}var fa={};/**
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
 */const ol=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ol(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new Gh;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const w=l<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(t){const e=ol(t);return al.encodeByteArray(e,!0)},cl=function(t){return Jh(t).replace(/\./g,"")},ll=function(t){try{return al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xh=()=>Yh().__FIREBASE_DEFAULTS__,Qh=()=>{if(typeof process>"u"||typeof fa>"u")return;const t=fa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},ji=()=>{try{return Xh()||Qh()||Zh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ep=t=>{var e,n;return(n=(e=ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ul=()=>{var t;return(t=ji())===null||t===void 0?void 0:t.config},fl=t=>{var e;return(e=ji())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function rp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ip(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function op(){try{return typeof indexedDB=="object"}catch{return!1}}function ap(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const cp="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cp,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,a,r)}}function lp(t,e){return t.replace(up,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const up=/\{\$([^}]+)}/g;function fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(da(i)&&da(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function da(t){return t!==null&&typeof t=="object"}/**
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
 */function ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dp(t,e){const n=new hp(t,e);return n.subscribe.bind(n)}class hp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $s(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class gp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_p(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mp(t){return t===qt?void 0:t}function _p(t){return t.instantiationMode==="EAGER"}/**
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
 */class vp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const yp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},bp=ce.INFO,Ep={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},wp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ep[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=bp,this._logHandler=wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Ip=(t,e)=>e.some(n=>t instanceof n);let ha,pa;function Sp(){return ha||(ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hl=new WeakMap,ui=new WeakMap,pl=new WeakMap,Fs=new WeakMap,Wi=new WeakMap;function Tp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hl.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Rp(t){if(ui.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ui.set(t,e)}let fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ap(t){fi=t(fi)}function Pp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bs(this),e,...n);return pl.set(r,e.sort?e.sort():[e]),Dt(r)}:Cp().includes(t)?function(...e){return t.apply(Bs(this),e),Dt(hl.get(this))}:function(...e){return Dt(t.apply(Bs(this),e))}}function kp(t){return typeof t=="function"?Pp(t):(t instanceof IDBTransaction&&Rp(t),Ip(t,Sp())?new Proxy(t,fi):t)}function Dt(t){if(t instanceof IDBRequest)return Tp(t);if(Fs.has(t))return Fs.get(t);const e=kp(t);return e!==t&&(Fs.set(t,e),Wi.set(e,t)),e}const Bs=t=>Wi.get(t);function Op(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Np=["get","getKey","getAll","getAllKeys","count"],Lp=["put","add","delete","clear"],Vs=new Map;function ga(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vs.get(e))return Vs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Lp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Np.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vs.set(e,i),i}Ap(t=>({...t,get:(e,n,r)=>ga(e,n)||t.get(e,n,r),has:(e,n)=>!!ga(e,n)||t.has(e,n)}));/**
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
 */class Mp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",ma="0.10.1";/**
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
 */const tn=new dl("@firebase/app"),xp="@firebase/app-compat",Up="@firebase/analytics-compat",$p="@firebase/analytics",Fp="@firebase/app-check-compat",Bp="@firebase/app-check",Vp="@firebase/auth",Hp="@firebase/auth-compat",jp="@firebase/database",Wp="@firebase/database-compat",Kp="@firebase/functions",zp="@firebase/functions-compat",qp="@firebase/installations",Gp="@firebase/installations-compat",Jp="@firebase/messaging",Yp="@firebase/messaging-compat",Xp="@firebase/performance",Qp="@firebase/performance-compat",Zp="@firebase/remote-config",eg="@firebase/remote-config-compat",tg="@firebase/storage",ng="@firebase/storage-compat",rg="@firebase/firestore",sg="@firebase/firestore-compat",ig="firebase",og="10.11.0";/**
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
 */const hi="[DEFAULT]",ag={[di]:"fire-core",[xp]:"fire-core-compat",[$p]:"fire-analytics",[Up]:"fire-analytics-compat",[Bp]:"fire-app-check",[Fp]:"fire-app-check-compat",[Vp]:"fire-auth",[Hp]:"fire-auth-compat",[jp]:"fire-rtdb",[Wp]:"fire-rtdb-compat",[Kp]:"fire-fn",[zp]:"fire-fn-compat",[qp]:"fire-iid",[Gp]:"fire-iid-compat",[Jp]:"fire-fcm",[Yp]:"fire-fcm-compat",[Xp]:"fire-perf",[Qp]:"fire-perf-compat",[Zp]:"fire-rc",[eg]:"fire-rc-compat",[tg]:"fire-gcs",[ng]:"fire-gcs-compat",[rg]:"fire-fst",[sg]:"fire-fst-compat","fire-js":"fire-js",[ig]:"fire-js-all"};/**
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
 */const Kr=new Map,cg=new Map,pi=new Map;function _a(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(pi.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,t);for(const n of Kr.values())_a(n,t);for(const n of cg.values())_a(n,t);return!0}function gl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t.settings!==void 0}/**
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
 */const lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new lr("app","Firebase",lg);/**
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
 */class ug{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=og;function ml(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=ul()),!n)throw xt.create("no-options");const i=Kr.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new vp(s);for(const c of pi.values())o.addComponent(c);const a=new ug(n,r,o);return Kr.set(s,a),a}function fg(t=hi){const e=Kr.get(t);if(!e&&t===hi&&ul())return ml();if(!e)throw xt.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=ag[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}nr(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dg="firebase-heartbeat-database",hg=1,rr="firebase-heartbeat-store";let Hs=null;function _l(){return Hs||(Hs=Op(dg,hg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Hs}async function pg(t){try{const n=(await _l()).transaction(rr),r=await n.objectStore(rr).get(vl(t));return await n.done,r}catch(e){if(e instanceof Bt)tn.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function va(t,e){try{const r=(await _l()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,vl(t)),await r.done}catch(n){if(n instanceof Bt)tn.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function vl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gg=1024,mg=30*24*60*60*1e3;class _g{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ya();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ya(),{heartbeatsToSend:r,unsentEntries:s}=vg(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ya(){return new Date().toISOString().substring(0,10)}function vg(t,e=gg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ba(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ba(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return op()?ap().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ba(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bg(t){nr(new kn("platform-logger",e=>new Mp(e),"PRIVATE")),nr(new kn("heartbeat",e=>new _g(e),"PRIVATE")),In(di,ma,t),In(di,ma,"esm2017"),In("fire-js","")}bg("");var Eg="firebase",wg="10.11.0";/**
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
 */In(Eg,wg,"app");function Ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ig=yl,bl=new lr("auth","Firebase",yl());/**
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
 */const zr=new dl("@firebase/auth");function Sg(t,...e){zr.logLevel<=ce.WARN&&zr.warn(`Auth (${fr}): ${t}`,...e)}function kr(t,...e){zr.logLevel<=ce.ERROR&&zr.error(`Auth (${fr}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw zi(t,...e)}function et(t,...e){return zi(t,...e)}function El(t,e,n){const r=Object.assign(Object.assign({},Ig()),{[e]:n});return new lr("auth","Firebase",r).create(e,{appName:t.name})}function ut(t){return El(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bl.create(t,...e)}function j(t,e,...n){if(!t)throw zi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kr(e),new Error(e)}function ft(t,e){t||ot(e)}/**
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
 */function gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cg(){return Ea()==="http:"||Ea()==="https:"}function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cg()||rp()||"connection"in navigator)?navigator.onLine:!0}function Rg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=np()||sp()}get(){return Tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qi(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pg=new dr(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,s={}){return Il(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ur(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wl.fetch()(Sl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Il(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ag),e);try{const s=new Og(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Sr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw El(t,u,l);qe(t,u)}}catch(s){if(s instanceof Bt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function hr(t,e,n,r,s={}){const i=await ht(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qi(t.config,s):`${t.config.apiScheme}://${s}`}function kg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Og{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Pg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}function wa(t){return t!==void 0&&t.enterprise!==void 0}class Ng{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Lg(t,e){return ht(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
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
 */async function Mg(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function Cl(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Gi(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn(js(s.auth_time)),issuedAtTime:Gn(js(s.iat)),expirationTime:Gn(js(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function js(t){return Number(t)*1e3}function Gi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ll(n);return s?JSON.parse(s):(kr("Failed to decode base64 JWT payload"),null)}catch(s){return kr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ia(t){const e=Gi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&xg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,Cl(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tl(i.providerUserInfo):[],a=Fg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function $g(t){const e=rt(t);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tl(t){return t.map(e=>{var{providerId:n}=e,r=Ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bg(t,e){const n=await Il(t,{},async()=>{const r=ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Sl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vg(t,e){return ht(t,"POST","/v2/accounts:revokeToken",Vt(t,e))}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ia(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Ia(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Sn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function yt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dg(this,e)}reload(){return $g(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await On(this,Mg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:z,isAnonymous:W,providerData:V,stsTokenManager:ee}=n;j(B&&ee,e,"internal-error");const P=Sn.fromJSON(this.name,ee);j(typeof B=="string",e,"internal-error"),yt(d,e.name),yt(p,e.name),j(typeof z=="boolean",e,"internal-error"),j(typeof W=="boolean",e,"internal-error"),yt(g,e.name),yt(w,e.name),yt(C,e.name),yt(N,e.name),yt(L,e.name),yt(U,e.name);const x=new at({uid:B,auth:e,email:p,emailVerified:z,displayName:d,isAnonymous:W,photoURL:w,phoneNumber:g,tenantId:C,stsTokenManager:P,createdAt:L,lastLoginAt:U});return V&&Array.isArray(V)&&(x.providerData=V.map(G=>Object.assign({},G))),N&&(x._redirectEventId=N),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Sn;s.updateFromServerResponse(n);const i=new at({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Sn;a.updateFromIdToken(r);const c=new at({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Sa=new Map;function ct(t){ft(t instanceof Function,"Expected a class definition");let e=Sa.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sa.set(t,e),e)}/**
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
 */class Rl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rl.type="NONE";const Ca=Rl;/**
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
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class Cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,i),this.fullPersistenceKey=Or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cn(ct(Ca),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ct(Ca);const o=Or(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=at._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Cn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Cn(i,e,r))}}/**
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
 */function Ta(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nl(e))return"Blackberry";if(Ll(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||Pl(e))&&!e.includes("edge/"))return"Chrome";if(Ol(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Al(t=Pe()){return/firefox\//i.test(t)}function Ji(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pl(t=Pe()){return/crios\//i.test(t)}function kl(t=Pe()){return/iemobile/i.test(t)}function Ol(t=Pe()){return/android/i.test(t)}function Nl(t=Pe()){return/blackberry/i.test(t)}function Ll(t=Pe()){return/webos/i.test(t)}function ys(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hg(t=Pe()){var e;return ys(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jg(){return ip()&&document.documentMode===10}function Ml(t=Pe()){return ys(t)||Ol(t)||Ll(t)||Nl(t)||/windows phone/i.test(t)||kl(t)}function Wg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dl(t,e=[]){let n;switch(t){case"Browser":n=Ta(Pe());break;case"Worker":n=`${Ta(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
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
 */class Kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zg(t,e={}){return ht(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
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
 */const qg=6;class Gg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Jg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ra(this),this.idTokenSubscription=new Ra(this),this.beforeStateQueue=new Kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cl(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(ut(this));const n=e?rt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zg(this),n=new Gg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function un(t){return rt(t)}class Ra{constructor(e){this.auth=e,this.observer=null,this.addObserver=dp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yg(t){bs=t}function xl(t){return bs.loadJS(t)}function Xg(){return bs.recaptchaEnterpriseScript}function Qg(){return bs.gapiScript}function Zg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const em="recaptcha-enterprise",tm="NO_RECAPTCHA";class nm{constructor(e){this.type=em,this.auth=un(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Lg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ng(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;wa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(tm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Xg();c.length!==0&&(c+=a),xl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Aa(t,e,n,r=!1){const s=new nm(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _i(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Aa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Aa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function rm(t,e){const n=gl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function sm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function im(t,e,n){const r=un(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ul(e),{host:o,port:a}=om(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||am()}function Ul(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function om(t){const e=Ul(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pa(o)}}}function Pa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function am(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function cm(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lm(t,e){return hr(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
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
 */async function um(t,e){return hr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function fm(t,e){return hr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
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
 */class sr extends Yi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new sr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _i(e,n,"signInWithPassword",lm);case"emailLink":return um(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _i(e,r,"signUpPassword",cm);case"emailLink":return fm(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tn(t,e){return hr(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
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
 */const dm="http://localhost";class nn extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tn(e,n)}buildRequest(){const e={requestUri:dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ur(n)}return e}}/**
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
 */function hm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pm(t){const e=Fn(Bn(t)).link,n=e?Fn(Bn(e)).deep_link_id:null,r=Fn(Bn(t)).deep_link_id;return(r?Fn(Bn(r)).link:null)||r||n||e||t}class Xi{constructor(e){var n,r,s,i,o,a;const c=Fn(Bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=hm((s=c.mode)!==null&&s!==void 0?s:null);j(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pm(e);try{return new Xi(n)}catch{return null}}}/**
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
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,n){return sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xi.parseLink(n);return j(r,"argument-error"),sr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends pr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class At extends pr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class Pt extends pr{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function gm(t,e){return hr(t,"POST","/v1/accounts:signUp",Vt(t,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await at._fromIdTokenResponse(e,r,s),o=ka(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ka(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ka(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gr extends Bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gr(e,n,r,s)}}function Fl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(t,i,e,r):i})}async function mm(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
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
 */async function _m(t,e,n=!1){const{auth:r}=t;if(Ze(r.app))return Promise.reject(ut(r));const s="reauthenticate";try{const i=await On(t,Fl(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=Gi(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),rn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function Bl(t,e,n=!1){if(Ze(t.app))return Promise.reject(ut(t));const r="signIn",s=await Fl(t,r,e),i=await rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vm(t,e){return Bl(un(t),e)}/**
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
 */async function Vl(t){const e=un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ym(t,e,n){if(Ze(t.app))return Promise.reject(ut(t));const r=un(t),o=await _i(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Vl(t),c}),a=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bm(t,e,n){return Ze(t.app)?Promise.reject(ut(t)):vm(rt(t),Nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vl(t),r})}/**
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
 */async function Em(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await On(r,Em(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Im(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Sm(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Cm(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function Oa(t){return rt(t).signOut()}const Jr="__sak";/**
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
 */class Hl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tm(){const t=Pe();return Ji(t)||ys(t)}const Rm=1e3,Am=10;class jl extends Hl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tm()&&Wg(),this.fallbackToPolling=Ml(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Am):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jl.type="LOCAL";const Pm=jl;/**
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
 */class Wl extends Hl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wl.type="SESSION";const Kl=Wl;/**
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
 */function km(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await km(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
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
 */function Qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Om{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Nm(t){tt().location.href=t}/**
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
 */function zl(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dm(){return zl()?self:null}/**
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
 */const ql="firebaseLocalStorageDb",xm=1,Yr="firebaseLocalStorage",Gl="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ws(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function Um(){const t=indexedDB.deleteDatabase(ql);return new gr(t).toPromise()}function vi(){const t=indexedDB.open(ql,xm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yr,{keyPath:Gl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yr)?e(r):(r.close(),await Um(),e(await vi()))})})}async function Na(t,e,n){const r=ws(t,!0).put({[Gl]:e,value:n});return new gr(r).toPromise()}async function $m(t,e){const n=ws(t,!1).get(e),r=await new gr(n).toPromise();return r===void 0?null:r.value}function La(t,e){const n=ws(t,!0).delete(e);return new gr(n).toPromise()}const Fm=800,Bm=3;class Jl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance(Dm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lm(),!this.activeServiceWorker)return;this.sender=new Om(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await Na(e,Jr,"1"),await La(e,Jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Na(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$m(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ws(s,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jl.type="LOCAL";const Vm=Jl;new dr(3e4,6e4);/**
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
 */function Hm(t,e){return e?ct(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zi extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jm(t){return Bl(t.auth,new Zi(t),t.bypassAuthState)}function Wm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),_m(n,new Zi(t),t.bypassAuthState)}async function Km(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),mm(n,new Zi(t),t.bypassAuthState)}/**
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
 */class Yl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jm;case"linkViaPopup":case"linkViaRedirect":return Km;case"reauthViaPopup":case"reauthViaRedirect":return Wm;default:qe(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zm=new dr(2e3,1e4);class mn extends Yl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zm.get())};e()}}mn.currentPopupAction=null;/**
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
 */const qm="pendingRedirect",Nr=new Map;class Gm extends Yl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nr.get(this.auth._key());if(!e){try{const r=await Jm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nr.set(this.auth._key(),e)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jm(t,e){const n=Qm(e),r=Xm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ym(t,e){Nr.set(t._key(),e)}function Xm(t){return ct(t._redirectPersistence)}function Qm(t){return Or(qm,t.config.apiKey,t.name)}async function Zm(t,e,n=!1){if(Ze(t.app))return Promise.reject(ut(t));const r=un(t),s=Hm(r,e),o=await new Gm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const e_=10*60*1e3;class t_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(e))}saveEventToCache(e){this.cachedEventUids.add(Ma(e)),this.lastProcessedEventTime=Date.now()}}function Ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xl(t);default:return!1}}/**
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
 */async function r_(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
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
 */const s_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i_=/^https?/;async function o_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r_(t);for(const n of e)try{if(a_(n))return}catch{}qe(t,"unauthorized-domain")}function a_(t){const e=gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!i_.test(n))return!1;if(s_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const c_=new dr(3e4,6e4);function Da(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l_(t){return new Promise((e,n)=>{var r,s,i;function o(){Da(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Da(),n(et(t,"network-request-failed"))},timeout:c_.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=Zg("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},xl(`${Qg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Lr=null,e})}let Lr=null;function u_(t){return Lr=Lr||l_(t),Lr}/**
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
 */const f_=new dr(5e3,15e3),d_="__/auth/iframe",h_="emulator/auth/iframe",p_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qi(e,h_):`https://${t.config.authDomain}/${d_}`,r={apiKey:e.apiKey,appName:t.name,v:fr},s=g_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ur(r).slice(1)}`}async function __(t){const e=await u_(t),n=tt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:m_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},f_.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const v_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y_=500,b_=600,E_="_blank",w_="http://localhost";class xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I_(t,e,n,r=y_,s=b_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},v_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=Pl(l)?E_:n),Al(l)&&(e=e||w_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(Hg(l)&&a!=="_self")return S_(e||"",a),new xa(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new xa(d)}function S_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const C_="__/auth/handler",T_="emulator/auth/handler",R_=encodeURIComponent("fac");async function Ua(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:s};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof pr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${R_}=${encodeURIComponent(c)}`:"";return`${A_(t)}?${ur(a).slice(1)}${l}`}function A_({config:t}){return t.emulator?qi(t,T_):`https://${t.authDomain}/${C_}`}/**
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
 */const Ws="webStorageSupport";class P_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kl,this._completeRedirectFn=Zm,this._overrideRedirectResult=Ym}async _openPopup(e,n,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ua(e,n,r,gi(),s);return I_(e,o,Qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ua(e,n,r,gi(),s);return Nm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await __(e),r=new t_(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ml()||Ji()||ys()}}const k_=P_;var $a="@firebase/auth",Fa="1.7.1";/**
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
 */class O_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function N_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L_(t){nr(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dl(t)},l=new Jg(r,s,i,c);return sm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nr(new kn("auth-internal",e=>{const n=un(e.getProvider("auth").getImmediate());return(r=>new O_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In($a,Fa,N_(t)),In($a,Fa,"esm2017")}/**
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
 */const M_=5*60,D_=fl("authIdTokenMaxAge")||M_;let Ba=null;const x_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D_)return;const s=n==null?void 0:n.token;Ba!==s&&(Ba=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function U_(t=fg()){const e=gl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rm(t,{popupRedirectResolver:k_,persistence:[Vm,Pm,Kl]}),r=fl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=x_(i.toString());Sm(n,o,()=>o(n.currentUser)),Im(n,a=>o(a))}}const s=ep("auth");return s&&im(n,`http://${s}`),n}function $_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L_("Browser");const F_={apiKey:"AIzaSyBm5CfzbOl8mYldxgN5giPFPImcuSQMEXA",authDomain:"online-shopping-mall-ba092.firebaseapp.com",projectId:"online-shopping-mall-ba092",storageBucket:"online-shopping-mall-ba092.appspot.com",messagingSenderId:"212110660805",appId:"1:212110660805:web:1c726ddeb383f52fcf4cac"},B_=ml(F_),Un=U_(B_),Is=Vd("auth",()=>{const t=re(""),e=re(""),n=ve(()=>{if(e.value.includes("email-already"))return"電子郵件已被使用";if(e.value.includes("invalid-email"))return"無效的電子郵件";if(e.value.includes("weak-password"))return"密碼最少需要6個字";if(!e.value)return""}),r=ve(()=>{if(e.value!=="")return"錯誤的帳號或密碼"});Cm(Un,a=>{a?t.value=a.displayName:t.value=""});async function s(a,c,l){try{e.value="";const u=await ym(Un,a,c);console.log(u.user),u.user&&await wm(u.user,{displayName:l}),await Oa(Un)}catch(u){e.value=u.code,console.log("註冊失敗",n.value)}}async function i(a,c){e.value="";try{const l=await bm(Un,a,c);t.value=l.user.displayName,console.log(l.user)}catch(l){e.value=l.code,console.log("登入失敗:",l.message)}}async function o(){try{await Oa(Un),t.value="",console.log("登出成功")}catch(a){console.log("登出失敗:",a.message)}}return{signupErrorMessage:n,loginErrorMessage:r,memberName:t,signup:s,login:i,logout:o}}),Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},V_=t=>(cn("data-v-4c9221bb"),t=t(),ln(),t),H_={key:0,class:"signup-modal"},j_={class:"modal-content"},W_={class:"signup-form"},K_={for:"signup-name"},z_={for:"signup-email"},q_={for:"signup-password"},G_={class:"success-modal"},J_=V_(()=>_("div",{class:"success-modal-content"},[_("p",null,"成功註冊!!"),_("p",null,"請等待跳轉...")],-1)),Y_=[J_],X_={__name:"Signup",setup(t){const e=Is(),n=re(!1),r=re(""),s=re(""),i=re(""),o=re(!1),a=re(!1),c=re(!1),l=ve(()=>e.signupErrorMessage),u=re(!1);function d(){n.value=!0,o.value=!1,a.value=!1,c.value=!1}function p(){n.value=!1,s.value="",i.value="",r.value="",o.value=!1,a.value=!1,c.value=!1}const g=async()=>{if(r.value===""||s.value===""||i.value===""){o.value=!0;return}try{if(await e.signup(s.value,i.value,r.value),l.value.includes("密碼")){a.value=!1,c.value=!0;return}else if(l.value.includes("電子")){c.value=!1,a.value=!0;return}else a.value=!1,c.value=!1;u.value=!0,setTimeout(()=>{u.value=!1,p()},2e3)}catch(w){console.log(w)}};return(w,C)=>(ue(),ge(_e,null,[_("p",{onClick:C[0]||(C[0]=N=>d())},"註冊"),n.value?(ue(),ge("div",H_,[_("div",j_,[_("span",{onClick:C[1]||(C[1]=N=>p())},"×"),_("form",W_,[_("label",K_,[Me("用戶名 "),me(_("span",null,"請填寫正確的資訊",512),[[Ve,o.value]])]),me(_("input",{type:"text",id:"signup-name","onUpdate:modelValue":C[2]||(C[2]=N=>r.value=N)},null,512),[[en,r.value]]),_("label",z_,[Me("電子郵件 "),me(_("span",null,$e(l.value),513),[[Ve,a.value]])]),me(_("input",{type:"text",id:"signup-email","onUpdate:modelValue":C[3]||(C[3]=N=>s.value=N)},null,512),[[en,s.value]]),_("label",q_,[Me("密碼 "),me(_("span",null,$e(l.value),513),[[Ve,c.value]])]),me(_("input",{type:"password",id:"signup-password","onUpdate:modelValue":C[4]||(C[4]=N=>i.value=N)},null,512),[[en,i.value]]),_("button",{onClick:C[5]||(C[5]=Wc(N=>g(),["prevent"]))},"註冊")]),me(_("div",G_,Y_,512),[[Ve,u.value]])])])):hs("",!0)],64))}},Q_=Ht(X_,[["__scopeId","data-v-4c9221bb"]]),Z_={key:0,class:"login-modal"},ev={class:"modal-content"},tv={class:"login-form"},nv={for:"login-email"},rv={for:"login-password"},sv={__name:"Login",setup(t){const e=Is(),n=re(!1),r=re(""),s=re(""),i=re(!1),o=re(!1),a=ve(()=>e.loginErrorMessage),c=async()=>{if(r.value===""||s.value===""){i.value=!0;return}else i.value=!1;try{if(await e.login(r.value,s.value),console.log(a.value),a.value){o.value=!0;return}else o.value=!1}catch(d){console.log(d)}};function l(){n.value=!0,r.value="",s.value="",i.value=!1,o.value=!1}function u(){n.value=!1,r.value="",s.value="",i.value=!1,o.value=!1}return(d,p)=>(ue(),ge(_e,null,[_("p",{onClick:p[0]||(p[0]=g=>l())},"登入"),n.value?(ue(),ge("div",Z_,[_("div",ev,[_("span",{onClick:p[1]||(p[1]=g=>u())},"×"),_("form",tv,[_("label",nv,[Me("電子郵件 "),me(_("span",null,"請填寫帳號或密碼",512),[[Ve,i.value]])]),me(_("input",{type:"text",id:"login-email","onUpdate:modelValue":p[2]||(p[2]=g=>r.value=g)},null,512),[[en,r.value]]),_("label",rv,[Me("密碼 "),me(_("span",null,$e(a.value),513),[[Ve,o.value]])]),me(_("input",{type:"password",id:"login-password","onUpdate:modelValue":p[3]||(p[3]=g=>s.value=g)},null,512),[[en,s.value]]),_("button",{onClick:p[4]||(p[4]=Wc(g=>c(),["prevent"]))},"登入")])])])):hs("",!0)],64))}},iv=Ht(sv,[["__scopeId","data-v-88b9a264"]]),ov=t=>(cn("data-v-3990721b"),t=t(),ln(),t),av={key:0,class:"logout-modal"},cv={class:"modal-content"},lv=ov(()=>_("p",null,"確定登出嗎?",-1)),uv={__name:"Logout",setup(t){const e=Is(),n=re(!1);function r(){n.value=!0}function s(){n.value=!1}const i=async()=>{try{await e.logout(),n.value=!1}catch(o){console.log(o)}};return(o,a)=>(ue(),ge(_e,null,[_("p",{onClick:a[0]||(a[0]=c=>r())},"登出"),n.value?(ue(),ge("div",av,[_("div",cv,[_("span",{onClick:a[1]||(a[1]=c=>s())},"×"),lv,_("button",{onClick:a[2]||(a[2]=c=>i())},"確定")])])):hs("",!0)],64))}},fv=Ht(uv,[["__scopeId","data-v-3990721b"]]),Ss=t=>(cn("data-v-7c9ba16f"),t=t(),ln(),t),dv=Ss(()=>_("label",{class:"hamburger",for:"toggle"},[_("div",{class:"bar"}),_("div",{class:"bar"}),_("div",{class:"bar"})],-1)),hv=Ss(()=>_("input",{type:"checkbox",id:"toggle"},null,-1)),pv={class:"navbar"},gv={class:"logo"},mv={class:"search"},_v=Ss(()=>_("img",{src:"https://cdn-icons-png.flaticon.com/512/54/54481.png",alt:""},null,-1)),vv=[_v],yv={class:"error-modal"},bv={class:"content"},Ev=Ss(()=>_("p",null,"未搜索到此商品，請輸入正確的關鍵字",-1)),wv={__name:"Header",setup(t){const e=Is(),n=il(),r=Ae("products"),s=ve(()=>e.memberName),i=ve(()=>!s.value),o=ve(()=>"你好"+s.value+"!"),a=re(""),c=re(!1);function l(){if(a.value==="")return;const u=r.value.filter(d=>d.name.includes(a.value));if(u.length===0){a.value="",c.value=!c.value;return}a.value="",n.push({path:`/product/${u[0].id}`})}return(u,d)=>{const p=cs("router-link");return ue(),ge(_e,null,[dv,_("header",null,[hv,_("nav",pv,[_("ul",null,[me(_("li",null,$e(o.value),513),[[Ve,s.value]]),_("li",null,[fe(p,{to:"/home"},{default:kt(()=>[Me("首頁")]),_:1})]),_("li",null,[fe(p,{to:"/cart"},{default:kt(()=>[Me("購物車")]),_:1})]),_("li",null,[fe(Q_)]),_("li",null,[i.value?(ue(),Br(iv,{key:0})):(ue(),Br(fv,{key:1}))])])]),_("div",gv,[_("h1",null,[fe(p,{to:"/home"},{default:kt(()=>[Me("購物網站")]),_:1})])]),_("div",mv,[me(_("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=g=>a.value=g),onKeyup:d[1]||(d[1]=Ad(g=>l(),["enter"]))},null,544),[[en,a.value]]),_("div",{class:"search-pic",onClick:d[2]||(d[2]=g=>l())},vv)])]),fe(Bi,{name:"error-modal"},{default:kt(()=>[me(_("div",yv,[_("div",bv,[_("span",{onClick:d[3]||(d[3]=g=>c.value=!c.value)},"×"),Ev])],512),[[Ve,c.value]])]),_:1})],64)}}},eo=Ht(wv,[["__scopeId","data-v-7c9ba16f"]]),Iv=t=>(cn("data-v-0ce4874c"),t=t(),ln(),t),Sv={class:"banner"},Cv=Iv(()=>_("div",{class:"filter"},null,-1)),Tv=["src"],Rv={class:"dot-container"},Av=["onClick"],Pv={__name:"Banner",setup(t){const e=Ae("products"),n=re(0);function r(o){n.value>=0&&(n.value+=o,n.value>4?n.value=0:n.value<0&&(n.value=4))}function s(o){n.value=o-1}let i;return i=setInterval(()=>r(1),3e3),Di(()=>{clearInterval(i)}),(o,a)=>(ue(),ge("div",Sv,[Cv,(ue(!0),ge(_e,null,$r(Lt(e),(c,l)=>me((ue(),ge("div",{class:"banner-pic",key:l},[_("img",{src:c.image,alt:""},null,8,Tv)])),[[Ve,l===n.value]])),128)),_("a",{class:"prev",onClick:a[0]||(a[0]=c=>r(-1))},"❮"),_("a",{class:"next",onClick:a[1]||(a[1]=c=>r(1))},"❯"),_("div",Rv,[(ue(),ge(_e,null,$r(5,c=>_("div",{class:ts(["dot",{activeDot:n.value===c-1}]),onClick:l=>s(c)},null,10,Av)),64))])]))}},kv=Ht(Pv,[["__scopeId","data-v-0ce4874c"]]),Ov=t=>(cn("data-v-942561ce"),t=t(),ln(),t),Nv={class:"product-list"},Lv={class:"pic"},Mv=Ov(()=>_("div",{class:"filter"},null,-1)),Dv=["src","alt"],xv={__name:"ProductList",setup(t){const e=Ae("products");return(n,r)=>{const s=cs("router-link");return ue(),ge("div",Nv,[_("ul",null,[(ue(!0),ge(_e,null,$r(Lt(e),i=>(ue(),ge("li",{class:"list",key:i.id},[_("div",Lv,[fe(s,{to:`/product/${i.id}`},{default:kt(()=>[Mv,_("img",{src:i.image,alt:i.name},null,8,Dv)]),_:2},1032,["to"])]),_("h1",null,[fe(s,{to:`/product/${i.id}`},{default:kt(()=>[Me($e(i.name),1)]),_:2},1032,["to"])]),_("p",null,"$"+$e(i.price),1)]))),128))])])}}},Uv=Ht(xv,[["__scopeId","data-v-942561ce"]]),$v={__name:"Home",setup(t){return(e,n)=>(ue(),ge(_e,null,[fe(eo),fe(kv),fe(Uv)],64))}},to=t=>(cn("data-v-874ca8b4"),t=t(),ln(),t),Fv={class:"cart"},Bv={key:0},Vv=["onUpdate:modelValue"],Hv={class:"pic"},jv=["src"],Wv={class:"txt"},Kv={class:"num"},zv=["onClick"],qv=["onUpdate:modelValue"],Gv=["onClick"],Jv=["onClick"],Yv={class:"footer"},Xv={class:"item"},Qv=to(()=>_("label",{for:"all-check"},"全選",-1)),Zv={class:"item"},ey={key:1,class:"empty"},ty=to(()=>_("p",null,"目前尚未添加商品",-1)),ny={class:"modal"},ry={class:"content"},sy={class:"btn"},iy={class:"nothing"},oy={class:"content"},ay=to(()=>_("p",null,"請選取商品",-1)),cy={__name:"Cart",setup(t){re(1);const e=re([]);ar(()=>{localStorage.getItem("cart")&&(e.value=JSON.parse(localStorage.getItem("cart")))});function n(u){e.value.splice(u,1)}bn(e,()=>{localStorage.setItem("cart",JSON.stringify(e.value))},{deep:!0});function r(u,d){if(e.value[d].count+u>=1)e.value[d].count+=u;else return}const s=ve({get:()=>e.value.length>0&&e.value.every(u=>u.checked),set:u=>{e.value.forEach(d=>d.checked=u)}}),i=ve(()=>e.value.reduce((u,d)=>d.checked?u+d.price*d.count:u+0,0)),o=re(!1),a=re(!1);function c(){e.value.length>0&&e.value.some(u=>u.checked)?o.value=!0:a.value=!0}function l(){const u=e.value.filter(d=>!d.checked);e.value=u,o.value=!1}return(u,d)=>{const p=cs("router-link");return ue(),ge(_e,null,[fe(eo),_("div",Fv,[e.value&&e.value.length>0?(ue(),ge("ul",Bv,[(ue(!0),ge(_e,null,$r(e.value,(g,w)=>(ue(),ge("li",{key:g.id},[me(_("input",{type:"checkbox","onUpdate:modelValue":C=>g.checked=C},null,8,Vv),[[Ko,g.checked]]),_("div",Hv,[_("img",{src:g.image,alt:""},null,8,jv)]),_("div",Wv,[_("h1",null,$e(g.name),1),_("p",null,"$"+$e(g.price),1),_("div",Kv,[_("button",{class:"minus",onClick:C=>r(-1,w)},"－",8,zv),me(_("input",{type:"number",placeholder:"數量",min:"0",max:"99","onUpdate:modelValue":C=>g.count=C},null,8,qv),[[en,g.count]]),_("button",{class:"plus",onClick:C=>r(1,w)},"＋",8,Gv)]),_("button",{class:"del-btn",onClick:C=>n(w)},"刪除",8,Jv)])]))),128)),_("div",Yv,[_("div",Xv,[me(_("input",{type:"checkbox",name:"",id:"all-check","onUpdate:modelValue":d[0]||(d[0]=g=>s.value=g)},null,512),[[Ko,s.value]]),Qv]),_("div",Zv,[_("p",null,[Me("總金額$ "),_("span",null,$e(i.value),1)]),_("button",{onClick:d[1]||(d[1]=g=>c())},"結帳")])])])):(ue(),ge("div",ey,[ty,fe(p,{to:"/home"},{default:kt(()=>[Me("前往")]),_:1})]))]),me(_("div",ny,[_("div",ry,[_("p",null,[Me("總金額$"),_("span",null,$e(i.value),1),Me("確定要付款嗎?")]),_("div",sy,[_("button",{class:"confrim",onClick:d[2]||(d[2]=g=>l())},"確定"),_("button",{class:"cancel",onClick:d[3]||(d[3]=g=>o.value=!1)},"取消")])])],512),[[Ve,o.value]]),me(_("div",iy,[_("div",oy,[ay,_("button",{onClick:d[4]||(d[4]=g=>a.value=!1)},"確定")])],512),[[Ve,a.value]])],64)}}},ly=Ht(cy,[["__scopeId","data-v-874ca8b4"]]),Ql=t=>(cn("data-v-41f5a98c"),t=t(),ln(),t),uy={class:"container"},fy={key:0,class:"product"},dy={class:"wrap"},hy={class:"pic"},py=["src"],gy={class:"detail"},my=Ql(()=>_("h3",null,"商品詳情",-1)),_y={class:"footer"},vy={class:"modal"},yy={class:"content"},by=Ql(()=>_("p",null,"此商品已在購物車內",-1)),Ey={__name:"ProductDetail",setup(t){const e=Ae("products"),n=zh(),r=il(),s=re(null),i=re(!1);ar(()=>{const l=n.params.id,u=e.value.find(d=>d.id==l);s.value=u,localStorage.getItem("cart")&&(o.value=JSON.parse(localStorage.getItem("cart")))}),rf(()=>{const l=n.params.id,u=e.value.find(d=>d.id==l);s.value=u});const o=re([]);function a(){o.value.find(l=>l.id==s.value.id)?i.value=!i.value:(o.value.push(s.value),localStorage.setItem("cart",JSON.stringify(o.value)))}function c(){r.back()}return(l,u)=>(ue(),ge(_e,null,[_("div",uy,[fe(eo),s.value?(ue(),ge("div",fy,[_("div",dy,[_("button",{class:"prev",onClick:u[0]||(u[0]=d=>c())},"上一頁"),_("div",hy,[_("img",{src:s.value.image,alt:""},null,8,py)]),_("h1",null,$e(s.value.name),1),_("p",null,"$"+$e(s.value.price),1),_("div",gy,[my,_("p",null,$e(s.value.description),1)])])])):hs("",!0),_("div",_y,[_("button",{onClick:u[1]||(u[1]=d=>a())},"加入購物車")])]),me(_("div",vy,[_("div",yy,[by,_("button",{onClick:u[2]||(u[2]=d=>i.value=!i.value)},"確定")])],512),[[Ve,i.value]])],64))}},wy=Ht(Ey,[["__scopeId","data-v-41f5a98c"]]),Iy=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:$v},{path:"/product/:id",name:"productDetail",component:wy},{path:"/cart",name:"cart",component:ly}],Sy=Wh({history:yh(),routes:Iy}),Cy={__name:"App",setup(t){const e=re([]);return jn("products",e),ar(async()=>{try{const n=await fetch("https://raw.githubusercontent.com/a41522001/product/main/product.json");e.value=await n.json()}catch(n){console.log(n),alert("網址連線錯誤請稍後再試")}}),(n,r)=>{const s=cs("router-view");return ue(),Br(s)}}},no=Od(Cy);no.use(Sy);no.use(Dd());no.mount("#app");
