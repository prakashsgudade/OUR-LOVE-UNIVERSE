const loveDays = {

    // =========================
    // DAY 1–10 EXACT SAME
    // =========================

    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi... Jab maine tumhe pehli baar dekha...", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", voice: "assets/audio/muskan-message.mp3.mpeg", theme: "#d4af37", particles: "hearts", hidden: "Yehi hai wo!" },

    "2": { title: "The Beginning ✨", message: "Har din tumhari yaadon se bharne laga...", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", particles: "hearts", hidden: "Tumhara wait favourite kaam hai." },

    "3": { title: "3D Galaxy 🌌", message: "Meri gravity sirf tum ho.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", particles: "stars", hidden: "You are my universe." },

    "4": { title: "Secret Memory 🔐", message: "Ye ek ehsas hai.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", effect: "snow", hidden: "Hath kabhi nahi chhodunga." },

    "5": { title: "Hidden Surprise 🎁", message: "Scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Har din zyada pyaar." },

    "6": { title: "Soul Hug ❤️", message: "Long press...", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "Always holding you." },

    "7": { title: "Forever 💍", message: "Click karo...", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Valentine forever?" },

    "8": { title: "Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/m2.jpg", cap: "Sath Hamesha" }] },

    "9": { title: "Soulmate Beats 🎵", message: "Official anthem!", layout: "music-player", image: "assets/images/muskan-profile.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6" },

    "10": { title: "Final Promise 👑", message: "Pyaar badh raha hai.", image: "assets/images/final-photo.jpg", song: "", theme: "#d4af37", particles: "hearts", hidden: "I love you ❤️" }

};



// ==========================================
// DAY 11 – 5000 ULTRA ROYAL AUTO GENERATION
// ==========================================

const royalThemes = [
"#CDA434","#8E44AD","#1ABC9C","#FF6B6B",
"#F39C12","#2ECC71","#E84393","#2980B9",
"#E67E22","#9B59B6","#16A085","#D35400"
];

const royalLayouts = [
"classic",
"virtual-hug",
"infinity-portal",
"music-player"
];

const royalMessages = [
"Tum meri har subah ka pehla khayal ho ❤️",
"Aaj ka din sirf tumhare naam 👑",
"Main har roz tumse dobara pyaar karta hoon.",
"Agar duniya khatam ho jaye, main tumhare sath rehna chahunga.",
"Tum meri kahani ka sabse royal chapter ho.",
"Har din tum meri dua ban kar aati ho.",
"Tum meri zindagi ka golden era ho ✨",
"Meri har saans tumhara naam leti hai.",
"Main waqt ko rok deta agar tum muskurao.",
"Har din ek naya ehsaas tumhare liye."
];

for (let i = 11; i <= 5000; i++) {

    let theme = royalThemes[i % royalThemes.length];
    let layout = royalLayouts[i % royalLayouts.length];
    let message = royalMessages[i % royalMessages.length];

    // Random image 1–120
    let imgIndex = (i % 120) + 1;

    // Random music 1–400
    let musicIndex = (i % 400) + 1;

    let title = `Day ${i} – Royal Memory 👑`;

    // Special Milestones
    if (i % 1000 === 0) {
        title = `🔥 Day ${i} – KING & QUEEN MOMENT`;
        layout = "infinity-portal";
    }

    if (i % 365 === 0) {
        title = `💍 Day ${i} – Eternal Anniversary`;
        layout = "virtual-hug";
    }

    if (i % 100 === 0) {
        title = `✨ Day ${i} – Century of Love`;
    }

    loveDays[i] = {
        title: title,
        message: message,
        image: `../assets/images/home/m${imgIndex}.jpg`,
        song: `../assets/audio/ring/s${musicIndex}.mp3`,
        theme: theme,
        layout: layout,
        particles: (i % 2 === 0) ? "hearts" : "stars",
        hidden: "Har din tum meri Queen ho ❤️"
    };
}
