document.addEventListener("DOMContentLoaded", (event) => {
    'use strict';
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});
