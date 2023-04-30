// open and close menu
function mostrarEsconder() {
 let toggle = this.nextElementSibling;

 if (menuHome.style.display == "flex") {
    menuHome.style.display = "none";
 } else {
    menuHome.style.display = "flex";
  }

  
}

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    // Esconde o menu e botao x vermelho
    menuHome.style.display = "none";
    menuToggle.classList.remove('active');
  }
});

let toggleElements = document.querySelectorAll('.toggle');
    for (let i = 0; i < toggleElements.length; i++) {
    toggleElements[i].addEventListener('click', mostrarEsconder);
}

// background menu hamburguer and close(X)
let menuToggle = document.querySelector('.toggle');
    menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
      
}    

