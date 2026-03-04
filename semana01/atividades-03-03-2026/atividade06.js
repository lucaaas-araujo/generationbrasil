import leia from 'readline-sync';

let nomeColaborador;

nomeColaborador = leia.question('Digite o nome do colaborador: ');

let codigoCargo;
codigoCargo = leia.questionInt('Digite o código do cargo: (1 a 6) ');

let salario;
salario = leia.questionFloat('Salário R$ ');

let salarioFinal;

switch (codigoCargo) {
    case 1:
        salarioFinal = salario + (0.10 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Gerente \n Salário: R$ ${salarioFinal}`);
    break;
    case 2:
        salarioFinal = salario + (0.07 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Vendedor \n Salário: R$ ${salarioFinal}`);
    break;
    case 3:
        salarioFinal = salario + (0.09 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Supervisor \n Salário: R$ ${salarioFinal}`);
    break;
    case 4:
        salarioFinal = salario + (0.06 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Motorista \n Salário: R$ ${salarioFinal}`);
    break;
    case 5:
        salarioFinal = salario + (0.05 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Estoquista \n Salário: R$ ${salarioFinal}`);
    break;
    case 6:
        salarioFinal = salario + (0.08 * salario);
        console.log(`Colaborador: ${nomeColaborador} \n Cargo: Técnico de TI \n Salário: R$ ${salarioFinal}`);
    break;
}