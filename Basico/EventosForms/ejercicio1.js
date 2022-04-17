var d = document.getElementById("dibujito");
var texto = document.getElementById("texto");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoClick);

var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujar(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineto(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
 

// while(l < lineas){
//     yi = 10 * 1
//     xf = 10 * (l+1);
//     dibujar("red", 0, yi, xf, 300);
//     l ++;
// }


function dibujoClick(){
    var lineas = parseInt(texto.value);;
    var l = 0;
    var y1, xf;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++){
        yi = espacio * 1
        xf = espacio * (l+1);
        dibujar("red", 0, yi, xf, 300);
    }    

}