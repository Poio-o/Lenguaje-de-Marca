# 🪨📄✂️🦎🖖 Piedra · Papel · Tijera · Lagarto · Spock

![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow?logo=javascript&logoColor=black)

Implementación web del juego **Piedra, Papel, Tijera, Lagarto, Spock** desarrollada con **HTML, CSS y JavaScript puro**.

El jugador compite contra una **CPU que genera jugadas aleatorias**, mientras el sistema determina automáticamente el resultado y actualiza las estadísticas del juego.

---

# 📚 Tabla de contenidos

- [📖 Descripción](#-descripción)
- [🎮 Cómo jugar](#-cómo-jugar)
- [📜 Reglas del juego](#-reglas-del-juego)
- [📂 Estructura del proyecto](#-estructura-del-proyecto)
- [👨‍💻 Autor](#-autor)

---

# 📖 Descripción

Este proyecto consiste en una **aplicación web interactiva** que implementa el juego popularizado por la serie _The Big Bang Theory_, una extensión del clásico **Piedra, Papel o Tijera**.

El juego incluye **cinco opciones posibles**, lo que hace la lógica más interesante que la versión tradicional.

La aplicación permite:

- Seleccionar una jugada
- Generar automáticamente la elección de la CPU
- Comparar ambas elecciones
- Determinar el resultado de la ronda
- Mostrar estadísticas del juego

---

# 🎮 Cómo jugar

1. Elige una de las opciones disponibles:

| Opción  | Icono |
| ------- | ----- |
| Piedra  | 🪨    |
| Papel   | 📄    |
| Tijera  | ✂️    |
| Lagarto | 🦎    |
| Spock   | 🖖    |

2. La CPU elegirá una opción aleatoria.
3. Se mostrará el resultado de la ronda.
4. Las estadísticas se actualizarán automáticamente.

---

# 📜 Reglas del juego

| Opción     | Gana contra           |
| ---------- | --------------------- |
| 🪨 Piedra  | ✂️ Tijera, 🦎 Lagarto |
| 📄 Papel   | 🪨 Piedra, 🖖 Spock   |
| ✂️ Tijera  | 📄 Papel, 🦎 Lagarto  |
| 🦎 Lagarto | 📄 Papel, 🖖 Spock    |
| 🖖 Spock   | 🪨 Piedra, ✂️ Tijera  |

---

# 📂 Estructura del proyecto

```
piedra-papel-tijera-lagarto-spock
│
├── index.html
│
├── css
│   └── estilos.css
│
├── js
│   └── script.js
│
└── README.md
```

### Descripción de archivos

| Archivo       | Función                         |
| ------------- | ------------------------------- |
| `index.html`  | Estructura principal del juego  |
| `estilos.css` | Estilos visuales de la interfaz |
| `script.js`   | Lógica completa del juego       |
| `README.md`   | Documentación del proyecto      |

---

# 👨‍💻 Autor

Proyecto desarrollado por Miguel Trujillo Rojas como práctica de **Lenguaje de Marcas**.

---
