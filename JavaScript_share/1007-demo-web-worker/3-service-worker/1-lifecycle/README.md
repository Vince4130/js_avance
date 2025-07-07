# Guide étape par étape : Mise en place d’un Service Worker

pour lancer l'application
npm init -y
npm install serve
npx serve -p 8080

## 1. Créer le fichier `service-worker.js`

Commencez par créer un fichier nommé `service-worker.js` à la racine de votre projet. Ce fichier contiendra la gestion des trois événements principaux du cycle de vie d’un Service Worker : `install`, `activate` et `fetch`.

```js
/**
 * Script du Service Worker pour gérer les événements install, activate et fetch.
 * 
 * @constant {string} PREFIX - Préfixe de version utilisé pour les logs et la gestion du cache.
 */
const PREFIX = 'V1';

// Événement déclenché lors de l'installation du Service Worker
self.addEventListener('install', event => {
    console.log(`${PREFIX} install`);
});

// Événement déclenché lors de l'activation du Service Worker
self.addEventListener('activate', event => {
    console.log(`${PREFIX} activate`);
});

// Événement déclenché pour chaque requête réseau de la page contrôlée
self.addEventListener('fetch', event => {
    console.log(`${PREFIX} fetch`);
});
```

## 2. Enregistrer le Service Worker dans votre fichier HTML

Ajoutez le code suivant dans votre fichier HTML pour enregistrer le Service Worker lors du chargement de la page :

```js
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    } else {
        console.warn('Service Worker non supporté');
    }
});
```

## 3. Remarques sur l’activation

activation du Service Worker ne s’effectue que lorsque toutes les pages de l’application sont fermées, même après un rechargement. Cela garantit qu’aucune page n’utilise encore l’ancienne version du Service Worker.

## 4. Forcer l’activation d’une nouvelle version

Pour forcer l’activation immédiate d’une nouvelle version du Service Worker, utilisez la méthode suivante dans l’événement `install` :

```js
self.skipWaiting();
```

Ajoutez cette ligne dans le gestionnaire de l’événement `install` pour activer instantanément la nouvelle version.
## 5. Remarques sur l’utilisation du Service Worker (`fetch`)

Lors de la première visite d’une page (par exemple en navigation privée), le Service Worker n’intercepte pas immédiatement les requêtes `fetch`. Si vous exécutez `fetch("hello")` dans la console dès le premier chargement, le Service Worker ne prendra pas en charge cette requête.

Le Service Worker commencera à intercepter les requêtes `fetch` uniquement après un rechargement de la page ou l’ouverture d’un nouvel onglet sur le même site.

## 6. Forcer la prise en charge immédiate des requêtes (`fetch`)

Pour que le Service Worker prenne immédiatement le contrôle des pages ouvertes et intercepte les requêtes `fetch` sans attendre un rechargement, ajoutez la ligne suivante dans l’événement `activate` :

```js
self.clients.claim();
```

Cela permet au Service Worker d’agir instantanément sur toutes les pages contrôlées.


