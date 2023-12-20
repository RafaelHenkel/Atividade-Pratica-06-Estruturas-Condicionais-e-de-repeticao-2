// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

let idadeMotorista = Number(prompt("Digite a idade do motorista"));
let possuiHabilitacao = prompt("Se possui habilitação digite - sim Se não possui habilitação digite - não");
if(idadeMotorista>=18 && possuiHabilitacao == 'sim'){
    document.write("Pode dirigir")
}else{
    document.write("Não pode dirigir");
}