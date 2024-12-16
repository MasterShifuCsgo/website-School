// script.js

// Function to toggle 'clicked' class for buttons
function toggleClickedClass(button) {
    button.classList.toggle('clicked');
}

// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.togglebutton');

// Add click event listener to each toggle button
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        toggleClickedClass(this);
    });
});

// Select all success buttons
const successButtons = document.querySelectorAll('.success-btn');

// Add click event listener to each success button
successButtons.forEach(button => {
    button.addEventListener('click', function () {
        toggleClickedClass(this);
    });
});

//KASPARI TÖÖ EI COPY PASTEI