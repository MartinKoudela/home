const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

function escape(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function rich(text: string): string {
  return escape(text).replace(LINK, '<a href="$2">$1</a>');
}

export function bareUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
