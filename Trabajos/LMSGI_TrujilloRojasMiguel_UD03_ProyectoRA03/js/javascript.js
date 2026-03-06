"use strict";
const opciones = [
  { id: "Piedra", gana: ["Tijera", "Lagarto"], icono: "🪨" },
  { id: "Papel", gana: ["Piedra", "Spock"], icono: "📄" },
  { id: "Tijera", gana: ["Papel", "Lagarto"], icono: "✂️" },
  { id: "Lagarto", gana: ["Papel", "Spock"], icono: "🦎" },
  { id: "Spock", gana: ["Piedra", "Tijera"], icono: "🖖" },
];

const jugadorDisplay = document.querySelector(".jugador-display");
const BotonesEleccion = document.querySelectorAll(".boton-eleccion-jugada");
const cpuDisplay = document.querySelector(".cpu-display");
const mensajeResultado = document.querySelector(".mensaje-resultado");
const contadorVictorias = document.querySelector(".victorias");
const contadorDerrotas = document.querySelector(".derrotas");
const contadorEmpates = document.querySelector(".empates");
const BotonReset = document.querySelector(".reset");
const BotonReglas = document.querySelector(".reglas");

let victorias = 0;
let derrotas = 0;
let empates = 0;

document.addEventListener("DOMContentLoaded", () => {
  inicializarJuego();
  inicializarTooltips();

  // Efecto de carga inicial suave
  setTimeout(() => {
    const contenedor = document.querySelector("main");
    if (contenedor) contenedor.style.opacity = "1";
  }, 100);
});

/**
 * @brief Inicializa el juego configurando los elementos, estados y eventos necesarios.
 *
 * Esta función prepara todo lo necesario para que el juego pueda comenzar,
 * incluyendo la configuración de la interfaz, los valores iniciales de los
 * jugadores y la vinculación de eventos a los controles.
 *
 * @return {void} No devuelve ningún valor.
 */
function inicializarJuego() {
  BotonesEleccion.forEach((boton) => {
    boton.addEventListener("click", () => {
      const eleccion = boton.querySelector(".tooltip").textContent;
      jugar(eleccion);
    });
  });
  BotonReset.addEventListener("click", resetearJuego);
  BotonReglas.addEventListener("click", mostrarReglas);
}

/**
 * @brief Ejecuta una ronda del juego con la elección del usuario.
 *
 * Esta función realiza los siguientes pasos:
 * 1. Reinicia los displays del juego.
 * 2. Genera la elección de la CPU de forma aleatoria.
 * 3. Muestra la elección del usuario y de la CPU con animaciones.
 * 4. Calcula el resultado de la ronda.
 * 5. Muestra el resultado y actualiza los contadores correspondientes.
 *
 * @param {string} eleccionUsuario - La elección realizada por el usuario (por ejemplo: "piedra", "papel",
"tijera"...).
 * @return {void} No devuelve ningún valor.
 */
function jugar(eleccionUsuario) {
  reiniciarDisplays();
  const eleccionCPU = obtenerEleccionCPU();
  mostrarEleccion(jugadorDisplay, eleccionUsuario, "JUGADOR");
  mostrarEleccion(cpuDisplay, eleccionCPU, "CPU");
  const resultado = calcularResultadoJugada(eleccionUsuario, eleccionCPU);
  mostrarResultadoJugada(resultado, eleccionUsuario, eleccionCPU);
}

/**
 * @brief Genera aleatoriamente la elección de la CPU.
 *
 * Esta función selecciona una opción al azar entre las disponibles y la devuelve.
 *
 * @return {string} La elección de la CPU (por ejemplo: "piedra", "papel" o "tijera"...).
 */
function obtenerEleccionCPU() {
  return opciones[Math.floor(Math.random() * opciones.length)].id;
}

/**
 * @brief Muestra la elección de un jugador (jugador humano o CPU) en un display con icono y texto.
 *
 * Esta función limpia el contenido del display, aplica la clase
 * para animación/estilo y agrega los elementos que representan
 * la jugada seleccionada (emoji y texto) del jugador indicado.
 *
 * @param {HTMLElement} display - El contenedor donde se mostrará la elección.
 * @param {string} eleccion - La clave de la elección (por ejemplo: "piedra", "papel", "tijera"...).
 * @param {string} jugador - Nombre del jugador que realizó la elección (por ejemplo: "JUGADOR" o "CPU").
 * @return {void} No devuelve ningún valor.
 */
function mostrarEleccion(display, eleccion, jugador) {
  const opcion = opciones.find((opcion) => opcion.id == eleccion);

  display.innerHTML = `
        <div class="icono-jugada-grande">
        ${opcion.icono}
        </div>
        
        <div class="texto-jugada">
        ${eleccion}
        </div>`;

  display.classList.replace("placeholder", "mostrar-jugada.active");
}

/**
 * @brief Reinicia los displays del juego a su estado inicial.
 *
 * Esta función restablece el contenido de los displays del usuario y de la CPU,
 * elimina cualquier clase de animación activa y restablece el mensaje de resultado
 * al texto predeterminado "¡Batalla!".
 *
 * @return {void} No devuelve ningún valor.
 */
function reiniciarDisplays() {
  jugadorDisplay.innerHTML = "<p>?</p>";
  jugadorDisplay.classList.replace("mostrar-jugada.active", "placeholder");

  cpuDisplay.innerHTML = "<p>?</p>";
  cpuDisplay.classList.replace("mostrar-jugada.active", "placeholder");

  mensajeResultado.textContent = "Estadísticas del Juego";
  mensajeResultado.classList.remove("ganador", "perdedor", "empate");
}

