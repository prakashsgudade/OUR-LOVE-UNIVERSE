// Add this inside your window.onload in day-engine.js

function renderInfiniteDay(data, container) {
    if (data.layout === "cinematic-call") {
        container.innerHTML = `
            <div class="main-wrapper glitch-bg">
                <div class="glass-container calling-ui">
                    <div class="caller-img ripple">
                        <img src="${data.image}">
                    </div>
                    <h1 class="title">Unknown Number</h1>
                    <p class="status">Calling...</p>
                    <div class="call-actions">
                        <div class="decline" onclick="alert('You cant ignore destiny!')">✖</div>
                        <div class="accept" onclick="showCallMsg('${data.hidden}')">✔</div>
                    </div>
                </div>
            </div>
        `;
    } 
    else if (data.layout === "ai-chat") {
        container.innerHTML = `
            <div class="main-wrapper">
                <div class="glass-container">
                    <h2 class="title">AI Love Bot</h2>
                    <div class="chat-box" id="chat">
                        <div class="msg-bot">Analyzing your mood, Muskan...</div>
                    </div>
                    <button class="action-btn" onclick="aiReply()">Ask My Heart</button>
                </div>
            </div>
        `;
    }
    else {
        // Fallback to Classic
        renderClassic(data, container);
    }
}
