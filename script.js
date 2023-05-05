let menuHome = document.getElementById("menuHome");
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function() {
  menuToggle.classList.toggle('active');
  if ($(menuHome).is(":visible")) {
    $(menuHome).slideUp();
  } else {
    $(menuHome).slideDown();
  }
};

window.addEventListener('scroll', function() {
  if ($(menuHome).is(":visible")) {
    $(menuHome).slideUp();
    menuToggle.classList.remove('active');
  }
});










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
    // atualiza a classe CSS do elemento "bar" correspondente ao slide
    bars[currentSlide].classList.add('active');
    // remove a classe CSS "active" de todos os outros elementos "bar"
    for (let i = 0; i < bars.length; i++) {
      if (i !== currentSlide) {
        bars[i].classList.remove('active');
      }
    }
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
    // adiciona a classe CSS "active" ao elemento "bar" clicado
    bar.classList.add('active');
    // remove a classe CSS "active" de todos os outros elementos "bar"
    for (let i = 0; i < bars.length; i++) {
      if (i !== index) {
        bars[i].classList.remove('active');
      }
    }
  });
});

// adiciona a classe CSS "active" ao primeiro elemento "bar" quando a página carrega
bars[0].classList.add('active');



