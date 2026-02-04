/* ===== Button Navigation Logic ===== */
function enterKingdom() {
    // 1. Music play karne ka try karega
    const music = document.getElementById('bgMusic');
    if(music) {
        music.play().catch(e => console.log("Music play hone mein dikkat: ", e));
    }

    // 2. Page Change Karne Ka Link
    // Dhyaan de: index.html se chapters folder ke andar jaana hai
    window.location.href = "chapters/day1.html"; 
}
