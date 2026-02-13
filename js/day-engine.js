window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:50px;'>Memory Not Found!</h1>";
        return;
    }

    const body = document.getElementById('dynamic-body');

    // STEP 1: Layout Routing
    if (data.layout === "gallery") {
        renderGallery(data, body);
    } 
    else if (data.layout === "music-player") {
        renderMusicPlayer(data, body);
    } 
    else if (data.layout === "timeline") {
        renderTimeline(data, body);
    } 
    else {
        // Default: Tera purana Glass Container (Day 1-7)
        renderClassic(data, body);
    }
    
    // Accent color injection
    if(data.theme) {
        document.documentElement.style.setProperty('--accent', data.theme);
        document.documentElement.style.setProperty('--primary-color', data.theme);
    }
}

// --- Layout 1: Modern Gallery (Day 8+) ---
function renderGallery(data, container) {
    container.className = "layout-gallery";
    container.innerHTML = `
        <div class="bg-animate"></div>
        <header>
            <h1>${data.title}</h1>
            <p>${data.message}</p>
        </header>
        <div class="gallery-grid">
            ${data.items.map(item => `
                <div class="mem-card">
                    <img src="${item.img}">
                    <div class="mem-info"><h3>${item.cap}</h3></div>
                </div>
            `).join('')}
        </div>
        <div class="nav-links"><a href="chapters.html">← Back to Universe</a></div>
    `;
}

// --- Layout 2: Music Player Style ---
function renderMusicPlayer(data, container) {
    container.className = "layout-player";
    container.innerHTML = `
        <div class="player-card">
            <div class="art-circle">
                <div class="pulse-ring"></div>
                <img src="${data.image || 'assets/images/default-music.jpg'}">
            </div>
            <h2>${data.title}</h2>
            <p>${data.message}</p>
            <div class="connection-meter">
                <span id="perc">0%</span>
                <div class="bar"><div class="fill" id="fill-bar"></div></div>
            </div>
            <audio id="m-audio" src="${data.song}"></audio>
            <button class="p-btn" onclick="toggleMusic()">▶ Play Our Tune</button>
        </div>
        <div class="nav-links"><a href="chapters.html">← Back</a></div>
    `;
    setTimeout(startMeter, 500);
}

// --- Layout 3: Timeline Style ---
function renderTimeline(data, container) {
    container.className = "layout-timeline";
    container.innerHTML = `
        <div class="timeline-line"></div>
        <header class="t-header">
            <h1>${data.title}</h1>
            <p>${data.message}</p>
        </header>
        <div class="t-container">
            ${data.steps.map(s => `
                <div class="t-section">
                    <div class="t-card">
                        <span class="t-time">${s.time}</span>
                        <h2>${s.head}</h2>
                        <p>${s.text}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="nav-links"><a href="chapters.html">← Back</a></div>
    `;
}

// --- Helper: Tera Purana Classic Look (Day 1-7) ---
function renderClassic(data, container) {
    container.className = "classic-vibe";
    container.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper">
            <div class="glass-container" id="main-layout">
                <div class="img-frame">
                    <img id="day-img" src="${data.image}" alt="Memory">
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
}

// --- Functions ---
function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    box.innerText = msg;
    box.classList.toggle('hidden');
}

function toggleMusic() {
    const audio = document.getElementById('m-audio');
    const btn = document.querySelector('.p-btn');
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸ Pause Tune";
    } else {
        audio.pause();
        btn.innerText = "▶ Play Our Tune";
    }
}

function startMeter() {
    let p = 0;
    let int = setInterval(() => {
        p++;
        const percText = document.getElementById('perc');
        const fillBar = document.getElementById('fill-bar');
        if(percText) percText.innerText = p + "% ❤️";
        if(fillBar) fillBar.style.width = p + "%";
        if(p >= 100) clearInterval(int);
    }, 40);
}
