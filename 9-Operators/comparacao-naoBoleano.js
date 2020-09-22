// Falsy
/* Todos os valores que são:
- undefined
- null
- 0
- false
- ''(string vazia)
- NaN (Not a Number)
*/

//Truthy - São todos os valores que sobraram e são diferentes de Falsy

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);