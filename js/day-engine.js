window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    // Set Global Accent Color
    document.documentElement.style.setProperty('--accent', data.theme);

    const body = document.getElementById('dynamic-body');
    
    // Check Layout Type
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    // Start Particles
    if(data.particles || data.effect) startParticles(data.particles || data.effect);
};

function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let extraHTML = "";
    let layoutClass = "";

    if (data.layout === "scratch-card") { layoutClass = "scratch-mode"; extraHTML = `<canvas id="scratch-canvas"></canvas>`; }
    else if (data.layout === "virtual-hug") { layoutClass = "hug-mode"; }
    else if (data.layout === "infinity-portal") { layoutClass = "portal-view"; }

    container.innerHTML = `
        <div id="particles-layer"></div>
        <div class="classic-vibe">
            <div class="main-wrapper">
                <div class="glass-container ${layoutClass}" id="main-card">
                    <div class="img-frame" id="img-container">
                        ${extraHTML}
                        <img id="day-img" src="${data.image}" class="${dayNum <= 4 ? 'blur-reveal' : ''}">
                    </div>
                    <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                    <p id="day-message">${data.message}</p>
                    
                    <div class="audio-section">
                        <div class="audio-box"><audio controls loop src="${data.song}"></audio></div>
                        ${data.voice ? `<div class="audio-box"><audio controls src="${data.voice}"></audio></div>` : ''}
                    </div>

                    <button class="heart-btn" style="background: ${data.theme}" onclick="revealSecret('${data.hidden}')">Tap to Reveal Secret</button>
                    <div id="secret-msg" style="margin-top:15px; font-weight:600; color:${data.theme}; display:none;"></div>
                    
                    <a href="chapters.html" class="back-link">← Back to Timeline</a>
                </div>
            </div>
        </div>
    `;

    // Special Interactions
    const img = document.getElementById('day-img');
    if (dayNum <= 4) {
        img.onclick = () => img.style.filter = "blur(0)";
    }
    if (data.layout === "scratch-card") initScratch();
    if (data.layout === "virtual-hug") initHug(data.hidden);
}

function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    box.innerText = msg;
    box.style.display = "block";
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#888"; ctx.fillRect(0,0,canvas.width,canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 30, 0, Math.PI * 2); ctx.fill();
    };
    canvas.ontouchmove = (e) => { scratch(e); e.preventDefault(); };
}

function initHug(secret) {
    const card = document.getElementById('main-card');
    let timer;
    card.ontouchstart = () => { 
        card.classList.add('vibrate'); 
        timer = setTimeout(() => { revealSecret(secret); card.classList.remove('vibrate'); }, 2000);
    };
    card.ontouchend = () => { card.classList.remove('vibrate'); clearTimeout(timer); };
}

function startParticles(type) {
    const layer = document.getElementById('particles-layer');
    const symbol = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : "❤️";
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle'; p.innerText = symbol;
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";
        layer.appendChild(p);
    }
}

// Baki Gallery aur Music Player logic yahan add kar sakte ho...
