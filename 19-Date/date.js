// Date
const data1 = new Date();


// Forma de aplicar uma data pré definida
const date2 = new Date('March 05 2020 11:30')


// Outra forma de aplicar data somente utilizando números
const date3 = new Date(2021,0,18,13,12)

// Setando um ano para date3
date3.setFullYear(2029)

// Transformar da data em formato string 
date2.toDateString()

// Transformar em string data com GMT do local
date2.toTimeString()

// Transferir informação de cliente para servidor
date2.toISOString()