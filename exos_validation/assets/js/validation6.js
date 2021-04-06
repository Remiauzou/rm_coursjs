/**
 *
 * Exercice de vérification mot de passe sécurisé.
 * @version 6.0 - MODE REGEX - Variation Adrien
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 *
 */


/**
 * @param document est un objet global créé automatiquement.
 * https://developer.mozilla.org/fr/docs/Web/API/Document
 *
 * Sur ce lien, A gauche dans Related Topics, vous avez une liste
 * des propriétés et méthodes disponibles
 * Cherchez querySelector pour plus d'infos
 *
 */
const formulaire = document.querySelector('#form1'),

      // Champs du formulaire contenant le mot de passe à tester
      input_mdp = document.querySelector('.mot_de_passe'),

      // Feedback pour l'utilisateur
      message_container = document.querySelector('.message'),

      // Variable liste d'erreurs sous forme de tableau pour optimiser les appels de variables
      texte_erreurs = [
        "Moins de 12 caractères",
        "Rentrez au moins un chiffre",
        "Rentrez au moins un caractère spécial",
        "Rentrez au moins une minuscule",
        "Rentrez au moins une majuscule",
      ],

      REGEXP = [
        /[\d]/,
        /[!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~]/,
        /[a-z\u00E0-\u00FC]/
      ];


/**
 *
 * Pour rappel, 'formulaire' est un objet pour le js :
 * @const {HTMLFormElement} formulaire
 * @link https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement
 *
 *
 * à cet objet, on lui applique une méthode ".addEventlistener()"
 * @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
 *
 * cette méthode, qui "écoute" les événements utilisateur attends 2 paramètres minimum :
 *
 * 1. Un type d'événement en chaine de caractère
 * @event submit
 * @type  {string}
 *
 * Pour les événements, cf cette page :
 * https://developer.mozilla.org/fr/docs/Web/Events
 *
 * Et pour les événements de type Formulaire :
 * https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement#events
 *
 *
 * 2. Une fonction de rappel qui récupère l'événement, elle peut être anonyme ou pas
 *
 */


formulaire.addEventListener("submit", verifieMotDePasse);


// Colonne vertébrale de la vérification
function verifieMotDePasse(evenement) {

    /**
     * Empêche le formulaire de lancer un submit()qui est son comportement
     * par défaut. On aurait pu ne pas mettre ce bout de code en virant
     * dans le html action = "", mais comme c'est un exemple 'courant',
     * ça vous entraine :)
     * @param evenement est purement arbitraire, pas obligatoire selon
     * selon les contextes. D'autres 'noms' couramment utilisés :
     * event, evt, e
     *
     */
    evenement.preventDefault();

    // On vide le message d'erreur à chaque vérification
    message_container.innerHTML = '';

    /**
     * Tableau qui va servir à compter le nombre de caractères correspondant
     * à chaque cas testé. On rajoutera +1 si la condition est vérifiée
     * Liste purement arbitraire de ma part, c'est juste pour l'explication
     *
     * @param { index : 0 }  - Moins de 12 caractères
     * @param { index : 1 }  - Est un nombre
     * @param { index : 2 }  - Est un caractère spécial
     * @param { index : 3 }  - Est une minuscule
     * @param { index : 4 }  - Est une majuscule
     *
     * On réinitialise la vérification après chaque submit, c'est mieux
     * de la mettre à cet endroit
     *
     */

    let verification = [0,0,0,0,0];

    /**
     * Stocke la valeur du mot de passe rentré
     * pour plus de lisibilité dans le code
     */
    let mdp = input_mdp.value;

    // Teste si input_mdp a au moins 12 caractères et incrémente si oui
    // On peut se passer des accolades quand il n'y a qu'une seule instruction après un seul if
    mdp.length > 12 ? verification[0]++ :'';


    /**
     * Boucle pour vérifier chaque lettre du mot rentré
     * .forEach() est une méthode qui marche sur le même principe
     * que .addEventListener(), MAIS avec un seul paramètre de base,
     * une fonction de rappel, qui prend la valeur du tableau
     * en l'occurence la lettre en ce qui nous concerne et en option
     * l'index et l'array
     *
     */
     mdp.split('').forEach( function(lettre) {


        // Teste si lettre est un nombre
        lettre.match(REGEXP[0]) ? verification[1]++ :

         // teste si lettre est un caractère spécial
         lettre.match(REGEXP[1]) ? verification[2]++ :

         // Teste si lettre a au moins 1 minuscule
         lettre.match(REGEXP[2]) ? verification[3]++ :

         // Majuscule par défaut
         verification[4]++;
    });

    /**
     * Vous pouvez décommenter la ligne ci-dessous pour vérifier si les nombres
     * dans le tableau correspondent (normalement, oui)
     *
     */

    console.log(verification);


    // Boucle qui va rajouter les messages d'erreurs
    verification.forEach( function(erreur,i) {
        erreur === 0 ? ajouteErreur(i) : '';
    });

 }

// Met à jour le conteneur des "erreurs" listées
function ajouteErreur(index) {
    message_container.innerHTML += '<div>' + texte_erreurs[index] + '</div>';
}