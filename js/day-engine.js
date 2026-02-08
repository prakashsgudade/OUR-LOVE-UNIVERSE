window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('d');
    const data = loveDays[d];

    if (data) {
        // Photo ko background mein set karna
        document.getElementById('parallax-img').style.backgroundImage = `url(${data.image})`;
        
        // Text bharna
        document.getElementById('day-title').innerText = data.title;
        document.getElementById('day-message').innerText = data.message;
        document.getElementById('bg-music').src = data.song;

        // Theme color set karna agar data mein hai
        if(data.theme) {
            document.documentElement.style.setProperty('--accent', data.theme);
        }

        // Voice Note check
        if(data.voice) {
            document.getElementById('voice-note').src = data.voice;
        } else {
            document.getElementById('voice-section').style.display = 'none';
        }
    } else {
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:100px;'>Coming Soon, Muskan... ❤️</h1>";
    }
}
