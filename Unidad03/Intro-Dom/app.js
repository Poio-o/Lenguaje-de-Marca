"use strict";
const app = document.querySelector("#app");
const nombre = "1º DAM, incultos";

app.textContent = `Hola ${nombre}`;

app.innerHTML = `<div>
    <strong>
        ${nombre}.
    </strong>
</div>`;

// Métodos modernos getters y setters
console.log(app.getHTML());
const cod = `<strong>Despierta Ismael.</strong>`;
app.setHTMLUnsafe(cod);

// Crear elementos HTML
const contenedor = document.createElement("section");
console.log(contenedor.isConnected);

contenedor.innerHTML =
  "Estoy creando una sección a través del método createElement";
//Lo insertamos
document.body.appendChild(contenedor);
console.log(contenedor.isConnected);

const seccion = contenedor; //Esto no es una copia, sino una referencia al mismo elemento

//Si queremos copiar o clonar:
const section = contenedor.cloneNode(true);

// A un div vacío, texto HTML en negrita, otro div dentro, y dentro de ese otro texto en negrita

const ej1 = document.querySelector("#novea");
ej1.innerHTML = `
    <strong>
        Moñogui
    </strong>
    <div>
        <strong class="green">
            Otro Moñogui
        </strong>
    </div>
    `;

const ejercicio = document.querySelector(".ejercicio");
ejercicio.innerHTML = `Hola taruguitos`;
const div = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = `Málaga 3 - 0 Burgos`;
div.appendChild(strong);
ejercicio.appendChild(div);
strong.className = "green";
