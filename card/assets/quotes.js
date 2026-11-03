const QUOTES = [
    ["rockin-1.png", "rockin-2.png"],
    "chief-keef-2012.png",
    "fr3aky.png",
    "lead-never-follow.png",
    "swagilicious.png",
    "1bf23c1adbbf88c6f6125a06f5fd3231.jpg",
    "39045c20904bc98e44b852696e2960c1.jpg",
    "9e7b660a1941749e92c73e6b9712be50.jpg",
    "b7608933bf7ee93e6447a444ac1cc233.jpg",
    "f55e121da215869d31a345b60a448884.jpg",
    "0d1dca54ef154f984f9863d7188176dc.jpg",
    "0f3c36d428ee768862862bebf2884497.jpg",
    "1462b5bfaf88308a9556fe7e8343f991.jpg",
    "249421f9be85c3865eb87877181e79f8.jpg",
    "2ff12dd18f826a4bfc87dfa1469257e8.jpg",
    "36049a4b165576dfee2f894dbc390ca9.jpg",
    "489bd1bbdfbb8a350749ee7edee4f6ab.jpg",
    "6f67316cf326a62cd56f50180e3edf7a.jpg",
    "81bac3e24a60077c4a2a41bff09dc806.jpg",
    "953030b0a7db0fb25a5522063d625fb7.jpg",
    "d44bc89ce3f10a6cd7a48b0f807e9b7f.jpg",
    "ef81ac7ac621f3b75bcf06207404c173.jpg",
    "f49e127088d61fd6500ea39d6fee9147.jpg",
];

