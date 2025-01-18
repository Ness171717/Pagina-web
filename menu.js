document.addEventListener("DOMContentLoaded", function () {
    // Carrusel automático
    let currentIndex = 0;
    const items = document.querySelectorAll('.carouselI-item');
    const totalItems = items.length;
  
    function moveSlide() {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      const offset = -currentIndex * 100;
      document.querySelector('.carouselI-track').style.transform = `translateX(${offset}%)`;
    }
    setInterval(moveSlide, 3000);
   });
    // Menú toggle
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const mobileMenu = document.querySelector(".mobile-menu");
      
        // Mostrar u ocultar el menú al hacer clic en el botón
        menuToggle.addEventListener("click", function (event) {
          mobileMenu.classList.toggle("active"); // Agregar o quitar la clase 'active'
          event.stopPropagation(); // Evitar que el clic se propague al documento
        });
      
        // Cerrar el menú si haces clic fuera de él
        document.addEventListener("click", function (event) {
          if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("active"); // Quitar la clase 'active'
          }
        });
      });
      
      
  