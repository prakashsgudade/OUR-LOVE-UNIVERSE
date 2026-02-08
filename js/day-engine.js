window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        // Text load karna (Sabse fast hota hai)
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        // Image load karna
        const img = document.getElementById('day-img');
        img.src = data.image;

        // --- MP3 FAST LOADING FIX ---
        const bgMusic = document.getElementById('bg-music');
        bgMusic.src = data.song;
        bgMusic.preload = "auto"; // Browser ko bolna ki turant download shuru kare

        if(data.voice && data.voice !== "") {
            const voiceNote = document.getElementById('voice-note');
            voiceNote.src = data.voice;
            voiceNote.preload = "metadata"; // Sirf length check karega pehle
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

    } else {
        document.getElementById('main-layout').innerHTML = `<h2>Coming Soon...</h2><a href="chapters.html" style="color:white">Back</a>`;
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData;
    box.classList.toggle('show');
}
