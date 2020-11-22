function criarCelular (marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log ("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('APPLE',5.6,6000);
console.log(celular1);