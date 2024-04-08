const button = document.getElementById('noBtn');
const buttonYes = document.getElementById('yesBtn');
const questionContainer = document.querySelector('.container');
const shyCatContainer = document.getElementById('shyCatContainer');
let jumpCount = 0;
let prevX = 0;
let prevY = 0;

// Function to handle button jump
function handleButtonJump(event) {
  if (jumpCount < 20) {
    const buttonRect = button.getBoundingClientRect();
    const areaWidth = window.innerWidth * 0.45; // Decrease the jumping surface area width
    const areaHeight = window.innerHeight * 0.45; // Decrease the jumping surface area height
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
  } else if (jumpCount === 20) {
    // Change background image to dom-cat.jpeg
    document.body.style.backgroundImage = "url('dom-cat.jpeg')";
    // Change question text
    document.querySelector('.container h1').textContent = "Now, try again. Will you go out with me?";
    // Reset jump count
    jumpCount++;

    // Reset the position of question container and buttons
    questionContainer.style.display = 'block';
    shyCatContainer.style.display = 'none';
    button.style.transform = 'translate(0px, 0px)';

    buttonYes.addEventListener('click', function() {
      // Hide the question container
      document.querySelector('.container').style.display = 'none';
      // Show the shy cat picture container
      // Set background image
      document.body.style.backgroundImage = "url('shy-cat.jpeg')";
    });
  }
}

// Add event listeners for mouseover, touchstart, and pointerdown
button.addEventListener('mouseover', handleButtonJump);
button.addEventListener('touchstart', handleButtonJump);
button.addEventListener('pointerdown', handleButtonJump);

buttonYes.addEventListener('click', function() {
  // Hide the question container
  document.querySelector('.container').style.display = 'none';
  // Show the shy cat picture container
  // Set background image
  document.body.style.backgroundImage = "url('shy-cat.jpeg')";
});
