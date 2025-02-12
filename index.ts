import * as d3 from 'd3';
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { blogs, Blog } from './blogs';
import { volunteerProjects, VolunteerProjects } from './volunteer-projects';

/**
 * Component for spreadsheet duplicates.
 */
@customElement('index-component')
export class TreesComponent extends LitElement {
  @state() private currentView: 'main' | 'full-view' = 'main';
  @state() private fullViewData: Blog | VolunteerProjects | null = null;
  @state() private backLink: string = '';

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      ${this.renderMainView()}
      ${this.currentView === 'full-view' ? this.renderModal() : ''}
    `;
  }

  private renderMainView() {
    return html`
      <div class='topbar'>
        ${this.renderNav('about', '#about')}
        ${this.renderNav('volunteer work', '#project')}
        ${this.renderNav('micro blog', '#blog')}
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

  private renderModal() {
    if (!this.fullViewData) return html``;

    const { name, description, links } = this.fullViewData;
    return html`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${(e: Event) => e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">X</a>
          <div class="title">${name}</div>
          <div class="description">${unsafeHTML(description as string)}</div>
          <div class="links">
            ${links.map(link => html`<a class="link-item" href="${link.link}" target="_blank">${link.name}</a>`)}
          </div>
        </div>
      </div>
    `;
  }

  private renderNav(name: string, link: string) {
    return html`<div class='nav'> <a href=${link} @click="${this.handleNavClick}">${name}</a></div>`;
  }

  private renderAbout() {
    return html`
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

  private renderExternal() {
    const button = (iconImage: string, link: string) => {
      return html`
        <a href=${link} target="_blank" class='icon-link'><img src='./images/${iconImage}'></img></a>
      `;
    };
    return html`
      <div class='external'>
        ${button('linked_in.png', 'https://linkedin.com/in/habibamohamed')}
        ${button('github.png', 'https://github.com/habibam')}
        ${button('scholar.png', 'https://scholar.google.com/citations?user=MetBPh8AAAAJ&hl=en')}
      </div>
      <div class='external'>
        <div>Find me in these #slack communities:
        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y'>BentoML</a>
        <a href='https://mlops-community.slack.com/team/U038CKDA738'>MLOps</a>
        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK'>Write Speak Code</a>
        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT'>RLS</a>
        <br>
        <span>Read my Master's Thesis<a href='https://digital.lib.washington.edu/server/api/core/bitstreams/3f606847-04b1-41b9-8c8c-361fd0d326b2/content'>A Multi-Objective Optimization
Approach for Edge Based Resource Allocation</a></span?
        </div>
      </div>
    `;
  }

  private link(name: string, link: string) {
    return html`<a class='upper' href=${link} target="_blank">${name}</a>`;
  }

  private renderBlogs() {
    return repeat(blogs, blog => this.renderBlog(blog));
  }

  private renderBlog(blog: Blog) {
    const links = blog.links.map(link => html`<div>${this.link(link.name, link.link)}</div>`);
    return html`
      <a class="see-more" href="#" @click="${(e: Event) => this.showFullView(e, blog, '#blog')}"><div class='title'>${blog.name}</div></a>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${(e: Event) => this.showFullView(e, blog, '#blog')}">
          <img src="./images/${blog.image}"></img>
        </a>
      </div>
    `;
  }

  private renderVolunteerProjects() {
    return repeat(volunteerProjects, volunteerProject => this.renderVolunteerProject(volunteerProject));
  }

  private renderVolunteerProject(volunteerProject: VolunteerProjects) {
    const links = volunteerProject.links.map(link => html`<div>${this.link(link.name, link.link)}</div>`);
    return html`
        <div class='title'>${volunteerProject.name}</div>
        <div class='project'>
          <a class='img-holder' href="#" @click="${(e: Event) => this.showFullView(e, volunteerProject, '#volunteer')}">
            <img src="./images/${volunteerProject.image}"></img>
          </a>
          <div class='info font-sm'>
            <div>${typeof volunteerProject.description === 'string' ? volunteerProject.description.substring(0, 160) : volunteerProject.description}<a class="see-more" href="#" @click="${(e: Event) => this.showFullView(e, volunteerProject, '#volunteer')}">...See More</a>
            </div>
          </div>
        </div>
    `;
  }

  private showFullView(event: Event, data: Blog | VolunteerProjects, backLink: string) {
    event.preventDefault();
    this.fullViewData = data;
    this.backLink = backLink;
    this.currentView = 'full-view';
  }

  private goBack(event: Event) {
    event.preventDefault();
    this.currentView = 'main';
  }

  private closeModal(event: Event) {
    event.preventDefault();
    this.currentView = 'main';
  }

  private handleNavClick(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href) {
      window.location.hash = href;
    }
  }
}