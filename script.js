// Mostrar mensajes paso a paso
function showMessage(nextMessage) {
    if (nextMessage <= 3) {
        document.getElementById("message" + nextMessage).classList.toggle("hidden");
    }
}

// Confetti efecto de celebración
function celebrate() {
    const confettiCanvas = document.getElementById("confetti");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const context = confettiCanvas.getContext("2d");

    const confettiPieces = Array.from({ length: 100 }, () => ({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height,
        size: Math.random() * 5 + 5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }));

    function animateConfetti() {
        context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiPieces.forEach(p => {
            context.beginPath();
            context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            context.fillStyle = p.color;
            context.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.y > confettiCanvas.height) p.y = 0;
            if (p.x > confettiCanvas.width) p.x = 0;
        });
        requestAnimationFrame(animateConfetti);
    }
    animateConfetti();
}

// Crear corazones flotantes
const heartContainer = document.getElementById("heart-container");
for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartContainer.appendChild(heart);
}
