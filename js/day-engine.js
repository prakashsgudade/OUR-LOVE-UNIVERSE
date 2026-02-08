const grid = document.getElementById("daysGrid");

const TOTAL = 5000; // infinite feel

for(let i=1;i<=TOTAL;i++){

let card=document.createElement("div");
card.className="card";

card.style.background=
`linear-gradient(${i*37%360}deg,#111,#222)`;

card.innerHTML="Day "+i;

card.onclick=()=>{
localStorage.setItem("currentDay",i);
window.location.href="day.html";
};

grid.appendChild(card);
}
// ===== AUTO THEME ENGINE =====

const themes=[
 "romantic",
 "dark",
 "galaxy",
 "dream",
 "memory"
];

const today=new Date().getDate();
const theme=themes[today % themes.length];

document.body.classList.add(theme);


// ===== SURPRISE MESSAGE ENGINE =====

const messages=[
 "Aaj ka din tumhare naam ❤️",
 "Ek yaad phir zinda hui ✨",
 "Tumhari muskurahat save hai yahan 🙂",
 "Dil ne phir tumhe choose kiya 💫",
 "Kuch feelings kabhi purani nahi hoti"
];

const msg=messages[Math.floor(Math.random()*messages.length)];

const box=document.getElementById("autoMessage");
if(box) box.innerText=msg;


// ===== LAYOUT RANDOMIZER =====

const cards=document.querySelectorAll(".card");

cards.forEach(c=>{
 let r=Math.random()*6-3;
 c.style.transform+=" rotate("+r+"deg)";
});
