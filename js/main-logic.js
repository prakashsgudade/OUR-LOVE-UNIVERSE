/* ===== Main Navigation Function ===== */
function openKingdom() {
    console.log("Button clicked! JS is working."); // Ye browser console mein dikhega

    // Music play karne ka code (optional)
    var audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play();
    }

    // JS se page change karne ka sahi tarika
    window.location.href = "letter.html";
}
