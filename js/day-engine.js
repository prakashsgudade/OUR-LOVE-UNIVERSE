window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        // Text turant load karo
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        // Image loading fast karne ke liye
        const img = document.getElementById('day-img');
        img.src = data.image;

        // Audio fast load karne ka jugaad
        const bgMusic = document.getElementById('bg-music');
        bgMusic.src = data.song;
        bgMusic.load(); // Force load start

        if(data.voice && data.voice !== "") {
            const vNote = document.getElementById('voice-note');
            vNote.src = data.voice;
            vNote.load();
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);
    } else {
        document.getElementById('main-layout').innerHTML = `<h2>Coming Soon...</h2><a href="chapters.html" style="color:white">Wapas Chalo</a>`;
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData;
    box.classList.toggle('show');
}
