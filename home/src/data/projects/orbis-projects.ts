import type { Project } from "../types";

const project: Project = {
  slug: "orbis-projects",
  name: "Orbis Projects",
  category: "web",
  tagline: "Student project showcase, Laravel, Filament",
  meta: "Student project showcase for ORBIS Zlín. Students build their own Blade/Tailwind themes; Filament admin, REST API. Personal initiative, not an assignment.",
  summary: "Student project showcase for ORBIS Zlín. Students build their own Blade/Tailwind themes; Filament admin, REST API. Personal initiative, not an assignment.",
  description: "A student project showcase platform built for ORBIS Zlín, designed to give students a professional stage to present their work. The platform features a unique theme system where students design and build their own custom Blade templates using Tailwind CSS, maintaining full creative control over how their projects are displayed. Administrators manage project data, taxonomies, and media through a modern Filament dashboard, while a REST API enables dynamic filtering and browsing. Built as a personal initiative during my studies — not a school assignment, but a real tool built to fill a real need.",
  links: { source: "https://github.com/MartinKoudela/orbis-projects", website: "https://orbis.cz" },
  specs: [
    { label: "Stack", value: "Laravel, PHP, Filament, Tailwind, REST API, Blade" },
  ],
  figures: [
    {
      image: "orbis-projects",
      alt: "Orbis Projects listing student projects as cards, with filters for year, class and project type",
      caption: "Project listing with filters",
    },
  ],
};

export default project;
