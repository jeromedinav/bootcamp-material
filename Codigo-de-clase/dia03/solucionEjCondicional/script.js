"use strict";

// Crea un código que en base a una variable hora diga por consola "Buenos días", "buenas tardes" o "buenas noches", según corresponda

let hora = 20;

// CON IF
if (hora >= 6 && hora < 14) {
  console.log("Buenos días");
} else if (hora >= 14 && hora < 22) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

// CON SWITCH

switch (true) {
  case hora >= 6 && hora < 14:
    console.log("Buenos días");
    break;
  case hora >= 14 && hora < 22:
    console.log("Buenas tardes");
    break;
  default:
    console.log("Buenas noches");
}

// CON TERNARIO
console.log(
  hora >= 6 && hora < 14
    ? "Buenos días"
    : hora >= 14 && hora < 22
    ? "Buenas tardes"
    : "Buenas noches"
);
