import type { Project } from "../types";

const project: Project = {
  slug: "rpi-ai-vision",
  name: "G1 vision unit",
  category: "hardware",
  tagline: "Person detection for the G1, Raspberry Pi 5",
  descriptor: "Raspberry Pi 5 · person detection and description",
  badge: "End of life",
  meta: "Retired vision unit for the Unitree G1: Raspberry Pi 5 person detection and tracking with a cloud VLM for descriptions, JSON output to the robot SDK.",
  summary: "Vision unit I built for the [Unitree G1](/project/unitree-g1): a Raspberry Pi 5 detected and tracked people, and a cloud vision-language model generated natural-language descriptions and responses, sent as JSON to the G1 robot SDK.",
  links: {},
  specs: [
    {
      label: "Status",
      value: "END OF LIFE — replaced on the G1 by a separate system I did not build",
    },
    { label: "Board", value: "Raspberry Pi 5; BCM2712, 4× Cortex-A76 @ 2.4 GHz" },
    { label: "Memory", value: "16 GB" },
    { label: "Storage", value: "500 GB HDD" },
    { label: "Language", value: "Python" },
    { label: "Camera", value: "Raspberry Pi Camera Module 3 NoIR" },
    { label: "VLM", value: "OpenAI Vision, with a context prompt system" },
    { label: "Detection", value: "YOLO; tracking with ByteTrack" },
    { label: "Output", value: "JSON for the G1 robot SDK; FastAPI stream" },
    { label: "Vision libraries", value: "MediaPipe, OpenCV" },
    { label: "Remote access", value: "Tailscale, used at events" },
  ],
  diagram: {
    caption: "Data flow. Shaded block ran on the Pi. As deployed until retirement.",
    nodes: [
      {
        t: "narrow",
        nodes: [
          { t: "card", card: { title: "Camera", lines: ["Camera Module 3 NoIR"] } },
          { t: "arrow" },
        ],
      },
      {
        t: "pair",
        left: {
          title: "Raspberry Pi 5",
          lines: ["YOLO + ByteTrack", "MediaPipe, OpenCV", "FastAPI"],
          tint: true,
        },
        right: { title: "OpenAI Vision", lines: ["descriptions, responses"] },
      },
      {
        t: "narrow",
        nodes: [
          { t: "arrow" },
        ],
      },
      {
        t: "grid",
        cards: [
          { title: "G1 robot SDK", lines: ["JSON"], mono: true },
          { title: "Browser", lines: ["FastAPI stream"] },
        ],
      },
      { t: "note", text: "Remote access at events was over Tailscale." },
    ],
  },
  figures: [],
};

export default project;
