// Velocidade Máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor()
// Caso os pontos for maior que 12 -> "Carteira Suspendida"

const velocidade = verificarVelocidade(70);
console.log(velocidade)
console.log(pontos)

function verificarVelocidade(medidor) {
    let pontos = 0;
    if (medidor <= 70)
    return 'Dentro do limite';

    if (medidor > 70 && medidor <= 75)
    

