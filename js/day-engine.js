window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    const body = document.getElementById('dynamic-body');
    
    document.documentElement.style.setProperty('--accent', data.theme);
    
    // Auto-Theme Logic (Night Mode)
    const hours = new Date().getHours();
    if(hours > 19 || hours < 6) body.classList.add('night-vibe');

    // Particle Loader
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => createParticle(data.particles, data.theme), 600);

    // Layout Router
    if(data.layout === "ai-scanner") renderAI(data, body);
    else if(data.layout === "retro-typewriter") renderTypewriter(data, body);
    else if(data.layout === "heart-sync") renderHeartSync(data, body);
    else if(data.layout === "dna-scanner") renderDNA(data, body);
    else if(data.layout === "islamic-noor") renderIslamic(data, body);
    else renderClassic(data, body);
};

function createParticle(type, color) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = type === "hearts" ? "❤️" : type === "stars" ? "⭐" : "🌸";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('particles-layer').appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

// --- NEW GOD-LEVEL RENDERERS ---

function renderHeartSync(data, body) {
    body.innerHTML = `
    <div class="main-container sync-mode">
        <div class="heart-pulse">❤️</div>
        <div class="glass-box">
            <h1>Heart Sync Engine</h1>
            <p>Cursor move karo... mera dil tumhari harkat se dhadakta hai.</p>
            <img src="${data.image}" class="main-img">
            <a href="../chapters.html" class="back-btn">Back</a>
        </div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
    document.addEventListener('mousemove', (e) => {
        let speed = (e.clientX / window.innerWidth) * 2 + 0.2;
        document.querySelector('.heart-pulse').style.animationDuration = speed + 's';
    });
}

function renderDNA(data, body) {
    body.innerHTML = `
    <div class="ai-container dna-mode">
        <div class="scan-line"></div>
        <div class="dna-hud">SOUL_DNA_MATCH: 101%</div>
        <img src="${data.image}" class="dna-img">
        <p class="dna-text">> ${data.message}</p>
        <audio autoplay loop src="${data.song}"></audio>
        <a href="../chapters.html" class="back-btn">Exit System</a>
    </div>`;
}

function renderClassic(data, body) {
    body.innerHTML = `
    <div class="main-container">
        <div class="glass-box">
            <div class="img-frame"><img src="${data.image}"></div>
            <h1 class="title">${data.title}</h1>
            <p class="msg">${data.message}</p>
            <audio autoplay loop src="${data.song}"></audio>
            <button class="action-btn" onclick="alert('${data.hidden}')">Tap Secret</button>
            <a href="../chapters.html" class="back-btn">Timeline</a>
        </div>
    </div>`;
}

// Logic for Typewriter, AI etc as you already have but improved...
