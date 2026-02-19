window.onload=function(){

const url=new URLSearchParams(location.search);
const id=url.get("d")||1;
const data=loveDays[id];
if(!data) return;

document.documentElement.style.setProperty('--accent',data.theme);
initGalaxy();

const app=document.getElementById("app");

switch(data.layout){
  case "ai-letter": renderAILetter(data); break;
  case "fake-chat": renderFakeChat(data); break;
  case "typing-suspense": renderTyping(data); break;
  case "memory-gallery": renderGallery(data); break;
  case "music-vibe": renderMusic(data); break;
  case "mini-game": renderMiniGame(data); break;
  case "password-lock": renderPassword(data); break;
  default: renderClassic(data);
}
};

function renderClassic(d){
app.innerHTML=`
<div class="card">
<h1>${d.title}</h1>
<img src="${d.image}">
<p>${d.message}</p>
<audio controls autoplay loop src="${d.song}"></audio>
<a href="chapters.html" class="back">Back</a>
</div>`;
}

function renderAILetter(d){
app.innerHTML=`
<div class="card">
<h1>AI Letter ❤️</h1>
<button onclick="generateLetter()">Generate Letter</button>
<div id="aiText"></div>
<a href="chapters.html" class="back">Back</a>
</div>`;
}

async function generateLetter(){
document.getElementById("aiText").innerHTML="Writing...";
/* 🔥 PUT YOUR REAL API HERE */
setTimeout(()=>{
document.getElementById("aiText").innerHTML=
"My love, har din tum meri kahani ka sabse khoobsurat hissa ho...";
},1500);
}

function renderFakeChat(d){
app.innerHTML=`
<div class="chat">
<div class="bubble left">Hi ❤️</div>
<div class="bubble right">Missed you</div>
<div class="bubble left typing">Typing...</div>
<a href="chapters.html" class="back">Back</a>
</div>`;
}

function renderTyping(d){
app.innerHTML=`
<div class="card">
<h1>Typing...</h1>
<p id="typeText"></p>
<a href="chapters.html" class="back">Back</a>
</div>`;
let text="Kabhi kabhi kuch baatein likhne mein waqt lagta hai...";
let i=0;
let inter=setInterval(()=>{
document.getElementById("typeText").innerHTML+=text[i];
i++; if(i>=text.length) clearInterval(inter);
},50);
}

function renderGallery(d){
app.innerHTML=`
<div class="gallery">
<img src="${d.image}">
<img src="assets/images/home/m${Math.floor(Math.random()*120)+1}.jpg">
<a href="chapters.html" class="back">Back</a>
</div>`;
}

function renderMusic(d){
app.innerHTML=`
<div class="card">
<img src="${d.image}">
<h2>Feel The Vibe</h2>
<audio controls autoplay src="${d.song}"></audio>
<a href="chapters.html" class="back">Back</a>
</div>`;
}

function renderMiniGame(d){
app.innerHTML=`
<div class="card">
<h2>Catch The Heart ❤️</h2>
<button onclick="alert('You Win ❤️')">Tap Heart</button>
<a href="chapters.html" class="back">Back</a>
</div>`;
}

function renderPassword(d){
app.innerHTML=`
<div class="card">
<h2>Enter Password 🔐</h2>
<input id="pass">
<button onclick="checkPass('${d.password}')">Unlock</button>
<div id="result"></div>
</div>`;
}

function checkPass(p){
let val=document.getElementById("pass").value;
if(val===p){
document.getElementById("result").innerHTML="Unlocked ❤️";
}else{
document.getElementById("result").innerHTML="Wrong Password";
}
}

/* 🌌 3D Galaxy */
function initGalaxy(){
const c=document.getElementById("galaxy");
const ctx=c.getContext("2d");
c.width=innerWidth; c.height=innerHeight;
let stars=[];
for(let i=0;i<200;i++){
stars.push({x:Math.random()*c.width,y:Math.random()*c.height,z:Math.random()*c.width});
}
function animate(){
ctx.fillStyle="black"; ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle="white";
stars.forEach(s=>{
s.z-=2;
if(s.z<=0) s.z=c.width;
let k=128/s.z;
let px=s.x*k+c.width/2;
let py=s.y*k+c.height/2;
ctx.fillRect(px,py,2,2);
});
requestAnimationFrame(animate);
}
animate();
}
