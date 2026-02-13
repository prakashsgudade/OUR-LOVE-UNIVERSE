window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    const body = document.getElementById('dynamic-body');
    if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);
}

function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let interactionClass = "";
    let extraHTML = "";

    if (dayNum === 1 || dayNum === 2) interactionClass = "blur-mode";
    else if (dayNum === 5) { interactionClass = "scratch-mode"; extraHTML = `<canvas id="scratch-canvas"></canvas>`; }
    else if (dayNum === 6) { interactionClass = "hug-mode"; extraHTML = `<div class="hug-overlay">❤️</div>`; }
    else if (dayNum === 7) interactionClass = "portal-mode";

    container.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper ${interactionClass}">
            <div class="glass-container">
                <div class="img-frame" id="img-box">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${(dayNum===1 || dayNum===2) ? 'blur-img' : ''}">
                </div>
                <h1 class="title-font">${data.title}</h1>
                <p class="msg-text">${data.message}</p>
                <div class="player-section">
                    <div class="audio-box"><span>🎵 Music</span><audio controls src="${data.song}"></audio></div>
                    ${data.voice ? `<div class="audio-box"><span>🎤 Voice</span><audio controls src="${data.voice}"></audio></div>` : ''}
                </div>
                <button onclick="revealSecret('${data.hidden}')" class="heart-btn">❤️ Tap to Reveal</button>
                <div id="secret-msg" class="secret-box hidden"></div>
                <a href="chapters.html" class="back-link">← Back</a>
            </div>
        </div>
    `;

    // DAY 1 & 2: TOUCH LOGIC
    if (dayNum === 1 || dayNum === 2) {
        const img = document.getElementById('day-img');
        img.addEventListener('click', (e) => { e.stopPropagation(); img.classList.add('unblurred'); });
        document.addEventListener('click', () => { img.classList.remove('unblurred'); });
    }

    if (dayNum === 5) initScratch();
    if (dayNum === 6) initLongPress();
    if (dayNum === 7) initDoubleTap();
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#444"; ctx.fillRect(0,0,canvas.width, canvas.height);
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(x, y, 35, 0, Math.PI*2); ctx.fill();
    };
    canvas.addEventListener('mousemove', scratch); canvas.addEventListener('touchmove', scratch);
}

function initLongPress() {
    const box = document.getElementById('img-box');
    let timer;
    const start = () => { timer = setTimeout(() => { 
        document.querySelector('.main-wrapper').classList.add('hug-active');
        if(navigator.vibrate) navigator.vibrate(200);
    }, 1000); };
    const end = () => { clearTimeout(timer); document.querySelector('.main-wrapper').classList.remove('hug-active'); };
    box.addEventListener('touchstart', start); box.addEventListener('touchend', end);
    box.addEventListener('mousedown', start); box.addEventListener('mouseup', end);
}

function initDoubleTap() {
    const box = document.getElementById('img-box');
    let lastTap = 0;
    const burst = (e) => {
        const x = e.clientX || e.changedTouches[0].clientX;
        const y = e.clientY || e.changedTouches[0].clientY;
        for(let i=0; i<8; i++) {
            const h = document.createElement('div'); h.innerHTML = "❤️"; h.className = "floating-heart";
            h.style.left = x+"px"; h.style.top = y+"px";
            h.style.setProperty('--rx', (Math.random()*200-100)+"px");
            document.body.appendChild(h); setTimeout(() => h.remove(), 2000);
        }
    };
    box.addEventListener('dblclick', burst);
    box.addEventListener('touchend', (e) => {
        let now = new Date().getTime(); if(now - lastTap < 300) burst(e); lastTap = now;
    });
}

function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    box.innerText = msg; box.classList.toggle('hidden');
}
