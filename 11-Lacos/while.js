// While

// Uma das grandes diferenças, é que a variavel de referencia precisa ser declarada fora do loop
console.log("*** while ***")
let i = 5;
while (i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}