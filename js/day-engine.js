window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Create particles layer
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    // Speed up particles
    if(data.particles || data.effect) {
        setInterval(() => {
            createParticle(data.particles || data.effect, data.theme);
        }, 300); 
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
    p.style.fontSize = (Math.random() * 25 + 15) + "px";
    
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let extraHTML = (data.layout === "scratch-card") ? `<canvas id="scratch-canvas"></canvas>` : "";

    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame" id="img-container" style="border-color:${data.theme}; box-shadow: 0 0 15px ${data.theme}">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${dayNum <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color: ${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                
                <div class="audio-section">
                    <div class="audio-card">
                        <label>🎵 BACKGROUND MUSIC</label>
                        <audio controls loop src="${data.song}"></audio>
                    </div>
                    ${data.voice ? `
                    <div class="audio-card">
                        <label>🎤 VOICE NOTE FOR YOU</label>
                        <audio controls src="${data.voice}"></audio>
                    </div>` : ''}
                </div>

                <button class="heart-btn" style="background: ${data.theme}" onclick="toggleSecret('${data.hidden}')">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                
                <center><a href="chapters.html" style="color:#666; text-decoration:none; font-size:0.8rem; display:block; margin-top:25px;">← BACK TO TIMELINE</a></center>
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
    box.classList.toggle('show');
    box.innerText = box.classList.contains('show') ? msg : "";
}

function initHug(secret) {
    const img = document.getElementById('day-img');
    let timer;
    img.ontouchstart = () => {
        if(navigator.vibrate) navigator.vibrate(100);
        img.style.transform = "scale(0.95)";
        timer = setTimeout(() => { toggleSecret(secret); }, 1500);
    };
    img.ontouchend = () => { img.style.transform = "scale(1)"; clearTimeout(timer); };
}

function initHeartBloom() {
    const frame = document.getElementById('img-container');
    frame.onclick = () => {
        for(let i=0; i<12; i++){
            const h = document.createElement('div');
            h.className='bloom-heart'; h.innerHTML='❤️';
            h.style.left='50%'; h.style.top='50%';
            h.style.setProperty('--tx',(Math.random()*400-200)+'px');
            h.style.setProperty('--ty',(Math.random()*400-200)+'px');
            frame.appendChild(h); setTimeout(()=>h.remove(), 1000);
        }
    }
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#444"; ctx.fillRect(0,0,canvas.width,canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 40, 0, Math.PI * 2); ctx.fill();
    };
    canvas.ontouchmove = (e) => { scratch(e); e.preventDefault(); };
}

function renderGallery(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:20px 0;">
            ${data.items.map(i => `<div><img src="${i.img}" style="width:100%; border-radius:15px; border:2px solid ${data.theme}"><p style="font-size:0.7rem; margin-top:5px;">${i.cap}</p></div>`).join('')}
        </div>
        <a href="chapters.html" style="color:${data.theme}; text-decoration:none;">← BACK</a>
    </div></div>`;
}

function renderMusicPlayer(data, container) {
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">
        <div class="img-frame" style="border-radius:50%; border-color:${data.theme}"><img src="${data.image}"></div>
        <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
        <audio controls autoplay src="${data.song}" style="width:100%; margin-top:20px;"></audio>
        <br><a href="chapters.html" style="color:${data.theme}; text-decoration:none;">← BACK</a>
    </div></div>`;
}
