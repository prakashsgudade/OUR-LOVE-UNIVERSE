// Day 1 to 10: Tera Original Data
const manualDays = {
    "1": { title: "Pehli Nazar ❤️", message: "Wo din jab duniya badal gayi... Jab maine tumhe pehli baar dekha, tab samajh aaya ki 'Sukoon' kise kehte hain.", image: "assets/images/photo1.jpg", song: "assets/audio/our-song.mp3", voice: "assets/audio/muskan-message.mp3.mpeg", theme: "#d4af37", particles: "hearts", hidden: "Pata hai? Usi din dil ne keh diya tha ki 'Yehi hai wo!'" },
    "2": { title: "The Beginning ✨", message: "Dhire-dhire humari baatein shuru hui, aur har guzarne wala din tumhari yaadon se bharne laga.", image: "assets/images/photo2.jpg", song: "assets/audio/love-marrige.mp3", theme: "#ff4d6d", particles: "hearts", hidden: "Tumhare messages ka wait karna aaj bhi mera favourite kaam hai." },
    "3": { title: "3D Galaxy of Us 🌌", message: "Is puri duniya mein karodo log hain, lekin mere liye sirf tum chamakti ho. My only gravity.", image: "assets/images/photo3.jpg", song: "assets/audio/meri-mallika.mp3", theme: "#6a11cb", particles: "stars", hidden: "You are my universe, Muskan." },
    "4": { title: "Secret Memory 🔐", message: "Ye photo sirf ek image nahi, ek ehsas hai. Ye wo pal hai jise main duniya se chhupa kar rakhna chahta hoon.", image: "assets/images/photo4.jpg", song: "assets/audio/ilove-u.mp3", theme: "#00d2ff", effect: "snow", hidden: "Main waada karta hoon, tumhara hath kabhi nahi chhodunga." },
    "5": { title: "A Hidden Surprise 🎁", message: "Hamari mohabbat bilkul is card jaisi hai... Ise scratch karo!", image: "assets/images/photo5.jpg", song: "assets/audio/wistel5.mp3", theme: "#ffcc00", layout: "scratch-card", particles: "hearts", hidden: "Surprise! Har din tumse aur zyada mohabbat ho jati hai." },
    "6": { title: "The Soul Hug ❤️", message: "Bas is photo ko hold karna (Long Press). Mehsus karna ki main wahi tumhare paas hoon...", image: "assets/images/photo6.jpg", song: "assets/audio/janeman7.mp3", theme: "#ff4d6d", layout: "virtual-hug", particles: "hearts", hidden: "I'm always holding you in my heart. 🤗" },
    "7": { title: "Forever & Always 💍", message: "Photo par click karo aur dekho hamara pyaar kaise barasta hai!", image: "assets/images/photo7.jpg", song: "assets/audio/love-muskan.mp3", theme: "#e63946", layout: "infinity-portal", particles: "stars", hidden: "Will you be my Valentine forever? ❤️" },
    "8": { title: "Our Mini Universe 📸", message: "Look at these smiles!", layout: "gallery", theme: "#ff4d6d", items: [{ img: "assets/images/m1.jpg", cap: "Pehli Mulakat" }, { img: "assets/images/m2.jpg", cap: "Sath Hamesha" }] },
    "9": { title: "Soulmate Beats 🎵", message: "Ye gaana humara official anthem hai!", layout: "music-player", image: "assets/images/muskan-profile.jpg", song: "assets/audio/love10.mp3", theme: "#8b5cf6" },
    "10": { title: "My Final Promise 👑", message: "Aaj 10 din pure ho gaye, par mera pyaar har lamha badh raha hai.", image: "assets/images/final-photo.jpg", song: "assets/audio/love10.mp3", theme: "#d4af37", particles: "hearts", hidden: "I love you more than words can ever say. ❤️" }
};

const loveDays = {};
const layouts = ["classic", "scratch-card", "virtual-hug", "infinity-portal", "gallery", "music-player", "quiz-game", "love-letter"];
const themes = ["#ff4d6d", "#ffd700", "#70e000", "#00d2ff", "#ff8500", "#ff0054", "#9d4edd", "#00f5d4"];

// Generator for 1 to 5000
for (let i = 1; i <= 5000; i++) {
    if (manualDays[i]) {
        loveDays[i] = manualDays[i];
    } else {
        loveDays[i] = {
            title: `Chapter ${i}: Love Infinite ♾️`,
            message: `Muskan, har guzarta din hamari dosti ko aur mazboot bana raha hai. Day ${i} ek nayi umeed aur nayi khushi le kar aaya hai.`,
            image: `assets/images/photo${(i % 10) + 1}.jpg`, // Rotates through your 10 photos
            theme: themes[i % themes.length],
            layout: layouts[i % layouts.length],
            song: `assets/audio/song${(i % 5) + 1}.mp3`,
            hidden: `Day ${i} Secret: Tum mere liye sabse khaas ho aur hamesha rahogi! ❤️`,
            // Quiz default
            question: "What's our favorite thing to do together?",
            options: ["Talking", "Laughing", "Dreaming", "Everything"],
            correct: 3
        };
    }
}
