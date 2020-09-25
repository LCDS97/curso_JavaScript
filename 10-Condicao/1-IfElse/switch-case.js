
// Usuário, Gerente, Diretor

// Switch - Case faz voce trabalhar com diversas situações onde se acontece aquela determinada condição é aplicado um resultado
// ou seja você ja sabe os valores das condição e aplica o caso para aquela condição
function mostrarUsuario(){
    valor = document.getElementById("user").value; 
switch (valor) {
    case 'comum':
        document.getElementById("resultado").innerHTML = "Seu tipo de usuário é o comum"
    // break serve para ele para a condição aqui e não comparar os outros resultados do case
    break;

    case 'gerente':
        document.getElementById("resultado").innerHTML = "Seu tipo de usuário é o gerencia"
    break;

    case 'diretor':
        document.getElementById("resultado").innerHTML = "Seu tipo de usuário é o diretor"
    break;

    // Caso não cai em nenhuma das 3 condições, aplicamos o Default
    default:
        document.getElementById("resultado").innerHTML = "Seu tipo de usuário esta incorreto! Tente Novamente"
}
}