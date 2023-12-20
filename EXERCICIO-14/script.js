// Peça para o usuário inserir um número. Em seguida,
// multiplique o número por 3 repetidamente usando WHILE
// até que a soma ultrapasse 500. Ao final, exiba o último valor obtido.

let numero = Number(prompt("Digite um numero"));
let soma = 0;

while (numero < 500) {
  numero = numero * 3;
  if (numero < 500) {
    soma = numero;
  }
}

document.write(soma);

//---------CORREÇAO MARCELE
// let numero = Number(prompt(`Digite um número:`));
// let soma = 0;

// while (soma + numero * 3 < 500) {
//   soma += numero * 3;
//   numero = numero * 3;
// }

// console.log("O último valor é: " + numero);

// document.write(`O último valor multiplicado por 3 foi: ${numero}`);
