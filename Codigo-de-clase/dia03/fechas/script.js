"use strict";

let ahora = new Date();

console.log(ahora);

let hora = ahora.getHours();

console.log(hora);

let minutos = ahora.getMinutes();

console.log(minutos);

let segundos = ahora.getSeconds();
console.log(segundos);

let years = ahora.getFullYear();
console.log(years);

let mes = ahora.getMonth();
console.log(mes);

let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

console.log(meses[mes]);

console.log(ahora.getTime());

console.log(
  ahora.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  })
);
