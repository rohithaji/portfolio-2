// script.js

// Get the navbar toggler and collapse elements
const navbarToggler = document.getElementById('navbar-toggler');
const navbarCollapse = document.getElementById('navbar-collapse');

// Add an event listener to the navbar toggler
navbarToggler.addEventListener('click', () => {
    // Toggle the show class on the navbar collapse
    navbarCollapse.classList.toggle('show');
});