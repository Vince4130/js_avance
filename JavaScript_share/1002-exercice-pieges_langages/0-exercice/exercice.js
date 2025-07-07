/*
    * Exercice : Pièges en JavaScript
    * Objectif : Identifier et corriger les pièges courants en JavaScript.
    * Niveau : Intermédiaire
    * Description : Cet exercice met en évidence des pièges courants en JavaScript, tels que la portée des variables, l'utilisation de `this`, et les conversions de types.
*/

function afficherInfos() {
  nom = "Alice";
  var age = "30";
  console.log("Avant conversion:", age + 5);

  if (true) {
    var ville = "Paris";
    let pays = "France";
  }

  console.log("Ville:", ville);
  console.log("Pays:", pays);

  function direBonjour() {
    console.log("Bonjour, je suis " + this.nom);
  }

  direBonjour();
}

afficherInfos();