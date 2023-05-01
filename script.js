// open and close menu
function mostrarEsconder() {
 let toggle = this.nextElementSibling;

 if (menuHome.style.display == "flex") {
    menuHome.style.display = "none";
 } else {
    menuHome.style.display = "flex";
  }

  
}

// add an eventListener scroll
window.addEventListener("scroll", function() {
  // hide menu and red (x) when scroll
  menuHome.style.display = "none";
  menuToggle.classList.remove('active');
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


// seleciona todos os elementos de input com o nome "slide"
const slides = document.querySelectorAll('input[name="slide"]');

// seleciona todos os elementos com a classe "bar"
const bars = document.querySelectorAll('.bar');

let currentSlide = 0; // índice do slide atual

// função que muda a imagem exibida
function changeSlide(slideIndex) {
  // verifica se o índice do slide é válido
  if (slideIndex >= 0 && slideIndex < slides.length) {
    // desmarca o slide atual
    slides[currentSlide].checked = false;
    // marca o novo slide
    slides[slideIndex].checked = true;
    // atualiza o índice do slide atual
    currentSlide = slideIndex;

    // remove a classe "active" de todas as barras
    bars.forEach((bar) => {
      bar.classList.remove('active');
    });

    // adiciona a classe "active" para a barra correspondente ao slide atual
    bars[currentSlide].classList.add('active');
  }
}

// muda para o próximo slide a cada 5 segundos
setInterval(() => {
  // incrementa o índice do slide atual
  currentSlide = (currentSlide + 1) % slides.length;
  // muda para o próximo slide
  changeSlide(currentSlide);
}, 5000);

// adiciona o manipulador de eventos de clique em cada elemento com a classe "bar"
bars.forEach((bar, index) => {
  bar.addEventListener('click', () => {
    // muda para o slide correspondente ao índice da barra clicada
    changeSlide(index);

    // remove a classe "active" de todas as barras
    bars.forEach((bar) => {
      bar.classList.remove('active');
    });

    // adiciona a classe "active" para a barra correspondente à barra clicada
    bar.classList.add('active');
  });
});


