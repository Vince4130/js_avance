## Démonstration : Déboguer un projet JavaScript avec Live Server et Chrome

1. **Lancer le projet**  
    Ouvrez `index.html` et `script.js` avec Live Server pour démarrer l'application.

2. **Inspection du code**  
    Ouvrez les outils de développement Chrome (`F12` ou clic droit → *Inspecter*).

3. **Ajouter un point d'arrêt sur un clic**  
    Dans l'onglet *Sources*, ouvrez *Event Listener Breakpoints* → *Mouse* → cochez *click* pour arrêter l'exécution lors d'un clic.

4. **Utiliser le panneau Watch**  
    Ajoutez des expressions à surveiller dans le panneau *Watch* pour observer la valeur de certaines variables.

5. **Afficher des valeurs dans la console**  
    Utilisez la console de chorme pour afficher des valeurs et mieux comprendre le comportement du code.

6. **Corriger une erreur dans la console**  
    Par exemple, si une variable doit être convertie en nombre, utilisez `parseInt(addend1)` dans la console pour tester la correction.

7. **Reporter la correction dans le code source**  
    Une fois la correction validée, modifiez directement le fichier JavaScript dans Chrome ou dans votre éditeur pour pérenniser la solution.

