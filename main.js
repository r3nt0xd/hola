function saludos() {
alert("¿hola como esta?")
}

function AgregarComentario(){
    console.log("agregar comentario");

    var textNuevoComentario = document.getElementById("nuevo_comentario");
    console.log("textNuevoComentario");

    var comentarioIngresado = textNuevoComentario.value;
    console.log(comentarioIngresado);
   

    var comentario = document.createElement("p");
    comentario.textContent = comentarioIngresado;
    console.log(comentario);
    var seccionComentario = document.getElementById("seccionComentario");
    console.log(seccionComentario);

    seccionComentario.appendChild(comentario);

    textNuevoComentario.value = "   ";
}
