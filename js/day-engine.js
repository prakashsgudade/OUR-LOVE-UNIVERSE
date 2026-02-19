window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayId = parseInt(urlParams.get('d')) || 1;
    const data = loveDays[dayId];
    if (!data) return;

    document.documentElement.style.setProperty('--accent', data.theme);
    const body = document.getElementById('dynamic-body');

    body.innerHTML = `
    <div class="main-wrapper">
        <div class="glass-container">
            <div class="img-frame">
                <img id="day-img" src="${data.image}" loading="lazy">
            </div>
            <h1>${data.title}</h1>
            <p>${data.message}</p>

            <audio controls autoplay loop src="${data.song}"></audio>

            <button class="heart-btn">Reveal Secret</button>
            <div class="secret-box">${data.hidden}</div>

            <a href="chapters.html" class="back-link">← Back</a>
        </div>
    </div>`;

    document.querySelector(".heart-btn").onclick = function(){
        document.querySelector(".secret-box").classList.toggle("show");
    };

    if(data.particles){
        setInterval(() => createParticle(data.particles, data.theme), 500);
    }
};

function createParticle(type, color) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = (type === "stars") ? "⭐" : "❤️";
    p.style.color = color;
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    p.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
