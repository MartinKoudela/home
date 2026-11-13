document.addEventListener("astro:page-load", () => {
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-copy]")) {
    const label = button.textContent;
    const value = button.dataset.copy!;

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copied";
        button.classList.add("done");
        setTimeout(() => {
          button.textContent = label;
          button.classList.remove("done");
        }, 1600);
      } catch {
        location.href = `mailto:${value}`;
      }
    });
  }
});
