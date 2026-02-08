window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d'); 
    const data = loveDays[dayId];

    if (data) {
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        document.getElementById('bg-music').src = data.song;
        
        // Apply Dynamic Theme Color
        if(data.theme) {
            document.documentElement.style.setProperty('--accent', data.theme);
        }
        
        // Add layout class if exists
        if(data.layout) {
            document.getElementById('main-layout').classList.add(data.layout);
        }

        // Voice Section Logic
        if(data.voice && data.voice !== "") {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        // Set global secret
        window.secret = data.hidden;
    } else {
        document.getElementById('main-layout').innerHTML = "<h2>Day not found!</h2><a href='chapters.html' style='color:white;'>Go Back</a>";
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secret;
    box.classList.toggle('show');
}
