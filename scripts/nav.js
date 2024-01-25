$(document).ready(function () {
    $('.menu').hover(
        function () {
            $(this).next('.dropdown-menu').stop().slideDown(200).css('display', 'flex');;
        },
        function () {
            $(this).next('.dropdown-menu').stop().slideUp(200);
        }
    );
    $('.dropdown-menu').hover(
        function () {
            $(this).stop().slideDown(200).css('display', 'flex');;
        },
        function () {
            $(this).stop().slideUp(200);
        }
    );
});

$("nav a").hover(function () {
    $(this).css("border-bottom", "2px solid #000");
    $(this).css("transition", "border-bottom 0.5s ease-in-out");
}, function () {
    $(this).css("border-bottom", "none");
});
