/*
    * Exercice : Pièges en JavaScript
    * Objectif : Identifier et corriger les pièges courants en JavaScript.
    * Niveau : Intermédiaire
    * Description : Cet exercice met en évidence des pièges courants en JavaScript, tels que la portée des variables, l'utilisation de `this`, et les conversions de types.
*/
const utilisateur = {
  nom: "Julien",
  saluer: function() {
    console.log("Bonjour, je suis " + this.nom + " (function classique)");
  }
};

// je veux appeler la méthode saluer après 1 seconde
// et je veux que la console affiche "Bonjour, je suis Julien"
setTimeout(utilisateur.saluer.bind(utilisateur), 1000);


const utilisateur2 = {
  nom: "Julien",
  saluer: () => {
    console.log("Bonjour, je suis " + utilisateur2.nom + " (arrow function)");
  }
};
// je veux appeler la méthode saluer après 1 seconde
// et je veux que la console affiche "Bonjour, je suis Julien"
// et je veux laisser arrow function pour saluer
setTimeout(utilisateur2.saluer, 1000);