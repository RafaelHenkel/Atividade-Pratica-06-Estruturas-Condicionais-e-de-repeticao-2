// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoNascimento = Number(prompt("Digite o seu ano de nascimento"));
let anoAtual = Number(prompt("Digite o ano atual"));

document.write(`Vocé tem ${anoAtual-anoNascimento}`);

if (anoAtual-anoNascimento >=18){
    document.write("<br> Vocé pode votar este ano");
}else {
    document.write("<br> Vocé não pode votar este ano");
}