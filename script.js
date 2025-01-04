// Seleccionar todos los carruseles
const carousels = document.querySelectorAll('.image-carousel');

carousels.forEach((carousel) => {
    const container = carousel.querySelector('.carousel-container');
    const images = container.querySelectorAll('img');
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');

    let currentIndex = 0; // Índice inicial
    const totalImages = images.length; // Número total de imágenes en este carrusel

    function updateCarousel() {
        const offset = -currentIndex * 100; // Desplazamiento dinámico
        container.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});
