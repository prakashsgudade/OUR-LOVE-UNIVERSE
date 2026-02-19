window.onload = function() {
    // 1. Get Day ID from URL
    const params = new URLSearchParams(window.location.search);
    const dayId = params.get('d') || "1";
    
    // 2. Security Check
    if (typeof loveDays === 'undefined') {
        document.body.innerHTML = "<h2 style='color:red; text-align:center; padding:50px;'>Error: days-data.js not found!</h2>";
        return;
    }

    const data = loveDays.get(dayId);
    
    // 3. Update Theme
    document.documentElement.style.setProperty('--accent', data.theme);
    
    // 4. Inject Content
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame">
                    <img src="${data.image}" onerror="this.src='https://via.placeholder.com/400x300?text=I+Love+You+Muskan'">
                </div>
                <h1 class="title">${data.title}</h1>
                <p class="msg">${data.message}</p>
                
                <audio id="bgMusic" autoplay loop src="${data.song}"></audio>

                <button class="action-btn" onclick="reveal()">Reveal My Secret</button>
                <div id="secret-msg" class="secret-box">${data.hidden}</div>
                
                <a href="chapters.html" class="back-link">← VIEW ALL DAYS</a>
            </div>
        </div>
    `;

    // 5. Start Hearts
    setInterval(spawnHeart, 500);
};

function reveal() {
    document.getElementById('secret-msg').classList.toggle('show');
}

function spawnHeart() {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.fontSize = Math.random() * 15 + 15 + "px";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
