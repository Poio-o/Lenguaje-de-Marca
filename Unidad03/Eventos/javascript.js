"use strict";
console.log("JS cargado");
const nombre = `Miguel`;

//Gestión de eventos
//1ª forma: atributo HTML (MAL)

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

//2ª forma: API JS setAttribute - Añadimos el atributo HTML
// const boton = document.getElementById("btn");

// boton.setAttribute("onclick","saludar()");
// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

//3ª forma: addEventListener (BIEN)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// boton.addEventListener("click", () => {
//   texto.textContent = `Salida: Hola ${nombre}`;
// });

// Formas de pasar la función a addEventListener
// A) Función definida aparte y pasar referencia (la "clásica")
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// function saludar() {
//   texto.textContent = `Salida: Hola ${nombre}`;
// }

// // B) El error típico: poner () (se ejecuta al cargar, no al click)

// // boton.addEventListener("click", saludar()); // MAL
// // boton.addEventListener("click", saludar); // BIEN

// // C) Función anónima (muy común)
// boton.addEventListener("click", function () {
//   texto.textContent = `Salida: Hola ${nombre}`;
// });

// // D) Función flecha (de las más usadas actualmente)
// boton.addEventListener("click", () => {
//   texto.textContent = `Salida: Hola ${nombre}`;
// });

// // ¿Y si hace falta pasarle parámetros?
// function suma(num1, num2) {
//   texto.textContent = num1 + num2;
// }
// // boton.addEventListener("click", () => suma(4, 6));

// // Variante con función anónima
// boton.addEventListener("click", function () {
//   suma(7, 8);
// });

// Mini-reto: contador de clicks + botón reset
// Reglas: no se puede usar el onclick ni setAttribute.
//              Usamos addEventListener
// En cada click mostrar: "Salida: has hecho X click(s)"
// // En reset: poner contador a 0 y mostrar "Salida: contador a 0".
// const botonclick = document.getElementById("btn");
// const botonreset = document.getElementById("btnReset");
// const texto = document.querySelector(".salida");
// let clicks = 0;

// function contar() {
//   clicks += 1;
//   texto.textContent = `Salida: has hecho ${clicks} click(s)`;
// }

// function reset() {
//   clicks = 0;
//   texto.textContent = `Salida: contador a 0`;
// }

// botonclick.addEventListener("click", contar);
// botonreset.addEventListener("click", reset);

// Mini-reto (avanzado): Combinar evento click + array para mostrar mensajes distintos según el click.
// Cada click muestra el siguiente mensaje de un array. Cuando llegue al final, vuelve al principio (cíclico).
const boton = document.getElementById("btn");
const botonreset = document.getElementById("btnReset");
const texto = document.querySelector(".salida");
const frases = [
  "Si llegas aquí, podrías ser de 1DAW.",
  "No vas mal, estás alcanzando cierto nivel. Pareces Arbeloa.",
  "Uff! Esto ya es otra cosa. Flick estaría orgulloso.",
  "Te has subido al gran FUNESBUQUE.",
];
let contador = -1;

function siguiente() {
  contador++;
  if (contador >= 4) {
    contador = 0;
  }
  texto.textContent = `Salida: ${frases[contador]}`;
}

function reset() {
  contador = 0;
  texto.textContent = `Salida: ${frases[contador]}`;
}

boton.addEventListener("click", siguiente);
botonreset.addEventListener("click", reset);
