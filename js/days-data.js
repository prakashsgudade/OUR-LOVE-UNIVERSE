const loveDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi...", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", theme: "#d4af37", layout: "classic", hidden: "Pata hai? Usi din dil ne keh diya tha..." },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui...", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", layout: "classic", hidden: "Tumhare messages ka wait karna..." },
    // ... (Day 3-10 yahan add kar lein)
    "10": { title: "My Final Promise 👑", message: "10 din pure hue, par pyaar sadiyon ka hai.", image: "assets/images/final-photo.jpg", song: "assets/audio/our-song.mp3", theme: "#d4af37", layout: "classic", hidden: "I love you forever." }
};

// Auto-Generator for Day 11 to 5000
const themes = ["#FF1493", "#00BFFF", "#32CD32", "#FFD700", "#8A2BE2", "#FF4500", "#00FA9A", "#FF69B4"];
const layouts = ["classic", "split-view", "3d-card", "gallery", "music-player"];

for (let i = 11; i <= 5000; i++) {
    loveDays[i] = {
        title: `Day ${i}: Eternal Love`,
        message: `Humare sath ka din ${i}. Har guzarta lamha mujhe ye yaad dilata hai ki tum meri zindagi ki sabse badi khushi ho.`,
        image: `assets/images/memories/img${(i % 20) + 1}.jpg`,
        song: "assets/audio/our-song.mp3",
        theme: themes[i % themes.length],
        layout: layouts[i % layouts.length],
        particles: i % 2 === 0 ? "stars" : "hearts",
        hidden: `Day ${i} secret: Tum hamesha meri rahogi Muskan! ❤️`
    };
}
