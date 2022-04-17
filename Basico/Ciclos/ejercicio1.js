var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var y1, xf;

function dibujar(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineto(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


while(l < lineas){
    yi = 10 * 1
    xf = 10 * (l+1);
    dibujar("red", 0, yi, xf, 300);
    l ++;
}