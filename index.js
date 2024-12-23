"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesComponent = void 0;
var lit_1 = require("lit");
var decorators_1 = require("lit/decorators");
var repeat_1 = require("lit/directives/repeat");
var blogs_1 = require("./blogs");
var TreesComponent = exports.TreesComponent = (function (_super) {
    __extends(TreesComponent, _super);
    function TreesComponent() {
        return _super.call(this) || this;
    }
    TreesComponent.prototype.createRenderRoot = function () {
        return this;
    };
    TreesComponent.prototype.render = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <div class='topbar'>\n      ", "\n      ", "\n      ", "\n    </div>\n    <div class='about-holder'>\n      <div class='content'>\n        <h1 class='font-lg' id='about'>Habiba Mohamed</h1>\n        ", "\n      </div>\n    </div>\n\n    <div class='content'>\n      <h1 class='font-lg'  id='blog'>Blog</h1>\n      ", "\n    </div>\n        ", "\n    <div class='content'>\n      <h1 class='font-lg'  id='volunteer'>Volunteer Work</h1>\n            ", "\n    </div>\n    <div> \n\n    </div> \n    "], ["\n    <div class='topbar'>\n      ", "\n      ", "\n      ", "\n    </div>\n    <div class='about-holder'>\n      <div class='content'>\n        <h1 class='font-lg' id='about'>Habiba Mohamed</h1>\n        ", "\n      </div>\n    </div>\n\n    <div class='content'>\n      <h1 class='font-lg'  id='blog'>Blog</h1>\n      ", "\n    </div>\n        ", "\n    <div class='content'>\n      <h1 class='font-lg'  id='volunteer'>Volunteer Work</h1>\n            ", "\n    </div>\n    <div> \n\n    </div> \n    "])), this.renderNav('about', '#about'), this.renderNav('blog', '#blog'), this.renderNav('volunteer work', '#volunteer'), this.renderAbout(), this.renderBlogs(), this.renderCommunities(), this.renderBlogs());
    };
    TreesComponent.prototype.renderExternal = function () {
        var button = function (iconImage, link) {
            return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <a href=", " target=\"_blank\" class='icon-link'><img src='./images/", "'></img></a>\n      "], ["\n        <a href=", " target=\"_blank\" class='icon-link'><img src='./images/", "'></img></a>\n      "])), link, iconImage);
        };
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    <div class='external'>\n      ", "\n      ", "\n    </div> "], ["\n    <div class='external'>\n      ", "\n      ", "\n    </div> "])), button('linked_in.png', 'https://linkedin.com/in/habibamohamed'), button('github.png', 'https://github.com/habibam'));
    };
    TreesComponent.prototype.renderNav = function (name, link) {
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<div class='nav'> <a href=", ">", "</a></div>"], ["<div class='nav'> <a href=", ">", "</a></div>"])), link, name);
    };
    TreesComponent.prototype.renderAbout = function () {
        return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    <div>\n      I'm currently a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services.\n    <br><br>\n      I also volunteer as a Software Engineer and Machine Learning Engineer at Lion Guardians, contributing to AI-driven wildlife conservation efforts.\n    <br><br>\n      My work focuses on improving system reliability, streamlining machine learning workflows, and optimizing cloud environments (AWS, Kubernetes). \n    <br><br>\n      I'm passionate about building robust, scalable systems and improving MLOps processes to deploy stable and efficient models.\n    <br><br>\n      I'm also <i>love</i> monitoring and observability and <i>I believe every SDE is an SRE to some extent and the more the better</i>.\n    <br><br>\n\n    <div class=\"email font-sm\"> \n      Resume available upon request.\n    ", "\n    </div>\n    "], ["\n    <div>\n      I'm currently a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services.\n    <br><br>\n      I also volunteer as a Software Engineer and Machine Learning Engineer at Lion Guardians, contributing to AI-driven wildlife conservation efforts.\n    <br><br>\n      My work focuses on improving system reliability, streamlining machine learning workflows, and optimizing cloud environments (AWS, Kubernetes). \n    <br><br>\n      I'm passionate about building robust, scalable systems and improving MLOps processes to deploy stable and efficient models.\n    <br><br>\n      I'm also <i>love</i> monitoring and observability and <i>I believe every SDE is an SRE to some extent and the more the better</i>.\n    <br><br>\n\n    <div class=\"email font-sm\"> \n      Resume available upon request.\n    ", "\n    </div>\n    "])), this.renderExternal());
    };
    TreesComponent.prototype.link = function (name, link) {
        return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<a class='upper' href=", " target=\"_blank\">", "</a>"], ["<a class='upper' href=", " target=\"_blank\">", "</a>"])), link, name);
    };
    TreesComponent.prototype.renderBlogs = function () {
        var _this = this;
        return (0, repeat_1.repeat)(blogs_1.blogs, function (blog) { return _this.renderBlog(blog); });
    };
    TreesComponent.prototype.renderBlog = function (blog) {
        var _this = this;
        var links = blog.links.map(function (link) { return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<div>", "</div>"], ["<div>", "</div>"])), _this.link(link.name, link.link)); });
        return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    <div class='title'>", "</div>\n    <div class='blog'>\n      <a class='img-holder'  href=", " target=\"_blank\"> <img src=\"./images/", "\"></img></a>\n\n      <div class='info font-sm'>\n        <div>", "</div>\n        <div>\n          ", "\n        </div>\n      </div>\n    </div>\n    "], ["\n    <div class='title'>", "</div>\n    <div class='blog'>\n      <a class='img-holder'  href=", " target=\"_blank\"> <img src=\"./images/", "\"></img></a>\n\n      <div class='info font-sm'>\n        <div>", "</div>\n        <div>\n          ", "\n        </div>\n      </div>\n    </div>\n    "])), blog.name, blog.links[0].link, blog.image, blog.description, links);
    };
    TreesComponent.prototype.renderCommunities = function () {
        return (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      <div class=\"bubble-chart\">\n        <div class=\"community-label\">\n            Find me in these #slack communities\n        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y'>BentoML</a>\n        <a href='https://mlops-community.slack.com/team/U038CKDA738'>MLOps</a>\n        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK'>Write Speak Code</a>\n        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT'>Rands Leadership Slack</a>\n        </div>\n      </div>\n    "], ["\n      <div class=\"bubble-chart\">\n        <div class=\"community-label\">\n            Find me in these #slack communities\n        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y'>BentoML</a>\n        <a href='https://mlops-community.slack.com/team/U038CKDA738'>MLOps</a>\n        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK'>Write Speak Code</a>\n        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT'>Rands Leadership Slack</a>\n        </div>\n      </div>\n    "])));
    };
    TreesComponent = __decorate([
        (0, decorators_1.customElement)('index-component')
    ], TreesComponent);
    return TreesComponent;
}(lit_1.LitElement));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=index.js.map