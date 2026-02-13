function renderClassic(data, container, dayId) {
    let dayNum = parseInt(dayId);
    let interactionClass = "";
    let extraHTML = "";

    // Action Logic
    if (dayNum === 1 || dayNum === 2) interactionClass = "blur-mode";
    else if (dayNum === 5) { interactionClass = "scratch-mode"; extraHTML = `<canvas id="scratch-canvas"></canvas>`; }
    else if (dayNum === 6) { interactionClass = "hug-mode"; extraHTML = `<div class="hug-overlay">❤️</div>`; }
    else if (dayNum === 7) interactionClass = "portal-mode";

    container.innerHTML = `
        <div id="particles-layer"></div>
        <div class="main-wrapper ${interactionClass}">
            <div class="glass-container">
                <div class="img-frame" id="img-box">
                    ${extraHTML}
                    <img id="day-img" src="${data.image}" class="${(dayNum===1 || dayNum===2) ? 'blur-img' : ''}">
                </div>
                <h1 class="title-font">${data.title}</h1>
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

    // --- MOBILE TOUCH UNBLUR LOGIC (Day 1 & 2) ---
    if (dayNum === 1 || dayNum === 2) {
        const img = document.getElementById('day-img');
        
        // Photo pe click/touch karne se unblur
        img.addEventListener('click', (e) => {
            e.stopPropagation(); // Bahar touch wala event trigger na ho
            img.classList.add('unblurred');
        });

        // Screen pe kahi bhi touch karne se vapas blur
        document.addEventListener('click', () => {
            img.classList.remove('unblurred');
        });
    }

    if (dayNum === 5) initScratch();
    if (dayNum === 6) initLongPress();
    if (dayNum === 7) initDoubleTap();
}
