document.getElementById('personal-info-box').addEventListener('click', function() {
    document.getElementById('personal-info-modal').style.display = 'block';
});

document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    document.getElementById('personal-info-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('personal-info-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});