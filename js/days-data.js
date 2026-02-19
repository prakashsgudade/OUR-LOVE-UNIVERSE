/**
 * LOVE-UNIVERSE: Days Data System
 * Day 1-10: Manual Entries
 * Day 11-5000: Auto-Generated Infinite System
 */

const manualDays = {
    "1": { 
        title: "Pehli Nazar ❤️", 
        message: "Wo din jab duniya badal gayi... Jab maine tumhe pehli baar dekha, tab samajh aaya ki 'Sukoon' kise kehte hain.", 
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/our-song.mp3", 
        voice: "assets/audio/muskan-message.mp3.mpeg", 
        theme: "#d4af37", 
        particles: "hearts", 
        hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" 
    },
    "2": { 
        title: "The Beginning ✨", 
        message: "Dhire-dhire humari baatein shuru hui, aur har guzarne wala din tumhari yaadon se bharne laga.", 
        image: "assets/images/photo2.jpg", 
        song: "assets/audio/love-marrige.mp3", 
        theme: "#ff4d6d", 
        particles: "hearts", 
        hidden: "Tumhare messages ka wait karna aaj bhi mera favourite kaam hai." 
    },
    "3": { 
        title: "3D Galaxy of Us 🌌", 
        message: "Is puri duniya mein karodo log hain, lekin mere liye sirf tum chamakti ho. My only gravity.", 
        image: "assets/images/photo3.jpg", 
        song: "assets/audio/meri-mallika.mp3", 
        theme: "#6a11cb", 
        particles: "stars", 
        hidden: "You are my universe, Muskan." 
    },
    "4": { 
        title: "Secret Memory 🔐", 
        message: "Ye photo sirf ek image nahi, ek ehsas hai. Ye wo pal hai jise main duniya se chhupa kar rakhna chahta hoon.", 
        image: "assets/images/photo4.jpg", 
        song: "assets/audio/ilove-u.mp3", 
        theme: "#00d2ff", 
        effect: "snow", 
        hidden: "Main waada karta hoon, tumhara hath kabhi nahi chhodunga." 
    },
    "5": { 
        title: "A Hidden Surprise 🎁", 
        message: "Hamari mohabbat bilkul is card jaisi hai... Ise scratch karo!", 
        image: "assets/images/photo5.jpg", 
        song: "assets/audio/wistel5.mp3", 
        theme: "#ffcc00", 
        layout: "scratch-card", 
        particles: "hearts", 
        hidden: "Surprise! Har din tumse aur zyada mohabbat ho jati hai." 
    },
    "6": { 
        title: "The Soul Hug ❤️", 
        message: "Bas is photo ko hold karna (Long Press). Mehsus karna ki main wahi tumhare paas hoon...", 
        image: "assets/images/photo6.jpg", 
        song: "assets/audio/janeman7.mp3", 
        theme: "#ff4d6d", 
        layout: "virtual-hug", 
        particles: "hearts", 
        hidden: "I'm always holding you in my heart. 🤗" 
    },
    "7": { 
        title: "Forever & Always 💍", 
        message: "Photo par click karo aur dekho hamara pyaar kaise barasta hai!", 
        image: "assets/images/photo7.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#e63946", 
        layout: "infinity-portal", 
        particles: "stars", 
        hidden: "Will you be my Valentine forever? ❤️" 
    },
    "8": { 
        title: "Our Mini Universe 📸", 
        message: "Look at these smiles! Every picture tells a story of us.", 
        layout: "gallery", 
        theme: "#ff4d6d", 
        items: [
            { img: "assets/images/home/m1.jpg", cap: "Pehli Mulakat" }, 
            { img: "assets/images/home/m2.jpg", cap: "Sath Hamesha" }
        ] 
    },
    "9": { 
        title: "Soulmate Beats 🎵", 
        message: "Ye gaana humara official anthem hai! Jab bhi sunta hoon, tumhari yaad aati hai.", 
        layout: "music-player", 
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/love10.mp3", 
        theme: "#8b5cf6" 
    },
    "10": { 
        title: "My Final Promise 👑", 
        message: "Aaj 10 din pure ho gaye, par mera pyaar har lamha badh raha hai. Ye toh bas shuruat hai.", 
        image: "assets/images/photo2.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#d4af37", 
        particles: "hearts", 
        hidden: "I love you more than words can ever say, Muskan. ❤️" 
    }
};

// --- AUTO GENERATOR ENGINE ---
const loveDays = {
    get: function(d) {
        // Agar Day 1-10 hai toh manual wala return karo
        if (manualDays[d]) return manualDays[d];
        
        // Day 11 se 5000 ke liye Random logic (Seeded by Day ID)
        const dayNum = parseInt(d);
        const seed = dayNum * 12345;
        const random = (i) => Math.abs(Math.sin(seed + i));
        
        const themes = ["#ff4d6d", "#d4af37", "#00d2ff", "#6a11cb", "#e63946", "#8b5cf6", "#ff9f43"];
        const effects = ["hearts", "stars", "snow"];
        const emotionalMsgs = [
            "Tumhari yaad mere chehre par muskan le aati hai. Har din tumse aur zyada mohabbat hoti hai.",
            "Agar tum mil jao, toh zamana chhod denge hum. Tu meri duniya ka sabse haseen hissa hai.",
            "Log kehte hain pyaar ek baar hota hai, par mujhe toh tumse har roz hota hai.",
            "Tumhara sath hona hi mere liye sabse badi jeet hai. Hamesha mere paas rehna.",
            "Zindagi mein sab kuch mil sakta hai, par tumhare jaisa sukoon kahi nahi mil sakta."
        ];
        const secretMsgs = [
            "Pata hai? Aaj bhi tumhari purani baatein padh kar akela muskurata hoon. ❤️",
            "Meri har dua mein sirf tumhara naam hota hai. Hamesha.",
            "I promise, main hamesha tumhara hath thame rahunga, chahe kuch bhi ho jaye.",
            "You are my favorite notification! 😍",
            "Main bas ye batana chahta tha ki tum mere liye kitni special ho."
        ];

        // Final Object for Day 11+
        return {
            title: `Chapter ${d}: Infinite Us`,
            message: emotionalMsgs[Math.floor(random(1) * emotionalMsgs.length)],
            image: "assets/images/home/m1.jpg", // Default path requested
            song: "assets/audio/ring/s1.mp3",    // Default path requested
            theme: themes[Math.floor(random(2) * themes.length)],
            particles: effects[Math.floor(random(3) * effects.length)],
            hidden: secretMsgs[Math.floor(random(4) * secretMsgs.length)]
        };
    }
};
