const leia = require("readline-sync")

let n1;
n1 = leia.questionFloat("Digite o primeiro valor: ")

let n2;
n2 = leia.questionFloat("Digite o segundo valor: ")

let n3;
n3 = leia.questionFloat("Digite o terceiro valor: ")

let n4;
n4 = leia.questionFloat("Digite o quarto valor: ")

let diferenca;
diferenca = (n1 * n2) - (n3 * n4);

console.log(`A diferença é: ${diferenca}`)