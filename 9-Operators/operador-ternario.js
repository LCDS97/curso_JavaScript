// Operador ternario para evitar varios if no código

// Exemplo:
// Tem um cliente, mais de 100 premium, abaixo é comum

let pontos = 1020;

//       
//   Aqui é colocado a |  Condição     ou 
//          Expressão  | Verdadeira | Falso
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);