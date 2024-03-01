function limpiarCampos(){
    document.getElementById("form").reset();
    document,getElementById("error-message").textContent="";

}
function enviar(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    if ( nombre === "" || email === "" || contrasena === ""){
        document.getElementById("error-message").textContent = "Todos los campos son oblogatorios.";
    }else{
        limpiarCampos();

        window.location.href="/procesar_formulario;"
    }
}