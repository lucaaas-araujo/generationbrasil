const leia = require("readline-sync")

let nota1;
nota1 = leia.questionFloat("Digite a primeira nota: ")

let nota2;
nota2 = leia.questionFloat("Digite a segunda nota: ") 

let nota3;
nota3 = leia.questionFloat("Digite a terceira nota: ")

let nota4;
nota4 = leia.questionFloat("Digite a quarta nota: ")

let media;
media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`A média é: ${media.toFixed(1)}`)