// formatage automatique avec Prettier
// raccourci : Alt + Shift + F
// pour configurer Prettier, créer un fichier .prettierrc dans le dossier
function sayHello( name ){
console.log("Hello "+name);}
sayHello( "Alice" );

const add=(a,b)=>{return a+b};const result=add(2,3);console.log(result)


// Avant (si semi: true)
console.log('Bonjour');

// Avant (trailingComma: "all")
const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };

// Avant "singleQuote": true
const message = "Bonjour le monde";

// Si la ligne dépasse 100 caractères : printWidth
const longText = 'Ceci est un très long texte qui va être coupé sur plusieurs lignes après formatage.';

// Code indenté avec 2 espaces "tabWidth": 2
if (true) {
    console.log('ok');
}


// Avant (rrowParens: "always")
const carre = x => x * x;

// Avant bracketSpacing (true)
const user1 = {name: 'Alice', age: 25};

/*
"endOfLine": "auto"
Effet : Gère le type de saut de ligne selon ton système d’exploitation (\n sur Linux/macOS, \r\n sur Windows).
Utile pour éviter les conflits Git liés aux fins de ligne.*/