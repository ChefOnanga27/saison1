/*Écrire un programme qui demande la moyenne d’un élève
et affiche sa mention (Passable, Assez-Bien, Bien, Très bien,
Excellent).
NB : La moyenne varie entre 0 et 20. */

function mention(moyenne) {
    if (moyenne < 0 || moyenne > 20) {
        return "Moyenne invalide. Veuillez entrer une valeur entre 0 et 20.";
    } else if (moyenne < 10) {
        return "Mention: Passable";
    } else if (moyenne < 12) {
        return "Mention: Assez Bien";
    } else if (moyenne < 14) {
        return "Mention: Bien";
    } else if (moyenne < 16) {
        return "Mention: Très Bien";
    } else {
        return "Mention: Excellent";
    }
    /* demander la moyenne d’un élève */
}

const moyenneInput = prompt("Entrez la moyenne de l'élève (entre 0 et 20) : ");
const moyenne = parseFloat(moyenneInput);

if (isNaN(moyenne)) {
    alert("Veuillez entrer un nombre valide.");
} else {
    alert(mention(moyenne));
}