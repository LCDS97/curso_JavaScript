// Criar método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Bee Movie',
    ano : 2005,
    diretor: 'sei n',
    personagem: 'abelinha'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
    
}