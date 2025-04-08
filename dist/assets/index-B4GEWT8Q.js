(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},pr=[],Tn=()=>{},Yh=()=>!1,Mo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hl=n=>n.startsWith("onUpdate:"),xt=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kh=Object.prototype.hasOwnProperty,rt=(n,e)=>Kh.call(n,e),ke=Array.isArray,mr=n=>yo(n)==="[object Map]",Tf=n=>yo(n)==="[object Set]",Ve=n=>typeof n=="function",_t=n=>typeof n=="string",Yn=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",wf=n=>(pt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Rf=Object.prototype.toString,yo=n=>Rf.call(n),Zh=n=>yo(n).slice(8,-1),Cf=n=>yo(n)==="[object Object]",Gl=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jh=/-(\w)/g,ln=Eo(n=>n.replace(Jh,(e,t)=>t?t.toUpperCase():"")),Qh=/\B([A-Z])/g,$i=Eo(n=>n.replace(Qh,"-$1").toLowerCase()),bo=Eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xo=Eo(n=>n?`on${bo(n)}`:""),hi=(n,e)=>!Object.is(n,e),jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Pf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ep=n=>{const e=parseFloat(n);return isNaN(e)?n:e},tp=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let Rc;const Ao=()=>Rc||(Rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?sp(i):To(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||pt(n))return n}const np=/;(?![^(]*\))/g,ip=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function sp(n){const e={};return n.replace(rp,"").split(np).forEach(t=>{if(t){const i=t.split(ip);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wo(n){let e="";if(_t(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=wo(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=zl(op);function Lf(n){return!!n||n===""}const Df=n=>!!(n&&n.__v_isRef===!0),Vi=n=>_t(n)?n:n==null?"":ke(n)||pt(n)&&(n.toString===Rf||!Ve(n.toString))?Df(n)?Vi(n.value):JSON.stringify(n,If,2):String(n),If=(n,e)=>Df(e)?If(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:Tf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:Yn(e)?$o(e):pt(e)&&!ke(e)&&!Cf(e)?String(e):e,$o=(n,e="")=>{var t;return Yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class lp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Jt;try{return Jt=this,e()}finally{Jt=t}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cp(){return Jt}let ut;const qo=new WeakSet;class Uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ff(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cc(this),Of(this);const e=ut,t=_n;ut=this,_n=!0;try{return this.fn()}finally{Bf(this),ut=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jl(e);this.deps=this.depsTail=void 0,Cc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let Nf=0,qr,Yr;function Ff(n,e=!1){if(n.flags|=8,e){n.next=Yr,Yr=n;return}n.next=qr,qr=n}function Wl(){Nf++}function Xl(){if(--Nf>0)return;if(Yr){let e=Yr;for(Yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Of(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),jl(i),up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ns))return;n.globalVersion=ns;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ba(n)){n.flags&=-3;return}const t=ut,i=_n;ut=n,_n=!0;try{Of(n);const r=n.fn(n._value);(e.version===0||hi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,_n=i,Bf(n),n.flags&=-3}}function jl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)jl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function up(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const zf=[];function xi(){zf.push(_n),_n=!1}function Si(){const n=zf.pop();_n=n===void 0?!0:n}function Cc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let ns=0;class fp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!_n||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new fp(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Hf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,ns++,this.notify(e)}notify(e){Wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Xl()}}}function Hf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ka=new WeakMap,Hi=Symbol(""),za=Symbol(""),is=Symbol("");function Lt(n,e,t){if(_n&&ut){let i=ka.get(n);i||ka.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new $l),r.map=i,r.key=t),r.track()}}function Hn(n,e,t,i,r,s){const o=ka.get(n);if(!o){ns++;return}const a=l=>{l&&l.trigger()};if(Wl(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Gl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===is||!Yn(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(is)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hi)),mr(n)&&a(o.get(za)));break;case"delete":l||(a(o.get(Hi)),mr(n)&&a(o.get(za)));break;case"set":mr(n)&&a(o.get(Hi));break}}Xl()}function Yi(n){const e=Ze(n);return e===n?e:(Lt(e,"iterate",is),an(n)?e:e.map(Dt))}function Ro(n){return Lt(n=Ze(n),"iterate",is),n}const dp={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,Dt)},concat(...n){return Yi(this).concat(...n.map(e=>ke(e)?Yi(e):e))},entries(){return Yo(this,"entries",n=>(n[1]=Dt(n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(Dt),arguments)},find(n,e){return Ln(this,"find",n,e,Dt,arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,Dt,arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return Yi(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return Fr(this,"pop")},push(...n){return Fr(this,"push",n)},reduce(n,...e){return Pc(this,"reduce",n,e)},reduceRight(n,...e){return Pc(this,"reduceRight",n,e)},shift(){return Fr(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return Fr(this,"splice",n)},toReversed(){return Yi(this).toReversed()},toSorted(n){return Yi(this).toSorted(n)},toSpliced(...n){return Yi(this).toSpliced(...n)},unshift(...n){return Fr(this,"unshift",n)},values(){return Yo(this,"values",Dt)}};function Yo(n,e,t){const i=Ro(n),r=i[e]();return i!==n&&!an(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const hp=Array.prototype;function Ln(n,e,t,i,r,s){const o=Ro(n),a=o!==n&&!an(n),l=o[e];if(l!==hp[e]){const f=l.apply(n,s);return a?Dt(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Dt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Pc(n,e,t,i){const r=Ro(n);let s=t;return r!==n&&(an(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Dt(a),l,n)}),r[e](s,...i)}function Ko(n,e,t){const i=Ze(n);Lt(i,"iterate",is);const r=i[e](...t);return(r===-1||r===!1)&&Kl(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function Fr(n,e,t=[]){xi(),Wl();const i=Ze(n)[e].apply(n,t);return Xl(),Si(),i}const pp=zl("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function mp(n){Yn(n)||(n=String(n));const e=Ze(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class Gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ap:$f:s?jf:Xf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=dp[t]))return l;if(t==="hasOwnProperty")return mp}const a=Reflect.get(e,t,Ut(e)?e:i);return(Yn(t)?Vf.has(t):pp(t))||(r||Lt(e,"get",t),s)?a:Ut(a)?o&&Gl(t)?a:a.value:pt(a)?r?Yf(a):Co(a):a}}class Wf extends Gf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Gi(s);if(!an(i)&&!Gi(i)&&(s=Ze(s),i=Ze(i)),!ke(e)&&Ut(s)&&!Ut(i))return l?!1:(s.value=i,!0)}const o=ke(e)&&Gl(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,Ut(e)?e:r);return e===Ze(r)&&(o?hi(i,s)&&Hn(e,"set",t,i):Hn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Hn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Yn(t)||!Vf.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",ke(e)?"length":Hi),Reflect.ownKeys(e)}}class gp extends Gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _p=new Wf,vp=new gp,xp=new Wf(!0);const Ha=n=>n,As=n=>Reflect.getPrototypeOf(n);function Sp(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ha:e?Va:Dt;return!e&&Lt(s,"iterate",l?za:Hi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ts(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mp(n,e){const t={get(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);n||(hi(r,a)&&Lt(o,"get",r),Lt(o,"get",a));const{has:l}=As(o),c=e?Ha:n?Va:Dt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(Ze(r),"iterate",Hi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);return n||(hi(r,a)&&Lt(o,"has",r),Lt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ze(a),c=e?Ha:n?Va:Dt;return!n&&Lt(l,"iterate",Hi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return xt(t,n?{add:Ts("add"),set:Ts("set"),delete:Ts("delete"),clear:Ts("clear")}:{add(r){!e&&!an(r)&&!Gi(r)&&(r=Ze(r));const s=Ze(this);return As(s).has.call(s,r)||(s.add(r),Hn(s,"add",r,r)),this},set(r,s){!e&&!an(s)&&!Gi(s)&&(s=Ze(s));const o=Ze(this),{has:a,get:l}=As(o);let c=a.call(o,r);c||(r=Ze(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?hi(s,u)&&Hn(o,"set",r,s):Hn(o,"add",r,s),this},delete(r){const s=Ze(this),{has:o,get:a}=As(s);let l=o.call(s,r);l||(r=Ze(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Hn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,o=r.clear();return s&&Hn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sp(r,n,e)}),t}function ql(n,e){const t=Mp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const yp={get:ql(!1,!1)},Ep={get:ql(!1,!0)},bp={get:ql(!0,!1)};const Xf=new WeakMap,jf=new WeakMap,$f=new WeakMap,Ap=new WeakMap;function Tp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wp(n){return n.__v_skip||!Object.isExtensible(n)?0:Tp(Zh(n))}function Co(n){return Gi(n)?n:Yl(n,!1,_p,yp,Xf)}function qf(n){return Yl(n,!1,xp,Ep,jf)}function Yf(n){return Yl(n,!0,vp,bp,$f)}function Yl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=wp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function gr(n){return Gi(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function Gi(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Rp(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&Pf(n,"__v_skip",!0),n}const Dt=n=>pt(n)?Co(n):n,Va=n=>pt(n)?Yf(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function rs(n){return Kf(n,!1)}function Cp(n){return Kf(n,!0)}function Kf(n,e){return Ut(n)?n:new Pp(n,e)}class Pp{constructor(e,t){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:Dt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||an(e)||Gi(e);e=i?e:Ze(e),hi(e,t)&&(this._rawValue=e,this._value=i?e:Dt(e),this.dep.trigger())}}function _r(n){return Ut(n)?n.value:n}const Lp={get:(n,e,t)=>e==="__v_raw"?n:_r(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Zf(n){return gr(n)?n:new Proxy(n,Lp)}class Dp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Ff(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ip(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new Dp(i,r,t)}const ws={},co=new WeakMap;let Ii;function Up(n,e=!1,t=Ii){if(t){let i=co.get(t);i||co.set(t,i=[]),i.push(n)}}function Np(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:an(y)||r===!1||r===0?fi(y,1):fi(y);let u,f,d,h,S=!1,E=!1;if(Ut(n)?(f=()=>n.value,S=an(n)):gr(n)?(f=()=>c(n),S=!0):ke(n)?(E=!0,S=n.some(y=>gr(y)||an(y)),f=()=>n.map(y=>{if(Ut(y))return y.value;if(gr(y))return c(y);if(Ve(y))return l?l(y,2):y()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){xi();try{d()}finally{Si()}}const y=Ii;Ii=u;try{return l?l(n,3,[h]):n(h)}finally{Ii=y}}:f=Tn,e&&r){const y=f,P=r===!0?1/0:r;f=()=>fi(y(),P)}const m=cp(),p=()=>{u.stop(),m&&Vl(m.effects,u)};if(s&&e){const y=e;e=(...P)=>{y(...P),p()}}let M=E?new Array(n.length).fill(ws):ws;const _=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const P=u.run();if(r||S||(E?P.some((R,w)=>hi(R,M[w])):hi(P,M))){d&&d();const R=Ii;Ii=u;try{const w=[P,M===ws?void 0:E&&M[0]===ws?[]:M,h];l?l(e,3,w):e(...w),M=P}finally{Ii=R}}}else u.run()};return a&&a(_),u=new Uf(f),u.scheduler=o?()=>o(_,!1):_,h=y=>Up(y,!1,u),d=u.onStop=()=>{const y=co.get(u);if(y){if(l)l(y,4);else for(const P of y)P();co.delete(u)}},e?i?_(!0):M=u.run():o?o(_.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function fi(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ut(n))fi(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(Tf(n)||mr(n))n.forEach(i=>{fi(i,e,t)});else if(Cf(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(n,e,t,i){try{return i?n(...i):n()}catch(r){Po(r,e,t)}}function vn(n,e,t,i){if(Ve(n)){const r=ms(n,e,t,i);return r&&wf(r)&&r.catch(s=>{Po(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(vn(n[s],e,t,i));return r}}function Po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){xi(),ms(s,null,10,[n,l,c]),Si();return}}Fp(n,t,r,i,o)}function Fp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Bt=[];let Mn=-1;const vr=[];let ai=null,ur=0;const Jf=Promise.resolve();let uo=null;function gs(n){const e=uo||Jf;return n?e.then(this?n.bind(this):n):e}function Op(n){let e=Mn+1,t=Bt.length;for(;e<t;){const i=e+t>>>1,r=Bt[i],s=ss(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Zl(n){if(!(n.flags&1)){const e=ss(n),t=Bt[Bt.length-1];!t||!(n.flags&2)&&e>=ss(t)?Bt.push(n):Bt.splice(Op(e),0,n),n.flags|=1,Qf()}}function Qf(){uo||(uo=Jf.then(td))}function Bp(n){ke(n)?vr.push(...n):ai&&n.id===-1?ai.splice(ur+1,0,n):n.flags&1||(vr.push(n),n.flags|=1),Qf()}function Lc(n,e,t=Mn+1){for(;t<Bt.length;t++){const i=Bt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ed(n){if(vr.length){const e=[...new Set(vr)].sort((t,i)=>ss(t)-ss(i));if(vr.length=0,ai){ai.push(...e);return}for(ai=e,ur=0;ur<ai.length;ur++){const t=ai[ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ai=null,ur=0}}const ss=n=>n.id==null?n.flags&2?-1:1/0:n.id;function td(n){try{for(Mn=0;Mn<Bt.length;Mn++){const e=Bt[Mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mn<Bt.length;Mn++){const e=Bt[Mn];e&&(e.flags&=-2)}Mn=-1,Bt.length=0,ed(),uo=null,(Bt.length||vr.length)&&td()}}let It=null,nd=null;function fo(n){const e=It;return It=n,nd=n&&n.type.__scopeId||null,e}function Ge(n,e=It,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hc(-1);const s=fo(e);let o;try{o=n(...r)}finally{fo(s),i._d&&Hc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(xi(),vn(l,t,8,[n.el,a,n,e]),Si())}}const kp=Symbol("_vte"),id=n=>n.__isTeleport,li=Symbol("_leaveCb"),Rs=Symbol("_enterCb");function rd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jn(()=>{n.isMounted=!0}),hd(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],sd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},od=n=>{const e=n.subTree;return e.component?od(e.component):e},zp={name:"BaseTransition",props:sd,setup(n,{slots:e}){const t=Bd(),i=rd();return()=>{const r=e.default&&Jl(e.default(),!0);if(!r||!r.length)return;const s=ad(r),o=Ze(n),{mode:a}=o;if(i.isLeaving)return Zo(s);const l=Dc(s);if(!l)return Zo(s);let c=os(l,o,i,t,d=>c=d);l.type!==zt&&Wi(l,c);const u=t.subTree,f=u&&Dc(u);if(f&&f.type!==zt&&!Fi(l,f)&&od(t).type!==zt){const d=os(f,o,i,t);if(Wi(f,d),a==="out-in"&&l.type!==zt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave},Zo(s);a==="in-out"&&l.type!==zt&&(d.delayLeave=(h,S,E)=>{const m=ld(i,f);m[String(f.key)]=f,h[li]=()=>{S(),h[li]=void 0,delete c.delayedLeave},c.delayedLeave=E})}return s}}};function ad(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==zt){e=t;break}}return e}const Hp=zp;function ld(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function os(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:S,onLeaveCancelled:E,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:_}=e,y=String(n.key),P=ld(t,n),R=(k,x)=>{k&&vn(k,i,9,x)},w=(k,x)=>{const A=x[1];R(k,x),ke(k)?k.every(U=>U.length<=1)&&A():k.length<=1&&A()},I={mode:o,persisted:a,beforeEnter(k){let x=l;if(!t.isMounted)if(s)x=m||l;else return;k[li]&&k[li](!0);const A=P[y];A&&Fi(n,A)&&A.el[li]&&A.el[li](),R(x,[k])},enter(k){let x=c,A=u,U=f;if(!t.isMounted)if(s)x=p||c,A=M||u,U=_||f;else return;let X=!1;const Q=k[Rs]=oe=>{X||(X=!0,oe?R(U,[k]):R(A,[k]),I.delayedLeave&&I.delayedLeave(),k[Rs]=void 0)};x?w(x,[k,Q]):Q()},leave(k,x){const A=String(n.key);if(k[Rs]&&k[Rs](!0),t.isUnmounting)return x();R(d,[k]);let U=!1;const X=k[li]=Q=>{U||(U=!0,x(),Q?R(E,[k]):R(S,[k]),k[li]=void 0,P[A]===n&&delete P[A])};P[A]=n,h?w(h,[k,X]):X()},clone(k){const x=os(k,e,t,i,r);return r&&r(x),x}};return I}function Zo(n){if(Lo(n))return n=gi(n),n.children=null,n}function Dc(n){if(!Lo(n))return id(n.type)&&n.children?ad(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function Wi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Wi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Jl(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===wt?(o.patchFlag&128&&r++,i=i.concat(Jl(o.children,e,a))):(e||o.type!==zt)&&i.push(a!=null?gi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function cd(n,e){return Ve(n)?xt({name:n.name},e,{setup:n}):n}function ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ga(n,e,t,i,r=!1){if(ke(n)){n.forEach((S,E)=>Ga(S,e&&(ke(e)?e[E]:e),t,i,r));return}if(xr(i)&&!r)return;const s=i.shapeFlag&4?nc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,d=Ze(f),h=f===ft?()=>!1:S=>rt(d,S);if(c!=null&&c!==l&&(_t(c)?(u[c]=null,h(c)&&(f[c]=null)):Ut(c)&&(c.value=null)),Ve(l))ms(l,a,12,[o,u]);else{const S=_t(l),E=Ut(l);if(S||E){const m=()=>{if(n.f){const p=S?h(l)?f[l]:u[l]:l.value;r?ke(p)&&Vl(p,s):ke(p)?p.includes(s)||p.push(s):S?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else S?(u[l]=o,h(l)&&(f[l]=o)):E&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Zt(m,t)):m()}}}Ao().requestIdleCallback;Ao().cancelIdleCallback;const xr=n=>!!n.type.__asyncLoader,Lo=n=>n.type.__isKeepAlive;function Vp(n,e){fd(n,"a",e)}function Gp(n,e){fd(n,"da",e)}function fd(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Do(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Lo(r.parent.vnode)&&Wp(i,e,t,r),r=r.parent}}function Wp(n,e,t,i){const r=Do(e,n,i,!0);pd(()=>{Vl(i[e],r)},t)}function Do(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{xi();const a=_s(t),l=vn(e,t,n,o);return a(),Si(),l});return i?r.unshift(s):r.push(s),s}}const Kn=n=>(e,t=Rt)=>{(!us||n==="sp")&&Do(n,(...i)=>e(...i),t)},Xp=Kn("bm"),jn=Kn("m"),jp=Kn("bu"),dd=Kn("u"),hd=Kn("bum"),pd=Kn("um"),$p=Kn("sp"),qp=Kn("rtg"),Yp=Kn("rtc");function Kp(n,e=Rt){Do("ec",n,e)}const md="components";function Io(n,e){return _d(md,n,!0,e)||n}const gd=Symbol.for("v-ndc");function Zp(n){return _t(n)?_d(md,n,!1)||n:n||gd}function _d(n,e,t=!0,i=!1){const r=It||Rt;if(r){const s=r.type;{const a=km(s,!1);if(a&&(a===e||a===ln(e)||a===bo(ln(e))))return s}const o=Ic(r[n]||s[n],e)||Ic(r.appContext[n],e);return!o&&i?s:o}}function Ic(n,e){return n&&(n[e]||n[ln(e)]||n[bo(ln(e))])}function Wa(n,e,t,i){let r;const s=t,o=ke(n);if(o||_t(n)){const a=o&&gr(n);let l=!1;a&&(l=!an(n),n=Ro(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Dt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Jp(n,e,t={},i,r){if(It.ce||It.parent&&xr(It.parent)&&It.parent.ce)return Ye(),ls(wt,null,[pe("slot",t,i)],64);let s=n[e];s&&s._c&&(s._d=!1),Ye();const o=s&&vd(s(t)),a=t.key||o&&o.key,l=ls(wt,{key:(a&&!Yn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function vd(n){return n.some(e=>cs(e)?!(e.type===zt||e.type===wt&&!vd(e.children)):!0)?n:null}const Xa=n=>n?kd(n)?nc(n):Xa(n.parent):null,Kr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xa(n.parent),$root:n=>Xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ql(n),$forceUpdate:n=>n.f||(n.f=()=>{Zl(n.update)}),$nextTick:n=>n.n||(n.n=gs.bind(n.proxy)),$watch:n=>xm.bind(n)}),Jo=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),Qp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jo(i,e))return o[e]=1,i[e];if(r!==ft&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];ja&&(o[e]=0)}}const u=Kr[e];let f,d;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jo(r,e)?(r[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&rt(n,o)||Jo(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(Kr,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Uc(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ja=!0;function em(n){const e=Ql(n),t=n.proxy,i=n.ctx;ja=!1,e.beforeCreate&&Nc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:S,activated:E,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:_,unmounted:y,render:P,renderTracked:R,renderTriggered:w,errorCaptured:I,serverPrefetch:k,expose:x,inheritAttrs:A,components:U,directives:X,filters:Q}=e;if(c&&tm(c,i,null),o)for(const J in o){const H=o[J];Ve(H)&&(i[J]=H.bind(t))}if(r){const J=r.call(t,t);pt(J)&&(n.data=Co(J))}if(ja=!0,s)for(const J in s){const H=s[J],me=Ve(H)?H.bind(t,t):Ve(H.get)?H.get.bind(t,t):Tn,_e=!Ve(H)&&Ve(H.set)?H.set.bind(t):Tn,Me=sn({get:me,set:_e});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ie=>Me.value=Ie})}if(a)for(const J in a)xd(a[J],i,t,J);if(l){const J=Ve(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{Zs(H,J[H])})}u&&Nc(u,n,"c");function q(J,H){ke(H)?H.forEach(me=>J(me.bind(t))):H&&J(H.bind(t))}if(q(Xp,f),q(jn,d),q(jp,h),q(dd,S),q(Vp,E),q(Gp,m),q(Kp,I),q(Yp,R),q(qp,w),q(hd,M),q(pd,y),q($p,k),ke(x))if(x.length){const J=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});P&&n.render===Tn&&(n.render=P),A!=null&&(n.inheritAttrs=A),U&&(n.components=U),X&&(n.directives=X),k&&ud(n)}function tm(n,e,t=Tn){ke(n)&&(n=$a(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=Xn(r.from||i,r.default,!0):s=Xn(r.from||i):s=Xn(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Nc(n,e,t){vn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function xd(n,e,t,i){let r=i.includes(".")?Id(t,i):()=>t[i];if(_t(n)){const s=e[n];Ve(s)&&Js(r,s)}else if(Ve(n))Js(r,n.bind(t));else if(pt(n))if(ke(n))n.forEach(s=>xd(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Js(r,s,n)}}function Ql(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ho(l,c,o,!0)),ho(l,e,o)),pt(e)&&s.set(e,l),l}function ho(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ho(n,s,t,!0),r&&r.forEach(o=>ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=nm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const nm={data:Fc,props:Oc,emits:Oc,methods:Xr,computed:Xr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Xr,directives:Xr,watch:rm,provide:Fc,inject:im};function Fc(n,e){return e?n?function(){return xt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function im(n,e){return Xr($a(n),$a(e))}function $a(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Xr(n,e){return n?xt(Object.create(null),n,e):e}function Oc(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:xt(Object.create(null),Uc(n),Uc(e??{})):e}function rm(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Sd(){return{app:null,config:{isNativeTag:Yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sm=0;function om(n,e){return function(i,r=null){Ve(i)||(i=xt({},i)),r!=null&&!pt(r)&&(r=null);const s=Sd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Hm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||pe(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,u):n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,nc(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Sr;Sr=c;try{return u()}finally{Sr=f}}};return c}}let Sr=null;function Zs(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Xn(n,e,t=!1){const i=Rt||It;if(i||Sr){const r=Sr?Sr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Md={},yd=()=>Object.create(Md),Ed=n=>Object.getPrototypeOf(n)===Md;function am(n,e,t,i=!1){const r={},s=yd();n.propsDefaults=Object.create(null),bd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:qf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function lm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Uo(n.emitsOptions,d))continue;const h=e[d];if(l)if(rt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const S=ln(d);r[S]=qa(l,a,S,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{bd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=$i(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=qa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&Hn(n.attrs,"set","")}function bd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;r&&rt(r,u=ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=qa(r,l,f,c[f],n,!rt(c,f))}}return o}function qa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=_s(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$i(t))&&(i=!0))}return i}const cm=new WeakMap;function Ad(n,e,t=!1){const i=t?cm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[d,h]=Ad(f,e,!0);xt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,pr),pr;if(ke(s))for(let u=0;u<s.length;u++){const f=ln(s[u]);Bc(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=ln(u);if(Bc(f)){const d=s[u],h=o[f]=ke(d)||Ve(d)?{type:d}:xt({},d),S=h.type;let E=!1,m=!0;if(ke(S))for(let p=0;p<S.length;++p){const M=S[p],_=Ve(M)&&M.name;if(_==="Boolean"){E=!0;break}else _==="String"&&(m=!1)}else E=Ve(S)&&S.name==="Boolean";h[0]=E,h[1]=m,(E||rt(h,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Bc(n){return n[0]!=="$"&&!$r(n)}const Td=n=>n[0]==="_"||n==="$stable",ec=n=>ke(n)?n.map(En):[En(n)],um=(n,e,t)=>{if(e._n)return e;const i=Ge((...r)=>ec(e(...r)),t);return i._c=!1,i},wd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Td(r))continue;const s=n[r];if(Ve(s))e[r]=um(r,s,i);else if(s!=null){const o=ec(s);e[r]=()=>o}}},Rd=(n,e)=>{const t=ec(e);n.slots.default=()=>t},Cd=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},fm=(n,e,t)=>{const i=n.slots=yd();if(n.vnode.shapeFlag&32){const r=e._;r?(Cd(i,e,t),t&&Pf(i,"_",r,!0)):wd(e,i)}else e&&Rd(n,e)},dm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Cd(r,e,t):(s=!e.$stable,wd(e,r)),o=e}else e&&(Rd(n,e),o={default:1});if(s)for(const a in r)!Td(a)&&o[a]==null&&delete r[a]},Zt=Tm;function hm(n){return pm(n)}function pm(n,e){const t=Ao();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Tn,insertStaticContent:S}=n,E=(g,L,O,Z=null,W=null,ie=null,re=void 0,b=null,v=!!L.dynamicChildren)=>{if(g===L)return;g&&!Fi(g,L)&&(Z=F(g),Ie(g,W,ie,!0),g=null),L.patchFlag===-2&&(v=!1,L.dynamicChildren=null);const{type:D,ref:j,shapeFlag:G}=L;switch(D){case No:m(g,L,O,Z);break;case zt:p(g,L,O,Z);break;case Qs:g==null&&M(L,O,Z,re);break;case wt:U(g,L,O,Z,W,ie,re,b,v);break;default:G&1?P(g,L,O,Z,W,ie,re,b,v):G&6?X(g,L,O,Z,W,ie,re,b,v):(G&64||G&128)&&D.process(g,L,O,Z,W,ie,re,b,v,de)}j!=null&&W&&Ga(j,g&&g.ref,ie,L||g,!L)},m=(g,L,O,Z)=>{if(g==null)i(L.el=a(L.children),O,Z);else{const W=L.el=g.el;L.children!==g.children&&c(W,L.children)}},p=(g,L,O,Z)=>{g==null?i(L.el=l(L.children||""),O,Z):L.el=g.el},M=(g,L,O,Z)=>{[g.el,g.anchor]=S(g.children,L,O,Z,g.el,g.anchor)},_=({el:g,anchor:L},O,Z)=>{let W;for(;g&&g!==L;)W=d(g),i(g,O,Z),g=W;i(L,O,Z)},y=({el:g,anchor:L})=>{let O;for(;g&&g!==L;)O=d(g),r(g),g=O;r(L)},P=(g,L,O,Z,W,ie,re,b,v)=>{L.type==="svg"?re="svg":L.type==="math"&&(re="mathml"),g==null?R(L,O,Z,W,ie,re,b,v):k(g,L,W,ie,re,b,v)},R=(g,L,O,Z,W,ie,re,b)=>{let v,D;const{props:j,shapeFlag:G,transition:V,dirs:ce}=g;if(v=g.el=o(g.type,ie,j&&j.is,j),G&8?u(v,g.children):G&16&&I(g.children,v,null,Z,W,Qo(g,ie),re,b),ce&&bi(g,null,Z,"created"),w(v,g,g.scopeId,re,Z),j){for(const he in j)he!=="value"&&!$r(he)&&s(v,he,null,j[he],ie,Z);"value"in j&&s(v,"value",null,j.value,ie),(D=j.onVnodeBeforeMount)&&Sn(D,Z,g)}ce&&bi(g,null,Z,"beforeMount");const ae=mm(W,V);ae&&V.beforeEnter(v),i(v,L,O),((D=j&&j.onVnodeMounted)||ae||ce)&&Zt(()=>{D&&Sn(D,Z,g),ae&&V.enter(v),ce&&bi(g,null,Z,"mounted")},W)},w=(g,L,O,Z,W)=>{if(O&&h(g,O),Z)for(let ie=0;ie<Z.length;ie++)h(g,Z[ie]);if(W){let ie=W.subTree;if(L===ie||Nd(ie.type)&&(ie.ssContent===L||ie.ssFallback===L)){const re=W.vnode;w(g,re,re.scopeId,re.slotScopeIds,W.parent)}}},I=(g,L,O,Z,W,ie,re,b,v=0)=>{for(let D=v;D<g.length;D++){const j=g[D]=b?ci(g[D]):En(g[D]);E(null,j,L,O,Z,W,ie,re,b)}},k=(g,L,O,Z,W,ie,re)=>{const b=L.el=g.el;let{patchFlag:v,dynamicChildren:D,dirs:j}=L;v|=g.patchFlag&16;const G=g.props||ft,V=L.props||ft;let ce;if(O&&Ai(O,!1),(ce=V.onVnodeBeforeUpdate)&&Sn(ce,O,L,g),j&&bi(L,g,O,"beforeUpdate"),O&&Ai(O,!0),(G.innerHTML&&V.innerHTML==null||G.textContent&&V.textContent==null)&&u(b,""),D?x(g.dynamicChildren,D,b,O,Z,Qo(L,W),ie):re||H(g,L,b,null,O,Z,Qo(L,W),ie,!1),v>0){if(v&16)A(b,G,V,O,W);else if(v&2&&G.class!==V.class&&s(b,"class",null,V.class,W),v&4&&s(b,"style",G.style,V.style,W),v&8){const ae=L.dynamicProps;for(let he=0;he<ae.length;he++){const Re=ae[he],ue=G[Re],ve=V[Re];(ve!==ue||Re==="value")&&s(b,Re,ue,ve,W,O)}}v&1&&g.children!==L.children&&u(b,L.children)}else!re&&D==null&&A(b,G,V,O,W);((ce=V.onVnodeUpdated)||j)&&Zt(()=>{ce&&Sn(ce,O,L,g),j&&bi(L,g,O,"updated")},Z)},x=(g,L,O,Z,W,ie,re)=>{for(let b=0;b<L.length;b++){const v=g[b],D=L[b],j=v.el&&(v.type===wt||!Fi(v,D)||v.shapeFlag&70)?f(v.el):O;E(v,D,j,null,Z,W,ie,re,!0)}},A=(g,L,O,Z,W)=>{if(L!==O){if(L!==ft)for(const ie in L)!$r(ie)&&!(ie in O)&&s(g,ie,L[ie],null,W,Z);for(const ie in O){if($r(ie))continue;const re=O[ie],b=L[ie];re!==b&&ie!=="value"&&s(g,ie,b,re,W,Z)}"value"in O&&s(g,"value",L.value,O.value,W)}},U=(g,L,O,Z,W,ie,re,b,v)=>{const D=L.el=g?g.el:a(""),j=L.anchor=g?g.anchor:a("");let{patchFlag:G,dynamicChildren:V,slotScopeIds:ce}=L;ce&&(b=b?b.concat(ce):ce),g==null?(i(D,O,Z),i(j,O,Z),I(L.children||[],O,j,W,ie,re,b,v)):G>0&&G&64&&V&&g.dynamicChildren?(x(g.dynamicChildren,V,O,W,ie,re,b),(L.key!=null||W&&L===W.subTree)&&Pd(g,L,!0)):H(g,L,O,j,W,ie,re,b,v)},X=(g,L,O,Z,W,ie,re,b,v)=>{L.slotScopeIds=b,g==null?L.shapeFlag&512?W.ctx.activate(L,O,Z,re,v):Q(L,O,Z,W,ie,re,v):oe(g,L,v)},Q=(g,L,O,Z,W,ie,re)=>{const b=g.component=Um(g,Z,W);if(Lo(g)&&(b.ctx.renderer=de),Nm(b,!1,re),b.asyncDep){if(W&&W.registerDep(b,q,re),!g.el){const v=b.subTree=pe(zt);p(null,v,L,O)}}else q(b,g,L,O,W,ie,re)},oe=(g,L,O)=>{const Z=L.component=g.component;if(bm(g,L,O))if(Z.asyncDep&&!Z.asyncResolved){J(Z,L,O);return}else Z.next=L,Z.update();else L.el=g.el,Z.vnode=L},q=(g,L,O,Z,W,ie,re)=>{const b=()=>{if(g.isMounted){let{next:G,bu:V,u:ce,parent:ae,vnode:he}=g;{const Le=Ld(g);if(Le){G&&(G.el=he.el,J(g,G,re)),Le.asyncDep.then(()=>{g.isUnmounted||b()});return}}let Re=G,ue;Ai(g,!1),G?(G.el=he.el,J(g,G,re)):G=he,V&&jo(V),(ue=G.props&&G.props.onVnodeBeforeUpdate)&&Sn(ue,ae,G,he),Ai(g,!0);const ve=ea(g),Ue=g.subTree;g.subTree=ve,E(Ue,ve,f(Ue.el),F(Ue),g,W,ie),G.el=ve.el,Re===null&&Am(g,ve.el),ce&&Zt(ce,W),(ue=G.props&&G.props.onVnodeUpdated)&&Zt(()=>Sn(ue,ae,G,he),W)}else{let G;const{el:V,props:ce}=L,{bm:ae,m:he,parent:Re,root:ue,type:ve}=g,Ue=xr(L);if(Ai(g,!1),ae&&jo(ae),!Ue&&(G=ce&&ce.onVnodeBeforeMount)&&Sn(G,Re,L),Ai(g,!0),V&&Pe){const Le=()=>{g.subTree=ea(g),Pe(V,g.subTree,g,W,null)};Ue&&ve.__asyncHydrate?ve.__asyncHydrate(V,g,Le):Le()}else{ue.ce&&ue.ce._injectChildStyle(ve);const Le=g.subTree=ea(g);E(null,Le,O,Z,g,W,ie),L.el=Le.el}if(he&&Zt(he,W),!Ue&&(G=ce&&ce.onVnodeMounted)){const Le=L;Zt(()=>Sn(G,Re,Le),W)}(L.shapeFlag&256||Re&&xr(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&Zt(g.a,W),g.isMounted=!0,L=O=Z=null}};g.scope.on();const v=g.effect=new Uf(b);g.scope.off();const D=g.update=v.run.bind(v),j=g.job=v.runIfDirty.bind(v);j.i=g,j.id=g.uid,v.scheduler=()=>Zl(j),Ai(g,!0),D()},J=(g,L,O)=>{L.component=g;const Z=g.vnode.props;g.vnode=L,g.next=null,lm(g,L.props,Z,O),dm(g,L.children,O),xi(),Lc(g),Si()},H=(g,L,O,Z,W,ie,re,b,v=!1)=>{const D=g&&g.children,j=g?g.shapeFlag:0,G=L.children,{patchFlag:V,shapeFlag:ce}=L;if(V>0){if(V&128){_e(D,G,O,Z,W,ie,re,b,v);return}else if(V&256){me(D,G,O,Z,W,ie,re,b,v);return}}ce&8?(j&16&&xe(D,W,ie),G!==D&&u(O,G)):j&16?ce&16?_e(D,G,O,Z,W,ie,re,b,v):xe(D,W,ie,!0):(j&8&&u(O,""),ce&16&&I(G,O,Z,W,ie,re,b,v))},me=(g,L,O,Z,W,ie,re,b,v)=>{g=g||pr,L=L||pr;const D=g.length,j=L.length,G=Math.min(D,j);let V;for(V=0;V<G;V++){const ce=L[V]=v?ci(L[V]):En(L[V]);E(g[V],ce,O,null,W,ie,re,b,v)}D>j?xe(g,W,ie,!0,!1,G):I(L,O,Z,W,ie,re,b,v,G)},_e=(g,L,O,Z,W,ie,re,b,v)=>{let D=0;const j=L.length;let G=g.length-1,V=j-1;for(;D<=G&&D<=V;){const ce=g[D],ae=L[D]=v?ci(L[D]):En(L[D]);if(Fi(ce,ae))E(ce,ae,O,null,W,ie,re,b,v);else break;D++}for(;D<=G&&D<=V;){const ce=g[G],ae=L[V]=v?ci(L[V]):En(L[V]);if(Fi(ce,ae))E(ce,ae,O,null,W,ie,re,b,v);else break;G--,V--}if(D>G){if(D<=V){const ce=V+1,ae=ce<j?L[ce].el:Z;for(;D<=V;)E(null,L[D]=v?ci(L[D]):En(L[D]),O,ae,W,ie,re,b,v),D++}}else if(D>V)for(;D<=G;)Ie(g[D],W,ie,!0),D++;else{const ce=D,ae=D,he=new Map;for(D=ae;D<=V;D++){const Ne=L[D]=v?ci(L[D]):En(L[D]);Ne.key!=null&&he.set(Ne.key,D)}let Re,ue=0;const ve=V-ae+1;let Ue=!1,Le=0;const ye=new Array(ve);for(D=0;D<ve;D++)ye[D]=0;for(D=ce;D<=G;D++){const Ne=g[D];if(ue>=ve){Ie(Ne,W,ie,!0);continue}let qe;if(Ne.key!=null)qe=he.get(Ne.key);else for(Re=ae;Re<=V;Re++)if(ye[Re-ae]===0&&Fi(Ne,L[Re])){qe=Re;break}qe===void 0?Ie(Ne,W,ie,!0):(ye[qe-ae]=D+1,qe>=Le?Le=qe:Ue=!0,E(Ne,L[qe],O,null,W,ie,re,b,v),ue++)}const $e=Ue?gm(ye):pr;for(Re=$e.length-1,D=ve-1;D>=0;D--){const Ne=ae+D,qe=L[Ne],N=Ne+1<j?L[Ne+1].el:Z;ye[D]===0?E(null,qe,O,N,W,ie,re,b,v):Ue&&(Re<0||D!==$e[Re]?Me(qe,O,N,2):Re--)}}},Me=(g,L,O,Z,W=null)=>{const{el:ie,type:re,transition:b,children:v,shapeFlag:D}=g;if(D&6){Me(g.component.subTree,L,O,Z);return}if(D&128){g.suspense.move(L,O,Z);return}if(D&64){re.move(g,L,O,de);return}if(re===wt){i(ie,L,O);for(let G=0;G<v.length;G++)Me(v[G],L,O,Z);i(g.anchor,L,O);return}if(re===Qs){_(g,L,O);return}if(Z!==2&&D&1&&b)if(Z===0)b.beforeEnter(ie),i(ie,L,O),Zt(()=>b.enter(ie),W);else{const{leave:G,delayLeave:V,afterLeave:ce}=b,ae=()=>i(ie,L,O),he=()=>{G(ie,()=>{ae(),ce&&ce()})};V?V(ie,ae,he):he()}else i(ie,L,O)},Ie=(g,L,O,Z=!1,W=!1)=>{const{type:ie,props:re,ref:b,children:v,dynamicChildren:D,shapeFlag:j,patchFlag:G,dirs:V,cacheIndex:ce}=g;if(G===-2&&(W=!1),b!=null&&Ga(b,null,O,g,!0),ce!=null&&(L.renderCache[ce]=void 0),j&256){L.ctx.deactivate(g);return}const ae=j&1&&V,he=!xr(g);let Re;if(he&&(Re=re&&re.onVnodeBeforeUnmount)&&Sn(Re,L,g),j&6)fe(g.component,O,Z);else{if(j&128){g.suspense.unmount(O,Z);return}ae&&bi(g,null,L,"beforeUnmount"),j&64?g.type.remove(g,L,O,de,Z):D&&!D.hasOnce&&(ie!==wt||G>0&&G&64)?xe(D,L,O,!1,!0):(ie===wt&&G&384||!W&&j&16)&&xe(v,L,O),Z&&je(g)}(he&&(Re=re&&re.onVnodeUnmounted)||ae)&&Zt(()=>{Re&&Sn(Re,L,g),ae&&bi(g,null,L,"unmounted")},O)},je=g=>{const{type:L,el:O,anchor:Z,transition:W}=g;if(L===wt){ee(O,Z);return}if(L===Qs){y(g);return}const ie=()=>{r(O),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(g.shapeFlag&1&&W&&!W.persisted){const{leave:re,delayLeave:b}=W,v=()=>re(O,ie);b?b(g.el,ie,v):v()}else ie()},ee=(g,L)=>{let O;for(;g!==L;)O=d(g),r(g),g=O;r(L)},fe=(g,L,O)=>{const{bum:Z,scope:W,job:ie,subTree:re,um:b,m:v,a:D}=g;kc(v),kc(D),Z&&jo(Z),W.stop(),ie&&(ie.flags|=8,Ie(re,g,L,O)),b&&Zt(b,L),Zt(()=>{g.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},xe=(g,L,O,Z=!1,W=!1,ie=0)=>{for(let re=ie;re<g.length;re++)Ie(g[re],L,O,Z,W)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const L=d(g.anchor||g.el),O=L&&L[kp];return O?d(O):L};let se=!1;const ne=(g,L,O)=>{g==null?L._vnode&&Ie(L._vnode,null,null,!0):E(L._vnode||null,g,L,null,null,null,O),L._vnode=g,se||(se=!0,Lc(),ed(),se=!1)},de={p:E,um:Ie,m:Me,r:je,mt:Q,mc:I,pc:H,pbc:x,n:F,o:n};let we,Pe;return{render:ne,hydrate:we,createApp:om(ne,we)}}function Qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ai({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Pd(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ci(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Pd(o,a)),a.type===No&&(a.el=o.el)}}function gm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ld(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ld(e)}function kc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const _m=Symbol.for("v-scx"),vm=()=>Xn(_m);function Js(n,e,t){return Dd(n,e,t)}function Dd(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=xt({},t),l=e&&i||!e&&s!=="post";let c;if(us){if(s==="sync"){const h=vm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Tn,h.resume=Tn,h.pause=Tn,h}}const u=Rt;a.call=(h,S,E)=>vn(h,u,S,E);let f=!1;s==="post"?a.scheduler=h=>{Zt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,S)=>{S?h():Zl(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Np(n,e,a);return us&&(c?c.push(d):l&&d()),d}function xm(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Id(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=_s(this),a=Dd(r,s.bind(i),t);return o(),a}function Id(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Sm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${$i(e)}Modifiers`];function Mm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&Sm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>_t(u)?u.trim():u)),o.number&&(r=t.map(ep)));let a,l=i[a=Xo(e)]||i[a=Xo(ln(e))];!l&&s&&(l=i[a=Xo($i(e))]),l&&vn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(c,n,6,r)}}function Ud(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Ud(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>o[l]=null):xt(o,s),pt(n)&&i.set(n,o),o)}function Uo(n,e){return!n||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,$i(e))||rt(n,e))}function ea(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:S,inheritAttrs:E}=n,m=fo(n);let p,M;try{if(t.shapeFlag&4){const y=r||i,P=y;p=En(c.call(P,y,u,f,h,d,S)),M=a}else{const y=e;p=En(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:ym(a)}}catch(y){Zr.length=0,Po(y,n,1),p=pe(zt)}let _=p;if(M&&E!==!1){const y=Object.keys(M),{shapeFlag:P}=_;y.length&&P&7&&(s&&y.some(Hl)&&(M=Em(M,s)),_=gi(_,M,!1,!0))}return t.dirs&&(_=gi(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&Wi(_,t.transition),p=_,fo(m),p}const ym=n=>{let e;for(const t in n)(t==="class"||t==="style"||Mo(t))&&((e||(e={}))[t]=n[t]);return e},Em=(n,e)=>{const t={};for(const i in n)(!Hl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?zc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Uo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zc(i,o,c):!0:!!o;return!1}function zc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Uo(t,s))return!0}return!1}function Am({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Nd=n=>n.__isSuspense;function Tm(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Bp(n)}const wt=Symbol.for("v-fgt"),No=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Qs=Symbol.for("v-stc"),Zr=[];let en=null;function Ye(n=!1){Zr.push(en=n?null:[])}function wm(){Zr.pop(),en=Zr[Zr.length-1]||null}let as=1;function Hc(n){as+=n,n<0&&en&&(en.hasOnce=!0)}function Fd(n){return n.dynamicChildren=as>0?en||pr:null,wm(),as>0&&en&&en.push(n),n}function ot(n,e,t,i,r,s){return Fd(C(n,e,t,i,r,s,!0))}function ls(n,e,t,i,r){return Fd(pe(n,e,t,i,r,!0))}function cs(n){return n?n.__v_isVNode===!0:!1}function Fi(n,e){return n.type===e.type&&n.key===e.key}const Od=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ut(n)||Ve(n)?{i:It,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,i=0,r=null,s=n===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Od(e),ref:e&&eo(e),scopeId:nd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:It};return a?(tc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),as>0&&!o&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const pe=Rm;function Rm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gd)&&(n=zt),cs(n)){const a=gi(n,e,!0);return t&&tc(a,t),as>0&&!s&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Cm(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=wo(a)),pt(l)&&(Kl(l)&&!ke(l)&&(l=xt({},l)),e.style=To(l))}const o=_t(n)?1:Nd(n)?128:id(n)?64:pt(n)?4:Ve(n)?2:0;return C(n,e,t,i,r,o,s,!0)}function Cm(n){return n?Kl(n)||Ed(n)?xt({},n):n:null}function gi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Od(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gi(n.ssContent),ssFallback:n.ssFallback&&gi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Wi(u,l.clone(u)),u}function He(n=" ",e=0){return pe(No,null,n,e)}function $n(n,e){const t=pe(Qs,null,n);return t.staticCount=e,t}function Pm(n="",e=!1){return e?(Ye(),ls(zt,null,n)):pe(zt,null,n)}function En(n){return n==null||typeof n=="boolean"?pe(zt):ke(n)?pe(wt,null,n.slice()):cs(n)?ci(n):pe(No,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gi(n)}function tc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),tc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ed(e)?e._ctx=It:r===3&&It&&(It.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:It},t=32):(e=String(e),i&64?(t=16,e=[He(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=wo([e.class,i.class]));else if(r==="style")e.style=To([e.style,i.style]);else if(Mo(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){vn(n,e,7,[t,i])}const Dm=Sd();let Im=0;function Um(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Dm,s={uid:Im++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(i,r),emitsOptions:Ud(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Mm.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const Bd=()=>Rt||It;let po,Ya;{const n=Ao(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};po=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Ya=e("__VUE_SSR_SETTERS__",t=>us=t)}const _s=n=>{const e=Rt;return po(n),n.scope.on(),()=>{n.scope.off(),po(e)}},Vc=()=>{Rt&&Rt.scope.off(),po(null)};function kd(n){return n.vnode.shapeFlag&4}let us=!1;function Nm(n,e=!1,t=!1){e&&Ya(e);const{props:i,children:r}=n.vnode,s=kd(n);am(n,i,s,e),fm(n,r,t);const o=s?Fm(n,e):void 0;return e&&Ya(!1),o}function Fm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qp);const{setup:i}=t;if(i){xi();const r=n.setupContext=i.length>1?Bm(n):null,s=_s(n),o=ms(i,n,0,[n.props,r]),a=wf(o);if(Si(),s(),(a||n.sp)&&!xr(n)&&ud(n),a){if(o.then(Vc,Vc),e)return o.then(l=>{Gc(n,l,e)}).catch(l=>{Po(l,n,0)});n.asyncDep=o}else Gc(n,o,e)}else zd(n,e)}function Gc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Zf(e)),zd(n,t)}let Wc;function zd(n,e,t){const i=n.type;if(!n.render){if(!e&&Wc&&!i.render){const r=i.template||Ql(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=Wc(r,c)}}n.render=i.render||Tn}{const r=_s(n);xi();try{em(n)}finally{Si(),r()}}}const Om={get(n,e){return Lt(n,"get",""),n[e]}};function Bm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Om),slots:n.slots,emit:n.emit,expose:e}}function nc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zf(Rp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}})):n.proxy}function km(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function zm(n){return Ve(n)&&"__vccOpts"in n}const sn=(n,e)=>Ip(n,e,us);function ic(n,e,t){const i=arguments.length;return i===2?pt(e)&&!ke(e)?cs(e)?pe(n,null,[e]):pe(n,e):pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&cs(t)&&(t=[t]),pe(n,e,t))}const Hm="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ka;const Xc=typeof window<"u"&&window.trustedTypes;if(Xc)try{Ka=Xc.createPolicy("vue",{createHTML:n=>n})}catch{}const Hd=Ka?n=>Ka.createHTML(n):n=>n,Vm="http://www.w3.org/2000/svg",Gm="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,jc=zn&&zn.createElement("template"),Wm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?zn.createElementNS(Vm,n):e==="mathml"?zn.createElementNS(Gm,n):t?zn.createElement(n,{is:t}):zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>zn.createTextNode(n),createComment:n=>zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{jc.innerHTML=Hd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jn="transition",Or="animation",br=Symbol("_vtc"),Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gd=xt({},sd,Vd),Xm=n=>(n.displayName="Transition",n.props=Gd,n),Wd=Xm((n,{slots:e})=>ic(Hp,Xd(n),e)),Ti=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},$c=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function Xd(n){const e={};for(const U in n)U in Vd||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,S=jm(r),E=S&&S[0],m=S&&S[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:_,onLeave:y,onLeaveCancelled:P,onBeforeAppear:R=p,onAppear:w=M,onAppearCancelled:I=_}=e,k=(U,X,Q)=>{oi(U,X?u:a),oi(U,X?c:o),Q&&Q()},x=(U,X)=>{U._isLeaving=!1,oi(U,f),oi(U,h),oi(U,d),X&&X()},A=U=>(X,Q)=>{const oe=U?w:M,q=()=>k(X,U,Q);Ti(oe,[X,q]),qc(()=>{oi(X,U?l:s),Bn(X,U?u:a),$c(oe)||Yc(X,i,E,q)})};return xt(e,{onBeforeEnter(U){Ti(p,[U]),Bn(U,s),Bn(U,o)},onBeforeAppear(U){Ti(R,[U]),Bn(U,l),Bn(U,c)},onEnter:A(!1),onAppear:A(!0),onLeave(U,X){U._isLeaving=!0;const Q=()=>x(U,X);Bn(U,f),Bn(U,d),$d(),qc(()=>{U._isLeaving&&(oi(U,f),Bn(U,h),$c(y)||Yc(U,i,m,Q))}),Ti(y,[U,Q])},onEnterCancelled(U){k(U,!1),Ti(_,[U])},onAppearCancelled(U){k(U,!0),Ti(I,[U])},onLeaveCancelled(U){x(U),Ti(P,[U])}})}function jm(n){if(n==null)return null;if(pt(n))return[ta(n.enter),ta(n.leave)];{const e=ta(n);return[e,e]}}function ta(n){return tp(n)}function Bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[br]||(n[br]=new Set)).add(e)}function oi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[br];t&&(t.delete(e),t.size||(n[br]=void 0))}function qc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $m=0;function Yc(n,e,t,i){const r=n._endId=++$m,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=jd(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function jd(n,e){const t=window.getComputedStyle(n),i=S=>(t[S]||"").split(", "),r=i(`${Jn}Delay`),s=i(`${Jn}Duration`),o=Kc(r,s),a=i(`${Or}Delay`),l=i(`${Or}Duration`),c=Kc(a,l);let u=null,f=0,d=0;e===Jn?o>0&&(u=Jn,f=o,d=s.length):e===Or?c>0&&(u=Or,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Jn:Or:null,d=u?u===Jn?s.length:l.length:0);const h=u===Jn&&/\b(transform|all)(,|$)/.test(i(`${Jn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Kc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Zc(t)+Zc(n[i])))}function Zc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $d(){return document.body.offsetHeight}function qm(n,e,t){const i=n[br];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jc=Symbol("_vod"),Ym=Symbol("_vsh"),Km=Symbol(""),Zm=/(^|;)\s*display\s*:/;function Jm(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&to(i,a,"")}else for(const o in e)t[o]==null&&to(i,o,"");for(const o in t)o==="display"&&(s=!0),to(i,o,t[o])}else if(r){if(e!==t){const o=i[Km];o&&(t+=";"+o),i.cssText=t,s=Zm.test(t)}}else e&&n.removeAttribute("style");Jc in n&&(n[Jc]=s?i.display:"",n[Ym]&&(i.display="none"))}const Qc=/\s*!important$/;function to(n,e,t){if(ke(t))t.forEach(i=>to(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Qm(n,e);Qc.test(t)?n.setProperty($i(i),t.replace(Qc,""),"important"):n[i]=t}}const eu=["Webkit","Moz","ms"],na={};function Qm(n,e){const t=na[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return na[e]=i;i=bo(i);for(let r=0;r<eu.length;r++){const s=eu[r]+i;if(s in n)return na[e]=s}return e}const tu="http://www.w3.org/1999/xlink";function nu(n,e,t,i,r,s=ap(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(tu,e.slice(6,e.length)):n.setAttributeNS(tu,e,t):t==null||s&&!Lf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Yn(t)?String(t):t)}function iu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Lf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function eg(n,e,t,i){n.addEventListener(e,t,i)}function tg(n,e,t,i){n.removeEventListener(e,t,i)}const ru=Symbol("_vei");function ng(n,e,t,i,r=null){const s=n[ru]||(n[ru]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ig(e);if(i){const c=s[e]=og(i,r);eg(n,a,c,l)}else o&&(tg(n,a,o,l),s[e]=void 0)}}const su=/(?:Once|Passive|Capture)$/;function ig(n){let e;if(su.test(n)){e={};let i;for(;i=n.match(su);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),e]}let ia=0;const rg=Promise.resolve(),sg=()=>ia||(rg.then(()=>ia=0),ia=Date.now());function og(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;vn(ag(i,t.value),e,5,[i])};return t.value=n,t.attached=sg(),t}function ag(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ou=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?qm(n,i,o):e==="style"?Jm(n,t,i):Mo(e)?Hl(e)||ng(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(n,e,i,o))?(iu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?iu(n,ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),nu(n,e,i,o))};function cg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ou(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ou(e)&&_t(t)?!1:e in n}const qd=new WeakMap,Yd=new WeakMap,mo=Symbol("_moveCb"),au=Symbol("_enterCb"),ug=n=>(delete n.props.mode,n),fg=ug({name:"TransitionGroup",props:xt({},Gd,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Bd(),i=rd();let r,s;return dd(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!gg(r[0].el,t.vnode.el,o))return;r.forEach(hg),r.forEach(pg);const a=r.filter(mg);$d(),a.forEach(l=>{const c=l.el,u=c.style;Bn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[mo]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[mo]=null,oi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Ze(n),a=Xd(o);let l=o.tag||wt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),Wi(u,os(u,a,i,t)),qd.set(u,u.el.getBoundingClientRect()))}s=e.default?Jl(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Wi(u,os(u,a,i,t))}return pe(l,null,s)}}}),dg=fg;function hg(n){const e=n.el;e[mo]&&e[mo](),e[au]&&e[au]()}function pg(n){Yd.set(n,n.el.getBoundingClientRect())}function mg(n){const e=qd.get(n),t=Yd.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function gg(n,e,t){const i=n.cloneNode(),r=n[br];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=jd(i);return s.removeChild(i),o}const _g=xt({patchProp:lg},Wm);let lu;function vg(){return lu||(lu=hm(_g))}const xg=(...n)=>{const e=vg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mg(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Sg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mg(n){return _t(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fr=typeof document<"u";function Kd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function yg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kd(n.default)}const lt=Object.assign;function ra(n,e){const t={};for(const i in e){const r=e[i];t[i]=xn(r)?r.map(n):n(r)}return t}const Jr=()=>{},xn=Array.isArray,Zd=/#/g,Eg=/&/g,bg=/\//g,Ag=/=/g,Tg=/\?/g,Jd=/\+/g,wg=/%5B/g,Rg=/%5D/g,Qd=/%5E/g,Cg=/%60/g,eh=/%7B/g,Pg=/%7C/g,th=/%7D/g,Lg=/%20/g;function rc(n){return encodeURI(""+n).replace(Pg,"|").replace(wg,"[").replace(Rg,"]")}function Dg(n){return rc(n).replace(eh,"{").replace(th,"}").replace(Qd,"^")}function Za(n){return rc(n).replace(Jd,"%2B").replace(Lg,"+").replace(Zd,"%23").replace(Eg,"%26").replace(Cg,"`").replace(eh,"{").replace(th,"}").replace(Qd,"^")}function Ig(n){return Za(n).replace(Ag,"%3D")}function Ug(n){return rc(n).replace(Zd,"%23").replace(Tg,"%3F")}function Ng(n){return n==null?"":Ug(n).replace(bg,"%2F")}function fs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Fg=/\/$/,Og=n=>n.replace(Fg,"");function sa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Hg(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:fs(o)}}function Bg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function cu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function kg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ar(e.matched[i],t.matched[r])&&nh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ar(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function nh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!zg(n[t],e[t]))return!1;return!0}function zg(n,e){return xn(n)?uu(n,e):xn(e)?uu(e,n):n===e}function uu(n,e){return xn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Hg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ds;(function(n){n.pop="pop",n.push="push"})(ds||(ds={}));var Qr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qr||(Qr={}));function Vg(n){if(!n)if(fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Og(n)}const Gg=/^[^#]+#/;function Wg(n,e){return n.replace(Gg,"#")+e}function Xg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Fo=()=>({left:window.scrollX,top:window.scrollY});function jg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Xg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fu(n,e){return(history.state?history.state.position-e:-1)+n}const Ja=new Map;function $g(n,e){Ja.set(n,e)}function qg(n){const e=Ja.get(n);return Ja.delete(n),e}let Yg=()=>location.protocol+"//"+location.host;function ih(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),cu(l,"")}return cu(t,n)+i+r}function Kg(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=ih(n,location),S=t.value,E=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===S){o=null;return}m=E?d.position-E.position:0}else i(h);r.forEach(p=>{p(t.value,S,{delta:m,type:ds.pop,direction:m?m>0?Qr.forward:Qr.back:Qr.unknown})})};function l(){o=t.value}function c(d){r.push(d);const h=()=>{const S=r.indexOf(d);S>-1&&r.splice(S,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(lt({},d.state,{scroll:Fo()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function du(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Fo():null}}function Zg(n){const{history:e,location:t}=window,i={value:ih(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Yg()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){const u=lt({},e.state,du(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=lt({},r.value,e.state,{forward:l,scroll:Fo()});s(u.current,u,!0);const f=lt({},du(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Jg(n){n=Vg(n);const e=Zg(n),t=Kg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=lt({location:"",base:n,go:i,createHref:Wg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Qg(n){return typeof n=="string"||n&&typeof n=="object"}function rh(n){return typeof n=="string"||typeof n=="symbol"}const sh=Symbol("");var hu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(hu||(hu={}));function Tr(n,e){return lt(new Error,{type:n,[sh]:!0},e)}function Dn(n,e){return n instanceof Error&&sh in n&&(e==null||!!(n.type&e))}const pu="[^/]+?",e_={sensitive:!1,strict:!1,start:!0,end:!0},t_=/[.+*?^${}()[\]/\\]/g;function n_(n,e){const t=lt({},e_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(t_,"\\$&"),h+=40;else if(d.type===1){const{value:S,repeatable:E,optional:m,regexp:p}=d;s.push({name:S,repeatable:E,optional:m});const M=p||pu;if(M!==pu){h+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+y.message)}}let _=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,h+=20,m&&(h+=-8),E&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",S=s[d-1];f[S.name]=h&&S.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:S,repeatable:E,optional:m}=h,p=S in c?c[S]:"";if(xn(p)&&!E)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=xn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function i_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function oh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=i_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(mu(i))return 1;if(mu(r))return-1}return r.length-i.length}function mu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const r_={type:0,value:""},s_=/[a-zA-Z0-9_]/;function o_(n){if(!n)return[[]];if(n==="/")return[[r_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:s_.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function a_(n,e,t){const i=n_(o_(n.path),t),r=lt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function l_(n,e){const t=[],i=new Map;e=xu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const S=!h,E=_u(f);E.aliasOf=h&&h.record;const m=xu(e,f),p=[E];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of y)p.push(_u(lt({},E,{components:h?h.record.components:E.components,path:P,aliasOf:h?h.record:E})))}let M,_;for(const y of p){const{path:P}=y;if(d&&P[0]!=="/"){const R=d.record.path,w=R[R.length-1]==="/"?"":"/";y.path=d.record.path+(P&&w+P)}if(M=a_(y,d,m),h?h.alias.push(M):(_=_||M,_!==M&&_.alias.push(M),S&&f.name&&!vu(M)&&o(f.name)),ah(M)&&l(M),E.children){const R=E.children;for(let w=0;w<R.length;w++)s(R[w],M,h&&h.children[w])}h=h||M}return _?()=>{o(_)}:Jr}function o(f){if(rh(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=f_(f,t);t.splice(d,0,f),f.record.name&&!vu(f)&&i.set(f.record.name,f)}function c(f,d){let h,S={},E,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Tr(1,{location:f});m=h.record.name,S=lt(gu(d.params,h.keys.filter(_=>!_.optional).concat(h.parent?h.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&gu(f.params,h.keys.map(_=>_.name))),E=h.stringify(S)}else if(f.path!=null)E=f.path,h=t.find(_=>_.re.test(E)),h&&(S=h.parse(E),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(_=>_.re.test(d.path)),!h)throw Tr(1,{location:f,currentLocation:d});m=h.record.name,S=lt({},d.params,f.params),E=h.stringify(S)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:E,params:S,matched:p,meta:u_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function gu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function _u(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:c_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function c_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function vu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function u_(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function xu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function f_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;oh(n,e[s])<0?i=s:t=s+1}const r=d_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function d_(n){let e=n;for(;e=e.parent;)if(ah(e)&&oh(n,e)===0)return e}function ah({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function h_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Jd," "),o=s.indexOf("="),a=fs(o<0?s:s.slice(0,o)),l=o<0?null:fs(s.slice(o+1));if(a in e){let c=e[a];xn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Su(n){let e="";for(let t in n){const i=n[t];if(t=Ig(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(xn(i)?i.map(s=>s&&Za(s)):[i&&Za(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function p_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=xn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const m_=Symbol(""),Mu=Symbol(""),sc=Symbol(""),lh=Symbol(""),Qa=Symbol("");function Br(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ui(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Tr(4,{from:t,to:e})):d instanceof Error?l(d):Qg(d)?l(Tr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function oa(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kd(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ui(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=yg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&ui(h,t,i,o,a,r)()}))}}return s}function yu(n){const e=Xn(sc),t=Xn(lh),i=sn(()=>{const l=_r(n.to);return e.resolve(l)}),r=sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ar.bind(null,u));if(d>-1)return d;const h=Eu(l[c-2]);return c>1&&Eu(u)===h&&f[f.length-1].path!==h?f.findIndex(Ar.bind(null,l[c-2])):d}),s=sn(()=>r.value>-1&&x_(t.params,i.value.params)),o=sn(()=>r.value>-1&&r.value===t.matched.length-1&&nh(t.params,i.value.params));function a(l={}){return v_(l)?e[_r(n.replace)?"replace":"push"](_r(n.to)).catch(Jr):Promise.resolve()}return{route:i,href:sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const g_=cd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yu,setup(n,{slots:e}){const t=Co(yu(n)),{options:i}=Xn(sc),r=sn(()=>({[bu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[bu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:ic("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),__=g_;function v_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function x_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!xn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Eu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const bu=(n,e,t)=>n??e??t,S_=cd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Xn(Qa),r=sn(()=>n.route||i.value),s=Xn(Mu,0),o=sn(()=>{let c=_r(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=sn(()=>r.value.matched[o.value]);Zs(Mu,sn(()=>o.value+1)),Zs(m_,a),Zs(Qa,r);const l=rs();return Js(()=>[l.value,a.value,n.name],([c,u,f],[d,h,S])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ar(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return Au(t.default,{Component:d,route:c});const h=f.props[u],S=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=ic(d,lt({},S,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Au(t.default,{Component:m,route:c})||m}}});function Au(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const M_=S_;function y_(n){const e=l_(n.routes,n),t=n.parseQuery||h_,i=n.stringifyQuery||Su,r=n.history,s=Br(),o=Br(),a=Br(),l=Cp(Qn);let c=Qn;fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ra.bind(null,F=>""+F),f=ra.bind(null,Ng),d=ra.bind(null,fs);function h(F,se){let ne,de;return rh(F)?(ne=e.getRecordMatcher(F),de=se):de=F,e.addRoute(de,ne)}function S(F){const se=e.getRecordMatcher(F);se&&e.removeRoute(se)}function E(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,se){if(se=lt({},se||l.value),typeof F=="string"){const L=sa(t,F,se.path),O=e.resolve({path:L.path},se),Z=r.createHref(L.fullPath);return lt(L,O,{params:d(O.params),hash:fs(L.hash),redirectedFrom:void 0,href:Z})}let ne;if(F.path!=null)ne=lt({},F,{path:sa(t,F.path,se.path).path});else{const L=lt({},F.params);for(const O in L)L[O]==null&&delete L[O];ne=lt({},F,{params:f(L)}),se.params=f(se.params)}const de=e.resolve(ne,se),we=F.hash||"";de.params=u(d(de.params));const Pe=Bg(i,lt({},F,{hash:Dg(we),path:de.path})),g=r.createHref(Pe);return lt({fullPath:Pe,hash:we,query:i===Su?p_(F.query):F.query||{}},de,{redirectedFrom:void 0,href:g})}function M(F){return typeof F=="string"?sa(t,F,l.value.path):lt({},F)}function _(F,se){if(c!==F)return Tr(8,{from:se,to:F})}function y(F){return w(F)}function P(F){return y(lt(M(F),{replace:!0}))}function R(F){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:ne}=se;let de=typeof ne=="function"?ne(F):ne;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=M(de):{path:de},de.params={}),lt({query:F.query,hash:F.hash,params:de.path!=null?{}:F.params},de)}}function w(F,se){const ne=c=p(F),de=l.value,we=F.state,Pe=F.force,g=F.replace===!0,L=R(ne);if(L)return w(lt(M(L),{state:typeof L=="object"?lt({},we,L.state):we,force:Pe,replace:g}),se||ne);const O=ne;O.redirectedFrom=se;let Z;return!Pe&&kg(i,de,ne)&&(Z=Tr(16,{to:O,from:de}),Me(de,de,!0,!1)),(Z?Promise.resolve(Z):x(O,de)).catch(W=>Dn(W)?Dn(W,2)?W:_e(W):H(W,O,de)).then(W=>{if(W){if(Dn(W,2))return w(lt({replace:g},M(W.to),{state:typeof W.to=="object"?lt({},we,W.to.state):we,force:Pe}),se||O)}else W=U(O,de,!0,g,we);return A(O,de,W),W})}function I(F,se){const ne=_(F,se);return ne?Promise.reject(ne):Promise.resolve()}function k(F){const se=ee.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(F):F()}function x(F,se){let ne;const[de,we,Pe]=E_(F,se);ne=oa(de.reverse(),"beforeRouteLeave",F,se);for(const L of de)L.leaveGuards.forEach(O=>{ne.push(ui(O,F,se))});const g=I.bind(null,F,se);return ne.push(g),xe(ne).then(()=>{ne=[];for(const L of s.list())ne.push(ui(L,F,se));return ne.push(g),xe(ne)}).then(()=>{ne=oa(we,"beforeRouteUpdate",F,se);for(const L of we)L.updateGuards.forEach(O=>{ne.push(ui(O,F,se))});return ne.push(g),xe(ne)}).then(()=>{ne=[];for(const L of Pe)if(L.beforeEnter)if(xn(L.beforeEnter))for(const O of L.beforeEnter)ne.push(ui(O,F,se));else ne.push(ui(L.beforeEnter,F,se));return ne.push(g),xe(ne)}).then(()=>(F.matched.forEach(L=>L.enterCallbacks={}),ne=oa(Pe,"beforeRouteEnter",F,se,k),ne.push(g),xe(ne))).then(()=>{ne=[];for(const L of o.list())ne.push(ui(L,F,se));return ne.push(g),xe(ne)}).catch(L=>Dn(L,8)?L:Promise.reject(L))}function A(F,se,ne){a.list().forEach(de=>k(()=>de(F,se,ne)))}function U(F,se,ne,de,we){const Pe=_(F,se);if(Pe)return Pe;const g=se===Qn,L=fr?history.state:{};ne&&(de||g?r.replace(F.fullPath,lt({scroll:g&&L&&L.scroll},we)):r.push(F.fullPath,we)),l.value=F,Me(F,se,ne,g),_e()}let X;function Q(){X||(X=r.listen((F,se,ne)=>{if(!fe.listening)return;const de=p(F),we=R(de);if(we){w(lt(we,{replace:!0}),de).catch(Jr);return}c=de;const Pe=l.value;fr&&$g(fu(Pe.fullPath,ne.delta),Fo()),x(de,Pe).catch(g=>Dn(g,12)?g:Dn(g,2)?(w(g.to,de).then(L=>{Dn(L,20)&&!ne.delta&&ne.type===ds.pop&&r.go(-1,!1)}).catch(Jr),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),H(g,de,Pe))).then(g=>{g=g||U(de,Pe,!1),g&&(ne.delta&&!Dn(g,8)?r.go(-ne.delta,!1):ne.type===ds.pop&&Dn(g,20)&&r.go(-1,!1)),A(de,Pe,g)}).catch(Jr)}))}let oe=Br(),q=Br(),J;function H(F,se,ne){_e(F);const de=q.list();return de.length?de.forEach(we=>we(F,se,ne)):console.error(F),Promise.reject(F)}function me(){return J&&l.value!==Qn?Promise.resolve():new Promise((F,se)=>{oe.add([F,se])})}function _e(F){return J||(J=!F,Q(),oe.list().forEach(([se,ne])=>F?ne(F):se()),oe.reset()),F}function Me(F,se,ne,de){const{scrollBehavior:we}=n;if(!fr||!we)return Promise.resolve();const Pe=!ne&&qg(fu(F.fullPath,0))||(de||!ne)&&history.state&&history.state.scroll||null;return gs().then(()=>we(F,se,Pe)).then(g=>g&&jg(g)).catch(g=>H(g,F,se))}const Ie=F=>r.go(F);let je;const ee=new Set,fe={currentRoute:l,listening:!0,addRoute:h,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:E,resolve:p,options:n,push:y,replace:P,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:me,install(F){const se=this;F.component("RouterLink",__),F.component("RouterView",M_),F.config.globalProperties.$router=se,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>_r(l)}),fr&&!je&&l.value===Qn&&(je=!0,y(r.location).catch(we=>{}));const ne={};for(const we in Qn)Object.defineProperty(ne,we,{get:()=>l.value[we],enumerable:!0});F.provide(sc,se),F.provide(lh,qf(ne)),F.provide(Qa,l);const de=F.unmount;ee.add(F),F.unmount=function(){ee.delete(F),ee.size<1&&(c=Qn,X&&X(),X=null,l.value=Qn,je=!1,J=!1),de()}}};function xe(F){return F.reduce((se,ne)=>se.then(()=>k(ne)),Promise.resolve())}return fe}function E_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ar(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ar(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="169",b_=0,Tu=1,A_=2,ch=1,T_=2,kn=3,_i=0,Wt=1,Vn=2,pi=0,Mr=1,wu=2,Ru=3,Cu=4,w_=5,Oi=100,R_=101,C_=102,P_=103,L_=104,D_=200,I_=201,U_=202,N_=203,el=204,tl=205,F_=206,O_=207,B_=208,k_=209,z_=210,H_=211,V_=212,G_=213,W_=214,nl=0,il=1,rl=2,wr=3,sl=4,ol=5,al=6,ll=7,uh=0,X_=1,j_=2,mi=0,$_=1,q_=2,Y_=3,K_=4,Z_=5,J_=6,Q_=7,fh=300,Rr=301,Cr=302,cl=303,ul=304,Oo=306,fl=1e3,ki=1001,dl=1002,on=1003,e0=1004,Cs=1005,pn=1006,aa=1007,zi=1008,qn=1009,dh=1010,hh=1011,hs=1012,ac=1013,Xi=1014,Gn=1015,vs=1016,lc=1017,cc=1018,Pr=1020,ph=35902,mh=1021,gh=1022,gn=1023,_h=1024,vh=1025,yr=1026,Lr=1027,xh=1028,uc=1029,Sh=1030,fc=1031,dc=1033,no=33776,io=33777,ro=33778,so=33779,hl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,Sl=37808,Ml=37809,yl=37810,El=37811,bl=37812,Al=37813,Tl=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,oo=36492,Ul=36494,Nl=36495,Mh=36283,Fl=36284,Ol=36285,Bl=36286,t0=3200,n0=3201,yh=0,i0=1,di="",yn="srgb",Mi="srgb-linear",hc="display-p3",Bo="display-p3-linear",go="linear",ht="srgb",_o="rec709",vo="p3",Ki=7680,Pu=519,r0=512,s0=513,o0=514,Eh=515,a0=516,l0=517,c0=518,u0=519,Lu=35044,Du="300 es",Wn=2e3,xo=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const es=Math.PI/180,ps=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function pc(n,e){return(n%e+e)%e}function f0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function d0(n,e,t){return n!==e?(t-n)/(e-n):0}function ts(n,e,t){return(1-t)*n+t*e}function h0(n,e,t,i){return ts(n,e,1-Math.exp(-t*i))}function p0(n,e=1){return e-Math.abs(pc(n,e*2)-e)}function m0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function g0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function v0(n,e){return n+Math.random()*(e-n)}function x0(n){return n*(.5-Math.random())}function S0(n){n!==void 0&&(Iu=n);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(n){return n*es}function y0(n){return n*ps}function E0(n){return(n&n-1)===0&&n!==0}function b0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function A0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function T0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),S=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*S,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*S,a*c);break;case"ZYZ":n.set(l*S,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const w0={DEG2RAD:es,RAD2DEG:ps,generateUUID:Ur,clamp:kt,euclideanModulo:pc,mapLinear:f0,inverseLerp:d0,lerp:ts,damp:h0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:_0,randFloat:v0,randFloatSpread:x0,seededRandom:S0,degToRad:M0,radToDeg:y0,isPowerOfTwo:E0,ceilPowerOfTwo:b0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:T0,normalize:Ft,denormalize:dr};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],S=i[8],E=r[0],m=r[3],p=r[6],M=r[1],_=r[4],y=r[7],P=r[2],R=r[5],w=r[8];return s[0]=o*E+a*M+l*P,s[3]=o*m+a*_+l*R,s[6]=o*p+a*y+l*w,s[1]=c*E+u*M+f*P,s[4]=c*m+u*_+f*R,s[7]=c*p+u*y+f*w,s[2]=d*E+h*M+S*P,s[5]=d*m+h*_+S*R,s[8]=d*p+h*y+S*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,S=t*f+i*d+r*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=h*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Xe;function bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function R0(){const n=So("canvas");return n.style.display="block",n}const Uu={};function ao(n){n in Uu||(Uu[n]=!0,console.warn(n))}function C0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function P0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[Mi]:{transfer:go,primaries:_o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[yn]:{transfer:ht,primaries:_o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bo]:{transfer:go,primaries:vo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Fu),fromReference:n=>n.applyMatrix3(Nu)},[hc]:{transfer:ht,primaries:vo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fu),fromReference:n=>n.applyMatrix3(Nu).convertLinearToSRGB()}},D0=new Set([Mi,Bo]),st={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!D0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=kr[e].toReference,r=kr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return kr[n].primaries},getTransfer:function(n){return n===di?go:kr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(kr[e].luminanceCoefficients)}};function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class I0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=So("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ua(r[o].image)):s.push(ua(r[o]))}else s=ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;class Xt extends Ir{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ki,r=ki,s=pn,o=zi,a=gn,l=qn,c=Xt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ur(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fl:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fl:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=fh;Xt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],S=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-E)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+E)<.1&&Math.abs(S+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(h+1)/2,P=(p+1)/2,R=(u+d)/4,w=(f+E)/4,I=(S+m)/4;return _>y&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=w/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=I/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=I/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-S)*(m-S)+(f-E)*(f-E)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-S)/M,this.y=(f-E)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends Ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends F0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],S=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=S,e[t+3]=E;return}if(f!==E||l!==d||c!==h||u!==S){let m=1-a;const p=l*d+c*h+u*S+f*E,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),R=Math.atan2(P,p*M);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const y=a*M;if(l=l*m+d*y,c=c*m+h*y,u=u*m+S*y,f=f*m+E*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],S=s[o+3];return e[t]=a*S+u*f+l*h-c*d,e[t+1]=l*S+u*d+c*f-a*h,e[t+2]=c*S+u*h+a*d-l*f,e[t+3]=u*S-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"YXZ":this._x=d*u*f+c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"ZXY":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f-d*h*S;break;case"ZYX":this._x=d*u*f-c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f+d*h*S;break;case"YZX":this._x=d*u*f+c*h*S,this._y=c*h*f+d*u*S,this._z=c*u*S-d*h*f,this._w=c*u*f-d*h*S;break;case"XZY":this._x=d*u*f-c*h*S,this._y=c*h*f-d*u*S,this._z=c*u*S+d*h*f,this._w=c*u*f+d*h*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new $,Ou=new xs;class Ss{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Ls.subVectors(this.max,zr),Ji.subVectors(e.a,zr),Qi.subVectors(e.b,zr),er.subVectors(e.c,zr),ei.subVectors(Qi,Ji),ti.subVectors(er,Qi),wi.subVectors(Ji,er);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-wi.z,wi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,wi.z,0,-wi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-wi.y,wi.x,0];return!da(t,Ji,Qi,er,Ls)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Ji,Qi,er,Ls))?!1:(Ds.crossVectors(ei,ti),t=[Ds.x,Ds.y,Ds.z],da(t,Ji,Qi,er,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new $,new $,new $,new $,new $,new $,new $,new $],fn=new $,Ps=new Ss,Ji=new $,Qi=new $,er=new $,ei=new $,ti=new $,wi=new $,zr=new $,Ls=new $,Ds=new $,Ri=new $;function da(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ri.fromArray(n,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B0=new Ss,Hr=new $,ha=new $;class mc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ha)),this.expandByPoint(Hr.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new $,pa=new $,Is=new $,ni=new $,ma=new $,Us=new $,ga=new $;class k0{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pa.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=ni.dot(this.direction),l=-ni.dot(Is),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,d,h,S;if(u>0)if(f=o*l-a,d=o*a-l,S=s*u,f>=0)if(d>=-S)if(d<=S){const E=1/u;f*=E,d*=E,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-S?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=S?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pa).addScaledVector(Is,d),h}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){ma.subVectors(t,e),Us.subVectors(i,e),ga.crossVectors(ma,Us);let o=this.direction.dot(ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors(ni,Us));if(l<0)return null;const c=a*this.direction.dot(ma.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,S,E,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,S,E,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,S,E,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=S,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,S=a*u,E=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+S*c,t[5]=d-E*c,t[9]=-a*l,t[2]=E-d*c,t[6]=S+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,S=c*u,E=c*f;t[0]=d+E*a,t[4]=S*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-S,t[6]=E+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,S=c*u,E=c*f;t[0]=d-E*a,t[4]=-o*f,t[8]=S+h*a,t[1]=h+S*a,t[5]=o*u,t[9]=E-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,S=a*u,E=a*f;t[0]=l*u,t[4]=S*c-h,t[8]=d*c+E,t[1]=l*f,t[5]=E*c+d,t[9]=h*c-S,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,S=a*l,E=a*c;t[0]=l*u,t[4]=E-d*f,t[8]=S*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+S,t[10]=d-E*f}else if(e.order==="XZY"){const d=o*l,h=o*c,S=a*l,E=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+E,t[5]=o*u,t[9]=h*f-S,t[2]=S*f-h,t[6]=a*u,t[10]=E*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,H0)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ii.crossVectors(i,Yt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ii.crossVectors(i,Yt)),ii.normalize(),Ns.crossVectors(Yt,ii),r[0]=ii.x,r[4]=Ns.x,r[8]=Yt.x,r[1]=ii.y,r[5]=Ns.y,r[9]=Yt.y,r[2]=ii.z,r[6]=Ns.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],S=i[2],E=i[6],m=i[10],p=i[14],M=i[3],_=i[7],y=i[11],P=i[15],R=r[0],w=r[4],I=r[8],k=r[12],x=r[1],A=r[5],U=r[9],X=r[13],Q=r[2],oe=r[6],q=r[10],J=r[14],H=r[3],me=r[7],_e=r[11],Me=r[15];return s[0]=o*R+a*x+l*Q+c*H,s[4]=o*w+a*A+l*oe+c*me,s[8]=o*I+a*U+l*q+c*_e,s[12]=o*k+a*X+l*J+c*Me,s[1]=u*R+f*x+d*Q+h*H,s[5]=u*w+f*A+d*oe+h*me,s[9]=u*I+f*U+d*q+h*_e,s[13]=u*k+f*X+d*J+h*Me,s[2]=S*R+E*x+m*Q+p*H,s[6]=S*w+E*A+m*oe+p*me,s[10]=S*I+E*U+m*q+p*_e,s[14]=S*k+E*X+m*J+p*Me,s[3]=M*R+_*x+y*Q+P*H,s[7]=M*w+_*A+y*oe+P*me,s[11]=M*I+_*U+y*q+P*_e,s[15]=M*k+_*X+y*J+P*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],S=e[3],E=e[7],m=e[11],p=e[15];return S*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+E*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],S=e[12],E=e[13],m=e[14],p=e[15],M=f*m*c-E*d*c+E*l*h-a*m*h-f*l*p+a*d*p,_=S*d*c-u*m*c-S*l*h+o*m*h+u*l*p-o*d*p,y=u*E*c-S*f*c+S*a*h-o*E*h-u*a*p+o*f*p,P=S*f*l-u*E*l-S*a*d+o*E*d+u*a*m-o*f*m,R=t*M+i*_+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=M*w,e[1]=(E*d*s-f*m*s-E*r*h+i*m*h+f*r*p-i*d*p)*w,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*w,e[4]=_*w,e[5]=(u*m*s-S*d*s+S*r*h-t*m*h-u*r*p+t*d*p)*w,e[6]=(S*l*s-o*m*s-S*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*w,e[8]=y*w,e[9]=(S*f*s-u*E*s-S*i*h+t*E*h+u*i*p-t*f*p)*w,e[10]=(o*E*s-S*a*s+S*i*c-t*E*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*w,e[12]=P*w,e[13]=(u*E*r-S*f*r+S*i*d-t*E*d-u*i*m+t*f*m)*w,e[14]=(S*a*r-o*E*r-S*i*l+t*E*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,S=s*f,E=o*u,m=o*f,p=a*f,M=l*c,_=l*u,y=l*f,P=i.x,R=i.y,w=i.z;return r[0]=(1-(E+p))*P,r[1]=(h+y)*P,r[2]=(S-_)*P,r[3]=0,r[4]=(h-y)*R,r[5]=(1-(d+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(S+_)*w,r[9]=(m-M)*w,r[10]=(1-(d+E))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const c=1/s,u=1/o,f=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,t.setFromRotationMatrix(dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,S;if(a===Wn)h=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===xo)h=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let S,E;if(a===Wn)S=(o+s)*f,E=-2*f;else if(a===xo)S=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=E,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new $,dn=new mt,z0=new $(0,0,0),H0=new $(1,1,1),ii=new $,Ns=new $,Yt=new $,Bu=new mt,ku=new xs;class Cn{constructor(e=0,t=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V0=0;const zu=new $,nr=new xs,Nn=new mt,Fs=new $,Vr=new $,G0=new $,W0=new xs,Hu=new $(1,0,0),Vu=new $(0,1,0),Gu=new $(0,0,1),Wu={type:"added"},X0={type:"removed"},ir={type:"childadded",child:null},_a={type:"childremoved",child:null};class jt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new $,t=new Cn,i=new xs,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Vr,Fs,this.up):Nn.lookAt(Fs,Vr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Nn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new $(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new $,Fn=new $,va=new $,On=new $,rr=new $,sr=new $,Xu=new $,xa=new $,Sa=new $,Ma=new $,ya=new ct,Ea=new ct,ba=new ct;class mn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Fn.subVectors(i,t),va.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Fn),l=hn.dot(va),c=Fn.dot(Fn),u=Fn.dot(va),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,S=(o*u-a*l)*d;return s.set(1-h-S,S,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ya.setScalar(0),Ea.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,i),ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ya,s.x),o.addScaledVector(Ea,s.y),o.addScaledVector(ba,s.z),o}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,i),sr.subVectors(s,i),xa.subVectors(e,i);const l=rr.dot(xa),c=sr.dot(xa);if(l<=0&&c<=0)return t.copy(i);Sa.subVectors(e,r);const u=rr.dot(Sa),f=sr.dot(Sa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rr,o);Ma.subVectors(e,s);const h=rr.dot(Ma),S=sr.dot(Ma);if(S>=0&&h<=S)return t.copy(s);const E=h*c-l*S;if(E<=0&&c>=0&&S<=0)return a=c/(c-S),t.copy(i).addScaledVector(sr,a);const m=u*S-h*f;if(m<=0&&f-u>=0&&h-S>=0)return Xu.subVectors(s,r),a=(f-u)/(f-u+(h-S)),t.copy(r).addScaledVector(Xu,a);const p=1/(m+E+d);return o=E*p,a=d*p,t.copy(i).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=pc(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Aa(o,s,e+1/3),this.g=Aa(o,s,e),this.b=Aa(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=Rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return st.fromWorkingColorSpace(Pt.copy(this),e),Math.round(kt(Pt.r*255,0,255))*65536+Math.round(kt(Pt.g*255,0,255))*256+Math.round(kt(Pt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=yn){st.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Os);const i=ts(ri.h,Os.h,t),r=ts(ri.s,Os.s,t),s=ts(ri.l,Os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new et;et.NAMES=Rh;let j0=0;class Ms extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Mr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ch extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new $,Bs=new Je;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class Ph extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lh extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $0=0;const rn=new mt,Ta=new jt,or=new $,Kt=new Ss,Gr=new Ss,At=new $;class yi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?Lh:Ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Kt.min,Gr.min),Kt.expandByPoint(At),At.addVectors(Kt.max,Gr.max),Kt.expandByPoint(At)):(Kt.expandByPoint(Gr.min),Kt.expandByPoint(Gr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),At.add(or)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new $,l[I]=new $;const c=new $,u=new $,f=new $,d=new Je,h=new Je,S=new Je,E=new $,m=new $;function p(I,k,x){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,k),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,k),S.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),S.sub(d);const A=1/(h.x*S.y-S.x*h.y);isFinite(A)&&(E.copy(u).multiplyScalar(S.y).addScaledVector(f,-h.y).multiplyScalar(A),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-S.x).multiplyScalar(A),a[I].add(E),a[k].add(E),a[x].add(E),l[I].add(m),l[k].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,k=M.length;I<k;++I){const x=M[I],A=x.start,U=x.count;for(let X=A,Q=A+U;X<Q;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const _=new $,y=new $,P=new $,R=new $;function w(I){P.fromBufferAttribute(r,I),R.copy(P);const k=a[I];_.copy(k),_.sub(P.multiplyScalar(P.dot(k))).normalize(),y.crossVectors(R,k);const A=y.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,A)}for(let I=0,k=M.length;I<k;++I){const x=M[I],A=x.start,U=x.count;for(let X=A,Q=A+U;X<Q;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,h=e.count;d<h;d+=3){const S=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,S=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?h=l[E]*a.data.stride+a.offset:h=l[E]*u;for(let p=0;p<u;p++)d[S++]=c[h++]}return new wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new mt,Ci=new k0,ks=new mc,$u=new $,zs=new $,Hs=new $,Vs=new $,wa=new $,Gs=new $,qu=new $,Ws=new $;class An extends jt{constructor(e=new yi,t=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wa.fromBufferAttribute(f,e),o?Gs.addScaledVector(wa,u):Gs.addScaledVector(wa.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(ks.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ks,$u)===null||Ci.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(ju.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(ju),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,E=d.length;S<E;S++){const m=d[S],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=_;y<P;y+=3){const R=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);r=Xs(this,p,e,i,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,h.start),E=Math.min(a.count,h.start+h.count);for(let m=S,p=E;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Xs(this,o,e,i,c,u,f,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,E=d.length;S<E;S++){const m=d[S],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,P=_;y<P;y+=3){const R=y,w=y+1,I=y+2;r=Xs(this,p,e,i,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let m=S,p=E;m<p;m+=3){const M=m,_=m+1,y=m+2;r=Xs(this,o,e,i,c,u,f,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function q0(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,zs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Vs);const u=q0(n,e,t,i,zs,Hs,Vs,qu);if(u){const f=new $;mn.getBarycoord(qu,zs,Hs,Vs,f),r&&(u.uv=mn.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=mn.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};mn.getNormal(zs,Hs,Vs,d.normal),u.face=d,u.barycoord=f}return u}class ys extends yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;S("z","y","x",-1,-1,i,t,e,o,s,0),S("z","y","x",1,-1,i,t,-e,o,s,1),S("x","z","y",1,1,e,i,t,r,o,2),S("x","z","y",1,-1,e,i,-t,r,o,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(f,2));function S(E,m,p,M,_,y,P,R,w,I,k){const x=y/w,A=P/I,U=y/2,X=P/2,Q=R/2,oe=w+1,q=I+1;let J=0,H=0;const me=new $;for(let _e=0;_e<q;_e++){const Me=_e*A-X;for(let Ie=0;Ie<oe;Ie++){const je=Ie*x-U;me[E]=je*M,me[m]=Me*_,me[p]=Q,c.push(me.x,me.y,me.z),me[E]=0,me[m]=0,me[p]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ie/w),f.push(1-_e/I),J+=1}}for(let _e=0;_e<I;_e++)for(let Me=0;Me<w;Me++){const Ie=d+Me+oe*_e,je=d+Me+oe*(_e+1),ee=d+(Me+1)+oe*(_e+1),fe=d+(Me+1)+oe*_e;l.push(Ie,je,fe),l.push(je,ee,fe),H+=6}a.addGroup(h,H,k),h+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Dr(n[t]);for(const r in i)e[r]=i[r]}return e}function Y0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const K0={clone:Dr,merge:Ot};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new $,Yu=new Je,Ku=new Je;class Qt extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,Ku),t.subVectors(Ku,Yu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class Q0 extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ar,lr,e,t);s.layers=this.layers,this.add(s);const o=new Qt(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new Qt(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Uh extends Xt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ev extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ys(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:pi});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=pn),new Q0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ra=new $,tv=new $,nv=new Xe;class Ui{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ra.subVectors(i,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nv.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new mc,js=new $;class gc{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],S=r[9],E=r[10],m=r[11],p=r[12],M=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-h,y-p).normalize(),i[1].setComponents(l+s,d+c,m+h,y+p).normalize(),i[2].setComponents(l+o,d+u,m+S,y+M).normalize(),i[3].setComponents(l-o,d-u,m-S,y-M).normalize(),i[4].setComponents(l-a,d-f,m-E,y-_).normalize(),t===Wn)i[5].setComponents(l+a,d+f,m+E,y+_).normalize();else if(t===xo)i[5].setComponents(a,f,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,S)=>h.start-S.start);let d=0;for(let h=1;h<f.length;h++){const S=f[d],E=f[h];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++d,f[d]=E)}f.length=d+1;for(let h=0,S=f.length;h<S;h++){const E=f[h];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ko extends yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],S=[],E=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let _=0;_<c;_++){const y=_*f-s;S.push(y,-M,0),E.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const _=M+c*p,y=M+c*(p+1),P=M+1+c*(p+1),R=M+1+c*p;h.push(_,y,R),h.push(y,P,R)}this.setIndex(h),this.setAttribute("position",new Rn(S,3)),this.setAttribute("normal",new Rn(E,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:fv,batching_pars_vertex:dv,batching_vertex:hv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:vv,clipping_planes_fragment:xv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:yv,color_fragment:Ev,color_pars_fragment:bv,color_pars_vertex:Av,color_vertex:Tv,common:wv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Iv,colorspace_fragment:Uv,colorspace_pars_fragment:Nv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:Hv,fog_pars_vertex:Vv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:jv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:rx,lights_fragment_end:sx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:lx,logdepthbuf_vertex:cx,map_fragment:ux,map_pars_fragment:fx,map_particle_fragment:dx,map_particle_pars_fragment:hx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:_x,morphnormal_vertex:vx,morphtarget_pars_vertex:xx,morphtarget_vertex:Sx,normal_fragment_begin:Mx,normal_fragment_maps:yx,normal_pars_fragment:Ex,normal_pars_vertex:bx,normal_vertex:Ax,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:Dx,premultiplied_alpha_fragment:Ix,project_vertex:Ux,dithering_fragment:Nx,dithering_pars_fragment:Fx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:zx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:jx,specularmap_fragment:$x,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:Jx,uv_pars_fragment:Qx,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:cS,depth_frag:uS,distanceRGBA_vert:fS,distanceRGBA_frag:dS,equirect_vert:hS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:_S,meshbasic_frag:vS,meshlambert_vert:xS,meshlambert_frag:SS,meshmatcap_vert:MS,meshmatcap_frag:yS,meshnormal_vert:ES,meshnormal_frag:bS,meshphong_vert:AS,meshphong_frag:TS,meshphysical_vert:wS,meshphysical_frag:RS,meshtoon_vert:CS,meshtoon_frag:PS,points_vert:LS,points_frag:DS,shadow_vert:IS,shadow_frag:US,sprite_vert:NS,sprite_frag:FS},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},bn={basic:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ot([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ot([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Ot([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const $s={r:0,b:0,g:0},Li=new Cn,OS=new mt;function BS(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function S(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function E(M){let _=!1;const y=S(M);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,_){const y=S(_);y&&(y.isCubeTexture||y.mapping===Oo)?(u===void 0&&(u=new An(new ys(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Dr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(_.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Li)),u.material.toneMapped=st.getTransfer(y.colorSpace)!==ht,(f!==y||d!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new An(new ko(2,2),new vi({name:"BackgroundMaterial",uniforms:Dr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB($s,Dh(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:E,addToRenderList:m}}function kS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,A,U,X,Q){let oe=!1;const q=f(X,U,A);s!==q&&(s=q,c(s.object)),oe=h(x,X,U,Q),oe&&S(x,X,U,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,y(x,A,U,X),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,A,U){const X=U.wireframe===!0;let Q=i[x.id];Q===void 0&&(Q={},i[x.id]=Q);let oe=Q[A.id];oe===void 0&&(oe={},Q[A.id]=oe);let q=oe[X];return q===void 0&&(q=d(l()),oe[X]=q),q}function d(x){const A=[],U=[],X=[];for(let Q=0;Q<t;Q++)A[Q]=0,U[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:X,object:x,attributes:{},index:null}}function h(x,A,U,X){const Q=s.attributes,oe=A.attributes;let q=0;const J=U.getAttributes();for(const H in J)if(J[H].location>=0){const _e=Q[H];let Me=oe[H];if(Me===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;q++}return s.attributesNum!==q||s.index!==X}function S(x,A,U,X){const Q={},oe=A.attributes;let q=0;const J=U.getAttributes();for(const H in J)if(J[H].location>=0){let _e=oe[H];_e===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),Q[H]=Me,q++}s.attributes=Q,s.attributesNum=q,s.index=X}function E(){const x=s.newAttributes;for(let A=0,U=x.length;A<U;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const U=s.newAttributes,X=s.enabledAttributes,Q=s.attributeDivisors;U[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),Q[x]!==A&&(n.vertexAttribDivisor(x,A),Q[x]=A)}function M(){const x=s.newAttributes,A=s.enabledAttributes;for(let U=0,X=A.length;U<X;U++)A[U]!==x[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function _(x,A,U,X,Q,oe,q){q===!0?n.vertexAttribIPointer(x,A,U,Q,oe):n.vertexAttribPointer(x,A,U,X,Q,oe)}function y(x,A,U,X){E();const Q=X.attributes,oe=U.getAttributes(),q=A.defaultAttributeValues;for(const J in oe){const H=oe[J];if(H.location>=0){let me=Q[J];if(me===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const _e=me.normalized,Me=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const je=Ie.buffer,ee=Ie.type,fe=Ie.bytesPerElement,xe=ee===n.INT||ee===n.UNSIGNED_INT||me.gpuType===ac;if(me.isInterleavedBufferAttribute){const F=me.data,se=F.stride,ne=me.offset;if(F.isInstancedInterleavedBuffer){for(let de=0;de<H.locationSize;de++)p(H.location+de,F.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,je);for(let de=0;de<H.locationSize;de++)_(H.location+de,Me/H.locationSize,ee,_e,se*fe,(ne+Me/H.locationSize*de)*fe,xe)}else{if(me.isInstancedBufferAttribute){for(let F=0;F<H.locationSize;F++)p(H.location+F,me.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let F=0;F<H.locationSize;F++)m(H.location+F);n.bindBuffer(n.ARRAY_BUFFER,je);for(let F=0;F<H.locationSize;F++)_(H.location+F,Me/H.locationSize,ee,_e,Me*fe,Me/H.locationSize*F*fe,xe)}}else if(q!==void 0){const _e=q[J];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(H.location,_e);break;case 3:n.vertexAttrib3fv(H.location,_e);break;case 4:n.vertexAttrib4fv(H.location,_e);break;default:n.vertexAttrib1fv(H.location,_e)}}}}M()}function P(){I();for(const x in i){const A=i[x];for(const U in A){const X=A[U];for(const Q in X)u(X[Q].object),delete X[Q];delete A[U]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const U in A){const X=A[U];for(const Q in X)u(X[Q].object),delete X[Q];delete A[U]}delete i[x.id]}function w(x){for(const A in i){const U=i[A];if(U[x.id]===void 0)continue;const X=U[x.id];for(const Q in X)u(X[Q].object),delete X[Q];delete U[x.id]}}function I(){k(),o=!0,s!==r&&(s=r,c(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function zS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let S=0;S<f;S++)h+=u[S];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let S=0;S<c.length;S++)o(c[S],u[S],d[S]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let S=0;for(let E=0;E<f;E++)S+=u[E];for(let E=0;E<d.length;E++)t.update(S,i,d[E])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function VS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const S=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||S===null||S.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,_=M*4;let y=p.clippingState||null;l.value=y,y=u(S,d,_,h);for(let P=0;P!==_;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,S){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,S!==!0||m===null){const p=h+E*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=h;_!==E;++_,y+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function GS(n){let e=new WeakMap;function t(o,a){return a===cl?o.mapping=Rr:a===ul&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cl||a===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ev(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class WS extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,Zu=[.125,.215,.35,.446,.526,.582],Bi=20,Ca=new WS,Ju=new et;let Pa=null,La=0,Da=0,Ia=!1;const Ni=(1+Math.sqrt(5))/2,cr=1/Ni,Qu=[new $(-Ni,cr,0),new $(Ni,cr,0),new $(-cr,0,Ni),new $(cr,0,Ni),new $(0,Ni,-cr),new $(0,Ni,cr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:vs,format:gn,colorSpace:Mi,depthBuffer:!1},r=tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XS(s)),this._blurMaterial=jS(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,r){const a=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ju),u.toneMapping=mi,u.autoClear=!1;const h=new Ch({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),S=new An(new ys,h);let E=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,E=!0):(h.color.copy(Ju),E=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;qs(r,M*_,p>2?_:0,_,_),u.setRenderTarget(r),E&&u.render(S,a),u.render(e,a)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qu[(r-s-1)%Qu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Bi-1),E=s/S,m=isFinite(s)?1+Math.floor(u*E):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let M=0;for(let w=0;w<Bi;++w){const I=w/E,k=Math.exp(-I*I/2);p.push(k),w===0?M+=k:w<m&&(M+=2*k)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=S,d.mipInt.value=_-i;const y=this._sizeLods[r],P=3*y*(r>_-hr?r-_+hr:0),R=4*(this._cubeSize-y);qs(t,P,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Ca)}}function XS(n){const e=[],t=[],i=[];let r=n;const s=n-hr+1+Zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-hr?l=Zu[o-n+hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,S=6,E=3,m=2,p=1,M=new Float32Array(E*S*h),_=new Float32Array(m*S*h),y=new Float32Array(p*S*h);for(let R=0;R<h;R++){const w=R%3*2/3-1,I=R>2?0:-1,k=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(k,E*S*R),_.set(d,m*S*R);const x=[R,R,R,R,R,R];y.set(x,p*S*R)}const P=new yi;P.setAttribute("position",new wn(M,E)),P.setAttribute("uv",new wn(_,m)),P.setAttribute("faceIndex",new wn(y,p)),e.push(P),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tf(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jS(n,e,t){const i=new Float32Array(Bi),r=new $(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function nf(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function rf(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cl||l===ul,u=l===Rr||l===Cr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function qS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YS(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const S in d.attributes)e.remove(d.attributes[S]);for(const S in d.morphAttributes){const E=d.morphAttributes[S];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const S in d)e.update(d[S],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const S in h){const E=h[S];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,S=f.attributes.position;let E=0;if(h!==null){const M=h.array;E=h.version;for(let _=0,y=M.length;_<y;_+=3){const P=M[_+0],R=M[_+1],w=M[_+2];d.push(P,R,R,w,w,P)}}else if(S!==void 0){const M=S.array;E=S.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const P=_+0,R=_+1,w=_+2;d.push(P,R,R,w,w,P)}}else return;const m=new(bh(d)?Lh:Ph)(d,1);m.version=E;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function KS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,S){S!==0&&(n.drawElementsInstanced(i,h,s,d*o,S),t.update(h,i,S))}function u(d,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,S);let m=0;for(let p=0;p<S;p++)m+=h[p];t.update(m,i,1)}function f(d,h,S,E){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,E,0,S);let p=0;for(let M=0;M<S;M++)p+=h[M];for(let M=0;M<E.length;M++)t.update(p,i,E[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ZS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function JS(n,e,t){const i=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;d!==void 0&&d.texture.dispose();const S=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;S===!0&&(y=1),E===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*R*4*f),I=new Th(w,P,R,f);I.type=Gn,I.needsUpdate=!0;const k=y*4;for(let A=0;A<f;A++){const U=p[A],X=M[A],Q=_[A],oe=P*R*4*A;for(let q=0;q<U.count;q++){const J=q*k;S===!0&&(r.fromBufferAttribute(U,q),w[oe+J+0]=r.x,w[oe+J+1]=r.y,w[oe+J+2]=r.z,w[oe+J+3]=0),E===!0&&(r.fromBufferAttribute(X,q),w[oe+J+4]=r.x,w[oe+J+5]=r.y,w[oe+J+6]=r.z,w[oe+J+7]=0),m===!0&&(r.fromBufferAttribute(Q,q),w[oe+J+8]=r.x,w[oe+J+9]=r.y,w[oe+J+10]=r.z,w[oe+J+11]=Q.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Je(P,R)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let S=0;for(let m=0;m<c.length;m++)S+=c[m];const E=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(n,"morphTargetBaseInfluence",E),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function QS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Fh extends Xt{constructor(e,t,i,r,s,o,a,l,c,u=yr){if(u!==yr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yr&&(i=Xi),i===void 0&&u===Lr&&(i=Pr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oh=new Xt,sf=new Fh(1,1),Bh=new Th,kh=new O0,zh=new Uh,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function Nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=of[r];if(s===void 0&&(s=new Float32Array(r),of[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),Et(t,i)}}function sM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),Et(t,i)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),Et(t,i)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sf.compareFunction=Eh,s=sf):s=Oh,t.setTexture2D(e||s,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kh,r)}function _M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zh,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bh,r)}function xM(n){switch(n){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return dM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return vM}}function SM(n,e){n.uniform1fv(this.addr,e)}function MM(n,e){const t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function yM(n,e){const t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function EM(n,e){const t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function bM(n,e){const t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AM(n,e){const t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TM(n,e){const t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wM(n,e){n.uniform1iv(this.addr,e)}function RM(n,e){n.uniform2iv(this.addr,e)}function CM(n,e){n.uniform3iv(this.addr,e)}function PM(n,e){n.uniform4iv(this.addr,e)}function LM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function IM(n,e){n.uniform3uiv(this.addr,e)}function UM(n,e){n.uniform4uiv(this.addr,e)}function NM(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oh,s[o])}function FM(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kh,s[o])}function OM(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zh,s[o])}function BM(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bh,s[o])}function kM(n){switch(n){case 5126:return SM;case 35664:return MM;case 35665:return yM;case 35666:return EM;case 35674:return bM;case 35675:return AM;case 35676:return TM;case 5124:case 35670:return wM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}class zM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}}class HM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function ff(n,e){n.seq.push(e),n.map[e.id]=e}function GM(n,e,t){const i=n.name,r=i.length;for(Ua.lastIndex=0;;){const s=Ua.exec(i),o=Ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ff(t,c===void 0?new zM(a,n,e):new HM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new VM(a),ff(t,f)),t=f}}}class lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function df(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WM=37297;let XM=0;function jM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $M(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===vo&&t===_o?i="LinearDisplayP3ToLinearSRGB":e===_o&&t===vo&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case Bo:return[i,"LinearTransferOETF"];case yn:case hc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),o)}else return r}function qM(n,e){const t=$M(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YM(n,e){let t;switch(e){case $_:t="Linear";break;case q_:t="Reinhard";break;case Y_:t="Cineon";break;case K_:t="ACESFilmic";break;case J_:t="AgX";break;case Q_:t="Neutral";break;case Z_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ys=new $;function KM(){st.getLuminanceCoefficients(Ys);const n=Ys.x.toFixed(4),e=Ys.y.toFixed(4),t=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function JM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jr(n){return n!==""}function pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(ey,ny)}const ty=new Map;function ny(n,e){let t=We[e];if(t===void 0){const i=ty.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(iy,ry)}function ry(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _f(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function oy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ay(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function ly(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case X_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function cy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function uy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sy(t),c=oy(t),u=ay(t),f=ly(t),d=cy(t),h=ZM(t),S=JM(s),E=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?We.tonemapping_pars_fragment:"",t.toneMapping!==mi?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),KM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=kl(o),o=pf(o,t),o=mf(o,t),a=kl(a),a=pf(a,t),a=mf(a,t),o=gf(o),a=gf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+o,y=M+p+a,P=df(r,r.VERTEX_SHADER,_),R=df(r,r.FRAGMENT_SHADER,y);r.attachShader(E,P),r.attachShader(E,R),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function w(A){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(E).trim(),X=r.getShaderInfoLog(P).trim(),Q=r.getShaderInfoLog(R).trim();let oe=!0,q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,P,R);else{const J=hf(r,P,"vertex"),H=hf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+J+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(X===""||Q==="")&&(q=!1);q&&(A.diagnostics={runnable:oe,programLog:U,vertexShader:{log:X,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(P),r.deleteShader(R),I=new lo(r,E),k=QM(r,E)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(E,WM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=R,this}let fy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hy(e),t.set(e,i)),i}}class hy{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function py(n,e,t,i,r,s,o){const a=new wh,l=new dy,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,h=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,A,U,X,Q){const oe=X.fog,q=Q.geometry,J=x.isMeshStandardMaterial?X.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),me=H&&H.mapping===Oo?H.image.height:null,_e=E[x.type];x.precision!==null&&(S=r.getMaxPrecision(x.precision),S!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",S,"instead."));const Me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ie=Me!==void 0?Me.length:0;let je=0;q.morphAttributes.position!==void 0&&(je=1),q.morphAttributes.normal!==void 0&&(je=2),q.morphAttributes.color!==void 0&&(je=3);let ee,fe,xe,F;if(_e){const Gt=bn[_e];ee=Gt.vertexShader,fe=Gt.fragmentShader}else ee=x.vertexShader,fe=x.fragmentShader,l.update(x),xe=l.getVertexShaderID(x),F=l.getFragmentShaderID(x);const se=n.getRenderTarget(),ne=Q.isInstancedMesh===!0,de=Q.isBatchedMesh===!0,we=!!x.map,Pe=!!x.matcap,g=!!H,L=!!x.aoMap,O=!!x.lightMap,Z=!!x.bumpMap,W=!!x.normalMap,ie=!!x.displacementMap,re=!!x.emissiveMap,b=!!x.metalnessMap,v=!!x.roughnessMap,D=x.anisotropy>0,j=x.clearcoat>0,G=x.dispersion>0,V=x.iridescence>0,ce=x.sheen>0,ae=x.transmission>0,he=D&&!!x.anisotropyMap,Re=j&&!!x.clearcoatMap,ue=j&&!!x.clearcoatNormalMap,ve=j&&!!x.clearcoatRoughnessMap,Ue=V&&!!x.iridescenceMap,Le=V&&!!x.iridescenceThicknessMap,ye=ce&&!!x.sheenColorMap,$e=ce&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,qe=!!x.specularColorMap,N=!!x.specularIntensityMap,Ae=ae&&!!x.transmissionMap,te=ae&&!!x.thicknessMap,le=!!x.gradientMap,Ee=!!x.alphaMap,Te=x.alphaTest>0,Ke=!!x.alphaHash,St=!!x.extensions;let Vt=mi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Vt=n.toneMapping);const Qe={shaderID:_e,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:fe,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:S,batching:de,batchingColor:de&&Q._colorsTexture!==null,instancing:ne,instancingColor:ne&&Q.instanceColor!==null,instancingMorph:ne&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Mi,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Pe,envMap:g,envMapMode:g&&H.mapping,envMapCubeUVHeight:me,aoMap:L,lightMap:O,bumpMap:Z,normalMap:W,displacementMap:h&&ie,emissiveMap:re,normalMapObjectSpace:W&&x.normalMapType===i0,normalMapTangentSpace:W&&x.normalMapType===yh,metalnessMap:b,roughnessMap:v,anisotropy:D,anisotropyMap:he,clearcoat:j,clearcoatMap:Re,clearcoatNormalMap:ue,clearcoatRoughnessMap:ve,dispersion:G,iridescence:V,iridescenceMap:Ue,iridescenceThicknessMap:Le,sheen:ce,sheenColorMap:ye,sheenRoughnessMap:$e,specularMap:Ne,specularColorMap:qe,specularIntensityMap:N,transmission:ae,transmissionMap:Ae,thicknessMap:te,gradientMap:le,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Te,alphaHash:Ke,combine:x.combine,mapUv:we&&m(x.map.channel),aoMapUv:L&&m(x.aoMap.channel),lightMapUv:O&&m(x.lightMap.channel),bumpMapUv:Z&&m(x.bumpMap.channel),normalMapUv:W&&m(x.normalMap.channel),displacementMapUv:ie&&m(x.displacementMap.channel),emissiveMapUv:re&&m(x.emissiveMap.channel),metalnessMapUv:b&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:he&&m(x.anisotropyMap.channel),clearcoatMapUv:Re&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(x.sheenRoughnessMap.channel),specularMapUv:Ne&&m(x.specularMap.channel),specularColorMapUv:qe&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:Ae&&m(x.transmissionMap.channel),thicknessMapUv:te&&m(x.thicknessMap.channel),alphaMapUv:Ee&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(W||D),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!q.attributes.uv&&(we||Ee),fog:!!oe,useFog:x.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function M(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(_(A,x),y(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const A=E[x.type];let U;if(A){const X=bn[A];U=K0.clone(X.uniforms)}else U=x.uniforms;return U}function R(x,A){let U;for(let X=0,Q=u.length;X<Q;X++){const oe=u[X];if(oe.cacheKey===A){U=oe,++U.usedTimes;break}}return U===void 0&&(U=new uy(n,A,x,s),u.push(U)),U}function w(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:u,dispose:k}}function my(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function gy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,S,E,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:S,renderOrder:f.renderOrder,z:E,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=S,p.renderOrder=f.renderOrder,p.z=E,p.group=m),e++,p}function a(f,d,h,S,E,m){const p=o(f,d,h,S,E,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,S,E,m){const p=o(f,d,h,S,E,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||gy),i.length>1&&i.sort(d||vf),r.length>1&&r.sort(d||vf)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _y(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new xf,n.set(i,[o])):r>=s.length?(o=new xf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new et};break;case"SpotLight":t={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function xy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sy=0;function My(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yy(n){const e=new vy,t=xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new mt,o=new mt;function a(c){let u=0,f=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let h=0,S=0,E=0,m=0,p=0,M=0,_=0,y=0,P=0,R=0,w=0;c.sort(My);for(let k=0,x=c.length;k<x;k++){const A=c[k],U=A.color,X=A.intensity,Q=A.distance,oe=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*X,f+=U.g*X,d+=U.b*X;else if(A.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(A.sh.coefficients[q],X);w++}else if(A.isDirectionalLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,H=t.get(A);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=oe,i.directionalShadowMatrix[h]=A.shadow.matrix,M++}i.directional[h]=q,h++}else if(A.isSpotLight){const q=e.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(U).multiplyScalar(X),q.distance=Q,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,i.spot[E]=q;const J=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,J.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[E]=J.matrix,A.castShadow){const H=t.get(A);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=oe,y++}E++}else if(A.isRectAreaLight){const q=e.get(A);q.color.copy(U).multiplyScalar(X),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=q,m++}else if(A.isPointLight){const q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),q.distance=A.distance,q.decay=A.decay,A.castShadow){const J=A.shadow,H=t.get(A);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[S]=H,i.pointShadowMap[S]=oe,i.pointShadowMatrix[S]=A.shadow.matrix,_++}i.point[S]=q,S++}else if(A.isHemisphereLight){const q=e.get(A);q.skyColor.copy(A.color).multiplyScalar(X),q.groundColor.copy(A.groundColor).multiplyScalar(X),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==S||I.spotLength!==E||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==P||I.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=m,i.point.length=S,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,I.directionalLength=h,I.pointLength=S,I.spotLength=E,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=P,I.numLightProbes=w,i.version=Sy++)}function l(c,u){let f=0,d=0,h=0,S=0,E=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const y=i.rectArea[S];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Sf(n){const e=new yy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ey(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sf(n),e.set(r,[a])):s>=o.length?(a=new Sf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class by extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ry(n,e,t){let i=new gc;const r=new Je,s=new Je,o=new ct,a=new by({depthPacking:n0}),l=new Ay,c={},u=t.maxTextureSize,f={[_i]:Wt,[Wt]:_i,[Vn]:Vn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Ty,fragmentShader:wy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const S=new yi;S.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new An(S,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let p=this.type;this.render=function(R,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const k=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(pi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=p!==kn&&this.type===kn,Q=p===kn&&this.type!==kn;for(let oe=0,q=R.length;oe<q;oe++){const J=R[oe],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const me=H.getFrameExtents();if(r.multiply(me),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,H.mapSize.y=s.y)),H.map===null||X===!0||Q===!0){const Me=this.type!==kn?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new ji(r.x,r.y,Me),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const _e=H.getViewportCount();for(let Me=0;Me<_e;Me++){const Ie=H.getViewport(Me);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),U.viewport(o),H.updateMatrices(J,Me),i=H.getFrustum(),y(w,I,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&M(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(k,x,A)};function M(R,w){const I=e.update(E);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ji(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,I,d,E,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,I,h,E,null)}function _(R,w,I,k){let x=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=x.uuid,X=w.uuid;let Q=c[U];Q===void 0&&(Q={},c[U]=Q);let oe=Q[X];oe===void 0&&(oe=x.clone(),Q[X]=oe,w.addEventListener("dispose",P)),x=oe}if(x.visible=w.visible,x.wireframe=w.wireframe,k===kn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=I}return x}function y(R,w,I,k,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===kn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const X=e.update(R),Q=R.material;if(Array.isArray(Q)){const oe=X.groups;for(let q=0,J=oe.length;q<J;q++){const H=oe[q],me=Q[H.materialIndex];if(me&&me.visible){const _e=_(R,me,k,x);R.onBeforeShadow(n,R,w,I,X,_e,H),n.renderBufferDirect(I,null,X,_e,R,H),R.onAfterShadow(n,R,w,I,X,_e,H)}}}else if(Q.visible){const oe=_(R,Q,k,x);R.onBeforeShadow(n,R,w,I,X,oe,null),n.renderBufferDirect(I,null,X,oe,R,null),R.onAfterShadow(n,R,w,I,X,oe,null)}}const U=R.children;for(let X=0,Q=U.length;X<Q;X++)y(U[X],w,I,k,x)}function P(R){R.target.removeEventListener("dispose",P);for(const I in c){const k=c[I],x=R.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}const Cy={[nl]:il,[rl]:al,[sl]:ll,[wr]:ol,[il]:nl,[al]:rl,[ll]:sl,[ol]:wr};function Py(n){function e(){let N=!1;const Ae=new ct;let te=null;const le=new ct(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!N&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,Te,Ke,St,Vt){Vt===!0&&(Ee*=St,Te*=St,Ke*=St),Ae.set(Ee,Te,Ke,St),le.equals(Ae)===!1&&(n.clearColor(Ee,Te,Ke,St),le.copy(Ae))},reset:function(){N=!1,te=null,le.set(-1,0,0,0)}}}function t(){let N=!1,Ae=!1,te=null,le=null,Ee=null;return{setReversed:function(Te){Ae=Te},setTest:function(Te){Te?xe(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(Te){te!==Te&&!N&&(n.depthMask(Te),te=Te)},setFunc:function(Te){if(Ae&&(Te=Cy[Te]),le!==Te){switch(Te){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Te}},setLocked:function(Te){N=Te},setClear:function(Te){Ee!==Te&&(n.clearDepth(Te),Ee=Te)},reset:function(){N=!1,te=null,le=null,Ee=null}}}function i(){let N=!1,Ae=null,te=null,le=null,Ee=null,Te=null,Ke=null,St=null,Vt=null;return{setTest:function(Qe){N||(Qe?xe(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Qe){Ae!==Qe&&!N&&(n.stencilMask(Qe),Ae=Qe)},setFunc:function(Qe,Gt,Pn){(te!==Qe||le!==Gt||Ee!==Pn)&&(n.stencilFunc(Qe,Gt,Pn),te=Qe,le=Gt,Ee=Pn)},setOp:function(Qe,Gt,Pn){(Te!==Qe||Ke!==Gt||St!==Pn)&&(n.stencilOp(Qe,Gt,Pn),Te=Qe,Ke=Gt,St=Pn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Vt!==Qe&&(n.clearStencil(Qe),Vt=Qe)},reset:function(){N=!1,Ae=null,te=null,le=null,Ee=null,Te=null,Ke=null,St=null,Vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,S=!1,E=null,m=null,p=null,M=null,_=null,y=null,P=null,R=new et(0,0,0),w=0,I=!1,k=null,x=null,A=null,U=null,X=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,q=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),oe=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),oe=q>=2);let H=null,me={};const _e=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ie=new ct().fromArray(_e),je=new ct().fromArray(Me);function ee(N,Ae,te,le){const Ee=new Uint8Array(4),Te=n.createTexture();n.bindTexture(N,Te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ae+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Te}const fe={};fe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),s.setFunc(wr),O(!1),Z(Tu),xe(n.CULL_FACE),g(pi);function xe(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function F(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function se(N,Ae){return u[N]!==Ae?(n.bindFramebuffer(N,Ae),u[N]=Ae,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ae),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ne(N,Ae){let te=d,le=!1;if(N){te=f.get(Ae),te===void 0&&(te=[],f.set(Ae,te));const Ee=N.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ke=Ee.length;Te<Ke;Te++)te[Te]=n.COLOR_ATTACHMENT0+Te;te.length=Ee.length,le=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,le=!0);le&&n.drawBuffers(te)}function de(N){return h!==N?(n.useProgram(N),h=N,!0):!1}const we={[Oi]:n.FUNC_ADD,[R_]:n.FUNC_SUBTRACT,[C_]:n.FUNC_REVERSE_SUBTRACT};we[P_]=n.MIN,we[L_]=n.MAX;const Pe={[D_]:n.ZERO,[I_]:n.ONE,[U_]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[z_]:n.SRC_ALPHA_SATURATE,[B_]:n.DST_COLOR,[F_]:n.DST_ALPHA,[N_]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[k_]:n.ONE_MINUS_DST_COLOR,[O_]:n.ONE_MINUS_DST_ALPHA,[H_]:n.CONSTANT_COLOR,[V_]:n.ONE_MINUS_CONSTANT_COLOR,[G_]:n.CONSTANT_ALPHA,[W_]:n.ONE_MINUS_CONSTANT_ALPHA};function g(N,Ae,te,le,Ee,Te,Ke,St,Vt,Qe){if(N===pi){S===!0&&(F(n.BLEND),S=!1);return}if(S===!1&&(xe(n.BLEND),S=!0),N!==w_){if(N!==E||Qe!==I){if((m!==Oi||_!==Oi)&&(n.blendEquation(n.FUNC_ADD),m=Oi,_=Oi),Qe)switch(N){case Mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,M=null,y=null,P=null,R.set(0,0,0),w=0,E=N,I=Qe}return}Ee=Ee||Ae,Te=Te||te,Ke=Ke||le,(Ae!==m||Ee!==_)&&(n.blendEquationSeparate(we[Ae],we[Ee]),m=Ae,_=Ee),(te!==p||le!==M||Te!==y||Ke!==P)&&(n.blendFuncSeparate(Pe[te],Pe[le],Pe[Te],Pe[Ke]),p=te,M=le,y=Te,P=Ke),(St.equals(R)===!1||Vt!==w)&&(n.blendColor(St.r,St.g,St.b,Vt),R.copy(St),w=Vt),E=N,I=!1}function L(N,Ae){N.side===Vn?F(n.CULL_FACE):xe(n.CULL_FACE);let te=N.side===Wt;Ae&&(te=!te),O(te),N.blending===Mr&&N.transparent===!1?g(pi):g(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(N){k!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),k=N)}function Z(N){N!==b_?(xe(n.CULL_FACE),N!==x&&(N===Tu?n.cullFace(n.BACK):N===A_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),x=N}function W(N){N!==A&&(oe&&n.lineWidth(N),A=N)}function ie(N,Ae,te){N?(xe(n.POLYGON_OFFSET_FILL),(U!==Ae||X!==te)&&(n.polygonOffset(Ae,te),U=Ae,X=te)):F(n.POLYGON_OFFSET_FILL)}function re(N){N?xe(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function b(N){N===void 0&&(N=n.TEXTURE0+Q-1),H!==N&&(n.activeTexture(N),H=N)}function v(N,Ae,te){te===void 0&&(H===null?te=n.TEXTURE0+Q-1:te=H);let le=me[te];le===void 0&&(le={type:void 0,texture:void 0},me[te]=le),(le.type!==N||le.texture!==Ae)&&(H!==te&&(n.activeTexture(te),H=te),n.bindTexture(N,Ae||fe[N]),le.type=N,le.texture=Ae)}function D(){const N=me[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){Ie.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ie.copy(N))}function ye(N){je.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function $e(N,Ae){let te=l.get(Ae);te===void 0&&(te=new WeakMap,l.set(Ae,te));let le=te.get(N);le===void 0&&(le=n.getUniformBlockIndex(Ae,N.name),te.set(N,le))}function Ne(N,Ae){const le=l.get(Ae).get(N);a.get(Ae)!==le&&(n.uniformBlockBinding(Ae,le,N.__bindingPointIndex),a.set(Ae,le))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,me={},u={},f=new WeakMap,d=[],h=null,S=!1,E=null,m=null,p=null,M=null,_=null,y=null,P=null,R=new et(0,0,0),w=0,I=!1,k=null,x=null,A=null,U=null,X=null,Ie.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xe,disable:F,bindFramebuffer:se,drawBuffers:ne,useProgram:de,setBlending:g,setMaterial:L,setFlipSided:O,setCullFace:Z,setLineWidth:W,setPolygonOffset:ie,setScissorTest:re,activeTexture:b,bindTexture:v,unbindTexture:D,compressedTexImage2D:j,compressedTexImage3D:G,texImage2D:ve,texImage3D:Ue,updateUBOMapping:$e,uniformBlockBinding:Ne,texStorage2D:Re,texStorage3D:ue,texSubImage2D:V,texSubImage3D:ce,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Le,viewport:ye,reset:qe}}function Mf(n,e,t,i){const r=Ly(i);switch(t){case mh:return n*e;case _h:return n*e;case vh:return n*e*2;case xh:return n*e/r.components*r.byteLength;case uc:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case fc:return n*e*2/r.components*r.byteLength;case gh:return n*e*3/r.components*r.byteLength;case gn:return n*e*4/r.components*r.byteLength;case dc:return n*e*4/r.components*r.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case hl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oo:case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mh:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ly(n){switch(n){case qn:case dh:return{byteLength:1,components:1};case hs:case hh:case vs:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case Xi:case ac:case Gn:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Dy(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,v){return h?new OffscreenCanvas(b,v):So("canvas")}function E(b,v,D){let j=1;const G=re(b);if((G.width>D||G.height>D)&&(j=D/Math.max(G.width,G.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(j*G.width),ce=Math.floor(j*G.height);f===void 0&&(f=S(V,ce));const ae=v?S(V,ce):f;return ae.width=V,ae.height=ce,ae.getContext("2d").drawImage(b,0,0,V,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+ce+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==on&&b.minFilter!==pn}function p(b){n.generateMipmap(b)}function M(b,v,D,j,G=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=v;if(v===n.RED&&(D===n.FLOAT&&(V=n.R32F),D===n.HALF_FLOAT&&(V=n.R16F),D===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.R8UI),D===n.UNSIGNED_SHORT&&(V=n.R16UI),D===n.UNSIGNED_INT&&(V=n.R32UI),D===n.BYTE&&(V=n.R8I),D===n.SHORT&&(V=n.R16I),D===n.INT&&(V=n.R32I)),v===n.RG&&(D===n.FLOAT&&(V=n.RG32F),D===n.HALF_FLOAT&&(V=n.RG16F),D===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RG8UI),D===n.UNSIGNED_SHORT&&(V=n.RG16UI),D===n.UNSIGNED_INT&&(V=n.RG32UI),D===n.BYTE&&(V=n.RG8I),D===n.SHORT&&(V=n.RG16I),D===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGB8UI),D===n.UNSIGNED_SHORT&&(V=n.RGB16UI),D===n.UNSIGNED_INT&&(V=n.RGB32UI),D===n.BYTE&&(V=n.RGB8I),D===n.SHORT&&(V=n.RGB16I),D===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),D===n.UNSIGNED_INT&&(V=n.RGBA32UI),D===n.BYTE&&(V=n.RGBA8I),D===n.SHORT&&(V=n.RGBA16I),D===n.INT&&(V=n.RGBA32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const ce=G?go:st.getTransfer(j);D===n.FLOAT&&(V=n.RGBA32F),D===n.HALF_FLOAT&&(V=n.RGBA16F),D===n.UNSIGNED_BYTE&&(V=ce===ht?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function _(b,v){let D;return b?v===null||v===Xi||v===Pr?D=n.DEPTH24_STENCIL8:v===Gn?D=n.DEPTH32F_STENCIL8:v===hs&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xi||v===Pr?D=n.DEPTH_COMPONENT24:v===Gn?D=n.DEPTH_COMPONENT32F:v===hs&&(D=n.DEPTH_COMPONENT16),D}function y(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==on&&b.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),w(v),v.isVideoTexture&&u.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),k(v)}function w(b){const v=i.get(b);if(v.__webglInit===void 0)return;const D=b.source,j=d.get(D);if(j){const G=j[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&I(b),Object.keys(j).length===0&&d.delete(D)}i.remove(b)}function I(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const D=b.source,j=d.get(D);delete j[v.__cacheKey],o.memory.textures--}function k(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let G=0;G<v.__webglFramebuffer[j].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[j][G]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=b.textures;for(let j=0,G=D.length;j<G;j++){const V=i.get(D[j]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(D[j])}i.remove(b)}let x=0;function A(){x=0}function U(){const b=x;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),x+=1,b}function X(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){const D=i.get(b);if(b.isVideoTexture&&W(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(D,b,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function oe(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){je(D,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function q(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){je(D,b,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function J(b,v){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ee(D,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const H={[fl]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},me={[on]:n.NEAREST,[e0]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},_e={[r0]:n.NEVER,[u0]:n.ALWAYS,[s0]:n.LESS,[Eh]:n.LEQUAL,[o0]:n.EQUAL,[c0]:n.GEQUAL,[a0]:n.GREATER,[l0]:n.NOTEQUAL};function Me(b,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===aa||v.magFilter===Cs||v.magFilter===zi||v.minFilter===pn||v.minFilter===aa||v.minFilter===Cs||v.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,H[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,H[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,H[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==Cs&&v.minFilter!==zi||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(b,v){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const j=v.source;let G=d.get(j);G===void 0&&(G={},d.set(j,G));const V=X(v);if(V!==b.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),G[V].usedTimes++;const ce=G[b.__cacheKey];ce!==void 0&&(G[b.__cacheKey].usedTimes--,ce.usedTimes===0&&I(v)),b.__cacheKey=V,b.__webglTexture=G[V].texture}return D}function je(b,v,D){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const G=Ie(b,v),V=v.source;t.bindTexture(j,b.__webglTexture,n.TEXTURE0+D);const ce=i.get(V);if(V.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+D);const ae=st.getPrimaries(st.workingColorSpace),he=v.colorSpace===di?null:st.getPrimaries(v.colorSpace),Re=v.colorSpace===di||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ue=E(v.image,!1,r.maxTextureSize);ue=ie(v,ue);const ve=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type);let Le=M(v.internalFormat,ve,Ue,v.colorSpace,v.isVideoTexture);Me(j,v);let ye;const $e=v.mipmaps,Ne=v.isVideoTexture!==!0,qe=ce.__version===void 0||G===!0,N=V.dataReady,Ae=y(v,ue);if(v.isDepthTexture)Le=_(v.format===Lr,v.type),qe&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Le,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Le,ue.width,ue.height,0,ve,Ue,null));else if(v.isDataTexture)if($e.length>0){Ne&&qe&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,$e[0].width,$e[0].height);for(let te=0,le=$e.length;te<le;te++)ye=$e[te],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,te,Le,ye.width,ye.height,0,ve,Ue,ye.data);v.generateMipmaps=!1}else Ne?(qe&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,ue.width,ue.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Ue,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ue.width,ue.height,0,ve,Ue,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Le,$e[0].width,$e[0].height,ue.depth);for(let te=0,le=$e.length;te<le;te++)if(ye=$e[te],v.format!==gn)if(ve!==null)if(Ne){if(N)if(v.layerUpdates.size>0){const Ee=Mf(ye.width,ye.height,v.format,v.type);for(const Te of v.layerUpdates){const Ke=ye.data.subarray(Te*Ee/ye.data.BYTES_PER_ELEMENT,(Te+1)*Ee/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Te,ye.width,ye.height,1,ve,Ke,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ue.depth,ve,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Le,ye.width,ye.height,ue.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ue.depth,ve,Ue,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Le,ye.width,ye.height,ue.depth,0,ve,Ue,ye.data)}else{Ne&&qe&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,$e[0].width,$e[0].height);for(let te=0,le=$e.length;te<le;te++)ye=$e[te],v.format!==gn?ve!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,te,Le,ye.width,ye.height,0,ve,Ue,ye.data)}else if(v.isDataArrayTexture)if(Ne){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Le,ue.width,ue.height,ue.depth),N)if(v.layerUpdates.size>0){const te=Mf(ue.width,ue.height,v.format,v.type);for(const le of v.layerUpdates){const Ee=ue.data.subarray(le*te/ue.data.BYTES_PER_ELEMENT,(le+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,ve,Ue,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ue,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,ve,Ue,ue.data);else if(v.isData3DTexture)Ne?(qe&&t.texStorage3D(n.TEXTURE_3D,Ae,Le,ue.width,ue.height,ue.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ue,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,ve,Ue,ue.data);else if(v.isFramebufferTexture){if(qe)if(Ne)t.texStorage2D(n.TEXTURE_2D,Ae,Le,ue.width,ue.height);else{let te=ue.width,le=ue.height;for(let Ee=0;Ee<Ae;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Le,te,le,0,ve,Ue,null),te>>=1,le>>=1}}else if($e.length>0){if(Ne&&qe){const te=re($e[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Le,te.width,te.height)}for(let te=0,le=$e.length;te<le;te++)ye=$e[te],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve,Ue,ye):t.texImage2D(n.TEXTURE_2D,te,Le,ve,Ue,ye);v.generateMipmaps=!1}else if(Ne){if(qe){const te=re(ue);t.texStorage2D(n.TEXTURE_2D,Ae,Le,te.width,te.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ue,ue)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Ue,ue);m(v)&&p(j),ce.__version=V.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ee(b,v,D){if(v.image.length!==6)return;const j=Ie(b,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);const V=i.get(G);if(G.version!==V.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const ce=st.getPrimaries(st.workingColorSpace),ae=v.colorSpace===di?null:st.getPrimaries(v.colorSpace),he=v.colorSpace===di||ce===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Re&&!ue?ve[le]=E(v.image[le],!0,r.maxCubemapSize):ve[le]=ue?v.image[le].image:v.image[le],ve[le]=ie(v,ve[le]);const Ue=ve[0],Le=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),$e=M(v.internalFormat,Le,ye,v.colorSpace),Ne=v.isVideoTexture!==!0,qe=V.__version===void 0||j===!0,N=G.dataReady;let Ae=y(v,Ue);Me(n.TEXTURE_CUBE_MAP,v);let te;if(Re){Ne&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,$e,Ue.width,Ue.height);for(let le=0;le<6;le++){te=ve[le].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const Te=te[Ee];v.format!==gn?Le!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,$e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Te.width,Te.height,Le,ye,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,$e,Te.width,Te.height,0,Le,ye,Te.data)}}}else{if(te=v.mipmaps,Ne&&qe){te.length>0&&Ae++;const le=re(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,$e,le.width,le.height)}for(let le=0;le<6;le++)if(ue){Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Le,ye,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,ve[le].width,ve[le].height,0,Le,ye,ve[le].data);for(let Ee=0;Ee<te.length;Ee++){const Ke=te[Ee].image[le].image;Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Ke.width,Ke.height,Le,ye,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,$e,Ke.width,Ke.height,0,Le,ye,Ke.data)}}else{Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,ye,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Le,ye,ve[le]);for(let Ee=0;Ee<te.length;Ee++){const Te=te[Ee];Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Le,ye,Te.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,$e,Le,ye,Te.image[le])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function fe(b,v,D,j,G,V){const ce=s.convert(D.format,D.colorSpace),ae=s.convert(D.type),he=M(D.internalFormat,ce,ae,D.colorSpace);if(!i.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>V),ve=Math.max(1,v.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,he,ue,ve,v.depth,0,ce,ae,null):t.texImage2D(G,V,he,ue,ve,0,ce,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,G,i.get(D).__webglTexture,0,O(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,G,i.get(D).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(b,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const j=v.depthTexture,G=j&&j.isDepthTexture?j.type:null,V=_(v.stencilBuffer,G),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=O(v);Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,V,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,b)}else{const j=v.textures;for(let G=0;G<j.length;G++){const V=j[G],ce=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),he=M(V.internalFormat,ce,ae,V.colorSpace),Re=O(v);D&&Z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,he,v.width,v.height):Z(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,G=O(v);if(v.depthTexture.format===yr)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Lr)Z(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function se(b){const v=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",G)};j.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=j}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,b)}else if(D){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),xe(v.__webglDepthbuffer[j],b,!1);else{const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),xe(v.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(b,v,D){const j=i.get(b);v!==void 0&&fe(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&se(b)}function de(b){const v=b.texture,D=i.get(b),j=i.get(v);b.addEventListener("dispose",R);const G=b.textures,V=b.isWebGLCubeRenderTarget===!0,ce=G.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[ae][he]=n.createFramebuffer()}else D.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[ae]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ce)for(let ae=0,he=G.length;ae<he;ae++){const Re=i.get(G[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Z(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<G.length;ae++){const he=G[ae];D.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Re=s.convert(he.format,he.colorSpace),ue=s.convert(he.type),ve=M(he.internalFormat,Re,ue,he.colorSpace,b.isXRRenderTarget===!0),Ue=O(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Me(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)fe(D.__webglFramebuffer[ae][he],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else fe(D.__webglFramebuffer[ae],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ae=0,he=G.length;ae<he;ae++){const Re=G[ae],ue=i.get(Re);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Me(n.TEXTURE_2D,Re),fe(D.__webglFramebuffer,b,Re,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Me(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)fe(D.__webglFramebuffer[he],b,v,n.COLOR_ATTACHMENT0,ae,he);else fe(D.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}b.depthBuffer&&se(b)}function we(b){const v=b.textures;for(let D=0,j=v.length;D<j;D++){const G=v[D];if(m(G)){const V=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(G).__webglTexture;t.bindTexture(V,ce),p(V),t.unbindTexture()}}}const Pe=[],g=[];function L(b){if(b.samples>0){if(Z(b)===!1){const v=b.textures,D=b.width,j=b.height;let G=n.COLOR_BUFFER_BIT;const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(b),ae=v.length>1;if(ae)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Re=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,G,n.NEAREST),l===!0&&(Pe.length=0,g.length=0,Pe.push(n.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Pe.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Re=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function O(b){return Math.min(r.maxSamples,b.samples)}function Z(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ie(b,v){const D=b.colorSpace,j=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Mi&&D!==di&&(st.getTransfer(D)===ht?(j!==gn||G!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=Q,this.setTexture2DArray=oe,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Z}function Iy(n,e){function t(i,r=di){let s;const o=st.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.BYTE;if(i===hh)return n.SHORT;if(i===hs)return n.UNSIGNED_SHORT;if(i===ac)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===vs)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===gn)return n.RGBA;if(i===_h)return n.LUMINANCE;if(i===vh)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===xh)return n.RED;if(i===uc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_l||i===vl)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===Ml||i===yl||i===El||i===bl||i===Al||i===Tl||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oo||i===Ul||i===Nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oo)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mh||i===Fl||i===Ol||i===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Uy extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ks extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,S=.005;c.inputState.pinching&&d>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class By{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vi({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends Ir{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,S=null;const E=new By,m=t.getContextAttributes();let p=null,M=null;const _=[],y=[],P=new Je;let R=null;const w=new Qt;w.layers.enable(1),w.viewport=new ct;const I=new Qt;I.layers.enable(2),I.viewport=new ct;const k=[w,I],x=new Uy;x.layers.enable(1),x.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=_[ee];return fe===void 0&&(fe=new Na,_[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=_[ee];return fe===void 0&&(fe=new Na,_[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=_[ee];return fe===void 0&&(fe=new Na,_[ee]=fe),fe.getHandSpace()};function X(ee){const fe=y.indexOf(ee.inputSource);if(fe===-1)return;const xe=_[fe];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<_.length;ee++){const fe=y[ee];fe!==null&&(y[ee]=null,_[ee].disconnect(fe))}A=null,U=null,E.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ji(h.framebufferWidth,h.framebufferHeight,{format:gn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,F=null;m.depth&&(F=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Lr:yr,xe=m.stencil?Pr:Xi);const se={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ji(d.textureWidth,d.textureHeight,{format:gn,type:qn,depthTexture:new Fh(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function oe(ee){for(let fe=0;fe<ee.removed.length;fe++){const xe=ee.removed[fe],F=y.indexOf(xe);F>=0&&(y[F]=null,_[F].disconnect(xe))}for(let fe=0;fe<ee.added.length;fe++){const xe=ee.added[fe];let F=y.indexOf(xe);if(F===-1){for(let ne=0;ne<_.length;ne++)if(ne>=y.length){y.push(xe),F=ne;break}else if(y[ne]===null){y[ne]=xe,F=ne;break}if(F===-1)break}const se=_[F];se&&se.connect(xe)}}const q=new $,J=new $;function H(ee,fe,xe){q.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);const F=q.distanceTo(J),se=fe.projectionMatrix.elements,ne=xe.projectionMatrix.elements,de=se[14]/(se[10]-1),we=se[14]/(se[10]+1),Pe=(se[9]+1)/se[5],g=(se[9]-1)/se[5],L=(se[8]-1)/se[0],O=(ne[8]+1)/ne[0],Z=de*L,W=de*O,ie=F/(-L+O),re=ie*-L;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(ie),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),se[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const b=de+ie,v=we+ie,D=Z-re,j=W+(F-re),G=Pe*we/v*b,V=g*we/v*b;ee.projectionMatrix.makePerspective(D,j,G,V,b,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,xe=ee.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(xe=E.depthFar)),x.near=I.near=w.near=fe,x.far=I.far=w.far=xe,(A!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,U=x.far);const F=ee.parent,se=x.cameras;me(x,F);for(let ne=0;ne<se.length;ne++)me(se[ne],F);se.length===2?H(x,w,I):x.projectionMatrix.copy(w.projectionMatrix),_e(ee,x,F)};function _e(ee,fe,xe){xe===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ps*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(x)};let Me=null;function Ie(ee,fe){if(u=fe.getViewerPose(c||o),S=fe,u!==null){const xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let F=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,F=!0);for(let ne=0;ne<xe.length;ne++){const de=xe[ne];let we=null;if(h!==null)we=h.getViewport(de);else{const g=f.getViewSubImage(d,de);we=g.viewport,ne===0&&(e.setRenderTargetTextures(M,g.colorTexture,d.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(M))}let Pe=k[ne];Pe===void 0&&(Pe=new Qt,Pe.layers.enable(ne),Pe.viewport=new ct,k[ne]=Pe),Pe.matrix.fromArray(de.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(de.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(we.x,we.y,we.width,we.height),ne===0&&(x.matrix.copy(Pe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),F===!0&&x.cameras.push(Pe)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const ne=f.getDepthInformation(xe[0]);ne&&ne.isValid&&ne.texture&&E.init(e,ne,r.renderState)}}for(let xe=0;xe<_.length;xe++){const F=y[xe],se=_[xe];F!==null&&se!==void 0&&se.update(F,fe,c||o)}Me&&Me(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const je=new Nh;je.setAnimationLoop(Ie),this.setAnimationLoop=function(ee){Me=ee},this.dispose=function(){}}}const Di=new Cn,zy=new mt;function Hy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),S(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),E(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Di)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const y=_.program;i.uniformBlockBinding(M,y)}function c(M,_){let y=r[M.id];y===void 0&&(S(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(M,P);const R=e.render.frame;s[M.id]!==R&&(d(M),s[M.id]=R)}function u(M){const _=f();M.__bindingPointIndex=_;const y=n.createBuffer(),P=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=r[M.id],y=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,w=y.length;R<w;R++){const I=Array.isArray(y[R])?y[R]:[y[R]];for(let k=0,x=I.length;k<x;k++){const A=I[k];if(h(A,R,k,P)===!0){const U=A.__offset,X=Array.isArray(A.value)?A.value:[A.value];let Q=0;for(let oe=0;oe<X.length;oe++){const q=X[oe],J=E(q);typeof q=="number"||typeof q=="boolean"?(A.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,U+Q,A.__data)):q.isMatrix3?(A.__data[0]=q.elements[0],A.__data[1]=q.elements[1],A.__data[2]=q.elements[2],A.__data[3]=0,A.__data[4]=q.elements[3],A.__data[5]=q.elements[4],A.__data[6]=q.elements[5],A.__data[7]=0,A.__data[8]=q.elements[6],A.__data[9]=q.elements[7],A.__data[10]=q.elements[8],A.__data[11]=0):(q.toArray(A.__data,Q),Q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,_,y,P){const R=M.value,w=_+"_"+y;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const I=P[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function S(M){const _=M.uniforms;let y=0;const P=16;for(let w=0,I=_.length;w<I;w++){const k=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,A=k.length;x<A;x++){const U=k[x],X=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,oe=X.length;Q<oe;Q++){const q=X[Q],J=E(q),H=y%P,me=H%J.boundary,_e=H+me;y+=me,_e!==0&&P-_e<J.storage&&(y+=P-_e),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=J.storage}}}const R=y%P;return R>0&&(y+=P-R),M.__size=y,M.__cache={},this}function E(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Gy{constructor(e={}){const{canvas:t=R0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),S=new Int32Array(4);let E=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=mi,this.toneMappingExposure=1;const _=this;let y=!1,P=0,R=0,w=null,I=-1,k=null;const x=new ct,A=new ct;let U=null;const X=new et(0);let Q=0,oe=t.width,q=t.height,J=1,H=null,me=null;const _e=new ct(0,0,oe,q),Me=new ct(0,0,oe,q);let Ie=!1;const je=new gc;let ee=!1,fe=!1;const xe=new mt,F=new mt,se=new $,ne=new ct,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Pe(){return w===null?J:1}let g=i;function L(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),g===null){const B="webgl2";if(g=L(B,T),g===null)throw L(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,Z,W,ie,re,b,v,D,j,G,V,ce,ae,he,Re,ue,ve,Ue,Le,ye,$e,Ne,qe,N;function Ae(){O=new qS(g),O.init(),Ne=new Iy(g,O),Z=new HS(g,O,e,Ne),W=new Py(g),Z.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),ie=new ZS(g),re=new my,b=new Dy(g,O,W,re,Z,Ne,ie),v=new GS(_),D=new $S(_),j=new iv(g),qe=new kS(g,j),G=new YS(g,j,ie,qe),V=new QS(g,G,j,ie),Le=new JS(g,Z,b),ue=new VS(re),ce=new py(_,v,D,O,Z,qe,ue),ae=new Hy(_,re),he=new _y,Re=new Ey(O),Ue=new BS(_,v,D,W,V,d,l),ve=new Ry(_,V,Z),N=new Vy(g,ie,Z,W),ye=new zS(g,O,ie),$e=new KS(g,O,ie),ie.programs=ce.programs,_.capabilities=Z,_.extensions=O,_.properties=re,_.renderLists=he,_.shadowMap=ve,_.state=W,_.info=ie}Ae();const te=new ky(_,g);this.xr=te,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(oe,q,!1))},this.getSize=function(T){return T.set(oe,q)},this.setSize=function(T,B,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,q=B,t.width=Math.floor(T*J),t.height=Math.floor(B*J),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(oe*J,q*J).floor()},this.setDrawingBufferSize=function(T,B,Y){oe=T,q=B,J=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,B,Y,K){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,B,Y,K),W.viewport(x.copy(_e).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,B,Y,K){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,B,Y,K),W.scissor(A.copy(Me).multiplyScalar(J).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){W.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,B=!0,Y=!0){let K=0;if(T){let z=!1;if(w!==null){const ge=w.texture.format;z=ge===dc||ge===fc||ge===uc}if(z){const ge=w.texture.type,be=ge===qn||ge===Xi||ge===hs||ge===Pr||ge===lc||ge===cc,Ce=Ue.getClearColor(),De=Ue.getClearAlpha(),Be=Ce.r,ze=Ce.g,Fe=Ce.b;be?(h[0]=Be,h[1]=ze,h[2]=Fe,h[3]=De,g.clearBufferuiv(g.COLOR,0,h)):(S[0]=Be,S[1]=ze,S[2]=Fe,S[3]=De,g.clearBufferiv(g.COLOR,0,S))}else K|=g.COLOR_BUFFER_BIT}B&&(K|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(K|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),he.dispose(),Re.dispose(),re.dispose(),v.dispose(),D.dispose(),V.dispose(),qe.dispose(),N.dispose(),ce.dispose(),te.dispose(),te.removeEventListener("sessionstart",Sc),te.removeEventListener("sessionend",Mc),Ei.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ie.autoReset,B=ve.enabled,Y=ve.autoUpdate,K=ve.needsUpdate,z=ve.type;Ae(),ie.autoReset=T,ve.enabled=B,ve.autoUpdate=Y,ve.needsUpdate=K,ve.type=z}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const B=T.target;B.removeEventListener("dispose",Ke),St(B)}function St(T){Vt(T),re.remove(T)}function Vt(T){const B=re.get(T).programs;B!==void 0&&(B.forEach(function(Y){ce.releaseProgram(Y)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,K,z,ge){B===null&&(B=de);const be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=Xh(T,B,Y,K,z);W.setMaterial(K,be);let De=Y.index,Be=1;if(K.wireframe===!0){if(De=G.getWireframeAttribute(Y),De===void 0)return;Be=2}const ze=Y.drawRange,Fe=Y.attributes.position;let at=ze.start*Be,dt=(ze.start+ze.count)*Be;ge!==null&&(at=Math.max(at,ge.start*Be),dt=Math.min(dt,(ge.start+ge.count)*Be)),De!==null?(at=Math.max(at,0),dt=Math.min(dt,De.count)):Fe!=null&&(at=Math.max(at,0),dt=Math.min(dt,Fe.count));const gt=dt-at;if(gt<0||gt===1/0)return;qe.setup(z,K,Ce,Y,De);let $t,nt=ye;if(De!==null&&($t=j.get(De),nt=$e,nt.setIndex($t)),z.isMesh)K.wireframe===!0?(W.setLineWidth(K.wireframeLinewidth*Pe()),nt.setMode(g.LINES)):nt.setMode(g.TRIANGLES);else if(z.isLine){let Oe=K.linewidth;Oe===void 0&&(Oe=1),W.setLineWidth(Oe*Pe()),z.isLineSegments?nt.setMode(g.LINES):z.isLineLoop?nt.setMode(g.LINE_LOOP):nt.setMode(g.LINE_STRIP)}else z.isPoints?nt.setMode(g.POINTS):z.isSprite&&nt.setMode(g.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,Tt=z._multiDrawCounts,it=z._multiDrawCount,un=De?j.get(De).bytesPerElement:1,qi=re.get(K).currentProgram.getUniforms();for(let qt=0;qt<it;qt++)qi.setValue(g,"_gl_DrawID",qt),nt.render(Oe[qt]/un,Tt[qt])}else if(z.isInstancedMesh)nt.renderInstances(at,gt,z.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Tt=Math.min(Y.instanceCount,Oe);nt.renderInstances(at,gt,Tt)}else nt.render(at,gt)};function Qe(T,B,Y){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,bs(T,B,Y),T.side=_i,T.needsUpdate=!0,bs(T,B,Y),T.side=Vn):bs(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),m=Re.get(Y),m.init(B),M.push(m),Y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==Y&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const K=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ge=z.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){const Ce=ge[be];Qe(Ce,Y,z),K.add(Ce)}else Qe(ge,Y,z),K.add(ge)}),M.pop(),m=null,K},this.compileAsync=function(T,B,Y=null){const K=this.compile(T,B,Y);return new Promise(z=>{function ge(){if(K.forEach(function(be){re.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){z(T);return}setTimeout(ge,10)}O.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Gt=null;function Pn(T){Gt&&Gt(T)}function Sc(){Ei.stop()}function Mc(){Ei.start()}const Ei=new Nh;Ei.setAnimationLoop(Pn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){Gt=T,te.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},te.addEventListener("sessionstart",Sc),te.addEventListener("sessionend",Mc),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(B),B=te.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,w),m=Re.get(T,M.length),m.init(B),M.push(m),F.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),je.setFromProjectionMatrix(F),fe=this.localClippingEnabled,ee=ue.init(this.clippingPlanes,fe),E=he.get(T,p.length),E.init(),p.push(E),te.enabled===!0&&te.isPresenting===!0){const ge=_.xr.getDepthSensingMesh();ge!==null&&Ho(ge,B,-1/0,_.sortObjects)}Ho(T,B,0,_.sortObjects),E.finish(),_.sortObjects===!0&&E.sort(H,me),we=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,we&&Ue.addToRenderList(E,T),this.info.render.frame++,ee===!0&&ue.beginShadows();const Y=m.state.shadowsArray;ve.render(Y,T,B),ee===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=E.opaque,z=E.transmissive;if(m.setupLights(),B.isArrayCamera){const ge=B.cameras;if(z.length>0)for(let be=0,Ce=ge.length;be<Ce;be++){const De=ge[be];Ec(K,z,T,De)}we&&Ue.render(T);for(let be=0,Ce=ge.length;be<Ce;be++){const De=ge[be];yc(E,T,De,De.viewport)}}else z.length>0&&Ec(K,z,T,B),we&&Ue.render(T),yc(E,T,B);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,B),qe.resetDefaultState(),I=-1,k=null,M.pop(),M.length>0?(m=M[M.length-1],ee===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?E=p[p.length-1]:E=null};function Ho(T,B,Y,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){K&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const be=V.update(T),Ce=T.material;Ce.visible&&E.push(T,be,Ce,Y,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){const be=V.update(T),Ce=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ne.copy(be.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Ce)){const De=be.groups;for(let Be=0,ze=De.length;Be<ze;Be++){const Fe=De[Be],at=Ce[Fe.materialIndex];at&&at.visible&&E.push(T,be,at,Y,ne.z,Fe)}}else Ce.visible&&E.push(T,be,Ce,Y,ne.z,null)}}const ge=T.children;for(let be=0,Ce=ge.length;be<Ce;be++)Ho(ge[be],B,Y,K)}function yc(T,B,Y,K){const z=T.opaque,ge=T.transmissive,be=T.transparent;m.setupLightsView(Y),ee===!0&&ue.setGlobalState(_.clippingPlanes,Y),K&&W.viewport(x.copy(K)),z.length>0&&Es(z,B,Y),ge.length>0&&Es(ge,B,Y),be.length>0&&Es(be,B,Y),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Ec(T,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new ji(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?vs:qn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ge=m.state.transmissionRenderTarget[K.id],be=K.viewport||x;ge.setSize(be.z,be.w);const Ce=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(X),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),we&&Ue.render(Y);const De=_.toneMapping;_.toneMapping=mi;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ee===!0&&ue.setGlobalState(_.clippingPlanes,K),Es(T,Y,K),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge),O.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Fe=0,at=B.length;Fe<at;Fe++){const dt=B[Fe],gt=dt.object,$t=dt.geometry,nt=dt.material,Oe=dt.group;if(nt.side===Vn&&gt.layers.test(K.layers)){const Tt=nt.side;nt.side=Wt,nt.needsUpdate=!0,bc(gt,Y,K,$t,nt,Oe),nt.side=Tt,nt.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge))}_.setRenderTarget(Ce),_.setClearColor(X,Q),Be!==void 0&&(K.viewport=Be),_.toneMapping=De}function Es(T,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ge=T.length;z<ge;z++){const be=T[z],Ce=be.object,De=be.geometry,Be=K===null?be.material:K,ze=be.group;Ce.layers.test(Y.layers)&&bc(Ce,B,Y,De,Be,ze)}}function bc(T,B,Y,K,z,ge){T.onBeforeRender(_,B,Y,K,z,ge),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,B,Y,K,T,ge),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,_.renderBufferDirect(Y,B,K,z,T,ge),z.side=_i,z.needsUpdate=!0,_.renderBufferDirect(Y,B,K,z,T,ge),z.side=Vn):_.renderBufferDirect(Y,B,K,z,T,ge),T.onAfterRender(_,B,Y,K,z,ge)}function bs(T,B,Y){B.isScene!==!0&&(B=de);const K=re.get(T),z=m.state.lights,ge=m.state.shadowsArray,be=z.state.version,Ce=ce.getParameters(T,z.state,ge,B,Y),De=ce.getProgramCacheKey(Ce);let Be=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?D:v).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Ke),Be=new Map,K.programs=Be);let ze=Be.get(De);if(ze!==void 0){if(K.currentProgram===ze&&K.lightsStateVersion===be)return Tc(T,Ce),ze}else Ce.uniforms=ce.getUniforms(T),T.onBeforeCompile(Ce,_),ze=ce.acquireProgram(Ce,De),Be.set(De,ze),K.uniforms=Ce.uniforms;const Fe=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),Tc(T,Ce),K.needsLights=$h(T),K.lightsStateVersion=be,K.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=ze,K.uniformsList=null,ze}function Ac(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=lo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Tc(T,B){const Y=re.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Xh(T,B,Y,K,z){B.isScene!==!0&&(B=de),b.resetTextureUnits();const ge=B.fog,be=K.isMeshStandardMaterial?B.environment:null,Ce=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mi,De=(K.isMeshStandardMaterial?D:v).get(K.envMap||be),Be=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Fe=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,dt=!!Y.morphAttributes.color;let gt=mi;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=_.toneMapping);const $t=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=$t!==void 0?$t.length:0,Oe=re.get(K),Tt=m.state.lights;if(ee===!0&&(fe===!0||T!==k)){const tn=T===k&&K.id===I;ue.setState(K,T,tn)}let it=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Tt.state.version||Oe.outputColorSpace!==Ce||z.isBatchedMesh&&Oe.batching===!1||!z.isBatchedMesh&&Oe.batching===!0||z.isBatchedMesh&&Oe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Oe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Oe.instancing===!1||!z.isInstancedMesh&&Oe.instancing===!0||z.isSkinnedMesh&&Oe.skinning===!1||!z.isSkinnedMesh&&Oe.skinning===!0||z.isInstancedMesh&&Oe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Oe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Oe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Oe.instancingMorph===!1&&z.morphTexture!==null||Oe.envMap!==De||K.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ue.numPlanes||Oe.numIntersection!==ue.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==ze||Oe.morphTargets!==Fe||Oe.morphNormals!==at||Oe.morphColors!==dt||Oe.toneMapping!==gt||Oe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Oe.__version=K.version);let un=Oe.currentProgram;it===!0&&(un=bs(K,B,z));let qi=!1,qt=!1,Vo=!1;const vt=un.getUniforms(),Zn=Oe.uniforms;if(W.useProgram(un.program)&&(qi=!0,qt=!0,Vo=!0),K.id!==I&&(I=K.id,qt=!0),qi||k!==T){Z.reverseDepthBuffer?(xe.copy(T.projectionMatrix),P0(xe),L0(xe),vt.setValue(g,"projectionMatrix",xe)):vt.setValue(g,"projectionMatrix",T.projectionMatrix),vt.setValue(g,"viewMatrix",T.matrixWorldInverse);const tn=vt.map.cameraPosition;tn!==void 0&&tn.setValue(g,se.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&vt.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,qt=!0,Vo=!0)}if(z.isSkinnedMesh){vt.setOptional(g,z,"bindMatrix"),vt.setOptional(g,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),vt.setValue(g,"boneTexture",tn.boneTexture,b))}z.isBatchedMesh&&(vt.setOptional(g,z,"batchingTexture"),vt.setValue(g,"batchingTexture",z._matricesTexture,b),vt.setOptional(g,z,"batchingIdTexture"),vt.setValue(g,"batchingIdTexture",z._indirectTexture,b),vt.setOptional(g,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(g,"batchingColorTexture",z._colorsTexture,b));const Go=Y.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0)&&Le.update(z,Y,un),(qt||Oe.receiveShadow!==z.receiveShadow)&&(Oe.receiveShadow=z.receiveShadow,vt.setValue(g,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Zn.envMap.value=De,Zn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(Zn.envMapIntensity.value=B.environmentIntensity),qt&&(vt.setValue(g,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&jh(Zn,Vo),ge&&K.fog===!0&&ae.refreshFogUniforms(Zn,ge),ae.refreshMaterialUniforms(Zn,K,J,q,m.state.transmissionRenderTarget[T.id]),lo.upload(g,Ac(Oe),Zn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(lo.upload(g,Ac(Oe),Zn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(g,"center",z.center),vt.setValue(g,"modelViewMatrix",z.modelViewMatrix),vt.setValue(g,"normalMatrix",z.normalMatrix),vt.setValue(g,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const tn=K.uniformsGroups;for(let Wo=0,qh=tn.length;Wo<qh;Wo++){const wc=tn[Wo];N.update(wc,un),N.bind(wc,un)}}return un}function jh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function $h(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,Y){re.get(T.texture).__webglTexture=B,re.get(T.depthTexture).__webglTexture=Y;const K=re.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Y=re.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Y=0){w=T,P=B,R=Y;let K=!0,z=null,ge=!1,be=!1;if(T){const De=re.get(T);if(De.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(g.FRAMEBUFFER,null),K=!1;else if(De.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(De.__hasExternalTextures)b.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Fe=T.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&re.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const ze=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?z=ze[B][Y]:z=ze[B],ge=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?z=re.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[Y]:z=ze,x.copy(T.viewport),A.copy(T.scissor),U=T.scissorTest}else x.copy(_e).multiplyScalar(J).floor(),A.copy(Me).multiplyScalar(J).floor(),U=Ie;if(W.bindFramebuffer(g.FRAMEBUFFER,z)&&K&&W.drawBuffers(T,z),W.viewport(x),W.scissor(A),W.setScissorTest(U),ge){const De=re.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,Y)}else if(be){const De=re.get(T.texture),Be=B||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,Be)}I=-1},this.readRenderTargetPixels=function(T,B,Y,K,z,ge,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){W.bindFramebuffer(g.FRAMEBUFFER,Ce);try{const De=T.texture,Be=De.format,ze=De.type;if(!Z.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&Y>=0&&Y<=T.height-z&&g.readPixels(B,Y,K,z,Ne.convert(Be),Ne.convert(ze),ge)}finally{const De=w!==null?re.get(w).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,K,z,ge,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const De=T.texture,Be=De.format,ze=De.type;if(!Z.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-K&&Y>=0&&Y<=T.height-z){W.bindFramebuffer(g.FRAMEBUFFER,Ce);const Fe=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.bufferData(g.PIXEL_PACK_BUFFER,ge.byteLength,g.STREAM_READ),g.readPixels(B,Y,K,z,Ne.convert(Be),Ne.convert(ze),0);const at=w!==null?re.get(w).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,at);const dt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await C0(g,dt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ge),g.deleteBuffer(Fe),g.deleteSync(dt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,Y=0){T.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-Y),z=Math.floor(T.image.width*K),ge=Math.floor(T.image.height*K),be=B!==null?B.x:0,Ce=B!==null?B.y:0;b.setTexture2D(T,0),g.copyTexSubImage2D(g.TEXTURE_2D,Y,0,0,be,Ce,z,ge),W.unbindTexture()},this.copyTextureToTexture=function(T,B,Y=null,K=null,z=0){T.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,Y=null);let ge,be,Ce,De,Be,ze;Y!==null?(ge=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ce=Y.min.x,De=Y.min.y):(ge=T.image.width,be=T.image.height,Ce=0,De=0),K!==null?(Be=K.x,ze=K.y):(Be=0,ze=0);const Fe=Ne.convert(B.format),at=Ne.convert(B.type);b.setTexture2D(B,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,B.unpackAlignment);const dt=g.getParameter(g.UNPACK_ROW_LENGTH),gt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),$t=g.getParameter(g.UNPACK_SKIP_PIXELS),nt=g.getParameter(g.UNPACK_SKIP_ROWS),Oe=g.getParameter(g.UNPACK_SKIP_IMAGES),Tt=T.isCompressedTexture?T.mipmaps[z]:T.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(g.UNPACK_SKIP_ROWS,De),T.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,z,Be,ze,ge,be,Fe,at,Tt.data):T.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,z,Be,ze,Tt.width,Tt.height,Fe,Tt.data):g.texSubImage2D(g.TEXTURE_2D,z,Be,ze,ge,be,Fe,at,Tt),g.pixelStorei(g.UNPACK_ROW_LENGTH,dt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,$t),g.pixelStorei(g.UNPACK_SKIP_ROWS,nt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Oe),z===0&&B.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Y=null,K=null,z=0){T.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0);let ge,be,Ce,De,Be,ze,Fe,at,dt;const gt=T.isCompressedTexture?T.mipmaps[z]:T.image;Y!==null?(ge=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ce=Y.max.z-Y.min.z,De=Y.min.x,Be=Y.min.y,ze=Y.min.z):(ge=gt.width,be=gt.height,Ce=gt.depth,De=0,Be=0,ze=0),K!==null?(Fe=K.x,at=K.y,dt=K.z):(Fe=0,at=0,dt=0);const $t=Ne.convert(B.format),nt=Ne.convert(B.type);let Oe;if(B.isData3DTexture)b.setTexture3D(B,0),Oe=g.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)b.setTexture2DArray(B,0),Oe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,B.unpackAlignment);const Tt=g.getParameter(g.UNPACK_ROW_LENGTH),it=g.getParameter(g.UNPACK_IMAGE_HEIGHT),un=g.getParameter(g.UNPACK_SKIP_PIXELS),qi=g.getParameter(g.UNPACK_SKIP_ROWS),qt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,De),g.pixelStorei(g.UNPACK_SKIP_ROWS,Be),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze),T.isDataTexture||T.isData3DTexture?g.texSubImage3D(Oe,z,Fe,at,dt,ge,be,Ce,$t,nt,gt.data):B.isCompressedArrayTexture?g.compressedTexSubImage3D(Oe,z,Fe,at,dt,ge,be,Ce,$t,gt.data):g.texSubImage3D(Oe,z,Fe,at,dt,ge,be,Ce,$t,nt,gt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Tt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(g.UNPACK_SKIP_PIXELS,un),g.pixelStorei(g.UNPACK_SKIP_ROWS,qi),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qt),z===0&&B.generateMipmaps&&g.generateMipmap(Oe),W.unbindTexture()},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,W.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hc?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Bo?"display-p3":"srgb"}}class Wy extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vc extends yi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,d=new $,h=[],S=[],E=[],m=[];for(let p=0;p<=i;p++){const M=[],_=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const R=P/t;f.x=-e*Math.cos(r+R*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+_*a),S.push(f.x,f.y,f.z),d.copy(f).normalize(),E.push(d.x,d.y,d.z),m.push(R+y,1-_),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const _=u[p][M+1],y=u[p][M],P=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&h.push(_,y,R),(p!==i-1||l<Math.PI)&&h.push(y,P,R)}this.setIndex(h),this.setAttribute("position",new Rn(S,3)),this.setAttribute("normal",new Rn(E,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xy extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hh extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fa=new mt,yf=new $,Ef=new $;class jy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bf=new mt,Wr=new $,Oa=new $;class $y extends jy{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Oa.copy(i.position),Oa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Oa),i.updateMatrixWorld(),r.makeTranslation(-Wr.x,-Wr.y,-Wr.z),bf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}}class qy extends Hh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yy extends Hh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function Ky(){const n=new Wy,e=new Qt(18,window.innerWidth/window.innerHeight,10,1e3),t=new qy(16777215,150),i=new Yy(16777215,10),r=new Gy({canvas:document.querySelector("#starHeader")});return r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(986895),r.render(n,e),t.position.set(0,4,6),{scene:n,renderer:r,camera:e,pointLight:t,ambientLight:i}}function Zy(){return{star:new An(new vc(.035),new Xy({color:16777215}))}}const Jy={class:"canvaswrapper"},Qy={__name:"StarBG",setup(n){return jn(()=>{const{scene:e,renderer:t,camera:i,ambientLight:r}=Ky(),s=new $(0,0,0),o=80;function a(){const{star:f}=Zy(),[d,h,S]=Array(3).fill().map(()=>w0.randFloatSpread(100));f.position.set(d,h,S),f.rotation.z=S*-.1,e.add(f)}Array(500).fill().forEach(a),e.add(r);const l=new Je;function c(f){l.x=f.clientX/window.innerWidth*2-1}window.addEventListener("mousemove",c);function u(){requestAnimationFrame(u);const f=Date.now()*5e-5;i.position.x=s.x-Math.sin(f)*o*l.x,i.position.z=s.z+Math.cos(f)*o,i.lookAt(s),t.render(e,i)}u()}),(e,t)=>(Ye(),ot("div",Jy,t[0]||(t[0]=[C("canvas",{id:"starHeader"},null,-1)])))}},eE={class:"headerContainer",id:"canvasCon"},tE={__name:"Header",setup(n){return(e,t)=>(Ye(),ot("div",eE,[pe(Qy),t[0]||(t[0]=C("div",{class:"herowrapper"},[C("h2",{class:"hero glitch layers","data-text":"程式和設計"},[C("span",null,"ARRO.AV")]),C("h5",{class:"hero glitch layers","data-text":"程式和設計"},[C("span",null,"creative_coding")]),C("h6",{class:"hero glitch layers","data-text":"程式和設計"},[C("span",null,"開發設計")])],-1))]))}},nE={class:"projectLeftSection"},iE={class:"projectTags"},rE={__name:"ProjectCard",props:{projectTitle:String,projectTags:Array,currentProjectView:String,imagePath:String},setup(n){return(e,t)=>{const i=Io("RouterLink");return Ye(),ot("div",{class:"projectContainer",style:To({backgroundImage:`url(${n.imagePath})`})},[pe(i,{to:n.currentProjectView,class:"project-list"},{default:Ge(()=>[C("div",nE,[C("h2",null,Vi(n.projectTitle),1),C("div",iE,[(Ye(!0),ot(wt,null,Wa(n.projectTags,r=>(Ye(),ot("p",{key:r},Vi(r),1))),128))])])]),_:1},8,["to"])],4)}}},bt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},sE={class:"projectsWrapper"},oE={class:"projectNav"},aE=["id","onClick"],lE={class:"projectListContainer"},cE={__name:"ProjectFilter",setup(n){const e=rs(localStorage.getItem("activeFilter")||"AUDIO"),t=rs([{categories:["AUDIO"],title:"Coding Techno",currentProjectView:"/AudioProject1",imagePath:"/bg_images/a_1.png",tag:["#LiveSession","#SonicPi"]},{categories:["AUDIO"],title:"Chaotic Algorithms",currentProjectView:"/AudioProject2",imagePath:"/bg_images/a_2.png",tag:["#MusicVideo","#SP","#TD"]},{categories:["AUDIO"],title:"MIDI Boilerplate",currentProjectView:"/AudioProject3",imagePath:"/bg_images/a_3.png",tag:["#Code","#Ruby"]},{categories:["VISUAL"],title:"VJ-Setup v1.0",currentProjectView:"/VisualProject1",imagePath:"/bg_images/v_1.png",tag:["#TD","#VJ","#MIDI"]},{categories:["VISUAL"],title:"PokéMorph",currentProjectView:"/VisualProject2",imagePath:"/bg_images/v_2.png",tag:["#Tutorial","#GLSL","#TD"]},{categories:["VISUAL"],title:"Bananana",currentProjectView:"/VisualProject3",imagePath:"/bg_images/v_3.png",tag:["#Tutorial","#TD"]},{categories:["DESIGN"],title:"Websites",currentProjectView:"/DesignProject1",imagePath:"/bg_images/d_1.png",tag:["#Webdesign","#Frontend","#CMS"]},{categories:["DESIGN"],title:"Screenprints",currentProjectView:"/DesignProject2",imagePath:"/bg_images/d_2.png",tag:["#Screenprint","#Art"]},{categories:["DESIGN"],title:"Branding",currentProjectView:"/DesignProject3",imagePath:"/bg_images/d_3.png",tag:["#Different","#Stuff"]},{categories:["OTHER"],title:"Events",currentProjectView:"/OtherProject1",imagePath:"/bg_images/o_1.png",tag:["#HoA","#GoS","#SL"]},{categories:["OTHER"],title:"RetroPi Build",currentProjectView:"/OtherProject2",imagePath:"/bg_images/o_2.png",tag:["#RasPi","#Emulation","#Linux"]},{categories:["OTHER"],title:"Dead Internet",currentProjectView:"/OtherProject3",imagePath:"/bg_images/o_3.png",tag:["#DataVisualisation","#MediaStudies"]}]),i=sn(()=>e.value?t.value.filter(s=>s.categories.includes(e.value)):t.value);function r(s){e.value===s?e.value=null:(e.value=s,localStorage.setItem("activeFilter",s))}return(s,o)=>(Ye(),ot("div",sE,[C("div",oE,[(Ye(),ot(wt,null,Wa(["AUDIO","VISUAL","DESIGN","OTHER"],a=>C("li",{key:a,id:e.value===a?"activeFilter":"",onClick:l=>r(a)},Vi(a),9,aE)),64))]),C("div",lE,[pe(dg,{name:"project",tag:"div",class:"project-list"},{default:Ge(()=>[(Ye(!0),ot(wt,null,Wa(i.value,a=>(Ye(),ls(rE,{key:a.title,subTitle:a.subTitle,projectTitle:a.title,currentProjectView:a.currentProjectView,imagePath:a.imagePath,projectTags:a.tag,projectInfo:a.info},null,8,["subTitle","projectTitle","currentProjectView","imagePath","projectTags","projectInfo"]))),128))]),_:1})])]))}},uE=bt(cE,[["__scopeId","data-v-7ed228d8"]]),fE={class:"projectsWrapper"},dE={__name:"Projects",setup(n){return(e,t)=>(Ye(),ot("div",fE,[pe(tE),pe(uE)]))}},hE="/assets/me_about-C8GwDDB2.png",pE="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20width='500'%20height='500'%20viewBox='0%200%20132.29166%20132.29167'%20version='1.1'%20id='svg1'%20xml:space='preserve'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3csodipodi:namedview%20id='namedview1'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:document-units='mm'%20showgrid='false'%20/%3e%3cdefs%20id='defs1'%20/%3e%3cg%20inkscape:label='Ebene%201'%20inkscape:groupmode='layer'%20id='layer1'%3e%3cpath%20style='fill:%23000000'%20d='m%2062.927177,115.33645%20-1.32532,-1.42951%20V%2092.040717%2070.174495%20h%20-20.27252%20-20.27252%20l%20-1.32532,-1.429511%20c%20-1.6891,-1.821886%20-1.6891,-4.054993%200,-5.876878%20l%201.32532,-1.429511%20h%2020.27252%2020.27252%20V%2039.572373%2017.70615%20l%201.32532,-1.42951%20c%201.6891,-1.821886%203.75945,-1.821886%205.44855,0%20l%201.32532,1.42951%20v%2021.866223%2021.866222%20h%2020.27253%2020.272523%20l%201.32532,1.429511%20c%201.6891,1.821885%201.6891,4.054992%200,5.876878%20l%20-1.32532,1.429511%20H%2089.973577%2069.701047%20v%2021.866222%2021.866223%20l%20-1.32532,1.42951%20c%20-0.72893,0.78623%20-1.95485,1.42951%20-2.72427,1.42951%20-0.76943,0%20-1.99535,-0.64328%20-2.72428,-1.42951%20z'%20id='path1'%20/%3e%3c/g%3e%3c/svg%3e",mE={class:"collapsibleWrapper"},gE={key:0,class:"collapsibleContent"},_E={__name:"Collapsibles",props:{title:String,text:String},setup(n){const e=rs(!1);return(t,i)=>(Ye(),ot("div",mE,[C("div",{class:"collapspreview",onClick:i[0]||(i[0]=r=>e.value=!e.value)},[C("h4",null,Vi(n.title),1),C("img",{src:pE,alt:"Icon to Open a collapse section",class:wo({rotated:e.value})},null,2)]),pe(Wd,{name:"ease-in"},{default:Ge(()=>[e.value?(Ye(),ot("div",gE,[Jp(t.$slots,"default",{},void 0,!0)])):Pm("",!0)]),_:3})]))}},tt=bt(_E,[["__scopeId","data-v-d0e110b4"]]),vE={class:"aboutSite"},xE={class:"aboutDetails"},SE={__name:"About",setup(n){return(e,t)=>(Ye(),ot("div",vE,[t[3]||(t[3]=C("section",{class:"aboutGeneral"},[C("img",{src:hE,alt:"A picture of me (Robert Ardeleanu)",class:"aboutPic",loading:"eager"}),C("div",{class:"aboutTextWrapper"},[C("h5",null,"hi, my name is..."),C("h2",null,"ROBERT ARDELEANU"),C("p",null,[He(" I am a creative coding enthusiast and currently study MtD (BA) at the unviersity of applied sciences @ Campus Hagenberg. "),C("br"),C("span",null,"Linz, Upper Austria")])])],-1)),C("section",xE,[pe(tt,{title:"Things I love"},{default:Ge(()=>t[0]||(t[0]=[C("h4",null,"Creative Coding",-1),C("p",null,"generative visuals with TD & algorithmic sound with SP",-1),C("h4",null,"Prints",-1),C("p",null,"screenprinted shirts, stickers and all that good stuff",-1),C("h4",null,"Pokémon",-1),C("p",null,"pure nostalgia - the ROM-hacks are the best tho",-1),C("h4",null,"Cats",-1),C("p",null,"I have two cats - basically my children",-1),C("h4",null,"Techno",-1),C("p",null,"best spirit - even better sound",-1)])),_:1}),pe(tt,{title:"Technologies"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Programming",-1),C("p",null,"Javascript(Vue), Java, Python, Ruby, GLSL",-1),C("h4",null,"Realtime-Graphics",-1),C("p",null,"Touchdesigner",-1),C("h4",null,"2D-Graphics",-1),C("p",null,"Photoshop, Illustrator, Procreate",-1),C("h4",null,"3D-Graphics",-1),C("p",null,"Blender",-1),C("h4",null,"Video",-1),C("p",null,"DaVinci Resolve, OBS, Premiere",-1),C("h4",null,"Audio",-1),C("p",null,"SonicPi, Ableton",-1),C("h4",null,"UX/UI-Design",-1),C("p",null,"Xd, Figma",-1)])),_:1}),pe(tt,{title:"Portfolio"},{default:Ge(()=>t[2]||(t[2]=[C("h4",null,"Web Portfolio",-1),C("p",null,[He(" This Portfolio was built using HTML, SCSS and JS | Vue. I used Vite for developement and build process. "),C("br"),C("a",{target:"_blank",href:"https://github.com/sync-tax/tribeholz_portfolio"},"→ Codebase on GitHub")],-1),C("br",null,null,-1),C("h4",null,"Print Portfolio",-1),C("p",null,[C("a",{href:"https://drive.google.com/file/d/18GAOEvxXWaD3Pvr4apUIzXjAwTwsZfBV/view?usp=sharing",target:"_blank"},"→ Portfolio (PDF) - Download")],-1)])),_:1})])]))}},ME=bt(SE,[["__scopeId","data-v-30c3a924"]]),yE={},EE={class:"linkContainer"};function bE(n,e){return Ye(),ot("div",EE,e[0]||(e[0]=[$n('<a href="https://www.youtube.com/@tribeholz23" target="_blank">YouTube</a><a href="https://www.instagram.com/_tribeholz" target="_blank">Instagram</a><a href="https://github.com/sync-tax/" target="_blank">Github</a><a href="https://soundcloud.com/tribeholz808" target="_blank">Soundcloud</a><a href="https://drive.google.com/drive/folders/1Hxd5kI1gWZXB3dU15D3aQc7badd6mQHl?usp=sharing" target="_blank">TD Files</a><a href="https://www.instagram.com/durch.durch.durch/" target="_blank">DURCH</a>',6)]))}const AE=bt(yE,[["render",bE]]),TE="data:image/svg+xml,%3csvg%20clip-rule='evenodd'%20fill-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m9.474%205.209s-4.501%204.505-6.254%206.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752%201.754%206.252%206.257%206.252%206.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414%200%20.75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'%20fill-rule='nonzero'/%3e%3c/svg%3e",wE={},RE={class:"backOverview"};function CE(n,e){const t=Io("RouterLink");return Ye(),ot("section",RE,[pe(t,{to:"/",class:"backLink"},{default:Ge(()=>e[0]||(e[0]=[C("img",{src:TE,alt:"back_arrow",width:"20px"},null,-1),C("p",null,"Back",-1)])),_:1})])}const cn=bt(wE,[["render",CE]]),PE={class:"textProjectContent"},Ht={__name:"ProjectOverview",props:{title:String,text:String},setup(n){return(e,t)=>(Ye(),ot("div",PE,[C("h2",null,Vi(n.title),1),C("p",null,Vi(n.text),1)]))}},LE={class:"project"},DE={class:"projectOverview"},IE={class:"projectDetails"},UE={__name:"AudioProject1",setup(n){return(e,t)=>(Ye(),ot("div",LE,[pe(cn),C("section",DE,[pe(Ht,{title:"Coding Techno",text:`This was the first series I created on coding with SonicPi. It focused\r
          on experimentation and developing a workflow.`}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("iframe",{width:"600",height:"337",src:"https://www.youtube.com/embed/videoseries?si=cQ-cdKx3yKNn4xmz&list=PLFLuAZh6tS3IfAgWplNl72bJkq3jWkxeA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""}),C("p",{class:"contentNote"},"Playlist - Coding Techno with SonicPi")],-1))]),C("section",IE,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null," I never intended to explore electronic music production, but that changed when I discovered SonicPi. Since then, I've developed a deep passion for creative coding. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - SonicPi "),C("br"),He(" - Ruby ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{target:"_blank",href:"https://github.com/sync-tax/TechnoSession-1/blob/main/TechnoSession%231.rb"},"→ Ruby-File | First"),C("br"),C("a",{target:"_blank",href:"https://www.youtube.com/watch?v=s22yDfzhWoU&list=PLFLuAZh6tS3IfAgWplNl72bJkq3jWkxeA"},"→ Playlist | YouTube")],-1)])),_:1})])]))}},NE=bt(UE,[["__scopeId","data-v-0d5a5c40"]]),FE={class:"project"},OE={class:"projectOverview"},BE={class:"projectDetails"},kE={__name:"AudioProject2",setup(n){return(e,t)=>(Ye(),ot("div",FE,[pe(cn),C("section",OE,[pe(Ht,{title:"Chaotic Algorithms",text:`This is my second - ongoing - series on coded sound. The goal is to\r
          integrate the SonicPi workflow with Ableton and Touchdesigner.`}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("iframe",{width:"600",height:"337",src:"https://www.youtube.com/embed/videoseries?si=TgvwDJsjbmOgdroc&list=PLFLuAZh6tS3LOBqjGSkGZ7ALP3DXZvhIU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""}),C("p",{class:"contentNote"},"Playlist - Chaotic Algorhithms")],-1))]),C("section",BE,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null,[He(' The "Chaotic Algorithms" is an ongoing project. However I stopped uploading after the second video because I felt stuck in the mindset of forcing myself to post on YouTube. So, I decided to step back and focus on simply creating. '),C("br"),He(" → After almost 1 year of refining I'm ready to get back to it. ")],-1),C("h4",null,"Tools",-1),C("p",null,[He(" - SonicPi "),C("br"),He(" - Ruby "),C("br"),He(" - Touchdesigner ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{target:"_blank",href:"https://github.com/sync-tax/next_stop/blob/main/next_stop/next_stop.rb"},"→ Next Stop - Ruby File"),C("br"),C("a",{target:"_blank",href:"https://www.youtube.com/watch?v=RvjkTeZztT4&list=PLFLuAZh6tS3LOBqjGSkGZ7ALP3DXZvhIU"},"→ Playlist | YouTube")],-1)])),_:1})])]))}},zE=bt(kE,[["__scopeId","data-v-c1705d08"]]);var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function HE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vh={exports:{}};(function(n){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function M(_){return _ instanceof l?new l(_.type,M(_.content),_.alias):Array.isArray(_)?_.map(M):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(M){return Object.prototype.toString.call(M).slice(8,-1)},objId:function(M){return M.__id||Object.defineProperty(M,"__id",{value:++s}),M.__id},clone:function M(_,y){y=y||{};var P,R;switch(a.util.type(_)){case"Object":if(R=a.util.objId(_),y[R])return y[R];P={},y[R]=P;for(var w in _)_.hasOwnProperty(w)&&(P[w]=M(_[w],y));return P;case"Array":return R=a.util.objId(_),y[R]?y[R]:(P=[],y[R]=P,_.forEach(function(I,k){P[k]=M(I,y)}),P);default:return _}},getLanguage:function(M){for(;M;){var _=r.exec(M.className);if(_)return _[1].toLowerCase();M=M.parentElement}return"none"},setLanguage:function(M,_){M.className=M.className.replace(RegExp(r,"gi"),""),M.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(P){var M=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(M){var _=document.getElementsByTagName("script");for(var y in _)if(_[y].src==M)return _[y]}return null}},isActive:function(M,_,y){for(var P="no-"+_;M;){var R=M.classList;if(R.contains(_))return!0;if(R.contains(P))return!1;M=M.parentElement}return!!y}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(M,_){var y=a.util.clone(a.languages[M]);for(var P in _)y[P]=_[P];return y},insertBefore:function(M,_,y,P){P=P||a.languages;var R=P[M],w={};for(var I in R)if(R.hasOwnProperty(I)){if(I==_)for(var k in y)y.hasOwnProperty(k)&&(w[k]=y[k]);y.hasOwnProperty(I)||(w[I]=R[I])}var x=P[M];return P[M]=w,a.languages.DFS(a.languages,function(A,U){U===x&&A!=M&&(this[A]=w)}),w},DFS:function M(_,y,P,R){R=R||{};var w=a.util.objId;for(var I in _)if(_.hasOwnProperty(I)){y.call(_,I,_[I],P||I);var k=_[I],x=a.util.type(k);x==="Object"&&!R[w(k)]?(R[w(k)]=!0,M(k,y,null,R)):x==="Array"&&!R[w(k)]&&(R[w(k)]=!0,M(k,y,I,R))}}},plugins:{},highlightAll:function(M,_){a.highlightAllUnder(document,M,_)},highlightAllUnder:function(M,_,y){var P={callback:y,container:M,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),a.hooks.run("before-all-elements-highlight",P);for(var R=0,w;w=P.elements[R++];)a.highlightElement(w,_===!0,P.callback)},highlightElement:function(M,_,y){var P=a.util.getLanguage(M),R=a.languages[P];a.util.setLanguage(M,P);var w=M.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(w,P);var I=M.textContent,k={element:M,language:P,grammar:R,code:I};function x(U){k.highlightedCode=U,a.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,a.hooks.run("after-highlight",k),a.hooks.run("complete",k),y&&y.call(k.element)}if(a.hooks.run("before-sanity-check",k),w=k.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!k.code){a.hooks.run("complete",k),y&&y.call(k.element);return}if(a.hooks.run("before-highlight",k),!k.grammar){x(a.util.encode(k.code));return}if(_&&i.Worker){var A=new Worker(a.filename);A.onmessage=function(U){x(U.data)},A.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else x(a.highlight(k.code,k.grammar,k.language))},highlight:function(M,_,y){var P={code:M,grammar:_,language:y};if(a.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=a.tokenize(P.code,P.grammar),a.hooks.run("after-tokenize",P),l.stringify(a.util.encode(P.tokens),P.language)},tokenize:function(M,_){var y=_.rest;if(y){for(var P in y)_[P]=y[P];delete _.rest}var R=new f;return d(R,R.head,M),u(M,R,_,R.head,0),S(R)},hooks:{all:{},add:function(M,_){var y=a.hooks.all;y[M]=y[M]||[],y[M].push(_)},run:function(M,_){var y=a.hooks.all[M];if(!(!y||!y.length))for(var P=0,R;R=y[P++];)R(_)}},Token:l};i.Prism=a;function l(M,_,y,P){this.type=M,this.content=_,this.alias=y,this.length=(P||"").length|0}l.stringify=function M(_,y){if(typeof _=="string")return _;if(Array.isArray(_)){var P="";return _.forEach(function(x){P+=M(x,y)}),P}var R={type:_.type,content:M(_.content,y),tag:"span",classes:["token",_.type],attributes:{},language:y},w=_.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(R.classes,w):R.classes.push(w)),a.hooks.run("wrap",R);var I="";for(var k in R.attributes)I+=" "+k+'="'+(R.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+I+">"+R.content+"</"+R.tag+">"};function c(M,_,y,P){M.lastIndex=_;var R=M.exec(y);if(R&&P&&R[1]){var w=R[1].length;R.index+=w,R[0]=R[0].slice(w)}return R}function u(M,_,y,P,R,w){for(var I in y)if(!(!y.hasOwnProperty(I)||!y[I])){var k=y[I];k=Array.isArray(k)?k:[k];for(var x=0;x<k.length;++x){if(w&&w.cause==I+","+x)return;var A=k[x],U=A.inside,X=!!A.lookbehind,Q=!!A.greedy,oe=A.alias;if(Q&&!A.pattern.global){var q=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,q+"g")}for(var J=A.pattern||A,H=P.next,me=R;H!==_.tail&&!(w&&me>=w.reach);me+=H.value.length,H=H.next){var _e=H.value;if(_.length>M.length)return;if(!(_e instanceof l)){var Me=1,Ie;if(Q){if(Ie=c(J,me,M,X),!Ie||Ie.index>=M.length)break;var xe=Ie.index,je=Ie.index+Ie[0].length,ee=me;for(ee+=H.value.length;xe>=ee;)H=H.next,ee+=H.value.length;if(ee-=H.value.length,me=ee,H.value instanceof l)continue;for(var fe=H;fe!==_.tail&&(ee<je||typeof fe.value=="string");fe=fe.next)Me++,ee+=fe.value.length;Me--,_e=M.slice(me,ee),Ie.index-=me}else if(Ie=c(J,0,_e,X),!Ie)continue;var xe=Ie.index,F=Ie[0],se=_e.slice(0,xe),ne=_e.slice(xe+F.length),de=me+_e.length;w&&de>w.reach&&(w.reach=de);var we=H.prev;se&&(we=d(_,we,se),me+=se.length),h(_,we,Me);var Pe=new l(I,U?a.tokenize(F,U):F,oe,F);if(H=d(_,we,Pe),ne&&d(_,H,ne),Me>1){var g={cause:I+","+x,reach:de};u(M,_,y,H.prev,me,g),w&&g.reach>w.reach&&(w.reach=g.reach)}}}}}}function f(){var M={value:null,prev:null,next:null},_={value:null,prev:M,next:null};M.next=_,this.head=M,this.tail=_,this.length=0}function d(M,_,y){var P=_.next,R={value:y,prev:_,next:P};return _.next=R,P.prev=R,M.length++,R}function h(M,_,y){for(var P=_.next,R=0;R<y&&P!==M.tail;R++)P=P.next;_.next=P,P.prev=_,M.length-=R}function S(M){for(var _=[],y=M.head.next;y!==M.tail;)_.push(y.value),y=y.next;return _}if(!i.document)return i.addEventListener&&(a.disableWorkerMessageHandler||i.addEventListener("message",function(M){var _=JSON.parse(M.data),y=_.language,P=_.code,R=_.immediateClose;i.postMessage(a.highlight(P,a.languages[y],y)),R&&i.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function m(){a.manual||a.highlightAll()}if(!a.manual){var p=document.readyState;p==="loading"||p==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return a}(e);n.exports&&(n.exports=t),typeof Af<"u"&&(Af.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var s=i.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",r=function(E,m){return"✖ Error "+E+" while fetching file: "+m},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",f="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function d(E,m,p){var M=new XMLHttpRequest;M.open("GET",E,!0),M.onreadystatechange=function(){M.readyState==4&&(M.status<400&&M.responseText?m(M.responseText):M.status>=400?p(r(M.status,M.statusText)):p(s))},M.send(null)}function h(E){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(m){var p=Number(m[1]),M=m[2],_=m[3];return M?_?[p,Number(_)]:[p,void 0]:[p,p]}}t.hooks.add("before-highlightall",function(E){E.selector+=", "+f}),t.hooks.add("before-sanity-check",function(E){var m=E.element;if(m.matches(f)){E.code="",m.setAttribute(a,l);var p=m.appendChild(document.createElement("CODE"));p.textContent=i;var M=m.getAttribute("data-src"),_=E.language;if(_==="none"){var y=(/\.(\w+)$/.exec(M)||[,"none"])[1];_=o[y]||y}t.util.setLanguage(p,_),t.util.setLanguage(m,_);var P=t.plugins.autoloader;P&&P.loadLanguages(_),d(M,function(R){m.setAttribute(a,c);var w=h(m.getAttribute("data-range"));if(w){var I=R.split(/\r\n?|\n/g),k=w[0],x=w[1]==null?I.length:w[1];k<0&&(k+=I.length),k=Math.max(0,Math.min(k-1,I.length)),x<0&&(x+=I.length),x=Math.max(0,Math.min(x,I.length)),R=I.slice(k,x).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(k+1))}p.textContent=R,t.highlightElement(p)},function(R){m.setAttribute(a,u),p.textContent=R})}}),t.plugins.fileHighlight={highlight:function(m){for(var p=(m||document).querySelectorAll(f),M=0,_;_=p[M++];)t.highlightElement(_)}};var S=!1;t.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Vh);var VE=Vh.exports;const xc=HE(VE),GE={class:"project"},WE={class:"projectOverview"},XE={class:"projectDetails"},jE={__name:"AudioProject3",setup(n){return jn(()=>{gs(()=>{xc.highlightAll()})}),(e,t)=>(Ye(),ot("div",GE,[pe(cn),C("section",WE,[pe(Ht,{title:"MIDI Boilerplate",text:"I created a project starter boilerplate that I always use to kick off MIDI-driven live coding sessions in SonicPi."}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("pre",null,[C("code",{class:"language-ruby"},`
_- {TrackTitle_v.X} ~ [chaotic_algorithms] by TRIBΞHOLZ -_
use_bpm 140
use_debug false
use_real_time

live_loop :metro do
  sleep 1
end

define :pattern do |p|
  return p.ring.tick == "x"
end

p = ("xxx-xxx-")

define :scale_midi do |val, min, max|
  return min + (val.to_f / 127) * (max - min)
end

$midi_values ||= Hash.new(0.0)

live_loop :midi_controls do
  key, value = sync "/midi:midi_mix_1:1/control_change"
  case key
  when 19
    $midi_values[19] = scale_midi(value, 0, 0.5)
  when 62
    $MASTER = scale_midi(value, 0, 1)
  end
end

live_loop :example, sync: :metro do
  if pattern(p)
    sample :bd_haus, amp: $midi_values[19] * $MASTER
  end
  sleep 1
end
`)])],-1))]),C("section",XE,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null," While SonicPi enables scripting generative soundscapes, I personally prefer using the live loop feature. Controlling different parameters with a MIDI controller makes playing around even more fun. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - SonicPi "),C("br"),He(" - Ruby ")],-1)])),_:1}),pe(tt,{title:"Features"},{default:Ge(()=>t[2]||(t[2]=[C("h4",null,"Metronome",-1),C("p",null," Syncing to it enables playing around with sleep values without getting out of sync. - MIDI Scale Function: Remap the default MIDI control range to your desired range. ",-1),C("h4",null,"Pattern Function",-1),C("p",null," Easily define rhythmic patterns of instruments with simple Strings. ",-1),C("h4",null,"MIDI Scale Function",-1),C("p",null,"Remap the default MIDI control range to your desired range.",-1),C("h4",null,"MIDI Mapper",-1),C("p",null," Place the controls you want to map within the Switch-Case and call scale_midi(val, min, max) on them. ",-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[3]||(t[3]=[C("p",null,[C("a",{target:"_blank",href:"https://github.com/sync-tax/sonicpi_livejam_boilerplate/blob/main/live_jam_boilerplate.rb"},"→ GitHub - Code")],-1)])),_:1})])]))}},$E=bt(jE,[["__scopeId","data-v-8b114b39"]]),qE="/assets/v_spotlight_img2-luMhlBXH.png",YE={class:"project"},KE={class:"projectOverview"},ZE={class:"projectDetails"},JE={__name:"VisualProject1",setup(n){return jn(()=>{gs(()=>{xc.highlightAll()})}),(e,t)=>(Ye(),ot("div",YE,[pe(cn),C("section",KE,[pe(Ht,{title:"VJ-Setup v1.0",text:"A Touchdesigner setup that uses a MIDI controller, to navigate and control a range of dynamic visuals during a concert we hosted at AEC Deep Space. "}),t[0]||(t[0]=$n('<div class="mainProjectContent" data-v-a83745d4><img src="'+qE+`" alt="Spotlight image" width="100%" data-v-a83745d4><p class="contentNote" data-v-a83745d4> Here’s the basic setup – each visual is housed in its own Base component. </p><pre data-v-a83745d4><code class="language-python" data-v-a83745d4>
# map midi channels to their respective Base
channel_to_base = {
    &#39;ch1ctrl20&#39;: op(&#39;v1&#39;),
    &#39;ch1ctrl24&#39;: op(&#39;v2&#39;),
    &#39;ch1ctrl28&#39;: op(&#39;v3&#39;),
    &#39;ch1ctrl32&#39;: op(&#39;v4&#39;),
    &#39;ch1ctrl54&#39;: op(&#39;v5&#39;),
    &#39;ch1ctrl62&#39;: op(&#39;v6&#39;)
}

def onValueChange(channel, sampleIndex, val, prev):
    # look up which Base corresponds to the changed channel
    base_op = channel_to_base.get(channel.name)
    if base_op is not None:
        base_op.allowCooking = (val &gt; 0)

    return
</code></pre><p class="contentNote" data-v-a83745d4> To keep things running smoothly, I added a small Python script that triggers with MIDI changes. When a visual&#39;s opacity drops to 0 (making it invisible), it turns off cooking to save on performance. </p></div>`,1))]),C("section",ZE,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null," This project aimed to create an interactive realtime visual experience for the 808Spotlight concert. ",-1),C("h4",null,"Role",-1),C("p",null," I designed and built the visual system and integrated it with a MIDI controller to trigger and manipulate procedural visuals in real-time. I also performed the visualisation during the concert. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Touchdesigner "),C("br"),He(" - Python "),C("br"),He(" - MIDI Controller ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("h4",null,"Downloads",-1),C("p",null,[C("a",{target:"_blank",href:"https://drive.google.com/drive/u/1/folders/1q3PbSq1VdNGDDjJ9tW2eAR2bjTQ2lTS3"},"→ .TOE-File + Assets")],-1),C("br",null,null,-1),C("h4",null,"Event",-1),C("p",null,[C("a",{target:"_blank",href:"https://808club.x-net.dev/808-spotlight/"},"→ Website Entry"),C("br"),C("a",{target:"_blank",href:"https://www.instagram.com/p/DG5g0ggN2Oq/"},"→ Promo Reel")],-1)])),_:1})])]))}},QE=bt(JE,[["__scopeId","data-v-a83745d4"]]),eb="/assets/pokemorph-Xap1lcpL.webm",tb={class:"project"},nb={class:"projectOverview"},ib={class:"projectDetails"},rb={__name:"VisualProject2",setup(n){return jn(()=>{gs(()=>{xc.highlightAll()})}),(e,t)=>(Ye(),ot("div",tb,[pe(cn),C("section",nb,[pe(Ht,{title:"PokéMorph",text:"Alternative evolution animation for Pokémon sprites."}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("video",{autoplay:"",loop:"",muted:"",playsinline:"",style:{"border-radius":"15px"}},[C("source",{src:eb,type:"video/mp4"})]),C("p",{class:"contentNote",style:{"text-align":"center"}},"Eevee - Evolution"),C("iframe",{width:"600",height:"337",src:"https://www.youtube.com/embed/l1wTkWRXGMg?start=36",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""}),C("p",{class:"contentNote"},"Tutorial on YouTube")],-1))]),C("section",ib,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),He(" As a huge Pokémon fan I thought that morphing through the entire Gen1 Pokédex would be a fun freetime activity. "),C("br",null,null,-1),C("p",null," It was not only a great experience but also my first attempt with GLSL shaders. It took me a while to get the hang of it - not gonna lie. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Touchdesigner "),C("br"),He(" - Python "),C("br"),He(" - GLSL ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{target:"_blank",href:"https://drive.google.com/drive/folders/1AwBtOMceYr7AxiBmPK-23IB7UJHPs7WG?usp=sharing"},"→ .TOX File + Assets"),C("br"),C("a",{target:"_blank",href:"https://github.com/sync-tax/poke_morph_TD/blob/main/poke_morph.glsl"},"→ GLSL Code | Github")],-1)])),_:1})])]))}},sb=bt(rb,[["__scopeId","data-v-b4d8cc94"]]),ob="/assets/chicken-CE3Jtg6I.png",ab={class:"project"},lb={class:"projectOverview"},cb={class:"projectDetails"},ub={__name:"VisualProject3",setup(n){return(e,t)=>(Ye(),ot("div",ab,[pe(cn),C("section",lb,[pe(Ht,{title:"Bananana",text:"Just about applying a spiral-like appeal to all sorts of stuff."}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("iframe",{width:"600",height:"337",src:"https://www.youtube.com/embed/093l7at3phA?si=ZN2Z0kvI5Tzvf4Xa",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""}),C("p",{class:"contentNote"},"Easy Feedback technique tutorial"),C("img",{src:ob,alt:"Chicken",width:"100%"}),C("p",{class:"contentNote"},"Don't look at this chicken")],-1))]),C("section",cb,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null,"I like spirals...",-1),C("h4",null,"Tools",-1),C("p",null,"- Touchdesigner",-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{href:"https://drive.google.com/drive/folders/1Mo06E5bS4IUPuELJgVocbKGODV_-2vMJ?usp=drive_link",target:"_blank"},"→ .TOX-File")],-1)])),_:1})])]))}},fb=bt(ub,[["__scopeId","data-v-488ceb9b"]]),db="/assets/d_websites_img1-CSFWMjic.png",hb="/assets/d_websites_img2-Dv1YMjC7.png",pb={class:"project"},mb={class:"projectOverview"},gb={class:"projectDetails"},_b={__name:"DesignProject1",setup(n){return(e,t)=>(Ye(),ot("div",pb,[pe(cn),C("section",mb,[pe(Ht,{title:"Websites",text:"Websites I built and designed in my free time."}),t[0]||(t[0]=$n('<div class="mainProjectContent" data-v-50535dac><img src="'+db+'" alt="Website" width="100%" data-v-50535dac><p class="contentNote" data-v-50535dac><a target="_blank" href="https://808club.x-net.dev/" data-v-50535dac>→ www.808club.at</a></p><img src="'+hb+'" alt="Website" width="100%" data-v-50535dac><p class="contentNote" data-v-50535dac><a target="_blank" href="https://github.com/sync-tax/tribeholz_portfolio" data-v-50535dac>→ Codebase on GitHub</a></p></div>',1))]),C("section",gb,[pe(tt,{title:"808club.at"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null,[He(" I made this website for our club to post upcoming events on and a bunch of other stuff."),C("br")],-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Wordpress "),C("br"),He(" - Elementor "),C("br"),He(" - Other Plugins ")],-1)])),_:1}),pe(tt,{title:"arro.at"},{default:Ge(()=>t[2]||(t[2]=[C("h4",null,"Overview",-1),C("p",null,' Short form for "Ardeleanu Robert". My portfolio website which will grow in size and quality over time. ',-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Vue "),C("br"),He(" - SASS "),C("br"),He(" - THREE "),C("br"),He(" - Vite ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[3]||(t[3]=[C("p",null,[C("a",{href:"https://808club.x-net.dev/",target:"_blank",rel:"noopener noreferrer"},"→ Website 808Club"),C("br"),C("a",{href:"https://arro.at/",target:"_blank",rel:"noopener noreferrer"},"→ Website ARRO")],-1)])),_:1})])]))}},vb=bt(_b,[["__scopeId","data-v-50535dac"]]),xb="/assets/d_durch_img3-BxHgvusD.png",Sb="/assets/d_durch_img2-EfuV5nk6.png",Mb="/assets/d_durch_img4-DLkYXirI.png",yb="/assets/d_durch_img1-DjUryL4y.png",Eb="/assets/d_durch_img5-BMBeO_aS.png",bb="/assets/d_durch_img6-B0X4HE45.png",Ab="/assets/d_durch_img7-28_yr9Lo.png",Tb={class:"project"},wb={class:"projectOverview"},Rb={class:"projectDetails"},Cb={__name:"DesignProject2",setup(n){return(e,t)=>(Ye(),ot("div",Tb,[pe(cn),C("section",wb,[pe(Ht,{title:"Screenprints",text:"Printdesigns I made for our screenprinting collective. → DURCH"}),t[0]||(t[0]=$n('<div class="mainProjectContent" data-v-af7523ef><img src="'+xb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef>Printdesign - Big Brother - Procreate &amp; TD</p><img src="'+Sb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef>Printdesign - Random Doodle - Procreate</p><img src="'+Mb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef>Printdesign - Bananana - TD</p><img src="'+yb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef> Printdesign - Beeware - Ink Marker &amp; Illustrator </p><img src="'+Eb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef>Printdesign - VOID - Touchdesigner</p><img src="'+bb+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef> Printdesign - Shroompa Mario - Inkpens &amp; Procreate </p><img src="'+Ab+'" alt="Printdesign" width="100%" data-v-af7523ef><p class="contentNote" data-v-af7523ef>Printdesign - Wond - Procreate</p></div>',1))]),C("section",Rb,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null," A couple of friends and I started a small artist collective where we create print designs and screen print them in my home workshop. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Screenprinting stuff "),C("br"),He(" - Pens & Paper "),C("br"),He(" - Designsoftware ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{href:"https://www.instagram.com/durch.durch.durch/",target:"_blank",rel:"noopener noreferrer"},"→ Instagram @durch.durch.durch")],-1)])),_:1})])]))}},Pb=bt(Cb,[["__scopeId","data-v-af7523ef"]]),Lb="/assets/d_808_img1-Bnc08Y1K.png",Db="/assets/d_808_img2-0vBYaPfy.png",Ib="/assets/d_808_img3-BlADVjYG.png",Ub="/assets/d_808_img5-DlSGmgdJ.png",Nb="/assets/d_808_img4-ursrz1Nr.png",Fb="/assets/d_tribeholz_img1-DpcGgoQD.png",Ob="/assets/d_tribeholz_img2-BGFu39T9.png",Bb="/assets/d_tribeholz_img3-DbX-eWqc.png",kb={class:"project"},zb={class:"projectOverview"},Hb={class:"projectDetails"},Vb={__name:"DesignProject3",setup(n){return(e,t)=>(Ye(),ot("div",kb,[pe(cn),C("section",zb,[pe(Ht,{title:"808CLUB",text:"Designs I made for the 808Club."}),t[0]||(t[0]=$n('<div class="mainProjectContent" data-v-3d27542d><img src="'+Lb+'" alt="Stuff" width="80%" data-v-3d27542d><p style="text-align:center;" class="contentNote" data-v-3d27542d> Beachflags &amp; Sticker | The Logo was created in collaboration with a friend who provided the &quot;808&quot; lettering. I refined it using Illustrator and designed stickers and such. </p><div class="imageContainer" data-v-3d27542d><img src="'+Db+'" alt="Flyer" width="40%" data-v-3d27542d><img src="'+Ib+'" alt="Flyer" width="50%" data-v-3d27542d></div><p style="text-align:center;" class="contentNote" data-v-3d27542d> Flyer - House of Arts #1- Affinity &amp; Procreate </p><p style="text-align:center;" class="contentNote" data-v-3d27542d> Flyer - Game of Skate #1- Affinity </p><div class="imageContainer" data-v-3d27542d><img src="'+Ub+'" alt="Flyer" width="40%" data-v-3d27542d><img src="'+Nb+'" alt="Flyer" width="50%" data-v-3d27542d></div><p style="text-align:center;" class="contentNote" data-v-3d27542d> Flyer - House of Arts #2- Photoshop | Event sadly canceled :( </p><p style="text-align:center;" class="contentNote" data-v-3d27542d> Flyer - Game of Skate #2- Affinity </p></div>',1)),pe(Ht,{style:{"margin-top":"60px"},title:"TRIBΞHOLZ",text:"Designs I made for my algorithmic sound project."}),t[1]||(t[1]=$n('<div class="mainProjectContent" data-v-3d27542d><img src="'+Fb+'" alt="Flyer" width="40%" data-v-3d27542d><p style="text-align:center;" class="contentNote" data-v-3d27542d> Banner - Soundcloud- Procreate &amp; Illustrator </p><img src="'+Ob+'" alt="Flyer" width="40%" data-v-3d27542d><p style="text-align:center;" class="contentNote" data-v-3d27542d> Lettring Logo - YouTube - Ballpoint &amp; Illustrator </p><img src="'+Bb+'" alt="Flyer" width="40%" data-v-3d27542d><p style="text-align:center;" class="contentNote" data-v-3d27542d> Thumbnails - YouTube - Affinity <br data-v-3d27542d><a href="" data-v-3d27542d></a></p></div>',1))]),C("section",Hb,[pe(tt,{title:"808Club"},{default:Ge(()=>t[2]||(t[2]=[C("h4",null,"Overview",-1),C("p",null," The 808Club is an art & culture organisation based in Linz. Together with some friend, we organize different events and such. ",-1),C("h4",null,"Role",-1),C("p",null," As part of the board I help with event organisation. Also I frequently make designs & handle the webstuff. ",-1)])),_:1}),pe(tt,{title:"TRIBΞHOLZ"},{default:Ge(()=>t[3]||(t[3]=[C("h4",null,"Overview",-1),C("p",null," A personal project where it is all about creative coding. I sometimes post stuff on YouTube. ",-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Touchdesigner "),C("br"),He(" - SonicPi "),C("br"),He(" - DaVinci "),C("br"),He(" - Adobe CC ")],-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[4]||(t[4]=[C("p",null,[C("a",{href:"https://www.instagram.com/808club_linz/",target:"_blank",rel:"noopener noreferrer"},"→ Instagram @808club_linz"),C("br"),C("a",{href:"https://808club.x-net.dev/",target:"_blank",rel:"noopener noreferrer"},"→ Website 808Club"),C("br"),C("a",{href:"https://www.youtube.com/@tribeholz23",target:"_blank",rel:"noopener noreferrer"},"→ YouTube TRIBΞHOLZ")],-1)])),_:1})])]))}},Gb=bt(Vb,[["__scopeId","data-v-3d27542d"]]),Wb="/assets/o_events_img5-Cp3KDg28.png",Xb="/assets/o_events_img1-D88a_su0.png",jb="/assets/o_events_img3-Ca-KXLhz.png",$b="/assets/o_events_img4-DgcwiNUO.png",qb={class:"project"},Yb={class:"projectOverview"},Kb={class:"projectDetails"},Zb={__name:"OtherProject1",setup(n){return(e,t)=>(Ye(),ot("div",qb,[pe(cn),C("section",Yb,[pe(Ht,{title:"Spotlight",text:"Tiny-desk like concert at the AEC Deep Space."}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("img",{src:Wb,alt:"Spotlight",width:"100%"}),C("p",{class:"contentNote"},"Testing - SL")],-1)),pe(Ht,{style:{"margin-top":"60px"},title:"House of Arts",text:"Art gallery event for all kinds of local artists."}),t[1]||(t[1]=$n('<div class="mainProjectContent" data-v-25a22dd6><img src="'+Xb+'" alt="Website" width="100%" data-v-25a22dd6><p class="contentNote" data-v-25a22dd6>Concert - HoA</p><img src="'+jb+'" alt="HoA" width="100%" data-v-25a22dd6><p class="contentNote" data-v-25a22dd6>Exhibition - HoA</p></div>',1)),pe(Ht,{style:{"margin-top":"60px"},title:"Game of Skate",text:"Skate contest for the skating community."}),t[2]||(t[2]=C("div",{class:"mainProjectContent"},[C("img",{src:$b,alt:"GoS",width:"100%"}),C("p",{class:"contentNote"},"Skate Challenge - GoS")],-1))]),C("section",Kb,[pe(tt,{title:"Spotlight"},{default:Ge(()=>t[3]||(t[3]=[C("p",null,[He(" For this event, I took care of the visual setup and live visuals during the concert. I also helped out by cutting reels and other media. "),C("br"),C("br"),He(" The YouTube video of the concert will be online soon! ")],-1)])),_:1}),pe(tt,{title:"House of Arts"},{default:Ge(()=>t[4]||(t[4]=[C("p",null,[He(" I was in charge of various design tasks like creating flyers and also organizing equipment. "),C("br"),C("br"),He(" Alongside a friend, I also handled all the tech-related gear—both in the concert room and in the darkroom, which was equipped with three projectors. ")],-1)])),_:1}),pe(tt,{title:"Game of Skate"},{default:Ge(()=>t[5]||(t[5]=[C("p",null," Even though I’m not a skater, I designed most of the flyers for the event. I also helped out at the bar and cruised around taking photos throughout the day. ",-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[6]||(t[6]=[C("p",null,[C("a",{href:"https://www.instagram.com/p/DG5g0ggN2Oq/",target:"_blank",rel:"noopener noreferrer"},"→ Reel Spotlight"),C("br"),C("a",{href:"https://808club.x-net.dev/bildergalerie/",target:"_blank",rel:"noopener noreferrer"},"→ Bildergalerie 808Club")],-1)])),_:1})])]))}},Jb=bt(Zb,[["__scopeId","data-v-25a22dd6"]]),Qb="/assets/o_retro_img2-DH-MVB7f.png",eA="/assets/o_retro_img1-DWeHILwM.png",tA={class:"project"},nA={class:"projectOverview"},iA={class:"projectDetails"},rA={__name:"OtherProject2",setup(n){return(e,t)=>(Ye(),ot("div",tA,[pe(cn),C("section",nA,[pe(Ht,{title:"RetroPi Build",text:"My personal RetroPi build using a Raspberry Pi"}),t[0]||(t[0]=$n('<div class="mainProjectContent" data-v-1c434bcf><img src="'+Qb+'" alt="RetroPi" width="70%" data-v-1c434bcf><p style="text-align:center;" class="contentNote" data-v-1c434bcf>Case - Pokecenter</p><img src="'+eA+'" alt="RetroPi" width="70%" data-v-1c434bcf><p style="text-align:center;" class="contentNote" data-v-1c434bcf>Shiny Onyx - :3</p></div>',1))]),C("section",iA,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null,[He(" This was a fun little side project. I basically prepared a little suitcase with a screen and the Raspberry plus a Powerbank. "),C("br"),He("Not exeptionally beautiful, but it was fun. I play a lot Pokémon ROM hacks on that thing. ")],-1),C("h4",null,"Tools",-1),C("p",null,[He(" - Raspberry Pi "),C("br"),He(" - RetroPi OS "),C("br"),He(" - Filezilla "),C("br"),He(" - Popsicle sticks & paint ")],-1)])),_:1})])]))}},sA=bt(rA,[["__scopeId","data-v-1c434bcf"]]),oA="/assets/o_dead_img1-DLDMTdDD.png",aA={class:"project"},lA={class:"projectOverview"},cA={class:"projectDetails"},uA={__name:"OtherProject3",setup(n){return(e,t)=>(Ye(),ot("div",aA,[pe(cn),C("section",lA,[pe(Ht,{title:"Dead Internet",text:"Tiny report on the Dead Internet Theory"}),t[0]||(t[0]=C("div",{class:"mainProjectContent"},[C("img",{src:oA,alt:"Data Visualisation",width:"100%"}),C("p",{style:{"text-align":"center"},class:"contentNote"}," Data Visualisation - Dead Internet - Illustrator ")],-1))]),C("section",cA,[pe(tt,{title:"About"},{default:Ge(()=>t[1]||(t[1]=[C("h4",null,"Overview",-1),C("p",null," This was an assignment for the Media Studies class at FH Hagenberg. The question was wheter the internet is mostly populated by bots or not. ",-1),C("h4",null,"Tools",-1),C("p",null,"- Illustrator",-1)])),_:1}),pe(tt,{title:"Resources"},{default:Ge(()=>t[2]||(t[2]=[C("p",null,[C("a",{href:"https://drive.google.com/file/d/1zB3icas943Xb4lMJPKRSDnDA2B7Hmuwp/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"→ Report")],-1)])),_:1})])]))}},fA=bt(uA,[["__scopeId","data-v-b49e9c9b"]]),dA=[{path:"/",name:"Projects",component:dE},{path:"/About",name:"About",component:ME},{path:"/LinkTree",name:"LinkTree",component:AE},{path:"/AudioProject1",name:"AudioProject1",component:NE},{path:"/AudioProject2",name:"AudioProject2",component:zE},{path:"/AudioProject3",name:"AudioProject3",component:$E},{path:"/VisualProject1",name:"VisualProject1",component:QE},{path:"/VisualProject2",name:"VisualProject2",component:sb},{path:"/VisualProject3",name:"VisualProject3",component:fb},{path:"/DesignProject1",name:"DesignProject1",component:vb},{path:"/DesignProject2",name:"DesignProject2",component:Pb},{path:"/DesignProject3",name:"DesignProject3",component:Gb},{path:"/OtherProject1",name:"OtherProject1",component:Jb},{path:"/OtherProject2",name:"OtherProject2",component:sA},{path:"/OtherProject3",name:"OtherProject3",component:fA}],hA=["/AudioProject1","/AudioProject2","/AudioProject3","/VisualProject1","/VisualProject2","/VisualProject3","/DesignProject1","/DesignProject2","/DesignProject3","/OtherProject1","/OtherProject2","/OtherProject3"],pA=y_({history:Jg(),routes:dA,scrollBehavior(n,e,t){return t||(n.path==="/"&&hA.includes(e.path)?{top:510}:{top:0})}}),mA="/assets/flying_nyan-DxYZehf-.gif",gA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20352.9%20352.9'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cpolygon%20class='cls-1'%20points='258.06%200%20258.06%2094.84%20258.06%20135.24%20258.06%20258.06%2094.84%20258.06%2094.84%2094.84%20226.06%2094.84%20226.06%200%200%200%200%20352.9%20352.9%20352.9%20352.9%200%20258.06%200'/%3e%3c/svg%3e",_A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAABgFBMVEVHcEwAAgEBAQEAAgAAAgEAAgDCwsIBAQEBAQEAAgHCwsLAwMDCwsLBwcHAwMDCwsLCwsLDw8PBwcECAgDAwMACAAHAwMDAwMDAwMACAgLAwMDExMQBAQDAwMDFxcUCAAHCwsL///8DAAAFAQAFAAABAAAFAAEGAALesbMTAAEDAADAwMABAQHBv8D/////n6oCAAG/wcD9oKgAAgH/oKj/n6i/wb78oaoAAgD9oKr7oaoDAAD/nqj8oajAwL7BwL7Evr7Gvb75oqrrqa3EvsDUt7vGvcD/nqoBAQAXAAACAgIIAAL7oqgEAAHrqK/tqK35oqjVtrsBAwICAgAFAQDqqa0ZAADtp6/Ut7n4o6oEAAD/nagDAgD4o6j2pKoaAAEHAADVt7noqq/qqa8aAAADAQIHAAH1pKrnqq8FAQIFAAAFAAEYAAHDv77Ourvoqq0WAADDv8DSuLvOurz0pardr7IYAADnq63dr7ESAAAGAAITAAHfrrEBAAAUAAEUAAJXQSC5AAAAK3RSTlMA/Pz+/v3E/f79l5qLqeD24ZTG/b/+dvvj/dts/ehg/bkB/v39/f39lP79iExl8gAABhxJREFUeNrt3Yl72jYYBnC2pZXZfd/3vdkZDOMRHGgTCE2zZTm2Zrm2HNAj29Jmbbeu3dV/fZJJ82ClD0JItgR+X562aZ/E38cvtoRtheZyCIIgCIIgCIIgCIIgghAvFmK6HyftfriCnmkAL+1+PAAAAAAAAAAAAAAAAGQUgDsXcLIOQCwDIADI+NkgSfQ77jiEvOjG8oTjpPsd4I/5x+P9PEdIrCOie5f3XC5pD0Je2v1kHsABAA4BAAAAAADALAAAAAxU0Mk6ABk7AA8AGT8ERAXjefVl3VeM+Gn4yf4NmAZwX9F9SPD1n7EcQPshoVjfOIAHAAAAAAAAAAAAAJBVAOVXgs6IAxAAJHxRduwBRm4M4PIUIfz3UCaOc1ayoG0ArqcYFwAAAAAAAAAAAAAAAAAAAAAAAIDRA0g7AAAAAACgddEWAEYbgAAAAABI9+bk2AEQAAAAAJgFsgRAeod9hxB3tPM8oTl5SmQAkFHb5bXvEQAAAAAAAIDxBXDG7uwPALqvEnsAAAAAAAAAAAz9AwpfcNH9BGS3DwDZF0KZB3DGG4AAAAAJ/5weAAAAAAAAAAAAAAAAsgqg+4KK6vYBoAowKYhpAMn+AAAAAGAQBIAUwJeCmAaQ7A8AygBfcbENQNCf+hhwjottY4CgP/Vp8DwX26ZBQX/SAMWbc/HMxHO9aBZAtj95gLkL8czGM2MaQLI/SYBice/2rVZrlaUVZXV1f3+DZX9/daO10bqxVyyaAxioP0mAvM+2S7/K974uTv/19x8H7aV1lqUoyzRNluXl9WZnrf3PjZnr58/R0dZ12RGof0HD6c/o1qEDvjt5c+62oL+79y79e/H7qakp9qzok8pLAXw7/c3Cwe87m2GlEoYNljBcXFxcYQnpv2zuXDtqzc6YA5i7cEvQ35+/XZpWA2hf22xUqjS0Rkgr1et1WmOxXqGhFdYMA7QE/R0pA3R2GmG1QFOlW6xWC+VSidaol+iHVWpsHEDU34IiwA9LjbBS6KbKCgUBLVEqlbs1G03TAKL+1AHCCt3u/PxxkUKtFpTLpXJUoFAJl1cNA6z3708TwDxXgKYwbxFAn/40HAJRgcJJgeC4QLSLmQcQ9Ke+BzRXFuvlIGCbZYdW2bYxQNSfKsDC2k8r9dKDzbIC3Q9KXWALAPr3t6YToN4tweYZVqBqBYCgPx0AdBeLFeh+ZMseIOiPB5gYDiCo9exiZcsOgf79qQLQQbBeCoIHs+vJcGPNLCDoTx5g4mEAte0am14CVqk7zwZs6rEGoE9/6gDRHrYdVWDb344qBEH02qNSMQ8g6I8D8BMHUF1tLvp8/7g/n12v2BL3pw4geQikBTBof3oAJAZBIwCDD4LSANLTYMoAwv70AEi8EDICMPgLoWEA5F4Kpw8g9VJYCWCgkyGDAIOcDA0zCMqdDqc/CEqdDssDyF4QSRtA8oKIn/glsdQB5C6J+YlfFDUCMPhF0WEOAbnL4ukfAlKXxeVnAdkbI2nPApI3RvzEb42lDSB5a2wi8ZujaQMkdHP0JYfkyWvvfP7JZ58etDtL3bvPHfqrKbo9nibAw2/f0+bWWH9Lzc5R++69Dz5684UzZx5jX0VI/hHp9xe8f3h4uNtN9Ce/AGGWuwripZnTCyRau5dp7rDfdi8f3jn87z3Vd5T8+NervY+r/BKUSclFTboJ+CUye7/EHh8qv6Xm9PRW72OLX4RkGoBfJLUV7/d9ZYArV36OPfhlaK5ZgFPL5H7kouFNVYuxB78Q0TQAX/8iF+3vKssvRTUNwC+VneKiDPAdF76gbQB8v+p7gB9/2A7gc9E+Bqiu7U16DJB+3yBRilwyD8BPO7ZNg3y/ANA9DdoOoP0QGDEAl5u11AEmuGnlXcsHQe3TYL53a/Qvb5+1GuBZPx/7luVzuqP7ByJ0L6jIJR3HbgCSOEDm9wAAAAAAAAAAAAAAAAAAAABRXs8aQO/7CzjE8d54y+jzf9ojsf8gMPmzQdEekXZypkPMPn9iHMABgNE4xgE8AGR8EAQAAAAAAAAAAAAAyOy5gOGzwUdzCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIggvwPIyjSTrfjnEgAAAAASUVORK5CYII=",Gh="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20width='500'%20height='500'%20viewBox='0%200%20132.29166%20132.29167'%20version='1.1'%20id='svg1'%20xml:space='preserve'%20inkscape:export-filename='darkmode_icon.svg'%20inkscape:export-xdpi='96'%20inkscape:export-ydpi='96'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3csodipodi:namedview%20id='namedview1'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:document-units='mm'%20/%3e%3cdefs%20id='defs1'%20/%3e%3cg%20inkscape:label='Ebene%201'%20inkscape:groupmode='layer'%20id='layer1'%3e%3cpath%20style='fill:%23000000;stroke-width:0.911498'%20d='M%2064.339462,123.60805%20C%2055.321313,122.53997%2050.154764,121.07607%2043.080977,117.58463%2037.114626,114.63981%2031.819748,110.82439%2027.107092,106.07407%2017.814718,96.707442%2012.028835,84.655166%2010.252639,70.965453%209.8117294,67.567177%209.8796022,59.590704%2010.379361,56.074553%2012.824034,38.874384%2022.167058,23.882672%2036.475236,14.201391%20c%202.142106,-1.449399%209.832931,-5.3859141%2011.890341,-6.086014%201.799164,-0.6122237%203.206808,-0.5787491%204.149038,0.098665%200.859532,0.6179625%201.736076,2.126591%201.736076,2.987981%200,0.300215%20-0.430133,2.07512%20-0.955848,3.944233%20-1.901518,6.760596%20-2.421504,11.648665%20-1.965895,18.480248%200.325819,4.885474%200.861319,7.925274%202.099072,11.915462%205.603246,18.06338%2019.983309,31.258177%2038.654131,35.468092%203.765151,0.84897%207.955329,1.16868%2012.852609,0.980653%204.80853,-0.184621%207.54509,-0.597755%2011.51474,-1.738364%203.83375,-1.101559%205.84191,-1.275156%206.90823,-0.59719%201.64243,1.04426%202.03089,2.872583%201.16322,5.474808%20-0.72509,2.174566%20-4.13408,8.901329%20-5.82854,11.501102%20-9.24103,14.178333%20-24.245669,23.924933%20-40.643568,26.400923%20-3.106452,0.46906%20-11.59963,0.82593%20-13.70938,0.57606%20z%20m%209.079884,-7.8503%20c%204.27545,-0.29428%207.393923,-0.92113%2011.635609,-2.3389%205.804713,-1.94023%2012.028408,-5.36281%2016.757085,-9.21516%202.35897,-1.92181%206.76235,-6.493403%208.46008,-8.783268%201.39751,-1.884947%203.58155,-5.351006%203.87359,-6.147379%200.18521,-0.505046%200.56277,-0.518878%20-4.04647,0.14824%20-3.12497,0.452294%20-12.241214,0.376339%20-15.493467,-0.129087%20C%2083.916642,87.631022%2073.470433,83.108766%2065.687794,76.773351%2062.656178,74.305481%2057.838943,69.354572%2055.884196,66.697705%2048.435992,56.574191%2044.70711,46.649584%2043.659848,34.161927%20c%20-0.276603,-3.298201%20-0.163391,-8.047593%200.268377,-11.258972%200.125332,-0.932195%200.300779,-2.342125%200.389879,-3.13318%20l%200.16201,-1.43828%20-1.179985,0.689074%20c%20-3.503874,2.046151%20-6.418292,4.308319%20-9.67654,7.510908%20-5.47214,5.378668%20-7.91675,8.7064%20-10.852703,14.773239%20-6.606777,13.652229%20-6.982801,28.882739%20-1.06462,43.121411%202.558984,6.156707%206.209525,11.533398%2011.199593,16.495303%208.244438,8.19791%2017.383961,12.75851%2029.271724,14.60654%203.19713,0.49702%206.406044,0.5626%2011.241763,0.22978%20z'%20id='path1'%20/%3e%3c/g%3e%3c/svg%3e",Wh="/assets/lightmode_icon-DKA_9KZd.svg",vA={class:"mainNavigation"},xA={__name:"Navbar",setup(n){const e=rs(null),t=document.documentElement,i=()=>{t.classList.add("lightmode"),t.classList.remove("darkmode"),localStorage.setItem("theme","light")},r=()=>{t.classList.add("darkmode"),t.classList.remove("lightmode"),localStorage.setItem("theme","dark")};return jn(()=>{const s=document.getElementById("nyan");s&&s.addEventListener("click",()=>{e.value&&(e.value.classList.add("flyAnim"),e.value.addEventListener("animationend",()=>{e.value.classList.remove("flyAnim")},{once:!0}))})}),jn(()=>{localStorage.getItem("theme")==="light"?document.documentElement.classList.add("lightmode"):document.documentElement.classList.add("darkmode")}),(s,o)=>{const a=Io("RouterLink");return Ye(),ot("nav",vA,[C("div",{class:"flyingCat",style:{"z-index":"5000"},ref_key:"nyanCat",ref:e},o[0]||(o[0]=[C("img",{src:mA,alt:"Nyan Cat flying over screen",width:"270px"},null,-1)]),512),pe(a,{to:"/",class:"navLink"},{default:Ge(()=>o[1]||(o[1]=[C("img",{src:gA,alt:"A monochrome logo resembling the initials AR.",id:"logoImage"},null,-1)])),_:1}),C("ul",null,[o[5]||(o[5]=C("img",{src:_A,alt:"A moon icon - used to switch to darkmode.",id:"nyan"},null,-1)),pe(a,{to:"/",class:"navLink"},{default:Ge(()=>o[2]||(o[2]=[C("li",null,"PROJΞCTS",-1)])),_:1}),pe(a,{to:"/About",class:"navLink"},{default:Ge(()=>o[3]||(o[3]=[C("li",null,"ΛBOUT",-1)])),_:1}),pe(a,{to:"/LinkTree",class:"navLink"},{default:Ge(()=>o[4]||(o[4]=[C("li",{id:"lastNavLink"},"LIΠKS",-1)])),_:1}),C("img",{src:Gh,alt:"A moon icon - used to switch to darkmode.",style:{fill:"white"},class:"modeSwitch dark",onClick:r}),C("img",{title:"Wait. This is illegal.",src:Wh,alt:"A sun icon - used to switch to lightmode.",class:"modeSwitch light",onClick:i})])])}}},SA=bt(xA,[["__scopeId","data-v-8a23cba4"]]),MA={class:"footer"},yA={__name:"Footer",setup(n){const e=()=>{const s=document.getElementById("nyan");s.style.opacity="60%",s.style.width="35px",s.style.height="35px",s.style.pointerEvents="all"},t=document.documentElement,i=()=>{t.classList.add("lightmode"),t.classList.remove("darkmode"),localStorage.setItem("theme","light")},r=()=>{t.classList.add("darkmode"),t.classList.remove("lightmode"),localStorage.setItem("theme","dark")};return jn(()=>{localStorage.getItem("theme")==="light"?document.documentElement.classList.add("lightmode"):document.documentElement.classList.add("darkmode")}),(s,o)=>(Ye(),ot("div",MA,[C("div",{class:"footerWrapper"},[o[1]||(o[1]=$n('<div class="footerSocials"><h4>Socials</h4><a href="https://www.youtube.com/@tribeholz23" target="_blank">YouTube</a><a href="https://www.instagram.com/_tribeholz/" target="_blank">Instagram</a><a href="https://github.com/sync-tax" target="_blank">GitHub</a></div><div class="footerContact"><h4>Contact</h4><a href="https://www.linkedin.com/in/robert-arbeitsloser-7271a71b2/" target="_blank">LinkedIn</a><a href="mailto:robert.ardeleanu.0607@gmail.com" target="_blank">E-Mail</a></div>',2)),C("div",{class:"footerExtra"},[C("div",{class:"modeSwitchContainer"},[C("img",{src:Gh,alt:"A moon icon - used to switch to darkmode.",style:{fill:"white"},class:"modeSwitch dark",onClick:r}),C("img",{title:"Wait. This is illegal.",src:Wh,alt:"A sun icon - used to switch to lightmode.",class:"modeSwitch light",onClick:i})]),o[0]||(o[0]=C("p",null,"made with ♡ and a whole lot of coffee^^",-1)),C("p",{class:"nyanUnlock",onClick:e},"UNLOCK NYAN!")])]),o[2]||(o[2]=C("div",{id:"copyrightWrapper"},[C("p",null,"© 2025 Ardeleanu Robert - All Rights Reserved")],-1))]))}},EA={__name:"App",setup(n){return(e,t)=>{const i=Io("router-view");return Ye(),ot("body",null,[pe(SA),C("main",null,[pe(Wd,{name:"route"},{default:Ge(()=>[pe(i,null,{default:Ge(({Component:r})=>[(Ye(),ls(Zp(r)))]),_:1})]),_:1})]),pe(yA)])}}},bA=bt(EA,[["__scopeId","data-v-5e59c223"]]);(function(n){n.languages.ruby=n.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),n.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var e={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:n.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete n.languages.ruby.function;var t="(?:"+["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)","\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]","<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|")+")",i=`(?:"(?:\\\\.|[^"\\\\\r
])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)`;n.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp("%r"+t+"[egimnosux]{0,6}"),greedy:!0,inside:{interpolation:e,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:e,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp("(^|[^:]):"+i),lookbehind:!0,greedy:!0},{pattern:RegExp(`([\r
{(,][ 	]*)`+i+"(?=:(?!:))"),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),n.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp("%[qQiIwWs]?"+t),greedy:!0,inside:{interpolation:e,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:e,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:e,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp("%x"+t),greedy:!0,inside:{interpolation:e,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:e,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete n.languages.ruby.string,n.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),n.languages.rb=n.languages.ruby})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python;xg(bA).use(pA).mount("#app");