(() => {
    const DIR = "/assets/quotes/";
    const layer = document.getElementById("quotes");
    const files = QUOTES.map((q) => (Array.isArray(q) ? q : [q]).filter(Boolean)).filter((q) => q.length);
    if (!layer || !files.length) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const R = Math.random;
    const between = (a, b) => a + R() * (b - a);
    const ANCHORS_WIDE = [[11, 18], [9, 50], [12, 82], [89, 18], [91, 50], [88, 82], [50, 8]];
    const ANCHORS_NARROW = [[50, 10], [27, 69], [73, 69]];

    const narrow = () => innerWidth < 700;
    const anchors = () => (narrow() ? ANCHORS_NARROW : ANCHORS_WIDE);
    const maxActive = () => (narrow() ? 1 : 6);

    const active = new Set();
    const inUse = new Set();
    let lastQuote = -1, lastAnchor = -1;
    let clock = 0, prev = performance.now();
    const slots = [];

    const tick = () => {
        const now = performance.now();
        if (!document.hidden && document.documentElement.classList.contains("entered")) clock += (now - prev) / 1000;
        prev = now;
        for (const slot of slots) {
            if (clock >= slot.at && !slot.busy) run(slot);
        }
    };

    const protectedRects = () => ["h1", "nav", ".player"]
        .map((sel) => document.querySelector(sel))
        .filter(Boolean)
        .map((el) => {
            const r = el.getBoundingClientRect();
            const pad = 18;
            return { l: r.left - pad, t: r.top - pad, r: r.right + pad, b: r.bottom + pad };
        });

    const hits = (a, b) => a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;

    function place(ratio) {
        const W = innerWidth, H = innerHeight;
        const list = anchors();
        const blocked = protectedRects();
        const taken = [...active].map((q) => q.rect);
        const order = list.map((_, i) => i).filter((i) => i !== lastAnchor && ![...active].some((q) => q.anchor === i));
        order.sort(() => R() - 0.5);
        const base = narrow() ? Math.min(W * 0.46, 200) : Math.min(Math.max(W * 0.17, 170), 300);
        for (const i of order) {
            for (const shrink of [1, 0.8, 0.64, 0.5]) {
                const w = base * shrink;
                const h = w * ratio;
                if (h > H * 0.3) continue;
                const cx = (list[i][0] + between(-3.5, 3.5)) / 100 * W;
                const cy = (list[i][1] + between(-3.5, 3.5)) / 100 * H;
                const rect = { l: cx - w / 2, t: cy - h / 2, r: cx + w / 2, b: cy + h / 2 };
                if (rect.l < 10 || rect.t < 10 || rect.r > W - 10 || rect.b > H - 10) continue;
                if (blocked.some((b) => hits(rect, b)) || taken.some((b) => hits(rect, b))) continue;
                return { anchor: i, rect, w };
            }
        }
        return null;
    }

    const IN = [
        { opacity: 0, filter: "blur(18px) contrast(2.2) brightness(.45)", transform: "translateX(-2%) skewX(9deg) scaleY(1.18)" },
        { opacity: 0.55, filter: "blur(8px) contrast(1.7) brightness(.75)", transform: "translateX(1.5%) skewX(-5deg) scaleY(.95)", offset: 0.4 },
        { opacity: 0.8, filter: "blur(3px) contrast(1.3) brightness(.9)", transform: "translateX(-.5%) skewX(2deg) scaleY(1.03)", offset: 0.7 },
        { opacity: 1, filter: "blur(0) contrast(1) brightness(1)", transform: "none" }
    ];
    const GRAIN_IN = [{ opacity: 0.95 }, { opacity: 0.6, offset: 0.5 }, { opacity: 0 }];
    const FADE = [{ opacity: 0 }, { opacity: 1 }];

    const STEP = [
        { opacity: 0, filter: "blur(7px) contrast(1.5)" },
        { opacity: 1, filter: "blur(0) contrast(1)" }
    ];

    function animateIn(q) {
        const d = between(2000, 3000);
        if (reduce.matches) return q.frames.animate(FADE, { duration: d, easing: "ease-in-out", fill: "both" }).finished;
        q.grain.animate(GRAIN_IN, { duration: d, easing: "ease-out", fill: "both" });
        return q.frames.animate(IN, { duration: d, easing: "cubic-bezier(.3,.7,.2,1)", fill: "both" }).finished;
    }

    function animateOut(q) {
        const d = between(2000, 3000);
        if (reduce.matches) return q.frames.animate(FADE, { duration: d, easing: "ease-in-out", direction: "reverse", fill: "both" }).finished;
        q.grain.animate(GRAIN_IN, { duration: d, easing: "ease-in", direction: "reverse", fill: "both" });
        return q.frames.animate(IN, { duration: d, easing: "cubic-bezier(.8,0,.7,.3)", direction: "reverse", fill: "both" }).finished;
    }

    function stepIn(img) {
        const d = reduce.matches ? 1600 : between(600, 900);
        return img.animate(reduce.matches ? FADE : STEP, { duration: d, easing: "ease-out", fill: "both" }).finished;
    }

    const wait = (sec) => new Promise((res) => {
        const end = clock + sec;
        const check = () => (clock >= end ? res() : setTimeout(check, 250));
        check();
    });

    async function run(slot) {
        slot.busy = true;
        let qi = -1;
        try {
            if (active.size >= maxActive()) return;
            const pool = files.map((_, i) => i).filter((i) => !inUse.has(i) && (i !== lastQuote || files.length === 1));
            if (!pool.length) return;
            qi = pool[Math.floor(R() * pool.length)];
            inUse.add(qi);
            const imgs = files[qi].map((name) => {
                const img = new Image();
                img.alt = "";
                img.decoding = "async";
                img.src = DIR + name;
                return img;
            });
            try {
                await Promise.all(imgs.map((img) => img.decode()));
            } catch {
                return;
            }
            const first = imgs[0];
            const spot = place(first.naturalHeight / first.naturalWidth || 0.5);
            if (!spot || active.size >= maxActive()) return;
            lastQuote = qi;
            lastAnchor = spot.anchor;
            const box = document.createElement("div");
            box.className = "quote";
            box.style.left = `${spot.rect.l}px`;
            box.style.top = `${spot.rect.t}px`;
            box.style.width = `${spot.w}px`;
            const frames = document.createElement("div");
            frames.className = "frames";
            frames.append(first);
            const grain = document.createElement("i");
            box.append(frames, grain);
            layer.append(box);
            const q = { box, frames, grain, anchor: spot.anchor, rect: spot.rect };
            active.add(q);
            await animateIn(q);
            const total = between(3, 30);
            let spent = 0;
            for (const img of imgs.slice(1)) {
                const gap = between(2, 3);
                await wait(gap);
                spent += gap;
                img.style.opacity = "0";
                frames.append(img);
                await stepIn(img);
            }
            await wait(Math.max(3, total - spent));
            await animateOut(q);
            box.remove();
            active.delete(q);
        } finally {
            inUse.delete(qi);
            slot.at = clock + (narrow() ? between(15, 45) : between(2, 10));
            slot.busy = false;
        }
    }

    function clearAll() {
        for (const q of active) q.box.remove();
        active.clear();
    }

    let lastNarrow = narrow();
    window.addEventListener("resize", () => {
        if (narrow() !== lastNarrow) {
            lastNarrow = narrow();
            clearAll();
        }
    }, { passive: true });

    const paused = new Set();
    document.addEventListener("visibilitychange", () => {
        prev = performance.now();
        if (document.hidden) {
            for (const q of active) {
                for (const a of q.box.getAnimations({ subtree: true })) {
                    if (a.playState === "running") {
                        a.pause();
                        paused.add(a);
                    }
                }
            }
        } else {
            paused.forEach((a) => a.play());
            paused.clear();
        }
    });

    for (let i = 0; i < 6; i++) slots.push({ at: between(1, 4) + i * between(0.6, 2), busy: false });
    setInterval(tick, 250);
})();
