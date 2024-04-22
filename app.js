(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const de={},vn=[],Be=()=>{},ou=()=>!1,Zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ii=t=>t.startsWith("onUpdate:"),be=Object.assign,Si=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},au=Object.prototype.hasOwnProperty,Z=(t,e)=>au.call(t,e),V=Array.isArray,yn=t=>ar(t)==="[object Map]",es=t=>ar(t)==="[object Set]",fo=t=>ar(t)==="[object Date]",q=t=>typeof t=="function",ye=t=>typeof t=="string",Ut=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",qa=t=>(ue(t)||q(t))&&q(t.then)&&q(t.catch),Ja=Object.prototype.toString,ar=t=>Ja.call(t),cu=t=>ar(t).slice(8,-1),Ya=t=>ar(t)==="[object Object]",Ti=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hn=wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ts=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lu=/-(\w)/g,nt=ts(t=>t.replace(lu,(e,n)=>n?n.toUpperCase():"")),uu=/\B([A-Z])/g,on=ts(t=>t.replace(uu,"-$1").toLowerCase()),ns=ts(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=ts(t=>t?`on${ns(t)}`:""),$t=(t,e)=>!Object.is(t,e),Rr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fu=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let ho;const Xa=()=>ho||(ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?gu(r):Ci(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ye(t)||ue(t))return t}const du=/;(?![^(]*\))/g,hu=/:([^]+)/,pu=/\/\*[^]*?\*\//g;function gu(t){const e={};return t.replace(pu,"").split(du).forEach(n=>{if(n){const r=n.split(hu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rs(t){let e="";if(ye(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=rs(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_u=wi(mu);function Qa(t){return!!t||t===""}function vu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ss(t[r],e[r]);return n}function ss(t,e){if(t===e)return!0;let n=fo(t),r=fo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ut(t),r=Ut(e),n||r)return t===e;if(n=V(t),r=V(e),n||r)return n&&r?vu(t,e):!1;if(n=ue(t),r=ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function Za(t,e){return t.findIndex(n=>ss(n,e))}const $e=t=>ye(t)?t:t==null?"":V(t)||ue(t)&&(t.toString===Ja||!q(t.toString))?JSON.stringify(t,ec,2):String(t),ec=(t,e)=>e&&e.__v_isRef?ec(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rs(r,i)+" =>"]=s,n),{})}:es(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rs(n))}:Ut(e)?Rs(e):ue(e)&&!V(e)&&!Ya(e)?String(e):e,Rs=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class tc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function nc(t){return new tc(t)}function yu(t,e=Ue){e&&e.active&&e.effects.push(t)}function rc(){return Ue}function bu(t){Ue&&Ue.cleanups.push(t)}let Qt;class Ai{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,yu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,an();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Eu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ot,n=Qt;try{return Ot=!0,Qt=this,this._runnings++,po(this),this.fn()}finally{go(this),this._runnings--,Qt=n,Ot=e}}stop(){var e;this.active&&(po(this),go(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Eu(t){return t.value}function po(t){t._trackId++,t._depsLength=0}function go(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)sc(t.deps[e],t);t.deps.length=t._depsLength}}function sc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ot=!0,qs=0;const ic=[];function an(){ic.push(Ot),Ot=!1}function cn(){const t=ic.pop();Ot=t===void 0?!0:t}function Ri(){qs++}function Pi(){for(qs--;!qs&&Js.length;)Js.shift()()}function oc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&sc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Js=[];function ac(t,e,n){Ri();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Js.push(r.scheduler)))}Pi()}const cc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},$r=new WeakMap,Zt=Symbol(""),Ys=Symbol("");function De(t,e,n){if(Ot&&Qt){let r=$r.get(t);r||$r.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=cc(()=>r.delete(n))),oc(Qt,s)}}function lt(t,e,n,r,s,i){const o=$r.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Ut(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ti(n)&&a.push(o.get("length")):(a.push(o.get(Zt)),yn(t)&&a.push(o.get(Ys)));break;case"delete":V(t)||(a.push(o.get(Zt)),yn(t)&&a.push(o.get(Ys)));break;case"set":yn(t)&&a.push(o.get(Zt));break}Ri();for(const c of a)c&&ac(c,4);Pi()}function wu(t,e){var n;return(n=$r.get(t))==null?void 0:n.get(e)}const Iu=wi("__proto__,__v_isRef,__isVue"),lc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut)),mo=Su();function Su(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)De(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an(),Ri();const r=Q(this)[e].apply(this,n);return Pi(),cn(),r}}),t}function Tu(t){const e=Q(this);return De(e,"has",t),e.hasOwnProperty(t)}class uc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$u:pc:i?hc:dc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&Z(mo,n))return Reflect.get(mo,n,r);if(n==="hasOwnProperty")return Tu}const a=Reflect.get(e,n,r);return(Ut(n)?lc.has(n):Iu(n))||(s||De(e,"get",n),i)?a:Ee(a)?o&&Ti(n)?a:a.value:ue(a)?s?mc(a):cr(a):a}}class fc extends uc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Rn(i);if(!Fr(r)&&!Rn(r)&&(i=Q(i),r=Q(r)),!V(e)&&Ee(i)&&!Ee(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Ti(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,s);return e===Q(s)&&(o?$t(r,i)&&lt(e,"set",n,r):lt(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&lt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ut(n)||!lc.has(n))&&De(e,"has",n),r}ownKeys(e){return De(e,"iterate",V(e)?"length":Zt),Reflect.ownKeys(e)}}class Cu extends uc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Au=new fc,Ru=new Cu,Pu=new fc(!0),ki=t=>t,is=t=>Reflect.getPrototypeOf(t);function yr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||($t(e,i)&&De(s,"get",e),De(s,"get",i));const{has:o}=is(s),a=r?ki:n?Li:Xn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function br(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||($t(t,s)&&De(r,"has",t),De(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Er(t,e=!1){return t=t.__v_raw,!e&&De(Q(t),"iterate",Zt),Reflect.get(t,"size",t)}function _o(t){t=Q(t);const e=Q(this);return is(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function vo(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=is(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$t(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function yo(t){const e=Q(this),{has:n,get:r}=is(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lt(e,"delete",t,void 0),i}function bo(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function wr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),c=e?ki:t?Li:Xn;return!t&&De(a,"iterate",Zt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ir(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=yn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ki:e?Li:Xn;return!e&&De(i,"iterate",c?Ys:Zt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ku(){const t={get(i){return yr(this,i)},get size(){return Er(this)},has:br,add:_o,set:vo,delete:yo,clear:bo,forEach:wr(!1,!1)},e={get(i){return yr(this,i,!1,!0)},get size(){return Er(this)},has:br,add:_o,set:vo,delete:yo,clear:bo,forEach:wr(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return Er(this,!0)},has(i){return br.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:wr(!0,!1)},r={get(i){return yr(this,i,!0,!0)},get size(){return Er(this,!0)},has(i){return br.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ir(i,!1,!1),n[i]=Ir(i,!0,!1),e[i]=Ir(i,!1,!0),r[i]=Ir(i,!0,!0)}),[t,n,e,r]}const[Ou,Nu,Lu,Mu]=ku();function Oi(t,e){const n=e?t?Mu:Lu:t?Nu:Ou;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Du={get:Oi(!1,!1)},xu={get:Oi(!1,!0)},Uu={get:Oi(!0,!1)},dc=new WeakMap,hc=new WeakMap,pc=new WeakMap,$u=new WeakMap;function Fu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bu(t){return t.__v_skip||!Object.isExtensible(t)?0:Fu(cu(t))}function cr(t){return Rn(t)?t:Ni(t,!1,Au,Du,dc)}function gc(t){return Ni(t,!1,Pu,xu,hc)}function mc(t){return Ni(t,!0,Ru,Uu,pc)}function Ni(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Bu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Nt(t){return Rn(t)?Nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function Fr(t){return!!(t&&t.__v_isShallow)}function _c(t){return Nt(t)||Rn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function os(t){return Object.isExtensible(t)&&Ur(t,"__v_skip",!0),t}const Xn=t=>ue(t)?cr(t):t,Li=t=>ue(t)?mc(t):t;class vc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ai(()=>e(this._value),()=>Pr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return(!e._cacheable||e.effect.dirty)&&$t(e._value,e._value=e.effect.run())&&Pr(e,4),yc(e),e.effect._dirtyLevel>=2&&Pr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Vu(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new vc(r,s,i||!s,n)}function yc(t){var e;Ot&&Qt&&(t=Q(t),oc(Qt,(e=t.dep)!=null?e:t.dep=cc(()=>t.dep=void 0,t instanceof vc?t:void 0)))}function Pr(t,e=4,n){t=Q(t);const r=t.dep;r&&ac(r,e)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function se(t){return bc(t,!1)}function Hu(t){return bc(t,!0)}function bc(t,e){return Ee(t)?t:new ju(t,e)}class ju{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:Xn(e)}get value(){return yc(this),this._value}set value(e){const n=this.__v_isShallow||Fr(e)||Rn(e);e=n?e:Q(e),$t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xn(e),Pr(this,4))}}function Lt(t){return Ee(t)?t.value:t}const Wu={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ec(t){return Nt(t)?t:new Proxy(t,Wu)}function Ku(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=Gu(t,n);return e}class zu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wu(Q(this._object),this._key)}}function Gu(t,e,n){const r=t[e];return Ee(r)?r:new zu(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(t,e,n,r){try{return r?t(...r):t()}catch(s){as(s,e,n)}}function He(t,e,n,r){if(q(t)){const i=Mt(t,e,n,r);return i&&qa(i)&&i.catch(o=>{as(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(He(t[i],e,n,r));return s}function as(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mt(c,null,10,[t,o,a]);return}}qu(t,n,s,r)}function qu(t,e,n,r=!0){console.error(t)}let Qn=!1,Xs=!1;const Ce=[];let Qe=0;const bn=[];let Et=null,qt=0;const wc=Promise.resolve();let Mi=null;function Di(t){const e=Mi||wc;return t?e.then(this?t.bind(this):t):e}function Ju(t){let e=Qe+1,n=Ce.length;for(;e<n;){const r=e+n>>>1,s=Ce[r],i=Zn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function xi(t){(!Ce.length||!Ce.includes(t,Qn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ce.push(t):Ce.splice(Ju(t.id),0,t),Ic())}function Ic(){!Qn&&!Xs&&(Xs=!0,Mi=wc.then(Tc))}function Yu(t){const e=Ce.indexOf(t);e>Qe&&Ce.splice(e,1)}function Xu(t){V(t)?bn.push(...t):(!Et||!Et.includes(t,t.allowRecurse?qt+1:qt))&&bn.push(t),Ic()}function Eo(t,e,n=Qn?Qe+1:0){for(;n<Ce.length;n++){const r=Ce[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ce.splice(n,1),n--,r()}}}function Sc(t){if(bn.length){const e=[...new Set(bn)].sort((n,r)=>Zn(n)-Zn(r));if(bn.length=0,Et){Et.push(...e);return}for(Et=e,qt=0;qt<Et.length;qt++)Et[qt]();Et=null,qt=0}}const Zn=t=>t.id==null?1/0:t.id,Qu=(t,e)=>{const n=Zn(t)-Zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tc(t){Xs=!1,Qn=!0,Ce.sort(Qu);try{for(Qe=0;Qe<Ce.length;Qe++){const e=Ce[Qe];e&&e.active!==!1&&Mt(e,null,14)}}finally{Qe=0,Ce.length=0,Sc(),Qn=!1,Mi=null,(Ce.length||bn.length)&&Tc()}}function Zu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||de;h&&(s=n.map(g=>ye(g)?g.trim():g)),f&&(s=n.map(Gs))}let a,c=r[a=As(e)]||r[a=As(nt(e))];!c&&i&&(c=r[a=As(on(e))]),c&&He(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,He(l,t,6,s)}}function Cc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=Cc(l,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):be(o,i),ue(t)&&r.set(t,o),o)}function cs(t,e){return!t||!Zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,on(e))||Z(t,e))}let Ae=null,ls=null;function Br(t){const e=Ae;return Ae=t,ls=t&&t.type.__scopeId||null,e}function ln(t){ls=t}function un(){ls=null}function kt(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Do(-1);const i=Br(e);let o;try{o=t(...s)}finally{Br(i),r._d&&Do(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ps(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:g,ctx:E,inheritAttrs:I}=t;let L,k;const $=Br(t);try{if(n.shapeFlag&4){const K=s||r,j=K;L=Xe(u.call(j,K,f,i,g,h,E)),k=c}else{const K=e;L=Xe(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),k=e.props?c:ef(c)}}catch(K){zn.length=0,as(K,t,1),L=fe(Ke)}let F=L;if(k&&I!==!1){const K=Object.keys(k),{shapeFlag:j}=F;K.length&&j&7&&(o&&K.some(Ii)&&(k=tf(k,o)),F=Ft(F,k))}return n.dirs&&(F=Ft(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,Br($),L}const ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zr(n))&&((e||(e={}))[n]=t[n]);return e},tf=(t,e)=>{const n={};for(const r in t)(!Ii(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!cs(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wo(r,o,l):!0:!!o;return!1}function wo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cs(n,i))return!0}return!1}function rf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ac="components";function us(t,e){return of(Ac,t,!0,e)||t}const sf=Symbol.for("v-ndc");function of(t,e,n=!0,r=!1){const s=Ae||Ie;if(s){const i=s.type;if(t===Ac){const a=id(i,!1);if(a&&(a===e||a===nt(e)||a===ns(nt(e))))return i}const o=Io(s[t]||i[t],e)||Io(s.appContext[t],e);return!o&&r?i:o}}function Io(t,e){return t&&(t[e]||t[nt(e)]||t[ns(nt(e))])}const af=t=>t.__isSuspense;function cf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Xu(t)}const lf=Symbol.for("v-scx"),uf=()=>Re(lf);function ff(t,e){return Ui(t,null,e)}const Sr={};function En(t,e,n){return Ui(t,e,n)}function Ui(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=de){if(e&&i){const x=e;e=(...J)=>{x(...J),j()}}const c=Ie,l=x=>r===!0?x:Xt(x,r===!1?1:void 0);let u,f=!1,h=!1;if(Ee(t)?(u=()=>t.value,f=Fr(t)):Nt(t)?(u=()=>l(t),f=!0):V(t)?(h=!0,f=t.some(x=>Nt(x)||Fr(x)),u=()=>t.map(x=>{if(Ee(x))return x.value;if(Nt(x))return l(x);if(q(x))return Mt(x,c,2)})):q(t)?e?u=()=>Mt(t,c,2):u=()=>(g&&g(),He(t,c,3,[E])):u=Be,e&&r){const x=u;u=()=>Xt(x())}let g,E=x=>{g=F.onStop=()=>{Mt(x,c,4),g=F.onStop=void 0}},I;if(ms)if(E=Be,e?n&&He(e,c,3,[u(),h?[]:void 0,E]):u(),s==="sync"){const x=uf();I=x.__watcherHandles||(x.__watcherHandles=[])}else return Be;let L=h?new Array(t.length).fill(Sr):Sr;const k=()=>{if(!(!F.active||!F.dirty))if(e){const x=F.run();(r||f||(h?x.some((J,A)=>$t(J,L[A])):$t(x,L)))&&(g&&g(),He(e,c,3,[x,L===Sr?void 0:h&&L[0]===Sr?[]:L,E]),L=x)}else F.run()};k.allowRecurse=!!e;let $;s==="sync"?$=k:s==="post"?$=()=>Le(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),$=()=>xi(k));const F=new Ai(u,Be,$),K=rc(),j=()=>{F.stop(),K&&Si(K.effects,F)};return e?n?k():L=F.run():s==="post"?Le(F.run.bind(F),c&&c.suspense):F.run(),I&&I.push(j),j}function df(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?Rc(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=ur(this),a=Ui(s,i.bind(r),n);return o(),a}function Rc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xt(t,e,n=0,r){if(!ue(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ee(t))Xt(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)Xt(t[s],e,n,r);else if(es(t)||yn(t))t.forEach(s=>{Xt(s,e,n,r)});else if(Ya(t))for(const s in t)Xt(t[s],e,n,r);return t}function me(t,e){if(Ae===null)return t;const n=_s(Ae)||Ae.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=de]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Xt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(an(),He(c,n,8,[t.el,a,t,e]),cn())}}const wt=Symbol("_leaveCb"),Tr=Symbol("_enterCb");function hf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lr(()=>{t.isMounted=!0}),Mc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],Pc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},pf={name:"BaseTransition",props:Pc,setup(t,{slots:e}){const n=ed(),r=hf();return()=>{const s=e.default&&Oc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const h of s)if(h.type!==Ke){i=h;break}}const o=Q(t),{mode:a}=o;if(r.isLeaving)return ks(i);const c=So(i);if(!c)return ks(i);const l=Qs(c,o,r,n);Zs(c,l);const u=n.subTree,f=u&&So(u);if(f&&f.type!==Ke&&!Jt(c,f)){const h=Qs(f,o,r,n);if(Zs(f,h),a==="out-in")return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ks(i);a==="in-out"&&c.type!==Ke&&(h.delayLeave=(g,E,I)=>{const L=kc(r,f);L[String(f.key)]=f,g[wt]=()=>{E(),g[wt]=void 0,delete l.delayedLeave},l.delayedLeave=I})}return i}}},gf=pf;function kc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Qs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:I,onAppear:L,onAfterAppear:k,onAppearCancelled:$}=e,F=String(t.key),K=kc(n,t),j=(A,M)=>{A&&He(A,r,9,M)},x=(A,M)=>{const z=M[1];j(A,M),V(A)?A.every(ee=>ee.length<=1)&&z():A.length<=1&&z()},J={mode:i,persisted:o,beforeEnter(A){let M=a;if(!n.isMounted)if(s)M=I||a;else return;A[wt]&&A[wt](!0);const z=K[F];z&&Jt(t,z)&&z.el[wt]&&z.el[wt](),j(M,[A])},enter(A){let M=c,z=l,ee=u;if(!n.isMounted)if(s)M=L||c,z=k||l,ee=$||u;else return;let D=!1;const te=A[Tr]=Se=>{D||(D=!0,Se?j(ee,[A]):j(z,[A]),J.delayedLeave&&J.delayedLeave(),A[Tr]=void 0)};M?x(M,[A,te]):te()},leave(A,M){const z=String(t.key);if(A[Tr]&&A[Tr](!0),n.isUnmounting)return M();j(f,[A]);let ee=!1;const D=A[wt]=te=>{ee||(ee=!0,M(),te?j(E,[A]):j(g,[A]),A[wt]=void 0,K[z]===t&&delete K[z])};K[z]=t,h?x(h,[A,D]):D()},clone(A){return Qs(A,e,n,r)}};return J}function ks(t){if(fs(t))return t=Ft(t),t.children=null,t}function So(t){return fs(t)?t.children?t.children[0]:void 0:t}function Zs(t,e){t.shapeFlag&6&&t.component?Zs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&s++,r=r.concat(Oc(o.children,e,a))):(e||o.type!==Ke)&&r.push(a!=null?Ft(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Nc(t,e){return q(t)?be({name:t.name},e,{setup:t}):t}const kr=t=>!!t.type.__asyncLoader,fs=t=>t.type.__isKeepAlive;function mf(t,e){Lc(t,"a",e)}function _f(t,e){Lc(t,"da",e)}function Lc(t,e,n=Ie){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ds(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fs(s.parent.vnode)&&vf(r,e,n,s),s=s.parent}}function vf(t,e,n,r){const s=ds(e,t,r,!0);$i(()=>{Si(r[e],s)},n)}function ds(t,e,n=Ie,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an();const a=ur(n),c=He(e,n,t,o);return a(),cn(),c});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=Ie)=>(!ms||t==="sp")&&ds(t,(...r)=>e(...r),n),yf=dt("bm"),lr=dt("m"),bf=dt("bu"),Ef=dt("u"),Mc=dt("bum"),$i=dt("um"),wf=dt("sp"),If=dt("rtg"),Sf=dt("rtc");function Tf(t,e=Ie){ds("ec",t,e)}function Vr(t,e,n,r){let s;const i=n&&n[r];if(V(t)||ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ei=t=>t?zc(t)?_s(t)||t.proxy:ei(t.parent):null,jn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ei(t.parent),$root:t=>ei(t.root),$emit:t=>t.emit,$options:t=>Fi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,xi(t.update)}),$nextTick:t=>t.n||(t.n=Di.bind(t.proxy)),$watch:t=>df.bind(t)}),Os=(t,e)=>t!==de&&!t.__isScriptSetup&&Z(t,e),Cf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Os(r,e))return o[e]=1,r[e];if(s!==de&&Z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==de&&Z(n,e))return o[e]=4,n[e];ti&&(o[e]=0)}}const u=jn[e];let f,h;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&Z(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Z(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Os(s,e)?(s[e]=n,!0):r!==de&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&Z(t,o)||Os(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(jn,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function To(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ti=!0;function Af(t){const e=Fi(t),n=t.proxy,r=t.ctx;ti=!1,e.beforeCreate&&Co(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:E,activated:I,deactivated:L,beforeDestroy:k,beforeUnmount:$,destroyed:F,unmounted:K,render:j,renderTracked:x,renderTriggered:J,errorCaptured:A,serverPrefetch:M,expose:z,inheritAttrs:ee,components:D,directives:te,filters:Se}=e;if(l&&Rf(l,r,null),o)for(const ae in o){const ne=o[ae];q(ne)&&(r[ae]=ne.bind(n))}if(s){const ae=s.call(n,n);ue(ae)&&(t.data=cr(ae))}if(ti=!0,i)for(const ae in i){const ne=i[ae],st=q(ne)?ne.bind(n,n):q(ne.get)?ne.get.bind(n,n):Be,pt=!q(ne)&&q(ne.set)?ne.set.bind(n):Be,qe=ve({get:st,set:pt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ne=>qe.value=Ne})}if(a)for(const ae in a)Dc(a[ae],r,n,ae);if(c){const ae=q(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ne=>{Wn(ne,ae[ne])})}u&&Co(u,t,"c");function X(ae,ne){V(ne)?ne.forEach(st=>ae(st.bind(n))):ne&&ae(ne.bind(n))}if(X(yf,f),X(lr,h),X(bf,g),X(Ef,E),X(mf,I),X(_f,L),X(Tf,A),X(Sf,x),X(If,J),X(Mc,$),X($i,K),X(wf,M),V(z))if(z.length){const ae=t.exposed||(t.exposed={});z.forEach(ne=>{Object.defineProperty(ae,ne,{get:()=>n[ne],set:st=>n[ne]=st})})}else t.exposed||(t.exposed={});j&&t.render===Be&&(t.render=j),ee!=null&&(t.inheritAttrs=ee),D&&(t.components=D),te&&(t.directives=te)}function Rf(t,e,n=Be){V(t)&&(t=ni(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=Re(s.from||r,s.default,!0):i=Re(s.from||r):i=Re(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Co(t,e,n){He(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dc(t,e,n,r){const s=r.includes(".")?Rc(n,r):()=>n[r];if(ye(t)){const i=e[t];q(i)&&En(s,i)}else if(q(t))En(s,t.bind(n));else if(ue(t))if(V(t))t.forEach(i=>Dc(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&En(s,i,t)}}function Fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Hr(c,l,o,!0)),Hr(c,e,o)),ue(e)&&i.set(e,c),c}function Hr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Hr(t,i,n,!0),s&&s.forEach(o=>Hr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pf={data:Ao,props:Ro,emits:Ro,methods:Fn,computed:Fn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Fn,directives:Fn,watch:Of,provide:Ao,inject:kf};function Ao(t,e){return e?t?function(){return be(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function kf(t,e){return Fn(ni(t),ni(e))}function ni(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?be(Object.create(null),t,e):e}function Ro(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:be(Object.create(null),To(t),To(e??{})):e}function Of(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const r in e)n[r]=Oe(t[r],e[r]);return n}function xc(){return{app:null,config:{isNativeTag:ou,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function Lf(t,e){return function(r,s=null){q(r)||(r=be({},r)),s!=null&&!ue(s)&&(s=null);const i=xc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Nf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ad,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=fe(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,_s(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=wn;wn=c;try{return l()}finally{wn=u}}};return c}}let wn=null;function Wn(t,e){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[t]=e}}function Re(t,e,n=!1){const r=Ie||Ae;if(r||wn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function Mf(){return!!(Ie||Ae||wn)}function Df(t,e,n,r=!1){const s={},i={};Ur(i,ps,1),t.propsDefaults=Object.create(null),Uc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(cs(t.emitsOptions,h))continue;const g=e[h];if(c)if(Z(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const E=nt(h);s[E]=ri(c,a,E,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Uc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=on(f))===f||!Z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ri(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&lt(t,"set","$attrs")}function Uc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hn(c))continue;const l=e[c];let u;s&&Z(s,u=nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Q(n),l=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ri(s,c,f,l[f],t,!Z(l,f))}}return o}function ri(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ur(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function $c(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=f=>{c=!0;const[h,g]=$c(f,e,!0);be(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,vn),vn;if(V(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);Po(f)&&(o[f]=de)}else if(i)for(const u in i){const f=nt(u);if(Po(f)){const h=i[u],g=o[f]=V(h)||q(h)?{type:h}:be({},h);if(g){const E=No(Boolean,g.type),I=No(String,g.type);g[0]=E>-1,g[1]=I<0||E<I,(E>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return ue(t)&&r.set(t,l),l}function Po(t){return t[0]!=="$"&&!Hn(t)}function ko(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Oo(t,e){return ko(t)===ko(e)}function No(t,e){return V(e)?e.findIndex(n=>Oo(n,t)):q(e)&&Oo(e,t)?0:-1}const Fc=t=>t[0]==="_"||t==="$stable",Bi=t=>V(t)?t.map(Xe):[Xe(t)],Uf=(t,e,n)=>{if(e._n)return e;const r=kt((...s)=>Bi(e(...s)),n);return r._c=!1,r},Bc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fc(s))continue;const i=t[s];if(q(i))e[s]=Uf(s,i,r);else if(i!=null){const o=Bi(i);e[s]=()=>o}}},Vc=(t,e)=>{const n=Bi(e);t.slots.default=()=>n},$f=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Ur(e,"_",n)):Bc(e,t.slots={})}else t.slots={},e&&Vc(t,e);Ur(t.slots,ps,1)},Ff=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(be(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Bc(e,s)),o=e}else e&&(Vc(t,e),o={default:1});if(i)for(const a in s)!Fc(a)&&o[a]==null&&delete s[a]};function si(t,e,n,r,s=!1){if(V(t)){t.forEach((h,g)=>si(h,e&&(V(e)?e[g]:e),n,r,s));return}if(kr(r)&&!s)return;const i=r.shapeFlag&4?_s(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):Ee(l)&&(l.value=null)),q(c))Mt(c,a,12,[o,u]);else{const h=ye(c),g=Ee(c);if(h||g){const E=()=>{if(t.f){const I=h?Z(f,c)?f[c]:u[c]:c.value;s?V(I)&&Si(I,i):V(I)?I.includes(i)||I.push(i):h?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Le(E,n)):E()}}}const Le=cf;function Bf(t){return Vf(t)}function Vf(t,e){const n=Xa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=Be,insertStaticContent:E}=t,I=(d,p,m,b=null,v=null,T=null,P=void 0,S=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jt(d,p)&&(b=y(d),Ne(d,v,T,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:w,ref:N,shapeFlag:H}=p;switch(w){case hs:L(d,p,m,b);break;case Ke:k(d,p,m,b);break;case Ls:d==null&&$(p,m,b,P);break;case _e:D(d,p,m,b,v,T,P,S,C);break;default:H&1?j(d,p,m,b,v,T,P,S,C):H&6?te(d,p,m,b,v,T,P,S,C):(H&64||H&128)&&w.process(d,p,m,b,v,T,P,S,C,U)}N!=null&&v&&si(N,d&&d.ref,T,p||d,!p)},L=(d,p,m,b)=>{if(d==null)r(p.el=a(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},k=(d,p,m,b)=>{d==null?r(p.el=c(p.children||""),m,b):p.el=d.el},$=(d,p,m,b)=>{[d.el,d.anchor]=E(d.children,p,m,b,d.el,d.anchor)},F=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},K=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},j=(d,p,m,b,v,T,P,S,C)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),d==null?x(p,m,b,v,T,P,S,C):M(d,p,v,T,P,S,C)},x=(d,p,m,b,v,T,P,S)=>{let C,w;const{props:N,shapeFlag:H,transition:B,dirs:G}=d;if(C=d.el=o(d.type,T,N&&N.is,N),H&8?u(C,d.children):H&16&&A(d.children,C,null,b,v,Ns(d,T),P,S),G&&jt(d,null,b,"created"),J(C,d,d.scopeId,P,b),N){for(const ce in N)ce!=="value"&&!Hn(ce)&&i(C,ce,null,N[ce],T,d.children,b,v,Te);"value"in N&&i(C,"value",null,N.value,T),(w=N.onVnodeBeforeMount)&&Ye(w,b,d)}G&&jt(d,null,b,"beforeMount");const Y=Hf(v,B);Y&&B.beforeEnter(C),r(C,p,m),((w=N&&N.onVnodeMounted)||Y||G)&&Le(()=>{w&&Ye(w,b,d),Y&&B.enter(C),G&&jt(d,null,b,"mounted")},v)},J=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let T=0;T<b.length;T++)g(d,b[T]);if(v){let T=v.subTree;if(p===T){const P=v.vnode;J(d,P,P.scopeId,P.slotScopeIds,v.parent)}}},A=(d,p,m,b,v,T,P,S,C=0)=>{for(let w=C;w<d.length;w++){const N=d[w]=S?It(d[w]):Xe(d[w]);I(null,N,p,m,b,v,T,P,S)}},M=(d,p,m,b,v,T,P)=>{const S=p.el=d.el;let{patchFlag:C,dynamicChildren:w,dirs:N}=p;C|=d.patchFlag&16;const H=d.props||de,B=p.props||de;let G;if(m&&Wt(m,!1),(G=B.onVnodeBeforeUpdate)&&Ye(G,m,p,d),N&&jt(p,d,m,"beforeUpdate"),m&&Wt(m,!0),w?z(d.dynamicChildren,w,S,m,b,Ns(p,v),T):P||ne(d,p,S,null,m,b,Ns(p,v),T,!1),C>0){if(C&16)ee(S,p,H,B,m,b,v);else if(C&2&&H.class!==B.class&&i(S,"class",null,B.class,v),C&4&&i(S,"style",H.style,B.style,v),C&8){const Y=p.dynamicProps;for(let ce=0;ce<Y.length;ce++){const pe=Y[ce],we=H[pe],je=B[pe];(je!==we||pe==="value")&&i(S,pe,we,je,v,d.children,m,b,Te)}}C&1&&d.children!==p.children&&u(S,p.children)}else!P&&w==null&&ee(S,p,H,B,m,b,v);((G=B.onVnodeUpdated)||N)&&Le(()=>{G&&Ye(G,m,p,d),N&&jt(p,d,m,"updated")},b)},z=(d,p,m,b,v,T,P)=>{for(let S=0;S<p.length;S++){const C=d[S],w=p[S],N=C.el&&(C.type===_e||!Jt(C,w)||C.shapeFlag&70)?f(C.el):m;I(C,w,N,null,b,v,T,P,!0)}},ee=(d,p,m,b,v,T,P)=>{if(m!==b){if(m!==de)for(const S in m)!Hn(S)&&!(S in b)&&i(d,S,m[S],null,P,p.children,v,T,Te);for(const S in b){if(Hn(S))continue;const C=b[S],w=m[S];C!==w&&S!=="value"&&i(d,S,w,C,P,p.children,v,T,Te)}"value"in b&&i(d,"value",m.value,b.value,P)}},D=(d,p,m,b,v,T,P,S,C)=>{const w=p.el=d?d.el:a(""),N=p.anchor=d?d.anchor:a("");let{patchFlag:H,dynamicChildren:B,slotScopeIds:G}=p;G&&(S=S?S.concat(G):G),d==null?(r(w,m,b),r(N,m,b),A(p.children||[],m,N,v,T,P,S,C)):H>0&&H&64&&B&&d.dynamicChildren?(z(d.dynamicChildren,B,m,v,T,P,S),(p.key!=null||v&&p===v.subTree)&&Vi(d,p,!0)):ne(d,p,m,N,v,T,P,S,C)},te=(d,p,m,b,v,T,P,S,C)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,P,C):Se(p,m,b,v,T,P,C):ke(d,p,C)},Se=(d,p,m,b,v,T,P)=>{const S=d.component=Zf(d,b,v);if(fs(d)&&(S.ctx.renderer=U),td(S),S.asyncDep){if(v&&v.registerDep(S,X),!d.el){const C=S.subTree=fe(Ke);k(null,C,p,m)}}else X(S,d,p,m,v,T,P)},ke=(d,p,m)=>{const b=p.component=d.component;if(nf(d,p,m))if(b.asyncDep&&!b.asyncResolved){ae(b,p,m);return}else b.next=p,Yu(b.update),b.effect.dirty=!0,b.update();else p.el=d.el,b.vnode=p},X=(d,p,m,b,v,T,P)=>{const S=()=>{if(d.isMounted){let{next:N,bu:H,u:B,parent:G,vnode:Y}=d;{const pn=Hc(d);if(pn){N&&(N.el=Y.el,ae(d,N,P)),pn.asyncDep.then(()=>{d.isUnmounted||S()});return}}let ce=N,pe;Wt(d,!1),N?(N.el=Y.el,ae(d,N,P)):N=Y,H&&Rr(H),(pe=N.props&&N.props.onVnodeBeforeUpdate)&&Ye(pe,G,N,Y),Wt(d,!0);const we=Ps(d),je=d.subTree;d.subTree=we,I(je,we,f(je.el),y(je),d,v,T),N.el=we.el,ce===null&&rf(d,we.el),B&&Le(B,v),(pe=N.props&&N.props.onVnodeUpdated)&&Le(()=>Ye(pe,G,N,Y),v)}else{let N;const{el:H,props:B}=p,{bm:G,m:Y,parent:ce}=d,pe=kr(p);if(Wt(d,!1),G&&Rr(G),!pe&&(N=B&&B.onVnodeBeforeMount)&&Ye(N,ce,p),Wt(d,!0),H&&he){const we=()=>{d.subTree=Ps(d),he(H,d.subTree,d,v,null)};pe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=Ps(d);I(null,we,m,b,d,v,T),p.el=we.el}if(Y&&Le(Y,v),!pe&&(N=B&&B.onVnodeMounted)){const we=p;Le(()=>Ye(N,ce,we),v)}(p.shapeFlag&256||ce&&kr(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Le(d.a,v),d.isMounted=!0,p=m=b=null}},C=d.effect=new Ai(S,Be,()=>xi(w),d.scope),w=d.update=()=>{C.dirty&&C.run()};w.id=d.uid,Wt(d,!0),w()},ae=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,xf(d,p.props,b,m),Ff(d,p.children,m),an(),Eo(d),cn()},ne=(d,p,m,b,v,T,P,S,C=!1)=>{const w=d&&d.children,N=d?d.shapeFlag:0,H=p.children,{patchFlag:B,shapeFlag:G}=p;if(B>0){if(B&128){pt(w,H,m,b,v,T,P,S,C);return}else if(B&256){st(w,H,m,b,v,T,P,S,C);return}}G&8?(N&16&&Te(w,v,T),H!==w&&u(m,H)):N&16?G&16?pt(w,H,m,b,v,T,P,S,C):Te(w,v,T,!0):(N&8&&u(m,""),G&16&&A(H,m,b,v,T,P,S,C))},st=(d,p,m,b,v,T,P,S,C)=>{d=d||vn,p=p||vn;const w=d.length,N=p.length,H=Math.min(w,N);let B;for(B=0;B<H;B++){const G=p[B]=C?It(p[B]):Xe(p[B]);I(d[B],G,m,null,v,T,P,S,C)}w>N?Te(d,v,T,!0,!1,H):A(p,m,b,v,T,P,S,C,H)},pt=(d,p,m,b,v,T,P,S,C)=>{let w=0;const N=p.length;let H=d.length-1,B=N-1;for(;w<=H&&w<=B;){const G=d[w],Y=p[w]=C?It(p[w]):Xe(p[w]);if(Jt(G,Y))I(G,Y,m,null,v,T,P,S,C);else break;w++}for(;w<=H&&w<=B;){const G=d[H],Y=p[B]=C?It(p[B]):Xe(p[B]);if(Jt(G,Y))I(G,Y,m,null,v,T,P,S,C);else break;H--,B--}if(w>H){if(w<=B){const G=B+1,Y=G<N?p[G].el:b;for(;w<=B;)I(null,p[w]=C?It(p[w]):Xe(p[w]),m,Y,v,T,P,S,C),w++}}else if(w>B)for(;w<=H;)Ne(d[w],v,T,!0),w++;else{const G=w,Y=w,ce=new Map;for(w=Y;w<=B;w++){const xe=p[w]=C?It(p[w]):Xe(p[w]);xe.key!=null&&ce.set(xe.key,w)}let pe,we=0;const je=B-Y+1;let pn=!1,co=0;const Mn=new Array(je);for(w=0;w<je;w++)Mn[w]=0;for(w=G;w<=H;w++){const xe=d[w];if(we>=je){Ne(xe,v,T,!0);continue}let Je;if(xe.key!=null)Je=ce.get(xe.key);else for(pe=Y;pe<=B;pe++)if(Mn[pe-Y]===0&&Jt(xe,p[pe])){Je=pe;break}Je===void 0?Ne(xe,v,T,!0):(Mn[Je-Y]=w+1,Je>=co?co=Je:pn=!0,I(xe,p[Je],m,null,v,T,P,S,C),we++)}const lo=pn?jf(Mn):vn;for(pe=lo.length-1,w=je-1;w>=0;w--){const xe=Y+w,Je=p[xe],uo=xe+1<N?p[xe+1].el:b;Mn[w]===0?I(null,Je,m,uo,v,T,P,S,C):pn&&(pe<0||w!==lo[pe]?qe(Je,m,uo,2):pe--)}}},qe=(d,p,m,b,v=null)=>{const{el:T,type:P,transition:S,children:C,shapeFlag:w}=d;if(w&6){qe(d.component.subTree,p,m,b);return}if(w&128){d.suspense.move(p,m,b);return}if(w&64){P.move(d,p,m,U);return}if(P===_e){r(T,p,m);for(let H=0;H<C.length;H++)qe(C[H],p,m,b);r(d.anchor,p,m);return}if(P===Ls){F(d,p,m);return}if(b!==2&&w&1&&S)if(b===0)S.beforeEnter(T),r(T,p,m),Le(()=>S.enter(T),v);else{const{leave:H,delayLeave:B,afterLeave:G}=S,Y=()=>r(T,p,m),ce=()=>{H(T,()=>{Y(),G&&G()})};B?B(T,Y,ce):ce()}else r(T,p,m)},Ne=(d,p,m,b=!1,v=!1)=>{const{type:T,props:P,ref:S,children:C,dynamicChildren:w,shapeFlag:N,patchFlag:H,dirs:B}=d;if(S!=null&&si(S,null,m,d,!0),N&256){p.ctx.deactivate(d);return}const G=N&1&&B,Y=!kr(d);let ce;if(Y&&(ce=P&&P.onVnodeBeforeUnmount)&&Ye(ce,p,d),N&6)vr(d.component,m,b);else{if(N&128){d.suspense.unmount(m,b);return}G&&jt(d,null,p,"beforeUnmount"),N&64?d.type.remove(d,p,m,v,U,b):w&&(T!==_e||H>0&&H&64)?Te(w,p,m,!1,!0):(T===_e&&H&384||!v&&N&16)&&Te(C,p,m),b&&dn(d)}(Y&&(ce=P&&P.onVnodeUnmounted)||G)&&Le(()=>{ce&&Ye(ce,p,d),G&&jt(d,null,p,"unmounted")},m)},dn=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===_e){hn(m,b);return}if(p===Ls){K(d);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:S}=v,C=()=>P(m,T);S?S(d.el,T,C):C()}else T()},hn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},vr=(d,p,m)=>{const{bum:b,scope:v,update:T,subTree:P,um:S}=d;b&&Rr(b),v.stop(),T&&(T.active=!1,Ne(P,d,p,m)),S&&Le(S,p),Le(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(d,p,m,b=!1,v=!1,T=0)=>{for(let P=T;P<d.length;P++)Ne(d[P],p,m,b,v)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let O=!1;const R=(d,p,m)=>{d==null?p._vnode&&Ne(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),O||(O=!0,Eo(),Sc(),O=!1),p._vnode=d},U={p:I,um:Ne,m:qe,r:dn,mt:Se,mc:A,pc:ne,pbc:z,n:y,o:t};let re,he;return e&&([re,he]=e(U)),{render:R,hydrate:re,createApp:Lf(R,re)}}function Ns({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vi(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),n||Vi(o,a)),a.type===hs&&(a.el=o.el)}}function jf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hc(e)}const Wf=t=>t.__isTeleport,Kn=t=>t&&(t.disabled||t.disabled===""),Lo=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Mo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ii=(t,e)=>{const n=t&&t.to;return ye(n)?e?e(n):null:n},Kf={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:g,querySelector:E,createText:I,createComment:L}}=l,k=Kn(e.props);let{shapeFlag:$,children:F,dynamicChildren:K}=e;if(t==null){const j=e.el=I(""),x=e.anchor=I("");g(j,n,r),g(x,n,r);const J=e.target=ii(e.props,E),A=e.targetAnchor=I("");J&&(g(A,J),o==="svg"||Lo(J)?o="svg":(o==="mathml"||Mo(J))&&(o="mathml"));const M=(z,ee)=>{$&16&&u(F,z,ee,s,i,o,a,c)};k?M(n,x):J&&M(J,A)}else{e.el=t.el;const j=e.anchor=t.anchor,x=e.target=t.target,J=e.targetAnchor=t.targetAnchor,A=Kn(t.props),M=A?n:x,z=A?j:J;if(o==="svg"||Lo(x)?o="svg":(o==="mathml"||Mo(x))&&(o="mathml"),K?(h(t.dynamicChildren,K,M,s,i,o,a),Vi(t,e,!0)):c||f(t,e,M,z,s,i,o,a,!1),k)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Cr(e,n,j,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ee=e.target=ii(e.props,E);ee&&Cr(e,ee,null,l,0)}else A&&Cr(e,x,J,l,1)}jc(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=t;if(f&&i(u),o&&i(l),a&16){const g=o||!Kn(h);for(let E=0;E<c.length;E++){const I=c[E];s(I,e,n,g,!!I.dynamicChildren)}}},move:Cr,hydrate:zf};function Cr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&r(o,e,n),(!f||Kn(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);f&&r(a,e,n)}function zf(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=ii(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Kn(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,r,s,i)}jc(e)}return e.anchor&&o(e.anchor)}const Hi=Kf;function jc(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const _e=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),zn=[];let We=null;function oe(t=!1){zn.push(We=t?null:[])}function Gf(){zn.pop(),We=zn[zn.length-1]||null}let er=1;function Do(t){er+=t}function Wc(t){return t.dynamicChildren=er>0?We||vn:null,Gf(),er>0&&We&&We.push(t),t}function ge(t,e,n,r,s,i){return Wc(_(t,e,n,r,s,i,!0))}function tn(t,e,n,r,s){return Wc(fe(t,e,n,r,s,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const ps="__vInternal",Kc=({key:t})=>t??null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ee(t)||q(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kc(e),ref:e&&Or(e),scopeId:ls,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(ji(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),er>0&&!o&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const fe=qf;function qf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sf)&&(t=Ke),oi(t)){const a=Ft(t,e,!0);return n&&ji(a,n),er>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(t)]=a:We.push(a)),a.patchFlag|=-2,a}if(od(t)&&(t=t.__vccOpts),e){e=Jf(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=rs(a)),ue(c)&&(_c(c)&&!V(c)&&(c=be({},c)),e.style=Ci(c))}const o=ye(t)?1:af(t)?128:Wf(t)?64:ue(t)?4:q(t)?2:0;return _(t,e,n,r,s,o,i,!0)}function Jf(t){return t?_c(t)||ps in t?be({},t):t:null}function Ft(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Yf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kc(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Or(e)):[s,Or(e)]:Or(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ft(t.ssContent),ssFallback:t.ssFallback&&Ft(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Me(t=" ",e=0){return fe(hs,null,t,e)}function gs(t="",e=!1){return e?(oe(),tn(Ke,null,t)):fe(Ke,null,t)}function Xe(t){return t==null||typeof t=="boolean"?fe(Ke):V(t)?fe(_e,null,t.slice()):typeof t=="object"?It(t):fe(hs,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ft(t)}function ji(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ji(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ps in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rs([e.class,r.class]));else if(s==="style")e.style=Ci([e.style,r.style]);else if(Zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){He(t,e,7,[n,r])}const Xf=xc();let Qf=0;function Zf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xf,i={uid:Qf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(r,s),emitsOptions:Cc(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zu.bind(null,i),t.ce&&t.ce(i),i}let Ie=null;const ed=()=>Ie||Ae;let jr,ai;{const t=Xa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jr=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),ai=e("__VUE_SSR_SETTERS__",n=>ms=n)}const ur=t=>{const e=Ie;return jr(t),t.scope.on(),()=>{t.scope.off(),jr(e)}},xo=()=>{Ie&&Ie.scope.off(),jr(null)};function zc(t){return t.vnode.shapeFlag&4}let ms=!1;function td(t,e=!1){e&&ai(e);const{props:n,children:r}=t.vnode,s=zc(t);Df(t,n,s,e),$f(t,r);const i=s?nd(t,e):void 0;return e&&ai(!1),i}function nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=os(new Proxy(t.ctx,Cf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?sd(t):null,i=ur(t);an();const o=Mt(r,t,0,[t.props,s]);if(cn(),i(),qa(o)){if(o.then(xo,xo),e)return o.then(a=>{Uo(t,a,e)}).catch(a=>{as(a,t,0)});t.asyncDep=o}else Uo(t,o,e)}else Gc(t,e)}function Uo(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Ec(e)),Gc(t,n)}let $o;function Gc(t,e,n){const r=t.type;if(!t.render){if(!e&&$o&&!r.render){const s=r.template||Fi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=be(be({isCustomElement:i,delimiters:a},o),c);r.render=$o(s,l)}}t.render=r.render||Be}{const s=ur(t);an();try{Af(t)}finally{cn(),s()}}}function rd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}}))}function sd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rd(t)},slots:t.slots,emit:t.emit,expose:e}}function _s(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ec(os(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}}))}function id(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function od(t){return q(t)&&"__vccOpts"in t}const ve=(t,e)=>Vu(t,e,ms);function Wi(t,e,n){const r=arguments.length;return r===2?ue(e)&&!V(e)?oi(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oi(n)&&(n=[n]),fe(t,e,n))}const ad="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cd="http://www.w3.org/2000/svg",ld="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,Fo=St&&St.createElement("template"),ud={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?St.createElementNS(cd,t):e==="mathml"?St.createElementNS(ld,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fo.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Fo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mt="transition",Dn="animation",tr=Symbol("_vtc"),Ki=(t,{slots:e})=>Wi(gf,fd(t),e);Ki.displayName="Transition";const qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ki.props=be({},Pc,qc);const Kt=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bo=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function fd(t){const e={};for(const D in t)D in qc||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=dd(s),I=E&&E[0],L=E&&E[1],{onBeforeEnter:k,onEnter:$,onEnterCancelled:F,onLeave:K,onLeaveCancelled:j,onBeforeAppear:x=k,onAppear:J=$,onAppearCancelled:A=F}=e,M=(D,te,Se)=>{zt(D,te?u:a),zt(D,te?l:o),Se&&Se()},z=(D,te)=>{D._isLeaving=!1,zt(D,f),zt(D,g),zt(D,h),te&&te()},ee=D=>(te,Se)=>{const ke=D?J:$,X=()=>M(te,D,Se);Kt(ke,[te,X]),Vo(()=>{zt(te,D?c:i),_t(te,D?u:a),Bo(ke)||Ho(te,r,I,X)})};return be(e,{onBeforeEnter(D){Kt(k,[D]),_t(D,i),_t(D,o)},onBeforeAppear(D){Kt(x,[D]),_t(D,c),_t(D,l)},onEnter:ee(!1),onAppear:ee(!0),onLeave(D,te){D._isLeaving=!0;const Se=()=>z(D,te);_t(D,f),gd(),_t(D,h),Vo(()=>{D._isLeaving&&(zt(D,f),_t(D,g),Bo(K)||Ho(D,r,L,Se))}),Kt(K,[D,Se])},onEnterCancelled(D){M(D,!1),Kt(F,[D])},onAppearCancelled(D){M(D,!0),Kt(A,[D])},onLeaveCancelled(D){z(D),Kt(j,[D])}})}function dd(t){if(t==null)return null;if(ue(t))return[Ms(t.enter),Ms(t.leave)];{const e=Ms(t);return[e,e]}}function Ms(t){return fu(t)}function _t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[tr]||(t[tr]=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[tr];n&&(n.delete(e),n.size||(t[tr]=void 0))}function Vo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hd=0;function Ho(t,e,n,r){const s=t._endId=++hd,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=pd(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=g=>{g.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function pd(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${mt}Delay`),i=r(`${mt}Duration`),o=jo(s,i),a=r(`${Dn}Delay`),c=r(`${Dn}Duration`),l=jo(a,c);let u=null,f=0,h=0;e===mt?o>0&&(u=mt,f=o,h=i.length):e===Dn?l>0&&(u=Dn,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?mt:Dn:null,h=u?u===mt?i.length:c.length:0);const g=u===mt&&/\b(transform|all)(,|$)/.test(r(`${mt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function jo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Wo(n)+Wo(t[r])))}function Wo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function gd(){return document.body.offsetHeight}function md(t,e,n){const r=t[tr];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wr=Symbol("_vod"),Jc=Symbol("_vsh"),Ve={beforeMount(t,{value:e},{transition:n}){t[Wr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),xn(t,!0),r.enter(t)):r.leave(t,()=>{xn(t,!1)}):xn(t,e))},beforeUnmount(t,{value:e}){xn(t,e)}};function xn(t,e){t.style.display=e?t[Wr]:"none",t[Jc]=!e}const _d=Symbol(""),vd=/(^|;)\s*display\s*:/;function yd(t,e,n){const r=t.style,s=ye(n);let i=!1;if(n&&!s){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const o in e)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(i=!0),Nr(r,o,n[o])}else if(s){if(e!==n){const o=r[_d];o&&(n+=";"+o),r.cssText=n,i=vd.test(n)}}else e&&t.removeAttribute("style");Wr in t&&(t[Wr]=i?r.display:"",t[Jc]&&(r.display="none"))}const Ko=/\s*!important$/;function Nr(t,e,n){if(V(n))n.forEach(r=>Nr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bd(t,e);Ko.test(n)?t.setProperty(on(r),n.replace(Ko,""),"important"):t[r]=n}}const zo=["Webkit","Moz","ms"],Ds={};function bd(t,e){const n=Ds[e];if(n)return n;let r=nt(e);if(r!=="filter"&&r in t)return Ds[e]=r;r=ns(r);for(let s=0;s<zo.length;s++){const i=zo[s]+r;if(i in t)return Ds[e]=i}return e}const Go="http://www.w3.org/1999/xlink";function Ed(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,e.slice(6,e.length)):t.setAttributeNS(Go,e,n);else{const i=_u(e);n==null||i&&!Qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function wd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Qa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function Id(t,e,n,r){t.removeEventListener(e,n,r)}const qo=Symbol("_vei");function Sd(t,e,n,r,s=null){const i=t[qo]||(t[qo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Td(e);if(r){const l=i[e]=Rd(r,s);Yt(t,a,l,c)}else o&&(Id(t,a,o,c),i[e]=void 0)}}const Jo=/(?:Once|Passive|Capture)$/;function Td(t){let e;if(Jo.test(t)){e={};let r;for(;r=t.match(Jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let xs=0;const Cd=Promise.resolve(),Ad=()=>xs||(Cd.then(()=>xs=0),xs=Date.now());function Rd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(Pd(r,n.value),e,5,[r])};return n.value=t,n.attached=Ad(),n}function Pd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kd=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?md(t,r,l):e==="style"?yd(t,n,r):Zr(e)?Ii(e)||Sd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Od(t,e,r,l))?wd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ed(t,e,r,l))};function Od(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yo(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yo(e)&&ye(n)?!1:e in t}const Kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Rr(e,n):e};function Nd(t){t.target.composing=!0}function Xo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const In=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[In]=Kr(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gs(a)),t[In](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",Nd),Yt(t,"compositionend",Xo),Yt(t,"change",Xo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[In]=Kr(i),t.composing)return;const o=s||t.type==="number"?Gs(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Qo={deep:!0,created(t,e,n){t[In]=Kr(n),Yt(t,"change",()=>{const r=t._modelValue,s=Ld(t),i=t.checked,o=t[In];if(V(r)){const a=Za(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(es(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Yc(t,i))})},mounted:Zo,beforeUpdate(t,e,n){t[In]=Kr(n),Zo(t,e,n)}};function Zo(t,{value:e,oldValue:n},r){t._modelValue=e,V(e)?t.checked=Za(e,r.props.value)>-1:es(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ss(e,Yc(t,!0)))}function Ld(t){return"_value"in t?t._value:t.value}function Yc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Md=["ctrl","shift","alt","meta"],Dd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Md.some(n=>t[`${n}Key`]&&!e.includes(n))},Xc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Dd[e[o]];if(a&&a(s,e))return}return t(s,...i)})},xd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ud=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=on(s.key);if(e.some(o=>o===i||xd[o]===i))return t(s)})},$d=be({patchProp:kd},ud);let ea;function Fd(){return ea||(ea=Bf($d))}const Bd=(...t)=>{const e=Fd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hd(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Vd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hd(t){return ye(t)?document.querySelector(t):t}var jd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qc;const vs=t=>Qc=t,Zc=Symbol();function ci(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gn||(Gn={}));function Wd(){const t=nc(!0),e=t.run(()=>se({}));let n=[],r=[];const s=os({install(i){vs(s),s._a=i,i.provide(Zc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!jd?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const el=()=>{};function ta(t,e,n,r=el){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&rc()&&bu(s),s}function gn(t,...e){t.slice().forEach(n=>{n(...e)})}const Kd=t=>t();function li(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ci(s)&&ci(r)&&t.hasOwnProperty(n)&&!Ee(r)&&!Nt(r)?t[n]=li(s,r):t[n]=r}return t}const zd=Symbol();function Gd(t){return!ci(t)||!t.hasOwnProperty(zd)}const{assign:bt}=Object;function qd(t){return!!(Ee(t)&&t.effect)}function Jd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Ku(n.state.value[t]);return bt(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=os(ve(()=>{vs(n);const g=n._s.get(t);return o[h].call(g,g)})),f),{}))}return c=tl(t,l,e,n,r,!0),c}function tl(t,e,n={},r,s,i){let o;const a=bt({actions:{}},n),c={deep:!0};let l,u,f=[],h=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),se({});let I;function L(A){let M;l=u=!1,typeof A=="function"?(A(r.state.value[t]),M={type:Gn.patchFunction,storeId:t,events:g}):(li(r.state.value[t],A),M={type:Gn.patchObject,payload:A,storeId:t,events:g});const z=I=Symbol();Di().then(()=>{I===z&&(l=!0)}),u=!0,gn(f,M,r.state.value[t])}const k=i?function(){const{state:M}=n,z=M?M():{};this.$patch(ee=>{bt(ee,z)})}:el;function $(){o.stop(),f=[],h=[],r._s.delete(t)}function F(A,M){return function(){vs(r);const z=Array.from(arguments),ee=[],D=[];function te(X){ee.push(X)}function Se(X){D.push(X)}gn(h,{args:z,name:A,store:j,after:te,onError:Se});let ke;try{ke=M.apply(this&&this.$id===t?this:j,z)}catch(X){throw gn(D,X),X}return ke instanceof Promise?ke.then(X=>(gn(ee,X),X)).catch(X=>(gn(D,X),Promise.reject(X))):(gn(ee,ke),ke)}}const K={_p:r,$id:t,$onAction:ta.bind(null,h),$patch:L,$reset:k,$subscribe(A,M={}){const z=ta(f,A,M.detached,()=>ee()),ee=o.run(()=>En(()=>r.state.value[t],D=>{(M.flush==="sync"?u:l)&&A({storeId:t,type:Gn.direct,events:g},D)},bt({},c,M)));return z},$dispose:$},j=cr(K);r._s.set(t,j);const J=(r._a&&r._a.runWithContext||Kd)(()=>r._e.run(()=>(o=nc()).run(e)));for(const A in J){const M=J[A];if(Ee(M)&&!qd(M)||Nt(M))i||(E&&Gd(M)&&(Ee(M)?M.value=E[A]:li(M,E[A])),r.state.value[t][A]=M);else if(typeof M=="function"){const z=F(A,M);J[A]=z,a.actions[A]=M}}return bt(j,J),bt(Q(j),J),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:A=>{L(M=>{bt(M,A)})}}),r._p.forEach(A=>{bt(j,o.run(()=>A({store:j,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(j.$state,E),l=!0,u=!0,j}function Yd(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Mf();return a=a||(l?Re(Zc,null):null),a&&vs(a),a=Qc,a._s.has(r)||(i?tl(r,e,s,a):Jd(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof document<"u";function Xd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Us(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const qn=()=>{},ze=Array.isArray,nl=/#/g,Qd=/&/g,Zd=/\//g,eh=/=/g,th=/\?/g,rl=/\+/g,nh=/%5B/g,rh=/%5D/g,sl=/%5E/g,sh=/%60/g,il=/%7B/g,ih=/%7C/g,ol=/%7D/g,oh=/%20/g;function zi(t){return encodeURI(""+t).replace(ih,"|").replace(nh,"[").replace(rh,"]")}function ah(t){return zi(t).replace(il,"{").replace(ol,"}").replace(sl,"^")}function ui(t){return zi(t).replace(rl,"%2B").replace(oh,"+").replace(nl,"%23").replace(Qd,"%26").replace(sh,"`").replace(il,"{").replace(ol,"}").replace(sl,"^")}function ch(t){return ui(t).replace(eh,"%3D")}function lh(t){return zi(t).replace(nl,"%23").replace(th,"%3F")}function uh(t){return t==null?"":lh(t).replace(Zd,"%2F")}function nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fh=/\/$/,dh=t=>t.replace(fh,"");function $s(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function hh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function na(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ph(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pn(e.matched[r],n.matched[s])&&al(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function al(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gh(t[n],e[n]))return!1;return!0}function gh(t,e){return ze(t)?ra(t,e):ze(e)?ra(e,t):t===e}function ra(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var rr;(function(t){t.pop="pop",t.push="push"})(rr||(rr={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function _h(t){if(!t)if(mn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dh(t)}const vh=/^[^#]+#/;function yh(t,e){return t.replace(vh,"#")+e}function bh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ys=()=>({left:window.scrollX,top:window.scrollY});function Eh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sa(t,e){return(history.state?history.state.position-e:-1)+t}const fi=new Map;function wh(t,e){fi.set(t,e)}function Ih(t){const e=fi.get(t);return fi.delete(t),e}let Sh=()=>location.protocol+"//"+location.host;function cl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),na(c,"")}return na(n,t)+r+s}function Th(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=cl(t,location),E=n.value,I=e.value;let L=0;if(h){if(n.value=g,e.value=h,o&&o===E){o=null;return}L=I?h.position-I.position:0}else r(g);s.forEach(k=>{k(n.value,E,{delta:L,type:rr.pop,direction:L?L>0?Jn.forward:Jn.back:Jn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const E=s.indexOf(h);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(ie({},h.state,{scroll:ys()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ia(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ys():null}}function Ch(t){const{history:e,location:n}=window,r={value:cl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Sh()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=ie({},e.state,ia(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ie({},s.value,e.state,{forward:c,scroll:ys()});i(u.current,u,!0);const f=ie({},ia(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ah(t){t=_h(t);const e=Ch(t),n=Th(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:t,go:r,createHref:yh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rh(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Ah(t)}function Ph(t){return typeof t=="string"||t&&typeof t=="object"}function ll(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ul=Symbol("");var oa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oa||(oa={}));function kn(t,e){return ie(new Error,{type:t,[ul]:!0},e)}function it(t,e){return t instanceof Error&&ul in t&&(e==null||!!(t.type&e))}const aa="[^/]+?",kh={sensitive:!1,strict:!1,start:!0,end:!0},Oh=/[.+*?^${}()[\]/\\]/g;function Nh(t,e){const n=ie({},kh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Oh,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:I,optional:L,regexp:k}=h;i.push({name:E,repeatable:I,optional:L});const $=k||aa;if($!==aa){g+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${E}" (${$}): `+K.message)}}let F=I?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(F=L&&l.length<2?`(?:/${F})`:"/"+F),L&&(F+="?"),s+=F,g+=20,L&&(g+=-8),I&&(g+=-20),$===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",E=i[h-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:I,optional:L}=g,k=E in l?l[E]:"";if(ze(k)&&!I)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const $=ze(k)?k.join("/"):k;if(!$)if(L)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=$}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Lh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Lh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ca(r))return 1;if(ca(s))return-1}return s.length-r.length}function ca(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dh={type:0,value:""},xh=/[a-zA-Z0-9_]/;function Uh(t){if(!t)return[[]];if(t==="/")return[[Dh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:xh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function $h(t,e,n){const r=Nh(Uh(t.path),n),s=ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fh(t,e){const n=[],r=new Map;e=fa({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const g=!h,E=Bh(u);E.aliasOf=h&&h.record;const I=fa(e,u),L=[E];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of F)L.push(ie({},E,{components:h?h.record.components:E.components,path:K,aliasOf:h?h.record:E}))}let k,$;for(const F of L){const{path:K}=F;if(f&&K[0]!=="/"){const j=f.record.path,x=j[j.length-1]==="/"?"":"/";F.path=f.record.path+(K&&x+K)}if(k=$h(F,f,I),h?h.alias.push(k):($=$||k,$!==k&&$.alias.push(k),g&&u.name&&!ua(k)&&o(u.name)),E.children){const j=E.children;for(let x=0;x<j.length;x++)i(j[x],k,h&&h.children[x])}h=h||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return $?()=>{o($)}:qn}function o(u){if(ll(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Mh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!fl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ua(u)&&r.set(u.record.name,u)}function l(u,f){let h,g={},E,I;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw kn(1,{location:u});I=h.record.name,g=ie(la(f.params,h.keys.filter($=>!$.optional).concat(h.parent?h.parent.keys.filter($=>$.optional):[]).map($=>$.name)),u.params&&la(u.params,h.keys.map($=>$.name))),E=h.stringify(g)}else if(u.path!=null)E=u.path,h=n.find($=>$.re.test(E)),h&&(g=h.parse(E),I=h.record.name);else{if(h=f.name?r.get(f.name):n.find($=>$.re.test(f.path)),!h)throw kn(1,{location:u,currentLocation:f});I=h.record.name,g=ie({},f.params,u.params),E=h.stringify(g)}const L=[];let k=h;for(;k;)L.unshift(k.record),k=k.parent;return{name:I,path:E,params:g,matched:L,meta:Hh(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function la(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Vh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ua(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hh(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function fa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fl(t,e){return e.children.some(n=>n===t||fl(t,n))}function jh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rl," "),o=i.indexOf("="),a=nr(o<0?i:i.slice(0,o)),c=o<0?null:nr(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function da(t){let e="";for(let n in t){const r=t[n];if(n=ch(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&ui(i)):[r&&ui(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kh=Symbol(""),ha=Symbol(""),bs=Symbol(""),Gi=Symbol(""),di=Symbol("");function Un(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(kn(4,{from:n,to:e})):h instanceof Error?c(h):Ph(h)?c(kn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Fs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(zh(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Tt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Xd(u)?u.default:u;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Tt(g,n,r,o,a,s)()}))}}return i}function zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pa(t){const e=Re(bs),n=Re(Gi),r=ve(()=>e.resolve(Lt(t.to))),s=ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Pn.bind(null,u));if(h>-1)return h;const g=ga(c[l-2]);return l>1&&ga(u)===g&&f[f.length-1].path!==g?f.findIndex(Pn.bind(null,c[l-2])):h}),i=ve(()=>s.value>-1&&Yh(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&al(n.params,r.value.params));function a(c={}){return Jh(c)?e[Lt(t.replace)?"replace":"push"](Lt(t.to)).catch(qn):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gh=Nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pa,setup(t,{slots:e}){const n=cr(pa(t)),{options:r}=Re(bs),s=ve(()=>({[ma(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ma(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qh=Gh;function Jh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ga(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ma=(t,e,n)=>t??e??n,Xh=Nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Re(di),s=ve(()=>t.route||r.value),i=Re(ha,0),o=ve(()=>{let l=Lt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ve(()=>s.value.matched[o.value]);Wn(ha,ve(()=>o.value+1)),Wn(Kh,a),Wn(di,s);const c=se();return En(()=>[c.value,a.value,t.name],([l,u,f],[h,g,E])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Pn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return _a(n.default,{Component:h,route:l});const g=f.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,L=Wi(h,ie({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return _a(n.default,{Component:L,route:l})||L}}});function _a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qh=Xh;function Zh(t){const e=Fh(t.routes,t),n=t.parseQuery||jh,r=t.stringifyQuery||da,s=t.history,i=Un(),o=Un(),a=Un(),c=Hu(vt);let l=vt;mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Us.bind(null,y=>""+y),f=Us.bind(null,uh),h=Us.bind(null,nr);function g(y,O){let R,U;return ll(y)?(R=e.getRecordMatcher(y),U=O):U=y,e.addRoute(U,R)}function E(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function I(){return e.getRoutes().map(y=>y.record)}function L(y){return!!e.getRecordMatcher(y)}function k(y,O){if(O=ie({},O||c.value),typeof y=="string"){const p=$s(n,y,O.path),m=e.resolve({path:p.path},O),b=s.createHref(p.fullPath);return ie(p,m,{params:h(m.params),hash:nr(p.hash),redirectedFrom:void 0,href:b})}let R;if(y.path!=null)R=ie({},y,{path:$s(n,y.path,O.path).path});else{const p=ie({},y.params);for(const m in p)p[m]==null&&delete p[m];R=ie({},y,{params:f(p)}),O.params=f(O.params)}const U=e.resolve(R,O),re=y.hash||"";U.params=u(h(U.params));const he=hh(r,ie({},y,{hash:ah(re),path:U.path})),d=s.createHref(he);return ie({fullPath:he,hash:re,query:r===da?Wh(y.query):y.query||{}},U,{redirectedFrom:void 0,href:d})}function $(y){return typeof y=="string"?$s(n,y,c.value.path):ie({},y)}function F(y,O){if(l!==y)return kn(8,{from:O,to:y})}function K(y){return J(y)}function j(y){return K(ie($(y),{replace:!0}))}function x(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let U=typeof R=="function"?R(y):R;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=$(U):{path:U},U.params={}),ie({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function J(y,O){const R=l=k(y),U=c.value,re=y.state,he=y.force,d=y.replace===!0,p=x(R);if(p)return J(ie($(p),{state:typeof p=="object"?ie({},re,p.state):re,force:he,replace:d}),O||R);const m=R;m.redirectedFrom=O;let b;return!he&&ph(r,U,R)&&(b=kn(16,{to:m,from:U}),qe(U,U,!0,!1)),(b?Promise.resolve(b):z(m,U)).catch(v=>it(v)?it(v,2)?v:pt(v):ne(v,m,U)).then(v=>{if(v){if(it(v,2))return J(ie({replace:d},$(v.to),{state:typeof v.to=="object"?ie({},re,v.to.state):re,force:he}),O||m)}else v=D(m,U,!0,d,re);return ee(m,U,v),v})}function A(y,O){const R=F(y,O);return R?Promise.reject(R):Promise.resolve()}function M(y){const O=hn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function z(y,O){let R;const[U,re,he]=ep(y,O);R=Fs(U.reverse(),"beforeRouteLeave",y,O);for(const p of U)p.leaveGuards.forEach(m=>{R.push(Tt(m,y,O))});const d=A.bind(null,y,O);return R.push(d),Te(R).then(()=>{R=[];for(const p of i.list())R.push(Tt(p,y,O));return R.push(d),Te(R)}).then(()=>{R=Fs(re,"beforeRouteUpdate",y,O);for(const p of re)p.updateGuards.forEach(m=>{R.push(Tt(m,y,O))});return R.push(d),Te(R)}).then(()=>{R=[];for(const p of he)if(p.beforeEnter)if(ze(p.beforeEnter))for(const m of p.beforeEnter)R.push(Tt(m,y,O));else R.push(Tt(p.beforeEnter,y,O));return R.push(d),Te(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=Fs(he,"beforeRouteEnter",y,O,M),R.push(d),Te(R))).then(()=>{R=[];for(const p of o.list())R.push(Tt(p,y,O));return R.push(d),Te(R)}).catch(p=>it(p,8)?p:Promise.reject(p))}function ee(y,O,R){a.list().forEach(U=>M(()=>U(y,O,R)))}function D(y,O,R,U,re){const he=F(y,O);if(he)return he;const d=O===vt,p=mn?history.state:{};R&&(U||d?s.replace(y.fullPath,ie({scroll:d&&p&&p.scroll},re)):s.push(y.fullPath,re)),c.value=y,qe(y,O,R,d),pt()}let te;function Se(){te||(te=s.listen((y,O,R)=>{if(!vr.listening)return;const U=k(y),re=x(U);if(re){J(ie(re,{replace:!0}),U).catch(qn);return}l=U;const he=c.value;mn&&wh(sa(he.fullPath,R.delta),ys()),z(U,he).catch(d=>it(d,12)?d:it(d,2)?(J(d.to,U).then(p=>{it(p,20)&&!R.delta&&R.type===rr.pop&&s.go(-1,!1)}).catch(qn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ne(d,U,he))).then(d=>{d=d||D(U,he,!1),d&&(R.delta&&!it(d,8)?s.go(-R.delta,!1):R.type===rr.pop&&it(d,20)&&s.go(-1,!1)),ee(U,he,d)}).catch(qn)}))}let ke=Un(),X=Un(),ae;function ne(y,O,R){pt(y);const U=X.list();return U.length?U.forEach(re=>re(y,O,R)):console.error(y),Promise.reject(y)}function st(){return ae&&c.value!==vt?Promise.resolve():new Promise((y,O)=>{ke.add([y,O])})}function pt(y){return ae||(ae=!y,Se(),ke.list().forEach(([O,R])=>y?R(y):O()),ke.reset()),y}function qe(y,O,R,U){const{scrollBehavior:re}=t;if(!mn||!re)return Promise.resolve();const he=!R&&Ih(sa(y.fullPath,0))||(U||!R)&&history.state&&history.state.scroll||null;return Di().then(()=>re(y,O,he)).then(d=>d&&Eh(d)).catch(d=>ne(d,y,O))}const Ne=y=>s.go(y);let dn;const hn=new Set,vr={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:L,getRoutes:I,resolve:k,options:t,push:K,replace:j,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:st,install(y){const O=this;y.component("RouterLink",qh),y.component("RouterView",Qh),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(c)}),mn&&!dn&&c.value===vt&&(dn=!0,K(s.location).catch(re=>{}));const R={};for(const re in vt)Object.defineProperty(R,re,{get:()=>c.value[re],enumerable:!0});y.provide(bs,O),y.provide(Gi,gc(R)),y.provide(di,c);const U=y.unmount;hn.add(y),y.unmount=function(){hn.delete(y),hn.size<1&&(l=vt,te&&te(),te=null,c.value=vt,dn=!1,ae=!1),U()}}};function Te(y){return y.reduce((O,R)=>O.then(()=>M(R)),Promise.resolve())}return vr}function ep(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Pn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Pn(l,c))||s.push(c))}return[n,r,s]}function dl(){return Re(bs)}function tp(){return Re(Gi)}var va={};/**
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
 */const hl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},np=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new rp;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(t){const e=hl(t);return pl.encodeByteArray(e,!0)},gl=function(t){return sp(t).replace(/\./g,"")},ml=function(t){try{return pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const op=()=>ip().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof va>"u")return;const t=va.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ml(t[1]);return e&&JSON.parse(e)},qi=()=>{try{return op()||ap()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_l=()=>{var t;return(t=qi())===null||t===void 0?void 0:t.config},vl=t=>{var e;return(e=qi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function dp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _p="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_p,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,a,r)}}function vp(t,e){return t.replace(yp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yp=/\{\$([^}]+)}/g;function bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ya(i)&&ya(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ya(t){return t!==null&&typeof t=="object"}/**
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
 */function dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ep(t,e){const n=new wp(t,e);return n.subscribe.bind(n)}class wp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ip(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bs),s.error===void 0&&(s.error=Bs),s.complete===void 0&&(s.complete=Bs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new up;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tp(t){return t===Gt?void 0:t}function Cp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Rp={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Pp=le.INFO,kp={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Op=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Np=(t,e)=>e.some(n=>t instanceof n);let ba,Ea;function Lp(){return ba||(ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,hi=new WeakMap,El=new WeakMap,Vs=new WeakMap,Ji=new WeakMap;function Dp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bl.set(n,t)}).catch(()=>{}),Ji.set(e,t),e}function xp(t){if(hi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hi.set(t,e)}let pi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||El.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Up(t){pi=t(pi)}function $p(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return El.set(r,e.sort?e.sort():[e]),Dt(r)}:Mp().includes(t)?function(...e){return t.apply(Hs(this),e),Dt(bl.get(this))}:function(...e){return Dt(t.apply(Hs(this),e))}}function Fp(t){return typeof t=="function"?$p(t):(t instanceof IDBTransaction&&xp(t),Np(t,Lp())?new Proxy(t,pi):t)}function Dt(t){if(t instanceof IDBRequest)return Dp(t);if(Vs.has(t))return Vs.get(t);const e=Fp(t);return e!==t&&(Vs.set(t,e),Ji.set(e,t)),e}const Hs=t=>Ji.get(t);function Bp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Vp=["get","getKey","getAll","getAllKeys","count"],Hp=["put","add","delete","clear"],js=new Map;function wa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return js.set(e,i),i}Up(t=>({...t,get:(e,n,r)=>wa(e,n)||t.get(e,n,r),has:(e,n)=>!!wa(e,n)||t.has(e,n)}));/**
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
 */class jp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gi="@firebase/app",Ia="0.10.1";/**
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
 */const nn=new yl("@firebase/app"),Kp="@firebase/app-compat",zp="@firebase/analytics-compat",Gp="@firebase/analytics",qp="@firebase/app-check-compat",Jp="@firebase/app-check",Yp="@firebase/auth",Xp="@firebase/auth-compat",Qp="@firebase/database",Zp="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",rg="@firebase/installations-compat",sg="@firebase/messaging",ig="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",cg="@firebase/remote-config",lg="@firebase/remote-config-compat",ug="@firebase/storage",fg="@firebase/storage-compat",dg="@firebase/firestore",hg="@firebase/firestore-compat",pg="firebase",gg="10.11.0";/**
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
 */const mi="[DEFAULT]",mg={[gi]:"fire-core",[Kp]:"fire-core-compat",[Gp]:"fire-analytics",[zp]:"fire-analytics-compat",[Jp]:"fire-app-check",[qp]:"fire-app-check-compat",[Yp]:"fire-auth",[Xp]:"fire-auth-compat",[Qp]:"fire-rtdb",[Zp]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[rg]:"fire-iid-compat",[sg]:"fire-fcm",[ig]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[cg]:"fire-rc",[lg]:"fire-rc-compat",[ug]:"fire-gcs",[fg]:"fire-gcs-compat",[dg]:"fire-fst",[hg]:"fire-fst-compat","fire-js":"fire-js",[pg]:"fire-js-all"};/**
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
 */const Gr=new Map,_g=new Map,_i=new Map;function Sa(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sr(t){const e=t.name;if(_i.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of Gr.values())Sa(n,t);for(const n of _g.values())Sa(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t.settings!==void 0}/**
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
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new fr("app","Firebase",vg);/**
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
 */class yg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=gg;function Il(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=_l()),!n)throw xt.create("no-options");const i=Gr.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new Ap(s);for(const c of _i.values())o.addComponent(c);const a=new yg(n,r,o);return Gr.set(s,a),a}function bg(t=mi){const e=Gr.get(t);if(!e&&t===mi&&_l())return Il();if(!e)throw xt.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let s=(r=mg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}sr(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Eg="firebase-heartbeat-database",wg=1,ir="firebase-heartbeat-store";let Ws=null;function Sl(){return Ws||(Ws=Bp(Eg,wg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Ws}async function Ig(t){try{const n=(await Sl()).transaction(ir),r=await n.objectStore(ir).get(Tl(t));return await n.done,r}catch(e){if(e instanceof Bt)nn.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function Ta(t,e){try{const r=(await Sl()).transaction(ir,"readwrite");await r.objectStore(ir).put(e,Tl(t)),await r.done}catch(n){if(n instanceof Bt)nn.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(r.message)}}}function Tl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sg=1024,Tg=30*24*60*60*1e3;class Cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ca();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Tg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ca(),{heartbeatsToSend:r,unsentEntries:s}=Ag(this._heartbeatsCache.heartbeats),i=gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ca(){return new Date().toISOString().substring(0,10)}function Ag(t,e=Sg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Aa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Aa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ig(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Aa(t){return gl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Pg(t){sr(new On("platform-logger",e=>new jp(e),"PRIVATE")),sr(new On("heartbeat",e=>new Cg(e),"PRIVATE")),Sn(gi,Ia,t),Sn(gi,Ia,"esm2017"),Sn("fire-js","")}Pg("");var kg="firebase",Og="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(kg,Og,"app");function Yi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ng=Cl,Al=new fr("auth","Firebase",Cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new yl("@firebase/auth");function Lg(t,...e){qr.logLevel<=le.WARN&&qr.warn(`Auth (${hr}): ${t}`,...e)}function Lr(t,...e){qr.logLevel<=le.ERROR&&qr.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw Xi(t,...e)}function et(t,...e){return Xi(t,...e)}function Rl(t,e,n){const r=Object.assign(Object.assign({},Ng()),{[e]:n});return new fr("auth","Firebase",r).create(e,{appName:t.name})}function ut(t){return Rl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Al.create(t,...e)}function W(t,e,...n){if(!t)throw Xi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lr(e),new Error(e)}function ft(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mg(){return Ra()==="http:"||Ra()==="https:"}function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mg()||dp()||"connection"in navigator)?navigator.onLine:!0}function xg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=fp()||hp()}get(){return Dg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new pr(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,s={}){return kl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pl.fetch()(Ol(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function kl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ug),e);try{const s=new Bg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ar(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rl(t,u,l);Ge(t,u)}}catch(s){if(s instanceof Bt)throw s;Ge(t,"network-request-failed",{message:String(s)})}}async function gr(t,e,n,r,s={}){const i=await ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ol(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qi(t.config,s):`${t.config.apiScheme}://${s}`}function Fg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),$g.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}function Pa(t){return t!==void 0&&t.enterprise!==void 0}class Vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Hg(t,e){return ht(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function Nl(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wg(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Zi(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(Ks(s.auth_time)),issuedAtTime:Yn(Ks(s.iat)),expirationTime:Yn(Ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ks(t){return Number(t)*1e3}function Zi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ml(n);return s?JSON.parse(s):(Lr("Failed to decode base64 JWT payload"),null)}catch(s){return Lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ka(t){const e=Zi(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Kg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Nn(t,Nl(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ll(i.providerUserInfo):[],a=qg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new yi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Gg(t){const e=rt(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ll(t){return t.map(e=>{var{providerId:n}=e,r=Yi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(t,e){const n=await kl(t,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ol(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yg(t,e){return ht(t,"POST","/v2/accounts:revokeToken",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ka(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=ka(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Tn;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Nn(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wg(this,e)}reload(){return Gg(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await Nn(this,jg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:K,isAnonymous:j,providerData:x,stsTokenManager:J}=n;W(F&&J,e,"internal-error");const A=Tn.fromJSON(this.name,J);W(typeof F=="string",e,"internal-error"),yt(f,e.name),yt(h,e.name),W(typeof K=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),yt(g,e.name),yt(E,e.name),yt(I,e.name),yt(L,e.name),yt(k,e.name),yt($,e.name);const M=new at({uid:F,auth:e,email:h,emailVerified:K,displayName:f,isAnonymous:j,photoURL:E,phoneNumber:g,tenantId:I,stsTokenManager:A,createdAt:k,lastLoginAt:$});return x&&Array.isArray(x)&&(M.providerData=x.map(z=>Object.assign({},z))),L&&(M._redirectEventId=L),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Tn;s.updateFromServerResponse(n);const i=new at({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ll(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Tn;a.updateFromIdToken(r);const c=new at({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map;function ct(t){ft(t instanceof Function,"Expected a class definition");let e=Oa.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oa.set(t,e),e)}/**
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
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ml.type="NONE";const Na=Ml;/**
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
 */function Mr(t,e,n){return`firebase:${t}:${e}:${n}`}class Cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cn(ct(Na),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ct(Na);const o=Mr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=at._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Cn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Cn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ul(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fl(e))return"Blackberry";if(Bl(e))return"Webos";if(eo(e))return"Safari";if((e.includes("chrome/")||xl(e))&&!e.includes("edge/"))return"Chrome";if($l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dl(t=Pe()){return/firefox\//i.test(t)}function eo(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xl(t=Pe()){return/crios\//i.test(t)}function Ul(t=Pe()){return/iemobile/i.test(t)}function $l(t=Pe()){return/android/i.test(t)}function Fl(t=Pe()){return/blackberry/i.test(t)}function Bl(t=Pe()){return/webos/i.test(t)}function Es(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xg(t=Pe()){var e;return Es(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qg(){return pp()&&document.documentMode===10}function Vl(t=Pe()){return Es(t)||$l(t)||Bl(t)||Fl(t)||/windows phone/i.test(t)||Ul(t)}function Zg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e=[]){let n;switch(t){case"Browser":n=La(Pe());break;case"Worker":n=`${La(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class em{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tm(t,e={}){return ht(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
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
 */const nm=6;class rm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ma(this),this.idTokenSubscription=new Ma(this),this.beforeStateQueue=new em(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nl(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(ut(this));const n=e?rt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tm(this),n=new rm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Lg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fn(t){return rt(t)}class Ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ep(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function im(t){ws=t}function jl(t){return ws.loadJS(t)}function om(){return ws.recaptchaEnterpriseScript}function am(){return ws.gapiScript}function cm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lm="recaptcha-enterprise",um="NO_RECAPTCHA";class fm{constructor(e){this.type=lm,this.auth=fn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Hg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Vg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Pa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(um)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Pa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=om();c.length!==0&&(c+=a),jl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Da(t,e,n,r=!1){const s=new fm(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bi(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Da(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Da(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){const n=wl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;Ge(s,"already-initialized")}return n.initialize({options:e})}function hm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pm(t,e,n){const r=fn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Wl(e),{host:o,port:a}=gm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mm()}function Wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gm(t){const e=Wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xa(o)}}}function xa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function _m(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){return gr(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function bm(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends to{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new or(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new or(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(e,n,"signInWithPassword",vm);case"emailLink":return ym(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(e,r,"signUpPassword",_m);case"emailLink":return bm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e){return gr(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="http://localhost";class rn extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return An(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,An(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,An(e,n)}buildRequest(){const e={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Im(t){const e=Bn(Vn(t)).link,n=e?Bn(Vn(e)).deep_link_id:null,r=Bn(Vn(t)).deep_link_id;return(r?Bn(Vn(r)).link:null)||r||n||e||t}class no{constructor(e){var n,r,s,i,o,a;const c=Bn(Vn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=wm((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Im(e);try{return new no(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,n){return or._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=no.parseLink(n);return W(r,"argument-error"),or._fromEmailAndCode(e,r.code,r.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends Kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends mr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends mr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends mr{constructor(){super("twitter.com")}static credential(e,n){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(t,e){return gr(t,"POST","/v1/accounts:signUp",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await at._fromIdTokenResponse(e,r,s),o=Ua(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ua(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ua(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yr(e,n,r,s)}}function zl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(t,i,e,r):i})}async function Tm(t,e,n=!1){const r=await Nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}/**
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
 */async function Cm(t,e,n=!1){const{auth:r}=t;if(Ze(r.app))return Promise.reject(ut(r));const s="reauthenticate";try{const i=await Nn(t,zl(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Zi(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),sn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t,e,n=!1){if(Ze(t.app))return Promise.reject(ut(t));const r="signIn",s=await zl(t,r,e),i=await sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Am(t,e){return Gl(fn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){const e=fn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rm(t,e,n){if(Ze(t.app))return Promise.reject(ut(t));const r=fn(t),o=await bi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ql(t),c}),a=await sn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Pm(t,e,n){return Ze(t.app)?Promise.reject(ut(t)):Am(rt(t),Ln.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ql(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Nn(r,km(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nm(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Lm(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Mm(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function $a(t){return rt(t).signOut()}const Xr="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){const t=Pe();return eo(t)||Es(t)}const xm=1e3,Um=10;class Yl extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dm()&&Zg(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Um):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yl.type="LOCAL";const $m=Yl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Ql=Xl;/**
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
 */function Fm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Fm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ro("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Vm(t){tt().location.href=t}/**
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
 */function Zl(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Hm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wm(){return Zl()?self:null}/**
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
 */const eu="firebaseLocalStorageDb",Km=1,Qr="firebaseLocalStorage",tu="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ss(t,e){return t.transaction([Qr],e?"readwrite":"readonly").objectStore(Qr)}function zm(){const t=indexedDB.deleteDatabase(eu);return new _r(t).toPromise()}function Ei(){const t=indexedDB.open(eu,Km);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qr,{keyPath:tu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qr)?e(r):(r.close(),await zm(),e(await Ei()))})})}async function Fa(t,e,n){const r=Ss(t,!0).put({[tu]:e,value:n});return new _r(r).toPromise()}async function Gm(t,e){const n=Ss(t,!1).get(e),r=await new _r(n).toPromise();return r===void 0?null:r.value}function Ba(t,e){const n=Ss(t,!0).delete(e);return new _r(n).toPromise()}const qm=800,Jm=3;class nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ei(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(Wm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hm(),!this.activeServiceWorker)return;this.sender=new Bm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ei();return await Fa(e,Xr,"1"),await Ba(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ba(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ss(s,!1).getAll();return new _r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nu.type="LOCAL";const Ym=nu;new pr(3e4,6e4);/**
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
 */function Xm(t,e){return e?ct(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class so extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,n){return An(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qm(t){return Gl(t.auth,new so(t),t.bypassAuthState)}function Zm(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Cm(n,new so(t),t.bypassAuthState)}async function e_(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Tm(n,new so(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qm;case"linkViaPopup":case"linkViaRedirect":return e_;case"reauthViaPopup":case"reauthViaRedirect":return Zm;default:Ge(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new pr(2e3,1e4);class _n extends ru{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,t_.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="pendingRedirect",Dr=new Map;class r_ extends ru{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const r=await s_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(t,e){const n=a_(e),r=o_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function i_(t,e){Dr.set(t._key(),e)}function o_(t){return ct(t._redirectPersistence)}function a_(t){return Mr(n_,t.config.apiKey,t.name)}async function c_(t,e,n=!1){if(Ze(t.app))return Promise.reject(ut(t));const r=fn(t),s=Xm(r,e),o=await new r_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=10*60*1e3;class u_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!su(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Va(e))}saveEventToCache(e){this.cachedEventUids.add(Va(e)),this.lastProcessedEventTime=Date.now()}}function Va(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function su({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return su(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p_=/^https?/;async function g_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d_(t);for(const n of e)try{if(m_(n))return}catch{}Ge(t,"unauthorized-domain")}function m_(t){const e=vi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!p_.test(n))return!1;if(h_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const __=new pr(3e4,6e4);function Ha(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ha(),n(et(t,"network-request-failed"))},timeout:__.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=cm("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},jl(`${am()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xr=null,e})}let xr=null;function y_(t){return xr=xr||v_(t),xr}/**
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
 */const b_=new pr(5e3,15e3),E_="__/auth/iframe",w_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T_(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,w_):`https://${t.config.authDomain}/${E_}`,r={apiKey:e.apiKey,appName:t.name,v:hr},s=S_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dr(r).slice(1)}`}async function C_(t){const e=await y_(t),n=tt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:T_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},b_.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const A_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R_=500,P_=600,k_="_blank",O_="http://localhost";class ja{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N_(t,e,n,r=R_,s=P_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},A_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=xl(l)?k_:n),Dl(l)&&(e=e||O_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,E])=>`${h}${g}=${E},`,"");if(Xg(l)&&a!=="_self")return L_(e||"",a),new ja(null);const f=window.open(e||"",a,u);W(f,t,"popup-blocked");try{f.focus()}catch{}return new ja(f)}function L_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const M_="__/auth/handler",D_="emulator/auth/handler",x_=encodeURIComponent("fac");async function Wa(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(e instanceof Kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof mr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${x_}=${encodeURIComponent(c)}`:"";return`${U_(t)}?${dr(a).slice(1)}${l}`}function U_({config:t}){return t.emulator?Qi(t,D_):`https://${t.authDomain}/${M_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="webStorageSupport";class $_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=c_,this._overrideRedirectResult=i_}async _openPopup(e,n,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wa(e,n,r,vi(),s);return N_(e,o,ro())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wa(e,n,r,vi(),s);return Vm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C_(e),r=new u_(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vl()||eo()||Es()}}const F_=$_;var Ka="@firebase/auth",za="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H_(t){sr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(t)},l=new sm(r,s,i,c);return hm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sr(new On("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(r=>new B_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Ka,za,V_(t)),Sn(Ka,za,"esm2017")}/**
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
 */const j_=5*60,W_=vl("authIdTokenMaxAge")||j_;let Ga=null;const K_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W_)return;const s=n==null?void 0:n.token;Ga!==s&&(Ga=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function z_(t=bg()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dm(t,{popupRedirectResolver:F_,persistence:[Ym,$m,Ql]}),r=vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=K_(i.toString());Lm(n,o,()=>o(n.currentUser)),Nm(n,a=>o(a))}}const s=lp("auth");return s&&pm(n,`http://${s}`),n}function G_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}im({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H_("Browser");const q_={apiKey:"AIzaSyBm5CfzbOl8mYldxgN5giPFPImcuSQMEXA",authDomain:"online-shopping-mall-ba092.firebaseapp.com",projectId:"online-shopping-mall-ba092",storageBucket:"online-shopping-mall-ba092.appspot.com",messagingSenderId:"212110660805",appId:"1:212110660805:web:1c726ddeb383f52fcf4cac"},J_=Il(q_),$n=z_(J_),Ts=Yd("auth",()=>{const t=se(""),e=se(""),n=ve(()=>{if(e.value.includes("email-already"))return"電子郵件已被使用";if(e.value.includes("invalid-email"))return"無效的電子郵件";if(e.value.includes("weak-password"))return"密碼最少需要6個字";if(!e.value)return""}),r=ve(()=>{if(e.value!=="")return"錯誤的帳號或密碼"});Mm($n,a=>{a?t.value=a.displayName:t.value=""});async function s(a,c,l){try{e.value="";const u=await Rm($n,a,c);console.log(u.user),u.user&&await Om(u.user,{displayName:l}),await $a($n)}catch(u){e.value=u.code,console.log("註冊失敗",n.value)}}async function i(a,c){e.value="";try{const l=await Pm($n,a,c);t.value=l.user.displayName,console.log(l.user)}catch(l){e.value=l.code,console.log("登入失敗:",l.message)}}async function o(){try{await $a($n),t.value="",console.log("登出成功")}catch(a){console.log("登出失敗:",a.message)}}return{signupErrorMessage:n,loginErrorMessage:r,memberName:t,signup:s,login:i,logout:o}}),Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Y_=t=>(ln("data-v-ec93e931"),t=t(),un(),t),X_={key:0,class:"signup-modal"},Q_={class:"modal-content"},Z_={class:"signup-form"},ev={for:"signup-name"},tv={for:"signup-email"},nv={for:"signup-password"},rv={class:"success-modal"},sv=Y_(()=>_("div",{class:"success-modal-content"},[_("p",null,"成功註冊!!"),_("p",null,"請等待跳轉...")],-1)),iv=[sv],ov={__name:"Signup",setup(t){const e=Ts(),n=se(!1),r=se(""),s=se(""),i=se(""),o=se(!1),a=se(!1),c=se(!1),l=ve(()=>e.signupErrorMessage),u=se(!1);function f(){n.value=!0,o.value=!1,a.value=!1,c.value=!1}function h(){n.value=!1,s.value="",i.value="",r.value="",o.value=!1,a.value=!1,c.value=!1}const g=async()=>{if(r.value===""||s.value===""||i.value===""){o.value=!0;return}try{if(await e.signup(s.value,i.value,r.value),l.value.includes("密碼")){a.value=!1,c.value=!0;return}else if(l.value.includes("電子")){c.value=!1,a.value=!0;return}else a.value=!1,c.value=!1;u.value=!0,setTimeout(()=>{u.value=!1,h()},2e3)}catch(E){console.log(E)}};return(E,I)=>(oe(),ge(_e,null,[_("p",{onClick:I[0]||(I[0]=L=>f())},"註冊"),(oe(),tn(Hi,{to:"body"},[n.value?(oe(),ge("div",X_,[_("div",Q_,[_("span",{onClick:I[1]||(I[1]=L=>h())},"×"),_("form",Z_,[_("label",ev,[Me("用戶名 "),me(_("span",null,"請填寫正確的資訊",512),[[Ve,o.value]])]),me(_("input",{type:"text",id:"signup-name","onUpdate:modelValue":I[2]||(I[2]=L=>r.value=L)},null,512),[[en,r.value]]),_("label",tv,[Me("電子郵件 "),me(_("span",null,$e(l.value),513),[[Ve,a.value]])]),me(_("input",{type:"text",id:"signup-email","onUpdate:modelValue":I[3]||(I[3]=L=>s.value=L)},null,512),[[en,s.value]]),_("label",nv,[Me("密碼 "),me(_("span",null,$e(l.value),513),[[Ve,c.value]])]),me(_("input",{type:"password",id:"signup-password","onUpdate:modelValue":I[4]||(I[4]=L=>i.value=L)},null,512),[[en,i.value]]),_("button",{onClick:I[5]||(I[5]=Xc(L=>g(),["prevent"]))},"註冊")]),me(_("div",rv,iv,512),[[Ve,u.value]])])])):gs("",!0)]))],64))}},av=Ht(ov,[["__scopeId","data-v-ec93e931"]]),cv={key:0,class:"login-modal"},lv={class:"modal-content"},uv={class:"login-form"},fv={for:"login-email"},dv={for:"login-password"},hv={__name:"Login",setup(t){const e=Ts(),n=se(!1),r=se(""),s=se(""),i=se(!1),o=se(!1),a=ve(()=>e.loginErrorMessage),c=async()=>{if(r.value===""||s.value===""){i.value=!0;return}else i.value=!1;try{if(await e.login(r.value,s.value),console.log(a.value),a.value){o.value=!0;return}else o.value=!1}catch(f){console.log(f)}};function l(){n.value=!0,r.value="",s.value="",i.value=!1,o.value=!1}function u(){n.value=!1,r.value="",s.value="",i.value=!1,o.value=!1}return(f,h)=>(oe(),ge(_e,null,[_("p",{onClick:h[0]||(h[0]=g=>l())},"登入"),(oe(),tn(Hi,{to:"body"},[n.value?(oe(),ge("div",cv,[_("div",lv,[_("span",{onClick:h[1]||(h[1]=g=>u())},"×"),_("form",uv,[_("label",fv,[Me("電子郵件 "),me(_("span",null,"請填寫帳號或密碼",512),[[Ve,i.value]])]),me(_("input",{type:"text",id:"login-email","onUpdate:modelValue":h[2]||(h[2]=g=>r.value=g)},null,512),[[en,r.value]]),_("label",dv,[Me("密碼 "),me(_("span",null,$e(a.value),513),[[Ve,o.value]])]),me(_("input",{type:"password",id:"login-password","onUpdate:modelValue":h[3]||(h[3]=g=>s.value=g)},null,512),[[en,s.value]]),_("button",{onClick:h[4]||(h[4]=Xc(g=>c(),["prevent"]))},"登入")])])])):gs("",!0)]))],64))}},pv=Ht(hv,[["__scopeId","data-v-8bff753d"]]),gv=t=>(ln("data-v-7f2b6f32"),t=t(),un(),t),mv={key:0,class:"logout-modal"},_v={class:"modal-content"},vv=gv(()=>_("p",null,"確定登出嗎?",-1)),yv={__name:"Logout",setup(t){const e=Ts(),n=se(!1);function r(){n.value=!0}function s(){n.value=!1}const i=async()=>{try{await e.logout(),n.value=!1}catch(o){console.log(o)}};return(o,a)=>(oe(),ge(_e,null,[_("p",{onClick:a[0]||(a[0]=c=>r())},"登出"),(oe(),tn(Hi,{to:"body"},[n.value?(oe(),ge("div",mv,[_("div",_v,[_("span",{onClick:a[1]||(a[1]=c=>s())},"×"),vv,_("button",{onClick:a[2]||(a[2]=c=>i())},"確定")])])):gs("",!0)]))],64))}},bv=Ht(yv,[["__scopeId","data-v-7f2b6f32"]]),Cs=t=>(ln("data-v-64b5cf14"),t=t(),un(),t),Ev=Cs(()=>_("label",{class:"hamburger",for:"toggle"},[_("div",{class:"bar"}),_("div",{class:"bar"}),_("div",{class:"bar"})],-1)),wv=Cs(()=>_("input",{type:"checkbox",id:"toggle"},null,-1)),Iv={class:"navbar"},Sv={class:"logo"},Tv={class:"search"},Cv=Cs(()=>_("img",{src:"https://cdn-icons-png.flaticon.com/512/54/54481.png",alt:""},null,-1)),Av=[Cv],Rv={class:"error-modal"},Pv={class:"content"},kv=Cs(()=>_("p",null,"未搜索到此商品，請輸入正確的關鍵字",-1)),Ov={__name:"Header",setup(t){const e=Ts(),n=dl(),r=Re("products"),s=ve(()=>e.memberName),i=ve(()=>!s.value),o=ve(()=>"你好"+s.value+"!"),a=se(""),c=se(!1);function l(){if(a.value==="")return;const u=r.value.filter(f=>f.name.includes(a.value));if(u.length===0){a.value="",c.value=!c.value;return}a.value="",n.push({path:`/product/${u[0].id}`})}return(u,f)=>{const h=us("router-link");return oe(),ge(_e,null,[Ev,_("header",null,[wv,_("nav",Iv,[_("ul",null,[me(_("li",null,$e(o.value),513),[[Ve,s.value]]),_("li",null,[fe(h,{to:"/home"},{default:kt(()=>[Me("首頁")]),_:1})]),_("li",null,[fe(h,{to:"/cart"},{default:kt(()=>[Me("購物車")]),_:1})]),_("li",null,[fe(av)]),_("li",null,[i.value?(oe(),tn(pv,{key:0})):(oe(),tn(bv,{key:1}))])])]),_("div",Sv,[_("h1",null,[fe(h,{to:"/home"},{default:kt(()=>[Me("購物網站")]),_:1})])]),_("div",Tv,[me(_("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=g=>a.value=g),onKeyup:f[1]||(f[1]=Ud(g=>l(),["enter"]))},null,544),[[en,a.value]]),_("div",{class:"search-pic",onClick:f[2]||(f[2]=g=>l())},Av)])]),fe(Ki,{name:"error-modal"},{default:kt(()=>[me(_("div",Rv,[_("div",Pv,[_("span",{onClick:f[3]||(f[3]=g=>c.value=!c.value)},"×"),kv])],512),[[Ve,c.value]])]),_:1})],64)}}},io=Ht(Ov,[["__scopeId","data-v-64b5cf14"]]),Nv=t=>(ln("data-v-0ce4874c"),t=t(),un(),t),Lv={class:"banner"},Mv=Nv(()=>_("div",{class:"filter"},null,-1)),Dv=["src"],xv={class:"dot-container"},Uv=["onClick"],$v={__name:"Banner",setup(t){const e=Re("products"),n=se(0);function r(o){n.value>=0&&(n.value+=o,n.value>4?n.value=0:n.value<0&&(n.value=4))}function s(o){n.value=o-1}let i;return i=setInterval(()=>r(1),3e3),$i(()=>{clearInterval(i)}),(o,a)=>(oe(),ge("div",Lv,[Mv,(oe(!0),ge(_e,null,Vr(Lt(e),(c,l)=>me((oe(),ge("div",{class:"banner-pic",key:l},[_("img",{src:c.image,alt:""},null,8,Dv)])),[[Ve,l===n.value]])),128)),_("a",{class:"prev",onClick:a[0]||(a[0]=c=>r(-1))},"❮"),_("a",{class:"next",onClick:a[1]||(a[1]=c=>r(1))},"❯"),_("div",xv,[(oe(),ge(_e,null,Vr(5,c=>_("div",{class:rs(["dot",{activeDot:n.value===c-1}]),onClick:l=>s(c)},null,10,Uv)),64))])]))}},Fv=Ht($v,[["__scopeId","data-v-0ce4874c"]]),Bv=t=>(ln("data-v-942561ce"),t=t(),un(),t),Vv={class:"product-list"},Hv={class:"pic"},jv=Bv(()=>_("div",{class:"filter"},null,-1)),Wv=["src","alt"],Kv={__name:"ProductList",setup(t){const e=Re("products");return(n,r)=>{const s=us("router-link");return oe(),ge("div",Vv,[_("ul",null,[(oe(!0),ge(_e,null,Vr(Lt(e),i=>(oe(),ge("li",{class:"list",key:i.id},[_("div",Hv,[fe(s,{to:`/product/${i.id}`},{default:kt(()=>[jv,_("img",{src:i.image,alt:i.name},null,8,Wv)]),_:2},1032,["to"])]),_("h1",null,[fe(s,{to:`/product/${i.id}`},{default:kt(()=>[Me($e(i.name),1)]),_:2},1032,["to"])]),_("p",null,"$"+$e(i.price),1)]))),128))])])}}},zv=Ht(Kv,[["__scopeId","data-v-942561ce"]]),Gv={__name:"Home",setup(t){return(e,n)=>(oe(),ge(_e,null,[fe(io),fe(Fv),fe(zv)],64))}},oo=t=>(ln("data-v-874ca8b4"),t=t(),un(),t),qv={class:"cart"},Jv={key:0},Yv=["onUpdate:modelValue"],Xv={class:"pic"},Qv=["src"],Zv={class:"txt"},ey={class:"num"},ty=["onClick"],ny=["onUpdate:modelValue"],ry=["onClick"],sy=["onClick"],iy={class:"footer"},oy={class:"item"},ay=oo(()=>_("label",{for:"all-check"},"全選",-1)),cy={class:"item"},ly={key:1,class:"empty"},uy=oo(()=>_("p",null,"目前尚未添加商品",-1)),fy={class:"modal"},dy={class:"content"},hy={class:"btn"},py={class:"nothing"},gy={class:"content"},my=oo(()=>_("p",null,"請選取商品",-1)),_y={__name:"Cart",setup(t){se(1);const e=se([]);lr(()=>{localStorage.getItem("cart")&&(e.value=JSON.parse(localStorage.getItem("cart")))});function n(u){e.value.splice(u,1)}En(e,()=>{localStorage.setItem("cart",JSON.stringify(e.value))},{deep:!0});function r(u,f){if(e.value[f].count+u>=1)e.value[f].count+=u;else return}const s=ve({get:()=>e.value.length>0&&e.value.every(u=>u.checked),set:u=>{e.value.forEach(f=>f.checked=u)}}),i=ve(()=>e.value.reduce((u,f)=>f.checked?u+f.price*f.count:u+0,0)),o=se(!1),a=se(!1);function c(){e.value.length>0&&e.value.some(u=>u.checked)?o.value=!0:a.value=!0}function l(){const u=e.value.filter(f=>!f.checked);e.value=u,o.value=!1}return(u,f)=>{const h=us("router-link");return oe(),ge(_e,null,[fe(io),_("div",qv,[e.value&&e.value.length>0?(oe(),ge("ul",Jv,[(oe(!0),ge(_e,null,Vr(e.value,(g,E)=>(oe(),ge("li",{key:g.id},[me(_("input",{type:"checkbox","onUpdate:modelValue":I=>g.checked=I},null,8,Yv),[[Qo,g.checked]]),_("div",Xv,[_("img",{src:g.image,alt:""},null,8,Qv)]),_("div",Zv,[_("h1",null,$e(g.name),1),_("p",null,"$"+$e(g.price),1),_("div",ey,[_("button",{class:"minus",onClick:I=>r(-1,E)},"－",8,ty),me(_("input",{type:"number",placeholder:"數量",min:"0",max:"99","onUpdate:modelValue":I=>g.count=I},null,8,ny),[[en,g.count]]),_("button",{class:"plus",onClick:I=>r(1,E)},"＋",8,ry)]),_("button",{class:"del-btn",onClick:I=>n(E)},"刪除",8,sy)])]))),128)),_("div",iy,[_("div",oy,[me(_("input",{type:"checkbox",name:"",id:"all-check","onUpdate:modelValue":f[0]||(f[0]=g=>s.value=g)},null,512),[[Qo,s.value]]),ay]),_("div",cy,[_("p",null,[Me("總金額$ "),_("span",null,$e(i.value),1)]),_("button",{onClick:f[1]||(f[1]=g=>c())},"結帳")])])])):(oe(),ge("div",ly,[uy,fe(h,{to:"/home"},{default:kt(()=>[Me("前往")]),_:1})]))]),me(_("div",fy,[_("div",dy,[_("p",null,[Me("總金額$"),_("span",null,$e(i.value),1),Me("確定要付款嗎?")]),_("div",hy,[_("button",{class:"confrim",onClick:f[2]||(f[2]=g=>l())},"確定"),_("button",{class:"cancel",onClick:f[3]||(f[3]=g=>o.value=!1)},"取消")])])],512),[[Ve,o.value]]),me(_("div",py,[_("div",gy,[my,_("button",{onClick:f[4]||(f[4]=g=>a.value=!1)},"確定")])],512),[[Ve,a.value]])],64)}}},vy=Ht(_y,[["__scopeId","data-v-874ca8b4"]]),iu=t=>(ln("data-v-41f5a98c"),t=t(),un(),t),yy={class:"container"},by={key:0,class:"product"},Ey={class:"wrap"},wy={class:"pic"},Iy=["src"],Sy={class:"detail"},Ty=iu(()=>_("h3",null,"商品詳情",-1)),Cy={class:"footer"},Ay={class:"modal"},Ry={class:"content"},Py=iu(()=>_("p",null,"此商品已在購物車內",-1)),ky={__name:"ProductDetail",setup(t){const e=Re("products"),n=tp(),r=dl(),s=se(null),i=se(!1);lr(()=>{const l=n.params.id,u=e.value.find(f=>f.id==l);s.value=u,localStorage.getItem("cart")&&(o.value=JSON.parse(localStorage.getItem("cart")))}),ff(()=>{const l=n.params.id,u=e.value.find(f=>f.id==l);s.value=u});const o=se([]);function a(){o.value.find(l=>l.id==s.value.id)?i.value=!i.value:(o.value.push(s.value),localStorage.setItem("cart",JSON.stringify(o.value)))}function c(){r.back()}return(l,u)=>(oe(),ge(_e,null,[_("div",yy,[fe(io),s.value?(oe(),ge("div",by,[_("div",Ey,[_("button",{class:"prev",onClick:u[0]||(u[0]=f=>c())},"上一頁"),_("div",wy,[_("img",{src:s.value.image,alt:""},null,8,Iy)]),_("h1",null,$e(s.value.name),1),_("p",null,"$"+$e(s.value.price),1),_("div",Sy,[Ty,_("p",null,$e(s.value.description),1)])])])):gs("",!0),_("div",Cy,[_("button",{onClick:u[1]||(u[1]=f=>a())},"加入購物車")])]),me(_("div",Ay,[_("div",Ry,[Py,_("button",{onClick:u[2]||(u[2]=f=>i.value=!i.value)},"確定")])],512),[[Ve,i.value]])],64))}},Oy=Ht(ky,[["__scopeId","data-v-41f5a98c"]]),Ny=[{path:"/",redirect:"home"},{path:"/home",name:"home",component:Gv},{path:"/product/:id",name:"productDetail",component:Oy},{path:"/cart",name:"cart",component:vy}],Ly=Zh({history:Rh(),routes:Ny}),My={__name:"App",setup(t){const e=se([]);return Wn("products",e),lr(async()=>{try{const n=await fetch("https://raw.githubusercontent.com/a41522001/product/main/product.json");e.value=await n.json()}catch(n){console.log(n),alert("網址連線錯誤請稍後再試")}}),(n,r)=>{const s=us("router-view");return oe(),tn(s)}}},ao=Bd(My);ao.use(Ly);ao.use(Wd());ao.mount("#app");
