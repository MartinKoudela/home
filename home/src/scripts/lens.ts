type Letter = { el: HTMLElement; value: number; target: number };

function mount(name: HTMLElement) {
  const letters: Letter[] = [...name.querySelectorAll<HTMLElement>("i")].map((el) => ({ el, value: 0, target: 0 }));
  let x = 0;
  let y = 0;
  let inside = false;
  let raf = 0;

  const frame = () => {
    const reach = parseFloat(getComputedStyle(name).fontSize) * 1.15;
    let busy = false;

    for (const letter of letters) {
      if (inside) {
        const rect = letter.el.getBoundingClientRect();
        const distance = Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
        const k = Math.max(0, 1 - distance / reach);
        letter.target = k * k * (3 - 2 * k);
      } else {
        letter.target = 0;
      }

      letter.value += (letter.target - letter.value) * 0.16;
      if (Math.abs(letter.target - letter.value) > 0.002) busy = true;
      else letter.value = letter.target;

      letter.el.style.setProperty("--weight", (640 - 240 * letter.value).toFixed(1));
      letter.el.style.setProperty("--width", (125 - 25 * letter.value).toFixed(2));
    }

    raf = busy || inside ? requestAnimationFrame(frame) : 0;
  };

  const wake = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  name.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    inside = true;
    wake();
  });

  name.addEventListener("pointerleave", () => {
    inside = false;
    wake();
  });
}

document.addEventListener("astro:page-load", () => {
  const name = document.querySelector<HTMLElement>("[data-lens]");
  if (!name) return;
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  mount(name);
});
