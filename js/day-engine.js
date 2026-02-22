window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Add Particle Layer
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    startParticles(data.particles, data.theme);

    // Layout Router: Chooses UI based on Day Data
    switch(data.layout) {
        case "ai-scanner": renderAI(data, body); break;
        case "cinematic-dark": renderThriller(data, body); break;
        case "retro-typewriter": renderTypewriter(data, body); break;
        case "infinity-portal": renderCinematic(data, body); break;
        default: renderClassic(data, body);
    }
};

function startParticles(type, color) {
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerHTML = type === "hearts" ? "❤️" : type === "stars" ? "⭐" : "❄️";
        p.style.left = Math.random() * 100 + "vw";
        p.style.color = color;
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.getElementById('particles-layer').appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }, 450);
}

function renderClassic(data, body) {
    body.innerHTML = `<div class="main-wrapper"><div class="glass-card">
        <img src="${data.image}" class="main-img">
        <h1 style="color:var(--accent)">${data.title}</h1>
        <p>${data.message}</p>
        <audio controls autoplay loop src="${data.song}"></audio>
        <button class="btn" onclick="alert('${data.hidden}')">Reveal Secret</button>
        <a href="chapters.html" class="back">← Timeline</a>
    </div></div>`;
}

function renderAI(data, body) {
    body.innerHTML = `<div class="ai-wrapper">
        <div class="scan"></div>
        <div class="hud">LOVE_DATABASE_V5.0</div>
        <img src="${data.image}" class="ai-img">
        <div class="typing">> ${data.message}</div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
}

function renderThriller(data, body) {
    body.innerHTML = `<div class="thriller-wrapper">
        <div class="glitch" data-text="${data.title}">${data.title}</div>
        <img src="${data.image}" class="bw">
        <div class="msg">ALERT: ${data.message}</div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
}

function renderTypewriter(data, body) {
    body.innerHTML = `<div class="type-wrapper">
        <div class="paper">
            <h1>${data.title}</h1>
            <p id="t-target"></p>
        </div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
    let i=0; 
    const t = () => { if(i < data.message.length){ document.getElementById('t-target').innerHTML += data.message.charAt(i); i++; setTimeout(t, 50); } };
    t();
}
