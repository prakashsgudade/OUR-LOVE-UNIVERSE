<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timeline | Love Universe</title>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Montserrat:wght@300;500;700&family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
        :root { --gold:#d4af37; --glass:rgba(255,255,255,0.03); --border:rgba(212,175,55,0.2); }
        body { margin:0; background:#050505; color:white; font-family:'Montserrat',sans-serif; overflow-x:hidden; }
        
        #space { position:fixed; top:0; left:0; z-index:-1; width:100%; height:100%; }
        
        .header-section { text-align:center; padding:60px 20px; position:relative; z-index:10; }
        .header-section h1 { font-family:'Cinzel Decorative'; color:var(--gold); font-size:clamp(1.8rem, 5vw, 3rem); letter-spacing:5px; margin:0; }
        .header-section p { font-family:'Great Vibes'; font-size:1.5rem; color:#ffb3b3; }

        /* Timeline Design */
        .timeline-container { position:relative; max-width:800px; margin:0 auto; padding:20px; }
        .timeline-container::after { content:''; position:absolute; width:2px; background:linear-gradient(to bottom, transparent, var(--gold), transparent); top:0; bottom:0; left:50%; margin-left:-1px; }

        .node { position:relative; width:100%; margin-bottom:50px; display:flex; justify-content:center; }
        .card { 
            width:45%; padding:20px; background:var(--glass); backdrop-filter:blur(10px);
            border:1px solid var(--border); border-radius:15px; cursor:pointer; transition:0.3s;
            position:relative; text-align:center;
        }
        .node:nth-child(odd) { justify-content: flex-start; }
        .node:nth-child(even) { justify-content: flex-end; }
        
        .card:hover { transform:scale(1.05); border-color:var(--gold); box-shadow:0 0 20px rgba(212,175,55,0.2); }
        .card h3 { color:var(--gold); margin:0; font-size:1.1rem; }
        .card small { opacity:0.6; font-size:0.8rem; }

        .dot { position:absolute; left:50%; top:20px; transform:translateX(-50%); width:12px; height:12px; background:#000; border:2px solid var(--gold); border-radius:50%; z-index:5; box-shadow:0 0 10px var(--gold); }

        /* Floating Controls */
        .controls { position:fixed; bottom:20px; right:20px; display:flex; flex-direction:column; gap:10px; z-index:100; }
        .btn { background:rgba(0,0,0,0.8); border:1px solid var(--gold); color:var(--gold); width:45px; height:45px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; }
        
        .search-box { position:fixed; top:20px; right:20px; z-index:100; display:flex; background:rgba(0,0,0,0.8); border-radius:30px; border:1px solid var(--gold); padding:5px 15px; }
        .search-box input { background:none; border:none; color:white; width:80px; padding:8px; outline:none; text-align:center; }
        
        @media (max-width:600px) {
            .timeline-container::after { left:30px; }
            .node { justify-content:flex-end !important; }
            .card { width:80%; }
            .dot { left:30px; }
        }
    </style>
</head>
<body>
    <canvas id="space"></canvas>

    <div class="search-box">
        <input type="number" id="dayInput" placeholder="Day #">
        <button onclick="jumpToDay()" style="background:none; border:none; color:var(--gold); cursor:pointer; font-weight:bold;">GO</button>
    </div>

    <div class="header-section">
        <h1>THE TIMELINE</h1>
        <p>A 5000-Day Love Story...</p>
    </div>

    <div class="timeline-container" id="timeline"></div>

    <div class="controls">
        <div class="btn" onclick="window.scrollTo({top:0, behavior:'smooth'})">⬆</div>
        <div class="btn" onclick="window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})">⬇</div>
    </div>

    <script>
        const COMPLETED_DAYS = 15; // Jitne tumne khud likhe hain
        const TOTAL = 5000;
        const list = document.getElementById('timeline');

        for(let i=1; i<=TOTAL; i++) {
            const node = document.createElement('div');
            node.className = 'node';
            node.id = `day-node-${i}`;
            node.innerHTML = `
                <div class="dot"></div>
                <div class="card" onclick="openDay(${i})">
                    <h3>Day ${i}</h3>
                    <small>${i <= COMPLETED_DAYS ? 'Unveiled ❤️' : 'Locked 🔒'}</small>
                </div>
            `;
            list.appendChild(node);
        }

        function openDay(i) {
            if(i <= COMPLETED_DAYS) {
                window.location.href = `day.html?d=${i}`;
            } else {
                alert("Sabr karo Muskan! Ye din bahot jaldi aayega ❤️");
            }
        }

        function jumpToDay() {
            const val = document.getElementById('dayInput').value;
            const target = document.getElementById(`day-node-${val}`);
            if(target) target.scrollIntoView({behavior:'smooth', block:'center'});
        }

        // Simple Star Field
        const c = document.getElementById("space");
        const ctx = c.getContext("2d");
        c.width = window.innerWidth; c.height = window.innerHeight;
        const stars = Array(150).fill().map(() => ({ x: Math.random()*c.width, y: Math.random()*c.height, s: Math.random()*2 }));
        function draw() {
            ctx.clearRect(0,0,c.width,c.height);
            ctx.fillStyle = "white";
            stars.forEach(s => {
                ctx.beginPath(); ctx.arc(s.x, s.y, s.s, 0, Math.PI*2); ctx.fill();
                s.y += 0.2; if(s.y > c.height) s.y = 0;
            });
            requestAnimationFrame(draw);
        }
        draw();
    </script>
</body>
</html>
