// Seleccionar botón de menú y menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Evento para abrir/cerrar menú móvil
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show'); // Agrega o quita la clase "show"
});
