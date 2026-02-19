window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    body.innerHTML = '<div id="particles-layer"></div>';

    // Layout Router
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else if (data.layout === "quiz-game") renderQuiz(data, body);
    else if (data.layout === "love-letter") renderLetter(data, body);
    else renderClassic(data, body, dayId);

    // Dynamic Particles
    setInterval(() => createParticle(data.particles || "hearts", data.theme), 450);
};

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : "❤️";
    p.style.color = color;
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderClassic(data, container, dayId) {
    const isHug = data.layout === "virtual-hug";
    const isScratch = data.layout === "scratch-card";
    const isPortal = data.layout === "infinity-portal";

    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container ${isHug ? 'hug-pulse' : ''}">
                <div class="img-frame" id="img-container" style="border-color:${data.theme}">
                    ${isScratch ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section">
                    <div class="audio-card"><label>🎵 MUSIC</label><audio controls loop src="${data.song}"></audio></div>
                    ${data.voice ? `<div class="audio-card"><label>🎤 VOICE</label><audio controls src="${data.voice}"></audio></div>` : ''}
                </div>
                <button class="heart-btn" id="reveal-btn" style="background:${data.theme}">Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK TO TIMELINE</a></center>
            </div>
        </div>`;

    document.getElementById('reveal-btn').onclick = function() {
        const box = document.getElementById('secret-msg');
        box.innerText = data.hidden;
        box.classList.toggle('show');
    };

    if (parseInt(dayId) <= 4) {
        document.getElementById('day-img').onclick = function() { this.classList.toggle('clear'); };
    }
    if (isScratch) initScratch();
    if (isHug) initHug(data.hidden);
    if (isPortal) initHeartBloom();
}

function renderQuiz(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">Love Quiz 💡</h1>
        <p style="margin-bottom:20px;">${data.question}</p>
        <div class="quiz-grid">
            ${data.options.map((opt, i) => `<button class="quiz-btn" onclick="checkQuiz(${i}, ${data.correct}, '${data.hidden}')">${opt}</button>`).join('')}
        </div>
        <div id="quiz-res" class="secret-box"></div>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

window.checkQuiz = (i, c, h) => {
    const r = document.getElementById('quiz-res');
    if(i===c) { r.innerText = h; r.classList.add('show'); }
    else alert("Opps! Guess again Muskan... ❤️");
}

function renderLetter(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container letter-theme">
        <h1 id="day-title">Dearest Muskan ✉️</h1>
        <div class="letter-body">${data.message}</div>
        <div class="letter-footer">- Your Soulmate</div>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

function renderGallery(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <div class="gallery-layout">
            ${data.items ? data.items.map(i => `<div class="gal-item"><img src="${i.img}"><p>${i.cap}</p></div>`).join('') : `<img src="${data.image}" style="width:100%; border-radius:15px;">`}
        </div>
        <p style="margin-top:15px;">${data.message}</p>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

function renderMusicPlayer(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <div class="vinyl-record"><img src="${data.image}"></div>
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <p>${data.message}</p>
        <audio controls autoplay src="${data.song}" style="width:100%; margin-top:20px; filter:invert(1);"></audio>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

// Logic for Special Layouts
function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#555"; ctx.fillRect(0,0,canvas.width,canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 35, 0, Math.PI*2); ctx.fill();
    };
    canvas.ontouchmove = scratch;
}

function initHug(secret) {
    const img = document.getElementById('day-img');
    img.onmousedown = img.ontouchstart = () => {
        img.style.transform = "scale(0.9)";
        this.timer = setTimeout(() => { alert("Virtual Hug Sent! ❤️"); }, 1500);
    };
    img.onmouseup = img.ontouchend = () => { img.style.transform = "scale(1)"; clearTimeout(this.timer); };
}

function initHeartBloom() {
    document.getElementById('img-container').onclick = () => {
        for(let i=0; i<12; i++) createParticle("hearts", "red");
    };
}
