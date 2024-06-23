/*Ecrire un programme qui demande le nom de l’utilisateur
et son sexe et affiche Bonjour monsieur <nom> ou Bonjour
madame <nom>. Où <nom> est le nom saisi par l’utilisateur.
 */
/*Demander le nom de l’utilisateur*/
let nom=prompt('Veuillez inserer votre nom')
/*Demander le sexe de l’utilisateur*/
let sexe=prompt('Veuillez inserer votre sexe')
/*Mettre une variable pour la salutation */
let salutation
/*Verifier le sexe de l'utilisateur et composer la salutation */
if(sexe.toLowerCase() === "homme") {
    salutation ="Bonjour Monsieur " + nom 
} else if (
    sexe.toLowerCase() === "femme") {
        salutation= "Bonjour Madame " + nom
    } else{
        salutation= "BONJOUR" + nom
    }
    /*Afficher le message salutation */
    alert(salutation)
