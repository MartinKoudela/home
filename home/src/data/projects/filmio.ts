import type { Project } from "../types";

const project: Project = {
  slug: "filmio",
  name: "Filmio",
  category: "web",
  tagline: "Film club web app, PHP",
  meta: "Film club web app built as a school project: film catalog, screening votes, ratings and reviews, role-based access.",
  summary: "Film club web app: catalog, screening votes, ratings and reviews, role-based access.",
  description: "A school project: a film club web application. The platform allows movie enthusiasts to create accounts, join the club community, and participate in shared movie watching sessions. Members can browse the film catalog, vote on upcoming screenings, and discuss movies with other members. The admin dashboard provides complete control over the film database, user management, and scheduling of watch sessions. Features include user authentication with role-based access, a rating and review system, and a clean interface optimized for easy navigation.",
  links: {},
  specs: [
    { label: "Stack", value: "PHP, MySQL, Tailwind, HTML, Authentication" },
  ],
  figures: [
    {
      image: "filmio1",
      alt: "Filmio admin panel with a form for adding a film and a club health summary",
      caption: "Admin panel",
    },
    {
      image: "filmio2",
      alt: "Filmio member dashboard with membership details and the film catalog",
      caption: "Member dashboard",
    },
  ],
};

export default project;
