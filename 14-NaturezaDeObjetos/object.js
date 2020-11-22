const mouse = {
    cor: 'red',
    marcar: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log('mudando DPI ');
}
console.log(mouse)
delete mouse.velocidade;
console.log(mouse)