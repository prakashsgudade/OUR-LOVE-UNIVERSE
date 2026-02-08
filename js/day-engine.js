window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const dayId = params.get('d');
    const data = loveDays[dayId];

    if (data) {
        // Text aur Media load karna
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        document.getElementById('bg-music').src = data.song;

        // Theme apply karna
        document.documentElement.style.setProperty('--main-color', data.theme);
        
        // Layout apply karna
        const card = document.getElementById('main-card');
        card.className = 'card ' + data.layout;

        // Voice section dikhana ya chhupana
        if(data.voice) {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = "none";
        }
    } else {
        document.body.innerHTML = "<div class='error'>Agle din ka intezar karo Muskan... ❤️</div>";
    }
}
