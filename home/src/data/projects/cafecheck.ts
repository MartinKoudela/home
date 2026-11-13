import type { Project } from "../types";

const project: Project = {
  slug: "cafecheck",
  name: "Cafecheck",
  category: "web",
  tagline: "Café review site, JavaScript",
  meta: "Private café review site for Zlín and surroundings: atmosphere, coffee, food and overall vibe, with personal photos.",
  summary: "Private café review site for Zlín and surroundings.",
  description: "A personal passion project for documenting and sharing experiences at local coffee shops in Zlín and surrounding areas. The website features subjective reviews covering atmosphere, coffee quality, food options, and overall vibe of each location. Each review includes personal photos capturing the unique character of the cafes, along with practical information like opening hours and location. Built as a non-public platform for personal use and sharing with friends who share the same appreciation for good coffee and cozy spaces.",
  links: {},
  specs: [
    { label: "Stack", value: "JavaScript, Bootstrap, EmailJS, HTML, CSS" },
  ],
  figures: [
    {
      image: "cafecheck1",
      alt: "Cafecheck homepage reading Welcome to Café reviews, Zlín and surroundings",
      caption: "Homepage",
    },
    {
      image: "cafecheck2",
      alt: "Cafecheck review page with filters and café photos",
      caption: "Café review listing",
    },
  ],
};

export default project;
