'use strict'
console.log('JS cargado ✅')

const a = 10
const b = 3

console.log('Suma:', a + b)
console.log('Resta:', a - b)
console.log('Multiplica:', a * b)
console.log('Divide:', a / b)
console.log('Resto:', a % b)

const nombre = 'Compi'

console.log('Hola ' + nombre)
console.log(`Hola ${nombre}`)

const firstWord = "frase";
const secondWord = "concatenada"

console.log(`Una ${firstWord} mejor ${secondWord}`)
const magicalWord = "<strong>Magical Word</strong>";

const template = `
    <div class="container">
        ${magicalWord}
    </div>
`;
console.log(template);
const templateSB = "<div class=\"container\">" + magicalWord + "</div>";

console.log(2 > 3);
console.log(5==5);
console.log(5===5);
console.log(5===3);
console.log("5" === 5);
console.log((5<10)===(6>2))