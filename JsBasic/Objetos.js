console.log("-------------------")

var miObjeto = {
    marca : "Toyota",
    modelo : "Corolla",
    Año :  "2016",
    detalleAuto : function(){
        console.log(`Auto ${this.marca} ${this.Año}`)
    }
}

console.log(miObjeto.marca)
console.log(miObjeto.modelo)
miObjeto.detalleAuto()

console.log("-------------------")

//Funcion Constructora

function miAuto(marca, modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

var autoNuevo = new miAuto("Telas", "Modelo3", "2021")

console.log(autoNuevo)


// function auto (MARCA, MODELO, ANNIO){
//     this.marcas = MARCA;
//     this.modelos = MODELO;
//     this.annio = ANNIO;
//   }
//   var autos = [];
//   for(let i = 0 ; i < 2 ; i++){
//     var marcas = prompt("Ingresa la marca del auto");
//     var modelos = prompt("Ingresa el modelo del auto");
//     var annio = prompt("Ingresa el año del auto");
//     autos.push(new auto (marcas, modelos, annio));
// }
  
// for(let i = 0 ; i < autos.length ; i++){
//     console.log(autos[i]);
// }

console.log("-------------------")

var articulos = [
    { nombre : "Bici", costo: 3000},
    { nombre : "Tv", costo: 2500},
    { nombre : "Libro", costo: 320},
    { nombre : "Celular", costo: 10000},
    { nombre : "Laptop", costo: 20000},
    { nombre : "Teclado", costo: 500},
    { nombre : "Audifonos", costo: 1700},
]

var articulosFiltrador = articulos.filter(function(articulo){
    return articulo.costo <=500
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraAriculos = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(artc){ // Te devolvera todos los articulos del array como un for
    console.log(artc.nombre)
});

var articulosBaratos = articulos.some(function(articulo){ //Solo devolvera un True o False
    return articulo.costo <=  700
});

console.log(articulosFiltrador)
console.log(nombreArticulos)
console.log(encuentraAriculos)
console.log(articulosBaratos)