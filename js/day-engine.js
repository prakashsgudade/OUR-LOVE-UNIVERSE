window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('d') || "1";
    const data = getDayData(d);
    const body = document.getElementById('dynamic-body');

    document.documentElement.style.setProperty('--bg', data.theme);
    document.documentElement.style.setProperty('--accent', data.accent);

    // Layout Router
    switch(data.layout) {
        case "islamic-moon":
            body.innerHTML = `<div class="layout"><div class="crescent">🌙</div><div class="glass-box"><h3>Bismillah</h3><img src="${data.image}" class="img-glow"><h1>${data.title}</h1><p>${data.message}</p><a href="chapters.html" class="back">← Timeline</a></div></div>`;
            break;
        case "ai-hud":
            body.innerHTML = `<div class="layout ai-theme"><div class="scanline"></div><div class="stats">HEART_RATE: ${70+(d%15)} BPM</div><img src="${data.image}" class="ai-img"><h1>${data.title}</h1><p>> ${data.message}</p><a href="chapters.html" class="back">← Exit</a></div>`;
            break;
        case "retro-typewriter":
            body.innerHTML = `<div class="layout"><div class="paper"><h1>Day ${d}</h1><p id="typewriter"></p><a href="chapters.html" class="back" style="color:#333">← Back</a></div></div>`;
            let i=0; function type() { if(i < data.message.length) { document.getElementById('typewriter').innerHTML += data.message.charAt(i); i++; setTimeout(type, 50); } } type();
            break;
        case "galaxy-stars":
            body.innerHTML = `<div class="layout galaxy-bg"><div class="stars"></div><img src="${data.image}" class="round-img"><h1>${data.title}</h1><p>${data.message}</p><a href="chapters.html" class="back">← Universe</a></div>`;
            break;
        default: // classic & glass-card
            body.innerHTML = `<div class="layout"><div class="glass-card"><img src="${data.image}"><h1>${data.title}</h1><p>${data.message}</p><button class="btn" onclick="alert('${data.hidden}')">Secret Message</button><a href="chapters.html" class="back">← Back</a></div></div>`;
    }

    // Audio Player
    const audio = new Audio(data.song);
    audio.loop = true;
    document.body.onclick = () => { audio.play(); }; // Play on first interaction
};
