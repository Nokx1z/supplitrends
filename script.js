const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // Desplazamiento horizontal en porcentaje
  imageContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Ir al principio al llegar al final
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Ir al final al llegar al principio
  updateCarousel();
});
