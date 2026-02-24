window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = getDayData(dayId);
    const body = document.getElementById('dynamic-body');
    
    document.documentElement.style.setProperty('--accent', data.theme);

    // Time & Theme Logic
    const hr = new Date().getHours();
    if(hr > 19 || hr < 6) body.classList.add('night-vibe');

    // Particles
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerHTML = data.particles === "hearts" ? "❤️" : data.particles === "stars" ? "⭐" : "🌸";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (Math.random() * 3 + 2) + "s";
        pLayer.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }, 600);

    // Layout Router
    let layoutHtml = `<div class="main-container ${data.layout}">`;
    if(data.layout === "dna-scanner") layoutHtml += `<div class="scan-bar"></div>`;
    if(data.layout === "heart-sync") {
        layoutHtml += `<div class="sync-heart">❤️</div>`;
        document.addEventListener('mousemove', (e) => {
            let s = (e.clientX / window.innerWidth) * 1.5 + 0.2;
            document.documentElement.style.setProperty('--heart-beat', `${s}s`);
        });
    }

    layoutHtml += `
        <div class="glass-box">
            <div class="img-wrapper"><img src="${data.image}"></div>
            <h1 class="love-title">${data.title}</h1>
            <p class="love-msg">${data.message}</p>
            <button class="btn-secret" onclick="alert('${data.hidden}')">Tap For Secret</button>
            <a href="../chapters.html" class="back-link">← Back to Universe</a>
        </div>
        <audio autoplay loop src="${data.song}"></audio>
    </div>`;
    
    body.innerHTML = layoutHtml;
};
