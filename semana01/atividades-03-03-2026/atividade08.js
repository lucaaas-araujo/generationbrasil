import leia from 'readline-sync';

let operacao;
operacao = leia.questionInt('operacao: (1 - Saldo, 2 - Saque, 3 - Deposito) ');

let saldo = 1000;

switch (operacao) {
    case 1:
        console.log(`Saldo: R$ ${saldo}`);
    break;
    case 2:
        let valorSaque;
        valorSaque = leia.questionFloat('Valor do saque: R$ ');
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Saque realizado com sucesso! Saldo restante: R$ ${saldo}`);
        } else {
            console.log('Saldo insuficiente!');
        }
    break;
    case 3:
        let valorDeposito;
        valorDeposito = leia.questionFloat('Valor do depósito: R$ ');
        saldo += valorDeposito;
        console.log(`Depósito realizado com sucesso! Saldo atual: R$ ${saldo}`);
    break;
    default:
        console.log('Operação inválida!');
    break;
}
