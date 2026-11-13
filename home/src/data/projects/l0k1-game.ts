import type { Project } from "../types";

const project: Project = {
  slug: "l0k1-game",
  name: "l0k1 Game",
  category: "web",
  tagline: "3D browser horror game, Three.js",
  family: "l0k1 family · Game",
  meta: "Browser-based 3D horror game set in a hacker's apartment. The in-game OS has a terminal, a file manager and hacking tools.",
  summary: "Browser-based 3D horror game set in a hacker's apartment. The in-game OS has a terminal, a file manager and hacking tools.",
  links: { source: "https://github.com/MartinKoudela/L0k1-game" },
  specs: [
    { label: "Genre", value: "3D horror, browser" },
    { label: "In-game OS", value: "Terminal, file manager, hacking tools" },
    { label: "Audio", value: "Positional" },
    { label: "AI", value: "Enemy AI" },
    { label: "Assets", value: "60+ GLTF models" },
    { label: "Stack", value: "Three.js, TypeScript, Vite" },
  ],
  figures: [
    {
      image: "l0k1",
      alt: "In-game view of the hacker's apartment, with a laptop showing the in-game OS terminal",
      caption: "In-game OS terminal",
    },
  ],
};

export default project;
