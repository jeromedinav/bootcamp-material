//Crear un bucle que vaya de 0 a 100 incrementando de 10 en 10

console.log("Ejercicio 1:");
for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}

//Crear un bucle que vaya de 50 a 20 de uno en uno

console.log("");
console.log("Ejercicio 2:");
for (let i = 50; i >= 20; i--) {
  console.log(i);
}

// Crear un bucle que recorra todos los números de 1 a 10 y nos diga sin son pares o impares
//Un numero es par si num % 2 === 0

console.log("");
console.log("Ejercicio 3:");
for (let i = 1; i <= 10; i++) {
  /*   console.log(i);
  if (i % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("es impar");
  } */

  console.log(`El número ${i} es ${i % 2 === 0 ? "par" : "impar"}.`);
}
