/**
 * 📁 LOVE-UNIVERSE: Days Data System (Final & Complete)
 * ---------------------------------------------------
 * Day 1-10: Tera Manual Personal Content
 * Day 11-5000: Auto-Generated Cinematic Experience
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
        message: "Dhire-dhire humari baatein shuru hui, aur har guzarne wala din tumhari yaadon se bharne laga. Har message ek naya ehsas tha.", 
        image: "assets/images/photo2.jpg", 
        song: "assets/audio/love-marrige.mp3", 
        theme: "#ff4d6d", 
        particles: "hearts", 
        hidden: "Tumhare messages ka wait karna aaj bhi mera favourite kaam hai." 
    },
    "3": { 
        title: "3D Galaxy of Us 🌌", 
        message: "Is puri duniya mein karodo log hain, lekin mere liye sirf tum chamakti ho. My only gravity, my only star.", 
        image: "assets/images/photo3.jpg", 
        song: "assets/audio/meri-mallika.mp3", 
        theme: "#6a11cb", 
        particles: "stars", 
        hidden: "You are my universe, Muskan. Poori galaxy mein sirf tum!" 
    },
    "4": { 
        title: "Secret Memory 🔐", 
        message: "Ye photo sirf ek image nahi, ek ehsas hai. Ye wo pal hai jise main duniya se chhupa kar rakhna chahta hoon.", 
        image: "assets/images/photo4.jpg", 
        song: "assets/audio/ilove-u.mp3", 
        theme: "#00d2ff", 
        effect: "snow", 
        hidden: "Main waada karta hoon, tumhara hath kabhi nahi chhodunga, chahe raasta kaisa bhi ho." 
    },
    "5": { 
        title: "A Hidden Surprise 🎁", 
        message: "Hamari mohabbat bilkul is card jaisi hai... Ise scratch karo aur dekho andar kya chhupa hai!", 
        image: "assets/images/photo5.jpg", 
        song: "assets/audio/wistel5.mp3", 
        theme: "#ffcc00", 
        layout: "scratch-card", 
        particles: "hearts", 
        hidden: "Surprise! Har din tumse aur zyada mohabbat ho jati hai. You are my gift!" 
    },
    "6": { 
        title: "The Soul Hug ❤️", 
        message: "Bas is photo ko hold karna (Long Press). Mehsus karna ki main wahi tumhare paas hoon, tumhe gale lagaye huye...", 
        image: "assets/images/photo6.jpg", 
        song: "assets/audio/janeman7.mp3", 
        theme: "#ff4d6d", 
        layout: "virtual-hug", 
        particles: "hearts", 
        hidden: "I'm always holding you in my heart. 🤗 Sukoon sirf tumhare pas hai." 
    },
    "7": { 
        title: "Forever & Always 💍", 
        message: "Photo par click karo aur dekho hamara pyaar kaise barasta hai! Ye baarish kabhi khatam nahi hogi.", 
        image: "assets/images/photo7.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#e63946", 
        layout: "infinity-portal", 
        particles: "stars", 
        hidden: "Will you be my Valentine forever? ❤️ Mera aaj aur mera kal sirf tum ho." 
    },
    "8": { 
        title: "Our Mini Universe 📸", 
        message: "Look at these smiles! Har photo mein ek kahani hai, aur har kahani mein sirf hum hain.", 
        layout: "gallery", 
        theme: "#ff4d6d", 
        items: [
            { img: "assets/images/home/m1.jpg", cap: "Pehli Mulakat ki Khushi" }, 
            { img: "assets/images/home/m2.jpg", cap: "Hamesha Ka Sath" }
        ] 
    },
    "9": { 
        title: "Soulmate Beats 🎵", 
        message: "Ye gaana humara official anthem hai! Iski har beat mein tumhara naam sunayi deta hai.", 
        layout: "music-player", 
        image: "assets/images/photo1.jpg", 
        song: "assets/audio/love10.mp3", 
        theme: "#8b5cf6" 
    },
    "10": { 
        title: "My Final Promise 👑", 
        message: "Aaj 10 din pure ho gaye, par mera pyaar har lamha badh raha hai. Ye toh bas is sadi ki shuruat hai.", 
        image: "assets/images/photo2.jpg", 
        song: "assets/audio/love-muskan.mp3", 
        theme: "#d4af37", 
        particles: "hearts", 
        hidden: "I love you more than words can ever say, Muskan. Hamesha ke liye! ❤️" 
    }
};

// --- AUTO GENERATOR SYSTEM (Day 11 to 5000) ---
const loveDays = {
    get: function(d) {
        // Return manual content for Day 1-10
        if (manualDays[d]) return manualDays[d];
        
        // Logical Seed for Day 11+ (Day-based randomness)
        const dayNum = parseInt(d);
        const seed = dayNum * 0.12345;
        const rand = (i) => {
            const x = Math.sin(seed + i) * 10000;
            return x - Math.floor(x);
        };
        
        // Collections for variety
        const themes = ["#ff4d6d", "#d4af37", "#00d2ff", "#6a11cb", "#e63946", "#8b5cf6", "#00ff88", "#ff9f43"];
        const effects = ["hearts", "stars", "snow"];
        const layouts = ["classic", "scratch-card", "virtual-hug", "infinity-portal", "gallery"];
        
        const titles = [
            "Future Vision 🔮", "3AM Thoughts 🌙", "Secret Diary 📖", 
            "Agar Tum Mil Jati ✨", "Unknown Calling...", "Soul Connection", 
            "Moonlight Talk", "Deep Emotions", "Our Dream House", "Missing You"
        ];

        const messages = [
            "Log kehte hain mohabbat ek baar hoti hai, par mujhe tumse har roz naye tareeke se hoti hai.",
            "Zindagi ke 5000 din bhi kam hain tumhare sath bitane ke liye. Har pal tumhare naam.",
            "Pata hai aaj dil kya keh raha hai? Bas tumhare paas baith kar tumhe dekhta rahoon.",
            "Tum meri wo khwahish ho jo har roz puri hoti hai. My Queen, My Everything.",
            "Distance is just a test to see how far love can travel. Humara pyaar toh infinite hai.",
            "Agar main tumse kabhi door jane ki sochu, toh bas ye yaad rakhna ki meri har saans tumse judi hai.",
            "Thinking about us in 10 years. Wahi sukoon, wahi tum, aur wahi humara dher saara pyaar."
        ];

        const secrets = [
            "Aaj bhi tumhari awaaz sun kar mere chehre par muskan aa jati hai. ❤️",
            "I have a secret: You are the most beautiful person I've ever known, inside out.",
            "Main har roz bhagwan se tumhe mangta hoon. You are my answered prayer.",
            "Ek din hum ek hi chat ke neeche honge, aur koi doori nahi hogi. Promise! 💍",
            "Pata hai? Mera sabse favourite notification tumhara message hota hai."
        ];

        // Pick Random but Consistent elements based on Day ID
        const pick = (arr, i) => arr[Math.floor(rand(i) * arr.length)];

        return {
            title: pick(titles, 1) + " (Day " + d + ")",
            message: pick(messages, 2),
            image: "assets/images/home/m1.jpg", // Default image as requested
            song: "assets/audio/ring/s1.mp3",    // Default music as requested
            theme: pick(themes, 3),
            particles: pick(effects, 4),
            layout: pick(layouts, 5),
            hidden: pick(secrets, 6)
        };
    }
};
