// 1. Static Memories (Day 1 to 10) - Fixed as requested
const loveDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi...", image: "assets/images/home/m1.jpg", song: "assets/audio/ring/s1.mp3", theme: "#d4af37", particles: "hearts", layout: "classic", hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui...", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", particles: "hearts", layout: "classic", hidden: "Tumhare messages ka wait karna favourite hai." },
    "3": { title: "3D Galaxy of Us 🌌", message: "Mere liye sirf tum chamakti ho.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", particles: "stars", layout: "galaxy-scroll", hidden: "You are my universe, Muskan." },
    "4": { title: "Secret Memory 🔐", message: "Ye photo ek ehsas hai.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", particles: "snow", layout: "mystery-letter", hidden: "Main waada karta hoon hath nahi chhodunga." },
    "5": { title: "A Hidden Surprise 🎁", message: "Ise scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Surprise! Love you more." },
    "6": { title: "The Soul Hug ❤️", message: "Hold photo (Long Press).", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "I'm always holding you. 🤗" },
    "7": { title: "Forever & Always 💍", message: "Click karo pyaar barasta hai!", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Will you be my Valentine? ❤️" },
    "8": { title: "Our Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/m2.jpg", cap: "Sath Hamesha" }], particles: "hearts" },
    "9": { title: "Soulmate Beats 🎵", message: "Official anthem!", layout: "music-player", image: "assets/images/muskan-profile.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6", particles: "bubbles" },
    "10": { title: "My Final Promise 👑", message: "Aaj 10 din pure ho gaye.", image: "assets/images/final-photo.jpg", song: "assets/audio/song.mp3", theme: "#d4af37", particles: "hearts", layout: "classic", hidden: "I love you words se zyada. ❤️" }
};

// 2. The Mega Engine (Day 11 - 5000)
function getDayData(dayId) {
    if (loveDays[dayId]) return loveDays[dayId];

    const d = parseInt(dayId);
    
    // Assets Logic (Cycling m1-m120 and s1-s60)
    const imgPath = `assets/images/home/m${(d % 120) + 1}.jpg`;
    const songPath = `assets/audio/ring/s${(d % 60) + 1}.mp3`;

    // 🚀 Huge Library for Infinite Mix
    const categories = ["Emotional", "Thriller", "AI-Future", "Mini-Game", "Cinematic", "Money-Growth", "Hidden-Secret", "Cyberpunk", "Vintage", "Nature-Mood"];
    
    const titles = [
        "First Meet Reality", "Unknown Caller", "AI Love Predictor", "Secret Letter", "Future Vision 2030", 
        "3AM Secret Diary", "The Glitch in Love", "Mood Analyzer", "Memory Puzzle", "Neon Nights",
        "Our Dream House", "Unknown Number Calling", "Hologram of Us", "100 Reasons Why", "Rainy Confession",
        "Silent Voice Note", "Deep Night Mystery", "Our Startup Idea", "Travel Bucket List", "Invisible Text"
    ];

    const layouts = ["classic", "cinematic-dark", "ai-scanner", "mystery-letter", "scratch-card", "virtual-hug", "infinity-portal", "galaxy-scroll", "retro-typewriter", "floating-love"];
    const themes = ["#ff4d6d", "#00d2ff", "#6a11cb", "#d4af37", "#2ecc71", "#e63946", "#8b5cf6", "#f39c12", "#000000", "#ffffff"];
    const effects = ["hearts", "stars", "snow", "bubbles", "rain", "glitch", "fireflies", "confetti"];

    // 🧠 Multi-Layer Seeded Logic (Ensures unique combo for every single day)
    const cat = categories[d % categories.length];
    const title = titles[d % titles.length];
    const layout = layouts[(d * 3) % layouts.length]; // Multiplier makes it different from title index
    const theme = themes[(d * 7) % themes.length];
    const effect = effects[(d * 5) % effects.length];
    
    const messagePool = [
        `Muskan, Day ${dayId} hamari mohabaat ka ek naya panna hai. Aaj ki vibe ${cat} hai.`,
        `Kya tumne socha tha hum Day ${dayId} tak itne maze karenge? Har pal tumhara hai.`,
        `System Scan for Day ${dayId}: Muskan's smile is still my favorite thing.`,
        `Aaj ka din humari future success aur goals ke naam. Together forever.`,
        `Secret Note: Day ${dayId} par bhi mera dil sirf tumhare liye dhadakta hai.`
    ];

    return {
        title: `${title} | Day ${dayId}`,
        message: messagePool[d % messagePool.length],
        image: imgPath,
        song: songPath,
        theme: theme,
        layout: layout,
        particles: effect,
        hidden: `Day ${dayId} Secret: Hamari love story blockbuster hai! 🔥`
    };
}
