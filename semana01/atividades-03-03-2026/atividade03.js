import leia from 'readline-sync';

// Doar sangue

let nomeDoador = leia.question('Digite o nome do doador: ');
let idadeDoador = leia.questionInt('Digite a idade do doador: ');
let pesquisaDoador = leia.question('Primeira doacao de sangue?: ');

if (idadeDoador >= 18 && idadeDoador <= 69){
    if (idadeDoador >= 60 && pesquisaDoador === "true"){
        console.log(`${nomeDoador} não esta apto para doar sangue!`);
    }else{
        console.log(`${nomeDoador} esta apto para doar sangue!`);
    }
}else{
    console.log(`${nomeDoador} não esta apto para doar sangue!`);
}

