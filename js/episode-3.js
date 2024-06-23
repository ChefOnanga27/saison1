
/* Demander à l'utilisateur le premier nombre*/
let nombre1 = prompt("Entrez le premier nombre :");

/* Convertir le texte en nombre*/
nombre1 = parseFloat(nombre1);

/* Demander à l'utilisateur le deuxième nombre*/
let nombre2 = prompt("Entrez le deuxième nombre :");

/* Convertir le texte en nombre*/
nombre2 = parseFloat(nombre2);

/* Calculer la somme des deux nombres*/
let somme = nombre1 + nombre2;

/* Afficher le résultat dans une alerte*/
alert("La somme de " + nombre1 + " et " + nombre2 + " est : " + somme);