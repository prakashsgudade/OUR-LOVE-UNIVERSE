window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    const body = document.getElementById('dynamic-body');

    // STEP 1: Layout Choice Logic
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
        // --- TERA PURANA GLASS CONTAINER LOGIC (Day 1-7) ---
        renderClassic(data, body);
    }
    
    // Theme accent color set karna
    if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);
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
        <div class="nav-links"><a href="chapters.html">← Back</a></div>
    `;
}

// --- Layout 2: Music Player Style ---
function renderMusicPlayer(data, container) {
    container.className = "layout-player";
    container.innerHTML = `
        <div class="player-card">
            <div class="art-circle"><div class="pulse-ring"></div><img src="${data.image}"></div>
            <h2>${data.title}</h2>
            <p>${data.message}</p>
            <div class="connection-meter">
                <span id="perc">0%</span>
                <div class="bar"><div class="fill" id="fill-bar"></div></div>
            </div>
            <audio id="m-audio" src="${data.song}"></audio>
            <button class="p-btn" onclick="document.getElementById('m-audio').play()">▶ Play Our Tune</button>
        </div>
        <div class="nav-links"><a href="chapters.html">← Back</a></div>
    `;
    setTimeout(startMeter, 500);
}

// --- Layout 3: Futuristic Timeline ---
function renderTimeline(data, container) {
    container.className = "layout-timeline";
    container.innerHTML = `
        <div class="line"></div>
        <div class="t-header"><h1>${data.title}</h1></div>
        ${data.steps.map(s => `
            <div class="t-section">
                <div class="t-card">
                    <span>${s.time}</span>
                    <h2>${s.head}</h2>
                    <p>${s.text}</p>
                </div>
            </div>
        `).join('')}
        <div class="nav-links"><a href="chapters.html">← Back</a></div>
    `;
}

// --- Helper: Purana Layout (Day 1-7) ---
function renderClassic(data, container) {
    // Yahan tera purana HTML structure (Glass container wala)
    container.innerHTML = `<div class="main-wrapper"><div class="glass-container">... (Tera Purana Code) ...</div></div>`;
}

function startMeter() {
    let p = 0;
    let int = setInterval(() => {
        p++;
        document.getElementById('perc').innerText = p + "% ❤️";
        document.getElementById('fill-bar').style.width = p + "%";
        if(p >= 100) clearInterval(int);
    }, 30);
}
