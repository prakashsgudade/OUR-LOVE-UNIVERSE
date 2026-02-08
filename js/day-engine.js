const TOTAL_DAYS = 5000;

const THEMES = [
"linear-gradient(135deg,#2b1055,#7597de)",
"linear-gradient(135deg,#000428,#004e92)",
"linear-gradient(135deg,#200122,#6f0000)",
"linear-gradient(135deg,#0f2027,#2c5364)",
"linear-gradient(135deg,#1f4037,#99f2c8)",
"linear-gradient(135deg,#42275a,#734b6d)"
];

const grid = document.getElementById("daysGrid");

for(let i=1;i<=TOTAL_DAYS;i++){

let card=document.createElement("div");
card.className="card";

card.style.background =
THEMES[i % THEMES.length];

card.innerHTML="Day "+i;

card.onclick=()=>{
openDay(i);
};

grid.appendChild(card);

}

// OPEN DAY PAGE
function openDay(day){

localStorage.setItem("currentDay",day);

window.location.href="day.html";

}
