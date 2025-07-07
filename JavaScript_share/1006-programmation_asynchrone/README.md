## 🧠 Objectif de l’exercice

Créer une application web qui récupère des données depuis plusieurs endpoints d’une API publique (par exemple [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)) et affiche les informations liées à un utilisateur sélectionné : ses posts, commentaires, etc.

Tu vas donc faire plusieurs appels asynchrones chaînés ou parallèles, et utiliser pleinement `async/await`.

---

## 🎯 Fonctionnalités demandées

- Afficher une liste déroulante contenant tous les utilisateurs (API GET : `https://jsonplaceholder.typicode.com/users`).
- Lorsqu’un utilisateur est sélectionné :
    - Récupérer et afficher ses posts (API GET : `https://jsonplaceholder.typicode.com/posts?userId=${userId}`).
    - Pour chaque post, afficher les commentaires associés (API GET : `https://jsonplaceholder.typicode.com/comments?postId=${postId}`).
- Gérer les éventuelles erreurs lors des appels API.
- Afficher le résultat dans la console.

## 📁 Structure HTML de base

Code HTML à compléter :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Async/Await - Utilisateurs & Posts</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    #loader {
      color: gray;
      font-style: italic;
    }
    .post {
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      background-color: #f9f9f9;
      margin-top: 5px;
      padding: 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <h1>Utilisateurs & Posts</h1>

  <label for="userSelect">Sélectionnez un utilisateur :</label>
  <select id="userSelect">
    <option value="">-- Sélectionnez --</option>
  </select>

  <div id="loader">Chargement en cours...</div>

  <div id="content"></div>

  <script src="app.js"></script>
</body>
</html>
```