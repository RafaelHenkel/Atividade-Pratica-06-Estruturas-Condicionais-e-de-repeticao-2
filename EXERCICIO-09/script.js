// Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = Number(prompt("Digite um numero"));
let divisor = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    divisor++;
  }
}
if (divisor == 2) {
  document.write("Seu numero é primo");
} else {
  document.write("Seu numero nao é primo");
}
