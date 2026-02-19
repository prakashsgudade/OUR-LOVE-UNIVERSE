window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays.get(dayId);
    
    if(!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const container = document.getElementById('app-container');

    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame">
                    <img src="${data.image}" onerror="this.src='https://via.placeholder.com/400x300?text=Love+You+Muskan'">
                </div>
                <h1 class="title">${data.title}</h1>
                <div class="msg">${data.message}</div>
                
                <audio id="player" autoplay loop src="${data.song}"></audio>

                <button class="action-btn" onclick="reveal()">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box">${data.hidden}</div>
                
                <a href="chapters.html" class="back-link">← Back to Timeline</a>
            </div>
        </div>
    `;

    setInterval(createParticle, 500);
};

function reveal() {
    document.getElementById('secret-msg').classList.toggle('show');
}

function createParticle() {
    const layer = document.getElementById('particles-layer');
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.fontSize = "20px";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
