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
// js/effects.js letters.html
// js/effects.js - Secure Message Logic
const message = `Muskan... Tu jaanti hai? Ye universe kitna bada hai, lekin mere liye tu hi uska center hai. 
Is "Secure Message Vault" mein meri wo saari baatein hain jo main shabdon mein nahi keh paaya. 

Tu sirf meri pasand nahi, tu meri wo sukoon wali jagah hai jahan main khud ko bhul jaata hoon. 
Ye safar jo humne shuru kiya hai, ye sirf 10 dinon ya 5000 pages ka nahi hai... ye infinite hai. 

Jitna tum scroll karogi, utna mera pyaar milega. 
Happy Journey through our Love Universe! ❤️`;

let i = 0;
const speed = 50; // Typing speed in ms

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Typing khatam hone ke baad signature dikhao
        document.querySelector('.signature').style.display = 'block';
    }
}

// Page load hone par shuru karein
window.onload = () => {
    typeWriter();
    // Tumhara background canvas code bhi yahan aa sakta hai (optional)
};
