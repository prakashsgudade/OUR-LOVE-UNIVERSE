window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Create Particle Layer
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    if(data.particles) setInterval(() => createParticle(data.particles, data.theme), 400);

    // Layout Router
    switch(data.layout) {
        case "gallery": renderGallery(data, body); break;
        case "music-player": renderMusicPlayer(data, body); break;
        case "cinematic-dark": renderCinematic(data, body); break;
        case "ai-scanner": renderAIScanner(data, body); break;
        case "retro-typewriter": renderTypewriter(data, body); break;
        default: renderClassic(data, body, dayId);
    }
};

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : (type === "rain") ? "💧" : "❤️";
    p.style.color = color;
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderCinematic(data, container) {
    container.innerHTML = `
        <div class="main-wrapper cinematic-mode">
            <h1 class="glitch" data-text="${data.title}">${data.title}</h1>
            <div class="cinematic-frame"><img src="${data.image}"></div>
            <p class="fade-in-text">${data.message}</p>
            <button class="heart-btn" onclick="alert('${data.hidden}')">Open Secret</button>
            <center><a href="chapters.html" class="back-link">← BACK</a></center>
        </div>`;
}

function renderAIScanner(data, container) {
    container.innerHTML = `
        <div class="main-wrapper ai-layout">
            <div class="scanner-bar"></div>
            <h2 style="color:var(--accent)">[ SYSTEM ANALYZING LOVE... ]</h2>
            <div class="ai-box">
                <p>> DAY: ${data.title}</p>
                <p>> TARGET: MUSKAN</p>
                <p>> FEELING: INFINITE LOVE</p>
                <p class="typing">${data.message}</p>
            </div>
            <center><a href="chapters.html" class="back-link">← LOGOUT</a></center>
        </div>`;
}

function renderTypewriter(data, container) {
    container.innerHTML = `
        <div class="main-wrapper typewriter-layout">
            <div class="paper">
                <h1 style="color:#333">${data.title}</h1>
                <p id="type-target" style="color:#555"></p>
            </div>
            <center><a href="chapters.html" class="back-link">← BACK</a></center>
        </div>`;
    let i = 0;
    function type() {
        if(i < data.message.length) {
            document.getElementById('type-target').innerHTML += data.message.charAt(i);
            i++; setTimeout(type, 50);
        }
    }
    type();
}

function renderClassic(data, container, dayId) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame"><img id="day-img" src="${data.image}"></div>
                <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section"><audio controls loop src="${data.song}"></audio></div>
                <button class="heart-btn" style="background:${data.theme}" onclick="document.getElementById('secret').classList.toggle('show')">Reveal Surprise</button>
                <div id="secret" class="secret-box">${data.hidden}</div>
                <center><a href="chapters.html" class="back-link">← BACK TO TIMELINE</a></center>
            </div>
        </div>`;
}
