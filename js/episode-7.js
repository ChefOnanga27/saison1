/*
Écrire un programme qui demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur.
NB : Est considérée majeure, une personne ayant au moins 18 ans.
 */

/* Demander l'âge de l’utilisateur*/
let age= prompt('Quel est votre age')
/*verifier si l'utilisateur à moins de 18 ans*/
if(age<18) {
    /*Afficher le message vous etes mineur */
    alert('Vous etes mineur')
}
/*Si l'utilisateur à plus de 18 ans*/
if(age>18) {
    /*Afficher le message vous etes majeur */
    alert('vous etes majeur')
}