// if.. else

// Se a hora estiver entre 6:00 até 12:00: Bom dia!
// Se estiver entre 12:00 até 18:00: Boa tarde!
// Caso Contrário: Boa noite!
/*
let hora = 10;

if (hora > 6 && hora < 12) {
    console.log ("Bom dia!");
} 

else if (hora > 12 && hora < 18) {
    console.log ("Boa tarde!");
} 
else {
    console.log ("Boa noite!");
}
*/

function getCurrentTime(i) {
    i.value = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    if (i > 6 && i < 12) {
        window.alert("Bom dia!");
    }
    else if (i > 12 && i < 18) {
        window.alert("Boa tarde!");
    }
    else if (i > 18 && i < 23) {
        window.alert("Boa Noite!");
    }
    else {
        window.alert("Acho que ta na hora de voce ir dormir :) ");
    }

};