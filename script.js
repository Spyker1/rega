// Mostrar mensajes uno por uno sin ocultar los anteriores
function showMessage(nextMessage) {
    const message = document.getElementById("message" + nextMessage);
    if (message) {
        message.classList.remove("hidden");
    }
}

// Efecto de confeti con límite de tiempo
function celebrate() {
    const confettiCanvas = document.getElementById("confetti");
    const context = confettiCanvas.getContext("2d");

    confettiCanvas.width = confettiCanvas.parentElement.offsetWidth;
    confettiCanvas.height = confettiCanvas.parentElement.offsetHeight;

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
        // Animación limitada a 3 segundos para evitar acumulación
        setTimeout(() => cancelAnimationFrame(animationId), 3000);
        var animationId = requestAnimationFrame(animateConfetti);
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
