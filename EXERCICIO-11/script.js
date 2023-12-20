// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turno = prompt("M para manhã ou V para vespertino ou N para noturno");

switch(turno){
    case 'M':
        alert("Manhã");
        break;
        case 'V':
        alert("Vespertino");
        break;
        case 'N':
        alert("Noturno");
        break;
        default:
        alert("Valor invalido");
}