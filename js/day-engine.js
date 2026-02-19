window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    
    // Get data from days-data.js (Day 1-10 manual, 11+ auto)
    const data = loveDays.get(dayId);
    
    if (!data) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center;'>Day Not Found!</h1>";
        return;
    }

    // Set Theme Color
    document.documentElement.style.setProperty('--accent', data.theme);
    
    const container = document.getElementById('app-container');
    
    // Render the Main Layout
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame">
                    <img src="${data.image}" id="day-img" onerror="this.src='assets/images/home/m1.jpg'">
                </div>
                <h1 class="title">${data.title}</h1>
                <div class="msg">${data.message}</div>
                
                <div class="audio-section" style="margin-bottom:20px;">
                    <p style="font-size:0.7rem; color:var(--accent); margin-bottom:5px;">🎵 NOW PLAYING</p>
                    <audio controls autoplay loop src="${data.song}" style="width:100%; height:30px; filter:invert(1);"></audio>
                </div>

                <button class="action-btn" onclick="toggleSecret()">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box">${data.hidden}</div>
                
                <a href="chapters.html" class="back-link">← BACK TO TIMELINE</a>
            </div>
        </div>
    `;

    // Start Particles
    if(data.particles) {
        setInterval(() => createParticle(data.particles, data.theme), 400);
    }
};

function toggleSecret() {
    const box = document.getElementById('secret-msg');
    box.classList.toggle('show');
}

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
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
