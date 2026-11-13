import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*.webp", { eager: true });

export function projectImage(name: string): ImageMetadata {
  const file = files[`../assets/projects/${name}.webp`];
  if (!file) throw new Error(`Missing project image: ${name}`);
  return file.default;
}

export function isPhone(image: ImageMetadata): boolean {
  return image.height > image.width * 1.8;
}
