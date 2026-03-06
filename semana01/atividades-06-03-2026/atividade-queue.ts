import process from "node:process";
import { Queue } from "./Queue.ts";
import readlinesync from "readline-sync";

const fila = new Queue<string>();
let continuar: boolean = false;
let opcao: number = 0;

while(true){
    console.log("----------------------------");
    console.log("                           ");
    console.log(`1 - Adicionar Cliente na Fila`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Retirar clientes da Fila`);
    console.log(`0 - Sair`)
    console.log("                           ");
    console.log("----------------------------");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao){
        case 1:
            fila.enqueue(readlinesync.question("Digite o nome: "))
            console.log("Cliente Adicionado!")
            break;
        case 2:
            console.log("Lista de clientes na fila: ")
            console.log(fila);
            break;
        case 3:
            fila.dequeue()
            console.log(fila)
            break;
        case 0:
            console.log("Programa finalizado!")
            process.exit();
            break;
        default:
            console.log("Opcao Invalida!")
    }
}