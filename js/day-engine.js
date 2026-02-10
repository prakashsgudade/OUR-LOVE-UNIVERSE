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
            if(data.layout === "scratch-card") {
                layout.classList.add('scratch-card');
                setupScratchEffect();
            } else if(data.layout === "flip-3d") {
                layout.classList.add('flip-card-view');
            } else if(data.layout === "cinematic") {
                layout.classList.add('cinematic-view');
            } else {
                // Blur Logic for Day 1 & 2
                img.classList.add('blur-reveal');

                // MOBILE HOLD TO UNBLUR FIX
                const unblur = () => { img.style.filter = "blur(0)"; };
                const reblur = () => { img.style.filter = "blur(35px)"; };

                // Touch Events (Mobile)
                img.addEventListener('touchstart', (e) => { 
                    unblur();
                }, {passive: true});

                img.addEventListener('touchend', () => { 
                    reblur();
                }, {passive: true});

                // Mouse Events (PC fallback)
                img.addEventListener('mousedown', unblur);
                img.addEventListener('mouseup', reblur);
                img.addEventListener('mouseleave', reblur);
            }
        };

        document.getElementById('bg-music').src = data.song;
        if(data.voice) document.getElementById('voice-note').src = data.voice;
        else document.getElementById('voice-section').style.display = "none";

        if(data.particles || data.effect) startParticles(data.particles || data.effect);
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
    box.classList.toggle('show');
}
