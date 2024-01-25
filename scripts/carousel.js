$(document).ready(function () {
    // Array con las rutas de las imágenes
    var imagenes = ["images/carrusel/juego1.png", "images/carrusel/juego2.png", "images/carrusel/juego3.png", "images/carrusel/juego4.png", "images/carrusel/juego5.png"];
    var indice = 0;

    // Función para cambiar la imagen
    function cambiarImagen() {
        // Cambiar la ruta de la imagen
        $(".slide").attr("src", imagenes[indice]);

        // Incrementar el índice para la próxima imagen
        indice = (indice + 1) % imagenes.length;
    }

    // Llamar a la función cada 2000 milisegundos (2 segundos)
    setInterval(cambiarImagen, 2000);
});