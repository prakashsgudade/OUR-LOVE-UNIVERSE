window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Add particle layer
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    // Advanced Router
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else if (data.layout === "split-view") renderSplit(data, body);
    else if (data.layout === "3d-card") render3D(data, body);
    else renderClassic(data, body, dayId);

    setInterval(() => createParticle(data.particles || "hearts", data.theme), 400);
};

// Layout Functions
function renderSplit(data, container) {
    container.innerHTML = `
        <div class="split-view" style="display:flex; height:100vh;">
            <div class="split-img" style="flex:1; background:url('${data.image}') center/cover;"></div>
            <div class="split-content" style="flex:1; padding:40px; display:flex; flex-direction:column; justify-content:center; background:#000;">
                <h1 style="color:${data.theme}">${data.title}</h1>
                <p>${data.message}</p>
                <audio controls src="${data.song}"></audio>
                <button class="heart-btn" onclick="alert('${data.hidden}')" style="background:${data.theme}; margin-top:20px; border:none; padding:15px; border-radius:30px;">Secret Message</button>
            </div>
        </div>`;
}

function render3D(data, container) {
    container.innerHTML = `
        <div class="main-wrapper" style="perspective:1000px; padding:50px;">
            <div class="card-3d" style="background:rgba(255,255,255,0.05); padding:30px; border-radius:20px; border:1px solid ${data.theme}; transform: rotateY(10deg); text-align:center;">
                <img src="${data.image}" style="width:100%; border-radius:15px;">
                <h1 style="color:${data.theme}">${data.title}</h1>
                <p>${data.message}</p>
                <audio controls src="${data.song}"></audio>
            </div>
        </div>`;
}

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : "❤️";
    p.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; color:${color}; animation:fall 5s linear forwards; font-size:20px; z-index:9999;`;
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
// Add @keyframes fall { to { transform:translateY(110vh) rotate(360deg); opacity:0; } } to CSS