/**
 * @brief Calcula el resultado de una ronda entre el usuario y la CPU.
 *
 * Esta función compara la elección del usuario con la elección de la CPU
 * y determina si la ronda termina en victoria, derrota o empate según
 * las reglas del juego.
 *
 * @param {string} usuario - La elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
 * @param {string} cpu - La elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
 * @return {string} El resultado de la ronda: "victoria", "derrota" o "empate".
 */
function calcularResultadoJugada(usuario, cpu) {
  if (opciones.find((opcion) => opcion.id == usuario).gana.includes(cpu)) {
    return "victoria";
  } else if (
    opciones.find((opcion) => opcion.id == cpu).gana.includes(usuario)
  ) {
    return "derrota";
  } else {
    return "empate";
  }
}

/**
 * @brief Muestra el resultado de una ronda en la interfaz del juego.
 *
 * Esta función actualiza el mensaje de resultado según si el usuario ganó,
 * perdió o empató, aplica la clase correspondiente para estilos y
 * actualiza los contadores de victorias, derrotas o empates.
 *
 * @param {string} resultado - Resultado de la ronda: "victoria", "derrota" o "empate".
 * @param {string} usuario - Elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
 * @param {string} cpu - Elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
 * @return {void} No devuelve ningún valor.
 */
function mostrarResultadoJugada(resultado, usuario, cpu) {
  switch (resultado) {
    case "victoria":
      mensajeResultado.innerHTML = `¡Ganaste! ${usuario} vence a ${cpu}`;
      mensajeResultado.classList.add("mensaje-resultado", "ganador");
      victorias++;
      break;
    case "derrota":
      mensajeResultado.innerHTML = `¡Perdiste! ${cpu} vence a ${usuario}`;
      mensajeResultado.classList.add("mensaje-resultado", "perdedor");
      derrotas++;
      break;
    case "empate":
      mensajeResultado.innerHTML = `¡Empate! ${cpu} es igual a ${usuario}`;
      mensajeResultado.classList.add("mensaje-resultado", "empate");
      empates++;
      break;
  }
  actualizarContadores();
}

/**
 * @brief Actualiza los contadores de victorias, derrotas y empates en la interfaz.
 *
 * Esta función refleja los valores actuales de las variables globales
 * `victorias`, `derrotas` y `empates` en los elementos del DOM correspondientes.
 *
 * @return {void} No devuelve ningún valor.
 */
function actualizarContadores() {
  contadorVictorias.innerHTML = victorias;
  contadorDerrotas.innerHTML = derrotas;
  contadorEmpates.innerHTML = empates;
}

/**
 * @brief Inicializa los tooltips de los botones de elección.
 *
 * Esta función recorre todos los botones de elección, obtiene la jugada
 * asociada a cada uno y configura el atributo `title` para mostrar
 * un tooltip indicando qué opciones vence esa jugada.
 *
 * @return {void} No devuelve ningún valor.
 */
function inicializarTooltips() {
  BotonesEleccion.forEach((boton) => {
    boton.addEventListener("mouseover", () => {
      const jugada = boton.querySelector(".tooltip").textContent;
      const tooltip = opciones
        .find((opcion) => opcion.id == jugada)
        .gana.join(" y ");
      boton.title = `${jugada} vence a: ${tooltip}`;
    });
  });
}

/**
 * @brief Muestra las reglas completas del juego en la consola.
 *
 * Esta función imprime un resumen de todas las reglas del juego,
 * indicando qué jugada vence a cuáles otras.
 *
 * @return {void} No devuelve ningún valor.
 */
function mostrarReglas() {
  console.log(`Reglas`);
  console.log(`
🪨 Piedra aplasta 🦎 Lagarto
🪨 Piedra aplasta ✂️ Tijeras

📄 Papel envuelve 🪨 Piedra
📄 Papel desautoriza 🖖 Spock

✂️ Tijeras cortan 📄 Papel
✂️ Tijeras decapitan 🦎 Lagarto

🦎 Lagarto envenena 🖖 Spock
🦎 Lagarto devora 📄 Papel

🖖 Spock rompe ✂️ Tijeras
🖖 Spock vaporiza 🪨 Piedra
`);
}

/**
 * @brief Reinicia el juego a su estado inicial.
 *
 * Esta función realiza las siguientes acciones:
 * - Restablece los contadores de victorias, derrotas y empates a cero.
 * - Reinicia los displays del juego.
 * - Actualiza los contadores en la interfaz.
 * - Muestra un mensaje temporal indicando que el juego ha sido reiniciado.
 *
 * @return {void} No devuelve ningún valor.
 */
function resetearJuego() {
  console.clear();
  victorias = 0;
  derrotas = 0;
  empates = 0;
  reiniciarDisplays();
  actualizarContadores();
  console.log("El juego ha sido reiniciado");
}

/**
* @brief Maneja las pulsaciones de teclas para jugar o reiniciar el juego.
*
* Este listener escucha los eventos de teclado (`keydown`) y realiza las siguientes acciones:
* - Asocia las teclas numéricas '1' a '5' a las elecciones del juego: "piedra", "papel", "tijera", "lagarto"
o "spock".
* - La tecla 'r' reinicia el juego.
* - La tecla 's' muestra las reglas del juego.
*
* @param {KeyboardEvent} event - El evento de pulsación de tecla.
*/
document.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {
    case "1":
      jugar("Piedra");
      break;
    case "2":
      jugar("Papel");
      break;
    case "3":
      jugar("Tijera");
      break;
    case "4":
      jugar("Lagarto");
      break;
    case "5":
      jugar("Spock");
      break;
    case "r":
      resetearJuego();
      break;
    case "s":
      mostrarReglas();
      break;
  }
});
