// Déclaration et initialisation des variables
let a = 5;
let b = 10;

// Affichage des valeurs initiales en console
console.log("Avant permutation :");
console.log("a = 5", a);
console.log("b = 10", b);

// Permutation des valeurs à l'aide d'une variable temporaire
let temp = a;
a = b;
b = temp;

// Affichage des valeurs après permutation en console
console.log("Après permutation :");
console.log("a = 10", a);
console.log("b =5", b);
/*afficher le resultat*/
alert(a,b)