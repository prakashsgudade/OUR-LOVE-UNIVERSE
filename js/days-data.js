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
    const adj = ["Haseen", "Roohani", "Noori", "Anmol", "Jadui", "Infinite", "Dilkash"];
    const noun = ["Ehsaas", "Safar", "Dastan", "Kainaat", "Duniya", "Sapna", "Haqeeqat"];
    const flow = ["ka naya panna", "ki ek subah", "ki anant dosti", "ka noor", "ka haseen tohfa"];
    
    const thoughts = ["Abhi tum mere baare mein soch rahi ho?", "Kya aaj tumne khud ka khayal rakha?", "Tumhare bina sab adhura hai.", "Mashallah, hamara ishq salamat rahe."];
    const layouts = ["heart-sync", "weather-ai", "dna-scanner", "thought-reader", "islamic-noor", "retro-typewriter"];
    
    const layout = layouts[d % layouts.length];
    return {
        dayId: d,
        layout: layout,
        title: `${adj[d % adj.length]} ${noun[(d+2) % noun.length]}`,
        message: `Muskan, hamari ${noun[d % noun.length]} ${flow[(d+1) % flow.length]}.`,
        image: `../assets/images/home/m${(d % 150) + 1}.jpg`,
        song: `../assets/audio/ring/s${(d % 100) + 1}.mp3`,
        theme: ["#ff4d6d", "#70a1ff", "#1e272e", "#d4af37", "#a29bfe"][d % 5],
        particles: ["hearts", "stars", "snow", "petals"][d % 4],
        hidden: thoughts[d % thoughts.length]
    };
}
