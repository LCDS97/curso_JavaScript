// for-in

console.log("*** for-in ***")
const pessoa = {
    nome: 'Lucas',
    idade: 23
};

// key-value
for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Amarelo','Verde']

for (let indice in cores) {
    console.log(indice,cores[indice])
}