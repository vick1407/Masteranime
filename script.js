
// carrossel
const carousel = document.querySelector(".carousel");
const melhores = document.querySelector(".melhores");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

const images = Array.from(carousel.getElementsByTagName("img"));
const images2 = Array.from(melhores.getElementsByTagName("img"));
const numVisible = 4; // Quantidade de imagens visíveis ao mesmo tempo
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + numVisible) % images.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - numVisible + images.length) % images.length;
    updateCarousel();
});

nextBtn2.addEventListener("click", () => {
    currentIndex = (currentIndex + numVisible) % images2.length;
    updateMelhores();
});

prevBtn2.addEventListener("click", () => {
    currentIndex = (currentIndex - numVisible + images2.length) % images2.length;
    updateMelhores();
});

function updateCarousel() {
    const offset = -currentIndex * (100 / numVisible);
    carousel.style.transform = `translateX(${offset}%)`;
}

function updateMelhores() {
    const offset = -currentIndex * (100 / numVisible);
    melhores.style.transform = `translateX(${offset}%)`;
}
// Chame a função inicial para garantir que as imagens iniciais estejam visíveis

// Configuração para o carrossel com ID "temporada"
setupCarousel("temporada");



// menu responsivo
function clickMenu() {
    const teste = document.getElementById('teste');
    if (teste.style.display === 'block') {
        teste.style.display = 'none';
    } else {
        teste.style.display = 'block';
    }
}




