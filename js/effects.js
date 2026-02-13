function startMagic() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '✨'; // Yahan star ya heart daal sakte ho
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-5vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = '#d4af37';
        heart.style.transition = '5s linear';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 100);

        setTimeout(() => { heart.remove(); }, 6000);
    }, 200);
}
startMagic();
// js/effects.js
function updateClock() {
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                    now.getMinutes().toString().padStart(2, '0') + ":" + 
                    now.getSeconds().toString().padStart(2, '0');
    document.getElementById('live-clock').innerText = timeStr;
}
setInterval(updateClock, 1000);
updateClock();
