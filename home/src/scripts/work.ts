document.addEventListener("astro:page-load", () => {
  const list = document.querySelector("[data-work]");
  if (!list) return;

  const rows = [...list.querySelectorAll("a")];
  const pick = (active: HTMLAnchorElement) => rows.forEach((row) => row.classList.toggle("on", row === active));

  for (const row of rows) {
    row.addEventListener("pointerenter", () => pick(row));
    row.addEventListener("focus", () => pick(row));
  }
});
