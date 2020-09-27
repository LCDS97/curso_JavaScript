// Laços de repetição são criado para facilitar reprodução de um código
// para executar determinadas vezes até tal condição ser verdadeira

    // Explicando o código
    // (let i = 0) - Valor inicial que serve como contador;
    // (i < 5) - Condição a ser definida para o contador
    // (i++) - Incrementador do contador
    console.log("*** for ***")
    console.log ("**** Incrementador ***");
for (let i = 0; i < 5; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

console.log ("**** Decrementador ***");
// Outro exemplo, mas decrementando o contador

for (let c = 5; c >=1; c--) {
    if(c % 2 !== 0){
        console.log(c)
    }
}