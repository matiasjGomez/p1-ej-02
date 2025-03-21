"use strict";

// La categoria define el sueldo mensual, se define mediante un input (1: 1000dls, 2: 1500dls, 3: 2000dls)
// la subcategoria define el multiplicador, se define mediante un input también (A: x1.5, B: x2, C: x2.5)

// Informar dentro de que rango está el sueldo (Inicial: entre 1500 y 3000 inclusive, Intermedio: entre màs de 3000 y 4000, Avanzado: màs de 4000)

let categoria,
    subCategoria,
    sueldo,
    multiplicador,
    sueldoFinal,
    rango;

categoria = prompt("Por favor, ingrese su categoría (1, 2 o 3)");
subCategoria = prompt("Por favor, ingrese su subcategoría (A, B o C)");

switch (categoria) {
    case "1":
        sueldo = 1000;
        break;
    case "2":
        sueldo = 1500;
        break;
    case "3":
        sueldo = 2000;
        break;
    default:
        alert("Categoría inválida");
};

switch (subCategoria.toUpperCase()) {
    case "A":
        multiplicador = 1.5;
        break;
    case "B":
        multiplicador = 2;
        break;
    case "C":
        multiplicador = 2.5;
        break;
    default:
        alert("Subcategoría inválida");
}

sueldoFinal= sueldo * multiplicador;

rango = sueldoFinal >= 1500 && sueldoFinal <= 3000 ? "Inicial" : sueldoFinal > 3000 && sueldoFinal <= 4000 ? "Intermedio" : sueldoFinal > 4000 ? "Avanzado" : "Fuera de rango";


document.write (
    `
    <h1>Su sueldo total</h1>
    <main>
        <h2>Su categoría es ${categoria} y su sub categoría es ${subCategoria}</h2>
        <p>Por lo tanto su sueldo total es: ${sueldoFinal} u$s y su rango es ${rango}</p>
    </main>
    `
)