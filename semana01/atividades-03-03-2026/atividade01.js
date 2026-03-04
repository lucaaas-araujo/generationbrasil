import leia from 'readline-sync';

let n1;
n1 = leia.questionInt('Digite um numero: ');

let n2;
n2 = leia.questionInt('Digite outro numero: ');

let n3;
n3 = leia.questionInt('Digite mais um numero: ');

if (n1 + n2 > n3){
    console.log(`A soma de ${n1} e ${n2} é maior que ${n3}`);
}else if (n1 + n2 < n3){
    console.log(`A soma de ${n1} e ${n2} é menor que ${n3}`);
}else{
    console.log(`A soma de ${n1} e ${n2} é igual a ${n3}`);
}