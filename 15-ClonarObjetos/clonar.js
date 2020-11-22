const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela: {
        vertical: 150,
        horizontal: 50,
    },
    ligar: function(){
        console.log("Fazendo ligação...");
    }
}

// Nesse modo adicionar propriedades para o objeto duplicado
const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto);

// Método mais rapido
const novoObjeto2 = {...celular};
console.log(novoObjeto2)