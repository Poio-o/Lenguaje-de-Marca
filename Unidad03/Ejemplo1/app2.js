"use strict";
const juegos = ["Zelda", "Minecraft", "Counter-Strike"];
console.log("Primero: ", juegos[0]);

console.log("Juegos:", juegos);
console.log("Cantidad:", juegos.length + " juegos");

juegos.push("FIFA");
console.log("Juegos tras push:", juegos);

juegos.pop();
console.log("Juegos tras pop:", juegos);

const mixto = ["hola", 42, true, { juego: "Minecraft", pegi: 12 }, [1, 2, 3]];
console.log("Mixto:", mixto);
console.log(`Elemento 0 (${mixto[0].constructor.name}):${mixto[0]}`);
console.log(`Elemento 1 (${mixto[1].constructor.name}):${mixto[1]}`);
console.log(`Elemento 2 (${mixto[2].constructor.name}):${mixto[2]}`);
console.log(`Elemento 3 (${mixto[3].constructor.name}):${mixto[3]}`);
console.log(`Elemento 4 (${mixto[4].constructor.name}):${mixto[4]}`);

console.log(
  typeof mixto[0],
  typeof mixto[1],
  typeof mixto[2],
  typeof mixto[3],
  typeof mixto[4],
);

const alumno = {
  nombre: "Ana",
  curso: "1º DAW",
  edad: 18,
  repetidor: false,
};

console.log("Alumno:", alumno);
console.log("Nombre:", alumno.nombre);

alumno.nombre = "Ana María";
console.log("Nombre cambiado:", alumno.nombre);
console.log(alumno.toString());
console.log(`Alumno:\nNombre - ${alumno.nombre}\nCurso - ${alumno.curso}`);

//Cómo dejas constante las propiedades de un objeto??

const producto = {
  nombre: "Patacas",
  precio: 2.99,
  stock: true,
  toString: function () {
    return `Producto: ${this.nombre} - Precio: ${this.precio}€ - Stock: ${this.stock}`;
  },
};

// console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}€ - Stock: ${producto.stock}`);
console.log(producto);

// Funciones
const total = function (precio, unidades) {
  return precio * unidades;
};

console.log("Total 9.99 * 3 = ", total(9.99, 3));
console.log(total(9.99, 3).constructor.name);

// Funciones flecha (arrow functions)
// const name = (params) => { cuerpo };s
const flecha = (precio, unidades) => precio * unidades;
console.log("Total 12.50 * 7 = ", flecha(12.5, 7));

// Crear un array de 3 objetos productos (nombre/precio)
// y una función que devuelva el precio total sumado
// (aqui puedes hacerlo simple: sumar 3 elementos a mano, sin bucles si no quieres entrar).
const productos = [
  { nombre: "galletas", precio: 2.99 },
  { nombre: "lays", precio: 3.99 },
  { nombre: "armario", precio: 119.99 },
];

const precioTotal = function (precio1, precio2, precio3) {
  return precio1 + precio2 + precio3;
};

const precioTotal2 = function (obj1, obj2, obj3) {
  return obj1.precio + obj2.precio + obj3.precio;
};

const sumaFlecha = (obj1, obj2, obj3) => obj1.precio + obj2.precio + obj3.precio;

console.log(
  `Total compra = ${precioTotal(productos[0].precio, productos[1].precio, productos[2].precio)}€`,
);

console.log(
  `Total compra = ${precioTotal2(productos[0], productos[1], productos[2])}€`,
);

console.log(
  `Total compra = ${sumaFlecha(productos[0], productos[1], productos[2])}€`,
);