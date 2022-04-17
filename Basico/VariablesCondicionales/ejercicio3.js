var usuario = prompt("Cual es tu peso: ")
var planeta = parseInt(prompt("Elige tu planeta \n1.- Marte, 2.-Jupiter"))

var tierra = 9.8
var marte = 3.4
var jupiter = 24.8

var peso = 60.00
var pesofinal;
var nombre;

if(planeta == 1){
    pesofinal = usuario * marte / tierra;
    nombre = "Marte"
}else if(planeta == 2){
    pesofinal = usuario * jupiter / tierra;
    nombre = "Jupiter"
}else{
    document.write("Opcion erronea")
    nombre = "Krypton"
}
pesofinal = parseInt(pesofinal);

document.write("<br>Tu peso es: ", nombre ," ", pesofinal, "<strong>kilos")