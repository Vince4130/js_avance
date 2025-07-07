# Déboguer avec VS Code

Pour déboguer une application web avec Visual Studio Code, suivez ces étapes :

1. **Ouvrir le menu Débogage**  
    Cliquez sur l'icône "Exécuter et déboguer" dans la barre latérale gauche de VS Code.

2. **Configurer le débogueur**  
    Lors du premier lancement, un fichier `.vscode/launch.json` est généré automatiquement. Ce fichier contient la configuration du débogueur. Exemple de configuration par défaut :

    ```json
    {
         // Utilisez IntelliSense pour en savoir plus sur les attributs possibles.
         // Pointez pour afficher la description des attributs existants.
         // Pour plus d'informations, visitez : https://go.microsoft.com/fwlink/?linkid=830387
         "version": "0.2.0",
         "configurations": [
              {
                    "type": "chrome",
                    "request": "launch",
                    "name": "Lancer Chrome en utilisant localhost",
                    "url": "http://localhost:8080",
                    "webRoot": "${workspaceFolder}"
              }
         ]
    }
    ```

3. **Adapter la configuration au port utilisé**  
    Par défaut, l'URL pointe vers `http://localhost:8080`. Cependant, si vous utilisez l'extension **Live Server**, votre application sera généralement accessible sur le port `5500`. Modifiez la ligne `"url"` dans `launch.json` comme suit :

    ```json
    "url": "http://localhost:5500"
    ```

4. **Lancer l'application avec Live Server**  
    Démarrez votre application web en cliquant sur "Go Live" (en bas à droite de VS Code) ou via le menu de l'extension Live Server.

5. **Démarrer le débogage**  
    Retournez dans le menu "Exécuter et déboguer", sélectionnez la configuration appropriée, puis cliquez sur "Démarrer le débogage".  
    Vous pouvez maintenant placer des points d'arrêt, inspecter les variables et suivre l'exécution de votre code JavaScript directement dans VS Code.

---

**Astuce :**  
Pensez à bien sauvegarder vos fichiers avant de lancer le débogueur pour que les modifications soient prises en compte.
