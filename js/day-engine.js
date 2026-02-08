const params=new URLSearchParams(window.location.search);
const day=params.get("day");

const data=DAYS[day];

// Emotional progression theme
function applyEmotion(e){
if(e==1)document.body.style.background="#000";
if(e==2)document.body.style.background="#200";
if(e==3)document.body.style.background="#002";
}

applyEmotion(data.emotion);


// Unlock cinematic
document.getElementById("rose").onclick=()=>{
document.getElementById("unlock").style.display="none";
document.getElementById("content").style.display="block";
render();
};


// Render Layout auto change
function render(){

let layout="";

if(day%2==0){
layout=`
<div class="card">
<div class="inner">
<div class="front">
<h2>${data.title}</h2>
</div>
<div class="back">
<img src="${data.img}" width="100%">
<p>${data.text}</p>
</div>
</div>
</div>
`;
}else{
layout=`
<h1>${data.title}</h1>
<img src="${data.img}" width="300">
<p>${data.text}</p>
`;
}

document.getElementById("content").innerHTML=layout;
}
