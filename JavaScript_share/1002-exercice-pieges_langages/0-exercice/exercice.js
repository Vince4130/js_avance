/*
    * Exercice : Pièges en JavaScript
    * Objectif : Identifier et corriger les pièges courants en JavaScript.
    * Niveau : Intermédiaire
    * Description : Cet exercice met en évidence des pièges courants en JavaScript, tels que la portée des letiables, l'utilisation de `this`, et les conversions de types.
*/

function afficherInfos() {
  nom = "Alice";
  let age = "30";

  let ville = "Paris";
  let pays  = "France";

  console.log("Avant conversion:", Number(age) + 5);

  if (true) {
    let ville = "Paris";
    let pays  = "France";
  }

  console.log("Ville:", ville);
  console.log("Pays:", pays);

  function direBonjour() {
    console.log("Bonjour, je suis " + this.nom);
  }

  direBonjour();
}

afficherInfos();