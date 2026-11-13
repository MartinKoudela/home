import type { Project } from "../types";

const project: Project = {
  slug: "laravix-cms",
  name: "Laravix",
  category: "web",
  tagline: "Open-source multi-tenant CMS, Laravel",
  descriptor: "Laravel · multi-tenant CMS",
  meta: "Open-source multi-tenant CMS: each site is an isolated tenant, delivered through a Blade theme or a token-authenticated REST API.",
  summary: "Open-source multi-tenant CMS. Each site is an isolated tenant with its own content, users, media and theme, delivered through a Blade theme or a token-authenticated REST API.",
  status: "In active development",
  links: { source: "https://github.com/MartinKoudela/laravix-cms", website: "https://laravix.com" },
  specs: [
    { label: "Stack", value: "Laravel, PHP, Filament" },
    { label: "Builder", value: "GrapesJS, 45+ extendable blocks" },
    { label: "Search", value: "Meilisearch" },
    {
      label: "Source",
      value: "github.com/MartinKoudela/laravix-cms",
      href: "https://github.com/MartinKoudela/laravix-cms",
    },
    { label: "Status", value: "In active development" },
  ],
  diagram: {
    caption: "Laravix tenancy and delivery",
    nodes: [
      {
        t: "grid",
        cards: [
          { title: "Tenant A", lines: ["content, users, media, theme"] },
          { title: "Tenant B", lines: ["content, users, media, theme"] },
          { title: "Tenant n", lines: ["isolated site"] },
        ],
      },
      { t: "arrow" },
      {
        t: "card",
        card: {
          title: "Laravix",
          lines: [
            "Laravel, PHP, Filament",
            "GrapesJS builder, 45+ extendable blocks",
            "Revisions, scheduled publishing",
            "Meilisearch, tenant-aware SEO",
            "Plugin registries",
          ],
          tint: true,
        },
      },
      { t: "arrow" },
      {
        t: "grid",
        cards: [
          { title: "Blade theme", lines: ["server-rendered site"] },
          { title: "REST API", lines: ["headless, token-authenticated"] },
        ],
      },
    ],
  },
  figures: [
    {
      image: "laravix-dashboard",
      alt: "Laravix admin dashboard with counts for sites, published pages and posts, drafts and media files, above a Recent Content table listing titles, type, status and update time",
      caption: "Admin dashboard: managed sites, published content, drafts and media counts, recent content",
    },
    {
      image: "laravix-pages",
      alt: "Laravix Pages list table with title, slug, language (CS or EN), published status and update time, and edit, preview, duplicate and delete actions on the highlighted row",
      caption: "Pages list: slugs, CS/EN language versions, publish status and row actions",
    },
    {
      image: "laravix-builder",
      alt: "Laravix visual page builder with the homepage hero headline selected for editing, a text toolbar above it and a style manager panel with layout, spacing, typography and background sections on the right",
      caption: "Visual page builder (GrapesJS): editing the homepage hero, style manager on the right",
    },
    {
      image: "laravix-seo",
      alt: "Laravix SEO settings form with meta title, default meta description, OG image, Google site verification and robots.txt fields",
      caption: "SEO settings: default meta description, OG image, robots.txt",
    },
  ],
};

export default project;
