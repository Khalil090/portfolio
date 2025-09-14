// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const sideNav = document.querySelector('.side-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on burger click
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        sideNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sideNav.contains(e.target) && !burgerMenu.contains(e.target) && sideNav.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            sideNav.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            sideNav.classList.remove('active');
        });
    });
});

// Theme Switcher
document.addEventListener('DOMContentLoaded', function () {
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.body;

    function setTheme(theme) {
        // Remove active class from all buttons
        themeBtns.forEach(btn => btn.classList.remove('active'));

        // Add active class to matching button
        const activeBtn = Array.from(themeBtns).find(btn => btn.getAttribute('data-theme') === theme);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Set theme
        body.setAttribute('data-theme', theme);

        // Save theme preference
        localStorage.setItem('theme', theme);
    }

    // Set initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Theme switching functionality
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            setTheme(theme);
        });
    });
});
