let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveSlide() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  // Mover el carrusel a la posición correcta
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
}

// Establecer el intervalo para el deslizamiento automático (cada 3 segundos)
setInterval(moveSlide, 3000); // Cambia las imágenes cada 3 segundos
