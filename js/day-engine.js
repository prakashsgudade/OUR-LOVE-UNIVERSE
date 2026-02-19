window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    
    // Check if data exists in loveDays
    if (typeof loveDays === 'undefined') {
        console.error("Error: loveDays data not found! Make sure days-data.js is loaded.");
        document.body.innerHTML = "<div style='color:white; text-align:center; padding-top:50px;'>Data File Missing!</div>";
        return;
    }

    const data = loveDays.get(dayId);
    if (!data) {
        document.body.innerHTML = "<div style='color:white; text-align:center; padding-top:50px;'>Day Not Found!</div>";
        return;
    }

    // Apply Theme Color
    document.documentElement.style.setProperty('--accent', data.theme || "#ff4d6d");
    
    const container = document.getElementById('app-container');
    
    // Choose Layout based on data
    let layoutHTML = "";

    if (data.layout === "scratch-card") {
        layoutHTML = renderScratchLayout(data);
    } else if (data.layout === "virtual-hug") {
        layoutHTML = renderHugLayout(data);
    } else {
        layoutHTML = renderClassicLayout(data);
    }

    container.innerHTML = layoutHTML;

    // Start Particles
    if (data.particles) {
        setInterval(() => createParticle(data.particles, data.theme), 400);
    }
};

// --- LAYOUT: CLASSIC ---
function renderClassicLayout(data) {
    return `
        <div class="main-wrapper">
            <div class="glass-container">
                <div class="img-frame">
                    <img src="${data.image}" onerror="this.src='assets/images/home/m1.jpg'">
                </div>
                <h1 class="title">${data.title}</h1>
                <div class="msg">${data.message}</div>
                
                <div class="audio-section" style="margin-bottom:20px;">
                    <audio controls autoplay loop src="${data.song}" style="width:100%; height:35px; filter:invert(1);"></audio>
                </div>

                <button class="action-btn" onclick="toggleSecret()">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box">${data.hidden}</div>
                
                <a href="chapters.html" class="back-link">← BACK TO TIMELINE</a>
            </div>
        </div>
    `;
}

// --- LAYOUT: SCRATCH CARD ---
function renderScratchLayout(data) {
    return `
        <div class="main-wrapper">
            <div class="glass-container">
                <h1 class="title">Scratch My Heart</h1>
                <p class="msg">${data.message}</p>
                <div style="position:relative; width:250px; height:150px; margin: 20px auto; background:#222; border-radius:15px; display:flex; align-items:center; justify-content:center; border:2px dashed var(--accent);">
                    <div style="font-weight:bold; color:var(--accent);">${data.hidden}</div>
                    <div id="scratch-layer" onclick="this.style.opacity=0" style="position:absolute; top:0; left:0; width:100%; height:100%; background:#777; border-radius:13px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:0.5s;">
                        TAP TO SCRATCH
                    </div>
                </div>
                <a href="chapters.html" class="back-link">← BACK TO TIMELINE</a>
            </div>
        </div>
    `;
}

// --- LAYOUT: VIRTUAL HUG ---
function renderHugLayout(data) {
    return `
        <div class="main-wrapper">
            <div class="glass-container" style="text-align:center;">
                <h1 class="title">Virtual Hug</h1>
                <div class="img-frame" id="hug-frame" style="transition:0.3s; cursor:pointer;" onmousedown="startHug()" onmouseup="endHug()" ontouchstart="startHug()" ontouchend="endHug()">
                    <img src="${data.image}" onerror="this.src='assets/images/home/m1.jpg'">
                </div>
                <p class="msg" id="hug-msg">Hold the photo to feel the hug... 🤗</p>
                <div id="secret-msg" class="secret-box">${data.hidden}</div>
                <a href="chapters.html" class="back-link">← BACK TO TIMELINE</a>
            </div>
        </div>
    `;
}

// --- UTILS ---
function toggleSecret() {
    const box = document.getElementById('secret-msg');
    if(box) box.classList.toggle('show');
}

function startHug() {
    document.getElementById('hug-frame').style.transform = "scale(0.9)";
    document.getElementById('hug-msg').innerText = "Holding you tight... ❤️";
}

function endHug() {
    document.getElementById('hug-frame').style.transform = "scale(1)";
    document.getElementById('hug-msg').innerText = "I'm always with you!";
    document.getElementById('secret-msg').classList.add('show');
}

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : (type === "snow") ? "❄️" : "❤️";
    p.style.color = color;
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.fontSize = (Math.random() * 20 + 10) + "px";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
