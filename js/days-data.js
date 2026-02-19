const TOTAL_IMAGES = 120;   // m1.jpg to m120.jpg
const TOTAL_SONGS = 50;     // s1.mp3 to s50.mp3 (change if needed)

const themes = ["#ff4d6d","#d4af37","#8b5cf6","#00d2ff","#ffcc00","#e63946","#6a11cb"];

function generateDay(day) {
    return {
        title: `Day ${day} With Muskan ❤️`,
        message: getDynamicMessage(day),
        image: `assets/images/home/m${((day-1)%TOTAL_IMAGES)+1}.jpg`,
        song: `assets/audio/ring/s${((day-1)%TOTAL_SONGS)+1}.mp3`,
        theme: themes[day % themes.length],
        particles: (day % 3 === 0) ? "stars" : "hearts",
        hidden: `No matter what day it is… I still choose you. ❤️ (Day ${day})`
    };
}

function getDynamicMessage(day){
    if(day < 50) return "Har din tumse milne ka ehsaas aur gehra hota ja raha hai...";
    if(day < 200) return "Tum meri aadat nahi… meri zarurat ban chuki ho.";
    if(day < 500) return "Agar waqt ruk jaye, toh main chahta hoon ye pal tumhare saath ruk jaye.";
    if(day < 1000) return "Har mushkil ke baad bhi, mera dil sirf tumhara hai.";
    if(day < 3000) return "Universe mein hazaar tare hain, par meri roshni sirf tum ho.";
    return "5000 din ho ya 5 zindagi… mera pyaar tumse kam nahi hoga.";
}

const loveDays = new Proxy({}, {
    get: function(_, prop){
        if(!isNaN(prop)) return generateDay(parseInt(prop));
        return null;
    }
});
