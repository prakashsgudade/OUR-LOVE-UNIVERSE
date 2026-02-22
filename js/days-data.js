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

function getDayData(dayId) {
    if (loveDays[dayId]) return loveDays[dayId];
    const d = parseInt(dayId);
    
    const imgPath = `assets/images/home/m${(d % 150) + 1}.jpg`;
    const songPath = `assets/audio/ring/s${(d % 100) + 1}.mp3`;

    const categories = [
        { type: "emotional", titles: ["Soulmate Diary", "Rainy Confession", "100 Reasons"], layouts: ["classic", "mystery-letter"], themes: ["#ff4d6d", "#ef5777"] },
        { type: "thriller", titles: ["3AM Mystery", "Unknown Caller", "The Glitch"], layouts: ["cinematic-dark", "retro-typewriter"], themes: ["#1e272e", "#2c3e50"] },
        { type: "ai", titles: ["Love Scanner", "Future Vision", "AI Predictor"], layouts: ["ai-scanner", "galaxy-scroll"], themes: ["#00d2ff", "#10ac84"] }
    ];

    const cat = categories[d % categories.length];
    return {
        title: `${cat.titles[d % cat.titles.length]} | Day ${dayId}`,
        message: `Muskan, Day ${dayId} hamari kahani ka naya panna hai. Har pal tumhara hai.`,
        image: imgPath,
        song: songPath,
        theme: cat.themes[d % cat.themes.length],
        layout: cat.layouts[d % cat.layouts.length],
        particles: ["hearts", "stars", "snow", "glitch"][d % 4],
        hidden: `Day ${dayId} Secret: Mera har sapna tumse shuru hota hai.`
    };
}
