const leia = require("readline-sync")

let salario;
salario = leia.questionFloat("Digite o valor do salario: ")

let abono;
abono = leia.questionFloat("Digite o valor do abono: ")

let novoSalario;
novoSalario = salario + abono;

console.log(`O novo salário é: ${novoSalario}`)