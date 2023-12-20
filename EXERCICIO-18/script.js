// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// A VISTA ------ 2.5% SOBRE O PREÇO DA TABELA
// DE 2 ATE 5 VEZES ------ PREÇO DE TABELA SEM JUROS
// DE 6 A 10  VEZES ------ 6% DE JUROS SOBRE O PREÇO DE TABELA
// DE 11 A 15 VEZES ------ 13% DE JUROS SOBRE O PREÇO DE TABELA
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let precoTabela = parseFloat(prompt("Escreva o preço de tabela do produto"));
let parcelas = Number(prompt("Digite o numero de parcelas feitas"));
document.write(
  `Preço total a pagar R$${precoTabela.toFixed(2)} em ${parcelas.toFixed(
    2
  )}X<br>`
);
if (parcelas == 1) {
  document.write(`Total a pagar R$${(precoTabela * 0.975).toFixed(2)}`);
} else if (parcelas >= 2 && parcelas <= 5) {
  document.write(`Total a pagar R$${precoTabela.toFixed(2)}`);
} else if (parcelas >= 6 && parcelas <= 10) {
  document.write(`Total a pagar R$${(precoTabela * 1.06).toFixed(2)}`);
} else if (parcelas >= 11 && parcelas <= 15) {
  document.write(`Total a pagar R$${(precoTabela * 1.13).toFixed(2)}`);
} else {
  document.write("Numero de parcelas invalidas!");
}
