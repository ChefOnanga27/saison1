// La bonne réponse à l'opération
const bonneReponse = 5 + 1; // 6

// Variable pour stocker la réponse de l'utilisateur
let reponseUtilisateur;

// Boucle pour demander la réponse tant qu'elle n'est pas correcte
while (true) {
    // Demander à l'utilisateur de renseigner la réponse
    reponseUtilisateur = parseInt(prompt("Combien font 5 + 1 ?"), 10);

    // Vérifier si la réponse est correcte
    if (reponseUtilisateur === bonneReponse) {
        alert("Bravo, vous avez trouvé la bonne réponse !");
        break; // Sortir de la boucle si la réponse est correcte
    } else {
        alert("Ce n'est pas la bonne réponse. Réessayez."); // Message si la réponse est incorrecte
    }
}