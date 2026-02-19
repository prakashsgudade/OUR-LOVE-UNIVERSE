/**
 * 📁 js/days-data.js
 * Complete Data for Day 1 to Day 5000
 */

// Day 1 to 10: Manual Personal Memories
const manualDays = {
    "1": { 
        title: "Pehli Nazar ❤️", 
        message: "Wo din jab duniya badal gayi... Jab maine tumhe pehli baar dekha, tab samajh aaya ki 'Sukoon' kise kehte hain.", 
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/our-song.mp3", 
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
        particles: "snow", 
        hidden: "Main waada karta hoon, tumhara hath kabhi nahi chhodunga." 
    },
    "5": { 
        title: "A Hidden Surprise 🎁", 
        message: "Hamari mohabbat bilkul is card jaisi hai... Ise scratch karo!", 
        image: "assets/images/photo5.jpg", 
        song: "assets/audio/wistel5.mp3", 
        theme: "#ffcc00", 
        particles: "hearts", 
        hidden: "Surprise! Har din tumse aur zyada mohabbat ho jati hai." 
    },
    "6": { 
        title: "The Soul Hug ❤️", 
        message: "Bas is photo ko hold karna. Mehsus karna ki main wahi tumhare paas hoon...", 
        image: "assets/images/photo6.jpg", 
        song: "assets/audio/janeman7.mp3", 
        theme: "#ff4d6d", 
        particles: "hearts", 
        hidden: "I'm always holding you in my heart. 🤗" 
    },
    "7": { 
        title: "Forever & Always 💍", 
        message: "Photo par click karo aur dekho hamara pyaar kaise barasta hai!", 
        image: "assets/images/photo7.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#e63946", 
        particles: "stars", 
        hidden: "Will you be my Valentine forever? ❤️" 
    },
    "8": { 
        title: "Our Mini Universe 📸", 
        message: "Look at these smiles! Every picture tells a story of us.", 
        image: "assets/images/home/m1.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#ff4d6d", 
        particles: "hearts",
        hidden: "Hamesha sath rahenge." 
    },
    "9": { 
        title: "Soulmate Beats 🎵", 
        message: "Ye gaana humara official anthem hai! Jab bhi sunta hoon, tumhari yaad aati hai.", 
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/love10.mp3", 
        theme: "#8b5cf6",
        particles: "stars",
        hidden: "Music sounds better with you."
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

// --- AUTO GENERATOR SYSTEM (Day 11 to 5000) ---
const loveDays = {
    get: function(d) {
        // Return manual content for Day 1-10
        if (manualDays[d]) return manualDays[d];
        
        // Randomization logic based on Day Number
        const dayNum = parseInt(d);
        const seed = dayNum * 0.5;
        const rand = (i) => {
            const x = Math.sin(seed + i) * 10000;
            return x - Math.floor(x);
        };
        
        const themes = ["#ff4d6d", "#d4af37", "#00d2ff", "#6a11cb", "#e63946"];
        const effects = ["hearts", "stars", "snow"];
        const emotionalMsgs = [
            "Tumhari yaad mere chehre par muskan le aati hai. Har din tumse aur zyada mohabbat hoti hai.",
            "Zindagi mein sab kuch mil sakta hai, par tumhare jaisa sukoon kahi nahi mil sakta.",
            "Log kehte hain pyaar ek baar hota hai, par mujhe toh tumse har roz hota hai.",
            "Agar tum mil jao, toh zamana chhod denge hum. Tu meri duniya ka sabse haseen hissa hai.",
            "Tumhara sath hona hi mere liye sabse badi jeet hai. Hamesha mere paas rehna."
        ];
        const secrets = [
            "Aaj bhi tumhari awaaz sun kar mere chehre par muskan aa jati hai. ❤️",
            "I promise, main hamesha tumhara hath thame rahunga, chahe kuch bhi ho jaye.",
            "You are my favorite notification! 😍",
            "Pata hai? Mera sabse favourite kaam tumhare baare mein sochna hai."
        ];

        return {
            title: "Day " + d + ": Infinite Us",
            message: emotionalMsgs[Math.floor(rand(1) * emotionalMsgs.length)],
            image: "assets/images/home/m1.jpg", // Default image as requested
            song: "assets/audio/ring/s1.mp3",    // Default music as requested
            theme: themes[Math.floor(rand(2) * themes.length)],
            particles: effects[Math.floor(rand(3) * effects.length)],
            hidden: secrets[Math.floor(rand(4) * secrets.length)]
        };
    }
};
