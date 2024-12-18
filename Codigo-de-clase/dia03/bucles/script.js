"use strict";

// BUCLES

//for
console.log("FOR:");
/* 
for(let i = 0; i < vueltas; i++){
// Código que se repite en cada vuelta
}
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let string = "hola";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// DRY
// Don't Repeat Yourself

/////////////////

// WHILE
/* 
while(condicion){
//código que se ejecuta mientras se cumpla la condición
}
*/

console.log("");
console.log("WHILE:");

let index = 0;

while (index < 10) {
  console.log(index);

  index++;
}

let num;

//Mientras no sea par (el resto de la división es distinto de 0)
console.log("Hasta multiplo de tres:");
while (num % 3 !== 0) {
  num = Math.floor(Math.random() * 11);
  console.log(num);
}

/* let galletas = false;
while (galletas != true) {
  galletas = confirm("Aceptas las cookies?");
} */

// ATENCIÓN, BUCLE INFINITO:
/* for (let i = 10; i > 0; i++) {
  console.log("BUCLE");
}
 */

// DO WHILE
// Igual que while pero ejecuta el código al menos una vez
/* 
do{
// código que se ejecuta al menos una vez
} while (condición)
*/

let num2 = 90;

do {
  num2 = Math.floor(Math.random() * 100);
  console.log(num2);
} while (num2 < 10);

//////////////

//
// BREAK
// Fuerza el fin del bucle

console.log("");
console.log("BREAK");
for (let i = 0; i < string.length; i++) {
  let letra = string[i];
  if (letra === "o") {
    break;
  }
  console.log(letra);
}

//
// CONTINUE
// Salta a la siguiente vuelta
console.log("CONTINUE");
for (let i = 0; i < string.length; i++) {
  let letra = string[i];
  if (letra === "o") {
    continue;
  }
  console.log(letra);
}

for (let i = 0; i < 20; i += 2) {
  console.log(i);

  if (i % 3 !== 0) {
    continue;
  }

  console.log("Es múltiplo de 3");
}
