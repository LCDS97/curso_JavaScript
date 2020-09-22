// Recomendação de nomeação de função
// Verbo + Substantivo
// Ação + Objeto

/*
--------------------------------------------------------
Exemplo de função sem parametro para reseta cor, assim que for invocada
--------------------------------------------------------
let corSite = "azul";

function resetaCor () {
    corSite = "";
}

console.log(corSite);
resetaCor();
console.log(corSite);

--------------------------------------------------------
*/

/*
--------------------------------------------------------
// Exemplo de função com paramêtro para cor
--------------------------------------------------------
let corSite = "azul";
function definirCor(cor,tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
definirCor("verde","claro");
console.log(corSite);

--------------------------------------------------------
*/

// Exercicio

let gato = "Não vacinado";

function vacinarGato(vacina, ano) {
    gato = 'Meu gato tomou a vacina de ' + vacina + ' no ano de ' + ano;
};

console.log(gato);
vacinarGato("Anti-rábica",2020);
console.log(gato);
