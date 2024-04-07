const button = document.getElementById('noBtn');
let jumpCount = 0;
let prevX = 0;
let prevY = 0;

button.addEventListener('mouseover', function() {
  if (jumpCount < 100) {
    const buttonRect = button.getBoundingClientRect();
    const maxX = (window.innerWidth - buttonRect.width) * 0.15;
    const maxY = (window.innerHeight - buttonRect.height) * 0.15;

    // Calculate random positions with a larger distance from the previous position
    const newX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const newY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    // Calculate the distance from the previous position
    const deltaX = newX - prevX;
    const deltaY = newY - prevY;

    // Apply transition for smooth animation
    button.style.transition = 'transform 0.2s ease-in-out';

    // Apply the new position
    button.style.transform = `translate(${prevX + deltaX * 2}px, ${prevY + deltaY * 2}px)`;

    // Update previous position
    prevX = prevX + deltaX * 1;
    prevY = prevY + deltaY * 1;

    // Increment the jump count
    jumpCount++;
  } else if (jumpCount === 100) {
    // Allow user to click on the button after the 20th jump
    button.style.transition = 'none'; // Remove transition for immediate response
  }
});

