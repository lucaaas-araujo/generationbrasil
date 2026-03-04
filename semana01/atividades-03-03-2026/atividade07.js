import leia from 'readline-sync';

let n1;
n1 = leia.questionInt('Digite o 1 numero: ');

let n2;
n2 = leia.questionInt('Digite o 2 numero: ');

let operacao;
operacao = leia.questionInt('Digite a operacao desejada: (1 - Soma, 2 - Subtracao, 3 - Multiplicacao, 4 - Divisao) ');

switch (operacao) {
    case 1:
        console.log(` ${n1} + ${n2} = ${n1 + n2}`);
    break;
    case 2:
        console.log(` ${n1} - ${n2} = ${n1 - n2}`);
    break;
    case 3:
        console.log(` ${n1} * ${n2} = ${n1 * n2}`);
    break;
    case 4:
        console.log(` ${n1} / ${n2} = ${n1 / n2}`);
    break;
    default:
        console.log('Operação inválida!');
    break;
}
