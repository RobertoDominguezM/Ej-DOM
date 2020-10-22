/**
 * Ejercicio 3
 */
//Punto 2.1
function focalizar() {
    document.getElementById("nombre").focus();
}
//Punto 2.2
function quitarFoco() {
    document.getElementById("nombre").blur();
}
/**
 * Ejercicio 4
 */
//Punto 1
function elementoH2() {
    var element = document.createElement("h2");
    var text = document.createTextNode("Lorem Ipsum de nuevo");
    var padre = document.getElementById("seccionTercera");
    var hijo = padre.firstElementChild;
    element.appendChild(text);
    padre.insertBefore(element, hijo);
}
//Punto 2
function cambioLugarP(){
    var seccionTercera = document.getElementById("seccionTercera");
    var primero = document.getElementById("seccionPrimaria");
    var parrafoTercero = primero.lastChild;
    var ponerPrimero = seccionTercera.firstChild;
    seccionTercera.insertBefore(parrafoTercero, ponerPrimero);
}
//Punto 3
function crearDivNuevo(){
    var div = document.createElement("div");
    var clon = document.getElementById("seccionLista").cloneNode(true);
    div.appendChild(clon);
    document.body.appendChild(div);
}
//Punto 4
function eliminarUltimaFilaLista(){

}