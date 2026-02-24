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
    const layouts = ["heart-sync", "weather-ai", "dna-scanner", "reflection-mode", "thought-reader", "parallel-timeline", "islamic-noor"];
    const layout = layouts[d % layouts.length];
    
    // Base data
    const data = {
        dayId: d,
        layout: layout,
        image: `assets/images/home/m${(d % 15) + 1}.jpg`,
        song: `assets/audio/ring/s${(d % 10) + 1}.mp3`,
        theme: ["#ff4d6d", "#70a1ff", "#1e272e", "#d4af37", "#a29bfe"][d % 5],
        particles: ["hearts", "stars", "snow", "petals"][d % 4]
    };

    // Idea-specific content
    if(layout === "heart-sync") {
        data.title = "Heart Sync Engine";
        data.message = "Cursor move karo... mera dil tumhare motion se dhadakta hai.";
    } else if(layout === "weather-ai") {
        data.title = "Emotional Weather AI";
        data.message = "Aaj mausam-e-ishq hai. Kya tumhe baarish mehsoos ho rahi hai?";
        data.particles = "snow"; 
    } else if(layout === "dna-scanner") {
        data.title = "Soul DNA Scan";
        data.message = "Analyzing Compatibility... Result: Muskan is my Eternal Soulmate.";
    } else if(layout === "thought-reader") {
        data.title = "Mind Reader Mode";
        const lines = ["Abhi tum muskura rahi ho na?", "Tum soch rahi ho hamari agli mulakat kab hogi.", "Dil ki baat: Tum meri duniya ho."];
        data.message = lines[d % lines.length];
    } else if(layout === "islamic-noor") {
        data.title = "Noor-e-Haya ✨";
        data.message = "Naseeb mein tumhara hona Allah ka sabse bada karam hai.";
        data.theme = "#d4af37";
    } else {
        data.title = `Chapter ${d}: Infinity Love`;
        data.message = "Har guzarta din hamare ishq ko aur gehra kar raha hai.";
    }

    data.hidden = `Secret Day ${d}: Mera sukoon sirf tum ho Muskan.`;
    return data;
}
