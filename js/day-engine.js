window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    const data = loveDays[dayId];

    if (data) {
        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);
        const img = document.getElementById('day-img');
        const layout = document.getElementById('main-layout');

        img.src = data.image;
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        img.onload = function() {
            // ==========================================
            // YAHAN LAYOUT CHANGE HOTA HAI (CHEF'S KITCHEN)
            // ==========================================

            if(data.layout === "scratch-card") {
                // Layout 1: Scratch Card (Day 5)
                layout.classList.add('scratch-card');
                setupScratchEffect();
            } 
            else if(data.layout === "virtual-hug") {
                // Layout 2: Virtual Hug (Day 6) - Pulse + Long Press
                layout.classList.add('pulse-card');
                const hugHeart = document.createElement('div');
                hugHeart.className = 'hug-overlay';
                hugHeart.innerHTML = '❤️';
                document.getElementById('img-container').appendChild(hugHeart);

                let hugTimer;
                const startHug = () => {
                    layout.classList.add('vibrate', 'hug-active');
                    if (navigator.vibrate) navigator.vibrate(200);
                    hugTimer = setTimeout(() => { revealSecret(); }, 2000);
                };
                const stopHug = () => {
                    layout.classList.remove('vibrate', 'hug-active');
                    clearTimeout(hugTimer);
                };
                img.addEventListener('mousedown', startHug);
                img.addEventListener('mouseup', stopHug);
                img.addEventListener('touchstart', startHug);
                img.addEventListener('touchend', stopHug);
            }
            else if(data.layout === "infinity-portal") {
                // Layout 3: Infinity Portal (Day 7) - Rotation + Double Tap
                layout.classList.add('portal-view');
                
                let lastTap = 0;
                img.addEventListener('touchstart', function(e) {
                    let currentTime = new Date().getTime();
                    let tapLength = currentTime - lastTap;
                    if (tapLength < 300 && tapLength > 0) {
                        createBurst(); // Double tap par hearts nikalenge
                        if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
                    }
                    lastTap = currentTime;
                });
                img.addEventListener('dblclick', createBurst);
            }
            else if(data.layout === "flip-3d") {
                layout.classList.add('flip-card-view');
            } 
            else {
                // Default: Blur Logic (Day 1, 2, 3, 4)
                img.classList.add('blur-reveal');
                img.addEventListener('click', (e) => {
                    if (window.matchMedia("(hover: none)").matches) {
                        e.stopPropagation();
                        img.style.filter = "blur(0)";
                    }
                });
                document.addEventListener('click', () => {
                    if (window.matchMedia("(hover: none)").matches) img.style.filter = "blur(35px)";
                });
            }
        };

        document.getElementById('bg-music').src = data.song;
        if(data.voice) document.getElementById('voice-note').src = data.voice;
        else document.getElementById('voice-section').style.display = "none";

        if(data.particles || data.effect) startParticles(data.particles || data.effect);
    }
}

// --- HELPER FUNCTIONS (Kaam karne wali machine) ---

function createBurst() {
    for(let i=0; i<15; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'floating-heart';
            h.innerHTML = '❤️';
            h.style.left = (20 + Math.random() * 60) + 'vw';
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 2000);
        }, i * 100);
    }
}

function setupScratchEffect() {
    const frame = document.getElementById('img-container');
    const img = document.getElementById('day-img');
    const canvas = document.createElement('canvas');
    canvas.id = 'scratch-canvas';
    frame.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let isDrawing = false;
    const scratch = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
        const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, 30, 0, Math.PI * 2); ctx.fill();
    };
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    canvas.addEventListener('touchmove', (e) => { scratch(e); e.preventDefault(); });
}

function startParticles(type) {
    const layer = document.getElementById('particles-layer');
    let symbol = (type === "snow") ? "❄️" : (type === "stars") ? "⭐" : "❤️";
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle'; p.innerText = symbol;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        p.style.fontSize = (Math.random() * 20 + 10) + 'px';
        layer.appendChild(p);
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData || "Surprise! ❤️";
    box.classList.add('show');
}
