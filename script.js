const button = document.getElementById('noBtn');
let jumpCount = 0;
let prevX = 0;
let prevY = 0;

// Function to handle button jump
function handleButtonJump(event) {
  if (jumpCount < 100) {
    const buttonRect = button.getBoundingClientRect();
    const areaWidth = window.screen.width * 0.45; // Decrease the jumping surface area width
    const areaHeight = window.screen.height * 0.45; // Decrease the jumping surface area height
    const maxX = areaWidth - buttonRect.width;
    const maxY = areaHeight - buttonRect.height;

    // Calculate random positions with a larger distance from the previous position
    const newX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const newY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    // Calculate the distance from the previous position
    const deltaX = newX - prevX;
    const deltaY = newY - prevY;

    // Apply transition for smooth animation
    button.style.transition = 'transform 0.2s ease-in-out';

    // Apply the new position
    button.style.transform = `translate(${prevX + deltaX * 0.9}px, ${prevY + deltaY * 0.9}px)`; // Increase the jump distance

    // Update previous position
    prevX = prevX + deltaX * 0.90; // Increase the jump distance
    prevY = prevY + deltaY * 0.90; // Increase the jump distance

    // Increment the jump count
    jumpCount++;
  }
}

// Add event listeners for mouseover and touchstart
button.addEventListener('mouseover', handleButtonJump);
button.addEventListener('touchstart', handleButtonJump);
button.addEventListener('pointerdown', handleButtonJump);