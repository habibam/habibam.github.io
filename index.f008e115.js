function e(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}Object.create;Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const r=(e,n)=>{i?e.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,e.appendChild(n)}))},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=m){var n;const s=this.constructor._$Ep(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=n.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=s,this[s]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,E="?"+w,S=`<${E}>`,k=document,C=()=>k.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,x=Array.isArray,M=e=>x(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,H=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,O=/"/g,R=/^(?:script|style|textarea|title)$/i,L=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=L(1),V=(L(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),z=new WeakMap,W=k.createTreeWalker(k,129,null,!1);function F(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=U;for(let t=0;t<i;t++){const i=e[t];let l,a,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===U?"!--"===a[1]?r=I:void 0!==a[1]?r=H:void 0!==a[2]?(R.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=N):void 0!==a[3]&&(r=N):r===N?">"===a[0]?(r=null!=s?s:U,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?N:'"'===a[3]?O:D):r===O||r===D?r=N:r===I||r===H?r=U:(r=N,s=void 0);const h=r===N&&e[t+1].startsWith("/>")?" ":"";o+=r===U?i+S:d>=0?(n.push(l),i.slice(0,d)+A+i.slice(d)+w+h):i+w+(-2===d?(n.push(void 0),t):h)}return[F(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class q{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,l=this.parts,[a,d]=G(e,t);if(this.el=q.createElement(a,i),W.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=W.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(A)||t.startsWith(w)){const i=d[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+A).split(w),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?Q:"?"===t[1]?ee:"@"===t[1]?te:Y})}else l.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(R.test(n.tagName)){const e=n.textContent.split(w),t=e.length-1;if(t>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],C()),W.nextNode(),l.push({type:2,index:++s});n.append(e[t],C())}}}else if(8===n.nodeType)if(n.data===E)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(w,e+1));)l.push({type:7,index:s}),e+=w.length-1}s++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,n){var s,o,r,l;if(t===V)return t;let a=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const d=P(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(e),a._$AT(e,i,n)),void 0!==n?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[n]=a:i._$Cl=a),void 0!==a&&(t=K(e,a._$AS(e,t.values),a,n)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:k).importNode(i,!0);W.currentNode=s;let o=W.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Z(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ie(o,this,e)),this._$AV.push(t),a=n[++l]}r!==(null==a?void 0:a.index)&&(o=W.nextNode(),r++)}return W.currentNode=k,s}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{constructor(e,t,i,n){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),P(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):M(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(F(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(i);else{const e=new J(s,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new q(e)),t}T(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new Z(this.k(C()),this.k(C()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,i,n,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=K(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const n=e;let r,l;for(e=s[0],r=0;r<s.length-1;r++)l=K(this,n[i+r],t,r),l===V&&(l=this._$AH[r]),o||(o=!P(l)||l!==this._$AH[r]),l===j?e=j:e!==j&&(e+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}o&&!n&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}const X=y?y.emptyScript:"";class ee extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class te extends Y{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=K(this,e,t,0))&&void 0!==i?i:j)===V)return;const n=this._$AH,s=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ne={O:A,P:w,A:E,C:1,M:G,L:J,R:M,D:K,I:Z,V:Y,H:ee,N:te,U:Q,F:ie},se=_.litHtmlPolyfillSupport;null==se||se(q,Z),(null!==($=_.litHtmlVersions)&&void 0!==$?$:_.litHtmlVersions=[]).push("2.8.0");const oe=(e,t,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new Z(t.insertBefore(C(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,le;class ae extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return V}}ae.finalized=!0,ae._$litElement$=!0,null===(re=globalThis.litElementHydrateSupport)||void 0===re||re.call(globalThis,{LitElement:ae});const de=globalThis.litElementPolyfillSupport;null==de||de({LitElement:ae});(null!==(le=globalThis.litElementVersions)&&void 0!==le?le:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},he=(e,t,i)=>{t.constructor.createProperty(i,e)};
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
function ue(e){return t={...e,state:!0},(e,i)=>void 0!==i?he(t,e,i):ce(t,e);var t}
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
const ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class me{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:fe}=ne,ge=()=>document.createComment(""),$e=(e,t,i)=>{var n;const s=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(ge(),o),n=s.insertBefore(ge(),o);i=new fe(t,n,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,l=r!==e;if(l){let t;null===(n=i._$AQ)||void 0===n||n.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==o||l){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,o),e=t}}}return i},_e=(e,t,i=e)=>(e._$AI(t,i),e),ye={},be=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const n=e._$AB.nextSibling;for(;i!==n;){const e=i.nextSibling;i.remove(),i=e}},Ae=(e,t,i)=>{const n=new Map;for(let s=t;s<=i;s++)n.set(e[s],s);return n},we=(Ee=class extends me{constructor(e){if(super(e),e.type!==ve.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const s=[],o=[];let r=0;for(const t of e)s[r]=n?n(t,r):r,o[r]=i(t,r),r++;return{values:o,keys:s}}render(e,t,i){return this.ct(e,t,i).values}update(e,[t,i,n]){var s;const o=e._$AH,{values:r,keys:l}=this.ct(t,i,n);if(!Array.isArray(o))return this.ut=l,r;const a=null!==(s=this.ut)&&void 0!==s?s:this.ut=[],d=[];let c,h,u=0,p=o.length-1,v=0,m=r.length-1;for(;u<=p&&v<=m;)if(null===o[u])u++;else if(null===o[p])p--;else if(a[u]===l[v])d[v]=_e(o[u],r[v]),u++,v++;else if(a[p]===l[m])d[m]=_e(o[p],r[m]),p--,m--;else if(a[u]===l[m])d[m]=_e(o[u],r[m]),$e(e,d[m+1],o[u]),u++,m--;else if(a[p]===l[v])d[v]=_e(o[p],r[v]),$e(e,o[u],o[p]),p--,v++;else if(void 0===c&&(c=Ae(l,v,m),h=Ae(a,u,p)),c.has(a[u]))if(c.has(a[p])){const t=h.get(l[v]),i=void 0!==t?o[t]:null;if(null===i){const t=$e(e,o[u]);_e(t,r[v]),d[v]=t}else d[v]=_e(i,r[v]),$e(e,o[u],i),o[t]=null;v++}else be(o[p]),p--;else be(o[u]),u++;for(;v<=m;){const t=$e(e,d[m+1]);_e(t,r[v]),d[v++]=t}for(;u<=p;){const e=o[u++];null!==e&&be(e)}return this.ut=l,((e,t=ye)=>{e._$AH=t})(e,d),V}},(...e)=>({_$litDirective$:Ee,values:e}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;const Se=[],ke=[{name:"Deploying the Linc Detection Model with BentoML",image:"linc_detection_.png",description:"I developed a scalable and efficient API for image annotation by integrating the Linc Detection model into the BentoML framework. To enhance flexibility, I replaced outdated methods with a generalized prediction approach and restructured the codebase to be modular, improving readability and maintainability. I implemented Pydantic models to ensure strong type validation in API requests and responses, providing robust input and output handling. To streamline operations, I automated artifact fetching from AWS S3 with a shell script, simplifying the deployment process. Additionally, I created detailed documentation covering installation, deployment, and usage, making it easier for users and developers to interact with the service. This work resulted in a production-ready machine learning service that was scalable, user-friendly, and demonstrated my ability to bridge data science and engineering to deliver practical, deployable solutions. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-api/pull/4"}]},{name:"Proof of Concept for Object Detection Model Deployment",image:"linc_detection_webapp.png",description:"I developed the Linc Detector Webapp as a temporary, proof-of-concept solution to enable object detection in images and provide freelancers with a way to interact with the model. The backend was built using Flask and deployed with Gunicorn and AWS Elastic Beanstalk, while the frontend utilized React for a clean and responsive user experience, styled with SCSS and bundled with Parcel. This approach was intentionally not scalable but served as an interim platform to validate the usefulness of object detection for our workflow. The goal was to determine if pre-annotated images could help scientists achieve greater success with lion identification, which relies on a secondary ML service. I also collaborated with contractors to design a UI tailored for scientists, enabling them to process images and generate bounding box outputs efficiently. The project showcased my ability to rapidly prototype full-stack solutions, combining Python, Flask, React, and AWS, and set the stage for implementing a scalable, robust service using the BentoML framework. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-webapp/pull/3/files"}]},{name:"Automated Model Deployment for Scalable ML Services on AWS ECS Fargate",image:"torch.png",description:"I automated the deployment process for the Linc Detection API, enabling scalable and efficient production deployment using GitHub Actions and AWS ECS Fargate. I configured GitHub Actions to handle building, pushing, and deploying Docker images, ensuring a streamlined CI/CD pipeline. By leveraging ECS Fargate, I established serverless container management for improved scalability and reduced operational overhead. To address compatibility challenges, I implemented Docker Buildx to handle ARM-based Docker image builds and optimized networking by configuring the awsvpc mode for better isolation and resource management. I also automated the retrieval of model artifacts from AWS S3 using a shell script, further simplifying deployment operations. Comprehensive documentation was provided to guide users and developers through setting up and running the deployment pipeline. This project highlights my expertise in DevOps and cloud deployment, demonstrating the ability to integrate automation, containerization, and scalable architecture to create reliable, production-ready systems for machine learning services. Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-detector-webapp/pull/1/files"}]},{name:"Automated Resource Provisioning: Terraform and GHA for Environment Based Deployments",image:"terraform.png",description:"I developed an automated solution for provisioning EC2 instances using Terraform, integrated with GitHub Actions to streamline deployment workflows. The project focused on implementing user data scripts tailored to staging and production environments, ensuring environment-specific setup operations are executed during instance launch. Leveraging Terraform, I defined infrastructure as code to standardize the provisioning process, while GitHub Actions handled the automation of deployments. The repository includes comprehensive configurations for EC2 instances, with user data scripts designed to reliably handle environment-specific setups. This approach enhanced deployment efficiency and ensured consistency across different environments. This project demonstrates my ability to implement modern DevOps practices, combining infrastructure as code with CI/CD automation to create robust, maintainable, and environment-specific provisioning pipelines.Please review the pull request for the implementation.",links:[{name:"View the code",link:"https://github.com/linc-lion/linc-cv/pull/10"}]}];let Ce=class extends ae{constructor(){super(),this.currentView="main",this.fullViewData=null,this.backLink=""}createRenderRoot(){return this}render(){return B`
      ${this.renderMainView()}
      ${"full-view"===this.currentView?this.renderModal():""}
    `}renderMainView(){return B`
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
        <div>I began  volunteering with Lion Guardians in 2022, below are some of my favorite projects I’ve worked at LINC.</div>
        <div class='projects-container'>
          ${this.renderVolunteerProjects()}
        </div>
      </div>
      </div>
      <div class='content'>
        <h1 class='font-lg' id='blog'>Blog</h1>
        ${this.renderBlogs()}
      </div>
    `}renderModal(){if(!this.fullViewData)return B``;const{name:e,description:t,links:i}=this.fullViewData;return B`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${e=>e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">X</a>
          <div class="title">${e}</div>
          <div class="description">${t}</div>
          <div class="links">
            ${i.map((e=>B`<a class="link-item" href="${e.link}" target="_blank">${e.name}</a>`))}
          </div>
        </div>
      </div>
    `}renderNav(e,t){return B`<div class='nav'> <a href=${t} @click="${this.handleNavClick}">${e}</a></div>`}renderAbout(){return B`
      <div>
        I'm currently a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services.
        <br><br>
        I also <a href="https://linclion.org/technical-development-team/#habibamohamed">volunteer</a> as a Software Engineer/Machine Learning Engineer at <a href="https://github.com/linc-lion/LINC-detector?tab=readme-ov-file#linc-object-detector">Lion Guardians</a>, contributing to AI-driven wildlife conservation efforts.
        <br><br>
        My work focuses on improving system reliability, streamlining machine learning workflows, and optimizing cloud environments (AWS, Kubernetes).
        <br><br>
        I'm passionate about building robust, scalable systems and improving MLOps processes to deploy stable and efficient models.
        <br><br>
        I'm also <i>love</i> monitoring and observability and <i>I believe every SDE is an SRE to some extent and the more the better</i>.
        <br><br>
        <div class="email font-sm">
          Resume available upon request.
          ${this.renderExternal()}
        </div>
      </div>
    `}renderExternal(){const e=(e,t)=>B`
        <a href=${t} target="_blank" class='icon-link'><img src='./images/${e}'></img></a>
      `;return B`
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
    `}link(e,t){return B`<a class='upper' href=${t} target="_blank">${e}</a>`}renderBlogs(){return we(Se,(e=>this.renderBlog(e)))}renderBlog(e){const t=e.links.map((e=>B`<div>${this.link(e.name,e.link)}</div>`));return B`
      <div class='title'>${e.name}</div>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#blog")}">
          <img src="./images/${e.image}"></img>
        </a>
        <div class='info font-sm'>
          <div>${"string"==typeof e.description?e.description.substring(0,160):e.description}...</div>
          <div>${t}</div>
        </div>
      </div>
    `}renderVolunteerProjects(){return we(ke,(e=>this.renderVolunteerProject(e)))}renderVolunteerProject(e){const t=e.links.map((e=>B`<div>${this.link(e.name,e.link)}</div>`));return B`
        <div class='title'>${e.name}</div>
        <div class='project'>
          <a class='img-holder' href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">
            <img src="./images/${e.image}"></img>
          </a>
          <div class='info font-sm'>
            <div>${"string"==typeof e.description?e.description.substring(0,160):e.description}...</div>
            <div>${t}</div>
            <a class="see-more" href="#" @click="${t=>this.showFullView(t,e,"#volunteer")}">See More</a>
          </div>
        </div>
    `}showFullView(e,t,i){e.preventDefault(),this.fullViewData=t,this.backLink=i,this.currentView="full-view"}goBack(e){e.preventDefault(),this.currentView="main"}closeModal(e){e.preventDefault(),this.currentView="main"}handleNavClick(e){e.preventDefault();const t=e.target.getAttribute("href");t&&(window.location.hash=t)}};var Pe;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */e([ue()],Ce.prototype,"currentView",void 0),e([ue()],Ce.prototype,"fullViewData",void 0),e([ue()],Ce.prototype,"backLink",void 0),Ce=e([(Pe="index-component",e=>"function"==typeof e?((e,t)=>(customElements.define(e,t),t))(Pe,e):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(Pe,e))],Ce);
//# sourceMappingURL=index.f008e115.js.map
