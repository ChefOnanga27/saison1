/* Écrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte*/

/*Demander à l’utilisateur trois nombres */
let nombre1 =prompt('veuillez inserer un nombre')
let nombre2 =prompt('veuillez inserer un nombre')
let nombre3 =prompt('veuillez inserer un nombre')
/*Convertir les chaines de caractere en nombre */
nombre1=parseFloat(nombre1)
nombre2=parseFloat(nombre2)
nombre3=parseFloat(nombre3)
/*Calculons la somme*/
let somme= nombre1+nombre2+nombre3
/*Calculons la moyenne*/
let moyenne=somme/3
/*Afficher les resultats */
alert(moyenne)