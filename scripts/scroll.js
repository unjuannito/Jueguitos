$(document).ready(function () {
    $(".scroll").css({ opacity: 1, transform: "translateX(-100%)" });

    $(window).scroll(function () {
        $(".scroll").each(function (index) {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).css({ opacity: 1, transform: "translateX(0)", transitionDelay: index * 0.2 + 's' });
            }
        });
    });
});