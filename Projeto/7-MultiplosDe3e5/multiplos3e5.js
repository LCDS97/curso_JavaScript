/* Criar função somar que retorna a
 soma de todos os múltiplos de 3 e 5

 Múltiplos de 3
 3,6,9
 Múltiplos de 5
 5 e 10

Somandos os múltiplos
Primeiro armazenar os múltiplos de 3
Segundo armazenar os múltiplos de 5
E por último somar os dois
 */


 somar(167);
 function somar(limite){
     let multiplosDe3 = 0;
     let multiplosDe5 = 0;

     for(i = 0; i <= limite; i++){
         if (i % 3 === 0)
            multiplosDe3 += i;
        if (i % 5 === 0)
            multiplosDe5 += i;

     }
     console.log('O número a somar foi: ',limite)
     console.log('Seus múltiplos de 3 são: ',multiplosDe3)
     console.log('Seus múltiplos de 5 são: ',multiplosDe5)
     console.log('Somando os dois = ',multiplosDe3 + multiplosDe5);
 }
