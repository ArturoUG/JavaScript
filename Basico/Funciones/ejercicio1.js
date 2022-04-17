var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujar(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineto(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujar("pink", 10, 300, 220, 10)