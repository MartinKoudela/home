import type { Project } from "../types";

const project: Project = {
  slug: "rpi-cam",
  name: "RaspiVision",
  category: "hardware",
  tagline: "Raspberry Pi security camera, YOLOv8",
  descriptor: "Raspberry Pi 4 · security camera",
  meta: "Raspberry Pi 4 security camera: a PIR sensor triggers YOLOv8 detection, clips from a circular H264 buffer go to a web gallery, plus a live MJPEG stream.",
  summary: "Security camera on a Raspberry Pi 4. A PIR sensor detects motion and triggers YOLOv8 detection of people, animals and objects; clips are saved from a circular H264 buffer and browsable in a web gallery, with a live MJPEG stream.",
  status: "Completed",
  context: "Annual school project",
  links: { source: "https://github.com/MartinKoudela/rpi-cam" },
  specs: [
    {
      label: "Board",
      value: "Raspberry Pi 4 Model B",
      note: "BCM2711, quad-core Cortex-A72 @ 1.8 GHz",
    },
    { label: "Memory", value: "4 GB" },
    {
      label: "Camera",
      value: "Camera Module 3 NoIR",
      note: "12 MP Sony IMX708, no IR filter; CSI-2 via 15-pin ribbon",
    },
    { label: "Motion sensor", value: "HW-416 PIR" },
    {
      label: "Detection",
      value: "YOLOv8",
      note: "People, animals and objects; runs when the PIR sensor detects motion",
    },
    { label: "Recording", value: "Circular H264 buffer" },
    { label: "Live view", value: "MJPEG", note: "FastAPI backend" },
    { label: "Stream", value: "640×420, 42 FPS", note: "Live view overlay" },
    { label: "Web UI", value: "Vanilla JS" },
    { label: "Remote access", value: "Tailscale", note: "No ports exposed to the internet" },
    { label: "Schematic", value: "KiCad" },
    { label: "Status", value: "Completed", note: "Annual school project" },
  ],
  diagram: {
    caption: "System diagram. Shaded block runs on the Pi.",
    nodes: [
      {
        t: "grid",
        cards: [
          { title: "Camera", lines: ["Camera Module 3 NoIR"] },
          { title: "Motion", lines: ["PIR sensor"] },
        ],
      },
      { t: "arrow" },
      {
        t: "card",
        card: {
          title: "Raspberry Pi 4",
          lines: [
            "YOLOv8 detection:",
            "people, animals, objects",
            "",
            "Circular H264 buffer",
            "",
            "FastAPI",
          ],
          tint: true,
        },
      },
      { t: "arrow" },
      {
        t: "grid",
        cards: [
          { title: "Live view", lines: ["MJPEG stream"] },
          { title: "Recordings", lines: ["clips from buffer"] },
        ],
      },
      { t: "arrow" },
      {
        t: "grid",
        cards: [
          { title: "Web UI", lines: ["vanilla JS"] },
          { title: "Gallery", lines: ["in the web UI"] },
        ],
      },
    ],
  },
  steps: [
    {
      title: "Capture",
      text: "A Raspberry Pi Camera Module 3 NoIR supplies the video feed. An HW-416 PIR sensor reports motion.",
    },
    {
      title: "Detection",
      text: "When the PIR sensor detects motion, YOLOv8 runs on the Pi 4 and detects people, animals and objects.",
    },
    {
      title: "Recording",
      text: "Footage goes into a circular H264 buffer, so the most recent stretch is always kept. Clips are saved from the buffer and can be browsed in a web gallery.",
    },
    {
      title: "Live view",
      text: "A FastAPI backend serves a live MJPEG stream to a web UI written in vanilla JavaScript.",
    },
    {
      title: "Remote access",
      text: "The web UI is reached over Tailscale. No ports are exposed to the internet.",
    },
  ],
  parts: [
    { label: "Raspberry Pi 4 Model B", value: "Detection, recording, web server" },
    { label: "Camera Module 3 NoIR", value: "Video input" },
    { label: "HW-416 PIR motion sensor", value: "Motion input" },
  ],
  figures: [
    {
      image: "raspivision-front-plate",
      alt: "Black front plate held in a hand, with the camera module board and the blue HW-416 PIR sensor board mounted on the back, CSI ribbon and jumper wires attached",
      caption: "Front plate during assembly: Camera Module 3 NoIR and HW-416 PIR sensor",
    },
    {
      image: "raspivision-schematic",
      alt: "KiCad schematic: Raspberry Pi 4 40-pin GPIO header, Camera Module 3 NoIR on a 15-pin CSI connector, and the HW-416 PIR sensor connected to +5V, GPIO17 and GND",
      caption: "KiCad schematic: Raspberry Pi 4 GPIO header, Camera Module 3 NoIR via 15-pin CSI ribbon, HW-416 PIR sensor",
    },
    {
      image: "raspivision-sample-frame",
      alt: "Camera snapshot of a desk with a monitor, a laptop and posters on the wall, date and time stamped in the top-left corner",
      caption: "Snapshot from the camera with timestamp overlay",
    },
    {
      image: "raspivision-live",
      alt: "RaspiVision web UI in live view: camera stream of a desk with date, 42 FPS and 640×420 in the overlay, Snapshot and Record buttons on the right",
      caption: "Web UI, live view: MJPEG stream, 640×420 at 42 FPS, snapshot and record controls",
    },
    {
      image: "rpi",
      alt: "Camera frame with YOLOv8 bounding boxes labelled Martin, Phone and Cup",
      caption: "Detection output with labelled bounding boxes",
    },
    {
      image: "rpi2",
      alt: "RaspiVision web UI listing recorded clips in a grid",
      caption: "Web UI, recordings gallery",
    },
  ],
};

export default project;
