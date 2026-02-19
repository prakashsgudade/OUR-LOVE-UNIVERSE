window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    // Dynamic Router
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else if (data.layout === "split-view") renderSplit(data, body);
    else if (data.layout === "3d-card") render3D(data, body);
    else renderClassic(data, body, dayId);

    if(data.particles || data.effect) {
        setInterval(() => createParticle(data.particles || data.effect, data.theme), 400);
    }
};

// --- New Advanced Layouts ---
function renderSplit(data, container) {
    container.innerHTML = `
        <div class="split-view">
            <div class="split-img" style="background-image:url('${data.image}')"></div>
            <div class="split-content">
                <h1 style="color:${data.theme}">${data.title}</h1>
                <p>${data.message}</p>
                <div class="audio-card"><audio controls src="${data.song}"></audio></div>
                <button class="heart-btn" onclick="alert('${data.hidden}')" style="background:${data.theme}">Secret Message</button>
            </div>
        </div>`;
}

function render3D(data, container) {
    container.innerHTML = `
        <div class="main-wrapper">
            <div class="card-3d" style="border-top: 5px solid ${data.theme}">
                <img src="${data.image}" class="floating-img">
                <h1 style="color:${data.theme}">${data.title}</h1>
                <p>${data.message}</p>
                <audio controls src="${data.song}"></audio>
            </div>
        </div>`;
}

// Copy other render functions (renderClassic, renderGallery, etc.) from previous code here
