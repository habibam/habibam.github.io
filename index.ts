import * as d3 from 'd3';
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
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
    `;
  }

  private renderModal() {
    if (!this.fullViewData) return html``;

    const { name, description, links } = this.fullViewData;
    return html`
      <div class="modal" @click="${this.closeModal}">
        <div class="modal-content" @click="${(e: Event) => e.stopPropagation()}">
          <a class="back-link" href="#" @click="${this.goBack}">Back</a>
          <div class="title">${name}</div>
          <div class="description">${description}</div>
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

  private link(name: string, link: string) {
    return html`<a class='upper' href=${link} target="_blank">${name}</a>`;
  }

  private renderBlogs() {
    return repeat(blogs, blog => this.renderBlog(blog));
  }

  private renderBlog(blog: Blog) {
    const links = blog.links.map(link => html`<div>${this.link(link.name, link.link)}</div>`);
    return html`
      <div class='title'>${blog.name}</div>
      <div class='blog'>
        <a class='img-holder' href="#" @click="${(e: Event) => this.showFullView(e, blog, '#blog')}">
          <img src="./images/${blog.image}"></img>
        </a>
        <div class='info font-sm'>
          <div>${typeof blog.description === 'string' ? blog.description.substring(0, 160) : blog.description}...</div>
          <div>${links}</div>
        </div>
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
            <div>${typeof volunteerProject.description === 'string' ? volunteerProject.description.substring(0, 160) : volunteerProject.description}...</div>
            <div>${links}</div>
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
