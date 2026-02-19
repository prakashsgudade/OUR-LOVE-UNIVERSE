const manualDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi...", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", voice: "assets/audio/muskan-message.mp3.mpeg", theme: "#d4af37", layout: "classic", particles: "hearts", hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui...", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", layout: "classic", particles: "hearts", hidden: "Wait karna aaj bhi mera favourite kaam hai." },
    "3": { title: "3D Galaxy of Us 🌌", message: "Mere liye sirf tum chamakti ho.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", layout: "classic", particles: "stars", hidden: "You are my universe." },
    "4": { title: "Secret Memory 🔐", message: "Ye pal jise main duniya se chhupa kar rakhna chahta hoon.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", layout: "classic", particles: "snow", hidden: "Hath kabhi nahi chhodunga." },
    "5": { title: "A Hidden Surprise 🎁", message: "Ise scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Har din tumse aur pyaar ho jata hai." },
    "6": { title: "The Soul Hug ❤️", message: "Hold (Long Press) karo mehsus karne ke liye...", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "I'm always holding you." },
    "7": { title: "Forever & Always 💍", message: "Pyaar kaise barasta hai dekho!", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Will you be mine?" },
    "8": { title: "Our Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/m2.jpg", cap: "Sath Hamesha" }] },
    "9": { title: "Soulmate Beats 🎵", message: "Ye gaana humara official anthem hai!", layout: "music-player", image: "assets/images/muskan-profile.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6" },
    "10": { title: "My Final Promise 👑", message: "Aaj 10 din pure ho gaye.", image: "assets/images/final-photo.jpg", song: "assets/audio/our-song.mp3", theme: "#d4af37", layout: "classic", particles: "hearts", hidden: "I love you Muskan!" }
};

const aiTitles = ["AI Mood Analyzer", "Love Compliment Bot", "Relationship Health Check", "Future Simulator", "Emotion Background"];
const gameTitles = ["Click the Heart", "Tap Fast Challenge", "Memory Flip", "Guess the Date", "Swipe to Reveal"];
const cinemaEffects = ["snow", "stars", "hearts", "fire-spark", "neon-glow"];
const randomMessages = ["The Day You Smiled", "Your Favorite Things", "The Message I Never Sent", "When I Felt Jealous", "Your Eyes"];

const loveDays = {};
for (let i = 1; i <= 5000; i++) {
    if (manualDays[i]) {
        loveDays[i] = manualDays[i];
    } else {
        const type = i % 4; // 0: AI, 1: Game, 2: Cinema, 3: Random Message
        loveDays[i] = {
            title: type === 0 ? aiTitles[i % 5] : (type === 1 ? gameTitles[i % 5] : randomMessages[i % 5]),
            message: `Special Chapter for Day ${i}. Something advanced awaits you!`,
            image: "assets/images/home/m1.jpg", // Path as requested
            song: "assets/audio/ring/s1.mp3", // Path as requested
            theme: `hsl(${Math.random() * 360}, 70%, 60%)`,
            layout: type === 0 ? "ai-chat" : (type === 1 ? "quiz-game" : "classic"),
            particles: cinemaEffects[i % 5],
            hidden: "You are the best thing that ever happened to me! ❤️",
            question: "How much do I love you?", options: ["100%", "Infinite", "More than you know", "All of above"], correct: 3
        };
    }
}
