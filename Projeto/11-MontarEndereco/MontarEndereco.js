// Javascript - Objeto Endereço

// Criar um objeto endereço que contem: Rua, Cidade, CEP e Exibir Endereço

let endereco = {
    rua: "Dendezeiro",
    numero: 31,
    cidade: "São Paulo",
    cep: '03813130'
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco)