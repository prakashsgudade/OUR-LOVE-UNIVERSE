const loveDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi...", image: "assets/images/home/m1.jpg", theme: "#1a1a2e", accent: "#d4af37", layout: "classic", song: "assets/audio/ring/s1.mp3" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui...", image: "assets/images/home/m2.jpg", theme: "#2d3436", accent: "#ff4d6d", layout: "glass-card", song: "assets/audio/ring/s2.mp3" },
    "3": { title: "Pehli Baat 💬", message: "Wo ghanto ki baatein...", image: "assets/images/home/m3.jpg", theme: "#000000", accent: "#70a1ff", layout: "retro-typewriter", song: "assets/audio/ring/s3.mp3" },
    "4": { title: "Special Bond 🔗", message: "Dil ke rishte...", image: "assets/images/home/m4.jpg", theme: "#1e272e", accent: "#55efc4", layout: "classic", song: "assets/audio/ring/s4.mp3" },
    "5": { title: "Surprise for You 🎁", message: "Hamesha khush raho Muskan.", image: "assets/images/home/m5.jpg", theme: "#2c3e50", accent: "#a29bfe", layout: "glass-card", song: "assets/audio/ring/s5.mp3" },
    "6": { title: "My Favorite 👑", message: "Tum jaisa koi nahi.", image: "assets/images/home/m6.jpg", theme: "#1a1a2e", accent: "#fab1a0", layout: "hologram", song: "assets/audio/ring/s6.mp3" },
    "7": { title: "Prayer (Dua) 🌙", message: "Tujhe Rab se maanga hai.", image: "assets/images/home/m7.jpg", theme: "#000000", accent: "#d4af37", layout: "islamic-moon", song: "assets/audio/ring/s7.mp3" },
    "8": { title: "Infinite Love ♾️", message: "Sath hamesha ka...", image: "assets/images/home/m8.jpg", theme: "#212121", accent: "#ff4d6d", layout: "classic", song: "assets/audio/ring/s8.mp3" },
    "9": { title: "Soulmate ❤️", message: "100% Match Found.", image: "assets/images/home/m9.jpg", theme: "#1a1a2e", accent: "#70a1ff", layout: "ai-hud", song: "assets/audio/ring/s9.mp3" },
    "10": { title: "Milestone 👑", message: "10 din ka haseen safar.", image: "assets/images/home/m10.jpg", theme: "#000000", accent: "#d4af37", layout: "galaxy-stars", song: "assets/audio/ring/s10.mp3" }
};

function getDayData(dayId) {
    if (loveDays[dayId]) return loveDays[dayId];
    
    const d = parseInt(dayId);
    const themes = ["#1a1a2e", "#000000", "#1e272e", "#2c3e50", "#212121"];
    const accents = ["#d4af37", "#ff4d6d", "#70a1ff", "#55efc4", "#a29bfe", "#fab1a0"];
    const layouts = ["islamic-moon", "ai-hud", "retro-typewriter", "glass-card", "hologram", "minimal-zen", "galaxy-stars", "dna-scan"];

    const islamicQuotes = ["Allah ki sabse haseen nemat ho tum.", "Meri har dua Muskan se shuru hoti hai.", "Qadr ne humein milaya, Shukr hai us Rab ka.", "May Allah keep your smile eternal.", "Tum meri wo dua ho jo qubool ho gayi."];
    const loveQuotes = ["System Check: Soulmate detected.", "Day " + d + " and still falling for you.", "101% Match Found in my Universe.", "Thinking of you... Error 404: Heart not found (It's with you).", "Muskan, you are my digital jannat."];
    
    return {
        dayId: d,
        title: d % 2 === 0 ? "Muskan's Grace ✨" : "Haseen Ehsaas 🌙",
        message: d % 3 === 0 ? islamicQuotes[d % islamicQuotes.length] : loveQuotes[d % loveQuotes.length],
        image: `assets/images/home/m${(d % 150) + 1}.jpg`,
        song: `assets/audio/ring/s${(d % 100) + 1}.mp3`,
        theme: themes[d % themes.length],
        accent: accents[d % accents.length],
        layout: layouts[d % layouts.length],
        hidden: `Secret: Day ${d} par bhi tumhara hi khayal hai! ❤️`
    };
}
