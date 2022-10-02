console.log("-------------------")

//*For
var estudiantes = ["Maria", "Arturo", "Fer", "Saam"];

function saludarEstudiantes(estudiante){
    console.log(`Hola: ${estudiante}`)
}

while(estudiantes.length > 0){ //Mientras que el la longitud del arreglo "estudiantes" sea mayor a 0 siempre se va cumplir
    console.log(estudiantes)
    var estudiante = estudiantes.shift(); //shift sacara los nombres del arreglo y el arreglo va a tener menos elementos hasta llegar a 0 y que no se cumpla
    saludarEstudiantes(estudiante)
}