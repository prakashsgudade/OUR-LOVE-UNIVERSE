window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        // 1. Theme & Colors
        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

        // 2. Layout Selection
        const mainLayout = document.getElementById('main-layout');
        const imgElement = document.getElementById('day-img');

        // Sabse pehle purani sari classes hata do (Safety check)
        imgElement.classList.remove('blur-reveal'); 
        mainLayout.className = 'glass-container'; // Default class reset

        if(data.layout === "cinematic") {
            mainLayout.classList.add('cinematic-view');
        } else if(data.layout === "flip-3d") {
            mainLayout.classList.add('flip-card-view');
        } else if(data.layout === "scratch-card") {
            mainLayout.classList.add('scratch-card');
            // Scratch card mein blur ki zaroorat nahi, isliye yahan imgElement.classList.add nahi karenge
            setupScratchEffect(); 
        } else {
            // Default: Day 1 & 2 ke liye blur effect
            imgElement.classList.add('blur-reveal');
        }

        // 3. Content Fill
        imgElement.src = data.image;
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        // 4. Music & Voice
        const bgMusic = document.getElementById('bg-music');
        bgMusic.src = data.song;
        bgMusic.load();

        if(data.voice && data.voice !== "") {
            document.getElementById('voice-note').src = data.voice;
            document.getElementById('voice-section').style.display = "block";
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        // 5. Particle Effects
        if(data.particles) startParticles(data.particles);
        else if(data.effect === "snow") startParticles("❄️");
        else if(data.effect === "confetti") startParticles("🎉");
    }
}

// ... (Baaki setupScratchEffect, startParticles aur revealSecret wahi rahenge jo pehle the) ...
