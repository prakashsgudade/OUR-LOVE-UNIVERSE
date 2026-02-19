/**
 * 🌌 LOVE-UNIVERSE INFINITE ENGINE
 * Clean Professional Version
 * Manual Days: 1–10
 * Auto Days: 11–5000
 */

const TOTAL_DAYS = 5000;

/* ------------------------------
   🔹 MANUAL DAYS (1–10)
--------------------------------*/
const manualDays = {
    "1": {
        title: "Pehli Nazar ❤️",
        message: "Wo din jab duniya badal gayi...",
        image: "assets/images/photo1.jpg",
        song: "assets/audio/our-song.mp3",
        theme: "#d4af37",
        particles: "hearts",
        hidden: "Yehi hai wo ❤️"
    },
    "2": {
        title: "The Beginning ✨",
        message: "Dhire-dhire humari baatein shuru hui...",
        image: "assets/images/photo2.jpg",
        song: "assets/audio/love-marrige.mp3",
        theme: "#ff4d6d",
        particles: "hearts",
        hidden: "Tumhara wait aaj bhi favourite hai."
    },
    "3": {
        title: "3D Galaxy of Us 🌌",
        message: "Sirf tum hi meri gravity ho.",
        image: "assets/images/photo3.jpg",
        song: "assets/audio/meri-mallika.mp3",
        theme: "#6a11cb",
        particles: "stars",
        hidden: "You are my universe."
    },
    "4": {
        title: "Secret Memory 🔐",
        message: "Ek ehsas jo sirf hamara hai.",
        image: "assets/images/photo4.jpg",
        song: "assets/audio/ilove-u.mp3",
        theme: "#00d2ff",
        particles: "snow",
        hidden: "Main kabhi nahi chhodunga."
    },
    "5": {
        title: "Hidden Surprise 🎁",
        message: "Scratch karo aur dekho...",
        image: "assets/images/photo5.jpg",
        song: "assets/audio/wistel5.mp3",
        theme: "#ffcc00",
        layout: "scratch-card",
        particles: "hearts",
        hidden: "Har din aur zyada pyaar ❤️"
    },
    "6": {
        title: "Soul Hug ❤️",
        message: "Long press and feel me...",
        image: "assets/images/photo6.jpg",
        song: "assets/audio/janeman7.mp3",
        theme: "#ff4d6d",
        layout: "virtual-hug",
        particles: "hearts",
        hidden: "I'm always with you 🤗"
    },
    "7": {
        title: "Forever & Always 💍",
        message: "Click and feel the magic.",
        image: "assets/images/photo7.jpg",
        song: "assets/audio/love-muskan.mp3",
        theme: "#e63946",
        layout: "infinity-portal",
        particles: "stars",
        hidden: "Forever mine ❤️"
    },
    "8": {
        title: "Mini Universe 📸",
        layout: "gallery",
        theme: "#ff4d6d",
        items: [
            { img: "assets/images/home/m1.jpg", cap: "Memory 1" },
            { img: "assets/images/home/m2.jpg", cap: "Memory 2" }
        ]
    },
    "9": {
        title: "Soulmate Beats 🎵",
        layout: "music-player",
        image: "assets/images/home/m1.jpg",
        song: "assets/audio/love10.mp3",
        theme: "#8b5cf6"
    },
    "10": {
        title: "Final Promise 👑",
        message: "10 din pure ho gaye...",
        image: "assets/images/home/m1.jpg",
        song: "assets/audio/ring/s1.mp3",
        theme: "#d4af37",
        particles: "hearts",
        hidden: "I love you forever ❤️"
    }
};


/* ------------------------------
   🔹 INFINITE AUTO ENGINE
--------------------------------*/

const layouts = [
    "cinematic-call",
    "ai-letter",
    "fake-chat",
    "typing-suspense",
    "love-quiz",
    "memory-gallery",
    "music-vibe",
    "mini-game",
    "password-lock",
    "galaxy-neon",
    "letter-typewriter"
];

const themes = [
    "#ff4d6d",
    "#d4af37",
    "#00d2ff",
    "#6a11cb",
    "#00ff88",
    "#e63946"
];

const particlesPool = ["hearts", "stars", "snow", "rain"];

/* 🔹 Stable Seeded Random */
function seededRandom(seed, offset = 0) {
    const x = Math.sin(seed + offset) * 10000;
    return x - Math.floor(x);
}

/* 🔹 MASTER GET FUNCTION */
const loveDays = {
    get: function (day) {

        if (manualDays[day]) return manualDays[day];

        const dayNum = parseInt(day);
        const seed = dayNum * 999;

        const layout = layouts[dayNum % layouts.length];

        return {
            day: day,
            layout: layout,
            title: `Day ${day} — A New Chapter ❤️`,
            message: `Yeh Day ${day} hai... aur har baar tumhari yaad aur gehri hoti ja rahi hai.`,
            image: `assets/images/home/m${Math.floor(seededRandom(seed,1) * 120) + 1}.jpg`,
            song: `assets/audio/ring/s${Math.floor(seededRandom(seed,2) * 120) + 1}.mp3`,
            theme: themes[Math.floor(seededRandom(seed,3) * themes.length)],
            particles: particlesPool[Math.floor(seededRandom(seed,4) * particlesPool.length)],
            hidden: `Secret Day ${day}: Tum bina sab adhoora hai ❤️`,
            password: dayNum % 7 === 0 ? "muskan" : null
        };
    }
};
