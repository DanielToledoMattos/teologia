document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
        // Parâmetros opcionais
        loop: true, // Faz o carrossel ter um loop infinito
        slidesPerView: 1, // Número de slides visíveis de uma vez
        spaceBetween: 30, // Espaço entre os slides

        autoplay: {
            delay: 5000,         // Tempo em milissegundos (5 segundos aqui)
            disableOnInteraction: false,  // Continua o autoplay mesmo depois de interagir (clicar nos botões)
        },

        speed: 1700,

        // Se precisar de paginação (pontos)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Se precisar de botões de navegação (setas)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // E se quiser barra de rolagem
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // Breakpoints responsivos (opcional, mas boa prática)
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });
});