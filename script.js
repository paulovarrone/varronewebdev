// open and close menu
function mostrarEsconder() {
 let toggle = this.nextElementSibling;

 if (menuHome.style.display == "flex") {
    menuHome.style.display = "none";
 } else {
    menuHome.style.display = "flex";
  }
}

let toggleElements = document.querySelectorAll('.toggle');
    for (let i = 0; i < toggleElements.length; i++) {
    toggleElements[i].addEventListener('click', mostrarEsconder);
}

// background menu hamburguer and close(X)
let menuToggle = document.querySelector('.toggle');
    menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')

}    

