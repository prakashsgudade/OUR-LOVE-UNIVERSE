window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays.get(dayId);
    
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const container = document.getElementById('app-container');

    // LAYOUT ENGINE - Selects how to display the day
    if (dayId <= 10) {
        renderClassic(data, container); // Day 1-10 fixed style
    } else {
        // Day 11+ Randomly chooses a "Vibe"
        const vibes = ["chat", "quiz", "letter", "scratch", "hug"];
        const seed = parseInt(dayId);
        const choice = vibes[seed % vibes.length];

        if (choice === "chat") renderAIChat(data, container);
        else if (choice === "quiz") renderQuiz(data, container);
        else if (choice === "scratch") renderScratch(data, container);
        else if (choice === "hug") renderVirtualHug(data, container);
        else renderCinematicLetter(data, container);
    }

    if(data.particles) setInterval(() => createParticle(data.particles, data.theme), 400);
};

// --- LAYOUT 1: AI CHAT VIBE ---
function renderAIChat(data, container) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <h1 class="title">AI Mood Reader</h1>
                <div class="chat-window" id="chat-box">
                    <div class="bot-msg">Hi Muskan! Main aaj tera mood read kar sakta hoon. Kuch bolo? ❤️</div>
                </div>
                <input type="text" id="u-input" class="chat-input" placeholder="Type something...">
                <button class="action-btn" onclick="sendMsg()">Send to My Heart</button>
                <br><a href="chapters.html" class="back-link">← BACK</a>
            </div>
        </div>`;
}

// --- LAYOUT 2: LOVE QUIZ ---
function renderQuiz(data, container) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <h1 class="title">Love Quiz</h1>
                <p class="msg">Aaj ka sawal: Kya tumhe pata hai main tumse kitna pyaar karta hoon?</p>
                <button class="quiz-btn" onclick="alert('Correct! Infinite ❤️')">A) Bohat zyada</button>
                <button class="quiz-btn" onclick="alert('Galat! Socho phir se..')">B) Thoda sa</button>
                <button class="quiz-btn" onclick="alert('Right! Counting impossible hai.')">C) Hadd se zyada</button>
                <br><a href="chapters.html" class="back-link">← BACK</a>
            </div>
        </div>`;
}

// --- LAYOUT 3: CINEMATIC LETTER ---
function renderCinematicLetter(data, container) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container" style="text-align:left;">
                <h1 class="title" style="text-align:center;">Daily Letter</h1>
                <div class="msg" style="font-family:'Great Vibes'; font-size:1.5rem; line-height:1.2;">
                    ${data.message}
                </div>
                <hr style="border:0; border-top:1px solid var(--accent); opacity:0.3;">
                <p style="text-align:right; font-family:'Dancing Script';">Hamesha Tumhara...</p>
                <center><a href="chapters.html" class="back-link">← BACK</a></center>
            </div>
        </div>`;
}

// Helper functions (createParticle, renderClassic etc.) yahan niche rahenge...
function sendMsg() {
    const input = document.getElementById('u-input');
    const box = document.getElementById('chat-box');
    if(!input.value) return;
    box.innerHTML += `<div class="user-msg">${input.value}</div>`;
    setTimeout(() => {
        box.innerHTML += `<div class="bot-msg">Muskan, ye sunkar mera dil khush ho gaya! ❤️</div>`;
        box.scrollTop = box.scrollHeight;
    }, 1000);
    input.value = "";
}
