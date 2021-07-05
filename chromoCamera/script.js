var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modalImg");

var trigger = document.getElementById("modal-trigger");

var bttnClose = document.getElementById("close");


openModal = function(img) {
    modal.classList.toggle('modal-display')
    modalImg.src = img.src;
}

bttnClose.onclick = function() {
    modal.classList.toggle('modal-display')
}

// When the user clicks anywhere outside of the modal, bttnClose it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.toggle('modal-display')
  }
}