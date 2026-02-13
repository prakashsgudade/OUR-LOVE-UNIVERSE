// js/main-logic.js
function checkPassword() {
    const input = document.getElementById('passwordInput').value.trim();
    const error = document.getElementById('errorMessage');
    
    // Check if name is Muskan (case insensitive)
    if (input.toLowerCase() === "muskan") {
        // Shandaar transition ke liye alert ya direct redirect
        alert("Correct! Welcome to your universe, Muskan. ❤️");
        window.location.href = "chapters.html"; // Ye use home page par le jayega
    } else {
        error.style.display = "block";
        // Shake effect on input
        const inputField = document.getElementById('passwordInput');
        inputField.style.border = "2px solid red";
        setTimeout(() => { inputField.style.border = "none"; }, 1000);
    }
}
