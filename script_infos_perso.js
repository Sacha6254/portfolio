document.getElementById('but1').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('profil-modal').style.display = 'block';
    }, 2700); // 2700 millisecondes = 2,7 secondes
});

document.getElementsByClassName('close-button1')[0].addEventListener('click', function() {
    document.getElementById('profil-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('profil-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});






document.getElementById('but2').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('cv-modal').style.display = 'block';
    }, 2700); // 2700 millisecondes = 2,7 secondes
});


document.getElementsByClassName('close-button2')[0].addEventListener('click', function() {
    document.getElementById('cv-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('cv-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});





document.getElementById('but3').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('projet-modal').style.display = 'block';
    }, 2700); // 2700 millisecondes = 2,7 secondes
});


document.getElementsByClassName('close-button3')[0].addEventListener('click', function() {
    document.getElementById('projet-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('projet-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});







document.getElementById('but4').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('contact-modal').style.display = 'block';
    }, 2700); // 2700 millisecondes = 2,7 secondes
});


document.getElementsByClassName('close-button4')[0].addEventListener('click', function() {
    document.getElementById('contact-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// Gestion des GIFs de confettis

document.getElementById('but1').addEventListener('click', function() {
    var gif = document.getElementById('confetti_Gif1');
    gif.style.display = 'block';

    // Cacher le GIF après que l'animation soit terminée (par exemple, après 2 secondes)
    setTimeout(function() {
        gif.style.display = 'none';
    }, 2500); // 2500 millisecondes = 2,5 secondes
});

document.getElementById('but2').addEventListener('click', function() {
    var gif = document.getElementById('confetti_Gif2');
    gif.style.display = 'block';

    // Cacher le GIF après que l'animation soit terminée (par exemple, après 2 secondes)
    setTimeout(function() {
        gif.style.display = 'none';
    }, 2500); // 2500 millisecondes = 2,5 secondes
});

document.getElementById('but3').addEventListener('click', function() {
    var gif = document.getElementById('confetti_Gif3');
    gif.style.display = 'block';

    // Cacher le GIF après que l'animation soit terminée (par exemple, après 2 secondes)
    setTimeout(function() {
        gif.style.display = 'none';
    }, 2500); // 2500 millisecondes = 2,5 secondes
});

document.getElementById('but4').addEventListener('click', function() {
    var gif = document.getElementById('confetti_Gif4');
    gif.style.display = 'block';

    // Cacher le GIF après que l'animation soit terminée (par exemple, après 2 secondes)
    setTimeout(function() {
        gif.style.display = 'none';
    }, 2500); // 2500 millisecondes = 2,5 secondes
});

document.getElementById('but1').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('profil-modal').style.display = 'block';
    }, 2700); // 2700 millisecondes = 2,7 secondes
});