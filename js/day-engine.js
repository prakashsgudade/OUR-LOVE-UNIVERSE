window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        // 1. Theme Color Fix (Day 2 Pink dikhega)
        if(data.theme) {
            document.documentElement.style.setProperty('--accent', data.theme);
        }

        // 2. Photo Load Fix
        const img = document.getElementById('day-img');
        img.src = data.image;
        
        // Agar photo load na ho toh error check ke liye
        img.onerror = function() {
            console.error("Bhai, photo nahi mili: " + data.image);
        };

        // 3. Text & Secret
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        window.secretData = data.hidden;

        // 4. Music Fast Loading Fix
        const bgMusic = document.getElementById('bg-music');
        bgMusic.src = data.song;
        bgMusic.load(); // Force load gaana

        // Voice section
        if(data.voice && data.voice !== "") {
            const vNote = document.getElementById('voice-note');
            vNote.src = data.voice;
            vNote.load();
        } else {
            const vs = document.getElementById('voice-section');
            if(vs) vs.style.display = "none";
        }
    } else {
        document.body.innerHTML = "<h2 style='color:white; text-align:center;'>Day Not Found!</h2>";
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData;
    box.classList.toggle('show');
}
