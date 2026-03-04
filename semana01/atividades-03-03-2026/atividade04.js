import leia from 'readline-sync';

let palavra1 = leia.question('Digite uma palavra: (vertebrado) ou (invertebrado) ');

let palavra2 = leia.question('Digite outra palavra: (ave) ou (mamifero) ou (inseto) ou (anelideo) ');

let palavra3 = leia.question('Digite mais uma palavra: (carnivoro) ou (onivoro) ou (herbivoro) ou (hematofago) ');

if (palavra1 === "vertebrado" && palavra2 === "ave" && palavra3 === "carnivoro"){
    console.log('A resposta é: Águia');
}else if (palavra1 === "vertebrado" && palavra2 === "ave" && palavra3 === "onivoro"){
    console.log('A resposta é: Pomba');
}else if (palavra1 === "vertebrado" && palavra2 === "mamifero" && palavra3 === "onivoro"){
    console.log('A resposta é: Homem');
}else if (palavra1 === "vertebrado" && palavra2 === "mamifero" && palavra3 === "herbivoro"){
    console.log('A resposta é: Vaca');
}else if (palavra1 === "invertebrado" && palavra2 === "inseto" && palavra3 === "hematofago"){
    console.log('A resposta é: Pulga');
}else if (palavra1 === "invertebrado" && palavra2 === "inseto" && palavra3 === "herbivoro"){
    console.log('A resposta é: Lagarta');
}else if (palavra1 === "invertebrado" && palavra2 === "anelideo" && palavra3 === "hematofago"){
    console.log('A resposta é: Sanguessuga');
}else if (palavra1 === "invertebrado" && palavra2 === "anelideo" && palavra3 === "onivoro"){
    console.log('A resposta é: Minhoca');
}else{
    console.log('Resposta inválida!');
}