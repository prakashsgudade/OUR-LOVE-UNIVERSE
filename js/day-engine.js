window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    const body = document.getElementById('dynamic-body');
    
    document.documentElement.style.setProperty('--accent', data.theme);

    // Particle System
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerHTML = data.particles === "hearts" ? "❤️" : data.particles === "stars" ? "⭐" : "❄️";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";
        pLayer.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }, 600);

    // Layout Router
    if(data.layout === "ai-scanner") renderAI(data, body);
    else if(data.layout === "retro-typewriter") renderTypewriter(data, body);
    else if(data.layout === "dna-scanner") renderDNA(data, body);
    else renderClassic(data, body);
};

function renderClassic(data, body) {
    body.innerHTML = `
    <div class="main-container">
        <div class="glass-box">
            <div class="img-frame"><img src="${data.image}"></div>
            <h1 class="title">${data.title}</h1>
            <p class="msg">${data.message}</p>
            <button class="action-btn" onclick="alert('${data.hidden}')">Secret Note</button>
            <a href="chapters.html" class="back-link">← Back to Universe</a>
        </div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
}

function renderAI(data, body) {
    body.innerHTML = `
    <div class="ai-container">
        <div class="scan-bar"></div>
        <div class="hud">SCANNING_SOULMATE_ID: ${data.dayId}</div>
        <img src="${data.image}" class="ai-img">
        <p class="ai-text">> ${data.message}</p>
        <audio autoplay loop src="${data.song}"></audio>
        <a href="chapters.html" class="back-link">← LOGOUT</a>
    </div>`;
}

function renderTypewriter(data, body) {
    body.innerHTML = `<div class="type-container"><div class="paper"><h1>Day ${data.dayId}</h1><p id="type-text"></p></div><audio autoplay loop src="${data.song}"></audio><a href="chapters.html" class="back-link">← Back</a></div>`;
    let i=0; const type = () => { if(i < data.message.length) { document.getElementById('type-text').innerHTML += data.message.charAt(i); i++; setTimeout(type, 60); }}; type();
}

function renderDNA(data, body) {
    body.innerHTML = `<div class="dna-container"><div class="dna-strand">🧬</div><h2>DNA MATCH: 101%</h2><img src="${data.image}" class="dna-img"><p>${data.message}</p><audio autoplay loop src="${data.song}"></audio><a href="chapters.html" class="back-link">← Close</a></div>`;
}
