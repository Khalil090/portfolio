document.addEventListener('DOMContentLoaded', function () {
    anime({
        targets: '#square',
        backgroundColor:[
            '#4d4df9',
            '#f94d4d',
            '#2b79c8',
        
        ],
        rotate: 90 * 2,
        duration: 2000,
        loop: true,
        ease: 'inOutExpo',
    });
});


