"use strict";
const juegos=["Zelda","Minecraft","Counter-Strike"];
console.log("Primero: ", juegos[0]);

console.log("Juegos:", juegos);
console.log("Cantidad:", juegos.length + " juegos");

juegos.push("FIFA")
console.log("Juegos tras push:", juegos);

juegos.pop();
console.log("Juegos tras pop:", juegos)

const alumno = {
    nombre: "Ana",
    curso: "1º DAW",
    edad: 18,
    repetidor: false
};

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);

alumno.nombre = "Ana María";
console.log("Nombre cambiado:", alumno.nombre);
console.log(alumno.constructor.name)