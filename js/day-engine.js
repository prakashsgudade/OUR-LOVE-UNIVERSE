window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Front-layer particles container
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    if(data.particles || data.effect) startParticles(data.particles || data.effect);
};

function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let extraHTML = (data.layout === "scratch-card") ? `<canvas id="scratch-canvas"></canvas>` : "";

    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container" id="main-card">
                <div class="img-frame" id="img-container">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${dayNum <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                
                <div class="audio-section">
                    <div class="audio-card">
                        <label>🎵 BACKGROUND MUSIC</label>
                        <audio id="bg-music" controls loop src="${data.song}"></audio>
                    </div>
                    ${data.voice ? `
                    <div class="audio-card">
                        <label>🎤 HER VOICE NOTE</label>
                        <audio controls src="${data.voice}"></audio>
                    </div>` : ''}
                </div>

                <button class="heart-btn" style="background: ${data.theme}" onclick="toggleSecret('${data.hidden}')">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                
                <a href="chapters.html" class="back-link">← Back to Timeline</a>
            </div>
        </div>`;

    const img = document.getElementById('day-img');
    if (dayNum <= 4) img.onclick = () => img.style.filter = "blur(0)";
    if (data.layout === "scratch-card") initScratch();
    if (data.layout === "virtual-hug") initHug(data.hidden);
    if (data.layout === "infinity-portal") initHeartBloom();
}

function toggleSecret(msg) {
    const box = document.getElementById('secret-msg');
    if (box.classList.contains('show')) {
        box.classList.remove('show');
    } else {
        box.innerText = msg;
        box.classList.add('show');
    }
}

function startParticles(type) {
    const layer = document.getElementById('particles-layer');
    const symbol = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : "❤️";
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle'; p.innerText = symbol;
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";
        p.style.fontSize = (Math.random() * 20 + 10) + "px";
        layer.appendChild(p);
        setTimeout(() => p.remove(), 4000);
    }, 400);
}

function initHug(secret) {
    const img = document.getElementById('day-img');
    let timer;
    const start = () => {
        if (navigator.vibrate) navigator.vibrate(200);
        img.style.transform = "scale(0.96)";
        timer = setTimeout(() => { toggleSecret(secret); }, 1500);
    };
    const end = () => { img.style.transform = "scale(1)"; clearTimeout(timer); };
    img.ontouchstart = start; img.ontouchend = end;
}

function initHeartBloom() {
    const frame = document.getElementById('img-container');
    frame.onclick = () => {
        for(let i=0; i<10; i++){
            const h = document.createElement('div');
            h.className='bloom-heart'; h.innerHTML='❤️';
            h.style.left='50%'; h.style.top='50%';
            h.style.setProperty('--tx',(Math.random()*300-150)+'px');
            h.style.setProperty('--ty',(Math.random()*300-150)+'px');
            frame.appendChild(h); setTimeout(()=>h.remove(), 1000);
        }
    }
}

function renderGallery(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <div class="gallery-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:15px 0;">
            ${data.items.map(i => `<div style="text-align:center"><img src="${i.img}" style="width:100%; border-radius:15px; border:2px solid ${data.theme}"><p style="font-size:0.7rem; margin-top:5px;">${i.cap}</p></div>`).join('')}
        </div>
        <a href="chapters.html" class="back-link">← Back</a>
    </div></div>`;
}

function renderMusicPlayer(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <div class="img-frame" style="border-radius:50%; border-color:${data.theme}"><img src="${data.image}"></div>
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <audio controls autoplay src="${data.song}" style="width:100%; margin-top:20px;"></audio>
        <br><a href="chapters.html" class="back-link">← Back</a>
    </div></div>`;
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
        ctx.beginPath(); ctx.arc(x, y, 35, 0, Math.PI * 2); ctx.fill();
    };
    canvas.ontouchmove = (e) => { scratch(e); e.preventDefault(); };
}
