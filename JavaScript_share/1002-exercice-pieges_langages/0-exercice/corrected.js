"use strict";

function afficherInfos() {
  const nom = "Alice";
  let age = "30";
  age = Number(age); // Conversion explicite
  console.log("Après conversion:", age + 5); // 35

  let pays;
  let ville; // Déclaration de ville avec let
  if (true) {
    ville = "Paris";
    pays = "France";
  }

  console.log("Ville:", ville); // OK maintenant
  console.log("Pays:", pays); // OK maintenant

  function direBonjour() {
    console.log("Bonjour, je suis " + nom); // Utilisation directe de nom
  }

  direBonjour();
}

afficherInfos();