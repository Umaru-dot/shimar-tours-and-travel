// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-content');
    const navLinks = document.querySelectorAll('.navbar a');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the default section (Home) when the page loads
    showSection('home');
});
