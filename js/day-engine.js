window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Clear previous and set layer
    body.innerHTML = '<div id="particles-layer"></div>';

    // Route to layouts
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else if (data.layout === "quiz-game") renderQuiz(data, body);
    else if (data.layout === "love-letter") renderLetter(data, body);
    else renderClassic(data, body, dayId);

    // Particles
    setInterval(() => createParticle(data.particles || "hearts", data.theme), 400);
};

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderClassic(data, container, dayId) {
    const isHug = data.layout === "virtual-hug";
    const isScratch = data.layout === "scratch-card";

    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container ${isHug ? 'hug-pulse' : ''}">
                <div class="img-frame" id="img-container" style="border-color:${data.theme}">
                    ${isScratch ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="blur-reveal">
                </div>
                <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section">
                    <audio controls loop src="${data.song || ''}"></audio>
                </div>
                <button class="heart-btn" id="reveal-btn" style="background: ${data.theme}">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK TO TIMELINE</a></center>
            </div>
        </div>`;

    document.getElementById('reveal-btn').onclick = () => {
        const box = document.getElementById('secret-msg');
        box.innerText = data.hidden;
        box.classList.toggle('show');
    };

    const img = document.getElementById('day-img');
    img.onclick = () => img.classList.toggle('clear');

    if (isScratch) initScratch();
    if (isHug) initHug(data.hidden);
    if (data.layout === "infinity-portal") initHeartBloom();
}

function renderQuiz(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <p>${data.question}</p>
        <div class="quiz-box">
            ${data.options.map((opt, i) => `<button class="quiz-opt" onclick="checkQuiz(${i}, ${data.correct}, '${data.hidden}')">${opt}</button>`).join('')}
        </div>
        <div id="quiz-res" class="secret-box"></div>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

window.checkQuiz = (i, c, h) => {
    const res = document.getElementById('quiz-res');
    if(i === c) { res.innerText = h; res.classList.add('show'); }
    else alert("Try Again Baby! 😘");
};

function renderLetter(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container letter-bg">
        <h1 id="day-title" style="color:${data.theme}">My Letter ✉️</h1>
        <div class="letter-content">${data.message}</div>
        <p style="margin-top:20px; font-weight:bold;">- Yours, Forever</p>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

function renderGallery(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <div class="gallery-grid">
            <img src="${data.image}">
            <img src="assets/images/photo2.jpg">
        </div>
        <p>${data.message}</p>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

function renderMusicPlayer(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <div class="disc-player"><img src="${data.image}" class="rotate"></div>
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <audio controls autoplay src="${data.song}"></audio>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

// Sub-init functions
function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300; canvas.height = 350;
    ctx.fillStyle = "#888"; ctx.fillRect(0,0,300,350);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 30, 0, Math.PI*2); ctx.fill();
    };
    canvas.ontouchmove = scratch; canvas.onmousemove = scratch;
}

function initHug(secret) {
    const img = document.getElementById('day-img');
    img.onmousedown = () => {
        img.style.transform = "scale(0.8)";
        setTimeout(() => { alert("Virtual Hug Sent! ❤️"); }, 1000);
    };
    img.onmouseup = () => img.style.transform = "scale(1)";
}

function initHeartBloom() {
    document.getElementById('img-container').onclick = () => {
        for(let i=0; i<10; i++) createParticle("hearts", "red");
    };
}
