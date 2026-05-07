document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    const successMessage = document.getElementById('success-message');
    const questionSection = document.getElementById('question-section');
    const buttonsContainer = document.querySelector('.buttons');

    // Make the NO button position absolute relative to its container to start
    btnNo.style.position = 'absolute';
    // Position it to the right of the Yes button initially
    btnNo.style.right = '0';
    
    // Function to move the "No" button randomly
    const moveButton = () => {
        // Get the viewport dimensions
        const xMax = window.innerWidth - btnNo.offsetWidth - 20;
        const yMax = window.innerHeight - btnNo.offsetHeight - 20;

        // Generate random coordinates
        const randomX = Math.max(20, Math.floor(Math.random() * xMax));
        const randomY = Math.max(20, Math.floor(Math.random() * yMax));

        // Change position type to fixed to move freely around screen
        btnNo.style.position = 'fixed';
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    };

    // Move on hover for desktop
    btnNo.addEventListener('mouseover', moveButton);
    
    // Move on touch/click for mobile
    btnNo.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        moveButton();
    });

    // Also just in case they manage to click it somehow
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });

    // Handle Yes button click
    btnYes.addEventListener('click', () => {
        // Show success screen
        successMessage.classList.remove('hidden');
        
        // Trigger confetti
        var duration = 3000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4b72', '#ff2a55', '#3b2818', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4b72', '#ff2a55', '#3b2818', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    });
});
