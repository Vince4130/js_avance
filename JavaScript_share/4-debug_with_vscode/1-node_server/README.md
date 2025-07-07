# Déboguer un serveur Node.js avec VS Code

Le débogage avec VS Code et Node.js peut se faire de plusieurs façons. Voici deux méthodes courantes :

---

## 1. Utiliser le **Javascript Debug Terminal**

La première méthode consiste à utiliser le terminal de débogage intégré à VS Code :

1. Ouvrez la palette de commandes avec `Ctrl + Shift + P`.
2. Recherchez et sélectionnez **"JavaScript Debug Terminal"**.
3. Un nouveau terminal s’ouvre, prêt à attacher automatiquement le débogueur à tout script Node.js lancé depuis ce terminal.

Par exemple, pour démarrer votre serveur :

```bash
node server.js
```

Le serveur sera alors automatiquement attaché au débogueur de VS Code, ce qui vous permet de poser des points d’arrêt, d’inspecter les variables, etc.

---

## 2. Configurer un fichier `launch.json` **_(Recommandée)_**

La seconde méthode, recommandée pour une configuration pérenne et collaborative, consiste à créer un fichier `.vscode/launch.json` à la racine de votre projet. Ce fichier permet de définir des configurations de débogage personnalisées.

Exemple de configuration :

```json
{
    "type": "node",
    "request": "launch",
    "name": "Lancer le serveur Node.js",
    "program": "${workspaceFolder}/4-debug_with_vscode/1-node_server/server.js",
    "outFiles": ["${workspaceFolder}/**/*.js"]
}
```

- **type** : Spécifie le type de débogueur (ici, Node.js).
- **request** : Indique le mode de lancement (`launch` pour démarrer un programme).
- **name** : Nom de la configuration (affiché dans l’interface de VS Code).
- **program** : Chemin vers le fichier principal à exécuter.
- **outFiles** : Fichiers JavaScript à inclure pour le débogage (utile si vous utilisez un transpileur comme TypeScript).

Pour lancer le débogage :

1. Ouvrez l’onglet **Exécuter et déboguer** (icône de lecture avec un insecte dans la barre latérale).
2. Sélectionnez la configuration créée.
3. Cliquez sur **Démarrer le débogage**.

---

Avec ces méthodes, vous pouvez facilement déboguer votre serveur Node.js, poser des points d’arrêt, inspecter l’état de votre application et améliorer la qualité de votre code.
