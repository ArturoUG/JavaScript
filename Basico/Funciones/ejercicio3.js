var num = parseInt(prompt("Ingresa un numero limite: "))

for(var i = 1; i <= num; i++){
    if (i % 3 == 0 && i % 5 == 0) respuesta = " Par d' 3 y 5 <br>"
    if (i % 3 != 0 && i % 5 == 0) respuesta = " Par d' 5 <br>"
    if (i % 3 == 0 && i % 5 != 0) respuesta = " Par d' 3 <br>"
    if (i % 3 != 0 && i % 5 != 0) respuesta = "<br>"
    
    document.write(i + respuesta)
}