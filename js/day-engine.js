// URL se day number pakdo
const params = new URLSearchParams(window.location.search);
const day = params.get("day");

const data = DAYS[day];

if(!data){
    document.body.innerHTML="Day Not Found";
}

// Title change
document.title = "Day " + day;

// Page render
document.getElementById("dayContainer").innerHTML = `
    <h1>Day ${day}</h1>
    <h2>${data.title}</h2>

    <img src="${data.image}" width="300">

    <p>${data.text}</p>

    <audio controls src="${data.music}"></audio>
`;
