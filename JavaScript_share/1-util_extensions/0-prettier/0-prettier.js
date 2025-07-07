// formatage automatique avec Prettier
// raccourci : Alt + Shift + F
// pour configurer Prettier, créer un fichier .prettierrc dans le dossier
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Alice");

const add = (a, b) => {
  return a + b;
};
const result = add(2, 3);
console.log(result);

// Avant (si semi: true)
console.log("Bonjour");

// Après (si semi: false)
console.log("Bonjour");

// Avant
const message = "Bonjour le monde";

// Après "singleQuote": true
const message1 = "Bonjour le monde";

// Si la ligne dépasse 100 caractères :
const longText =
  "Ceci est un très long texte qui va être coupé sur plusieurs lignes après formatage.";

// Devient :
const longText1 =
  "Ceci est un très long texte qui va être coupé sur plusieurs lignes après formatage.";

// Code indenté avec 2 espaces "tabWidth": 2
if (true) {
  console.log("ok");
}

// Au lieu de :
if (true) {
  console.log("ok");
}

// Avant
const carre = (x) => x * x;

// Après (avec arrowParens: "always")
const carre1 = (x) => x * x;

// Avec bracketSpacing: true
const user = { name: "Alice", age: 25 };

// Sans bracketSpacing (false)
const user1 = { name: "Alice", age: 25 };

/*
"endOfLine": "auto"
Effet : Gère le type de saut de ligne selon ton système d’exploitation (\n sur Linux/macOS, \r\n sur Windows).
Utile pour éviter les conflits Git liés aux fins de ligne.*/
