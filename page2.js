// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Back Button Navigation
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Next Step Button Navigation
    const nextStepButton = document.getElementById('nextStepButton');
    nextStepButton.addEventListener('click', function () {
        window.location.href = 'page3.html';
    });
});
