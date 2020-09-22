/* -----------------------
Operador Lógico AND (&&)
Retonra TRUE se os dois operadores forem True
----------------------- */ 

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

console.log(podeAplicar);
// Foi true devido valores serem validos como True

/* -----------------------
Operador Lógico OR (||)
Retonra TRUE se um dos dois operandos forem True
----------------------- */ 

let comSono = true;
let toBebado = false;
let pegarUber = comSono || toBebado;

console.log(pegarUber);

/* -----------------------
Operador Lógico NOT (!)
É um operador de negação para a variavel aplicada
----------------------- */ 

let vaiDirigir = !pegarUber;
console.log(vaiDirigir);