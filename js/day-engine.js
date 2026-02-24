window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    const body = document.getElementById('dynamic-body');
    
    // 1. Time Awareness Personality
    const hours = new Date().getHours();
    if(hours >= 20 || hours <= 5) body.classList.add('midnight-personality');

    // 2. Global Particles
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => createParticle(data.particles, data.theme), 600);

    // 3. Render Advanced Layouts
    renderEngine(data, body);

    // 4. Heart Sync Logic
    if(data.layout === "heart-sync") {
        document.addEventListener('mousemove', (e) => {
            const speed = (e.clientX / window.innerWidth) * 1.5;
            document.documentElement.style.setProperty('--heart-beat', `${speed}s`);
        });
    }
};

function createParticle(type, color) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = type === "hearts" ? "❤️" : type === "stars" ? "⭐" : type === "petals" ? "🌸" : "❄️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.color = color;
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('particles-layer').appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

function renderEngine(data, body) {
    let html = `<div class="main-wrapper ${data.layout}">`;
    
    if(data.layout === "dna-scanner") {
        html += `<div class="scanner-bar"></div><div class="dna-circle"><img src="${data.image}"></div>`;
    } else if(data.layout === "heart-sync") {
        html += `<div class="sync-heart">❤️</div>`;
    } else if(data.layout === "reflection-mode") {
        html += `<div class="blur-overlay"></div><img src="${data.image}" class="reflect-img">`;
    } else {
        html += `<div class="img-frame"><img src="${data.image}"></div>`;
    }

    html += `
        <h1 class="dynamic-title">${data.title}</h1>
        <p class="dynamic-msg">${data.message}</p>
        <button class="secret-trigger" onclick="alert('${data.hidden}')">Open My Heart</button>
        <a href="chapters.html" class="back-home">← Back to Universe</a>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
    
    body.innerHTML = html;
}

