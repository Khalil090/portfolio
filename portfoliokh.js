document.addEventListener('DOMContentLoaded', function () {
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

