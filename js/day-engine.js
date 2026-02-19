window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d') || "1";
    
    // Yahan change hai: get function call ho rahi hai
    const data = (typeof loveDays.get === 'function') ? loveDays.get(dayId) : loveDays[dayId];
    
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');
    
    const pLayer = document.createElement('div');
    pLayer.id = "particles-layer";
    document.body.appendChild(pLayer);

    // Layout Switching
    if (data.layout === "gallery") renderGallery(data, body);
    else if (data.layout === "music-player") renderMusicPlayer(data, body);
    else renderClassic(data, body, dayId);

    // Dynamic Effects
    if(data.particles || data.effect) {
        const effectType = data.particles || data.effect;
        setInterval(() => createParticle(effectType, data.theme), 400);
    }
};

// ... Baki functions (createParticle, renderClassic, etc.) as it is rahenge jo pehle the ...
// (Note: renderClassic and other functions from your original code should be kept below this)
