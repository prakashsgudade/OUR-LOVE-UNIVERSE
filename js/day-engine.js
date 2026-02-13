window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (!data) return;

    const body = document.getElementById('dynamic-body');
    if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

    // LAYOUT ROUTING
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId); 
}

function renderClassic(data, body, dayId) {
    let dayNum = parseInt(dayId);
    let interactionClass = "";
    let extraHTML = "";

    // Specific Action Logic
    if (dayNum === 1 || dayNum === 2) interactionClass = "blur-mode";
    else if (dayNum === 5) {
        interactionClass = "scratch-mode";
        extraHTML = `<canvas id="scratch-canvas"></canvas>`;
    }
    else if (dayNum === 6) {
        interactionClass = "hug-mode";
        extraHTML = `<div class="hug-overlay">❤️</div>`;
    }
    else if (dayNum === 7) {
        interactionClass = "portal-mode";
    }

    body.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper ${interactionClass}">
            <div class="glass-container">
                <div class="img-frame" id="img-box">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${(dayNum===1 || dayNum===2) ? 'blur-img' : ''}">
                </div>
                <h1 class="title-font">${data.title}</h1>
                <p class="instruction">${getInstruction(dayNum)}</p>
                <p class="msg-text">${data.message}</p>
                
                <div class="player-section">
                    <div class="audio-box"><span>🎵 Music</span><audio controls src="${data.song}"></audio></div>
                    ${data.voice ? `<div class="audio-box"><span>🎤 Voice</span><audio controls src="${data.voice}"></audio></div>` : ''}
                </div>

                <button onclick="revealSecret('${data.hidden}')" class="heart-btn">❤️ Tap to Reveal</button>
                <div id="secret-msg" class="secret-box hidden"></div>
                
                <a href="chapters.html" class="back-link">← Back</a>
            </div>
        </div>
    `;

    // Init Actions
    if (dayNum === 5) initScratch();
    if (dayNum === 6) initLongPress();
    if (dayNum === 7) initDoubleTap();
}

function getInstruction(day) {
    if(day === 1 || day === 2) return "Palkon ko uthao (Hover/Touch) photo dekhne ke liye...";
    if(day === 5) return "Scratch karke chehra saaf karo...";
    if(day === 6) return "Photo ko dabaye rakho (Long Press) gale milne ke liye...";
    if(day === 7) return "Double Tap for infinite love burst...";
    return "";
}

// ... (Baki saare functions: initScratch, initLongPress, initDoubleTap pehle jaise hi rahenge) ...

function revealSecret(msg) {
    const box = document.getElementById('secret-msg');
    box.innerText = msg;
    box.classList.toggle('hidden');
}
