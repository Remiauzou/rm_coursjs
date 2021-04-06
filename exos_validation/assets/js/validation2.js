/**
 * Exercice de vérification mot de passe sécurisé.
 * @version 2.0 - MODE TRUE / FALSE
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
const formulaire = document.querySelector('#form1');

// Champs du formulaire contenant le mot de passe à tester
const input_mdp = document.querySelector('.mot_de_passe');

// Feedback pour l'utilisateur
const message_container = document.querySelector('.message');

/**
 * Variable liste d'erreurs sous forme de tableau pour optimiser les appels de variables
 * Dans cette version, j'ai viré aussi les div, pour ne garder que le texte
 * Les divs seront rajoutés dans la fonction créant le nouveau message
 * Comme ça on distingue le contenu du contenant
 *
 */
const texte_erreurs = [
    "Moins de 12 caractères",
    "Rentrez au moins un chiffre",
    "Rentrez au moins un caractère spécial",
    "Rentrez au moins une minuscule",
    "Rentrez au moins une majuscule",
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
     * Tableau true / false qui va servir à déterminer si chaque règle est
     * respectée. On remplacera le false par un true si la condition est vérifiée
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

    // let verification = [false,false,false,false,false];

    /**
     * INSTANT FLEMME !
     * Vu la répétition on peut avoir aussi une syntaxe plus synthétique
     * Décommentez l'un ou l'autre selon votre convenance
     * Celle ci-dessous permet de connaitre et modifier rapidement la taille
     *
     * Pour plus d'infos :
     * @https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     *
     */
    let verification = Array(5).fill(false);

    /**
     * Stocke la valeur du mot de passe rentré
     * pour plus de lisibilité dans le code
     */
    let mdp = input_mdp.value;

    // Teste si input_mdp a au moins 12 caractères et incrémente si oui
    // On peut se passer des accolades quand il n'y a qu'une seule instruction après un seul if
    if ( mdp.length > 12 ) verification[0] = true;


    // Boucle pour vérifier chaque lettre du mot rentré
    for (let i = 0; i < mdp.length; i++) {

        const lettre = mdp[i];

        // Teste si lettre ALIAS mdp[i] dans la fonction est un nombre
        if ( !isNaN( lettre ) ) {
            verification[1] = true;

        // teste si lettre est un caractère spécial
        } else if ( estCaracSpécial(lettre) ) {
            verification[2] = true;

        // Teste si lettre a au moins 1 minuscule
        } else if( lettre === lettre.toLowerCase() ) {
            verification[3] = true;

        // Teste si lettre a au moins 1 majuscule
        } else {
            verification[4] = true;
        }


    } // Fin boucle for pour vérifier chaque lettre du mot rentré

    /**
     * Vous pouvez décommenter la ligne ci-dessous pour vérifier si les nombres
     * dans le tableau correspondent (normalement, oui)
     *
     */

    // console.log(verification);


    /**
     * Boucle qui va rajouter les messages d'erreurs
     * Je n'ai pas besoin de mettre == ou === false,
     * le ! (not) suffit
     *
     */

    for (let i = 0; i < verification.length; i++) {
        if( !verification[i] ) ajouteErreur(i) ;
    }

 }

// Vérifie si la lettre en paramètre est un caractère spécial
function estCaracSpécial(lettre) {
    const spéciaux = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~]/';

    // lettre.indexOf rajoute l'espace comme caractère spécial
    return spéciaux.includes(lettre) || lettre.indexOf(' ') >= 0  ? true : false;
}

// Met à jour le conteneur des "erreurs" listées
function ajouteErreur(index) {
    message_container.innerHTML += '<div>' + texte_erreurs[index] + '</div>';
}