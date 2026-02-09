window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        // Theme Apply
        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

        // Layout Switcher (Day 3+ ke liye)
        if(data.layout === "cinematic") {
            document.getElementById('main-layout').classList.add('cinematic-view');
        }

        // Content Fill
        document.getElementById('day-img').src = data.image;
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        // Music & Voice
        const bgMusic = document.getElementById('bg-music');
        bgMusic.src = data.song;
        bgMusic.load();

        if(data.voice) {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        // Particle System (Stars/Hearts)
        if(data.particles) startParticles(data.particles);
    }
}

function startParticles(type) {
    const container = document.getElementById('dynamic-body');
    const symbol = type === "stars" ? "⭐" : "❤️";
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = symbol;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(p);
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData;
    box.classList.toggle('show');
}
// Existing onload function ke andar ye line jodo:
if(data.layout === "flip-3d") {
    document.getElementById('main-layout').classList.add('flip-card-view');
}

// Particle system mein 'snow' wala option add karo:
if(data.effect === "snow") {
    startParticles('❄️');
}

// Onload ke andar ye switch check karo
if(data.layout === "scratch-card") {
    setupScratchEffect();
}

function setupScratchEffect() {
    const frame = document.querySelector('.img-frame');
    const canvas = document.createElement('canvas');
    canvas.id = 'scratch-canvas';
    frame.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = frame.offsetWidth;
    canvas.height = frame.offsetHeight;
    
    // Silver Paint Layer
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Scratching logic
    let isDrawing = false;
    const scratch = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.pageX || e.touches[0].pageX) - rect.left;
        const y = (e.pageY || e.touches[0].pageY) - rect.top;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    };

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    canvas.addEventListener('touchmove', scratch);
}
