// faixas, tooltip,minimo,maximo

// Três maneiras de fazer esse exercicio
// Primeira opção
let faixasOpcao1 = [
    {tooltip: 'Até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 Até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'Até R$1000 ou mais', minimo: 1000, maximo: 999999}
];

// Segunda Opção
function criarFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo,
    }
};

let faixasOpcao2 = [

    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,100000),
];



// Terceira Opção (Constructor Function)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixasOpcao3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
]

console.log(faixasOpcao1)
console.log(faixasOpcao2)
console.log(faixasOpcao3)