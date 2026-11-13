import type { Project } from "../types";

const project: Project = {
  slug: "football-photogallery",
  name: "Football Photogallery",
  category: "web",
  tagline: "Client photo archive, Laravel",
  meta: "Client football photogallery: match-based photo archive, curated highlights and a photographer upload dashboard.",
  summary: "Client project. Match-based photo archive, curated highlights, photographer upload dashboard.",
  description: "A bespoke football photogallery platform developed for a client, designed to showcase match photography in an elegant and organized way. The platform features a photographer-focused dashboard for easy photo uploads and management, a curated highlights section displaying the best shots, and a comprehensive match-based photo archive where visitors can browse galleries organized by individual games. Built with performance in mind, the site handles large image collections efficiently while maintaining a clean, modern user interface.",
  links: { website: "https://www.slavicinfotky.cz/" },
  specs: [
    { label: "Stack", value: "Laravel, MySQL, Tailwind, PHP, Blade" },
  ],
  figures: [
    {
      image: "fotbal",
      alt: "Photogallery homepage with photo, match and comment counters and featured matches",
      caption: "Homepage with featured matches",
    },
    {
      image: "fotbal2",
      alt: "Grid of match galleries, each with a cover photo, date and score",
      caption: "Match archive",
    },
    {
      image: "fotbal3",
      alt: "Single match page with the score and a grid of photos",
      caption: "Match gallery",
    },
    {
      image: "fotbal4",
      alt: "Full-screen photo viewer showing a goalkeeper diving, with thumbnails below",
      caption: "Photo viewer",
    },
  ],
};

export default project;
