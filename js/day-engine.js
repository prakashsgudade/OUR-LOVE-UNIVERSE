window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const dayId = params.get('d') || "1";
    const data = getDayData(dayId);
    
    document.documentElement.style.setProperty('--accent', data.theme);
    document.body.style.backgroundColor = "#050505";
    
    const container = document.getElementById('day-content');

    container.innerHTML = `
        <div class="ultra-wrapper ${data.layout}">
            <div class="main-card fade-in">
                <div class="royal-badge" style="box-shadow: 0 0 20px ${data.theme}">DAY ${dayId}</div>
                
                <div class="image-reveal">
                    <img src="${data.image}" class="hero-img" onerror="this.src='../assets/images/background.jpg'">
                </div>

                <div class="info-pane">
                    <h1 class="glitter-text">${data.title}</h1>
                    <div class="divider" style="background: linear-gradient(90deg, transparent, ${data.theme}, transparent)"></div>
                    <p class="love-quote">${data.message}</p>
                </div>

                <div class="music-controller">
                    <span>Melody of the Soul</span>
                    <audio id="player" controls loop autoplay src="${data.song}"></audio>
                </div>

                <div class="action-area">
                    <button class="gold-btn" id="reveal-trigger" style="border: 1px solid ${data.theme}">
                        <span class="btn-shine"></span>
                        REVEAL SECRET NOTE
                    </button>
                    <div id="secret-panel" class="secret-panel"></div>
                </div>

                <a href="../chapters.html" class="home-link">← Return to Galaxy</a>
            </div>
        </div>
    `;

    document.getElementById('reveal-trigger').onclick = () => {
        const p = document.getElementById('secret-panel');
        p.classList.toggle('active');
        p.innerText = p.classList.contains('active') ? data.hidden : "";
    };
};
