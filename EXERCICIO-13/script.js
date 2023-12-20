// Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = Number(prompt("Digite um numero"));
for (let i = 1; i <= numero; i++) {
  if (i % 3 == 2) {
    document.write(`numeros impares: ${i}<br>`);
  }
}
