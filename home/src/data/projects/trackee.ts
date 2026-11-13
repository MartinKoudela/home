import type { Project } from "../types";

const project: Project = {
  slug: "trackee",
  name: "Trackee",
  category: "web",
  tagline: "Team project management, Laravel",
  meta: "Team project management platform: teams, kanban boards, shared calendar, task assignments, comments and notifications.",
  summary: "Team project management: teams, kanban boards, shared calendar, assignments, comments, notifications.",
  description: "A modern team collaboration and project management platform designed to streamline workflow and boost productivity. Users can create and join teams, set up projects with detailed task breakdowns, and track progress through intuitive kanban boards. The platform includes a shared calendar system for scheduling deadlines and meetings, customizable user profiles, and real-time collaboration features. Team members can assign tasks, set priorities, add comments, and receive notifications about updates. The clean, minimalist interface ensures users stay focused on what matters most - getting work done.",
  links: {},
  specs: [
    { label: "Stack", value: "Laravel, Tailwind, MySQL, JavaScript, Blade, REST API" },
  ],
  figures: [
    {
      image: "trackee1",
      alt: "Trackee dashboard with project, team, task and friend counters, projects and reminders",
      caption: "Dashboard",
    },
    {
      image: "trackee2",
      alt: "Trackee user profile with avatar, about section and tags",
      caption: "User profile",
    },
  ],
};

export default project;
