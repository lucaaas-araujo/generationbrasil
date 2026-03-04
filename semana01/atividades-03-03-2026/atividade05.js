import leia from 'readline-sync';

let codigoProduto;
codigoProduto = leia.questionInt('Digite o código do produto:  (1 a 6) ');

let quantidadeProduto;
quantidadeProduto = leia.questionInt('Digite a quantidade do produto: ');

switch (codigoProduto) {
    case 1:
        console.log(`Produto: Cachorro Quente \n Valor total: R$ ${quantidadeProduto * 10}`);
    break;
    case 2:
        console.log(`Produto: X-Salada \n Valor total: R$ ${quantidadeProduto * 15}`);
    break;
    case 3:
        console.log(`Produto: X-Bacon \n Valor total: R$ ${quantidadeProduto * 18}`);
    break;
    case 4:
        console.log(`Produto: Bauru \n Valor total: R$ ${quantidadeProduto * 12}`);
    break;
    case 5:
        console.log(`Produto: Refrigerante \n Valor total: R$ ${quantidadeProduto * 8}`);
    break;
    case 6:
        console.log(`Produto: Suco \n Valor total: R$ ${quantidadeProduto * 13}`);
    break;
    default:
        console.log('Código do produto inválido!');
    break;
}