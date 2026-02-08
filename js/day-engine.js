window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const dayNumber = params.get('d');
    const data = loveDays[dayNumber];

    if (data) {
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-date').innerText = data.date;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        
        // Music logic
        if(data.song) document.getElementById('bg-music').src = data.song;
        
        // Voice note logic
        if(data.voice) {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = "none";
        }
    } else {
        document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>Bhai, ye memory abhi upload nahi hui! ❤️</h2>";
    }
};
