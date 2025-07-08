// Fonction pour charger tous les utilisateurs
async function loadUsers() {
  const select = document.getElementById("userSelect");
  try {

    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');

    //const data = await apiResponse;
    const users = await apiResponse.json();
    
    /*
    const users = [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
      { id: 3, name: "Clementine Bauch" },
      { id: 4, name: "Patricia Lebsack" },
      { id: 5, name: "Chelsey Dietrich" },
      { id: 6, name: "Mrs. Dennis Schulist" },
      { id: 7, name: "Kurtis Weissnat" },
      { id: 8, name: "Nicholas Runolfsdottir V" },
      { id: 9, name: "Glenna Reichert" },
      { id: 10, name: "Clementina DuBuque" }
    ]
    */


    users.forEach(user => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      select.appendChild(option);
    });
  } catch (error) {
    alert("Impossible de charger les utilisateurs : " + error.message);
  }
}

// Fonction pour charger les posts d’un utilisateur
async function loadPosts(userId) {
  try {

    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    return await apiResponse.json();
   /*return [
      { id: posts.id, userId: posts.userId, title: posts.title, body: posts.body },
      { id: 2, userId: userId, title: "Post 2", body: "Contenu du post 2" },
      { id: 3, userId: userId, title: "Post 3", body: "Contenu du post 3" }
    ]*/
  } catch (error) {
    throw new Error("Erreur posts : " + error.message);
  }
}

// Fonction pour charger les commentaires d’un post
async function loadComments(postId) {
  try {
    const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return await apiResponse.json();
    /*return comments = [
      { id: 1, postId: postId, name: "Commentaire 1", body: "Contenu du commentaire 1" },
      { id: 2, postId: postId, name: "Commentaire 2", body: "Contenu du commentaire 2" },
      { id: 3, postId: postId, name: "Commentaire 3", body: "Contenu du commentaire 3" }
    ]*/
    
  } catch (error) {
    throw new Error("Erreur commentaires : " + error.message);
  }
}

// Fonction principale pour afficher les posts et commentaires
async function displayUserPosts(userId) {
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  content.innerHTML = "";

  try {
    const posts = await loadPosts(userId);

    for (const post of posts) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      
      // Chargement des commentaires
      const comments = await loadComments(post.id);
      const ul = document.createElement("ul");

      comments.forEach(comment => {
        const li = document.createElement("li");
        li.textContent = `${comment.name} : ${comment.body}`;
        ul.appendChild(li);
      });

      postDiv.appendChild(ul);
      content.appendChild(postDiv);
    }

  } catch (error) {
    content.innerHTML = `<p style="color:red;">${error.message}</p>`;
  } finally {
    loader.style.display = "none";
  }
}

// Événement sur la sélection d'un utilisateur
document.getElementById("userSelect").addEventListener("change", (event) => {
  const userId = event.target.value;
  if (userId) {
    displayUserPosts(userId);
  } else {
    document.getElementById("content").innerHTML = "";
  }
});

// Chargement initial des utilisateurs
loadUsers();