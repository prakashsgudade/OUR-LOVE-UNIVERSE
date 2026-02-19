/**
 * 📁 LOVE-UNIVERSE: THE INFINITE ENGINE (Day 1 - 5000)
 * Updated with: Cinematic, AI, Games, and Emotional Modes
 */

const manualDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi... Jab maine tumhe pehli baar dekha, tab samajh aaya ki 'Sukoon' kise kehte hain.", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", voice: "assets/audio/muskan-message.mp3.mpeg", theme: "#d4af37", particles: "hearts", hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui, aur har guzarne wala din tumhari yaadon se bharne laga.", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", particles: "hearts", hidden: "Tumhare messages ka wait karna aaj bhi mera favourite kaam hai." },
    "3": { title: "3D Galaxy of Us 🌌", message: "Is puri duniya mein karodo log hain, lekin mere liye sirf tum chamakti ho. My only gravity.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", particles: "stars", hidden: "You are my universe, Muskan." },
    "4": { title: "Secret Memory 🔐", message: "Ye photo sirf ek image nahi, ek ehsas hai. Ye wo pal hai jise main duniya se chhupa kar rakhna chahta hoon.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", effect: "snow", hidden: "Main waada karta hoon, tumhara hath kabhi nahi chhodunga." },
    "5": { title: "A Hidden Surprise 🎁", message: "Hamari mohabbat bilkul is card jaisi hai... Ise scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Surprise! Har din tumse aur zyada mohabbat ho jati hai." },
    "6": { title: "The Soul Hug ❤️", message: "Bas is photo ko hold karna (Long Press). Mehsus karna ki main wahi tumhare paas hoon...", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "I'm always holding you in my heart. 🤗" },
    "7": { title: "Forever & Always 💍", message: "Photo par click karo aur dekho hamara pyaar kaise barasta hai!", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Will you be my Valentine forever? ❤️" },
    "8": { title: "Our Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/home/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/home/m2.jpg", cap: "Sath Hamesha" }] },
    "9": { title: "Soulmate Beats 🎵", message: "Ye gaana humara official anthem hai!", layout: "music-player", image: "assets/images/home/m1.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6" },
    "10": { title: "My Final Promise 👑", message: "Aaj 10 din pure ho gaye, par mera pyaar har lamha badh raha hai.", image: "assets/images/home/m1.jpg", song: "assets/audio/ring/s1.mp3", theme: "#d4af37", particles: "hearts", hidden: "I love you more than words can ever say. ❤️" }
};

const loveDays = {
    get: function(d) {
        if (manualDays[d]) return manualDays[d];

        const dayNum = parseInt(d);
        const seed = dayNum * 1.5;
        const random = (i) => {
            const x = Math.sin(seed + i) * 10000;
            return x - Math.floor(x);
        };

        // --- THE INFINITE POOL ---
        const layouts = ["cinematic-call", "ai-chat", "love-quiz", "scratch-card", "galaxy-neon", "letter-typewriter"];
        const themes = ["#ff4d6d", "#d4af37", "#00d2ff", "#6a11cb", "#00ff88", "#e63946"];
        const effects = ["hearts", "stars", "snow", "rain", "glitch"];

        const titles = [
            "Unknown Calling...", "AI Mood Analysis", "Secret Letter #"+d, 
            "Future Vision 🔮", "Memory Flashback", "3AM Thoughts", 
            "Our Dream House", "Soulmate Frequency", "The Glitch in Love"
        ];

        const messages = [
            "Agar main tumhe khone laga, toh ye page tumhe wapas mere paas layega.",
            "Aaj ka dil kya keh raha hai? Bas tumhara naam le raha hai...",
            "System Error: Too much love detected for Muskan. ❤️",
            "Future Vision: Hamara chota sa ghar, aur dher saari khushiyan.",
            "Unknown number is calling... Will you answer the fate?"
        ];

        const secrets = [
            "Tum meri zindagi ki sabse haseen haqiqat ho.",
            "I promise to love you even when we are 80. 💍",
            "Hidden Message: You are my 11:11 wish.",
            "Secret Code: 143 (Forever & Always)"
        ];

        // Logic to pick based on Day ID
        const layoutPick = layouts[dayNum % layouts.length];
        
        return {
            day: d,
            title: titles[Math.floor(random(1) * titles.length)],
            message: messages[Math.floor(random(2) * messages.length)],
            image: "assets/images/home/m1.jpg", 
            song: "assets/audio/ring/s1.mp3",
            theme: themes[Math.floor(random(3) * themes.length)],
            particles: effects[Math.floor(random(4) * effects.length)],
            layout: layoutPick,
            hidden: secrets[Math.floor(random(5) * secrets.length)]
        };
    }
};
