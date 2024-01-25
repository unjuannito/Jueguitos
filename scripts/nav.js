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


    $("nav a").hover(function () {
        $(this).css("position", "relative").append("<div class='underline'></div>");
        $(".underline").animate({ width: "100%" }, 300);
    }, function () {
        $(".underline").animate({ width: "0" }, 300, function () {
            $(this).remove();
        });
    });
});


