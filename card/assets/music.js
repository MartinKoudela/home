const SPOTIFY_TRACKS = [
    "3L0IKstjUgDFVQAbQIRZRv",
    "7EcE5yCPVZaZut1JqowbcI",
    "4WTnkCanCfyzSA8D594iTC",
    "5aouTG8KHRJ5upbDdZEZ2q",
    "0pKBVMCnSSI6NOH0NNQTOH",
    "0WlvDshw1ezJTEx76Z9O2g",
    "22MycHhW2ii5EhaOcrOSMk",
    "3ZCU9IHWLxLexGq8fGQMLl",
    "2oHM9KAdFdFvDCaE4V6RST",
    "1h6kgem1ai8vUgO1rZOwfB",
    "01Lr5YepbgjXAWR9iOEyH1",
    "3ErKDCabFp6P9Ze9clgZAh",
];

(() => {
    const host = document.getElementById("player");
    const gate = document.getElementById("gate");
    const ids = SPOTIFY_TRACKS.map((t) => (t.match(/([A-Za-z0-9]{22})(?:\?|$)/) || [])[1]).filter(Boolean);
    if (!host || !ids.length) return;
    const uri = `spotify:track:${ids[Math.floor(Math.random() * ids.length)]}`;
    let controller = null;
    let wanted = false;

    const play = () => {
        if (controller && wanted) controller.play();
    };

    const enter = () => {
        if (document.documentElement.classList.contains("entered")) return;
        document.documentElement.classList.add("entered");
        window.dispatchEvent(new Event("enter"));
        wanted = true;
        play();
    };

    if (gate) gate.addEventListener("click", enter);
    else enter();

    window.onSpotifyIframeApiReady = (api) => {
        api.createController(host, { uri, width: "100%", height: 80, theme: "dark" }, (c) => {
            controller = c;
            c.addListener("ready", play);
        });
    };

    const s = document.createElement("script");
    s.src = "https://open.spotify.com/embed/iframe-api/v1";
    s.async = true;
    document.head.appendChild(s);
})();
