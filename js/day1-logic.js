/* ===== Love Clock Logic ===== */
function startClock() {
    // Yahan apni meeting date dalo (Year, Month-1, Day)
    // Example: 2024, 0 (Jan), 15
    const startDate = new Date(2023, 10, 07); 
    
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const timerDisplay = document.getElementById('love-timer');
        if(timerDisplay) {
            timerDisplay.innerHTML = `${days} Days, ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Page load hote hi clock shuru ho jaye
window.onload = startClock;
