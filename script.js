/* =========================================
   1. MENÚ DE NAVEGACIÓN
========================================= */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', () => {

        const isOpen = navMenu.classList.toggle('active');

        menuToggle.classList.toggle('active');

        menuToggle.setAttribute(
            'aria-expanded',
            isOpen
        );

    });

    // Cerrar menú al seleccionar una página

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

    // Cerrar menú al cambiar a escritorio

    window.addEventListener('resize', () => {

        if (window.innerWidth >= 900) {

            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

        }

    });

}


/* =========================================
   2. FORMULARIO DE CONTACTO
========================================= */

const contactForm = document.querySelector('#contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const asunto = document.querySelector('#asunto').value;
        const mensaje = document.querySelector('#mensaje').value;

        console.log('Mensaje recibido:');

        console.log({
            nombre,
            email,
            asunto,
            mensaje
        });

        const formMessage = document.querySelector('#form-message');

        formMessage.textContent =
            '¡MENSAJE ENVIADO! Gracias por contactar con RED EYES.';

        contactForm.reset();

    });

}