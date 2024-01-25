$(document).ready(function () {

    var imagenes = ["images/carrusel/juego1.png", "images/carrusel/juego2.png", "images/carrusel/juego3.png", "images/carrusel/juego4.png", "images/carrusel/juego5.png"];
    var indice = 0;

    function cambiarImagen() {
        $(".slide").attr("src", imagenes[indice]);

        indice = (indice + 1) % imagenes.length;
    }

    setInterval(cambiarImagen, 2000);
    
});