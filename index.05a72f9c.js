function e(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}Object.create;Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const r=(e,n)=>{i?e.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,e.appendChild(n)}))},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=v){var n;const s=this.constructor._$Ep(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=n.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=s,this[s]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,$=b.trustedTypes,A=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,k="?"+w,S=`<${k}>`,E=document,C=()=>E.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,T=e=>D(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),I="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,L=/>/g,N=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,j=/"/g,U=/^(?:script|style|textarea|title)$/i,O=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),R=O(1),B=(O(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),W=new WeakMap,G=E.createTreeWalker(E,129,null,!1);function z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=x;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===x?"!--"===l[1]?r=M:void 0!==l[1]?r=L:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=null!=s?s:x,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?N:'"'===l[3]?j:H):r===j||r===H?r=N:r===M||r===L?r=x:(r=N,s=void 0);const h=r===N&&e[t+1].startsWith("/>")?" ":"";o+=r===x?i+S:c>=0?(n.push(a),i.slice(0,c)+_+i.slice(c)+w+h):i+w+(-2===c?(n.push(void 0),t):h)}return[z(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class F{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,a=this.parts,[l,c]=K(e,t);if(this.el=F.createElement(l,i),G.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=G.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(_)||t.startsWith(w)){const i=c[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+_).split(w),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?ee:"@"===t[1]?te:Z})}else a.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(U.test(n.tagName)){const e=n.textContent.split(w),t=e.length-1;if(t>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],C()),G.nextNode(),a.push({type:2,index:++s});n.append(e[t],C())}}}else if(8===n.nodeType)if(n.data===k)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)a.push({type:7,index:s}),e+=w.length-1}s++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,n){var s,o,r,a;if(t===B)return t;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=P(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,n)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(i,!0);G.currentNode=s;let o=G.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new Y(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new ie(o,this,e)),this._$AV.push(t),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=G.nextNode(),r++)}return G.currentNode=E,s}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,n){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),P(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):T(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=F.createElement(z(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(i);else{const e=new J(s,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new F(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new Y(this.k(C()),this.k(C()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,i,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=q(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const n=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=q(this,n[i+r],t,r),a===B&&(a=this._$AH[r]),o||(o=!P(a)||a!==this._$AH[r]),a===V?e=V:e!==V&&(e+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}const Q=$?$.emptyScript:"";class ee extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class te extends Z{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=q(this,e,t,0))&&void 0!==i?i:V)===B)return;const n=this._$AH,s=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==V&&(n===V||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const ne={O:_,P:w,A:k,C:1,M:K,L:J,R:T,D:q,I:Y,V:Z,H:ee,N:te,U:X,F:ie},se=b.litHtmlPolyfillSupport;null==se||se(F,Y),(null!==(y=b.litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.8.0");const oe=(e,t,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new Y(t.insertBefore(C(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,ae;class le extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}}le.finalized=!0,le._$litElement$=!0,null===(re=globalThis.litElementHydrateSupport)||void 0===re||re.call(globalThis,{LitElement:le});const ce=globalThis.litElementPolyfillSupport;null==ce||ce({LitElement:le});(null!==(ae=globalThis.litElementVersions)&&void 0!==ae?ae:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},he=(e,t,i)=>{t.constructor.createProperty(i,e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ue(e){return t={...e,state:!0},(e,i)=>void 0!==i?he(t,e,i):de(t,e);var t}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pe;null===(pe=window.HTMLSlotElement)||void 0===pe||pe.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ve=e=>(...t)=>({_$litDirective$:e,values:t});class fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=ne,ye=()=>document.createComment(""),be=(e,t,i)=>{var n;const s=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(ye(),o),n=s.insertBefore(ye(),o);i=new ge(t,n,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null===(n=i._$AQ)||void 0===n||n.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==o||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,o),e=t}}}return i},$e=(e,t,i=e)=>(e._$AI(t,i),e),Ae={},_e=(e,t=Ae)=>e._$AH=t,we=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const n=e._$AB.nextSibling;for(;i!==n;){const e=i.nextSibling;i.remove(),i=e}},ke=(e,t,i)=>{const n=new Map;for(let s=t;s<=i;s++)n.set(e[s],s);return n},Se=ve(class extends fe{constructor(e){if(super(e),e.type!==me.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const s=[],o=[];let r=0;for(const t of e)s[r]=n?n(t,r):r,o[r]=i(t,r),r++;return{values:o,keys:s}}render(e,t,i){return this.ct(e,t,i).values}update(e,[t,i,n]){var s;const o=e._$AH,{values:r,keys:a}=this.ct(t,i,n);if(!Array.isArray(o))return this.ut=a,r;const l=null!==(s=this.ut)&&void 0!==s?s:this.ut=[],c=[];let d,h,u=0,p=o.length-1,m=0,v=r.length-1;for(;u<=p&&m<=v;)if(null===o[u])u++;else if(null===o[p])p--;else if(l[u]===a[m])c[m]=$e(o[u],r[m]),u++,m++;else if(l[p]===a[v])c[v]=$e(o[p],r[v]),p--,v--;else if(l[u]===a[v])c[v]=$e(o[u],r[v]),be(e,c[v+1],o[u]),u++,v--;else if(l[p]===a[m])c[m]=$e(o[p],r[m]),be(e,o[u],o[p]),p--,m++;else if(void 0===d&&(d=ke(a,m,v),h=ke(l,u,p)),d.has(l[u]))if(d.has(l[p])){const t=h.get(a[m]),i=void 0!==t?o[t]:null;if(null===i){const t=be(e,o[u]);$e(t,r[m]),c[m]=t}else c[m]=$e(i,r[m]),be(e,o[u],i),o[t]=null;m++}else we(o[p]),p--;else we(o[u]),u++;for(;m<=v;){const t=be(e,c[v+1]);$e(t,r[m]),c[m++]=t}for(;u<=p;){const e=o[u++];null!==e&&we(e)}return this.ut=a,_e(e,c),B}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ee extends fe{constructor(e){if(super(e),this.et=V,e.type!==me.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===V||null==e)return this.ft=void 0,this.et=e;if(e===B)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ee.directiveName="unsafeHTML",Ee.resultType=1;const Ce=ve(Ee),Pe=[{name:"Getting Started with AWS CDK: Deploying a Serverless Lambda Function with API Gateway",description:"\n      <h2>Introduction</h2>\n      <p>In this blog post, I will walk you through the steps to get up and running quickly with AWS Cloud Development Kit (CDK) to deploy a serverless Lambda function with an API Gateway endpoint. Assuming you have AWS account setup, This guide will help you understand the basics of CDK and how to leverage it for deploying serverless applications.</p>\n\n      <h2>Prerequisites</h2>\n      <ul>\n        <li>Node.js installed (version specified in <code>.nvmrc</code>)</li>\n        <li>AWS Account</li>\n        <li>AWS CLI configured</li>\n        <li>AWS CDK installed globally (<code>npm install -g aws-cdk</code>)</li>\n      </ul>\n\n      <h2>Step 1: Initialize the CDK Project</h2>\n      <p>First, create a new directory for your CDK project and navigate into it. Then, initialize a new CDK project.</p>\n\n      <pre><code>bash\n      mkdir my-cdk-app\n      cd my-cdk-app\n      cdk init app --language javascript\n      </code></pre>\n\n      <h2>Step 2: Define the Lambda Function</h2>\n      <p>Create a new Lambda function in the <code>lib</code> directory. For example, create a file named <code>lambda.js</code>:</p>\n\n      <pre><code>javascript\n      exports.handler = async function(event) {\n        console.log(\"request:\", JSON.stringify(event, undefined, 2));\n        return {\n          statusCode: 200,\n          headers: { \"Content-Type\": \"text/plain\" },\n          body: `Hello, CDK! You've hit ${event.path}\n`\n        };\n      };\n      </code></pre>\n\n      <h2>Step 3: Create the CDK Stack</h2>\n      <p>Modify the <code>lib/cdk-stack.js</code> file to include the Lambda function and an API Gateway to trigger it.</p>\n\n      <pre><code>javascript\n      const cdk = require('aws-cdk-lib');\n      const lambda = require('aws-cdk-lib/aws-lambda');\n      const apigateway = require('aws-cdk-lib/aws-apigateway');\n\n      class ApiGatewayStack extends cdk.Stack {\n        constructor(scope, id, props) {\n          super(scope, id, props);\n\n          // Define the Lambda function\n          const myLambda = new lambda.Function(this, 'MyLambda', {\n            runtime: lambda.Runtime.NODEJS_20_X,\n            code: lambda.Code.fromAsset('lib'),\n            handler: 'lambda.handler'\n          });\n\n          // Define the API Gateway\n          new apigateway.LambdaRestApi(this, 'Endpoint', {\n            handler: myLambda\n          });\n        }\n      }\n\n      module.exports = { ApiGatewayStack };\n      </code></pre>\n\n      <h2>Step 4: Configure the CDK App</h2>\n      <p>Modify the <code>bin/cdk-app.js</code> file to configure the CDK app and stack.</p>\n\n      <pre><code>javascript\n      #!/usr/bin/env node\n      const cdk = require('aws-cdk-lib');\n      const { ApiGatewayStack } = require('../lib/cdk-stack');\n\n      const env = {\n        account: process.env.AWS_ACCOUNT,\n        region: process.env.DEPLOY_REGION\n      };\n\n      const STACK_NAME = 'api-gateway-stack';\n      const cdkApp = new cdk.App();\n\n      new ApiGatewayStack(cdkApp, STACK_NAME, {\n        synthesizer: new cdk.CliCredentialsStackSynthesizer(),\n        env\n      });\n      </code></pre>\n\n      <h2>Step 5: Deploy the Stack</h2>\n      <p>Deploy the stack using the CDK CLI.</p>\n\n      <pre><code>bash\n      cdk deploy\n      </code></pre>\n\n      <h2>Step 6: Optional: Schedule Lambda Invocation using GitHub Actions</h2>\n      <p>To use the GitHub Actions (GHA) scheduler function to call the Lambda on a schedule, you can set up a workflow file in your repository. This allows you to run your Lambda function on a specified schedule without the need for additional infrastructure like cron jobs in a Kubernetes cluster. Below is an example of how to set this up:</p>\n\n      <pre><code>yaml\n      name: Scheduled Lambda Invocation\n      on:\n        workflow_dispatch:\n        schedule:\n          - cron: '0 21 * * 2'\n\n      jobs:\n        invoke-lambda:\n          runs-on: ubuntu-latest\n          steps:\n          - uses: actions/checkout@v2\n          - name: Fetch credentials\n            uses: aws-actions/aws-secretsmanager-get-secrets@v2.0.7\n            env:\n              AWS_REGION: us-west-2\n            with:\n              secret-ids: |\n                slack/notify-webhook\n                slack/alerts-webhook\n          - name: Login to AWS\n            uses: aws-actions/configure-aws-credentials@v1\n            with:\n              role-to-assume: \"role-to-assume\"\n              role-skip-session-tagging: true\n              role-duration-seconds: 3600\n              aws-region: us-west-2\n          - name: Setup Node\n            uses: actions/setup-node@v2\n            with:\n              node-version-file: .nvmrc\n              cache: 'npm'\n              cache-dependency-path: package-lock.json\n          - name: Install dependencies\n            run: npm ci\n          - name: Invoke Lambda\n            run: |\n              aws lambda invoke                 --function-name my-lambda-function                 --payload '{}'                 response.json\n          - name: Notify slack on success\n            if: success()\n            uses: rtCamp/action-slack-notify@v2\n            with:\n              status: 'success'\n              message: \"Workflow succeeded\"\n          - name: Notify slack on failure\n            if: failure()\n            uses: rtCamp/action-slack-notify@v2\n            with:\n              status: 'failure'\n              message: \"Workflow failed\"\n      </code></pre>\n\n      <h2>Conclusion</h2>\n      <p>Congratulations! You have successfully deployed a serverless Lambda function with an API Gateway endpoint using AWS CDK and scheduled its invocation using GitHub Actions. This is just the beginning, and there are many more features and configurations you can explore with CDK and GitHub Actions.</p>\n    ",image:"aws-cdk.png",links:[{name:"AWS CDK Documentation",link:"https://docs.aws.amazon.com/cdk/latest/guide/home.html"},{name:"GitHub Actions Documentation",link:"https://docs.github.com/en/actions"}]}],De=[{name:"Deploying the Linc Detection Model with BentoML",image:"linc_detection_.png",description:"I developed a scalable and efficient API for image annotation by integrating the Linc Detection model into the BentoML framework. To enhance flexibility, I replaced outdated methods with a generalized prediction approach and restructured the codebase to be modular, improving readability and maintainability. I implemented Pydantic models to ensure strong type validation in API requests and responses, providing robust input and output handling. To streamline operations, I automated artifact fetching from AWS S3 with a shell script, simplifying the deployment process. Additionally, I created detailed documentation covering installation, deployment, and usage, making it easier for users and developers to interact with the service. This work resulted in a production-ready machine learning service that was scalable, user-friendly, and demonstrated my ability to bridge data science and engineering to deliver practical, deployable solutions. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-api/pull/4"}]},{name:"Proof of Concept for Object Detection Model Deployment",image:"linc_detection_webapp.png",description:"I developed the Linc Detector Webapp as a temporary, proof-of-concept solution to enable object detection in images and provide freelancers with a way to interact with the model. The backend was built using Flask and deployed with Gunicorn and AWS Elastic Beanstalk, while the frontend utilized React for a clean and responsive user experience, styled with SCSS and bundled with Parcel. This approach was intentionally not scalable but served as an interim platform to validate the usefulness of object detection for our workflow. The goal was to determine if pre-annotated images could help scientists achieve greater success with lion identification, which relies on a secondary ML service. I also collaborated with contractors to design a UI tailored for scientists, enabling them to process images and generate bounding box outputs efficiently. The project showcased my ability to rapidly prototype full-stack solutions, combining Python, Flask, React, and AWS, and set the stage for implementing a scalable, robust service using the BentoML framework. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-webapp/pull/3/files"}]},{name:"Automated Model Deployment for Scalable ML Services on AWS ECS Fargate",image:"torch.png",description:"I automated the deployment process for the Linc Detection API, enabling scalable and efficient production deployment using GitHub Actions and AWS ECS Fargate. I configured GitHub Actions to handle building, pushing, and deploying Docker images, ensuring a streamlined CI/CD pipeline. By leveraging ECS Fargate, I established serverless container management for improved scalability and reduced operational overhead. To address compatibility challenges, I implemented Docker Buildx to handle ARM-based Docker image builds and optimized networking by configuring the awsvpc mode for better isolation and resource management. I also automated the retrieval of model artifacts from AWS S3 using a shell script, further simplifying deployment operations. Comprehensive documentation was provided to guide users and developers through setting up and running the deployment pipeline. This project highlights my expertise in DevOps and cloud deployment, demonstrating the ability to integrate automation, containerization, and scalable architecture to create reliable, production-ready systems for machine learning services. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-webapp/pull/1/files"}]},{name:"Automated Resource Provisioning: Terraform and GHA for Environment Based Deployments",image:"terraform.png",description:"I developed an automated solution for provisioning EC2 instances using Terraform, integrated with GitHub Actions to streamline deployment workflows. The project focused on implementing user data scripts tailored to staging and production environments, ensuring environment-specific setup operations are executed during instance launch. Leveraging Terraform, I defined infrastructure as code to standardize the provisioning process, while GitHub Actions handled the automation of deployments. The repository includes comprehensive configurations for EC2 instances, with user data scripts designed to reliably handle environment-specific setups. This approach enhanced deployment efficiency and ensured consistency across different environments. This project demonstrates my ability to implement modern DevOps practices, combining infrastructure as code with CI/CD automation to create robust, maintainable, and environment-specific provisioning pipelines.Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-cv/pull/10"}]}];let Te=class extends le{constructor(){super(),this.currentView="main",this.fullViewData=null,this.backLink=""}createRenderRoot(){return this}render(){return R`
      ${this.renderMainView()}
      ${"full-view"===this.currentView?this.renderModal():""}
    `}renderMainView(){return R`
      <div class='topbar'>
        ${this.renderNav("about","#about")}
        ${this.renderNav("volunteer work","#project")}
        ${this.renderNav("micro blog","#blog")}
      </div>
      <div class='about-holder'>
        <div class='content'>
          <h1 class='font-lg' id='about'>Habiba Mohamed</h1>
          ${this.renderAbout()}
        </div>
      </div>
      <div class='volunteer-holder'>
        <div class='content'>
          <h1 class='font-lg' id='project'> Volunteer Work </h1>
          <div>I began volunteering with Lion Guardians in 2022, below are some of my favorite projects I’ve worked at LINC.</div>
          <div class='projects-container'>
            ${this.renderVolunteerProjects()}
          </div>
        </div>
      </div>
      <div class='blog-holder'>
        <div class='content'>
          <h1 class='font-lg' id='blog'> Micro Blogs </h1>
          <div class='blogs-container'>
            ${this.renderBlogs()}
          </div>
        </div>
      </div>
    `}renderModal(){if(!this.fullViewData)return R``;const{name:e,description:t,links:i}=this.fullViewData;return R`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${e=>e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">X</a>
          <div class="title">${e}</div>
          <div class="description">${Ce(t)}</div>
          <div class="links">
            ${i.map((e=>R`<a class="link-item" href="${e.link}" target="_blank">${e.name}</a>`))}
          </div>
        </div>
      </div>
    `}renderNav(e,t){return R`<div class='nav'> <a href=${t} @click="${this.handleNavClick}">${e}</a></div>`}renderAbout(){return R`
      <div>
        I'm currently a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services.
        <br><br>
        I also <a href="https://linclion.org/technical-development-team/#habibamohamed">volunteer</a> as a Software Engineer/Machine Learning Engineer at <a href="https://github.com/linc-lion/LINC-detector?tab=readme-ov-file#linc-object-detector">Lion Guardians</a>, contributing to AI-driven wildlife conservation efforts.
        <br><br>
        My work focuses on improving system reliability, streamlining machine learning workflows, and optimizing cloud environments (AWS, Kubernetes).
        <br><br>
        I'm passionate about building robust, scalable systems and improving MLOps processes to deploy stable and efficient models.
        <br><br>
        I also <i>enjoy</i> monitoring and observability infrastructure and <i>I believe every SDE is an SRE</i>.
        <br><br>
        Additionally, I enjoy mentoring junior engineers, especially other minorities women in tech, to help them grow and succeed in their careers.
        <br><br>
        <div class="email font-sm">
          Resume available upon request.
          ${this.renderExternal()}
        </div>
      </div>
    `}renderExternal(){const e=(e,t)=>R`
        <a href=${t} target="_blank" class='icon-link'><img src='./images/${e}'></img></a>
      `;return R`
      <div class='external'>
        ${e("linked_in.png","https://linkedin.com/in/habibamohamed")}
        ${e("github.png","https://github.com/habibam")}
        ${e("scholar.png","https://scholar.google.com/citations?user=MetBPh8AAAAJ&hl=en")}
      </div>
      <div class='external'>
        <div>Find me in these #slack communities:
        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y'>BentoML</a>
        <a href='https://mlops-community.slack.com/team/U038CKDA738'>MLOps</a>
        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK'>Write Speak Code</a>
        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT'>RLS</a>
        </div>
      </div>
    `}link(e,t){return R`<a class='upper' href=${t} target="_blank">${e}</a>`}renderBlogs(){return Se(Pe,(e=>this.renderBlog(e)))}renderBlog(e){e.links.map((e=>R`<div>${this.link(e.name,e.link)}</div>`));return R`
      <a class="see-more" href="#" @click="${t=>this.showFullView(t,e,"#blog")}"><div class='title'>${e.name}</div></a>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#blog")}">
          <img src="./images/${e.image}"></img>
        </a>
      </div>
    `}renderVolunteerProjects(){return Se(De,(e=>this.renderVolunteerProject(e)))}renderVolunteerProject(e){e.links.map((e=>R`<div>${this.link(e.name,e.link)}</div>`));return R`
        <div class='title'>${e.name}</div>
        <div class='project'>
          <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">
            <img src="./images/${e.image}"></img>
          </a>
          <div class='info font-sm'>
            <div>${"string"==typeof e.description?e.description.substring(0,160):e.description}<a class="see-more" href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">...See More</a>
            </div>
          </div>
        </div>
    `}showFullView(e,t,i){e.preventDefault(),this.fullViewData=t,this.backLink=i,this.currentView="full-view"}goBack(e){e.preventDefault(),this.currentView="main"}closeModal(e){e.preventDefault(),this.currentView="main"}handleNavClick(e){e.preventDefault();const t=e.target.getAttribute("href");t&&(window.location.hash=t)}};var Ie;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */e([ue()],Te.prototype,"currentView",void 0),e([ue()],Te.prototype,"fullViewData",void 0),e([ue()],Te.prototype,"backLink",void 0),Te=e([(Ie="index-component",e=>"function"==typeof e?((e,t)=>(customElements.define(e,t),t))(Ie,e):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(Ie,e))],Te);
//# sourceMappingURL=index.05a72f9c.js.map
