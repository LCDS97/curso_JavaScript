// Velocidade Máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor()
// Caso os pontos for maior que 12 -> "Carteira Suspendida"

verificarVelocidade(130);

//console.log(pontos)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
   // let pontos = 0;
    if (velocidade <= velocidadeMaxima)
    return 'Dentro do limite';

    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else 
            console.log('Pontos',pontos);
    }

}
    

