//Opcion 1
//* If, else if, else
var edad = 16

if(edad >= 22){
    console.log("Puedes participar en las votaciones, un gran poder lleva una gran responsabilidad")
}else if(edad >= 18){
    console.log("Puedes participar en las votaciones")
}else{
    console.log("Aun no puedes participar")
}

//Opcion 2 
//* Operador ternario
var num = 1

var resultado = num === 1 ? "Soy un uno" : "No soy uno";

console.log(resultado)


// Ejercicio 

var1 = "Piedra"
var2 = "Papel"
var3 = "Tijera"

function Azar(user, cpu){
    if(user != cpu){
        if(user === var1 && cpu === var2){
            console.log("Gana la computadora")
        }else if(user === var2 && cpu === var3){
            console.log("Gana la computadora")
        }else if(user === var3 && cpu === var1){
            console.log("Gana la computadora")
        }else{
            console.log("Gana el usuario")
        }
    }else{
        console.log("Empate")
    }
}

Azar(var2, var2)


//* Switch

var num2 = 9

switch(num2){
    case 1:
        console.log("Soy uno")
        break;
    case 10:
        console.log("Soy diez")
        break;
    case 100:
        console.log("Soy cien")
        break;
    default:
        console.log("No soy nada")
}
//Ejercicio 2
pi = "Piedra"
pa = "Papel"
ti = "Tijera"


// Opcion 1
function PPT(p,pc){
    switch(true){
        case p === pc:
            console.log("Empate")
            break;
        case p === pi && pc === pa:
            console.log("Pierdes")
            break;
        case p === pa && pc === ti:
            console.log("Pierdes")
            break;
        case p === ti && pc === pi:
            console.log("Pierdes")
            break;
        default:
            console.log("Ganas")
    }
}

//Opcion 2
function jugar(p, pc) {
    switch (true) {
        case p === pc:
            console.log("Empate");
            break;
        case (p === pi && pc !== pa) || (p === pa && pc !== ti) || (p === ti && pc !== pi):
            console.log("Ganas");
            break;
        default:
            console.log("Pierdes");
            break;
    }
}

PPT(ti, pa)