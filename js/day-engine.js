window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    
    if (!data) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center;'>Day Not Found!</h1>";
        return;
    }

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    // Reset Body
    body.innerHTML = '<div id="particles-layer"></div>';

    // Layout Router Logic
    if (data.layout === "ai-chat") renderAIChat(data, body);
    else if (data.layout === "stats-dashboard") renderStats(data, body, dayId);
    else if (data.layout === "quiz-game") renderQuiz(data, body);
    else if (data.layout === "challenge-tap") renderChallenge(data, body);
    else if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    // Particles Initializer
    if(data.effect || data.particles) {
        setInterval(() => createParticle(data.effect || data.particles, data.theme), 450);
    }
};

// --- RENDER FUNCTIONS (FIXED) ---

function renderClassic(data, container, dayId) {
    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container ${data.layout === 'virtual-hug' ? 'hug-pulse' : ''}">
                <div class="img-frame" id="img-container" style="border-color:${data.theme}">
                    ${data.layout === 'scratch-card' ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section">
                    <div class="audio-card"><label>🎵 BACKGROUND MUSIC</label><audio controls loop src="${data.song}"></audio></div>
                </div>
                <button class="heart-btn" id="reveal-btn" style="background:${data.theme}">Tap to Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK TO TIMELINE</a></center>
            </div>
        </div>`;
    
    setupSecretBtn(data.hidden);
    if(data.layout === 'scratch-card') initScratch();
    if(data.layout === 'virtual-hug') initHug(data.hidden);
}

function renderAIChat(data, container) {
    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container">
                <h2 style="color:${data.theme}; font-family:'Dancing Script'; font-size:2rem;">AI Love Assistant 🤖</h2>
                <div class="chat-box" id="chat-box" style="height:250px; overflow-y:auto; background:rgba(0,0,0,0.2); border-radius:15px; padding:10px; margin:15px 0; text-align:left;">
                    <div class="msg bot" style="background:rgba(255,255,255,0.1); padding:8px; border-radius:10px; margin-bottom:10px;">Hello Muskan! Main aaj tumhara mood track kar raha hoon. Kaise ho? ❤️</div>
                </div>
                <div style="display:flex; gap:5px;">
                    <input type="text" id="user-msg" style="flex:1; padding:10px; border-radius:20px; border:none;" placeholder="Say something...">
                    <button onclick="sendLoveMsg('${data.theme}')" style="background:${data.theme}; border:none; padding:10px 15px; border-radius:50%;">Go</button>
                </div>
                <center><a href="chapters.html" class="back-link">← BACK</a></center>
            </div>
        </div>`;
}

function renderStats(data, container, dayId) {
    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container">
                <h1 style="color:${data.theme}">Love Stats 📊</h1>
                <div style="text-align:left; margin-top:20px;">
                    <p>Trust Level: 100%</p>
                    <div style="width:100%; height:10px; background:#333; border-radius:5px; margin-bottom:15px;"><div style="width:100%; height:100%; background:${data.theme}; border-radius:5px;"></div></div>
                    <p>Happiness with You: Infinite</p>
                    <div style="width:100%; height:10px; background:#333; border-radius:5px; margin-bottom:15px;"><div style="width:95%; height:100%; background:${data.theme}; border-radius:5px;"></div></div>
                </div>
                <p>Day Number: ${dayId}</p>
                <center><a href="chapters.html" class="back-link">← BACK</a></center>
            </div>
        </div>`;
}

function renderQuiz(data, container) {
    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container">
                <h2 style="color:${data.theme}">${data.title}</h2>
                <p>${data.question}</p>
                <div style="display:grid; gap:10px; margin-top:20px;">
                    ${data.options.map((opt, i) => `<button onclick="checkQuiz(${i}, ${data.correct}, '${data.hidden}')" style="padding:12px; border:1px solid ${data.theme}; background:none; color:white; border-radius:15px;">${opt}</button>`).join('')}
                </div>
                <div id="quiz-res" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK</a></center>
            </div>
        </div>`;
}

// --- HELPER LOGIC ---

function setupSecretBtn(hiddenText) {
    const btn = document.getElementById('reveal-btn');
    if(btn) {
        btn.onclick = () => {
            const box = document.getElementById('secret-msg');
            box.innerText = hiddenText;
            box.classList.toggle('show');
        };
    }
}

window.sendLoveMsg = (color) => {
    const input = document.getElementById('user-msg');
    const box = document.getElementById('chat-box');
    if(!input.value) return;
    box.innerHTML += `<div style="text-align:right; margin-bottom:10px;"><span style="background:${color}; color:black; padding:8px; border-radius:10px;">${input.value}</span></div>`;
    setTimeout(() => {
        box.innerHTML += `<div style="text-align:left; margin-bottom:10px;"><span style="background:rgba(255,255,255,0.1); padding:8px; border-radius:10px;">Muskan, tumne jo bhi kaha wo sunkar mera dil khush ho gaya! ❤️</span></div>`;
        box.scrollTop = box.scrollHeight;
    }, 1000);
    input.value = "";
};

window.checkQuiz = (i, c, h) => {
    const res = document.getElementById('quiz-res');
    if(i === c) { res.innerText = h; res.classList.add('show'); }
    else alert("Wrong! Socho socho... 😜");
};

function createParticle(type, color) {
    const layer = document.getElementById('particles-layer');
    if(!layer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : "❤️";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.color = color;
    layer.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
