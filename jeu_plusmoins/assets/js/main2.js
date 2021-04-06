/**
 * 
 * * JEU DU C'EST PLUS, C'EST MOINS
 */

    // Nombre aléatoire entre 0 et 100
 /*   let nombre_a_trouver = Math.round(Math.random() * 100);

    let nombre_inséré = '';

    // CHEAT MODE
    console.log(nombre_a_trouver); 
    
    // Demande un nombre à l'utilisateur
while( nombre_a_trouver != nombre_inséré ) {

    let message = '';

    // Message demandant le nombre
    nombre_inséré = prompt("Veuillez rentrer un nombre entre 0 et 100");

    // C'est plus
    if( nombre_inséré < nombre_a_trouver ) {
        message = "C'est plus !";
    } else if ( nombre_inséré > nombre_a_trouver ) {
        message = "C'est moins !";
    } else {
        message = "Bravo, vous avez trouvé !";
    }

    alert(message);

}*/

    // Affiche un message "c'est plus ou c'est moins" en fonction du nombre rentré OU si c'est le bon nombre, affiche un "gagné"


// queryselector : marche identique CSS

// const formulaire = document.querySelector('form');
const formulaire = document.querySelector('#form1');
// const formulaire = document.querySelector('.formulaire.principal');

// const formulaire = document.getElementById('form1');
// const formulaire = document.getElementsByClassName('formulaire');
// const formulaire = document.getElementsByTagName('form');

const input1 = document.querySelector('input.nombre');

let nombre_a_trouver = Math.round(Math.random() * 100);


formulaire.addEventListener("submit", function(evenement) {
    evenement.preventDefault();   
    
    // ICI JE FAIS TOUT CE QUE JE VEUX

    // this fait référence à l'objet formulaire appelant la function(evenement)
    // this.submit();

    // console.log(evenement.currentTarget);
    // console.log(evenement.currentTarget === this);

    // console.log(input1);
    // console.log(input1.valueAsNumber);

    // équivalent du prompt
    console.log(input1.value);

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

    console.log(message);

})

