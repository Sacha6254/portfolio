document.getElementById('but1').addEventListener('click', function() {
    document.getElementById('personal-info-modal').style.display = 'block';
});

document.getElementsByClassName('close-button1')[0].addEventListener('click', function() {
    document.getElementById('personal-info-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('personal-info-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('but2').addEventListener('click', function() {
    document.getElementById('cv-modal').style.display = 'block';
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