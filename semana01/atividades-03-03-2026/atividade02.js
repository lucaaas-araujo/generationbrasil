import leia from 'readline-sync';

let n1 = leia.questionInt("Digite um número :")

if (n1 % 2 == 0 && n1 > 0){
    console.log(`O número ${n1} é par e positivo!`);
}else if (n1 % 2 == 0 && n1 < 0){
    console.log(`O número ${n1} é par e negativo!`);
}else if (n1 % 2 != 0 && n1 > 0){
    console.log(`O número ${n1} é ímpar e positivo!`);
}else if (n1 % 2 != 0 && n1 < 0){
    console.log(`O número ${n1} é ímpar e negativo!`);
}else{
    console.log(`O número ${n1} é zero!`);
}