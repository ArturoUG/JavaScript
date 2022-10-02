var cafeciro = require("express");
var aplicacion = cafeciro();

aplicacion.get("/",inicio);
aplicacion.get("/cursos",cursos);

function inicio(peticion, resultado){
    resultado.send("Este es el <strong> inicio </strong>")
}

function cursos(peticion, resultado){
    resultado.send("Este son los <strong> cursos </strong>")
}

aplicacion.listen(8989);