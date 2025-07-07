## Démonstration : Déboguer un projet JavaScript avec Live Server et Firefox

1. **Lancer le projet**  
    Ouvrez `index.html` et `script.js` avec Live Server pour démarrer l'application.

2. **Inspection du code**  
    Ouvrez les outils de développement Firefox (`F12` ou clic droit → *Examiner l’élément*).

3. **Ajouter un point d'arrêt sur un clic**  
    Dans l’onglet *Débogueur*, cliquez sur *Écouteurs d’événements* → *mouse* → cochez *click* pour arrêter l’exécution lors d’un clic.

4. **Utiliser le panneau Surveillance**  
    Ajoutez des expressions à surveiller dans le panneau *Surveillance* pour observer la valeur de certaines variables.

5. **Afficher des valeurs dans la console**  
    Utilisez la console de Firefox pour afficher des valeurs et mieux comprendre le comportement du code.

6. **Corriger une erreur dans la console**  
    Par exemple, si une variable doit être convertie en nombre, utilisez `parseInt(addend1)` dans la console pour tester la correction.

7. **Reporter la correction dans le code source**  
    Une fois la correction validée, modifiez directement le fichier JavaScript dans Firefox ou dans votre éditeur pour pérenniser la solution.

