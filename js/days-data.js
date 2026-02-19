function getDayData(id) {
    const d = parseInt(id);
    const seed = d * 1.618; // Golden Ratio for randomness
    const random = (max) => Math.floor((Math.abs(Math.sin(seed) * 10000) % 1) * max) + 1;

    // Assets setup as per your paths
    const imgNum = random(120);     // m1.jpg to m120.jpg
    const songNum = (d % 10) + 1;   // s1.mp3 to s10.mp3
    
    const themes = [
        { name: "Royal Gold", accent: "#d4af37", bg: "rgba(20, 20, 20, 0.95)" },
        { name: "Deep Rose", accent: "#ff4d6d", bg: "rgba(15, 5, 5, 0.95)" },
        { name: "Imperial Purple", accent: "#a855f7", bg: "rgba(10, 0, 15, 0.95)" },
        { name: "Oceanic Blue", accent: "#0ea5e9", bg: "rgba(0, 10, 20, 0.95)" },
        { name: "Emerald Queen", accent: "#10b981", bg: "rgba(5, 15, 10, 0.95)" }
    ];

    const theme = themes[d % themes.length];
    const layouts = ["royal-center", "modern-split", "minimal-elegant"];

    const quotes = [
        "Tum meri saltanat ki malika ho.",
        "Har saans mein tera hi aks basta hai.",
        "Duniya ki sabse qimti cheez? Tumhari muskurahat.",
        "Hamara ishq sitaron ki tarah amar hai.",
        "Sadiyan beet jayein, mera pyaar wahi rahega."
    ];

    return {
        title: `Chapter ${d}: The Royal Tale`,
        message: quotes[d % quotes.length],
        image: `../assets/images/home/m${imgNum}.jpg`,
        song: `../assets/audio/ring/s${songNum}.mp3`,
        theme: theme.accent,
        bg: theme.bg,
        layout: layouts[d % layouts.length],
        particles: (d % 2 === 0) ? "hearts" : "stars",
        hidden: `Special Note for Day ${d}: Muskan, tum mere liye khuda ka sabse bada tohfa ho. ❤️`
    };
}
