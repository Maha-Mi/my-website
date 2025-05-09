// app.js
document.getElementById('changeColorButton').addEventListener('click', function() {
  // Array of colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFFF33'];

  // Randomly pick a color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Change the background color
  document.body.style.backgroundColor = randomColor;
});
