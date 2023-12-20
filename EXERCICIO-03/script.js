// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let dia = Number(prompt("Digite um número de 1 até 7:  "));

if (dia == 1) {
  document.write("Domingo");
} else if (dia == 2) {
  document.write("Segunda-feira");
} else if (dia == 3) {
  document.write("Terça-feira");
} else if (dia == 4) {
  document.write("Quarta-feira");
} else if (dia == 5) {
  document.write("Quinta-feira");
} else if (dia == 6) {
  document.write("Sexta-feira");
} else if (dia == 7) {
  document.write("Sábado");
} else {
  document.write("Dia da semana invalido");
}
