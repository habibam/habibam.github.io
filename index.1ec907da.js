// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1jwFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreesComponent", ()=>TreesComponent);
var _tsDecorateMjs = require("@swc/helpers/src/_ts_decorate.mjs");
var _tsDecorateMjsDefault = parcelHelpers.interopDefault(_tsDecorateMjs);
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _repeatJs = require("lit/directives/repeat.js");
var _unsafeHtmlJs = require("lit/directives/unsafe-html.js");
var _blogs = require("./blogs");
var _volunteerProjects = require("./volunteer-projects");
let TreesComponent = class TreesComponent extends (0, _lit.LitElement) {
    constructor(){
        super();
        this.currentView = "main";
        this.fullViewData = null;
        this.backLink = "";
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return (0, _lit.html)`
      ${this.renderMainView()}
      ${this.currentView === "full-view" ? this.renderModal() : ""}
    `;
    }
    renderMainView() {
        return (0, _lit.html)`
      <div class='topbar'>
        ${this.renderNav("about", "#about")}
        ${this.renderNav("volunteer work", "#project")}
        ${this.renderNav("micro blog", "#blog")}
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
    `;
    }
    renderModal() {
        if (!this.fullViewData) return (0, _lit.html)``;
        const { name , description , links  } = this.fullViewData;
        return (0, _lit.html)`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${(e)=>e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">X</a>
          <div class="title">${name}</div>
          <div class="description">${(0, _unsafeHtmlJs.unsafeHTML)(description)}</div>
          <div class="links">
            ${links.map((link)=>(0, _lit.html)`<a class="link-item" href="${link.link}" target="_blank">${link.name}</a>`)}
          </div>
        </div>
      </div>
    `;
    }
    renderNav(name, link) {
        return (0, _lit.html)`<div class='nav'> <a href=${link} @click="${this.handleNavClick}">${name}</a></div>`;
    }
    renderAbout() {
        return (0, _lit.html)`
      <div>
        I am a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services. I also <a href="https://linclion.org/technical-development-team/#habibamohamed">volunteer</a> as a Machine Learning Engineer at <a href="https://github.com/linc-lion/LINC-detector?tab=readme-ov-file#linc-object-detector">Lion Guardians</a>, contributing to AI-driven wildlife conservation efforts.
        <br><br>
        My work focuses on improving system reliability, streamlining machine learning workflows, and optimizing cloud environments.
        <br><br>
        I'm passionate about building robust, scalable systems and improving MLOps processes to deploy stable and efficient models.
        <br><br>
        I also <i>enjoy</i> monitoring and observability infrastructure and <i>I believe every SDE is an SRE</i>.
        <br><br>
        Additionally, I enjoy mentoring junior engineers, especially other minority women in tech, to help them grow and succeed in their careers.
        <br><br>
        <div class="email font-sm">
          Resume available upon request.
          ${this.renderExternal()}
        </div>
      </div>
    `;
    }
    renderExternal() {
        const button = (iconImage, link)=>{
            return (0, _lit.html)`
        <a href=${link} target="_blank" class='icon-link'><img src='./images/${iconImage}'></img></a>
      `;
        };
        return (0, _lit.html)`
      <div class='external'>
        ${button("linked_in.png", "https://linkedin.com/in/habibamohamed")}
        ${button("github.png", "https://github.com/habibam")}
        ${button("scholar.png", "https://scholar.google.com/citations?user=MetBPh8AAAAJ&hl=en")}
      </div>
      <div class='external'>
        <div>Find me in these #slack communities:
        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y'>BentoML</a>
        <a href='https://mlops-community.slack.com/team/U038CKDA738'>MLOps</a>
        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK'>Write Speak Code</a>
        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT'>RLS</a>
        </div>
      </div>
    `;
    }
    link(name, link) {
        return (0, _lit.html)`<a class='upper' href=${link} target="_blank">${name}</a>`;
    }
    renderBlogs() {
        return (0, _repeatJs.repeat)((0, _blogs.blogs), (blog)=>this.renderBlog(blog));
    }
    renderBlog(blog) {
        const links = blog.links.map((link)=>(0, _lit.html)`<div>${this.link(link.name, link.link)}</div>`);
        return (0, _lit.html)`
      <a class="see-more" href="#" @click="${(e)=>this.showFullView(e, blog, "#blog")}"><div class='title'>${blog.name}</div></a>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${(e)=>this.showFullView(e, blog, "#blog")}">
          <img src="./images/${blog.image}"></img>
        </a>
      </div>
    `;
    }
    renderVolunteerProjects() {
        return (0, _repeatJs.repeat)((0, _volunteerProjects.volunteerProjects), (volunteerProject)=>this.renderVolunteerProject(volunteerProject));
    }
    renderVolunteerProject(volunteerProject) {
        const links = volunteerProject.links.map((link)=>(0, _lit.html)`<div>${this.link(link.name, link.link)}</div>`);
        return (0, _lit.html)`
        <div class='title'>${volunteerProject.name}</div>
        <div class='project'>
          <a class='img-holder' href="#" @click="${(e)=>this.showFullView(e, volunteerProject, "#volunteer")}">
            <img src="./images/${volunteerProject.image}"></img>
          </a>
          <div class='info font-sm'>
            <div>${typeof volunteerProject.description === "string" ? volunteerProject.description.substring(0, 160) : volunteerProject.description}<a class="see-more" href="#" @click="${(e)=>this.showFullView(e, volunteerProject, "#volunteer")}">...See More</a>
            </div>
          </div>
        </div>
    `;
    }
    showFullView(event, data, backLink) {
        event.preventDefault();
        this.fullViewData = data;
        this.backLink = backLink;
        this.currentView = "full-view";
    }
    goBack(event) {
        event.preventDefault();
        this.currentView = "main";
    }
    closeModal(event) {
        event.preventDefault();
        this.currentView = "main";
    }
    handleNavClick(event) {
        event.preventDefault();
        const target = event.target;
        const href = target.getAttribute("href");
        if (href) window.location.hash = href;
    }
};
(0, _tsDecorateMjsDefault.default)([
    (0, _decoratorsJs.state)()
], TreesComponent.prototype, "currentView", void 0);
(0, _tsDecorateMjsDefault.default)([
    (0, _decoratorsJs.state)()
], TreesComponent.prototype, "fullViewData", void 0);
(0, _tsDecorateMjsDefault.default)([
    (0, _decoratorsJs.state)()
], TreesComponent.prototype, "backLink", void 0);
TreesComponent = (0, _tsDecorateMjsDefault.default)([
    (0, _decoratorsJs.customElement)("index-component")
], TreesComponent);

},{"@swc/helpers/src/_ts_decorate.mjs":"6yEaS","lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./blogs":"3vds5","./volunteer-projects":"6DRov","lit/decorators.js":"bCPKi","lit/directives/repeat.js":"71kf4","lit/directives/unsafe-html.js":"5KJj0"}],"6yEaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>u);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
}, d = "finalized";
class u extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty(d)) return !1;
        this[d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
u[d] = !0, u.elementProperties = new Map, u.elementStyles = [], u.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: u
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.3");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>j);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>A);
parcelHelpers.export(exports, "render", ()=>D);
parcelHelpers.export(exports, "svg", ()=>b);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = "$lit$", n = `lit$${(Math.random() + "").slice(9)}$`, l = "?" + n, h = `<${l}>`, r = document, u = ()=>r.createComment(""), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, c = Array.isArray, v = (t)=>c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = w(1), b = w(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = new WeakMap, C = r.createTreeWalker(r, 129, null, !1);
function P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e ? e.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, l = void 0);
        const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === f ? s + h : v >= 0 ? (e.push(d), s.slice(0, v) + o + s.slice(v) + n + w) : s + n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class N {
    constructor({ strings: t , _$litType$: i  }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = V(t, i);
        if (this.el = N.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith(o) || i.startsWith(n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + o).split(n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if (y.test(h.tagName)) {
                    const t = h.textContent.split(n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], u()), C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf(n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === T) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S(t, r._$AS(t, i.values), r, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
        C.currentNode = o;
        let n = C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = C.nextNode(), l++);
        }
        return C.currentNode = r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N.createElement(P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = E.get(t.strings);
        return void 0 === i && E.set(t.strings, i = new N(t)), i;
    }
    T(t) {
        c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = S(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = S(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}
const I = s ? s.emptyScript : "";
class L extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
}
class z extends k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
        const e = this._$AH, o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== A && (e === A || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const j = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: V,
    L: M,
    R: v,
    D: S,
    I: R,
    V: k,
    H: L,
    N: z,
    U: H,
    F: Z
}, B = i.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.8.0");
const D = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.3");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vds5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blogs", ()=>blogs);
const blogs = [
    {
        name: "Getting Started with AWS CDK: Deploying a Serverless Lambda Function with API Gateway",
        description: `
      <h2>Introduction</h2>
      <p>In this blog post, I will walk you through the steps to get up and running quickly with AWS Cloud Development Kit (CDK) to deploy a serverless Lambda function with an API Gateway endpoint. Assuming you have AWS account setup, This guide will help you understand the basics of CDK and how to leverage it for deploying serverless applications.</p>

      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js installed (version specified in <code>.nvmrc</code>)</li>
        <li>AWS Account</li>
        <li>AWS CLI configured</li>
        <li>AWS CDK installed globally (<code>npm install -g aws-cdk</code>)</li>
      </ul>

      <h2>Step 1: Initialize the CDK Project</h2>
      <p>First, create a new directory for your CDK project and navigate into it. Then, initialize a new CDK project.</p>

      <pre><code>bash
      mkdir my-cdk-app
      cd my-cdk-app
      cdk init app --language javascript
      </code></pre>

      <h2>Step 2: Define the Lambda Function</h2>
      <p>Create a new Lambda function in the <code>lib</code> directory. For example, create a file named <code>lambda.js</code>:</p>

      <pre><code>javascript
      exports.handler = async function(event) {
        console.log("request:", JSON.stringify(event, undefined, 2));
        return {
          statusCode: 200,
          headers: { "Content-Type": "text/plain" },
          body: \`Hello, CDK! You've hit \${event.path}\n\`
        };
      };
      </code></pre>

      <h2>Step 3: Create the CDK Stack</h2>
      <p>Modify the <code>lib/cdk-stack.js</code> file to include the Lambda function and an API Gateway to trigger it.</p>

      <pre><code>javascript
      const cdk = require('aws-cdk-lib');
      const lambda = require('aws-cdk-lib/aws-lambda');
      const apigateway = require('aws-cdk-lib/aws-apigateway');

      class ApiGatewayStack extends cdk.Stack {
        constructor(scope, id, props) {
          super(scope, id, props);

          // Define the Lambda function
          const myLambda = new lambda.Function(this, 'MyLambda', {
            runtime: lambda.Runtime.NODEJS_20_X,
            code: lambda.Code.fromAsset('lib'),
            handler: 'lambda.handler'
          });

          // Define the API Gateway
          new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: myLambda
          });
        }
      }

      module.exports = { ApiGatewayStack };
      </code></pre>

      <h2>Step 4: Configure the CDK App</h2>
      <p>Modify the <code>bin/cdk-app.js</code> file to configure the CDK app and stack.</p>

      <pre><code>javascript
      #!/usr/bin/env node
      const cdk = require('aws-cdk-lib');
      const { ApiGatewayStack } = require('../lib/cdk-stack');

      const env = {
        account: process.env.AWS_ACCOUNT,
        region: process.env.DEPLOY_REGION
      };

      const STACK_NAME = 'api-gateway-stack';
      const cdkApp = new cdk.App();

      new ApiGatewayStack(cdkApp, STACK_NAME, {
        synthesizer: new cdk.CliCredentialsStackSynthesizer(),
        env
      });
      </code></pre>

      <h2>Step 5: Deploy the Stack</h2>
      <p>Deploy the stack using the CDK CLI.</p>

      <pre><code>bash
      cdk deploy
      </code></pre>

      <h2>Step 6: Optional: Schedule Lambda Invocation using GitHub Actions</h2>
      <p>To use the GitHub Actions (GHA) scheduler function to call the Lambda on a schedule, you can set up a workflow file in your repository. This allows you to run your Lambda function on a specified schedule without the need for additional infrastructure like cron jobs in a Kubernetes cluster. Below is an example of how to set this up:</p>

      <pre><code>yaml
      name: Scheduled Lambda Invocation
      on:
        workflow_dispatch:
        schedule:
          - cron: '0 21 * * 2'

      jobs:
        invoke-lambda:
          runs-on: ubuntu-latest
          steps:
          - uses: actions/checkout@v2
          - name: Login to AWS
            uses: aws-actions/configure-aws-credentials@v1
            with:
              role-to-assume: "role-to-assume"
              role-skip-session-tagging: true
              role-duration-seconds: 3600
              aws-region: us-west-2
          - name: Setup Node
            uses: actions/setup-node@v2
            with:
              node-version-file: .nvmrc
              cache: 'npm'
              cache-dependency-path: package-lock.json
          - name: Install dependencies
            run: npm ci
          - name: Invoke Lambda
            run: |
              aws lambda invoke \
                --function-name my-lambda-function \
                --payload '{}' \
                response.json
          - name: Notify slack on success
            if: success()
            uses: rtCamp/action-slack-notify@v2
            with:
              status: 'success'
              message: "Workflow succeeded"
              webhook-url: 'SLACK_WEBHOOK_URL'
          - name: Notify slack on failure
            if: failure()
            uses: rtCamp/action-slack-notify@v2
            with:
              webhook-url: 'SLACK_WEBHOOK_URL'
              status: 'failure'
              message: "Workflow failed"
      </code></pre>

      <h2>Conclusion</h2>
      <p>Congratulations! You have successfully deployed a serverless Lambda function with an API Gateway endpoint using AWS CDK and scheduled its invocation using GitHub Actions. This is just the beginning, and there are many more features and configurations you can explore with CDK and GitHub Actions.</p>
    `,
        image: "aws-cdk.png",
        links: [
            {
                name: "AWS CDK Documentation",
                link: "https://docs.aws.amazon.com/cdk/latest/guide/home.html"
            },
            {
                name: "GitHub Actions Documentation",
                link: "https://docs.github.com/en/actions"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DRov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "volunteerProjects", ()=>volunteerProjects);
const volunteerProjects = [
    {
        name: "Deploying the Linc Detection Model with BentoML",
        image: "linc_detection_.png",
        description: "I developed a scalable and efficient API for image annotation by integrating the Linc Detection model into the BentoML framework. To enhance flexibility, I replaced outdated methods with a generalized prediction approach and restructured the codebase to be modular, improving readability and maintainability. I implemented Pydantic models to ensure strong type validation in API requests and responses, providing robust input and output handling. To streamline operations, I automated artifact fetching from AWS S3 with a shell script, simplifying the deployment process. Additionally, I created detailed documentation covering installation, deployment, and usage, making it easier for users and developers to interact with the service. This work resulted in a production-ready machine learning service that was scalable, user-friendly, and demonstrated my ability to bridge data science and engineering to deliver practical, deployable solutions. Please review the pull request for the implementation.",
        links: [
            {
                name: "View the code",
                link: "https://github.com/linc-lion/linc-detector-api/pull/4"
            }
        ]
    },
    {
        name: "Proof of Concept for Object Detection Model Deployment",
        image: "linc_detection_webapp.png",
        description: "I developed the Linc Detector Webapp as a temporary, proof-of-concept solution to enable object detection in images and provide freelancers with a way to interact with the model. The backend was built using Flask and deployed with Gunicorn and AWS Elastic Beanstalk, while the frontend utilized React for a clean and responsive user experience, styled with SCSS and bundled with Parcel. This approach was intentionally not scalable but served as an interim platform to validate the usefulness of object detection for our workflow. The goal was to determine if pre-annotated images could help scientists achieve greater success with lion identification, which relies on a secondary ML service. I also collaborated with contractors to design a UI tailored for scientists, enabling them to process images and generate bounding box outputs efficiently. The project showcased my ability to rapidly prototype full-stack solutions, combining Python, Flask, React, and AWS, and set the stage for implementing a scalable, robust service using the BentoML framework. Please review the pull request for the implementation.",
        links: [
            {
                name: "View the code",
                link: "https://github.com/linc-lion/linc-detector-webapp/pull/3/files"
            }
        ]
    },
    {
        name: "Automated Model Deployment for Scalable ML Services on AWS ECS Fargate",
        image: "torch.png",
        description: "I automated the deployment process for the Linc Detection API, enabling scalable and efficient production deployment using GitHub Actions and AWS ECS Fargate. I configured GitHub Actions to handle building, pushing, and deploying Docker images, ensuring a streamlined CI/CD pipeline. By leveraging ECS Fargate, I established serverless container management for improved scalability and reduced operational overhead. To address compatibility challenges, I implemented Docker Buildx to handle ARM-based Docker image builds and optimized networking by configuring the awsvpc mode for better isolation and resource management. I also automated the retrieval of model artifacts from AWS S3 using a shell script, further simplifying deployment operations. Comprehensive documentation was provided to guide users and developers through setting up and running the deployment pipeline. This project highlights my expertise in DevOps and cloud deployment, demonstrating the ability to integrate automation, containerization, and scalable architecture to create reliable, production-ready systems for machine learning services. Please review the pull request for the implementation.",
        links: [
            {
                name: "View the code",
                link: "https://github.com/linc-lion/linc-detector-webapp/pull/1/files"
            }
        ]
    },
    {
        name: "Automated Resource Provisioning: Terraform and GHA for Environment Based Deployments",
        image: "terraform.png",
        description: "I developed an automated solution for provisioning EC2 instances using Terraform, integrated with GitHub Actions to streamline deployment workflows. The project focused on implementing user data scripts tailored to staging and production environments, ensuring environment-specific setup operations are executed during instance launch. Leveraging Terraform, I defined infrastructure as code to standardize the provisioning process, while GitHub Actions handled the automation of deployments. The repository includes comprehensive configurations for EC2 instances, with user data scripts designed to reliably handle environment-specific setups. This approach enhanced deployment efficiency and ensured consistency across different environments. This project demonstrates my ability to implement modern DevOps practices, combining infrastructure as code with CI/CD automation to create robust, maintainable, and environment-specific provisioning pipelines.Please review the pull request for the implementation.",
        links: [
            {
                name: "View the code",
                link: "https://github.com/linc-lion/linc-cv/pull/10"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t , elements: s  } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipYYa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>n);
const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function n(n) {
    return (t, o)=>void 0 !== o ? e(n, t, o) : i(n, t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e , descriptor: t  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l , selector: t  } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71kf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _repeatJs = require("lit-html/directives/repeat.js");
parcelHelpers.exportAll(_repeatJs, exports);

},{"lit-html/directives/repeat.js":"8jPEM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jPEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>c);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const u = (e, s, t)=>{
    const r = new Map;
    for(let l = s; l <= t; l++)r.set(e[l], l);
    return r;
}, c = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(e){
        if (super(e), e.type !== (0, _directiveJs.PartType).CHILD) throw Error("repeat() can only be used in text expressions");
    }
    ct(e, s, t) {
        let r;
        void 0 === t ? t = s : void 0 !== s && (r = s);
        const l = [], o = [];
        let i = 0;
        for (const s of e)l[i] = r ? r(s, i) : i, o[i] = t(s, i), i++;
        return {
            values: o,
            keys: l
        };
    }
    render(e, s, t) {
        return this.ct(e, s, t).values;
    }
    update(s, [t, r, c]) {
        var d;
        const a = (0, _directiveHelpersJs.getCommittedValue)(s), { values: p , keys: v  } = this.ct(t, r, c);
        if (!Array.isArray(a)) return this.ut = v, p;
        const h = null !== (d = this.ut) && void 0 !== d ? d : this.ut = [], m = [];
        let y, x, j = 0, k = a.length - 1, w = 0, A = p.length - 1;
        for(; j <= k && w <= A;)if (null === a[j]) j++;
        else if (null === a[k]) k--;
        else if (h[j] === v[w]) m[w] = (0, _directiveHelpersJs.setChildPartValue)(a[j], p[w]), j++, w++;
        else if (h[k] === v[A]) m[A] = (0, _directiveHelpersJs.setChildPartValue)(a[k], p[A]), k--, A--;
        else if (h[j] === v[A]) m[A] = (0, _directiveHelpersJs.setChildPartValue)(a[j], p[A]), (0, _directiveHelpersJs.insertPart)(s, m[A + 1], a[j]), j++, A--;
        else if (h[k] === v[w]) m[w] = (0, _directiveHelpersJs.setChildPartValue)(a[k], p[w]), (0, _directiveHelpersJs.insertPart)(s, a[j], a[k]), k--, w++;
        else if (void 0 === y && (y = u(v, w, A), x = u(h, j, k)), y.has(h[j])) {
            if (y.has(h[k])) {
                const e = x.get(v[w]), t = void 0 !== e ? a[e] : null;
                if (null === t) {
                    const e = (0, _directiveHelpersJs.insertPart)(s, a[j]);
                    (0, _directiveHelpersJs.setChildPartValue)(e, p[w]), m[w] = e;
                } else m[w] = (0, _directiveHelpersJs.setChildPartValue)(t, p[w]), (0, _directiveHelpersJs.insertPart)(s, a[j], t), a[e] = null;
                w++;
            } else (0, _directiveHelpersJs.removePart)(a[k]), k--;
        } else (0, _directiveHelpersJs.removePart)(a[j]), j++;
        for(; w <= A;){
            const e = (0, _directiveHelpersJs.insertPart)(s, m[A + 1]);
            (0, _directiveHelpersJs.setChildPartValue)(e, p[w]), m[w++] = e;
        }
        for(; j <= k;){
            const e = a[j++];
            null !== e && (0, _directiveHelpersJs.removePart)(e);
        }
        return this.ut = v, (0, _directiveHelpersJs.setCommittedValue)(s, m), _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lbyV":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJsxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateResultType", ()=>n);
parcelHelpers.export(exports, "clearPart", ()=>h);
parcelHelpers.export(exports, "getCommittedValue", ()=>m);
parcelHelpers.export(exports, "getDirectiveClass", ()=>u);
parcelHelpers.export(exports, "insertPart", ()=>c);
parcelHelpers.export(exports, "isCompiledTemplateResult", ()=>v);
parcelHelpers.export(exports, "isDirectiveResult", ()=>d);
parcelHelpers.export(exports, "isPrimitive", ()=>i);
parcelHelpers.export(exports, "isSingleExpression", ()=>e);
parcelHelpers.export(exports, "isTemplateResult", ()=>t);
parcelHelpers.export(exports, "removePart", ()=>p);
parcelHelpers.export(exports, "setChildPartValue", ()=>f);
parcelHelpers.export(exports, "setCommittedValue", ()=>a);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: l  } = (0, _litHtmlJs._$LH), i = (o)=>null === o || "object" != typeof o && "function" != typeof o, n = {
    HTML: 1,
    SVG: 2
}, t = (o, l)=>void 0 === l ? void 0 !== (null == o ? void 0 : o._$litType$) : (null == o ? void 0 : o._$litType$) === l, v = (o)=>{
    var l;
    return null != (null === (l = null == o ? void 0 : o._$litType$) || void 0 === l ? void 0 : l.h);
}, d = (o)=>void 0 !== (null == o ? void 0 : o._$litDirective$), u = (o)=>null == o ? void 0 : o._$litDirective$, e = (o)=>void 0 === o.strings, r = ()=>document.createComment(""), c = (o, i, n)=>{
    var t;
    const v = o._$AA.parentNode, d = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = v.insertBefore(r(), d), t = v.insertBefore(r(), d);
        n = new l(i, t, o, o.options);
    } else {
        const l = n._$AB.nextSibling, i = n._$AM, u = i !== o;
        if (u) {
            let l;
            null === (t = n._$AQ) || void 0 === t || t.call(n, o), n._$AM = o, void 0 !== n._$AP && (l = o._$AU) !== i._$AU && n._$AP(l);
        }
        if (l !== d || u) {
            let o = n._$AA;
            for(; o !== l;){
                const l = o.nextSibling;
                v.insertBefore(o, d), o = l;
            }
        }
    }
    return n;
}, f = (o, l, i = o)=>(o._$AI(l, i), o), s = {}, a = (o, l = s)=>o._$AH = l, m = (o)=>o._$AH, p = (o)=>{
    var l;
    null === (l = o._$AP) || void 0 === l || l.call(o, !1, !0);
    let i = o._$AA;
    const n = o._$AB.nextSibling;
    for(; i !== n;){
        const o = i.nextSibling;
        i.remove(), i = o;
    }
}, h = (o)=>{
    o._$AR();
};

},{"./lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KJj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unsafeHtmlJs = require("lit-html/directives/unsafe-html.js");
parcelHelpers.exportAll(_unsafeHtmlJs, exports);

},{"lit-html/directives/unsafe-html.js":"91pKz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91pKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsafeHTMLDirective", ()=>e);
parcelHelpers.export(exports, "unsafeHTML", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class e extends (0, _directiveJs.Directive) {
    constructor(i){
        if (super(i), this.et = (0, _litHtmlJs.nothing), i.type !== (0, _directiveJs.PartType).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, _litHtmlJs.nothing) || null == r) return this.ft = void 0, this.et = r;
        if (r === (0, _litHtmlJs.noChange)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.et) return this.ft;
        this.et = r;
        const s = [
            r
        ];
        return s.raw = s, this.ft = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
const o = (0, _directiveJs.directive)(e);

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1jwFz"], "1jwFz", "parcelRequire26fe")

//# sourceMappingURL=index.1ec907da.js.map
