/**
 * main.js
 * Core logic for LLAGOX interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Semi-Sticky Header Logic ---
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // If scrolling down and past the header height, hide it.
        // If scrolling up, show it.
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }

        // Update last scroll position
        lastScrollY = currentScrollY;
    });

});