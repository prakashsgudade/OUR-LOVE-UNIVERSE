window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Add Particles
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => createParticle(data.particles, data.theme), 500);

    // Layout Engine
    if(data.layout === "ai-scanner") renderAI(data, body);
    else if(data.layout === "retro-typewriter") renderTypewriter(data, body);
    else if(data.layout === "cinematic-dark") renderThriller(data, body);
    else renderClassic(data, body);
};

function createParticle(type, color) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = type === "hearts" ? "❤️" : type === "stars" ? "⭐" : "❄️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.color = color;
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('particles-layer').appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderClassic(data, body) {
    body.innerHTML = `
    <div class="main-container">
        <div class="glass-box">
            <div class="img-frame"><img src="${data.image}"></div>
            <h1 class="title">${data.title}</h1>
            <p class="msg">${data.message}</p>
            <audio controls autoplay loop src="${data.song}"></audio>
            <button class="action-btn" onclick="alert('${data.hidden}')">Tap For Secret</button>
            <a href="chapters.html" class="back-btn">← Back to Timeline</a>
        </div>
    </div>`;
}

function renderAI(data, body) {
    body.innerHTML = `
    <div class="ai-container">
        <div class="scan-bar"></div>
        <div class="hud">SCANNING_SOULMATE_ID: ${data.title}</div>
        <img src="${data.image}" class="ai-img">
        <p class="ai-text">> ${data.message}</p>
        <audio autoplay loop src="${data.song}"></audio>
        <a href="chapters.html" class="back-btn">← LOGOUT</a>
    </div>`;
}

function renderTypewriter(data, body) {
    body.innerHTML = `
    <div class="type-container">
        <div class="paper">
            <h1>${data.title}</h1>
            <p id="type-text"></p>
        </div>
        <audio autoplay loop src="${data.song}"></audio>
        <a href="chapters.html" class="back-btn">← Back</a>
    </div>`;
    let i=0;
    const type = () => {
        if(i < data.message.length) {
            document.getElementById('type-text').innerHTML += data.message.charAt(i);
            i++; setTimeout(type, 60);
        }
    }
    type();
}
