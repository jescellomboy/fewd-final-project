// modal
var popup = document.getElementById('popup');
var signup = document.getElementById('sign-up');
var close = document.getElementById('close-button');

function showPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function(event) {
  showPopup();
});

signup.addEventListener("click", function(event) {
    closePopup();
});

close.addEventListener("click", function(event) {
    closePopup();
});