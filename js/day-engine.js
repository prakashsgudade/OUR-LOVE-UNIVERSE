window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const dayId = params.get('d'); 
    const data = loveDays[dayId];

    if (data) {
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-date').innerText = data.date;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('day-img').src = data.image;
        
        if(data.song) document.getElementById('bg-music').src = data.song;
        if(data.voice) document.getElementById('voice-note').src = data.voice;
        else document.getElementById('voice-section').style.display = "none";
        
    } else {
        document.body.innerHTML = "<div class='error'>muskan wo din bahot jaldi ayega ,! ❤️</div>";
    }
}
