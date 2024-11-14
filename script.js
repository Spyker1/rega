// Show second message on click
function showSecondMessage() {
    document.getElementById("secondMessage").classList.toggle("hidden");
}

// Confetti effect for celebration
function celebrate() {
    const confettiCanvas = document.getElementById("confetti");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const context = confettiCanvas.getContext("2d");

    // Array to store confetti pieces
    const confettiPieces = Array.from({ length: 100 }, () => ({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height,
        size: Math.random() * 5 + 5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }));

    // Animate confetti
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
