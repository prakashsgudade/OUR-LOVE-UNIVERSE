const loveDays = {
    // --- DAY 1-4: BLUR REVEAL + PARTICLES ---
    "1": {
        title: "Pehli Nazar ❤️",
        message: "Wo din jab duniya badal gayi...",
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/our-song.mp3",
        voice: "assets/audio/muskan-message.mp3.mpeg",
        theme: "#d4af37", // Gold Theme
        particles: "hearts",
        hidden: "Secret: Tum meri ho!"
    },
    "2": {
        title: "The Beginning",
        message: "Jahan se sab shuru hua...",
        image: "assets/images/photo2.jpg",
        song: "assets/audio/our-song.mp3",
        theme: "#ff4d6d", // Pink Theme
        particles: "hearts",
        hidden: "I missed you today."
    },
    "3": {
        title: "3D Galaxy of Us 🌌",
        message: "Aaj hum sitaron ke beech hain...",
        image: "assets/images/photo3.jpg",
        song: "assets/audio/romantic-bg.mp3",
        theme: "#6a11cb", // Purple Theme
        particles: "stars", // Sitare girenge
        hidden: "You are my universe."
    },
    "4": {
        title: "Hamari Secret Memory 🔐",
        message: "Ye pal mere dil ke sabse kareeb hai...",
        image: "assets/images/photo4.jpg",
        song: "assets/audio/romantic-piano.mp3",
        theme: "#00d2ff", // Blue Theme
        effect: "snow", // Snow girenge
        hidden: "Secret: Main tumhe kabhi nahi khona chahta."
    },

    // --- DAY 5: SCRATCH CARD EFFECT ---
    "5": {
        title: "A Hidden Surprise 🎁",
        message: "Kuch yaadein milti nahi, dhoondni padti hain. Isse scratch karo...",
        image: "assets/images/photo5.jpg",
        song: "assets/audio/surprise.mp3",
        theme: "#ffcc00",
        layout: "scratch-card", 
        particles: "hearts",
        hidden: "Surprise! I love you more than yesterday."
    },

    // --- DAY 6: VIRTUAL HUG (LONG PRESS) ---
    "6": {
        title: "A Virtual Hug ❤️",
        message: "Photo ko hold karke rakho (Long Press) meri dhadkan mehsoos karne ke liye...",
        image: "assets/images/photo6.jpg", 
        song: "assets/audio/heart-beat.mp3",
        theme: "#ff4d6d",
        layout: "virtual-hug", 
        particles: "hearts",
        hidden: "I'm always here for you, my queen! 🤗"
    },

    // --- DAY 7: INFINITY PORTAL (DOUBLE TAP) ---
    "7": {
        title: "Forever & Always",
        message: "Double tap karo dher saare pyaar ke liye... Happy Valentine's Day! ❤️",
        image: "assets/images/photo7.jpg", 
        song: "audio/love-muskan.mp3",
        theme: "#e63946",
        layout: "infinity-portal", 
        particles: "stars",
        hidden: "Will you be my Valentine forever? 💍"
    },

    // --- DAY 8+: NEW LAYOUTS (GALLERY & PLAYER) ---
    "8": {
        title: "Our Gallery",
        message: "Muskan, look at these smiles...",
        layout: "gallery",
        theme: "#ff4d6d",
        items: [
            { img: "assets/images/m1.jpg", cap: "Pehli Mulakat" },
            { img: "assets/images/m2.jpg", cap: "Late Night Talks" },
            { img: "assets/images/m3.jpg", cap: "Special Moment" }
        ]
    },
    "9": {
        title: "The Beat of My Heart",
        message: "Ye gaana sunte hi tumhari yaad aati hai.",
        layout: "music-player",
        image: "assets/images/muskan-profile.jpg",
        song: "assets/audio/special.mp3",
        theme: "#8b5cf6"
    }
};
