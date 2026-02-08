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
