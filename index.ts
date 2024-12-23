// tslint:disable:g3-no-void-expression

import * as d3 from 'd3';
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators';
import { repeat } from 'lit/directives/repeat';
import { blogs, Blog } from './blogs';
import { createBubbleChart } from './bubble-chart';


/**
 * Component for spreadsheet duplicates.
 */
@customElement('index-component')
export class TreesComponent extends LitElement {

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  override render() {
    return html`
    <div class='topbar'>
      ${this.renderNav('about', '#about')}
      ${this.renderNav('blog', '#blog')}
      ${this.renderNav('volunteer work', '#volunteer')}
    </div>
    <div class='about-holder'>
      <div class='content'>
        <h1 class='font-lg' id='about'>Habiba Mohamed</h1>
        ${this.renderAbout()}
      </div>
    </div>

    <div class='content'>
      <h1 class='font-lg'  id='blog'>Blog</h1>
      ${this.renderBlogs()}
    </div>
        ${this.renderCommunities()}
    <div class='content'>
      <h1 class='font-lg'  id='volunteer'>Volunteer Work</h1>
            ${this.renderBlogs()}
    </div>
    <div> 

    </div> 
    `;
  }

  private renderExternal() {
    const button = (iconImage: string, link: string) => {
      return html`
        <a href=${link} target="_blank" class='icon-link'><img src='./images/${iconImage}'></img></a>
      `;
    }
    return html`
    <div class='external'>
      ${button('linked_in.png', 'https://linkedin.com/in/habibamohamed')}
      ${button('github.png', 'https://github.com/habibam')}
    </div> `
  }

  // create a find me in the following communities section
  // and make it a little toggle that updates things
  // create a couple of blog posts
  // bentoml, MLOps, rands leadership slack, write speak code

  private renderNav(name: string, link: string) {
    return html`<div class='nav'> <a href=${link}>${name}</a></div>`
  }

  private renderAbout() {
    return html`
    <div>
      I'm currently a Senior Software Engineer at GoDaddy, where I optimize cloud infrastructure and develop scalable services.
    <br><br>
      I also volunteer as a Software Engineer and Machine Learning Engineer at Lion Guardians, contributing to AI-driven wildlife conservation efforts.
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
    `;
  }


  private link(name: string, link: string) {
    return html`<a class='upper' href=${link} target="_blank">${name}</a>`
  }



  private renderBlogs() {
    return repeat(blogs, blog => this.renderBlog(blog));
  }
  private renderBlog(blog: Blog) {
    const links = blog.links.map(link => html`<div>${this.link(link.name, link.link)}</div>`);
    return html`
    <div class='title'>${blog.name}</div>
    <div class='blog'>
      <a class='img-holder'  href=${blog.links[0].link} target="_blank"> <img src="./images/${blog.image}"></img></a>

      <div class='info font-sm'>
        <div>${blog.description}</div>
        <div>
          ${links}
        </div>
      </div>
    </div>
    `;
  }

  private renderCommunities() {
    return html`
      <div id="bubble-container" class="bubble-chart">
        <div class="community-label">
            Find me in these #slack communities
        </div>
      </div>
    `;
  }

  override firstUpdated() {
    createBubbleChart();
  }

}