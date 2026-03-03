const leia = require("readline-sync")

let salarioBruto;
salarioBruto = leia.questionFloat("Digite o valor do salario bruto: ")

let adicionalNoturno;
adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: ")

let horasExtras;
horasExtras = leia.questionFloat("Digite o valor das horas extras: ")

let desconto;
desconto = leia.questionFloat("Digite o valor do desconto: ")

let salarioLiquido;
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto;
console.log(`O salário líquido é: ${salarioLiquido.toFixed(2)}`)