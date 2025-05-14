document.addEventListener('DOMContentLoaded', function () {
    anime({
        targets: '#square',
        rotate: 90 * 2,
        duration: 2000,
        loop: true,
        ease: 'inOutExpo',
    });
});

