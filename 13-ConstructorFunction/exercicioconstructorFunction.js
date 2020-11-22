function notebook(modelo,tamanho,processador,memoria,espaco){
    this.modelo = modelo,
    this.tamanho = tamanho,
    this.processador = processador,
    this.memoria = memoria,
    this.espaco = espaco,
    this.testar = function(){
        console.log('Testando pra ver se eh bom né...')
    }
}

const notebook1 = new notebook('Acer',17.5,'Core I5',16,'1 TB')
console.log(notebook1)
