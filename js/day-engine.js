window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const container = document.getElementById('app-container');

    if (data.layout === "ai-chat") renderAIChat(data, container);
    else if (data.layout === "quiz-game") renderQuiz(data, container);
    else if (data.layout === "gallery") renderGallery(data, container);
    else if (data.layout === "music-player") renderMusicPlayer(data, container);
    else renderClassic(data, container, dayId);

    if(data.particles) setInterval(() => createParticle(data.particles, data.theme), 400);
};

function renderClassic(data, container, dayId) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame" style="border-color:${data.theme}">
                    <img src="${data.image}" id="day-img" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 class="title">${data.title}</h1>
                <p class="msg">${data.message}</p>
                <div class="audio-card"><audio controls loop src="${data.song}"></audio></div>
                <button class="action-btn" id="rev-btn" style="background:${data.theme}">Reveal Secret</button>
                <div id="sec-box" class="secret-box">${data.hidden}</div>
                <a href="chapters.html" class="back-link">← Back to Timeline</a>
            </div>
        </div>`;
    
    document.getElementById('rev-btn').onclick = () => document.getElementById('sec-box').classList.toggle('show');
}

function renderAIChat(data, container) {
    container.innerHTML = `
        <div class="main-wrapper"><div class="glass-container">
            <h2 class="title" style="font-size:1.8rem;">${data.title}</h2>
            <div id="chat-win" class="chat-window">
                <div class="bot-msg">Analyzing Muskan's mood... Processing... You look Beautiful today! ❤️</div>
            </div>
            <input type="text" id="user-in" placeholder="Say something to AI..." class="chat-input">
            <button onclick="aiReply('${data.theme}')" class="action-btn" style="background:${data.theme}">Ask AI</button>
            <br><a href="chapters.html" class="back-link">← Back</a>
        </div></div>`;
}

function renderQuiz(data, container) {
    container.innerHTML = `
        <div class="main-wrapper"><div class="glass-container">
            <h2 class="title">${data.title}</h2>
            <p class="msg">${data.question}</p>
            <div class="quiz-grid">
                ${data.options.map((o,i) => `<button onclick="checkAns(${i}, ${data.correct}, '${data.theme}')" class="quiz-btn">${o}</button>`).join('')}
            </div>
            <br><a href="chapters.html" class="back-link">← Back</a>
        </div></div>`;
}

function aiReply(color) {
    const box = document.getElementById('chat-win');
    const input = document.getElementById('user-in');
    if(!input.value) return;
    box.innerHTML += `<div class="user-msg">${input.value}</div>`;
    setTimeout(() => {
        box.innerHTML += `<div class="bot-msg" style="border-left: 3px solid ${color}">Muskan, mera AI dimag kehta hai ki main tumse duniya mein sabse zyada pyaar karta hoon!</div>`;
        box.scrollTop = box.scrollHeight;
    }, 800);
    input.value = "";
}

function checkAns(i, c, theme) {
    if(i === c) alert("Correct! You know me so well ❤️");
    else alert("Wrong! Try again 😜");
}

function createParticle(type, color) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = type === "stars" ? "⭐" : "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.color = color;
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('particles-layer').appendChild(p);
    setTimeout(() => p.remove(), 4000);
}
