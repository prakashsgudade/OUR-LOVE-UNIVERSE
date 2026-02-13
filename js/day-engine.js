window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:50px;'>Memory Not Found!</h1>";
        return;
    }

    const body = document.getElementById('dynamic-body');
    if(data.theme) {
        document.documentElement.style.setProperty('--accent', data.theme);
        document.documentElement.style.setProperty('--primary-color', data.theme);
    }

    // LAYOUT ROUTING
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else if (data.layout === "timeline") renderTimeline(data, body);
    else renderClassic(data, body, dayId); // Purana effects yahan handle hoga

    // Particles start (Hearts, Stars, Snow)
    if(data.particles || data.effect) startParticles(data.particles || data.effect);
}

// --- CLASSIC LOOK (Day 1-7 with ALL Effects) ---
function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let layoutClass = "";
    let extraHTML = "";

    // Specific Effects Assignment
    if (dayNum <= 4) layoutClass = "blur-logic";
    else if (data.layout === "scratch-card") { layoutClass = "scratch-card"; extraHTML = `<canvas id="scratch-canvas"></canvas>`; }
    else if (data.layout === "virtual-hug") { layoutClass = "pulse-card hug-mode"; extraHTML = `<div class="hug-overlay">❤️</div>`; }
    else if (data.layout === "infinity-portal") { layoutClass = "portal-view"; }

    container.className = "classic-vibe";
    container.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper">
            <div class="glass-container ${layoutClass}" id="main-layout">
                <div class="img-frame" id="img-container">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${dayNum <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="player-section">
                    <div class="audio-box"><span>🎵 Music</span><audio id="bg-music" controls loop src="${data.song}"></audio></div>
                    ${data.voice ? `<div id="voice-section" class="audio-box"><span>🎤 Voice</span><audio id="voice-note" controls src="${data.voice}"></audio></div>` : ''}
                </div>
                <button onclick="revealSecret('${data.hidden}')" class="heart-btn">❤️ Tap to Reveal</button>
                <div id="secret-msg" class="secret-box hidden"></div>
                <a href="chapters.html" class="back-link">← Back</a>
            </div>
        </div>
    `;

    // --- EFFECT INITIALIZATION ---
    const img = document.getElementById('day-img');

    // Day 1-4: Blur Toggle (Touch logic)
    if (dayNum <= 4) {
        img.addEventListener('click', (e) => { e.stopPropagation(); img.style.filter = "blur(0)"; });
        document.addEventListener('click', () => { img.style.filter = "blur(35px)"; });
    }

    // Day 5: Scratch Effect
    if (data.layout === "scratch-card") setupScratchEffect();

    // Day 6: Virtual Hug (Long Press)
    if (data.layout === "virtual-hug") {
        let timer;
        const start = () => { 
            document.getElementById('main-layout').classList.add('vibrate', 'hug-active');
            if(navigator.vibrate) navigator.vibrate(200);
            timer = setTimeout(() => revealSecret(data.hidden), 2000);
        };
        const end = () => { document.getElementById('main-layout').classList.remove('vibrate', 'hug-active'); clearTimeout(timer); };
        img.addEventListener('touchstart', start); img.addEventListener('touchend', end);
        img.addEventListener('mousedown', start); img.addEventListener('mouseup', end);
    }

    // Day 7: Infinity Portal (Double Tap)
    if (data.layout === "infinity-portal") {
        let lastTap = 0;
        img.addEventListener('click', (e) => {
            let now = new Date().getTime();
            if (now - lastTap < 300) {
                createBurst();
                if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
            }
            lastTap = now;
        });
    }
}

// --- NEW LAYOUTS (Day 8+) ---
function renderGallery(data, container) {
    container.className = "layout-gallery";
    container.innerHTML = `<header><h1>${data.title}</h1><p>${data.message}</p></header>
    <div class="gallery-grid">${data.items.map(i => `<div class="mem-card"><img src="${i.img}"><div class="mem-info"><h3>${i.cap}</h3></div></div>`).join('')}</div>
    <div class="nav-links"><a href="chapters.html">← Back</a></div>`;
}

function renderMusicPlayer(data, container) {
    container.className = "layout-player";
    container.innerHTML = `<div class="player-card"><div class="art-circle"><div class="pulse-ring"></div><img src="${data.image}"></div>
    <h2>${data.title}</h2><p>${data.message}</p><div class="connection-meter"><span id="perc">0%</span><div class="bar"><div class="fill" id="fill-bar"></div></div></div>
    <audio id="m-audio" src="${data.song}"></audio><button class="p-btn" onclick="toggleMusic()">▶ Play Tune</button></div>`;
    setTimeout(startMeter, 500);
}

// --- CORE UTILITIES ---
function setupScratchEffect() {
    const canvas = document.getElementById('scratch-canvas');
    const img = document.getElementById('day-img');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = '#C0C0C0'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
        const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
        ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(x, y, 30, 0, Math.PI*2); ctx.fill();
    };
    canvas.addEventListener('mousemove', (e) => { if(e.buttons===1) scratch(e); });
    canvas.addEventListener('touchmove', (e) => { scratch(e); e.preventDefault(); });
}

function startParticles(type) {
    const layer = document.getElementById('particles-layer') || document.body;
    let symbol = (type === "snow") ? "❄️" : (type === "stars") ? "⭐" : "❤️";
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div'); p.className = 'particle'; p.innerText = symbol;
        p.style.left = Math.random() * 100 + 'vw'; p.style.animationDuration = (Math.random()*3+2)+'s';
        layer.appendChild(p);
    }
}

function createBurst() {
    for(let i=0; i<15; i++) {
        const h = document.createElement('div'); h.className = 'floating-heart'; h.innerHTML = '❤️';
        h.style.left = (Math.random() * 90) + 'vw'; document.body.appendChild(h);
        setTimeout(() => h.remove(), 2000);
    }
}

function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    if(box) { box.innerText = msg; box.classList.toggle('hidden'); box.classList.add('show'); }
}

function toggleMusic() {
    const a = document.getElementById('m-audio');
    a.paused ? a.play() : a.pause();
}

function startMeter() {
    let p = 0;
    let int = setInterval(() => {
        p++; document.getElementById('perc').innerText = p + "% ❤️";
        document.getElementById('fill-bar').style.width = p + "%";
        if(p >= 100) clearInterval(int);
    }, 40);
}
