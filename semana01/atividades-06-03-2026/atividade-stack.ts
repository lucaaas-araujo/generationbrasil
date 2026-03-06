import { Stack } from "./Stack.ts";
import readlinesync from "readline-sync";

const pilha = new Stack<string>();
let continuar: boolean = false;
let opcao: number = 0;

while(true){
    console.log("----------------------------");
    console.log("                           ");
    console.log(`1 - Adicionar livro na pilha`);
    console.log(`2 - Listar todos os livros`);
    console.log(`3 - Retirar livro da pilha`);
    console.log(`0 - Sair`)
    console.log("                           ");
    console.log("----------------------------");

    opcao = readlinesync.questionInt("Digite uma opcao: ");

    switch(opcao){
        case 1:
            pilha.push(readlinesync.question("Digite o nome: "))
            console.log("Pilha:");
            console.log(pilha)
            console.log("Livro adicionado!")
            break;
        case 2:
            console.log("Lista de livros em pilha")
            console.log(pilha)
            break;
        case 3:
            console.log("Pilha:");
            pilha.pop()
            console.log(pilha)
            console.log("Um liro foi retirado da pilha!");
            break;
        case 0:
            console.log("Programa Finalizado!")
            process.exit();
            break;
        default:
            console.log("Opção invalida");
    }

}