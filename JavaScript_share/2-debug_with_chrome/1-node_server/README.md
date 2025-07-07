# Créer un serveur Node.js avec Express

## Prérequis

- Node.js installé
- npm installé

## Étapes

### 1. Initialiser le projet

```bash
npm init -y
```

### 2. Installer Express

```bash
npm install express
```

### 3. Créer le fichier du serveur

Créez un fichier `server.js` :

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

### 4. Lancer le serveur

```bash
node server.js
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Ressources

- [Documentation Express](https://expressjs.com/fr/)

## Déboguer avec Chrome

Pour déboguer votre serveur Node.js avec Chrome :

1. Lancez votre projet en mode debug :
    ```bash
    node --inspect server.js
    ```
2. Ouvrez Chrome et accédez à : [chrome://inspect](chrome://inspect)
3. Cliquez sur « Open dedicated DevTools for Node » pour ouvrir les outils de développement dédiés.
4. Vous pouvez maintenant placer des points d'arrêt, inspecter les variables et exécuter votre code étape par étape.