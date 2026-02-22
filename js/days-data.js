const loveDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi...", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", theme: "#d4af37", particles: "hearts", hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui...", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", particles: "hearts", hidden: "Tumhare messages ka wait karna favourite hai." },
    "3": { title: "3D Galaxy of Us 🌌", message: "Mere liye sirf tum chamakti ho.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", particles: "stars", hidden: "You are my universe, Muskan." },
    "4": { title: "Secret Memory 🔐", message: "Ye photo ek ehsas hai.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", particles: "snow", hidden: "Main waada karta hoon hath nahi chhodunga." },
    "5": { title: "A Hidden Surprise 🎁", message: "Ise scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Surprise! Love you more." },
    "6": { title: "The Soul Hug ❤️", message: "Hold photo (Long Press).", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "I'm always holding you. 🤗" },
    "7": { title: "Forever & Always 💍", message: "Click karo pyaar barasta hai!", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Will you be my Valentine? ❤️" },
    "8": { title: "Our Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/m2.jpg", cap: "Sath Hamesha" }] },
    "9": { title: "Soulmate Beats 🎵", message: "Official anthem!", layout: "music-player", image: "assets/images/muskan-profile.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6" },
    "10": { title: "My Final Promise 👑", message: "Aaj 10 din pure ho gaye.", image: "assets/images/final-photo.jpg", song: "assets/audio/song.mp3", theme: "#d4af37", particles: "hearts", hidden: "I love you words se zyada. ❤️" }
};

// DAY 11 TO 5000 GENERATOR
function getDayData(dayId) {
    if (loveDays[dayId]) return loveDays[dayId];

    const d = parseInt(dayId);
    const themes = ["#ff4d6d", "#6a11cb", "#00d2ff", "#d4af37", "#ffcc00", "#e63946", "#8b5cf6", "#2ecc71", "#f39c12", "#e84393"];
    const layouts = ["classic", "cinematic-dark", "ai-scanner", "floating-love", "mystery-letter", "galaxy-scroll", "retro-typewriter"];
    const effects = ["hearts", "stars", "snow", "rain", "bubbles", "glitch", "fireflies"];
    const songs = ["love1.mp3", "love2.mp3", "romantic.mp3", "soulmate.mp3"];

    // Seeded selection (Fixed randomness for each day)
    const theme = themes[d % themes.length];
    const layout = layouts[d % layouts.length];
    const effect = effects[d % effects.length];
    
    return {
        title: `Day ${dayId}: Infinite Journey`,
        message: `Muskan, aaj hamara safar naye mod par hai. Day ${dayId} aur hamari mohabbat aur geheri ho gayi hai. Tum sirf meri ho.`,
        image: `assets/images/memory${(d % 15) + 1}.jpg`,
        song: `assets/audio/${songs[d % songs.length]}`,
        theme: theme,
        layout: layout,
        particles: effect,
        hidden: `Day ${dayId} Secret: Har dhadkan mein tera naam hai.`
    };
}
