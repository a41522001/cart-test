(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const pe={},bn=[],Be=()=>{},uu=()=>!1,or=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ri=t=>t.startsWith("onUpdate:"),be=Object.assign,Pi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fu=Object.prototype.hasOwnProperty,te=(t,e)=>fu.call(t,e),B=Array.isArray,En=t=>ps(t)==="[object Map]",xn=t=>ps(t)==="[object Set]",vo=t=>ps(t)==="[object Date]",G=t=>typeof t=="function",ye=t=>typeof t=="string",Bt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",nc=t=>(he(t)||G(t))&&G(t.then)&&G(t.catch),sc=Object.prototype.toString,ps=t=>sc.call(t),du=t=>ps(t).slice(8,-1),rc=t=>ps(t)==="[object Object]",ki=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=Ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hu=/-(\w)/g,st=ar(t=>t.replace(hu,(e,n)=>n?n.toUpperCase():"")),pu=/\B([A-Z])/g,un=ar(t=>t.replace(pu,"-$1").toLowerCase()),cr=ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=ar(t=>t?`on${cr(t)}`:""),Ht=(t,e)=>!Object.is(t,e),$s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gu=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let yo;const ic=()=>yo||(yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ye(s)?yu(s):Oi(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ye(t)||he(t))return t}const mu=/;(?![^(]*\))/g,_u=/:([^]+)/,vu=/\/\*[^]*?\*\//g;function yu(t){const e={};return t.replace(vu,"").split(mu).forEach(n=>{if(n){const s=n.split(_u);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function lr(t){let e="";if(ye(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=lr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eu=Ai(bu);function oc(t){return!!t||t===""}function wu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=gs(t[s],e[s]);return n}function gs(t,e){if(t===e)return!0;let n=vo(t),s=vo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bt(t),s=Bt(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?wu(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!gs(t[o],e[o]))return!1}}return String(t)===String(e)}function Ni(t,e){return t.findIndex(n=>gs(n,e))}const Re=t=>ye(t)?t:t==null?"":B(t)||he(t)&&(t.toString===sc||!G(t.toString))?JSON.stringify(t,ac,2):String(t),ac=(t,e)=>e&&e.__v_isRef?ac(t,e.value):En(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Mr(s,i)+" =>"]=r,n),{})}:xn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Mr(n))}:Bt(e)?Mr(e):he(e)&&!B(e)&&!rc(e)?String(e):e,Mr=(t,e="")=>{var n;return Bt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fe;class cc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function lc(t){return new cc(t)}function Iu(t,e=Fe){e&&e.active&&e.effects.push(t)}function uc(){return Fe}function Su(t){Fe&&Fe.cleanups.push(t)}let nn;class Li{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Iu(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Tu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),dn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dt,n=nn;try{return Dt=!0,nn=this,this._runnings++,bo(this),this.fn()}finally{Eo(this),this._runnings--,nn=n,Dt=e}}stop(){var e;this.active&&(bo(this),Eo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Tu(t){return t.value}function bo(t){t._trackId++,t._depsLength=0}function Eo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)fc(t.deps[e],t);t.deps.length=t._depsLength}}function fc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dt=!0,Zr=0;const dc=[];function fn(){dc.push(Dt),Dt=!1}function dn(){const t=dc.pop();Dt=t===void 0?!0:t}function Mi(){Zr++}function Di(){for(Zr--;!Zr&&ei.length;)ei.shift()()}function hc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&fc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ei=[];function pc(t,e,n){Mi();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ei.push(s.scheduler)))}Di()}const gc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},qs=new WeakMap,sn=Symbol(""),ti=Symbol("");function $e(t,e,n){if(Dt&&nn){let s=qs.get(t);s||qs.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=gc(()=>s.delete(n))),hc(nn,r)}}function ft(t,e,n,s,r,i){const o=qs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Bt(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?ki(n)&&a.push(o.get("length")):(a.push(o.get(sn)),En(t)&&a.push(o.get(ti)));break;case"delete":B(t)||(a.push(o.get(sn)),En(t)&&a.push(o.get(ti)));break;case"set":En(t)&&a.push(o.get(sn));break}Mi();for(const c of a)c&&pc(c,4);Di()}function Cu(t,e){var n;return(n=qs.get(t))==null?void 0:n.get(e)}const Au=Ai("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bt)),wo=Ru();function Ru(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let i=0,o=this.length;i<o;i++)$e(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn(),Mi();const s=ee(this)[e].apply(this,n);return Di(),dn(),s}}),t}function Pu(t){const e=ee(this);return $e(e,"has",t),e.hasOwnProperty(t)}class _c{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Hu:Ec:i?bc:yc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!r){if(o&&te(wo,n))return Reflect.get(wo,n,s);if(n==="hasOwnProperty")return Pu}const a=Reflect.get(e,n,s);return(Bt(n)?mc.has(n):Au(n))||(r||$e(e,"get",n),i)?a:Ee(a)?o&&ki(n)?a:a.value:he(a)?r?Ic(a):ms(a):a}}class vc extends _c{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Pn(i);if(!Gs(s)&&!Pn(s)&&(i=ee(i),s=ee(s)),!B(e)&&Ee(i)&&!Ee(s))return c?!1:(i.value=s,!0)}const o=B(e)&&ki(n)?Number(n)<e.length:te(e,n),a=Reflect.set(e,n,s,r);return e===ee(r)&&(o?Ht(s,i)&&ft(e,"set",n,s):ft(e,"add",n,s)),a}deleteProperty(e,n){const s=te(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ft(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Bt(n)||!mc.has(n))&&$e(e,"has",n),s}ownKeys(e){return $e(e,"iterate",B(e)?"length":sn),Reflect.ownKeys(e)}}class ku extends _c{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ou=new vc,Nu=new ku,Lu=new vc(!0),xi=t=>t,ur=t=>Reflect.getPrototypeOf(t);function Rs(t,e,n=!1,s=!1){t=t.__v_raw;const r=ee(t),i=ee(e);n||(Ht(e,i)&&$e(r,"get",e),$e(r,"get",i));const{has:o}=ur(r),a=s?xi:n?Fi:ss;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ps(t,e=!1){const n=this.__v_raw,s=ee(n),r=ee(t);return e||(Ht(t,r)&&$e(s,"has",t),$e(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ks(t,e=!1){return t=t.__v_raw,!e&&$e(ee(t),"iterate",sn),Reflect.get(t,"size",t)}function Io(t){t=ee(t);const e=ee(this);return ur(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function So(t,e){e=ee(e);const n=ee(this),{has:s,get:r}=ur(n);let i=s.call(n,t);i||(t=ee(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ht(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function To(t){const e=ee(this),{has:n,get:s}=ur(e);let r=n.call(e,t);r||(t=ee(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ft(e,"delete",t,void 0),i}function Co(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Os(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ee(o),c=e?xi:t?Fi:ss;return!t&&$e(a,"iterate",sn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ns(t,e,n){return function(...s){const r=this.__v_raw,i=ee(r),o=En(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?xi:e?Fi:ss;return!e&&$e(i,"iterate",c?ti:sn),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mu(){const t={get(i){return Rs(this,i)},get size(){return ks(this)},has:Ps,add:Io,set:So,delete:To,clear:Co,forEach:Os(!1,!1)},e={get(i){return Rs(this,i,!1,!0)},get size(){return ks(this)},has:Ps,add:Io,set:So,delete:To,clear:Co,forEach:Os(!1,!0)},n={get(i){return Rs(this,i,!0)},get size(){return ks(this,!0)},has(i){return Ps.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Os(!0,!1)},s={get(i){return Rs(this,i,!0,!0)},get size(){return ks(this,!0)},has(i){return Ps.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ns(i,!1,!1),n[i]=Ns(i,!0,!1),e[i]=Ns(i,!1,!0),s[i]=Ns(i,!0,!0)}),[t,n,e,s]}const[Du,xu,$u,Uu]=Mu();function $i(t,e){const n=e?t?Uu:$u:t?xu:Du;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(te(n,r)&&r in s?n:s,r,i)}const Fu={get:$i(!1,!1)},Vu={get:$i(!1,!0)},Bu={get:$i(!0,!1)},yc=new WeakMap,bc=new WeakMap,Ec=new WeakMap,Hu=new WeakMap;function ju(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(t){return t.__v_skip||!Object.isExtensible(t)?0:ju(du(t))}function ms(t){return Pn(t)?t:Ui(t,!1,Ou,Fu,yc)}function wc(t){return Ui(t,!1,Lu,Vu,bc)}function Ic(t){return Ui(t,!0,Nu,Bu,Ec)}function Ui(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Wu(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function xt(t){return Pn(t)?xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Pn(t){return!!(t&&t.__v_isReadonly)}function Gs(t){return!!(t&&t.__v_isShallow)}function Sc(t){return xt(t)||Pn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function fr(t){return Object.isExtensible(t)&&zs(t,"__v_skip",!0),t}const ss=t=>he(t)?ms(t):t,Fi=t=>he(t)?Ic(t):t;class Tc{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Li(()=>e(this._value),()=>Us(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ee(this);return(!e._cacheable||e.effect.dirty)&&Ht(e._value,e._value=e.effect.run())&&Us(e,4),Cc(e),e.effect._dirtyLevel>=2&&Us(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ku(t,e,n=!1){let s,r;const i=G(t);return i?(s=t,r=Be):(s=t.get,r=t.set),new Tc(s,r,i||!r,n)}function Cc(t){var e;Dt&&nn&&(t=ee(t),hc(nn,(e=t.dep)!=null?e:t.dep=gc(()=>t.dep=void 0,t instanceof Tc?t:void 0)))}function Us(t,e=4,n){t=ee(t);const s=t.dep;s&&pc(s,e)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function Y(t){return Ac(t,!1)}function zu(t){return Ac(t,!0)}function Ac(t,e){return Ee(t)?t:new qu(t,e)}class qu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:ss(e)}get value(){return Cc(this),this._value}set value(e){const n=this.__v_isShallow||Gs(e)||Pn(e);e=n?e:ee(e),Ht(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ss(e),Us(this,4))}}function $t(t){return Ee(t)?t.value:t}const Gu={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ee(r)&&!Ee(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Rc(t){return xt(t)?t:new Proxy(t,Gu)}function Ju(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Xu(t,n);return e}class Yu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cu(ee(this._object),this._key)}}function Xu(t,e,n){const s=t[e];return Ee(s)?s:new Yu(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ut(t,e,n,s){try{return s?t(...s):t()}catch(r){dr(r,e,n)}}function He(t,e,n,s){if(G(t)){const i=Ut(t,e,n,s);return i&&nc(i)&&i.catch(o=>{dr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(He(t[i],e,n,s));return r}function dr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ut(c,null,10,[t,o,a]);return}}Qu(t,n,r,s)}function Qu(t,e,n,s=!0){console.error(t)}let rs=!1,ni=!1;const Ae=[];let Qe=0;const wn=[];let Tt=null,Zt=0;const Pc=Promise.resolve();let Vi=null;function hr(t){const e=Vi||Pc;return t?e.then(this?t.bind(this):t):e}function Zu(t){let e=Qe+1,n=Ae.length;for(;e<n;){const s=e+n>>>1,r=Ae[s],i=is(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Bi(t){(!Ae.length||!Ae.includes(t,rs&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ae.push(t):Ae.splice(Zu(t.id),0,t),kc())}function kc(){!rs&&!ni&&(ni=!0,Vi=Pc.then(Nc))}function ef(t){const e=Ae.indexOf(t);e>Qe&&Ae.splice(e,1)}function tf(t){B(t)?wn.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?Zt+1:Zt))&&wn.push(t),kc()}function Ao(t,e,n=rs?Qe+1:0){for(;n<Ae.length;n++){const s=Ae[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ae.splice(n,1),n--,s()}}}function Oc(t){if(wn.length){const e=[...new Set(wn)].sort((n,s)=>is(n)-is(s));if(wn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Zt=0;Zt<Tt.length;Zt++)Tt[Zt]();Tt=null,Zt=0}}const is=t=>t.id==null?1/0:t.id,nf=(t,e)=>{const n=is(t)-is(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nc(t){ni=!1,rs=!0,Ae.sort(nf);try{for(Qe=0;Qe<Ae.length;Qe++){const e=Ae[Qe];e&&e.active!==!1&&Ut(e,null,14)}}finally{Qe=0,Ae.length=0,Oc(),rs=!1,Vi=null,(Ae.length||wn.length)&&Nc()}}function sf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||pe;h&&(r=n.map(g=>ye(g)?g.trim():g)),d&&(r=n.map(ns))}let a,c=s[a=Lr(e)]||s[a=Lr(st(e))];!c&&i&&(c=s[a=Lr(un(e))]),c&&He(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,He(l,t,6,r)}}function Lc(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!G(t)){const c=l=>{const u=Lc(l,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(he(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):be(o,i),he(t)&&s.set(t,o),o)}function pr(t,e){return!t||!or(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,un(e))||te(t,e))}let Pe=null,gr=null;function Js(t){const e=Pe;return Pe=t,gr=t&&t.type.__scopeId||null,e}function Wt(t){gr=t}function Kt(){gr=null}function rn(t,e=Pe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Bo(-1);const i=Js(e);let o;try{o=t(...r)}finally{Js(i),s._d&&Bo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Dr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:_,inheritAttrs:y}=t;let C,O;const M=Js(t);try{if(n.shapeFlag&4){const K=r||s,j=K;C=Xe(u.call(j,K,d,i,g,h,_)),O=c}else{const K=e;C=Xe(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),O=e.props?c:rf(c)}}catch(K){Xn.length=0,dr(K,t,1),C=de(Ke)}let F=C;if(O&&y!==!1){const K=Object.keys(O),{shapeFlag:j}=F;K.length&&j&7&&(o&&K.some(Ri)&&(O=of(O,o)),F=jt(F,O))}return n.dirs&&(F=jt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),C=F,Js(M),C}const rf=t=>{let e;for(const n in t)(n==="class"||n==="style"||or(n))&&((e||(e={}))[n]=t[n]);return e},of=(t,e)=>{const n={};for(const s in t)(!Ri(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function af(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ro(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!pr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ro(s,o,l):!0:!!o;return!1}function Ro(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!pr(n,i))return!0}return!1}function cf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mc="components";function mr(t,e){return uf(Mc,t,!0,e)||t}const lf=Symbol.for("v-ndc");function uf(t,e,n=!0,s=!1){const r=Pe||Ie;if(r){const i=r.type;if(t===Mc){const a=ld(i,!1);if(a&&(a===e||a===st(e)||a===cr(st(e))))return i}const o=Po(r[t]||i[t],e)||Po(r.appContext[t],e);return!o&&s?i:o}}function Po(t,e){return t&&(t[e]||t[st(e)]||t[cr(st(e))])}const ff=t=>t.__isSuspense;function df(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):tf(t)}const hf=Symbol.for("v-scx"),pf=()=>ke(hf);function gf(t,e){return Hi(t,null,e)}const Ls={};function In(t,e,n){return Hi(t,e,n)}function Hi(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=pe){if(e&&i){const $=e;e=(...J)=>{$(...J),j()}}const c=Ie,l=$=>s===!0?$:tn($,s===!1?1:void 0);let u,d=!1,h=!1;if(Ee(t)?(u=()=>t.value,d=Gs(t)):xt(t)?(u=()=>l(t),d=!0):B(t)?(h=!0,d=t.some($=>xt($)||Gs($)),u=()=>t.map($=>{if(Ee($))return $.value;if(xt($))return l($);if(G($))return Ut($,c,2)})):G(t)?e?u=()=>Ut(t,c,2):u=()=>(g&&g(),He(t,c,3,[_])):u=Be,e&&s){const $=u;u=()=>tn($())}let g,_=$=>{g=F.onStop=()=>{Ut($,c,4),g=F.onStop=void 0}},y;if(Ir)if(_=Be,e?n&&He(e,c,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const $=pf();y=$.__watcherHandles||($.__watcherHandles=[])}else return Be;let C=h?new Array(t.length).fill(Ls):Ls;const O=()=>{if(!(!F.active||!F.dirty))if(e){const $=F.run();(s||d||(h?$.some((J,R)=>Ht(J,C[R])):Ht($,C)))&&(g&&g(),He(e,c,3,[$,C===Ls?void 0:h&&C[0]===Ls?[]:C,_]),C=$)}else F.run()};O.allowRecurse=!!e;let M;r==="sync"?M=O:r==="post"?M=()=>De(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),M=()=>Bi(O));const F=new Li(u,Be,M),K=uc(),j=()=>{F.stop(),K&&Pi(K.effects,F)};return e?n?O():C=F.run():r==="post"?De(F.run.bind(F),c&&c.suspense):F.run(),y&&y.push(j),j}function mf(t,e,n){const s=this.proxy,r=ye(t)?t.includes(".")?Dc(s,t):()=>s[t]:t.bind(s,s);let i;G(e)?i=e:(i=e.handler,n=e);const o=_s(this),a=Hi(r,i.bind(s),n);return o(),a}function Dc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function tn(t,e,n=0,s){if(!he(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Ee(t))tn(t.value,e,n,s);else if(B(t))for(let r=0;r<t.length;r++)tn(t[r],e,n,s);else if(xn(t)||En(t))t.forEach(r=>{tn(r,e,n,s)});else if(rc(t))for(const r in t)tn(t[r],e,n,s);return t}function re(t,e){if(Pe===null)return t;const n=Sr(Pe)||Pe.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=pe]=e[r];i&&(G(i)&&(i={mounted:i,updated:i}),i.deep&&tn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Gt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(fn(),He(c,n,8,[t.el,a,t,e]),dn())}}const Ct=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function _f(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $n(()=>{t.isMounted=!0}),Bc(()=>{t.isUnmounting=!0}),t}const Ve=[Function,Array],xc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},vf={name:"BaseTransition",props:xc,setup(t,{slots:e}){const n=rd(),s=_f();return()=>{const r=e.default&&Uc(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const h of r)if(h.type!==Ke){i=h;break}}const o=ee(t),{mode:a}=o;if(s.isLeaving)return xr(i);const c=ko(i);if(!c)return xr(i);const l=si(c,o,s,n);ri(c,l);const u=n.subTree,d=u&&ko(u);if(d&&d.type!==Ke&&!en(c,d)){const h=si(d,o,s,n);if(ri(d,h),a==="out-in")return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},xr(i);a==="in-out"&&c.type!==Ke&&(h.delayLeave=(g,_,y)=>{const C=$c(s,d);C[String(d.key)]=d,g[Ct]=()=>{_(),g[Ct]=void 0,delete l.delayedLeave},l.delayedLeave=y})}return i}}},yf=vf;function $c(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function si(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:y,onAppear:C,onAfterAppear:O,onAppearCancelled:M}=e,F=String(t.key),K=$c(n,t),j=(R,D)=>{R&&He(R,s,9,D)},$=(R,D)=>{const z=D[1];j(R,D),B(R)?R.every(ne=>ne.length<=1)&&z():R.length<=1&&z()},J={mode:i,persisted:o,beforeEnter(R){let D=a;if(!n.isMounted)if(r)D=y||a;else return;R[Ct]&&R[Ct](!0);const z=K[F];z&&en(t,z)&&z.el[Ct]&&z.el[Ct](),j(D,[R])},enter(R){let D=c,z=l,ne=u;if(!n.isMounted)if(r)D=C||c,z=O||l,ne=M||u;else return;let x=!1;const se=R[Ms]=Se=>{x||(x=!0,Se?j(ne,[R]):j(z,[R]),J.delayedLeave&&J.delayedLeave(),R[Ms]=void 0)};D?$(D,[R,se]):se()},leave(R,D){const z=String(t.key);if(R[Ms]&&R[Ms](!0),n.isUnmounting)return D();j(d,[R]);let ne=!1;const x=R[Ct]=se=>{ne||(ne=!0,D(),se?j(_,[R]):j(g,[R]),R[Ct]=void 0,K[z]===t&&delete K[z])};K[z]=t,h?$(h,[R,x]):x()},clone(R){return si(R,e,n,s)}};return J}function xr(t){if(_r(t))return t=jt(t),t.children=null,t}function ko(t){return _r(t)?t.children?t.children[0]:void 0:t}function ri(t,e){t.shapeFlag&6&&t.component?ri(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Uc(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&r++,s=s.concat(Uc(o.children,e,a))):(e||o.type!==Ke)&&s.push(a!=null?jt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Fc(t,e){return G(t)?be({name:t.name},e,{setup:t}):t}const Fs=t=>!!t.type.__asyncLoader,_r=t=>t.type.__isKeepAlive;function bf(t,e){Vc(t,"a",e)}function Ef(t,e){Vc(t,"da",e)}function Vc(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)_r(r.parent.vnode)&&wf(s,e,n,r),r=r.parent}}function wf(t,e,n,s){const r=vr(e,t,s,!0);ji(()=>{Pi(s[e],r)},n)}function vr(t,e,n=Ie,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fn();const a=_s(n),c=He(e,n,t,o);return a(),dn(),c});return s?r.unshift(i):r.push(i),i}}const gt=t=>(e,n=Ie)=>(!Ir||t==="sp")&&vr(t,(...s)=>e(...s),n),If=gt("bm"),$n=gt("m"),Sf=gt("bu"),Tf=gt("u"),Bc=gt("bum"),ji=gt("um"),Cf=gt("sp"),Af=gt("rtg"),Rf=gt("rtc");function Pf(t,e=Ie){vr("ec",t,e)}function kn(t,e,n,s){let r;const i=n&&n[s];if(B(t)||ye(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ii=t=>t?Zc(t)?Sr(t)||t.proxy:ii(t.parent):null,Gn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ii(t.parent),$root:t=>ii(t.root),$emit:t=>t.emit,$options:t=>Wi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Bi(t.update)}),$nextTick:t=>t.n||(t.n=hr.bind(t.proxy)),$watch:t=>mf.bind(t)}),$r=(t,e)=>t!==pe&&!t.__isScriptSetup&&te(t,e),kf={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($r(s,e))return o[e]=1,s[e];if(r!==pe&&te(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&te(l,e))return o[e]=3,i[e];if(n!==pe&&te(n,e))return o[e]=4,n[e];oi&&(o[e]=0)}}const u=Gn[e];let d,h;if(u)return e==="$attrs"&&$e(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==pe&&te(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,te(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $r(r,e)?(r[e]=n,!0):s!==pe&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&te(t,o)||$r(e,o)||(a=i[0])&&te(a,o)||te(s,o)||te(Gn,o)||te(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Oo(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oi=!0;function Of(t){const e=Wi(t),n=t.proxy,s=t.ctx;oi=!1,e.beforeCreate&&No(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:_,activated:y,deactivated:C,beforeDestroy:O,beforeUnmount:M,destroyed:F,unmounted:K,render:j,renderTracked:$,renderTriggered:J,errorCaptured:R,serverPrefetch:D,expose:z,inheritAttrs:ne,components:x,directives:se,filters:Se}=e;if(l&&Nf(l,s,null),o)for(const ce in o){const ie=o[ce];G(ie)&&(s[ce]=ie.bind(n))}if(r){const ce=r.call(n,n);he(ce)&&(t.data=ms(ce))}if(oi=!0,i)for(const ce in i){const ie=i[ce],ot=G(ie)?ie.bind(n,n):G(ie.get)?ie.get.bind(n,n):Be,vt=!G(ie)&&G(ie.set)?ie.set.bind(n):Be,Ge=ve({get:ot,set:vt});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Me=>Ge.value=Me})}if(a)for(const ce in a)Hc(a[ce],s,n,ce);if(c){const ce=G(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(ie=>{Jn(ie,ce[ie])})}u&&No(u,t,"c");function Q(ce,ie){B(ie)?ie.forEach(ot=>ce(ot.bind(n))):ie&&ce(ie.bind(n))}if(Q(If,d),Q($n,h),Q(Sf,g),Q(Tf,_),Q(bf,y),Q(Ef,C),Q(Pf,R),Q(Rf,$),Q(Af,J),Q(Bc,M),Q(ji,K),Q(Cf,D),B(z))if(z.length){const ce=t.exposed||(t.exposed={});z.forEach(ie=>{Object.defineProperty(ce,ie,{get:()=>n[ie],set:ot=>n[ie]=ot})})}else t.exposed||(t.exposed={});j&&t.render===Be&&(t.render=j),ne!=null&&(t.inheritAttrs=ne),x&&(t.components=x),se&&(t.directives=se)}function Nf(t,e,n=Be){B(t)&&(t=ai(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=ke(r.from||s,r.default,!0):i=ke(r.from||s):i=ke(r),Ee(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function No(t,e,n){He(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,s){const r=s.includes(".")?Dc(n,s):()=>n[s];if(ye(t)){const i=e[t];G(i)&&In(r,i)}else if(G(t))In(r,t.bind(n));else if(he(t))if(B(t))t.forEach(i=>Hc(i,e,n,s));else{const i=G(t.handler)?t.handler.bind(n):e[t.handler];G(i)&&In(r,i,t)}}function Wi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ys(c,l,o,!0)),Ys(c,e,o)),he(e)&&i.set(e,c),c}function Ys(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ys(t,i,n,!0),r&&r.forEach(o=>Ys(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Lf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lf={data:Lo,props:Mo,emits:Mo,methods:Wn,computed:Wn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Wn,directives:Wn,watch:Df,provide:Lo,inject:Mf};function Lo(t,e){return e?t?function(){return be(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return Wn(ai(t),ai(e))}function ai(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?be(Object.create(null),t,e):e}function Mo(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:be(Object.create(null),Oo(t),Oo(e??{})):e}function Df(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function jc(){return{app:null,config:{isNativeTag:uu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function $f(t,e){return function(s,r=null){G(s)||(s=be({},s)),r!=null&&!he(r)&&(r=null);const i=jc(),o=new WeakSet;let a=!1;const c=i.app={_uid:xf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:fd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&G(l.install)?(o.add(l),l.install(c,...u)):G(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=de(s,r);return h.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Sr(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Sn;Sn=c;try{return l()}finally{Sn=u}}};return c}}let Sn=null;function Jn(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function ke(t,e,n=!1){const s=Ie||Pe;if(s||Sn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Sn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}function Uf(){return!!(Ie||Pe||Sn)}function Ff(t,e,n,s=!1){const r={},i={};zs(i,Er,1),t.propsDefaults=Object.create(null),Wc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:wc(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Vf(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ee(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(pr(t.emitsOptions,h))continue;const g=e[h];if(c)if(te(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=st(h);r[_]=ci(c,a,_,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Wc(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=un(d))===d||!te(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ci(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!te(e,d))&&(delete i[d],l=!0)}l&&ft(t,"set","$attrs")}function Wc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(qn(c))continue;const l=e[c];let u;r&&te(r,u=st(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:pr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ee(n),l=a||pe;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ci(r,c,d,l[d],t,!te(l,d))}}return o}function ci(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&G(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=_s(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===un(n))&&(s=!0))}return s}function Kc(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!G(t)){const u=d=>{c=!0;const[h,g]=Kc(d,e,!0);be(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return he(t)&&s.set(t,bn),bn;if(B(i))for(let u=0;u<i.length;u++){const d=st(i[u]);Do(d)&&(o[d]=pe)}else if(i)for(const u in i){const d=st(u);if(Do(d)){const h=i[u],g=o[d]=B(h)||G(h)?{type:h}:be({},h);if(g){const _=Uo(Boolean,g.type),y=Uo(String,g.type);g[0]=_>-1,g[1]=y<0||_<y,(_>-1||te(g,"default"))&&a.push(d)}}}const l=[o,a];return he(t)&&s.set(t,l),l}function Do(t){return t[0]!=="$"&&!qn(t)}function xo(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function $o(t,e){return xo(t)===xo(e)}function Uo(t,e){return B(e)?e.findIndex(n=>$o(n,t)):G(e)&&$o(e,t)?0:-1}const zc=t=>t[0]==="_"||t==="$stable",Ki=t=>B(t)?t.map(Xe):[Xe(t)],Bf=(t,e,n)=>{if(e._n)return e;const s=rn((...r)=>Ki(e(...r)),n);return s._c=!1,s},qc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zc(r))continue;const i=t[r];if(G(i))e[r]=Bf(r,i,s);else if(i!=null){const o=Ki(i);e[r]=()=>o}}},Gc=(t,e)=>{const n=Ki(e);t.slots.default=()=>n},Hf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),zs(e,"_",n)):qc(e,t.slots={})}else t.slots={},e&&Gc(t,e);zs(t.slots,Er,1)},jf=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(be(r,e),!n&&a===1&&delete r._):(i=!e.$stable,qc(e,r)),o=e}else e&&(Gc(t,e),o={default:1});if(i)for(const a in r)!zc(a)&&o[a]==null&&delete r[a]};function li(t,e,n,s,r=!1){if(B(t)){t.forEach((h,g)=>li(h,e&&(B(e)?e[g]:e),n,s,r));return}if(Fs(s)&&!r)return;const i=s.shapeFlag&4?Sr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,te(d,l)&&(d[l]=null)):Ee(l)&&(l.value=null)),G(c))Ut(c,a,12,[o,u]);else{const h=ye(c),g=Ee(c);if(h||g){const _=()=>{if(t.f){const y=h?te(d,c)?d[c]:u[c]:c.value;r?B(y)&&Pi(y,i):B(y)?y.includes(i)||y.push(i):h?(u[c]=[i],te(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,te(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,De(_,n)):_()}}}const De=df;function Wf(t){return Kf(t)}function Kf(t,e){const n=ic();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=Be,insertStaticContent:_}=t,y=(f,p,v,w=null,b=null,T=null,k=void 0,S=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!en(f,p)&&(w=E(f),Me(f,b,T,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:I,ref:L,shapeFlag:H}=p;switch(I){case br:C(f,p,v,w);break;case Ke:O(f,p,v,w);break;case Fr:f==null&&M(p,v,w,k);break;case _e:x(f,p,v,w,b,T,k,S,A);break;default:H&1?j(f,p,v,w,b,T,k,S,A):H&6?se(f,p,v,w,b,T,k,S,A):(H&64||H&128)&&I.process(f,p,v,w,b,T,k,S,A,U)}L!=null&&b&&li(L,f&&f.ref,T,p||f,!p)},C=(f,p,v,w)=>{if(f==null)s(p.el=a(p.children),v,w);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},O=(f,p,v,w)=>{f==null?s(p.el=c(p.children||""),v,w):p.el=f.el},M=(f,p,v,w)=>{[f.el,f.anchor]=_(f.children,p,v,w,f.el,f.anchor)},F=({el:f,anchor:p},v,w)=>{let b;for(;f&&f!==p;)b=h(f),s(f,v,w),f=b;s(p,v,w)},K=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=h(f),r(f),f=v;r(p)},j=(f,p,v,w,b,T,k,S,A)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null?$(p,v,w,b,T,k,S,A):D(f,p,b,T,k,S,A)},$=(f,p,v,w,b,T,k,S)=>{let A,I;const{props:L,shapeFlag:H,transition:V,dirs:q}=f;if(A=f.el=o(f.type,T,L&&L.is,L),H&8?u(A,f.children):H&16&&R(f.children,A,null,w,b,Ur(f,T),k,S),q&&Gt(f,null,w,"created"),J(A,f,f.scopeId,k,w),L){for(const le in L)le!=="value"&&!qn(le)&&i(A,le,null,L[le],T,f.children,w,b,Ce);"value"in L&&i(A,"value",null,L.value,T),(I=L.onVnodeBeforeMount)&&Ye(I,w,f)}q&&Gt(f,null,w,"beforeMount");const X=zf(b,V);X&&V.beforeEnter(A),s(A,p,v),((I=L&&L.onVnodeMounted)||X||q)&&De(()=>{I&&Ye(I,w,f),X&&V.enter(A),q&&Gt(f,null,w,"mounted")},b)},J=(f,p,v,w,b)=>{if(v&&g(f,v),w)for(let T=0;T<w.length;T++)g(f,w[T]);if(b){let T=b.subTree;if(p===T){const k=b.vnode;J(f,k,k.scopeId,k.slotScopeIds,b.parent)}}},R=(f,p,v,w,b,T,k,S,A=0)=>{for(let I=A;I<f.length;I++){const L=f[I]=S?At(f[I]):Xe(f[I]);y(null,L,p,v,w,b,T,k,S)}},D=(f,p,v,w,b,T,k)=>{const S=p.el=f.el;let{patchFlag:A,dynamicChildren:I,dirs:L}=p;A|=f.patchFlag&16;const H=f.props||pe,V=p.props||pe;let q;if(v&&Jt(v,!1),(q=V.onVnodeBeforeUpdate)&&Ye(q,v,p,f),L&&Gt(p,f,v,"beforeUpdate"),v&&Jt(v,!0),I?z(f.dynamicChildren,I,S,v,w,Ur(p,b),T):k||ie(f,p,S,null,v,w,Ur(p,b),T,!1),A>0){if(A&16)ne(S,p,H,V,v,w,b);else if(A&2&&H.class!==V.class&&i(S,"class",null,V.class,b),A&4&&i(S,"style",H.style,V.style,b),A&8){const X=p.dynamicProps;for(let le=0;le<X.length;le++){const me=X[le],we=H[me],je=V[me];(je!==we||me==="value")&&i(S,me,we,je,b,f.children,v,w,Ce)}}A&1&&f.children!==p.children&&u(S,p.children)}else!k&&I==null&&ne(S,p,H,V,v,w,b);((q=V.onVnodeUpdated)||L)&&De(()=>{q&&Ye(q,v,p,f),L&&Gt(p,f,v,"updated")},w)},z=(f,p,v,w,b,T,k)=>{for(let S=0;S<p.length;S++){const A=f[S],I=p[S],L=A.el&&(A.type===_e||!en(A,I)||A.shapeFlag&70)?d(A.el):v;y(A,I,L,null,w,b,T,k,!0)}},ne=(f,p,v,w,b,T,k)=>{if(v!==w){if(v!==pe)for(const S in v)!qn(S)&&!(S in w)&&i(f,S,v[S],null,k,p.children,b,T,Ce);for(const S in w){if(qn(S))continue;const A=w[S],I=v[S];A!==I&&S!=="value"&&i(f,S,I,A,k,p.children,b,T,Ce)}"value"in w&&i(f,"value",v.value,w.value,k)}},x=(f,p,v,w,b,T,k,S,A)=>{const I=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:V,slotScopeIds:q}=p;q&&(S=S?S.concat(q):q),f==null?(s(I,v,w),s(L,v,w),R(p.children||[],v,L,b,T,k,S,A)):H>0&&H&64&&V&&f.dynamicChildren?(z(f.dynamicChildren,V,v,b,T,k,S),(p.key!=null||b&&p===b.subTree)&&zi(f,p,!0)):ie(f,p,v,L,b,T,k,S,A)},se=(f,p,v,w,b,T,k,S,A)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?b.ctx.activate(p,v,w,k,A):Se(p,v,w,b,T,k,A):Ne(f,p,A)},Se=(f,p,v,w,b,T,k)=>{const S=f.component=sd(f,w,b);if(_r(f)&&(S.ctx.renderer=U),id(S),S.asyncDep){if(b&&b.registerDep(S,Q),!f.el){const A=S.subTree=de(Ke);O(null,A,p,v)}}else Q(S,f,p,v,b,T,k)},Ne=(f,p,v)=>{const w=p.component=f.component;if(af(f,p,v))if(w.asyncDep&&!w.asyncResolved){ce(w,p,v);return}else w.next=p,ef(w.update),w.effect.dirty=!0,w.update();else p.el=f.el,w.vnode=p},Q=(f,p,v,w,b,T,k)=>{const S=()=>{if(f.isMounted){let{next:L,bu:H,u:V,parent:q,vnode:X}=f;{const mn=Jc(f);if(mn){L&&(L.el=X.el,ce(f,L,k)),mn.asyncDep.then(()=>{f.isUnmounted||S()});return}}let le=L,me;Jt(f,!1),L?(L.el=X.el,ce(f,L,k)):L=X,H&&$s(H),(me=L.props&&L.props.onVnodeBeforeUpdate)&&Ye(me,q,L,X),Jt(f,!0);const we=Dr(f),je=f.subTree;f.subTree=we,y(je,we,d(je.el),E(je),f,b,T),L.el=we.el,le===null&&cf(f,we.el),V&&De(V,b),(me=L.props&&L.props.onVnodeUpdated)&&De(()=>Ye(me,q,L,X),b)}else{let L;const{el:H,props:V}=p,{bm:q,m:X,parent:le}=f,me=Fs(p);if(Jt(f,!1),q&&$s(q),!me&&(L=V&&V.onVnodeBeforeMount)&&Ye(L,le,p),Jt(f,!0),H&&ge){const we=()=>{f.subTree=Dr(f),ge(H,f.subTree,f,b,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&we()):we()}else{const we=f.subTree=Dr(f);y(null,we,v,w,f,b,T),p.el=we.el}if(X&&De(X,b),!me&&(L=V&&V.onVnodeMounted)){const we=p;De(()=>Ye(L,le,we),b)}(p.shapeFlag&256||le&&Fs(le.vnode)&&le.vnode.shapeFlag&256)&&f.a&&De(f.a,b),f.isMounted=!0,p=v=w=null}},A=f.effect=new Li(S,Be,()=>Bi(I),f.scope),I=f.update=()=>{A.dirty&&A.run()};I.id=f.uid,Jt(f,!0),I()},ce=(f,p,v)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Vf(f,p.props,w,v),jf(f,p.children,v),fn(),Ao(f),dn()},ie=(f,p,v,w,b,T,k,S,A=!1)=>{const I=f&&f.children,L=f?f.shapeFlag:0,H=p.children,{patchFlag:V,shapeFlag:q}=p;if(V>0){if(V&128){vt(I,H,v,w,b,T,k,S,A);return}else if(V&256){ot(I,H,v,w,b,T,k,S,A);return}}q&8?(L&16&&Ce(I,b,T),H!==I&&u(v,H)):L&16?q&16?vt(I,H,v,w,b,T,k,S,A):Ce(I,b,T,!0):(L&8&&u(v,""),q&16&&R(H,v,w,b,T,k,S,A))},ot=(f,p,v,w,b,T,k,S,A)=>{f=f||bn,p=p||bn;const I=f.length,L=p.length,H=Math.min(I,L);let V;for(V=0;V<H;V++){const q=p[V]=A?At(p[V]):Xe(p[V]);y(f[V],q,v,null,b,T,k,S,A)}I>L?Ce(f,b,T,!0,!1,H):R(p,v,w,b,T,k,S,A,H)},vt=(f,p,v,w,b,T,k,S,A)=>{let I=0;const L=p.length;let H=f.length-1,V=L-1;for(;I<=H&&I<=V;){const q=f[I],X=p[I]=A?At(p[I]):Xe(p[I]);if(en(q,X))y(q,X,v,null,b,T,k,S,A);else break;I++}for(;I<=H&&I<=V;){const q=f[H],X=p[V]=A?At(p[V]):Xe(p[V]);if(en(q,X))y(q,X,v,null,b,T,k,S,A);else break;H--,V--}if(I>H){if(I<=V){const q=V+1,X=q<L?p[q].el:w;for(;I<=V;)y(null,p[I]=A?At(p[I]):Xe(p[I]),v,X,b,T,k,S,A),I++}}else if(I>V)for(;I<=H;)Me(f[I],b,T,!0),I++;else{const q=I,X=I,le=new Map;for(I=X;I<=V;I++){const Ue=p[I]=A?At(p[I]):Xe(p[I]);Ue.key!=null&&le.set(Ue.key,I)}let me,we=0;const je=V-X+1;let mn=!1,go=0;const Fn=new Array(je);for(I=0;I<je;I++)Fn[I]=0;for(I=q;I<=H;I++){const Ue=f[I];if(we>=je){Me(Ue,b,T,!0);continue}let Je;if(Ue.key!=null)Je=le.get(Ue.key);else for(me=X;me<=V;me++)if(Fn[me-X]===0&&en(Ue,p[me])){Je=me;break}Je===void 0?Me(Ue,b,T,!0):(Fn[Je-X]=I+1,Je>=go?go=Je:mn=!0,y(Ue,p[Je],v,null,b,T,k,S,A),we++)}const mo=mn?qf(Fn):bn;for(me=mo.length-1,I=je-1;I>=0;I--){const Ue=X+I,Je=p[Ue],_o=Ue+1<L?p[Ue+1].el:w;Fn[I]===0?y(null,Je,v,_o,b,T,k,S,A):mn&&(me<0||I!==mo[me]?Ge(Je,v,_o,2):me--)}}},Ge=(f,p,v,w,b=null)=>{const{el:T,type:k,transition:S,children:A,shapeFlag:I}=f;if(I&6){Ge(f.component.subTree,p,v,w);return}if(I&128){f.suspense.move(p,v,w);return}if(I&64){k.move(f,p,v,U);return}if(k===_e){s(T,p,v);for(let H=0;H<A.length;H++)Ge(A[H],p,v,w);s(f.anchor,p,v);return}if(k===Fr){F(f,p,v);return}if(w!==2&&I&1&&S)if(w===0)S.beforeEnter(T),s(T,p,v),De(()=>S.enter(T),b);else{const{leave:H,delayLeave:V,afterLeave:q}=S,X=()=>s(T,p,v),le=()=>{H(T,()=>{X(),q&&q()})};V?V(T,X,le):le()}else s(T,p,v)},Me=(f,p,v,w=!1,b=!1)=>{const{type:T,props:k,ref:S,children:A,dynamicChildren:I,shapeFlag:L,patchFlag:H,dirs:V}=f;if(S!=null&&li(S,null,v,f,!0),L&256){p.ctx.deactivate(f);return}const q=L&1&&V,X=!Fs(f);let le;if(X&&(le=k&&k.onVnodeBeforeUnmount)&&Ye(le,p,f),L&6)As(f.component,v,w);else{if(L&128){f.suspense.unmount(v,w);return}q&&Gt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,v,b,U,w):I&&(T!==_e||H>0&&H&64)?Ce(I,p,v,!1,!0):(T===_e&&H&384||!b&&L&16)&&Ce(A,p,v),w&&pn(f)}(X&&(le=k&&k.onVnodeUnmounted)||q)&&De(()=>{le&&Ye(le,p,f),q&&Gt(f,null,p,"unmounted")},v)},pn=f=>{const{type:p,el:v,anchor:w,transition:b}=f;if(p===_e){gn(v,w);return}if(p===Fr){K(f);return}const T=()=>{r(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:k,delayLeave:S}=b,A=()=>k(v,T);S?S(f.el,T,A):A()}else T()},gn=(f,p)=>{let v;for(;f!==p;)v=h(f),r(f),f=v;r(p)},As=(f,p,v)=>{const{bum:w,scope:b,update:T,subTree:k,um:S}=f;w&&$s(w),b.stop(),T&&(T.active=!1,Me(k,f,p,v)),S&&De(S,p),De(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ce=(f,p,v,w=!1,b=!1,T=0)=>{for(let k=T;k<f.length;k++)Me(f[k],p,v,w,b)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el);let N=!1;const P=(f,p,v)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,v),N||(N=!0,Ao(),Oc(),N=!1),p._vnode=f},U={p:y,um:Me,m:Ge,r:pn,mt:Se,mc:R,pc:ie,pbc:z,n:E,o:t};let oe,ge;return e&&([oe,ge]=e(U)),{render:P,hydrate:oe,createApp:$f(P,oe)}}function Ur({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zi(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=At(r[i]),a.el=o.el),n||zi(o,a)),a.type===br&&(a.el=o.el)}}function qf(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jc(e)}const Gf=t=>t.__isTeleport,Yn=t=>t&&(t.disabled||t.disabled===""),Fo=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Vo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ui=(t,e)=>{const n=t&&t.to;return ye(n)?e?e(n):null:n},Jf={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:g,querySelector:_,createText:y,createComment:C}}=l,O=Yn(e.props);let{shapeFlag:M,children:F,dynamicChildren:K}=e;if(t==null){const j=e.el=y(""),$=e.anchor=y("");g(j,n,s),g($,n,s);const J=e.target=ui(e.props,_),R=e.targetAnchor=y("");J&&(g(R,J),o==="svg"||Fo(J)?o="svg":(o==="mathml"||Vo(J))&&(o="mathml"));const D=(z,ne)=>{M&16&&u(F,z,ne,r,i,o,a,c)};O?D(n,$):J&&D(J,R)}else{e.el=t.el;const j=e.anchor=t.anchor,$=e.target=t.target,J=e.targetAnchor=t.targetAnchor,R=Yn(t.props),D=R?n:$,z=R?j:J;if(o==="svg"||Fo($)?o="svg":(o==="mathml"||Vo($))&&(o="mathml"),K?(h(t.dynamicChildren,K,D,r,i,o,a),zi(t,e,!0)):c||d(t,e,D,z,r,i,o,a,!1),O)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ds(e,n,j,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ne=e.target=ui(e.props,_);ne&&Ds(e,ne,null,l,0)}else R&&Ds(e,$,J,l,1)}Yc(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=t;if(d&&i(u),o&&i(l),a&16){const g=o||!Yn(h);for(let _=0;_<c.length;_++){const y=c[_];r(y,e,n,g,!!y.dynamicChildren)}}},move:Ds,hydrate:Yf};function Ds(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&s(o,e,n),(!d||Yn(u))&&c&16)for(let h=0;h<l.length;h++)r(l[h],e,n,2);d&&s(a,e,n)}function Yf(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=ui(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Yn(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,n,s,r,i)}Yc(e)}return e.anchor&&o(e.anchor)}const yr=Jf;function Yc(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const _e=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),Xn=[];let We=null;function Z(t=!1){Xn.push(We=t?null:[])}function Xf(){Xn.pop(),We=Xn[Xn.length-1]||null}let os=1;function Bo(t){os+=t}function Xc(t){return t.dynamicChildren=os>0?We||bn:null,Xf(),os>0&&We&&We.push(t),t}function fe(t,e,n,s,r,i){return Xc(m(t,e,n,s,r,i,!0))}function on(t,e,n,s,r){return Xc(de(t,e,n,s,r,!0))}function fi(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}const Er="__vInternal",Qc=({key:t})=>t??null,Vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ee(t)||G(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,r=null,i=t===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&Vs(e),scopeId:gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?(qi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),os>0&&!o&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const de=Qf;function Qf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===lf)&&(t=Ke),fi(t)){const a=jt(t,e,!0);return n&&qi(a,n),os>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(t)]=a:We.push(a)),a.patchFlag|=-2,a}if(ud(t)&&(t=t.__vccOpts),e){e=Zf(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=lr(a)),he(c)&&(Sc(c)&&!B(c)&&(c=be({},c)),e.style=Oi(c))}const o=ye(t)?1:ff(t)?128:Gf(t)?64:he(t)?4:G(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function Zf(t){return t?Sc(t)||Er in t?be({},t):t:null}function jt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ed(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qc(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Vs(e)):[r,Vs(e)]:Vs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jt(t.ssContent),ssFallback:t.ssFallback&&jt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xe(t=" ",e=0){return de(br,null,t,e)}function wr(t="",e=!1){return e?(Z(),on(Ke,null,t)):de(Ke,null,t)}function Xe(t){return t==null||typeof t=="boolean"?de(Ke):B(t)?de(_e,null,t.slice()):typeof t=="object"?At(t):de(br,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jt(t)}function qi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Er in e)?e._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function ed(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=lr([e.class,s.class]));else if(r==="style")e.style=Oi([e.style,s.style]);else if(or(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ye(t,e,n,s=null){He(t,e,7,[n,s])}const td=jc();let nd=0;function sd(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||td,i={uid:nd++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new cc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kc(s,r),emitsOptions:Lc(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sf.bind(null,i),t.ce&&t.ce(i),i}let Ie=null;const rd=()=>Ie||Pe;let Xs,di;{const t=ic(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Xs=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),di=e("__VUE_SSR_SETTERS__",n=>Ir=n)}const _s=t=>{const e=Ie;return Xs(t),t.scope.on(),()=>{t.scope.off(),Xs(e)}},Ho=()=>{Ie&&Ie.scope.off(),Xs(null)};function Zc(t){return t.vnode.shapeFlag&4}let Ir=!1;function id(t,e=!1){e&&di(e);const{props:n,children:s}=t.vnode,r=Zc(t);Ff(t,n,r,e),Hf(t,s);const i=r?od(t,e):void 0;return e&&di(!1),i}function od(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fr(new Proxy(t.ctx,kf));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?cd(t):null,i=_s(t);fn();const o=Ut(s,t,0,[t.props,r]);if(dn(),i(),nc(o)){if(o.then(Ho,Ho),e)return o.then(a=>{jo(t,a,e)}).catch(a=>{dr(a,t,0)});t.asyncDep=o}else jo(t,o,e)}else el(t,e)}function jo(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Rc(e)),el(t,n)}let Wo;function el(t,e,n){const s=t.type;if(!t.render){if(!e&&Wo&&!s.render){const r=s.template||Wi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=be(be({isCustomElement:i,delimiters:a},o),c);s.render=Wo(r,l)}}t.render=s.render||Be}{const r=_s(t);fn();try{Of(t)}finally{dn(),r()}}}function ad(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}}))}function cd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ad(t)},slots:t.slots,emit:t.emit,expose:e}}function Sr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rc(fr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}}))}function ld(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function ud(t){return G(t)&&"__vccOpts"in t}const ve=(t,e)=>Ku(t,e,Ir);function Gi(t,e,n){const s=arguments.length;return s===2?he(e)&&!B(e)?fi(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fi(n)&&(n=[n]),de(t,e,n))}const fd="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const dd="http://www.w3.org/2000/svg",hd="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Ko=Rt&&Rt.createElement("template"),pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Rt.createElementNS(dd,t):e==="mathml"?Rt.createElementNS(hd,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ko.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Ko.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bt="transition",Vn="animation",as=Symbol("_vtc"),Ji=(t,{slots:e})=>Gi(yf,gd(t),e);Ji.displayName="Transition";const tl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ji.props=be({},xc,tl);const Yt=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},zo=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function gd(t){const e={};for(const x in t)x in tl||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=md(r),y=_&&_[0],C=_&&_[1],{onBeforeEnter:O,onEnter:M,onEnterCancelled:F,onLeave:K,onLeaveCancelled:j,onBeforeAppear:$=O,onAppear:J=M,onAppearCancelled:R=F}=e,D=(x,se,Se)=>{Xt(x,se?u:a),Xt(x,se?l:o),Se&&Se()},z=(x,se)=>{x._isLeaving=!1,Xt(x,d),Xt(x,g),Xt(x,h),se&&se()},ne=x=>(se,Se)=>{const Ne=x?J:M,Q=()=>D(se,x,Se);Yt(Ne,[se,Q]),qo(()=>{Xt(se,x?c:i),Et(se,x?u:a),zo(Ne)||Go(se,s,y,Q)})};return be(e,{onBeforeEnter(x){Yt(O,[x]),Et(x,i),Et(x,o)},onBeforeAppear(x){Yt($,[x]),Et(x,c),Et(x,l)},onEnter:ne(!1),onAppear:ne(!0),onLeave(x,se){x._isLeaving=!0;const Se=()=>z(x,se);Et(x,d),yd(),Et(x,h),qo(()=>{x._isLeaving&&(Xt(x,d),Et(x,g),zo(K)||Go(x,s,C,Se))}),Yt(K,[x,Se])},onEnterCancelled(x){D(x,!1),Yt(F,[x])},onAppearCancelled(x){D(x,!0),Yt(R,[x])},onLeaveCancelled(x){z(x),Yt(j,[x])}})}function md(t){if(t==null)return null;if(he(t))return[Vr(t.enter),Vr(t.leave)];{const e=Vr(t);return[e,e]}}function Vr(t){return gu(t)}function Et(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[as]||(t[as]=new Set)).add(e)}function Xt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[as];n&&(n.delete(e),n.size||(t[as]=void 0))}function qo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _d=0;function Go(t,e,n,s){const r=t._endId=++_d,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=vd(t,e);if(!o)return s();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,h),i()},h=g=>{g.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,h)}function vd(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),r=s(`${bt}Delay`),i=s(`${bt}Duration`),o=Jo(r,i),a=s(`${Vn}Delay`),c=s(`${Vn}Duration`),l=Jo(a,c);let u=null,d=0,h=0;e===bt?o>0&&(u=bt,d=o,h=i.length):e===Vn?l>0&&(u=Vn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?bt:Vn:null,h=u?u===bt?i.length:c.length:0);const g=u===bt&&/\b(transform|all)(,|$)/.test(s(`${bt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:g}}function Jo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Yo(n)+Yo(t[s])))}function Yo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yd(){return document.body.offsetHeight}function bd(t,e,n){const s=t[as];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qs=Symbol("_vod"),nl=Symbol("_vsh"),Te={beforeMount(t,{value:e},{transition:n}){t[Qs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Bn(t,!0),s.enter(t)):s.leave(t,()=>{Bn(t,!1)}):Bn(t,e))},beforeUnmount(t,{value:e}){Bn(t,e)}};function Bn(t,e){t.style.display=e?t[Qs]:"none",t[nl]=!e}const Ed=Symbol(""),wd=/(^|;)\s*display\s*:/;function Id(t,e,n){const s=t.style,r=ye(n);let i=!1;if(n&&!r){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bs(s,a,"")}else for(const o in e)n[o]==null&&Bs(s,o,"");for(const o in n)o==="display"&&(i=!0),Bs(s,o,n[o])}else if(r){if(e!==n){const o=s[Ed];o&&(n+=";"+o),s.cssText=n,i=wd.test(n)}}else e&&t.removeAttribute("style");Qs in t&&(t[Qs]=i?s.display:"",t[nl]&&(s.display="none"))}const Xo=/\s*!important$/;function Bs(t,e,n){if(B(n))n.forEach(s=>Bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Sd(t,e);Xo.test(n)?t.setProperty(un(s),n.replace(Xo,""),"important"):t[s]=n}}const Qo=["Webkit","Moz","ms"],Br={};function Sd(t,e){const n=Br[e];if(n)return n;let s=st(e);if(s!=="filter"&&s in t)return Br[e]=s;s=cr(s);for(let r=0;r<Qo.length;r++){const i=Qo[r]+s;if(i in t)return Br[e]=i}return e}const Zo="http://www.w3.org/1999/xlink";function Td(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zo,e.slice(6,e.length)):t.setAttributeNS(Zo,e,n);else{const i=Eu(e);n==null||i&&!oc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=oc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function kt(t,e,n,s){t.addEventListener(e,n,s)}function Ad(t,e,n,s){t.removeEventListener(e,n,s)}const ea=Symbol("_vei");function Rd(t,e,n,s,r=null){const i=t[ea]||(t[ea]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pd(e);if(s){const l=i[e]=Nd(s,r);kt(t,a,l,c)}else o&&(Ad(t,a,o,c),i[e]=void 0)}}const ta=/(?:Once|Passive|Capture)$/;function Pd(t){let e;if(ta.test(t)){e={};let s;for(;s=t.match(ta);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):un(t.slice(2)),e]}let Hr=0;const kd=Promise.resolve(),Od=()=>Hr||(kd.then(()=>Hr=0),Hr=Date.now());function Nd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;He(Ld(s,n.value),e,5,[s])};return n.value=t,n.attached=Od(),n}function Ld(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Md=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?bd(t,s,l):e==="style"?Id(t,n,s):or(e)?Ri(e)||Rd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dd(t,e,s,l))?Cd(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Td(t,e,s,l))};function Dd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&na(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return na(e)&&ye(n)?!1:e in t}const On=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>$s(e,n):e};function xd(t){t.target.composing=!0}function sa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dt=Symbol("_assign"),et={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[dt]=On(r);const i=s||r.props&&r.props.type==="number";kt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ns(a)),t[dt](a)}),n&&kt(t,"change",()=>{t.value=t.value.trim()}),e||(kt(t,"compositionstart",xd),kt(t,"compositionend",sa),kt(t,"change",sa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[dt]=On(i),t.composing)return;const o=r||t.type==="number"?ns(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},ra={deep:!0,created(t,e,n){t[dt]=On(n),kt(t,"change",()=>{const s=t._modelValue,r=cs(t),i=t.checked,o=t[dt];if(B(s)){const a=Ni(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(xn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(sl(t,i))})},mounted:ia,beforeUpdate(t,e,n){t[dt]=On(n),ia(t,e,n)}};function ia(t,{value:e,oldValue:n},s){t._modelValue=e,B(e)?t.checked=Ni(e,s.props.value)>-1:xn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=gs(e,sl(t,!0)))}const oa={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=xn(e);kt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ns(cs(o)):cs(o));t[dt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,hr(()=>{t._assigning=!1})}),t[dt]=On(s)},mounted(t,{value:e,modifiers:{number:n}}){aa(t,e,n)},beforeUpdate(t,e,n){t[dt]=On(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||aa(t,e,n)}};function aa(t,e,n){const s=t.multiple,r=B(e);if(!(s&&!r&&!xn(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],c=cs(a);if(s)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.includes(n?ns(c):c):a.selected=Ni(e,c)>-1}else a.selected=e.has(c);else if(gs(cs(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function cs(t){return"_value"in t?t._value:t.value}function sl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $d=["ctrl","shift","alt","meta"],Ud={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$d.some(n=>t[`${n}Key`]&&!e.includes(n))},Yi=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Ud[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Fd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vd=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=un(r.key);if(e.some(o=>o===i||Fd[o]===i))return t(r)})},Bd=be({patchProp:Md},pd);let ca;function Hd(){return ca||(ca=Wf(Bd))}const jd=(...t)=>{const e=Hd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Kd(s);if(!r)return;const i=e._component;!G(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Wd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Wd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Kd(t){return ye(t)?document.querySelector(t):t}var zd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let rl;const Tr=t=>rl=t,il=Symbol();function hi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qn||(Qn={}));function qd(){const t=lc(!0),e=t.run(()=>Y({}));let n=[],s=[];const r=fr({install(i){Tr(r),r._a=i,i.provide(il,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!zd?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ol=()=>{};function la(t,e,n,s=ol){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&uc()&&Su(r),r}function _n(t,...e){t.slice().forEach(n=>{n(...e)})}const Gd=t=>t();function pi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];hi(r)&&hi(s)&&t.hasOwnProperty(n)&&!Ee(s)&&!xt(s)?t[n]=pi(r,s):t[n]=s}return t}const Jd=Symbol();function Yd(t){return!hi(t)||!t.hasOwnProperty(Jd)}const{assign:St}=Object;function Xd(t){return!!(Ee(t)&&t.effect)}function Qd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Ju(n.state.value[t]);return St(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=fr(ve(()=>{Tr(n);const g=n._s.get(t);return o[h].call(g,g)})),d),{}))}return c=al(t,l,e,n,s,!0),c}function al(t,e,n={},s,r,i){let o;const a=St({actions:{}},n),c={deep:!0};let l,u,d=[],h=[],g;const _=s.state.value[t];!i&&!_&&(s.state.value[t]={}),Y({});let y;function C(R){let D;l=u=!1,typeof R=="function"?(R(s.state.value[t]),D={type:Qn.patchFunction,storeId:t,events:g}):(pi(s.state.value[t],R),D={type:Qn.patchObject,payload:R,storeId:t,events:g});const z=y=Symbol();hr().then(()=>{y===z&&(l=!0)}),u=!0,_n(d,D,s.state.value[t])}const O=i?function(){const{state:D}=n,z=D?D():{};this.$patch(ne=>{St(ne,z)})}:ol;function M(){o.stop(),d=[],h=[],s._s.delete(t)}function F(R,D){return function(){Tr(s);const z=Array.from(arguments),ne=[],x=[];function se(Q){ne.push(Q)}function Se(Q){x.push(Q)}_n(h,{args:z,name:R,store:j,after:se,onError:Se});let Ne;try{Ne=D.apply(this&&this.$id===t?this:j,z)}catch(Q){throw _n(x,Q),Q}return Ne instanceof Promise?Ne.then(Q=>(_n(ne,Q),Q)).catch(Q=>(_n(x,Q),Promise.reject(Q))):(_n(ne,Ne),Ne)}}const K={_p:s,$id:t,$onAction:la.bind(null,h),$patch:C,$reset:O,$subscribe(R,D={}){const z=la(d,R,D.detached,()=>ne()),ne=o.run(()=>In(()=>s.state.value[t],x=>{(D.flush==="sync"?u:l)&&R({storeId:t,type:Qn.direct,events:g},x)},St({},c,D)));return z},$dispose:M},j=ms(K);s._s.set(t,j);const J=(s._a&&s._a.runWithContext||Gd)(()=>s._e.run(()=>(o=lc()).run(e)));for(const R in J){const D=J[R];if(Ee(D)&&!Xd(D)||xt(D))i||(_&&Yd(D)&&(Ee(D)?D.value=_[R]:pi(D,_[R])),s.state.value[t][R]=D);else if(typeof D=="function"){const z=F(R,D);J[R]=z,a.actions[R]=D}}return St(j,J),St(ee(j),J),Object.defineProperty(j,"$state",{get:()=>s.state.value[t],set:R=>{C(D=>{St(D,R)})}}),s._p.forEach(R=>{St(j,o.run(()=>R({store:j,app:s._a,pinia:s,options:a})))}),_&&i&&n.hydrate&&n.hydrate(j.$state,_),l=!0,u=!0,j}function Zd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Uf();return a=a||(l?ke(il,null):null),a&&Tr(a),a=rl,a._s.has(s)||(i?al(s,e,r,a):Qd(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function eh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function jr(t,e){const n={};for(const s in e){const r=e[s];n[s]=ze(r)?r.map(t):t(r)}return n}const Zn=()=>{},ze=Array.isArray,cl=/#/g,th=/&/g,nh=/\//g,sh=/=/g,rh=/\?/g,ll=/\+/g,ih=/%5B/g,oh=/%5D/g,ul=/%5E/g,ah=/%60/g,fl=/%7B/g,ch=/%7C/g,dl=/%7D/g,lh=/%20/g;function Xi(t){return encodeURI(""+t).replace(ch,"|").replace(ih,"[").replace(oh,"]")}function uh(t){return Xi(t).replace(fl,"{").replace(dl,"}").replace(ul,"^")}function gi(t){return Xi(t).replace(ll,"%2B").replace(lh,"+").replace(cl,"%23").replace(th,"%26").replace(ah,"`").replace(fl,"{").replace(dl,"}").replace(ul,"^")}function fh(t){return gi(t).replace(sh,"%3D")}function dh(t){return Xi(t).replace(cl,"%23").replace(rh,"%3F")}function hh(t){return t==null?"":dh(t).replace(nh,"%2F")}function ls(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ph=/\/$/,gh=t=>t.replace(ph,"");function Wr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=yh(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ls(o)}}function mh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ua(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _h(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Nn(e.matched[s],n.matched[r])&&hl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vh(t[n],e[n]))return!1;return!0}function vh(t,e){return ze(t)?fa(t,e):ze(e)?fa(e,t):t===e}function fa(t,e){return ze(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function yh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}var us;(function(t){t.pop="pop",t.push="push"})(us||(us={}));var es;(function(t){t.back="back",t.forward="forward",t.unknown=""})(es||(es={}));function bh(t){if(!t)if(vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gh(t)}const Eh=/^[^#]+#/;function wh(t,e){return t.replace(Eh,"#")+e}function Ih(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Cr=()=>({left:window.scrollX,top:window.scrollY});function Sh(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ih(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function da(t,e){return(history.state?history.state.position-e:-1)+t}const mi=new Map;function Th(t,e){mi.set(t,e)}function Ch(t){const e=mi.get(t);return mi.delete(t),e}let Ah=()=>location.protocol+"//"+location.host;function pl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ua(c,"")}return ua(n,t)+s+r}function Rh(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=pl(t,location),_=n.value,y=e.value;let C=0;if(h){if(n.value=g,e.value=h,o&&o===_){o=null;return}C=y?h.position-y.position:0}else s(g);r.forEach(O=>{O(n.value,_,{delta:C,type:us.pop,direction:C?C>0?es.forward:es.back:es.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:Cr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function ha(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Cr():null}}function Ph(t){const{history:e,location:n}=window,s={value:pl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Ah()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ae({},e.state,ha(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ae({},r.value,e.state,{forward:c,scroll:Cr()});i(u.current,u,!0);const d=ae({},ha(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function kh(t){t=bh(t);const e=Ph(t),n=Rh(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:wh.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Oh(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),kh(t)}function Nh(t){return typeof t=="string"||t&&typeof t=="object"}function gl(t){return typeof t=="string"||typeof t=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ml=Symbol("");var pa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pa||(pa={}));function Ln(t,e){return ae(new Error,{type:t,[ml]:!0},e)}function at(t,e){return t instanceof Error&&ml in t&&(e==null||!!(t.type&e))}const ga="[^/]+?",Lh={sensitive:!1,strict:!1,start:!0,end:!0},Mh=/[.+*?^${}()[\]/\\]/g;function Dh(t,e){const n=ae({},Lh,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Mh,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:y,optional:C,regexp:O}=h;i.push({name:_,repeatable:y,optional:C});const M=O||ga;if(M!==ga){g+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+K.message)}}let F=y?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(F=C&&l.length<2?`(?:/${F})`:"/"+F),C&&(F+="?"),r+=F,g+=20,C&&(g+=-8),y&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];d[_.name]=g&&_.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:y,optional:C}=g,O=_ in l?l[_]:"";if(ze(O)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=ze(O)?O.join("/"):O;if(!M)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function xh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $h(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=xh(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ma(s))return 1;if(ma(r))return-1}return r.length-s.length}function ma(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Uh={type:0,value:""},Fh=/[a-zA-Z0-9_]/;function Vh(t){if(!t)return[[]];if(t==="/")return[[Uh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Fh.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function Bh(t,e,n){const s=Dh(Vh(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Hh(t,e){const n=[],s=new Map;e=ya({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,h){const g=!h,_=jh(u);_.aliasOf=h&&h.record;const y=ya(e,u),C=[_];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of F)C.push(ae({},_,{components:h?h.record.components:_.components,path:K,aliasOf:h?h.record:_}))}let O,M;for(const F of C){const{path:K}=F;if(d&&K[0]!=="/"){const j=d.record.path,$=j[j.length-1]==="/"?"":"/";F.path=d.record.path+(K&&$+K)}if(O=Bh(F,d,y),h?h.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),g&&u.name&&!va(O)&&o(u.name)),_.children){const j=_.children;for(let $=0;$<j.length;$++)i(j[$],O,h&&h.children[$])}h=h||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:Zn}function o(u){if(gl(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&$h(u,n[d])>=0&&(u.record.path!==n[d].record.path||!_l(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!va(u)&&s.set(u.record.name,u)}function l(u,d){let h,g={},_,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Ln(1,{location:u});y=h.record.name,g=ae(_a(d.params,h.keys.filter(M=>!M.optional).concat(h.parent?h.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&_a(u.params,h.keys.map(M=>M.name))),_=h.stringify(g)}else if(u.path!=null)_=u.path,h=n.find(M=>M.re.test(_)),h&&(g=h.parse(_),y=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw Ln(1,{location:u,currentLocation:d});y=h.record.name,g=ae({},d.params,u.params),_=h.stringify(g)}const C=[];let O=h;for(;O;)C.unshift(O.record),O=O.parent;return{name:y,path:_,params:g,matched:C,meta:Kh(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function _a(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function jh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Wh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function va(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kh(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function ya(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _l(t,e){return e.children.some(n=>n===t||_l(t,n))}function zh(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ll," "),o=i.indexOf("="),a=ls(o<0?i:i.slice(0,o)),c=o<0?null:ls(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ba(t){let e="";for(let n in t){const s=t[n];if(n=fh(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(s)?s.map(i=>i&&gi(i)):[s&&gi(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qh(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ze(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Gh=Symbol(""),Ea=Symbol(""),Ar=Symbol(""),Qi=Symbol(""),_i=Symbol("");function Hn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Ln(4,{from:n,to:e})):h instanceof Error?c(h):Nh(h)?c(Ln(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(h=>c(h))})}function Kr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Jh(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Pt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=eh(u)?u.default:u;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Pt(g,n,s,o,a,r)()}))}}return i}function Jh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wa(t){const e=ke(Ar),n=ke(Qi),s=ve(()=>e.resolve($t(t.to))),r=ve(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Nn.bind(null,u));if(h>-1)return h;const g=Ia(c[l-2]);return l>1&&Ia(u)===g&&d[d.length-1].path!==g?d.findIndex(Nn.bind(null,c[l-2])):h}),i=ve(()=>r.value>-1&&Zh(n.params,s.value.params)),o=ve(()=>r.value>-1&&r.value===n.matched.length-1&&hl(n.params,s.value.params));function a(c={}){return Qh(c)?e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(Zn):Promise.resolve()}return{route:s,href:ve(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Yh=Fc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wa,setup(t,{slots:e}){const n=ms(wa(t)),{options:s}=ke(Ar),r=ve(()=>({[Sa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Xh=Yh;function Qh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zh(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ze(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ia(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sa=(t,e,n)=>t??e??n,ep=Fc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ke(_i),r=ve(()=>t.route||s.value),i=ke(Ea,0),o=ve(()=>{let l=$t(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=ve(()=>r.value.matched[o.value]);Jn(Ea,ve(()=>o.value+1)),Jn(Gh,a),Jn(_i,r);const c=Y();return In(()=>[c.value,a.value,t.name],([l,u,d],[h,g,_])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Nn(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Ta(n.default,{Component:h,route:l});const g=d.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=Gi(h,ae({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ta(n.default,{Component:C,route:l})||C}}});function Ta(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tp=ep;function np(t){const e=Hh(t.routes,t),n=t.parseQuery||zh,s=t.stringifyQuery||ba,r=t.history,i=Hn(),o=Hn(),a=Hn(),c=zu(wt);let l=wt;vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jr.bind(null,E=>""+E),d=jr.bind(null,hh),h=jr.bind(null,ls);function g(E,N){let P,U;return gl(E)?(P=e.getRecordMatcher(E),U=N):U=E,e.addRoute(U,P)}function _(E){const N=e.getRecordMatcher(E);N&&e.removeRoute(N)}function y(){return e.getRoutes().map(E=>E.record)}function C(E){return!!e.getRecordMatcher(E)}function O(E,N){if(N=ae({},N||c.value),typeof E=="string"){const p=Wr(n,E,N.path),v=e.resolve({path:p.path},N),w=r.createHref(p.fullPath);return ae(p,v,{params:h(v.params),hash:ls(p.hash),redirectedFrom:void 0,href:w})}let P;if(E.path!=null)P=ae({},E,{path:Wr(n,E.path,N.path).path});else{const p=ae({},E.params);for(const v in p)p[v]==null&&delete p[v];P=ae({},E,{params:d(p)}),N.params=d(N.params)}const U=e.resolve(P,N),oe=E.hash||"";U.params=u(h(U.params));const ge=mh(s,ae({},E,{hash:uh(oe),path:U.path})),f=r.createHref(ge);return ae({fullPath:ge,hash:oe,query:s===ba?qh(E.query):E.query||{}},U,{redirectedFrom:void 0,href:f})}function M(E){return typeof E=="string"?Wr(n,E,c.value.path):ae({},E)}function F(E,N){if(l!==E)return Ln(8,{from:N,to:E})}function K(E){return J(E)}function j(E){return K(ae(M(E),{replace:!0}))}function $(E){const N=E.matched[E.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let U=typeof P=="function"?P(E):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),ae({query:E.query,hash:E.hash,params:U.path!=null?{}:E.params},U)}}function J(E,N){const P=l=O(E),U=c.value,oe=E.state,ge=E.force,f=E.replace===!0,p=$(P);if(p)return J(ae(M(p),{state:typeof p=="object"?ae({},oe,p.state):oe,force:ge,replace:f}),N||P);const v=P;v.redirectedFrom=N;let w;return!ge&&_h(s,U,P)&&(w=Ln(16,{to:v,from:U}),Ge(U,U,!0,!1)),(w?Promise.resolve(w):z(v,U)).catch(b=>at(b)?at(b,2)?b:vt(b):ie(b,v,U)).then(b=>{if(b){if(at(b,2))return J(ae({replace:f},M(b.to),{state:typeof b.to=="object"?ae({},oe,b.to.state):oe,force:ge}),N||v)}else b=x(v,U,!0,f,oe);return ne(v,U,b),b})}function R(E,N){const P=F(E,N);return P?Promise.reject(P):Promise.resolve()}function D(E){const N=gn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(E):E()}function z(E,N){let P;const[U,oe,ge]=sp(E,N);P=Kr(U.reverse(),"beforeRouteLeave",E,N);for(const p of U)p.leaveGuards.forEach(v=>{P.push(Pt(v,E,N))});const f=R.bind(null,E,N);return P.push(f),Ce(P).then(()=>{P=[];for(const p of i.list())P.push(Pt(p,E,N));return P.push(f),Ce(P)}).then(()=>{P=Kr(oe,"beforeRouteUpdate",E,N);for(const p of oe)p.updateGuards.forEach(v=>{P.push(Pt(v,E,N))});return P.push(f),Ce(P)}).then(()=>{P=[];for(const p of ge)if(p.beforeEnter)if(ze(p.beforeEnter))for(const v of p.beforeEnter)P.push(Pt(v,E,N));else P.push(Pt(p.beforeEnter,E,N));return P.push(f),Ce(P)}).then(()=>(E.matched.forEach(p=>p.enterCallbacks={}),P=Kr(ge,"beforeRouteEnter",E,N,D),P.push(f),Ce(P))).then(()=>{P=[];for(const p of o.list())P.push(Pt(p,E,N));return P.push(f),Ce(P)}).catch(p=>at(p,8)?p:Promise.reject(p))}function ne(E,N,P){a.list().forEach(U=>D(()=>U(E,N,P)))}function x(E,N,P,U,oe){const ge=F(E,N);if(ge)return ge;const f=N===wt,p=vn?history.state:{};P&&(U||f?r.replace(E.fullPath,ae({scroll:f&&p&&p.scroll},oe)):r.push(E.fullPath,oe)),c.value=E,Ge(E,N,P,f),vt()}let se;function Se(){se||(se=r.listen((E,N,P)=>{if(!As.listening)return;const U=O(E),oe=$(U);if(oe){J(ae(oe,{replace:!0}),U).catch(Zn);return}l=U;const ge=c.value;vn&&Th(da(ge.fullPath,P.delta),Cr()),z(U,ge).catch(f=>at(f,12)?f:at(f,2)?(J(f.to,U).then(p=>{at(p,20)&&!P.delta&&P.type===us.pop&&r.go(-1,!1)}).catch(Zn),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ie(f,U,ge))).then(f=>{f=f||x(U,ge,!1),f&&(P.delta&&!at(f,8)?r.go(-P.delta,!1):P.type===us.pop&&at(f,20)&&r.go(-1,!1)),ne(U,ge,f)}).catch(Zn)}))}let Ne=Hn(),Q=Hn(),ce;function ie(E,N,P){vt(E);const U=Q.list();return U.length?U.forEach(oe=>oe(E,N,P)):console.error(E),Promise.reject(E)}function ot(){return ce&&c.value!==wt?Promise.resolve():new Promise((E,N)=>{Ne.add([E,N])})}function vt(E){return ce||(ce=!E,Se(),Ne.list().forEach(([N,P])=>E?P(E):N()),Ne.reset()),E}function Ge(E,N,P,U){const{scrollBehavior:oe}=t;if(!vn||!oe)return Promise.resolve();const ge=!P&&Ch(da(E.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return hr().then(()=>oe(E,N,ge)).then(f=>f&&Sh(f)).catch(f=>ie(f,E,N))}const Me=E=>r.go(E);let pn;const gn=new Set,As={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:C,getRoutes:y,resolve:O,options:t,push:K,replace:j,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:ot,install(E){const N=this;E.component("RouterLink",Xh),E.component("RouterView",tp),E.config.globalProperties.$router=N,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(c)}),vn&&!pn&&c.value===wt&&(pn=!0,K(r.location).catch(oe=>{}));const P={};for(const oe in wt)Object.defineProperty(P,oe,{get:()=>c.value[oe],enumerable:!0});E.provide(Ar,N),E.provide(Qi,wc(P)),E.provide(_i,c);const U=E.unmount;gn.add(E),E.unmount=function(){gn.delete(E),gn.size<1&&(l=wt,se&&se(),se=null,c.value=wt,pn=!1,ce=!1),U()}}};function Ce(E){return E.reduce((N,P)=>N.then(()=>D(P)),Promise.resolve())}return As}function sp(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Nn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Nn(l,c))||r.push(c))}return[n,s,r]}function Zi(){return ke(Ar)}function rp(){return ke(Qi)}var Ca={};/**
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
 */const vl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ip=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ip(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new op;const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const _=l<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ap=function(t){const e=vl(t);return yl.encodeByteArray(e,!0)},bl=function(t){return ap(t).replace(/\./g,"")},El=function(t){try{return yl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lp=()=>cp().__FIREBASE_DEFAULTS__,up=()=>{if(typeof process>"u"||typeof Ca>"u")return;const t=Ca.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&El(t[1]);return e&&JSON.parse(e)},eo=()=>{try{return lp()||up()||fp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dp=t=>{var e,n;return(n=(e=eo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wl=()=>{var t;return(t=eo())===null||t===void 0?void 0:t.config},Il=t=>{var e;return(e=eo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function gp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vp(){try{return typeof indexedDB=="object"}catch{return!1}}function yp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bp="FirebaseError";class zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bp,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ep(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zt(r,a,s)}}function Ep(t,e){return t.replace(wp,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wp=/\{\$([^}]+)}/g;function Ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Aa(i)&&Aa(o)){if(!Zs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Aa(t){return t!==null&&typeof t=="object"}/**
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
 */function ys(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sp(t,e){const n=new Tp(t,e);return n.subscribe.bind(n)}class Tp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=zr),r.error===void 0&&(r.error=zr),r.complete===void 0&&(r.complete=zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zr(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pp(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Qt?void 0:t}function Pp(t){return t.instantiationMode==="EAGER"}/**
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
 */class kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Op={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Np=ue.INFO,Lp={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Mp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Lp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=Np,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let Ra,Pa;function xp(){return Ra||(Ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $p(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tl=new WeakMap,vi=new WeakMap,Cl=new WeakMap,qr=new WeakMap,to=new WeakMap;function Up(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tl.set(n,t)}).catch(()=>{}),to.set(e,t),e}function Fp(t){if(vi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vi.set(t,e)}let yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vp(t){yi=t(yi)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gr(this),e,...n);return Cl.set(s,e.sort?e.sort():[e]),Ft(s)}:$p().includes(t)?function(...e){return t.apply(Gr(this),e),Ft(Tl.get(this))}:function(...e){return Ft(t.apply(Gr(this),e))}}function Hp(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Fp(t),Dp(t,xp())?new Proxy(t,yi):t)}function Ft(t){if(t instanceof IDBRequest)return Up(t);if(qr.has(t))return qr.get(t);const e=Hp(t);return e!==t&&(qr.set(t,e),to.set(e,t)),e}const Gr=t=>to.get(t);function jp(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wp=["get","getKey","getAll","getAllKeys","count"],Kp=["put","add","delete","clear"],Jr=new Map;function ka(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jr.get(e))return Jr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Kp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Wp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Jr.set(e,i),i}Vp(t=>({...t,get:(e,n,s)=>ka(e,n)||t.get(e,n,s),has:(e,n)=>!!ka(e,n)||t.has(e,n)}));/**
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
 */class zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",Oa="0.10.1";/**
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
 */const an=new Sl("@firebase/app"),Gp="@firebase/app-compat",Jp="@firebase/analytics-compat",Yp="@firebase/analytics",Xp="@firebase/app-check-compat",Qp="@firebase/app-check",Zp="@firebase/auth",eg="@firebase/auth-compat",tg="@firebase/database",ng="@firebase/database-compat",sg="@firebase/functions",rg="@firebase/functions-compat",ig="@firebase/installations",og="@firebase/installations-compat",ag="@firebase/messaging",cg="@firebase/messaging-compat",lg="@firebase/performance",ug="@firebase/performance-compat",fg="@firebase/remote-config",dg="@firebase/remote-config-compat",hg="@firebase/storage",pg="@firebase/storage-compat",gg="@firebase/firestore",mg="@firebase/firestore-compat",_g="firebase",vg="10.11.0";/**
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
 */const Ei="[DEFAULT]",yg={[bi]:"fire-core",[Gp]:"fire-core-compat",[Yp]:"fire-analytics",[Jp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Xp]:"fire-app-check-compat",[Zp]:"fire-auth",[eg]:"fire-auth-compat",[tg]:"fire-rtdb",[ng]:"fire-rtdb-compat",[sg]:"fire-fn",[rg]:"fire-fn-compat",[ig]:"fire-iid",[og]:"fire-iid-compat",[ag]:"fire-fcm",[cg]:"fire-fcm-compat",[lg]:"fire-perf",[ug]:"fire-perf-compat",[fg]:"fire-rc",[dg]:"fire-rc-compat",[hg]:"fire-gcs",[pg]:"fire-gcs-compat",[gg]:"fire-fst",[mg]:"fire-fst-compat","fire-js":"fire-js",[_g]:"fire-js-all"};/**
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
 */const er=new Map,bg=new Map,wi=new Map;function Na(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(wi.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,t);for(const n of er.values())Na(n,t);for(const n of bg.values())Na(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t.settings!==void 0}/**
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
 */const Eg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new vs("app","Firebase",Eg);/**
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
 */class wg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=vg;function Rl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ei,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(n||(n=wl()),!n)throw Vt.create("no-options");const i=er.get(r);if(i){if(Zs(n,i.options)&&Zs(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const o=new kp(r);for(const c of wi.values())o.addComponent(c);const a=new wg(n,s,o);return er.set(r,a),a}function Ig(t=Ei){const e=er.get(t);if(!e&&t===Ei&&wl())return Rl();if(!e)throw Vt.create("no-app",{appName:t});return e}function Tn(t,e,n){var s;let r=(s=yg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}fs(new Mn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Sg="firebase-heartbeat-database",Tg=1,ds="firebase-heartbeat-store";let Yr=null;function Pl(){return Yr||(Yr=jp(Sg,Tg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function Cg(t){try{const n=(await Pl()).transaction(ds),s=await n.objectStore(ds).get(kl(t));return await n.done,s}catch(e){if(e instanceof zt)an.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function La(t,e){try{const s=(await Pl()).transaction(ds,"readwrite");await s.objectStore(ds).put(e,kl(t)),await s.done}catch(n){if(n instanceof zt)an.warn(n.message);else{const s=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(s.message)}}}function kl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ag=1024,Rg=30*24*60*60*1e3;class Pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Og(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ma();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ma(),{heartbeatsToSend:s,unsentEntries:r}=kg(this._heartbeatsCache.heartbeats),i=bl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ma(){return new Date().toISOString().substring(0,10)}function kg(t,e=Ag){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Da(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Da(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vp()?yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return La(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return La(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Da(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ng(t){fs(new Mn("platform-logger",e=>new zp(e),"PRIVATE")),fs(new Mn("heartbeat",e=>new Pg(e),"PRIVATE")),Tn(bi,Oa,t),Tn(bi,Oa,"esm2017"),Tn("fire-js","")}Ng("");var Lg="firebase",Mg="10.11.0";/**
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
 */Tn(Lg,Mg,"app");function no(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ol(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dg=Ol,Nl=new vs("auth","Firebase",Ol());/**
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
 */const tr=new Sl("@firebase/auth");function xg(t,...e){tr.logLevel<=ue.WARN&&tr.warn(`Auth (${bs}): ${t}`,...e)}function Hs(t,...e){tr.logLevel<=ue.ERROR&&tr.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw so(t,...e)}function tt(t,...e){return so(t,...e)}function Ll(t,e,n){const s=Object.assign(Object.assign({},Dg()),{[e]:n});return new vs("auth","Firebase",s).create(e,{appName:t.name})}function ht(t){return Ll(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function so(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nl.create(t,...e)}function W(t,e,...n){if(!t)throw so(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hs(e),new Error(e)}function pt(t,e){t||ct(e)}/**
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
 */function Ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $g(){return xa()==="http:"||xa()==="https:"}function xa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ug(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||gp()||"connection"in navigator)?navigator.onLine:!0}function Fg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Es{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=pp()||mp()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ro(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ml{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bg=new Es(3e4,6e4);function qt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,s,r={}){return Dl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ys(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ml.fetch()(xl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Dl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vg),e);try{const r=new jg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ll(t,u,l);qe(t,u)}}catch(r){if(r instanceof zt)throw r;qe(t,"network-request-failed",{message:String(r)})}}async function ws(t,e,n,s,r={}){const i=await mt(t,e,n,s,r);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function xl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ro(t.config,r):`${t.config.apiScheme}://${r}`}function Hg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),Bg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}function $a(t){return t!==void 0&&t.enterprise!==void 0}class Wg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Kg(t,e){return mt(t,"GET","/v2/recaptchaConfig",qt(t,e))}/**
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
 */async function zg(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function $l(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qg(t,e=!1){const n=rt(t),s=await n.getIdToken(e),r=io(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ts(Xr(r.auth_time)),issuedAtTime:ts(Xr(r.iat)),expirationTime:ts(Xr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xr(t){return Number(t)*1e3}function io(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const r=El(n);return r?JSON.parse(r):(Hs("Failed to decode base64 JWT payload"),null)}catch(r){return Hs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ua(t){const e=io(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof zt&&Gg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Gg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Si{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Dn(t,$l(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ul(i.providerUserInfo):[],a=Xg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Si(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Yg(t){const e=rt(t);await nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ul(t){return t.map(e=>{var{providerId:n}=e,s=no(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Qg(t,e){const n=await Dl(t,{},async()=>{const s=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=xl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ml.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zg(t,e){return mt(t,"POST","/v2/accounts:revokeToken",qt(t,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ua(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Ua(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Qg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Cn;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function It(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=no(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Si(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qg(this,e)}reload(){return Yg(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await nr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Dn(this,zg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:K,isAnonymous:j,providerData:$,stsTokenManager:J}=n;W(F&&J,e,"internal-error");const R=Cn.fromJSON(this.name,J);W(typeof F=="string",e,"internal-error"),It(d,e.name),It(h,e.name),W(typeof K=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),It(g,e.name),It(_,e.name),It(y,e.name),It(C,e.name),It(O,e.name),It(M,e.name);const D=new lt({uid:F,auth:e,email:h,emailVerified:K,displayName:d,isAnonymous:j,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:R,createdAt:O,lastLoginAt:M});return $&&Array.isArray($)&&(D.providerData=$.map(z=>Object.assign({},z))),C&&(D._redirectEventId=C),D}static async _fromIdTokenResponse(e,n,s=!1){const r=new Cn;r.updateFromServerResponse(n);const i=new lt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await nr(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ul(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Cn;a.updateFromIdToken(s);const c=new lt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Si(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Fa=new Map;function ut(t){pt(t instanceof Function,"Expected a class definition");let e=Fa.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fa.set(t,e),e)}/**
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
 */class Fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fl.type="NONE";const Va=Fl;/**
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
 */function js(t,e,n){return`firebase:${t}:${e}:${n}`}class An{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=js(this.userKey,r.apiKey,i),this.fullPersistenceKey=js("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new An(ut(Va),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ut(Va);const o=js(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=lt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new An(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new An(i,e,s))}}/**
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
 */function Ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wl(e))return"Blackberry";if(Kl(e))return"Webos";if(oo(e))return"Safari";if((e.includes("chrome/")||Bl(e))&&!e.includes("edge/"))return"Chrome";if(jl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vl(t=Oe()){return/firefox\//i.test(t)}function oo(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bl(t=Oe()){return/crios\//i.test(t)}function Hl(t=Oe()){return/iemobile/i.test(t)}function jl(t=Oe()){return/android/i.test(t)}function Wl(t=Oe()){return/blackberry/i.test(t)}function Kl(t=Oe()){return/webos/i.test(t)}function Rr(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function em(t=Oe()){var e;return Rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tm(){return _p()&&document.documentMode===10}function zl(t=Oe()){return Rr(t)||jl(t)||Kl(t)||Wl(t)||/windows phone/i.test(t)||Hl(t)}function nm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ql(t,e=[]){let n;switch(t){case"Browser":n=Ba(Oe());break;case"Worker":n=`${Ba(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}/**
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
 */class sm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function rm(t,e={}){return mt(t,"GET","/v2/passwordPolicy",qt(t,e))}/**
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
 */const im=6;class om{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:im,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class am{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ha(this),this.idTokenSubscription=new Ha(this),this.beforeStateQueue=new sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $l(this,{idToken:e}),s=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(ht(this));const n=e?rt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rm(this),n=new om(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Zg(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hn(t){return rt(t)}class Ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sp(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cm(t){Pr=t}function Gl(t){return Pr.loadJS(t)}function lm(){return Pr.recaptchaEnterpriseScript}function um(){return Pr.gapiScript}function fm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dm="recaptcha-enterprise",hm="NO_RECAPTCHA";class pm{constructor(e){this.type=dm,this.auth=hn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Kg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Wg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;$a(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(hm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&$a(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=lm();c.length!==0&&(c+=a),Gl(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ja(t,e,n,s=!1){const r=new pm(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ti(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ja(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ja(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function gm(t,e){const n=Al(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Zs(i,e??{}))return r;qe(r,"already-initialized")}return n.initialize({options:e})}function mm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _m(t,e,n){const s=hn(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Jl(e),{host:o,port:a}=vm(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ym()}function Jl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vm(t){const e=Jl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Wa(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Wa(o)}}}function Wa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ym(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ao{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function bm(t,e){return mt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Em(t,e){return ws(t,"POST","/v1/accounts:signInWithPassword",qt(t,e))}/**
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
 */async function wm(t,e){return ws(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}async function Im(t,e){return ws(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}/**
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
 */class hs extends ao{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new hs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,n,"signInWithPassword",Em);case"emailLink":return wm(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,s,"signUpPassword",bm);case"emailLink":return Im(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rn(t,e){return ws(t,"POST","/v1/accounts:signInWithIdp",qt(t,e))}/**
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
 */const Sm="http://localhost";class cn extends ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=no(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new cn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:Sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ys(n)}return e}}/**
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
 */function Tm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cm(t){const e=Kn(zn(t)).link,n=e?Kn(zn(e)).deep_link_id:null,s=Kn(zn(t)).deep_link_id;return(s?Kn(zn(s)).link:null)||s||n||e||t}class co{constructor(e){var n,s,r,i,o,a;const c=Kn(zn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=Tm((r=c.mode)!==null&&r!==void 0?r:null);W(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Cm(e);try{return new co(n)}catch{return null}}}/**
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
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(e,n){return hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=co.parseLink(n);return W(s,"argument-error"),hs._fromEmailAndCode(e,s.code,s.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends Yl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ot extends Is{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Lt extends Is{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Is{constructor(){super("twitter.com")}static credential(e,n){return cn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mt.credential(n,s)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function Am(t,e){return ws(t,"POST","/v1/accounts:signUp",qt(t,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await lt._fromIdTokenResponse(e,s,r),o=Ka(s);return new ln({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ka(s);return new ln({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ka(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sr extends zt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new sr(e,n,s,r)}}function Xl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sr._fromErrorAndOperation(t,i,e,s):i})}async function Rm(t,e,n=!1){const s=await Dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",s)}/**
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
 */async function Pm(t,e,n=!1){const{auth:s}=t;if(Ze(s.app))return Promise.reject(ht(s));const r="reauthenticate";try{const i=await Dn(t,Xl(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=io(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),ln._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(s,"user-mismatch"),i}}/**
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
 */async function Ql(t,e,n=!1){if(Ze(t.app))return Promise.reject(ht(t));const s="signIn",r=await Xl(t,s,e),i=await ln._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function km(t,e){return Ql(hn(t),e)}/**
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
 */async function Zl(t){const e=hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Om(t,e,n){if(Ze(t.app))return Promise.reject(ht(t));const s=hn(t),o=await Ti(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Am).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zl(t),c}),a=await ln._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Nm(t,e,n){return Ze(t.app)?Promise.reject(ht(t)):km(rt(t),Un.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zl(t),s})}/**
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
 */async function Lm(t,e){return mt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Mm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=rt(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Dn(s,Lm(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Dm(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function xm(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function $m(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}function za(t){return rt(t).signOut()}const rr="__sak";/**
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
 */class eu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Um(){const t=Oe();return oo(t)||Rr(t)}const Fm=1e3,Vm=10;class tu extends eu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Um()&&nm(),this.fallbackToPolling=zl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);tm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tu.type="LOCAL";const Bm=tu;/**
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
 */class nu extends eu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nu.type="SESSION";const su=nu;/**
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
 */function Hm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new kr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Hm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kr.receivers=[];/**
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
 */function lo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=lo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Wm(t){nt().location.href=t}/**
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
 */function ru(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Km(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qm(){return ru()?self:null}/**
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
 */const iu="firebaseLocalStorageDb",Gm=1,ir="firebaseLocalStorage",ou="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Or(t,e){return t.transaction([ir],e?"readwrite":"readonly").objectStore(ir)}function Jm(){const t=indexedDB.deleteDatabase(iu);return new Ss(t).toPromise()}function Ci(){const t=indexedDB.open(iu,Gm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ir,{keyPath:ou})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ir)?e(s):(s.close(),await Jm(),e(await Ci()))})})}async function qa(t,e,n){const s=Or(t,!0).put({[ou]:e,value:n});return new Ss(s).toPromise()}async function Ym(t,e){const n=Or(t,!1).get(e),s=await new Ss(n).toPromise();return s===void 0?null:s.value}function Ga(t,e){const n=Or(t,!0).delete(e);return new Ss(n).toPromise()}const Xm=800,Qm=3;class au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Qm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ru()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance(qm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Km(),!this.activeServiceWorker)return;this.sender=new jm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await qa(e,rr,"1"),await Ga(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qa(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ym(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ga(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Or(r,!1).getAll();return new Ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}au.type="LOCAL";const Zm=au;new Es(3e4,6e4);/**
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
 */function e_(t,e){return e?ut(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uo extends ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t_(t){return Ql(t.auth,new uo(t),t.bypassAuthState)}function n_(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Pm(n,new uo(t),t.bypassAuthState)}async function s_(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Rm(n,new uo(t),t.bypassAuthState)}/**
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
 */class cu{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t_;case"linkViaPopup":case"linkViaRedirect":return s_;case"reauthViaPopup":case"reauthViaRedirect":return n_;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r_=new Es(2e3,1e4);class yn extends cu{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r_.get())};e()}}yn.currentPopupAction=null;/**
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
 */const i_="pendingRedirect",Ws=new Map;class o_ extends cu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const s=await a_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a_(t,e){const n=u_(e),s=l_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function c_(t,e){Ws.set(t._key(),e)}function l_(t){return ut(t._redirectPersistence)}function u_(t){return js(i_,t.config.apiKey,t.name)}async function f_(t,e,n=!1){if(Ze(t.app))return Promise.reject(ht(t));const s=hn(t),r=e_(s,e),o=await new o_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const d_=10*60*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!lu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ja(e))}saveEventToCache(e){this.cachedEventUids.add(Ja(e)),this.lastProcessedEventTime=Date.now()}}function Ja(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lu(t);default:return!1}}/**
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
 */async function g_(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
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
 */const m_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,__=/^https?/;async function v_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g_(t);for(const n of e)try{if(y_(n))return}catch{}qe(t,"unauthorized-domain")}function y_(t){const e=Ii(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!__.test(n))return!1;if(m_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const b_=new Es(3e4,6e4);function Ya(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E_(t){return new Promise((e,n)=>{var s,r,i;function o(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),n(tt(t,"network-request-failed"))},timeout:b_.get()})}if(!((r=(s=nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=fm("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Gl(`${um()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function w_(t){return Ks=Ks||E_(t),Ks}/**
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
 */const I_=new Es(5e3,15e3),S_="__/auth/iframe",T_="emulator/auth/iframe",C_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ro(e,T_):`https://${t.config.authDomain}/${S_}`,s={apiKey:e.apiKey,appName:t.name,v:bs},r=A_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ys(s).slice(1)}`}async function P_(t){const e=await w_(t),n=nt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:R_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},I_.get());function c(){nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const k_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O_=500,N_=600,L_="_blank",M_="http://localhost";class Xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D_(t,e,n,s=O_,r=N_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},k_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Bl(l)?L_:n),Vl(l)&&(e=e||M_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(em(l)&&a!=="_self")return x_(e||"",a),new Xa(null);const d=window.open(e||"",a,u);W(d,t,"popup-blocked");try{d.focus()}catch{}return new Xa(d)}function x_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $_="__/auth/handler",U_="emulator/auth/handler",F_=encodeURIComponent("fac");async function Qa(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:r};if(e instanceof Yl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof Is){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${F_}=${encodeURIComponent(c)}`:"";return`${V_(t)}?${ys(a).slice(1)}${l}`}function V_({config:t}){return t.emulator?ro(t,U_):`https://${t.authDomain}/${$_}`}/**
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
 */const Qr="webStorageSupport";class B_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=su,this._completeRedirectFn=f_,this._overrideRedirectResult=c_}async _openPopup(e,n,s,r){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qa(e,n,s,Ii(),r);return D_(e,o,lo())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Qa(e,n,s,Ii(),r);return Wm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(pt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await P_(e),s=new h_(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qr,{type:Qr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Qr];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zl()||oo()||Rr()}}const H_=B_;var Za="@firebase/auth",ec="1.7.1";/**
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
 */class j_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K_(t){fs(new Mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ql(t)},l=new am(s,r,i,c);return mm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fs(new Mn("auth-internal",e=>{const n=hn(e.getProvider("auth").getImmediate());return(s=>new j_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Za,ec,W_(t)),Tn(Za,ec,"esm2017")}/**
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
 */const z_=5*60,q_=Il("authIdTokenMaxAge")||z_;let tc=null;const G_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>q_)return;const r=n==null?void 0:n.token;tc!==r&&(tc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function J_(t=Ig()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gm(t,{popupRedirectResolver:H_,persistence:[Zm,Bm,su]}),s=Il("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=G_(i.toString());xm(n,o,()=>o(n.currentUser)),Dm(n,a=>o(a))}}const r=dp("auth");return r&&_m(n,`http://${r}`),n}function Y_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cm({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Y_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K_("Browser");const X_={apiKey:"AIzaSyBm5CfzbOl8mYldxgN5giPFPImcuSQMEXA",authDomain:"online-shopping-mall-ba092.firebaseapp.com",projectId:"online-shopping-mall-ba092",storageBucket:"online-shopping-mall-ba092.appspot.com",messagingSenderId:"212110660805",appId:"1:212110660805:web:1c726ddeb383f52fcf4cac"},Q_=Rl(X_),jn=J_(Q_),Ts=Zd("auth",()=>{const t=Y(""),e=Y(""),n=ve(()=>{if(e.value.includes("email-already"))return"電子郵件已被使用";if(e.value.includes("invalid-email"))return"無效的電子郵件";if(e.value.includes("weak-password"))return"密碼最少需要6個字";if(!e.value)return""}),s=ve(()=>{if(e.value!=="")return"錯誤的帳號或密碼"});$m(jn,a=>{a?t.value=a.displayName:t.value=""});async function r(a,c,l){try{e.value="";const u=await Om(jn,a,c);console.log(u.user),u.user&&await Mm(u.user,{displayName:l}),await za(jn)}catch(u){e.value=u.code,console.log("註冊失敗",n.value)}}async function i(a,c){e.value="";try{const l=await Nm(jn,a,c);t.value=l.user.displayName,console.log(l.user)}catch(l){e.value=l.code,console.log("登入失敗:",l.message)}}async function o(){try{await za(jn),t.value="",console.log("登出成功")}catch(a){console.log("登出失敗:",a.message)}}return{signupErrorMessage:n,loginErrorMessage:s,memberName:t,signup:r,login:i,logout:o}}),_t=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Z_=t=>(Wt("data-v-ec93e931"),t=t(),Kt(),t),ev={key:0,class:"signup-modal"},tv={class:"modal-content"},nv={class:"signup-form"},sv={for:"signup-name"},rv={for:"signup-email"},iv={for:"signup-password"},ov={class:"success-modal"},av=Z_(()=>m("div",{class:"success-modal-content"},[m("p",null,"成功註冊!!"),m("p",null,"請等待跳轉...")],-1)),cv=[av],lv={__name:"Signup",setup(t){const e=Ts(),n=Y(!1),s=Y(""),r=Y(""),i=Y(""),o=Y(!1),a=Y(!1),c=Y(!1),l=ve(()=>e.signupErrorMessage),u=Y(!1);function d(){n.value=!0,o.value=!1,a.value=!1,c.value=!1}function h(){n.value=!1,r.value="",i.value="",s.value="",o.value=!1,a.value=!1,c.value=!1}const g=async()=>{if(s.value===""||r.value===""||i.value===""){o.value=!0;return}try{if(await e.signup(r.value,i.value,s.value),l.value.includes("密碼")){a.value=!1,c.value=!0;return}else if(l.value.includes("電子")){c.value=!1,a.value=!0;return}else a.value=!1,c.value=!1;u.value=!0,setTimeout(()=>{u.value=!1,h()},2e3)}catch(_){console.log(_)}};return(_,y)=>(Z(),fe(_e,null,[m("p",{onClick:y[0]||(y[0]=C=>d())},"註冊"),(Z(),on(yr,{to:"body"},[n.value?(Z(),fe("div",ev,[m("div",tv,[m("span",{onClick:y[1]||(y[1]=C=>h())},"×"),m("form",nv,[m("label",sv,[xe("用戶名 "),re(m("span",null,"請填寫正確的資訊",512),[[Te,o.value]])]),re(m("input",{type:"text",id:"signup-name","onUpdate:modelValue":y[2]||(y[2]=C=>s.value=C)},null,512),[[et,s.value]]),m("label",rv,[xe("電子郵件 "),re(m("span",null,Re(l.value),513),[[Te,a.value]])]),re(m("input",{type:"text",id:"signup-email","onUpdate:modelValue":y[3]||(y[3]=C=>r.value=C)},null,512),[[et,r.value]]),m("label",iv,[xe("密碼 "),re(m("span",null,Re(l.value),513),[[Te,c.value]])]),re(m("input",{type:"password",id:"signup-password","onUpdate:modelValue":y[4]||(y[4]=C=>i.value=C)},null,512),[[et,i.value]]),m("button",{onClick:y[5]||(y[5]=Yi(C=>g(),["prevent"]))},"註冊")]),re(m("div",ov,cv,512),[[Te,u.value]])])])):wr("",!0)]))],64))}},uv=_t(lv,[["__scopeId","data-v-ec93e931"]]),fv={key:0,class:"login-modal"},dv={class:"modal-content"},hv={class:"login-form"},pv={for:"login-email"},gv={for:"login-password"},mv={__name:"Login",setup(t){const e=Ts(),n=Y(!1),s=Y(""),r=Y(""),i=Y(!1),o=Y(!1),a=ve(()=>e.loginErrorMessage),c=async()=>{if(s.value===""||r.value===""){i.value=!0;return}else i.value=!1;try{if(await e.login(s.value,r.value),console.log(a.value),a.value){o.value=!0;return}else o.value=!1}catch(d){console.log(d)}};function l(){n.value=!0,s.value="",r.value="",i.value=!1,o.value=!1}function u(){n.value=!1,s.value="",r.value="",i.value=!1,o.value=!1}return(d,h)=>(Z(),fe(_e,null,[m("p",{onClick:h[0]||(h[0]=g=>l())},"登入"),(Z(),on(yr,{to:"body"},[n.value?(Z(),fe("div",fv,[m("div",dv,[m("span",{onClick:h[1]||(h[1]=g=>u())},"×"),m("form",hv,[m("label",pv,[xe("電子郵件 "),re(m("span",null,"請填寫帳號或密碼",512),[[Te,i.value]])]),re(m("input",{type:"text",id:"login-email","onUpdate:modelValue":h[2]||(h[2]=g=>s.value=g)},null,512),[[et,s.value]]),m("label",gv,[xe("密碼 "),re(m("span",null,Re(a.value),513),[[Te,o.value]])]),re(m("input",{type:"password",id:"login-password","onUpdate:modelValue":h[3]||(h[3]=g=>r.value=g)},null,512),[[et,r.value]]),m("button",{onClick:h[4]||(h[4]=Yi(g=>c(),["prevent"]))},"登入")])])])):wr("",!0)]))],64))}},_v=_t(mv,[["__scopeId","data-v-8bff753d"]]),vv=t=>(Wt("data-v-f067aaa4"),t=t(),Kt(),t),yv={key:0,class:"logout-modal"},bv={class:"modal-content"},Ev=vv(()=>m("p",null,"確定登出嗎?",-1)),wv={__name:"Logout",setup(t){const e=Zi(),n=Ts(),s=Y(!1);function r(){s.value=!0}function i(){s.value=!1}const o=async()=>{try{await n.logout(),s.value=!1,e.push({path:"/"})}catch(a){console.log(a)}};return(a,c)=>(Z(),fe(_e,null,[m("p",{onClick:c[0]||(c[0]=l=>r())},"登出"),(Z(),on(yr,{to:"body"},[s.value?(Z(),fe("div",yv,[m("div",bv,[m("span",{onClick:c[1]||(c[1]=l=>i())},"×"),Ev,m("button",{onClick:c[2]||(c[2]=l=>o())},"確定")])])):wr("",!0)]))],64))}},Iv=_t(wv,[["__scopeId","data-v-f067aaa4"]]),Cs=t=>(Wt("data-v-233e2689"),t=t(),Kt(),t),Sv=Cs(()=>m("label",{class:"hamburger",for:"toggle"},[m("div",{class:"bar"}),m("div",{class:"bar"}),m("div",{class:"bar"})],-1)),Tv=Cs(()=>m("input",{type:"checkbox",id:"toggle"},null,-1)),Cv={class:"navbar"},Av={class:"logo"},Rv={class:"search"},Pv=Cs(()=>m("img",{src:"https://cdn-icons-png.flaticon.com/512/54/54481.png",alt:""},null,-1)),kv=[Pv],Ov={class:"error-modal"},Nv={class:"content"},Lv=Cs(()=>m("p",null,"未搜索到此商品，請輸入正確的關鍵字",-1)),Mv={class:"warn-modal"},Dv={class:"content"},xv=Cs(()=>m("p",null,"請先登入",-1)),$v={__name:"Header",setup(t){const e=Ts(),n=Zi(),s=ke("products"),r=ve(()=>e.memberName),i=ve(()=>!r.value),o=ve(()=>"你好"+r.value+"!"),a=Y(""),c=Y(!1);function l(){if(a.value==="")return;const h=s.value.filter(g=>g.name.includes(a.value));if(h.length===0){a.value="",c.value=!c.value;return}a.value="",n.push({path:`/product/${h[0].id}`})}function u(){if(e.memberName)n.push({path:"/cart"});else{d.value=!0;return}}const d=Y(!1);return(h,g)=>{const _=mr("router-link");return Z(),fe(_e,null,[Sv,m("header",null,[Tv,m("nav",Cv,[m("ul",null,[re(m("li",null,Re(o.value),513),[[Te,r.value]]),m("li",null,[de(_,{to:"/home"},{default:rn(()=>[xe("首頁")]),_:1})]),m("li",null,[m("a",{onClick:u},"購物車")]),m("li",null,[de(uv)]),m("li",null,[i.value?(Z(),on(_v,{key:0})):(Z(),on(Iv,{key:1}))])])]),m("div",Av,[m("h1",null,[de(_,{to:"/home"},{default:rn(()=>[xe("購物網站")]),_:1})])]),m("div",Rv,[re(m("input",{type:"text","onUpdate:modelValue":g[0]||(g[0]=y=>a.value=y),onKeyup:g[1]||(g[1]=Vd(y=>l(),["enter"]))},null,544),[[et,a.value]]),m("div",{class:"search-pic",onClick:g[2]||(g[2]=y=>l())},kv)])]),de(Ji,{name:"error-modal"},{default:rn(()=>[re(m("div",Ov,[m("div",Nv,[m("span",{onClick:g[3]||(g[3]=y=>c.value=!c.value)},"×"),Lv])],512),[[Te,c.value]])]),_:1}),(Z(),on(yr,{to:"body"},[re(m("div",Mv,[m("div",Dv,[m("span",{onClick:g[4]||(g[4]=y=>d.value=!1)},"×"),xv])],512),[[Te,d.value]])]))],64)}}},fo=_t($v,[["__scopeId","data-v-233e2689"]]),Uv=t=>(Wt("data-v-0ce4874c"),t=t(),Kt(),t),Fv={class:"banner"},Vv=Uv(()=>m("div",{class:"filter"},null,-1)),Bv=["src"],Hv={class:"dot-container"},jv=["onClick"],Wv={__name:"Banner",setup(t){const e=ke("products"),n=Y(0);function s(o){n.value>=0&&(n.value+=o,n.value>4?n.value=0:n.value<0&&(n.value=4))}function r(o){n.value=o-1}let i;return i=setInterval(()=>s(1),3e3),ji(()=>{clearInterval(i)}),(o,a)=>(Z(),fe("div",Fv,[Vv,(Z(!0),fe(_e,null,kn($t(e),(c,l)=>re((Z(),fe("div",{class:"banner-pic",key:l},[m("img",{src:c.image,alt:""},null,8,Bv)])),[[Te,l===n.value]])),128)),m("a",{class:"prev",onClick:a[0]||(a[0]=c=>s(-1))},"❮"),m("a",{class:"next",onClick:a[1]||(a[1]=c=>s(1))},"❯"),m("div",Hv,[(Z(),fe(_e,null,kn(5,c=>m("div",{class:lr(["dot",{activeDot:n.value===c-1}]),onClick:l=>r(c)},null,10,jv)),64))])]))}},Kv=_t(Wv,[["__scopeId","data-v-0ce4874c"]]),zv=t=>(Wt("data-v-942561ce"),t=t(),Kt(),t),qv={class:"product-list"},Gv={class:"pic"},Jv=zv(()=>m("div",{class:"filter"},null,-1)),Yv=["src","alt"],Xv={__name:"ProductList",setup(t){const e=ke("products");return(n,s)=>{const r=mr("router-link");return Z(),fe("div",qv,[m("ul",null,[(Z(!0),fe(_e,null,kn($t(e),i=>(Z(),fe("li",{class:"list",key:i.id},[m("div",Gv,[de(r,{to:`/product/${i.id}`},{default:rn(()=>[Jv,m("img",{src:i.image,alt:i.name},null,8,Yv)]),_:2},1032,["to"])]),m("h1",null,[de(r,{to:`/product/${i.id}`},{default:rn(()=>[xe(Re(i.name),1)]),_:2},1032,["to"])]),m("p",null,"$"+Re(i.price),1)]))),128))])])}}},Qv=_t(Xv,[["__scopeId","data-v-942561ce"]]),Zv={__name:"Home",setup(t){return(e,n)=>(Z(),fe(_e,null,[de(fo),de(Kv),de(Qv)],64))}},it=t=>(Wt("data-v-964b7e87"),t=t(),Kt(),t),ey={class:"payment-modal"},ty={class:"modal-content"},ny=it(()=>m("div",{class:"credit-card-pic"},[m("img",{src:"https://www.mastercard.co.nz/content/dam/public/mastercardcom/nz/en/consumers/find-a-card/2024/ma_card_hrz_jmc_standard_wht.png",alt:""})],-1)),sy={class:"card-number"},ry=it(()=>m("label",{for:"card-number"},"信用卡卡號",-1)),iy={class:"payer"},oy=it(()=>m("label",{for:"payer"},"持卡人姓名",-1)),ay={class:"expdate-cvv"},cy={class:"expmonth"},ly=it(()=>m("label",{for:"expmonth"},"到期月份",-1)),uy=it(()=>m("option",{disabled:"",value:""},"選擇月份",-1)),fy=["value"],dy={class:"expyear"},hy=it(()=>m("label",{for:"expyear"},"到期年份",-1)),py=it(()=>m("option",{disabled:"",value:""},"選擇年份",-1)),gy=["value"],my={class:"cvv"},_y=it(()=>m("label",{for:"cvv"},"安全碼",-1)),vy={class:"total-btn"},yy=it(()=>m("button",{type:"submit"},"送出",-1)),by={class:"success-modal"},Ey=it(()=>m("div",{class:"success-modal-content"},[m("p",null,"結帳成功!!"),m("p",null,"請等待跳轉...")],-1)),wy=[Ey],Iy={__name:"Payment",props:["total"],emits:["closeModal","submitPayment"],setup(t,{emit:e}){const n=e,s=Y([]),r=Y(""),i=Y(""),o=Y(""),a=Y(""),c=Y(""),l=Y(!1);$n(()=>{for(let g=2024;g<=2040;g++)s.value.push(g)});function u(){r.value="",i.value="",o.value="",a.value="",c.value=""}function d(){n("closeModal"),u()}function h(){n("submitPayment"),l.value=!0,setTimeout(()=>{l.value=!0},1e3),setTimeout(()=>{u(),l.value=!1},2e3)}return(g,_)=>(Z(),fe("div",ey,[m("div",ty,[m("span",{class:"close-modal",onClick:_[0]||(_[0]=y=>d())},"×"),ny,m("form",{class:"credit-card-form",onSubmit:_[6]||(_[6]=Yi(y=>h(),["prevent"]))},[m("div",sy,[ry,re(m("input",{type:"text",id:"card-number",required:"",maxlength:"16",pattern:"\\d{16}",title:"請輸入16位的數字","onUpdate:modelValue":_[1]||(_[1]=y=>r.value=y)},null,512),[[et,r.value]])]),m("div",iy,[oy,re(m("input",{type:"text",id:"payer",required:"","onUpdate:modelValue":_[2]||(_[2]=y=>i.value=y)},null,512),[[et,i.value]])]),m("div",ay,[m("div",cy,[ly,re(m("select",{id:"expmonth",required:"","onUpdate:modelValue":_[3]||(_[3]=y=>o.value=y)},[uy,(Z(),fe(_e,null,kn(12,y=>m("option",{value:y},"0"+Re(y),9,fy)),64))],512),[[oa,o.value]])]),m("div",dy,[hy,re(m("select",{id:"expyear",required:"","onUpdate:modelValue":_[4]||(_[4]=y=>a.value=y)},[py,(Z(!0),fe(_e,null,kn(s.value,y=>(Z(),fe("option",{value:y},Re(y),9,gy))),256))],512),[[oa,a.value]])]),m("div",my,[_y,re(m("input",{type:"text",id:"cvv",required:"",maxlength:"3",pattern:"\\d{3}","onUpdate:modelValue":_[5]||(_[5]=y=>c.value=y)},null,512),[[et,c.value]])])]),m("div",vy,[m("p",null,[xe("總金額"),m("span",null,Re(t.total),1)]),yy])],32),re(m("div",by,wy,512),[[Te,l.value]])])]))}},Sy=_t(Iy,[["__scopeId","data-v-964b7e87"]]),ho=t=>(Wt("data-v-0c74e70f"),t=t(),Kt(),t),Ty={class:"cart"},Cy={key:0},Ay=["onUpdate:modelValue"],Ry={class:"pic"},Py=["src"],ky={class:"txt"},Oy={class:"num"},Ny=["onClick"],Ly=["onUpdate:modelValue"],My=["onClick"],Dy=["onClick"],xy={class:"footer"},$y={class:"item"},Uy=ho(()=>m("label",{for:"all-check"},"全選",-1)),Fy={class:"item"},Vy={key:1,class:"empty"},By=ho(()=>m("p",null,"目前尚未添加商品",-1)),Hy={class:"modal"},jy={class:"content"},Wy={class:"btn"},Ky={class:"nothing"},zy={class:"content"},qy=ho(()=>m("p",null,"請選取商品",-1)),Gy={__name:"Cart",setup(t){const e=Y([]);$n(()=>{localStorage.getItem("cart")&&(e.value=JSON.parse(localStorage.getItem("cart")))});function n(g){e.value.splice(g,1)}In(e,()=>{localStorage.setItem("cart",JSON.stringify(e.value))},{deep:!0});function s(g,_){if(e.value[_].count+g>=1)e.value[_].count+=g;else return}const r=ve({get:()=>e.value.length>0&&e.value.every(g=>g.checked),set:g=>{e.value.forEach(_=>_.checked=g)}}),i=ve(()=>e.value.reduce((g,_)=>_.checked?g+_.price*_.count:g+0,0)),o=Y(!1),a=Y(!1),c=Y(!1);function l(){e.value.length>0&&e.value.some(g=>g.checked)?o.value=!0:a.value=!0}function u(){c.value=!0,o.value=!1}function d(){setTimeout(()=>{c.value=!1,e.value=e.value.filter(g=>!g.checked),o.value=!1},2e3)}function h(){c.value=!1}return(g,_)=>{const y=mr("router-link");return Z(),fe(_e,null,[de(fo),m("div",Ty,[e.value&&e.value.length>0?(Z(),fe("ul",Cy,[(Z(!0),fe(_e,null,kn(e.value,(C,O)=>(Z(),fe("li",{key:C.id},[re(m("input",{type:"checkbox","onUpdate:modelValue":M=>C.checked=M},null,8,Ay),[[ra,C.checked]]),m("div",Ry,[m("img",{src:C.image,alt:""},null,8,Py)]),m("div",ky,[m("h1",null,Re(C.name),1),m("p",null,"$"+Re(C.price),1),m("div",Oy,[m("button",{class:"minus",onClick:M=>s(-1,O)},"－",8,Ny),re(m("input",{type:"number",placeholder:"數量",min:"0",max:"99","onUpdate:modelValue":M=>C.count=M},null,8,Ly),[[et,C.count]]),m("button",{class:"plus",onClick:M=>s(1,O)},"＋",8,My)]),m("button",{class:"del-btn",onClick:M=>n(O)},"刪除",8,Dy)])]))),128)),m("div",xy,[m("div",$y,[re(m("input",{type:"checkbox",name:"",id:"all-check","onUpdate:modelValue":_[0]||(_[0]=C=>r.value=C)},null,512),[[ra,r.value]]),Uy]),m("div",Fy,[m("p",null,[xe("總金額$ "),m("span",null,Re(i.value),1)]),m("button",{onClick:_[1]||(_[1]=C=>l())},"結帳")])])])):(Z(),fe("div",Vy,[By,de(y,{to:"/home"},{default:rn(()=>[xe("前往")]),_:1})]))]),re(m("div",Hy,[m("div",jy,[m("p",null,[xe("總金額$"),m("span",null,Re(i.value),1),xe("確定要付款嗎?")]),m("div",Wy,[m("button",{class:"confrim",onClick:_[2]||(_[2]=C=>u())},"確定"),m("button",{class:"cancel",onClick:_[3]||(_[3]=C=>o.value=!1)},"取消")])])],512),[[Te,o.value]]),re(m("div",Ky,[m("div",zy,[qy,m("button",{onClick:_[4]||(_[4]=C=>a.value=!1)},"確定")])],512),[[Te,a.value]]),re(de(Sy,{total:i.value,onCloseModal:_[5]||(_[5]=C=>h()),onSubmitPayment:_[6]||(_[6]=C=>d())},null,8,["total"]),[[Te,c.value]])],64)}}},Jy=_t(Gy,[["__scopeId","data-v-0c74e70f"]]),Nr=t=>(Wt("data-v-0ff58b2a"),t=t(),Kt(),t),Yy={class:"container"},Xy={key:0,class:"product"},Qy={class:"wrap"},Zy={class:"pic"},eb=["src"],tb={class:"detail"},nb=Nr(()=>m("h3",null,"商品詳情",-1)),sb={class:"footer"},rb={class:"repeat-modal"},ib={class:"content"},ob=Nr(()=>m("p",null,"此商品已在購物車內",-1)),ab={class:"warn-modal"},cb={class:"content"},lb=Nr(()=>m("p",null,"請先登入",-1)),ub={class:"success-modal"},fb={class:"content"},db=Nr(()=>m("p",null,"成功添加購物車!",-1)),hb={__name:"ProductDetail",setup(t){const e=Ts(),n=ve(()=>e.memberName),s=ke("products"),r=rp(),i=Zi(),o=Y(null),a=Y(!1);$n(()=>{const g=r.params.id,_=s.value.find(y=>y.id==g);o.value=_,localStorage.getItem("cart")&&(c.value=JSON.parse(localStorage.getItem("cart")))}),gf(()=>{const g=r.params.id,_=s.value.find(y=>y.id==g);o.value=_});const c=Y([]);function l(){if(!n.value){d.value=!0;return}c.value.find(g=>g.id==o.value.id)?a.value=!a.value:(c.value.push(o.value),localStorage.setItem("cart",JSON.stringify(c.value)),h.value=!0)}function u(){i.back()}const d=Y(!1),h=Y(!1);return(g,_)=>(Z(),fe(_e,null,[m("div",Yy,[de(fo),o.value?(Z(),fe("div",Xy,[m("div",Qy,[m("button",{class:"prev",onClick:_[0]||(_[0]=y=>u())},"上一頁"),m("div",Zy,[m("img",{src:o.value.image,alt:""},null,8,eb)]),m("h1",null,Re(o.value.name),1),m("p",null,"$"+Re(o.value.price),1),m("div",tb,[nb,m("p",null,Re(o.value.description),1)])])])):wr("",!0),m("div",sb,[m("button",{onClick:_[1]||(_[1]=y=>l())},"加入購物車")])]),re(m("div",rb,[m("div",ib,[ob,m("button",{onClick:_[2]||(_[2]=y=>a.value=!a.value)},"確定")])],512),[[Te,a.value]]),re(m("div",ab,[m("div",cb,[m("span",{onClick:_[3]||(_[3]=y=>d.value=!1)},"×"),lb])],512),[[Te,d.value]]),re(m("div",ub,[m("div",fb,[db,m("button",{onClick:_[4]||(_[4]=y=>h.value=!1)},"確定")])],512),[[Te,h.value]])],64))}},pb=_t(hb,[["__scopeId","data-v-0ff58b2a"]]),gb=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:Zv},{path:"/product/:id",name:"productDetail",component:pb},{path:"/cart",name:"cart",component:Jy}],mb=np({history:Oh(),routes:gb}),_b=m("div",{id:"arrow"},null,-1),vb=[_b],yb={__name:"App",setup(t){const e=Y([]);Jn("products",e),$n(async()=>{try{const s=await fetch("https://raw.githubusercontent.com/a41522001/product/main/product.json");e.value=await s.json()}catch(s){console.log(s),alert("網址連線錯誤請稍後再試")}});function n(){window.scrollTo({top:0,behavior:"smooth"})}return(s,r)=>{const i=mr("router-view");return Z(),fe(_e,null,[m("div",{id:"back-top",onClick:r[0]||(r[0]=o=>n())},vb),de(i)],64)}}},po=jd(yb);po.use(mb);po.use(qd());po.mount("#app");
