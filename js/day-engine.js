window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    
    // Data fetch through helper function
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Create Background Layer
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    // Modern Render Logic
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    // Particle System
    if(data.particles || data.effect) {
        setInterval(() => createParticle(data.particles || data.effect, data.theme), 400);
    }
};

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.fontSize = (Math.random() * 20 + 15) + "px";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderClassic(data, container, dayId) {
    const isDay6 = data.layout === "virtual-hug";
    const isDay5 = data.layout === "scratch-card";

    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container ${isDay6 ? 'hug-pulse' : ''} reveal-anim">
                <div class="day-badge" style="background:${data.theme}">DAY ${dayId}</div>
                <div class="img-frame" id="img-container" style="border-color:${data.theme}">
                    ${isDay5 ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                <div class="message-box">
                    <p id="day-message">${data.message}</p>
                </div>
                <div class="audio-section">
                    <div class="audio-card">
                        <label>🎵 THEME MUSIC</label>
                        <audio controls loop src="${data.song}"></audio>
                    </div>
                    ${data.voice ? `<div class="audio-card"><label>🎤 VOICE NOTE</label><audio controls src="${data.voice}"></audio></div>` : ''}
                </div>
                <button class="heart-btn" id="reveal-btn" style="background: ${data.theme}">
                    <span>TAP TO REVEAL SECRET</span>
                </button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← EXPLORE TIMELINE</a></center>
            </div>
        </div>`;

    document.getElementById('reveal-btn').onclick = function() {
        const box = document.getElementById('secret-msg');
        box.classList.toggle('show');
        box.innerText = box.classList.contains('show') ? data.hidden : "";
    };

    const img = document.getElementById('day-img');
    if (parseInt(dayId) <= 4) {
        img.onclick = () => img.classList.toggle('clear');
    }

    if (isDay5) initScratch();
    if (isDay6) initHug(data.hidden);
    if (data.layout === "infinity-portal") initHeartBloom();
}

// ... baaki functions (initScratch, initHug, etc.) as it is rahenge
