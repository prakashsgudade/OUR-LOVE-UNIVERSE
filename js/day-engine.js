window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

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
    p.style.color = color;
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
            <div class="glass-container ${isDay6 ? 'hug-pulse' : ''}">
                <div class="img-frame" id="img-container" style="border-color:${data.theme}">
                    ${isDay5 ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section">
                    <div class="audio-card"><label>🎵 BACKGROUND MUSIC</label><audio controls loop src="${data.song}"></audio></div>
                    ${data.voice ? `<div class="audio-card"><label>🎤 HER VOICE NOTE</label><audio controls src="${data.voice}"></audio></div>` : ''}
                </div>
                <button class="heart-btn" id="reveal-btn" style="background: ${data.theme}">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK TO TIMELINE</a></center>
            </div>
        </div>`;

    // Secret Toggle Fix
    document.getElementById('reveal-btn').onclick = function() {
        const box = document.getElementById('secret-msg');
        if(box.classList.contains('show')) {
            box.classList.remove('show');
            setTimeout(() => box.innerText = "", 500);
        } else {
            box.innerText = data.hidden;
            box.classList.add('show');
        }
    };

    const img = document.getElementById('day-img');
    if (parseInt(dayId) <= 4) {
        img.onclick = () => img.classList.toggle('clear');
    }

    if (isDay5) initScratch();
    if (isDay6) initHug(data.hidden);
    if (data.layout === "infinity-portal") initHeartBloom();
}

function initHug(secret) {
    const img = document.getElementById('day-img');
    let timer;
    const startHug = () => {
        if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
        img.style.transform = "scale(0.9)";
        timer = setTimeout(() => { 
            const box = document.getElementById('secret-msg');
            box.innerText = secret; box.classList.add('show');
            alert("Sent you a Virtual Hug! ❤️");
        }, 2000);
    };
    const endHug = () => { img.style.transform = "scale(1)"; clearTimeout(timer); };
    img.ontouchstart = startHug; img.ontouchend = endHug;
    img.onmousedown = startHug; img.onmouseup = endHug;
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#666"; ctx.fillRect(0,0,canvas.width,canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 40, 0, Math.PI * 2); ctx.fill();
    };
    canvas.ontouchmove = (e) => { scratch(e); e.preventDefault(); };
}

function initHeartBloom() {
    const frame = document.getElementById('img-container');
    frame.onclick = () => {
        for(let i=0; i<15; i++){
            const h = document.createElement('div');
            h.className='bloom-heart'; h.innerHTML='❤️';
            h.style.left='50%'; h.style.top='50%';
            h.style.setProperty('--tx',(Math.random()*400-200)+'px');
            h.style.setProperty('--ty',(Math.random()*400-200)+'px');
            frame.appendChild(h); setTimeout(()=>h.remove(), 1000);
        }
    }
}

function renderGallery(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:20px 0;">
            ${data.items.map(i => `<div><img src="${i.img}" style="width:100%; border-radius:15px; border:3px solid ${data.theme}; box-shadow: 0 0 10px ${data.theme}"><p style="font-size:0.75rem; margin-top:8px; font-weight:600;">${i.cap}</p></div>`).join('')}
        </div>
        <a href="chapters.html" class="back-link">← BACK</a>
    </div></div>`;
}

function renderMusicPlayer(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <div class="img-frame" style="border-radius:50%; border-color:${data.theme}"><img src="${data.image}"></div>
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <p>${data.message}</p>
        <audio controls autoplay src="${data.song}" style="width:100%; margin-top:20px;"></audio>
        <br><a href="chapters.html" class="back-link">← BACK</a>
    </div></div>`;
}
