window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = urlParams.get('d');
    const data = loveDays[dayId];

    if (data) {
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        document.getElementById('bg-music').src = data.song;

        // Theme color handle
        if(data.theme) document.documentElement.style.setProperty('--accent', data.theme);

        // Voice Note handle
        if(data.voice && data.voice !== "") {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = "none";
        }

        window.secretData = data.hidden;
    } else {
        document.getElementById('main-layout').innerHTML = `
            <h2 style="color:var(--accent)">Coming Soon...</h2>
            <p>Bhai, Day ${dayId} ka data abhi add nahi kiya tune!</p>
            <a href="chapters.html" style="color:white">Back</a>`;
    }
}

function revealSecret() {
    const box = document.getElementById('secret-msg');
    box.innerText = window.secretData;
    box.classList.toggle('show');
}
