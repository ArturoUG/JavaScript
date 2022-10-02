console.log("-------------------")

var frutas = ["Manzana", "Fresa", "Melon",  "Sandia"]

console.log(frutas)
console.log(frutas.length)
console.log(frutas[0])
console.log(frutas[2])

var masFrutas = frutas.push("Uvas")//Añade un elemento al final del arreglo
console.log(frutas)

var ultimo = frutas.pop()//Elimina el ultimo elemento del arreglo
console.log(frutas)

var principio = frutas.unshift("Naraja")//Añade un elemento al principio del arreglo
console.log(frutas)

var elimina = frutas.shift()//Elimina el primer elemento del arreglo
console.log(frutas)

var posicion = frutas.indexOf("Melon")//Busca la posicion del elemnto que le pases
console.log(posicion)
