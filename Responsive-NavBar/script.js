// Step 1: Select the elements
const hamburger = document.querySelector('.hamburger-icon'); // Select the hamburger icon
const navbar = document.querySelector('.navbar'); // Select the navbar (with the links)

// Step 2: Add click event listener
hamburger.addEventListener('click', () => {
    // Step 3: Toggle the menu visibility
    navbar.classList.toggle('show');
})