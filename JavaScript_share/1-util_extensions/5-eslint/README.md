# Guide rapide : Configurer ESLint dans un projet JavaScript

## 1. Initialiser un projet Node.js

Commencez par créer un fichier `package.json` :
```bash
npm init -y
```

## 2. Installer et configurer ESLint

Lancez l’assistant de configuration :
```bash
npx eslint --init
```
> ⚠️ Cette commande nécessite un fichier `package.json` dans le dossier courant.

Lors de l’exécution, `npx` vous proposera d’installer trois paquets :
- **eslint** : le moteur principal d’analyse de code.
- **@eslint/js** : les règles JavaScript recommandées par ESLint.
- **globals** : la gestion des variables globales selon l’environnement (Node.js, navigateur, etc.).

## 3. Fichier de configuration généré

Par défaut, la commande crée un fichier `eslint.config.mjs` similaire à :
```js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // Règles recommandées pour JavaScript
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
    },

    // Définition des variables globales (ex : Node.js)
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
]);
```

## 4. Personnaliser la configuration

Pour adapter ESLint à vos besoins, ajoutez un objet de configuration supplémentaire :
```js
{
    rules: {
        "semi": ["error", "always"], // Exige un point-virgule à la fin de chaque instruction.
        "quotes": ["error", "double"], // Imposent l'utilisation de guillemets doubles pour les chaînes de caractères.
        "no-console": ["warn"], // Affiche un avertissement lors de l'utilisation de console.log ou d'autres méthodes console.
        "no-debugger": ["error"], // Interdit l'utilisation de l'instruction debugger.
        "no-var": ["error"], // Interdit l'utilisation de var, privilégie let ou const.
        "prefer-const": ["error"], // Suggère d'utiliser const si une variable n'est pas réaffectée.
        "camelcase": ["error"], // Imposent la notation camelCase pour les noms de variables et de fonctions.
        "eqeqeq": ["error", "always"], // Exige l'utilisation de === et !== au lieu de == et !=.
        "curly": ["error", "all"], // Exige des accolades pour tous les blocs (if, else, etc.), même s'ils ne contiennent qu'une seule instruction.
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Avertit si des variables ne sont pas utilisées, mais ignore les arguments commençant par "_".
    }
},
}
```
Ajoutez-le dans le tableau passé à `defineConfig`.

## 5. Activer la correction automatique à la sauvegarde

Pour corriger automatiquement les erreurs lors de la sauvegarde, ajoutez dans votre `settings.json` :
```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit" // Active la correction ESLint uniquement sur demande explicite
    }
}
```

---

En suivant ces étapes, vous configurez ESLint pour analyser et améliorer la qualité de votre code JavaScript de façon efficace et personnalisée.