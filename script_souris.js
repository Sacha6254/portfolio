document.addEventListener('mousemove', function(event) {
    var football = document.getElementById('ballon');
    var x = event.clientX;
    var y = event.clientY;

    // Ajuste la position pour centrer le ballon sous le curseur
    football.style.left = (x - 25) + 'px';
    football.style.top = (y - 25) + 'px';

    
});