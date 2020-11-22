// Criar função para mostrar os números primos

// Primos
// Compostos

// Ex: 10,11
exibirNumerosPrimos();

function exibirNumerosPrimos(limite){
    for (let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;


        if (ehPrimo) console.log(numero);
    }
}

function NumeroPrimo(numero){
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            return false;
        }
        return true;
    }
}