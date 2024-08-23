document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderContainer = document.querySelector('.slider-container');
    let index = 0;

    function showSlide(i) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        if (i >= totalSlides) {
            index = 0;
        } else if (i < 0) {
            index = totalSlides - 1;
        } else {
            index = i;
        }
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Show the first slide initially
    showSlide(index);

    // WhatsApp form submission functionality
    document.getElementById('pedidoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const productos = document.getElementById('productos').value;

        // Verificar si los valores se obtienen correctamente
        console.log(`Nombre: ${nombre}, Dirección: ${direccion}, Productos: ${productos}`);

        // Formatear el mensaje para WhatsApp
        const mensaje = `Hola, soy ${nombre}. Mi dirección es ${direccion}. Necesito los siguientes productos: ${productos}.`;

        // Número de WhatsApp al que se enviará el mensaje
        const numeroWhatsapp = '+593984196889'; // Cambia el número según sea necesario

        // Crear la URL de WhatsApp
        const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a la URL de WhatsApp
        window.open(url, '_blank');
    });

    // Medidas de seguridad para dificultar la manipulación
    // Deshabilitar clic derecho
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Deshabilitar ciertas combinaciones de teclas
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
        if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });

    // Advertencia legal en la consola (puede ser opcional)
    console.log("%cAdvertencia: Este es un área de desarrolladores. La manipulación no autorizada del código está prohibida.", "color: red; font-size: 16px; font-weight: bold;");
});
