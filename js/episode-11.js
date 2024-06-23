// Demander un nombre à l'utilisateur
let nombre = prompt("Entrez un nombre: ");
            
// Vérifier si l'entrée est un nombre
if (isNaN(nombre) || nombre === null || nombre.trim() === "") {
    alert("Veuillez entrer un nombre valide.");
} else {
    nombre = parseInt(nombre, 10);
    // Afficher la table de multiplication de ce nombre jusqu'à 10
    let resultat = "Table de multiplication de " + nombre + " :\n";
    for (let i = 1; i <= 10; i++) {
        resultat += nombre + " x " + i + " = " + (nombre * i) + "\n";
    }
    alert(resultat);
}
