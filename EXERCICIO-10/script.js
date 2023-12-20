// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let altura = parseFloat(prompt("Digite sua altura"));
let sexo = Number(prompt("Digite 1- sexo feminino 2 - sexo masculino"));
let calculoMasculino = 72.7 * altura - 58;
let calculoFemimino = 62.1 * altura - 44.7;
if (sexo == 1) {
  document.write(`peso ideal ${calculoMasculino.toFixed(2)}`);
} else if (sexo == 2) {
  document.write(`peso ideal ${calculoFemimino.toFixed(2)}`);
} else {
  document.write("sexo nao encontrado");
}
