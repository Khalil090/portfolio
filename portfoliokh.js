document.addEventListener('DOMContentLoaded', function () {
    // Theme Switcher
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Set initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    themeBtns.forEach(btn => {
        if(btn.getAttribute('data-theme') === savedTheme) {
            btn.classList.add('active');
        }
    });

    // Theme switching functionality
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            
            // Remove active class from all buttons
            themeBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Set theme
            body.setAttribute('data-theme', theme);
            
            // Save theme preference
            localStorage.setItem('theme', theme);
        });
    });

    // Original anime.js animation
    anime({
        targets: '#square',
        backgroundColor:[
            '#4d4df9',
            '#f94d4d',
            '#2b79c8',
        ],
        rotate: 90 * 0,
        duration: 2000,
        loop: true,
        ease: 'inOutExpo',
    });
});
document.addEventListener('DOMContentLoaded', function () {
animate('.shape', {
  x: random(-100, 100),
  y: random(-100, 100),
  rotate: random(-180, 180),
  duration: random(500, 1000),
  composition: 'blend',
});
});
lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/bd2ac1ea-3d9c-4a48-8065-a158c557c928/bb3dlAxrS0.json'
});

// Theme Switcher
const initThemeSwitcher = () => {
    const themeBtns = document.querySelectorAll('.theme-btn');
    if (!themeBtns.length) return;

    // Set initial theme
    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('preferred-theme', theme);
        themeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
        });
    };

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('preferred-theme') || 'dark';
    setTheme(savedTheme);

    // Add click handlers
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            setTheme(theme);
        });
    });
};

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', initThemeSwitcher);
