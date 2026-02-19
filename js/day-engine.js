// ===============================
// MUSKAN ULTRA ROYAL ENGINE
// ===============================

const params = new URLSearchParams(window.location.search);
let day = parseInt(params.get("day")) || 1;

const dayNumber = document.getElementById("dayNumber");
const dayImage = document.getElementById("dayImage");
const dayMessage = document.getElementById("dayMessage");
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

dayNumber.innerText = `Day ${day}`;

// ===============================
// IMAGE + MUSIC LOGIC
// ===============================

if (day <= 10) {
    dayImage.src = "../assets/images/home/m1.jpg";
    bgMusic.src = "../assets/audio/ring/s1.mp3";
} else {
    const randomImage = Math.floor(Math.random() * 120) + 1;
    const randomMusic = Math.floor(Math.random() * 400) + 1;

    dayImage.src = `../assets/images/home/m${randomImage}.jpg`;
    bgMusic.src = `../assets/audio/ring/s${randomMusic}.mp3`;
}

// ===============================
// AUTO UNIQUE MESSAGE GENERATOR
// ===============================

const royalLines = [
    "Aaj bhi tum meri duniya ho ❤️",
    "Har din tumhare naam...",
    "Tumhari smile meri taqat hai",
    "Future me bhi sirf tum",
    "Ye moment sirf humara hai",
    "Tum ho toh sab perfect hai",
    "Main har din tumhe choose karta hu",
    "Tum meri kahani ka best chapter ho",
    "Forever wali feeling...",
    "Tumhari yaad sabse pyari hai"
];

const specialLines = [
    "💎 Ultra Special Day",
    "🌹 Love Anniversary Energy",
    "👑 Royal Moment",
    "🔥 Legendary Day",
    "✨ Magical Timeline",
    "💖 Infinite Love Day"
];

let message = royalLines[day % royalLines.length];

if (day % 1000 === 0) {
    message += " 👑 1000X Royal Milestone!";
} else if (day % 365 === 0) {
    message += " 💍 Anniversary Special!";
} else if (day % 100 === 0) {
    message += " 🔥 Century Day!";
}

dayMessage.innerText = message;

// ===============================
// PLAY BUTTON
// ===============================

playBtn.addEventListener("click", () => {
    bgMusic.play();
    playBtn.innerText = "Playing 🎶";
});

// ===============================
// SPECIAL VISUAL EFFECT
// ===============================

if (day % 100 === 0) {
    document.body.classList.add("gold-mode");
}

if (day % 500 === 0) {
    document.body.classList.add("galaxy-mode");
}
