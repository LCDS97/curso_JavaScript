function criarSkate(shape,truck,rodas,rolamentos){
   return{ shape,
    truck,
    rodas,
    rolamentos,
    colocarParafusos(){
        console.log("Colocando Parafusos")
    }
}
}

const Skate1 = criarSkate('Skate in Panta','Indepedent','Moska','Spitfire')
console.log(Skate1)
