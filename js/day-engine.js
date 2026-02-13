window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    const body = document.getElementById('dynamic-body');
    if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

    // ROUTING
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId); // Hum dayId bhej rahe hain logic ke liye
}

function renderClassic(data, body, dayId) {
    let interactionClass = "";
    let extraHTML = "";
    let dayNum = parseInt(dayId);

    // Logic for Vibes
    if (dayNum <= 4) interactionClass = "blur-reveal";
    else if (dayNum === 5) {
        interactionClass = "scratch-mode";
        extraHTML = `<canvas id="scratch-canvas"></canvas>`;
    }
    else if (dayNum === 6) {
        interactionClass = "hug-mode";
        extraHTML = `<div class="hug-overlay">❤️</div>`;
    }
    else if (dayNum === 7) {
        interactionClass = "portal-mode";
    }

    body.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper ${interactionClass}">
            <div class="glass-container">
                <div class="img-frame" id="img-box">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${dayNum <= 4 ? 'blur-img' : ''}">
                </div>
                <h1>${data.title}</h1>
                <p id="instruction">${getInstruction(dayNum)}</p>
                <div class="player-section">
                    <div class="audio-box"><span>🎵</span><audio controls src="${data.song}"></audio></div>
                </div>
                <button onclick="revealSecret('${data.hidden}')" class="heart-btn">❤️ Reveal Secret</button>
                <div id="secret-msg" class="secret-box hidden"></div>
                <a href="chapters.html" class="back-link">← Back</a>
            </div>
        </div>
    `;

    // Initialize Special Actions
    if (dayNum === 5) initScratch();
    if (dayNum === 6) initLongPress();
    if (dayNum === 7) initDoubleTap();
}

function getInstruction(day) {
    if(day <= 4) return "Touch the photo to see clearly...";
    if(day === 5) return "Scratch the screen to find me...";
    if(day === 6) return "Long Press on photo to feel the hug...";
    if(day === 7) return "Double Tap for infinite love...";
    return "";
}

// --- SPECIAL INTERACTION LOGICS ---

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#888";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    };
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch);
}

function initLongPress() {
    const box = document.getElementById('img-box');
    let timer;
    box.addEventListener('touchstart', () => {
        timer = setTimeout(() => {
            document.querySelector('.main-wrapper').classList.add('hug-active');
            if(navigator.vibrate) navigator.vibrate(200);
        }, 1500);
    });
    box.addEventListener('touchend', () => {
        clearTimeout(timer);
        document.querySelector('.main-wrapper').classList.remove('hug-active');
    });
}

function initDoubleTap() {
    const box = document.getElementById('img-box');
    box.addEventListener('dblclick', (e) => {
        createHeartBurst(e.clientX, e.clientY);
    });
    // For Mobile
    let lastTap = 0;
    box.addEventListener('touchend', (e) => {
        let now = new Date().getTime();
        if(now - lastTap < 300) createHeartBurst(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        lastTap = now;
    });
}

function createHeartBurst(x, y) {
    for(let i=0; i<10; i++) {
        const h = document.createElement('div');
        h.innerHTML = "❤️";
        h.className = "floating-heart";
        h.style.left = x + "px";
        h.style.top = y + "px";
        h.style.setProperty('--rx', (Math.random()*200 - 100) + "px");
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 2000);
    }
}

function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    box.innerText = msg;
    box.classList.toggle('hidden');
}
