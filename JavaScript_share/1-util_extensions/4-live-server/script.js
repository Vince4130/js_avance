// Récupérer les éléments du DOM
const button = document.getElementById('increment__button');
const result = document.getElementById('increment__result');

// Initialiser le compteur
let count = 0;

// Définir la fonction d'incrémentation
function increment_1() {
    count++;
    result.textContent = count;
}

// Ajouter l'écouteur d'événement au bouton
button.addEventListener('click', increment_1);

// Afficher la valeur initiale
result.textContent = count;