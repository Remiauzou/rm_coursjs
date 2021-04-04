/**
 * 
 * * JEU DU C'EST PLUS, C'EST MOINS
 */

const formulaire = document.querySelector('#form1');
const input1 = document.querySelector('input.nombre');
const message_container = document.querySelector('.message');


let nombre_a_trouver = Math.round(Math.random() * 100);

formulaire.addEventListener("submit", function(evenement) {
    evenement.preventDefault();   
    
    // CHEAT MODE
    console.log(nombre_a_trouver); 

    // logique du jeu
    if( input1.value < nombre_a_trouver ) {
        message = "C'est plus !";
    } else if ( input1.value > nombre_a_trouver ) {
        message = "C'est moins !";
    } else {
        message = "Bravo, vous avez trouvé !";
    }


    message_container.innerHTML = message;

})

