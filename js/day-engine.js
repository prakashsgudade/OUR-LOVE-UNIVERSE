window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    body.innerHTML = '<div id="particles-layer"></div>';

    // Layout Engine
    switch(data.layout) {
        case "ai-chat": renderAIChat(data, body); break;
        case "stats-dashboard": renderStats(data, body, dayId); break;
        case "quiz-game": renderQuiz(data, body); break;
        case "parallax-3d": renderParallax(data, body); break;
        case "challenge-tap": renderChallenge(data, body); break;
        case "fog-reveal": renderFog(data, body); break;
        case "gallery": renderGallery(data, body); break;
        case "music-player": renderMusicPlayer(data, body); break;
        default: renderClassic(data, body, dayId);
    }

    if(data.effect) setInterval(() => createParticle(data.effect, data.theme), 450);
};

// --- NEW SMART LAYOUTS ---

function renderAIChat(data, container) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <div class="chat-header" style="color:${data.theme}">AI Love Assistant 🤖</div>
        <div class="chat-box" id="chat-box">
            <div class="msg bot">Hello Muskan! How are you feeling today?</div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="user-msg" placeholder="Type something...">
            <button onclick="sendLoveMsg('${data.theme}')">Send</button>
        </div>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

window.sendLoveMsg = (color) => {
    const input = document.getElementById('user-msg');
    const box = document.getElementById('chat-box');
    if(!input.value) return;
    box.innerHTML += `<div class="msg user">${input.value}</div>`;
    const replies = ["I love you more than words!", "You are so beautiful!", "My heart beats only for you.", "Muskan + Me = Forever ❤️"];
    setTimeout(() => {
        box.innerHTML += `<div class="msg bot" style="border-left:3px solid ${color}">${replies[Math.floor(Math.random()*replies.length)]}</div>`;
        box.scrollTop = box.scrollHeight;
    }, 1000);
    input.value = "";
};

function renderStats(data, container, dayId) {
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 style="color:${data.theme}">Relationship Stats 📊</h1>
        <div class="stat-card"><span>Love Level:</span> <div class="bar"><div class="fill" style="width:100%; background:${data.theme}"></div></div></div>
        <div class="stat-card"><span>Trust Level:</span> <div class="bar"><div class="fill" style="width:98%; background:${data.theme}"></div></div></div>
        <div class="stat-card"><span>Miss You Level:</span> <div class="bar"><div class="fill pulse" style="width:100%; background:red"></div></div></div>
        <p style="margin-top:20px;">Current Day in Journey: ${dayId}</p>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
}

function renderChallenge(data, container) {
    let count = 0;
    container.innerHTML += `<div class="main-wrapper"><div class="glass-container">
        <h1 id="tap-title">Tap the Heart 10 times! ❤️</h1>
        <div id="tap-target" class="big-heart" onclick="handleTap(this)">❤️</div>
        <div id="tap-count">0 / 10</div>
        <div id="challenge-res" class="secret-box"></div>
        <center><a href="chapters.html" class="back-link">← BACK</a></center>
    </div></div>`;
    window.handleTap = (el) => {
        count++;
        document.getElementById('tap-count').innerText = `${count} / 10`;
        el.style.transform = "scale(1.5)"; setTimeout(()=>el.style.transform="scale(1)", 100);
        if(count === 10) {
            document.getElementById('challenge-res').innerText = data.hidden;
            document.getElementById('challenge-res').classList.add('show');
            document.getElementById('tap-title').innerText = "Challenge Won!";
        }
    };
}

// --- CORE ENGINE FIXES ---
function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    const icons = { hearts: "❤️", stars: "⭐", snow: "❄️", galaxy: "✨", fireworks: "💥" };
    p.innerText = icons[type] || "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

// (Include your previous renderClassic, renderGallery, etc. here or keep them as is)
