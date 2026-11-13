import type { Project } from "../types";

const project: Project = {
  slug: "hey-l0k1",
  name: "hey-l0k1",
  category: "hardware",
  tagline: "Voice assistant, ESP32-S3",
  family: "l0k1 family · Assistant",
  badge: "Preliminary",
  meta: "Personal voice assistant built around an ESP32-S3: ReSpeaker mic array, I2S speaker amplifier and a round touch display for an animated face (planned).",
  summary: "Personal voice assistant built around an ESP32-S3: ReSpeaker mic array, I2S speaker amplifier and a round touch display for an animated face (planned).",
  status: "Schematic complete, hardware partially soldered",
  links: {},
  specs: [
    { label: "MCU", value: "ESP32-S3" },
    { label: "Microphones", value: "ReSpeaker (XMOS XU316), I2S" },
    {
      label: "Display",
      value: "GC9A01 round display with touch (SPI, touch over I2C), for an animated face (planned)",
    },
    { label: "Audio", value: "MAX98357 I2S amplifier, 1 W 8 Ω speaker" },
    { label: "Power", value: "IP5306 charge/boost, battery cell, SPDT power switch" },
    { label: "Schematic", value: "KiCad 10, 1 sheet" },
    {
      label: "Status",
      value: "PRELIMINARY: schematic complete, hardware partially soldered, software not started",
    },
  ],
  figures: [
    {
      image: "hey-l0k1-schematics",
      alt: "KiCad schematic of hey-l0k1: ESP32-S3 module in the centre, ReSpeaker microphone board on the I2S bus, MAX98357 amplifier driving a 1 W 8 Ω speaker, GC9A01 round display on SPI with touch on I2C, and IP5306 power management",
      caption: "hey-l0k1 schematic: ESP32-S3, ReSpeaker mic array, GC9A01 round touch display, MAX98357 amplifier, IP5306 power",
    },
  ],
};

export default project;
