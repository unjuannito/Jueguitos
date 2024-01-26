$(document).ready(function () {
    $(window).scroll(function () {
        $(".scroll").each(function (index) {
            // Verificar si el elemento actual no es un botón
            if (!$(this).is('button')) {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height() - $(this).height() / 2) {
                    // $(this).css({ opacity: 1, transform: "translateX(0)", transitionDelay: '0.2s' });
                    $(this).animate({ marginLeft: '50px', opacity: 1 }, 1000);

                }
            }
        });
    });
});
