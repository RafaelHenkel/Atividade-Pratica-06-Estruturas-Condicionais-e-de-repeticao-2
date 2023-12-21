// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let a = Number(prompt("Digite um valor para A"));
let b = Number(prompt("Digite um valor para B"));
let c = Number(prompt("Digite um valor para C"));

if ((a, b + c && b < a + c && c < a + b)) {
  if (a == b && a == c) {
    document.write("Triângulo equilátero");
  } else if (a == b || a == c || b == c) {
    document.write("Triângulo isósceles");
  } else {
    document.write("Triângulo escaleno");
  }
} else {
  document.write("Não é um triangulo");
}
