// Reescreva o exercício 3, utilizando apenas o SWITCH.

let dia = Number(prompt("Digite um numero"));
switch (dia) {
  case 1:
    document.write("Domingo");
    break;
  case 2:
    document.write("Segunda-feira");
    break;
  case 3:
    document.write("terça-feira");
    break;
  case 4:
    document.write("Quarta-feira");
    break;
  case 5:
    document.write("Quinta-feira");
    break;
  case 6:
    document.write("Sexta-feira");
    break;
  case 7:
    document.write("Sabado");
    break;
  default:
    document.write("Dia da semana invalido");
}
