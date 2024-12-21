import { TemplateResult, html } from "lit";

type Link = {
  name: string;
  link: string;
}
export type Blog = {
  name: string,
  description: string | TemplateResult,
  image?: string,
  links: Link[]
}
export const blogs: Blog[] = [

]