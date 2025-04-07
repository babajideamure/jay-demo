// Get the hamburger menu and navigation elements
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle a class on the navigation to show/hide it
  navList.classList.toggle('active');
  
  // Optionally, change the hamburger icon to an X when opened
  hamburger.textContent = hamburger.textContent === '☰' ? '✕' : '☰';
});