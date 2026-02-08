window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d'); // URL se 'd' leta hai (e.g., day.html?d=1)
    const data = loveDays[dayId];

    if (data) {
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        document.getElementById('bg-music').src = data.song;
        
        // Dynamic Styles
        document.documentElement.style.setProperty('--accent', data.theme);
        document.getElementById('main-layout').className = `glass-container ${data.layout}`;

        if(data.voice) document.getElementById('voice-note').src = data.voice;
        else document.getElementById('voice-section').style.display = "none";

        window.secret = data.hidden;
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secret;
    box.classList.toggle('show');
}
