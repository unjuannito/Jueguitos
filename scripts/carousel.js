$(document).ready(function () {

    var nintendo = ["images/carrusel/juego1.png", "images/carrusel/juego2.png", "images/carrusel/juego3.png", "images/carrusel/juego4.png", "images/carrusel/juego5.png"];
    var xbox = ["images/carrusel/juego6.png", "images/carrusel/juego7.jpg", "images/carrusel/juego8.jpg", "images/carrusel/juego9.jpg", "images/carrusel/juego10.jpg"];
    var playstation = ["images/carrusel/juego11.jpg", "images/carrusel/juego12.png", "images/carrusel/juego13.png", "images/carrusel/juego14.jpg", "images/carrusel/juego15.png"];

    var indice = 0;

    function cambiarImagen() {
        $(".carousel div img:nth-child(1)").attr("src", xbox[indice]);
        $(".carousel div img:nth-child(2)").attr("src", nintendo[indice]);
        $(".carousel div img:nth-child(3)").attr("src", playstation[indice]);


        indice = (indice + 1) % nintendo.length;
    }

    setInterval(cambiarImagen, 2000);
    
});