window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    body.innerHTML = '<div id="particles-layer"></div>';

    // Router
    if (data.layout === "ai-chat") renderAIChat(data, body);
    else if (data.layout === "stats-dashboard") renderStats(data, body, dayId);
    else if (data.layout === "quiz-game") renderQuiz(data, body);
    else renderClassic(data, body, dayId);

    setInterval(() => createParticle(data.particles || "hearts", data.theme), 500);
};

function renderClassic(data, container, dayId) {
    container.innerHTML += `
        <div class="main-wrapper">
            <div class="glass-container ${data.layout === 'virtual-hug' ? 'hug-pulse' : ''}">
                <div class="img-frame" id="img-container" style="border:3px solid ${data.theme}">
                    ${data.layout === 'scratch-card' ? '<canvas id="scratch-canvas"></canvas>' : ''}
                    <img id="day-img" src="${data.image}" class="${parseInt(dayId) <= 4 ? 'blur-reveal' : ''}">
                </div>
                <h1 id="day-title" style="color:${data.theme}">${data.title}</h1>
                <p id="day-message">${data.message}</p>
                <div class="audio-section">
                    <div class="audio-card"><label>🎵 MUSIC</label><audio controls loop src="${data.song}"></audio></div>
                </div>
                <button class="heart-btn" id="reveal-btn" style="background:${data.theme}">Reveal Secret</button>
                <div id="secret-msg" class="secret-box"></div>
                <center><a href="chapters.html" class="back-link">← BACK</a></center>
            </div>
        </div>`;
    document.getElementById('reveal-btn').onclick = () => {
        const box = document.getElementById('secret-msg');
        box.innerText = data.hidden; box.classList.add('show');
    };
    if(data.layout === 'scratch-card') initScratch();
}

function renderAIChat(data, container) {
    container.innerHTML += `
        <div class="main-wrapper"><div class="glass-container">
            <h2 style="color:${data.theme}">AI Love Bot 🤖</h2>
            <div id="chat-box" style="height:200px; overflow-y:auto; background:rgba(0,0,0,0.2); padding:10px; margin:15px 0; border-radius:10px; text-align:left;">
                <div style="margin-bottom:10px;"><b>Bot:</b> Hi Muskan! How are you today?</div>
            </div>
            <input type="text" id="chat-input" style="width:70%; padding:10px; border-radius:10px;">
            <button onclick="sendMsg('${data.theme}')" style="padding:10px; border-radius:10px; background:${data.theme}">Send</button>
            <center><a href="chapters.html" class="back-link">← BACK</a></center>
        </div></div>`;
}

function renderStats(data, container, dayId) {
    container.innerHTML += `
        <div class="main-wrapper"><div class="glass-container">
            <h2 style="color:${data.theme}">Our Stats 📊</h2>
            <div style="margin:20px 0; text-align:left;">
                <p>Love: 100%</p> <div style="background:#222; border-radius:10px;"><div style="width:100%; height:10px; background:${data.theme}; border-radius:10px;"></div></div>
                <p>Trust: 100%</p> <div style="background:#222; border-radius:10px;"><div style="width:100%; height:10px; background:${data.theme}; border-radius:10px;"></div></div>
            </div>
            <p>Day: ${dayId}</p>
            <center><a href="chapters.html" class="back-link">← BACK</a></center>
        </div></div>`;
}

function renderQuiz(data, container) {
    container.innerHTML += `
        <div class="main-wrapper"><div class="glass-container">
            <h2 style="color:${data.theme}">Quiz Time! 💡</h2>
            <p>${data.question}</p>
            ${data.options.map((o,i) => `<button onclick="alert('Sahi Jawab!')" style="display:block; width:100%; margin:10px 0; padding:10px; border:1px solid ${data.theme}; background:none; color:white;">${o}</button>`).join('')}
            <center><a href="chapters.html" class="back-link">← BACK</a></center>
        </div></div>`;
}

function createParticle(t, c) {
    const l = document.getElementById('particles-layer'); if(!l) return;
    const p = document.createElement('div'); p.className = 'particle';
    p.innerText = "❤️"; p.style.left = Math.random()*100+"vw"; p.style.color=c;
    l.appendChild(p); setTimeout(() => p.remove(), 4000);
}

window.sendMsg = (c) => {
    const i = document.getElementById('chat-input');
    const b = document.getElementById('chat-box');
    b.innerHTML += `<div><b>You:</b> ${i.value}</div>`;
    setTimeout(() => { b.innerHTML += `<div><b>Bot:</b> Love you Muskan! ❤️</div>`; b.scrollTop = b.scrollHeight; }, 500);
    i.value = "";
}
