$(document).ready(function () {

    // Microinteracción al pasar el ratón por encima de la imagen
    $("img:not(header img)").hover(
        function () {
            console.log("Sd ")
            // Cuando el ratón entra
            $(this).animate({
                width: "+=10vh",
                height: "+=10vh"
            }, 300); // 300 milisegundos de duración
        },
        function () {
            // Cuando el ratón sale
            $(this).animate({
                width: "-=10vh",
                height: "-=10vh"
            }, 300);
        }
    );
    $("button:not(header button)").click(function () {
        $(this).css("background-color", "red");
        $(this).animate({ width: "4vw", height: "4vh", fontSize: "0.4vw" }, 500);
        setTimeout(function () {
            $(this).animate({ width: "6vw", height: "6vh", fontSize: "0.8vw" }, 500);
            $(this).css("background-color", "#E47712");
        }.bind(this), 200);
    });




});