import type { Category } from "./types";

export const site = {
  name: "Martin Koudela",
  url: "https://martinkoudela.com",
  title: "Martin Koudela | Backend, Robotics & Hardware",
  description:
    "Martin Koudela, backend developer and robotics programmer from Zlín. Laravel platforms, a Unitree G1 humanoid at SYNOT ICT and ESP32-S3 hardware designed in KiCad.",
  share:
    "Backend developer and robotics programmer from Zlín. Laravel platforms, a humanoid robot and the hardware in between.",
  lede: "I build Laravel platforms, program a humanoid robot and design the hardware in between.",
  location: "Zlín, Czech Republic",
  email: "mk@martinkoudela.com",
  github: "MartinKoudela",
  year: 2026,
};

export const facts = [
  { label: "Role", value: "Robotics programmer, SYNOT ICT" },
  { label: "Studies", value: "IT, secondary school, Zlín" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/MartinKoudela" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/martin-koudela-a5b645343/" },
  { label: "Instagram", href: "https://www.instagram.com/koudy_martin/" },
];

export const featured = [
  { slug: "unitree-g1", image: "g1-robot", caption: "Unitree G1 EDU, 10+ public demos" },
  { slug: "laravix-cms", image: "laravix-builder", caption: "Visual builder, in active development" },
  { slug: "esp32-pentesting-tool", image: "l0k1-scheme", caption: "Root sheet, Rev v0.1" },
  { slug: "rpi-cam", image: "raspivision-unit", caption: "Raspberry Pi 4, PIR trigger, MJPEG live view" },
  { slug: "backlog", image: "backlog-today", caption: "Today screen", phone: true },
  { slug: "l0k1-game", image: "l0k1", caption: "In-game OS with a working terminal" },
];

export const about = [
  "IT student and part-time robotics programmer at SYNOT ICT, where I program a Unitree G1 humanoid and take it to public events, Barum Czech Rally included.",
  "The rest of the time I ship web software, mostly Laravel: Laravix, an open-source multi-tenant CMS, plus client sites. And I solder: ESP32-S3 boards drawn in KiCad and Raspberry Pi vision systems.",
];

export const kit = [
  { label: "Web & apps", value: "Laravel, Filament, Next.js, FastAPI, REST APIs, SwiftUI" },
  { label: "Robotics & hardware", value: "Unitree G1, Raspberry Pi 4/5, ESP32-S3, KiCad, OpenCV, YOLO" },
  { label: "Networking", value: "Tailscale, Cloudflare, Wireshark, Cisco Packet Tracer" },
  { label: "Security", value: "nmap, Burp Suite, Metasploit, phishing analysis" },
];

export const categories: Record<Category, string> = {
  web: "Web & apps",
  hardware: "Robotics & hardware",
  security: "Security",
};
