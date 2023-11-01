// menu

let menuHome = document.getElementById("menuHome");
let menuToggle = document.querySelector('.toggle');

// jquery
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



// scroll de animação

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else { 
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>  observer.observe(el));





// TROCAR LINGUA

const br = document.querySelector('#br')
const uk = document.querySelector('#uk')


const titulo2 = document.querySelector("#aboutTitle"); 
const titulo3 = document.querySelector("#projectsTitle"); 
const subtitulo = document.querySelector("#job")
const curriculo = document.querySelector("#resume")

const paragrafo1 = document.querySelector("#txtHome")
const paragrafo2 = document.querySelector("#aboutTxt")
const paragrafo3 = document.querySelector("#txtProjects")

const liTitulo2 = document.querySelector('.esp')
const liTitulo3 = document.querySelector('.pro')

const li1 = document.querySelector('#un')
const li2 = document.querySelector('#do')
const li3 = document.querySelector('#tr')
const li4 = document.querySelector('#qu')

const li5 = document.querySelector('#ci')
const li6 = document.querySelector('#se')
const li7 = document.querySelector('#st')
const li8 = document.querySelector('#oi')

const li9 = document.querySelector('#nv')
const li10 = document.querySelector('#de')
const li11 = document.querySelector('#on')
const li12 = document.querySelector('#do')

const hme = document.querySelector('#hme')
const abt = document.querySelector('#abt')
const prj = document.querySelector('#prj')

// voltando pro ingles
const originalTI2 = titulo2.textContent
const originalTI3 = titulo3.textContent
const subtt = subtitulo.textContent
const res = curriculo.textContent

const p1 = paragrafo1.textContent
const p2 = paragrafo2.textContent
const p3 = paragrafo3.textContent

const tlist2 = liTitulo2.textContent 
const tlist3 = liTitulo3 .textContent

const list1 = li1.textContent  
const list2 = li2.textContent 
const list3 = li3.textContent 
const list4 = li4.textContent 

const list5 = li5.textContent 
const list6 = li6.textContent 
const list7 = li7.textContent 
const list8 = li8.textContent 

const list9 = li9.textContent 
const list10 = li10.textContent 
const list11 = li11.textContent 
const list12 = li12.textContent 

const aboutENG = abt.textContent
const projENG = prj.textContent

br.addEventListener('click', function(){

  titulo2.innerHTML = 'Sobre Desenvolvimento'
  titulo3.innerHTML = 'Projetos'
  subtitulo.innerHTML = 'Desenvolvedor Frontend'
  curriculo.innerHTML = 'Vitae'

  paragrafo1.innerHTML = 'Paulo é um desenvolvedor front-end com habilidades sólidas em HTML, CSS e JavaScript. Ele se dedica a criar interfaces de usuário atraentes e responsivas, sempre focado em aprimorar a experiência do usuário. Paulo é um ativo valioso para qualquer equipe de desenvolvimento front-end, graças à sua dedicação e compromisso com a excelência na área.'
  paragrafo2.innerHTML = 'O desenvolvimento de websites envolve a criação e construção de páginas da web, garantindo que sejam funcionais, visualmente atraentes e responsivas em diversos dispositivos. Isso requer habilidades em linguagens de marcação como HTML, estilização com CSS e interatividade com JavaScript. Os desenvolvedores de websites trabalham para garantir uma experiência do usuário suave, navegável e eficaz. Manter-se atualizado com as tendências de design e as melhores práticas é essencial para fornecer soluções web de alta qualidade.'
  paragrafo3.innerHTML = 'Moldando Sua Presença Online: Nosso experiente desenvolvedor cria websites com propósito, responsividade em dispositivos móveis, conteúdo envolvente e testes rigorosos. Lançamos o seu site e oferecemos manutenção contínua. Esses projetos não apenas exibem nossa paixão por resultados excepcionais. Deixe-nos dar vida à sua visão e fazer com que sua presença online se destaque.'

  liTitulo2.innerHTML = 'Especificidade'
  liTitulo3.innerHTML = 'Projeto'

  li1.innerHTML = 'Design Responsivo'
  li2.innerHTML = 'Computadores'
  li3.innerHTML = 'Tablets'
  li4.innerHTML = 'Celulares'

  li5.innerHTML = 'Carregamento Rápido'
  li6.innerHTML = 'Estruturado'
  li7.innerHTML = 'Único'
  li8.innerHTML = 'Seguro'

  li9.innerHTML = 'Avaliação do website'
  li10.innerHTML = 'Estratégia de mercado'
  li11.innerHTML = 'Fluxo de projeto'
  li12.innerHTML = 'Finalização'

  abt.innerHTML = 'Sobre'
  prj.innerHTML = 'Projetos'

})

uk.addEventListener('click', function(){
  titulo2.textContent = originalTI2
  titulo3.textContent = originalTI3
  subtitulo.textContent = subtt
  curriculo.textContent = res

  paragrafo1.textContent = p1
  paragrafo2.textContent = p2
  paragrafo3.textContent = p3

  liTitulo2.textContent = tlist2
  liTitulo3.textContent  = tlist3

  li1.textContent = list1
  li2.textContent = list2
  li3.textContent = list3
  li4.textContent = list4

  li5.textContent = list5
  li6.textContent = list6
  li7.textContent = list7
  li8.textContent = list8

  li9.textContent = list9
  li10.textContent = list10
  li11.textContent = list11
  li12.textContent = list12

  abt.textContent = aboutENG 
  prj.textContent = projENG 
})
