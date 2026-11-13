export type Category = "web" | "hardware" | "security";

export type Card = {
  title: string;
  lines?: string[];
  inline?: boolean;
  tint?: boolean;
  planned?: boolean;
  mono?: boolean;
};

export type DiagramNode =
  | { t: "card"; card: Card }
  | { t: "arrow"; size?: number }
  | { t: "grid"; cards: Card[] }
  | { t: "band"; label: string; tint?: boolean; nodes: DiagramNode[]; note?: string }
  | { t: "note"; text: string }
  | { t: "pair"; left: Card; right: Card }
  | { t: "narrow"; nodes: DiagramNode[] };

export type Spec = { label: string; value: string; note?: string; href?: string };

export type Figure = { image: string; alt: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  family?: string;
  descriptor?: string;
  badge?: "Preliminary" | "End of life";
  meta: string;
  summary: string;
  description?: string;
  status?: string;
  context?: string;
  links: { source?: string; website?: string };
  specs: Spec[];
  diagram?: { caption: string; nodes: DiagramNode[] };
  steps?: { title: string; text: string }[];
  parts?: { label: string; value: string }[];
  figures: Figure[];
};
