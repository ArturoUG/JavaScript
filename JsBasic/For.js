console.log("-------------------")

//*For
var estudiantes = ["Maria", "Arturo", "Fer", "Saam"]

function saludar(estudiante){
    console.log(`Hola: ${estudiante}`)
}

for(i = 0; i < estudiantes.length; i++){ //Mientras i sea menor que la longitud del arreglo "estudiantes"
    saludar(estudiantes[i]) //le pasaremos i como array que es el index que recorrera con el for
}

//* For of
for(estudiante of estudiantes){
    saludar(estudiante);
}

