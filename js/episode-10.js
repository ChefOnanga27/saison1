// Demander le montant de la facture à l'utilisateur
let montantFacture = parseFloat(prompt("Entrez le montant de la facture :"));

// Vérifier si le montant de la facture dépasse 40.000 F
let totalAPayer;
if (montantFacture > 40000) {
    // Appliquer une remise de 10%
    let remise = montantFacture * 0.10;
    totalAPayer = montantFacture - remise;
} else {
    // Pas de remise appliquée
    totalAPayer = montantFacture;
}

// Afficher le total à payer
alert("Le total à payer est : " + totalAPayer + " F");