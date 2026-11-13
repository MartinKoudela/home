type Letter = { el: HTMLElement; value: number };

function mount(name: HTMLElement, ambient: boolean) {
  const letters: Letter[] = [...name.querySelectorAll<HTMLElement>("i")].map((el) => ({ el, value: 0 }));
  let x = 0;
  let y = 0;
  let held = false;
  let visible = true;
  let raf = 0;

  const frame = (time: number) => {
    const active = held || (ambient && visible);
    const reach = parseFloat(getComputedStyle(name).fontSize) * (held || !ambient ? 1.15 : 1.5);

    if (ambient && !held) {
      const box = name.getBoundingClientRect();
      x = box.left + box.width * (0.5 + 0.48 * Math.sin(time * 0.00058));
      y = box.top + box.height * (0.5 + 0.34 * Math.sin(time * 0.00041 + 1.3));
    }

    const targets = letters.map(({ el }) => {
      if (!active) return 0;
      const rect = el.getBoundingClientRect();
      const distance = Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
      const k = Math.max(0, 1 - distance / reach);
      return k * k * (3 - 2 * k);
    });

    let busy = false;
    letters.forEach((letter, i) => {
      letter.value += (targets[i] - letter.value) * 0.16;
      if (Math.abs(targets[i] - letter.value) > 0.002) busy = true;
      else letter.value = targets[i];

      letter.el.style.setProperty("--weight", (640 - 240 * letter.value).toFixed(1));
      letter.el.style.setProperty("--width", (125 - 25 * letter.value).toFixed(2));
    });

    raf = busy || active ? requestAnimationFrame(frame) : 0;
  };

  const wake = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  const follow = (event: PointerEvent) => {
    x = event.clientX;
    y = event.clientY;
    held = true;
    wake();
  };

  const release = () => {
    held = false;
    wake();
  };

  name.addEventListener("pointermove", follow);
  name.addEventListener("pointerleave", release);

  if (ambient) {
    name.addEventListener("pointerdown", follow);
    name.addEventListener("pointerup", release);
    name.addEventListener("pointercancel", release);

    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    }).observe(name);
  }
}

document.addEventListener("astro:page-load", () => {
  const name = document.querySelector<HTMLElement>("[data-lens]");
  if (!name) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  mount(name, !matchMedia("(hover: hover) and (pointer: fine)").matches);
});
