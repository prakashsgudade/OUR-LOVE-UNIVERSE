window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    
    // Call the generator from days-data.js
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // UI Render
    renderClassic(data, body, dayId);

    // Particles System
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => createParticle(data.particles || "hearts", data.theme), 500);
};

function renderClassic(data, container, dayId) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="day-badge" style="background:${data.theme}">DAY ${dayId}</div>
                <div class="img-frame" style="border-color:${data.theme}">
                    <img id="day-img" src="${data.image}" onerror="this.src='assets/images/background.jpg'">
                </div>
                <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
                <div class="message-box">
                    <p id="day-message">${data.message}</p>
                </div>
                <div class="audio-section">
                    <div class="audio-card">
                        <label style="color:${data.theme}">🎵 CURRENT VIBE</label>
                        <audio controls autoplay src="${data.song}"></audio>
                    </div>
                </div>
                <button class="heart-btn" id="reveal-btn" style="background:${data.theme}">TAP FOR SECRET</button>
                <div id="secret-msg" class="secret-box"></div>
                <a href="chapters.html" class="back-link" style="color:${data.theme}">← Back to Journey</a>
            </div>
        </div>`;

    document.getElementById('reveal-btn').onclick = function() {
        const box = document.getElementById('secret-msg');
        box.classList.toggle('show');
        box.innerText = data.hidden;
    };
}

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
