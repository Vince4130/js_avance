let db;

// === Connexion à IndexedDB ===
function connectDB() {
  // Ouvrir ou créer la base de données "ContactsDB"
  // avec la version 1
  const request = indexedDB.open('ContactsDB', 1);

  // Gestion des événements pour la mise à jour de la base de données
  // et la création de l'object store "contacts"
  // avec les index "name" et "email"
  // pour une recherche efficace
  // et la clé primaire auto-incrémentée "id"
  // pour identifier chaque contact de manière unique
  request.onupgradeneeded = function (event) {};

  // Gestion des événements pour la réussite de l'ouverture de la base de données
  // et le chargement des contacts existants
  request.onsuccess = function (event) {};

  // Gestion des événements pour les erreurs lors de l'ouverture de la base de données
  // et l'affichage d'un message d'erreur
  // pour informer l'utilisateur
  request.onerror = function (event) {};
}

// === Ajouter un contact ===
function addContact() {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  if (!name || !email) {
    alert('Veuillez remplir tous les champs.');
    return;
  }
}

// === Charger tous les contacts ===
function loadContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';

  contacts = [{ id: 1, name: 'John Doe', email: 'test@test.fr' }];

  if (contacts.length === 0) {
    contactList.innerHTML = '<li>Aucun contact trouvé</li>';
    return;
  }

  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.email}`;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteContact(contact.id);

    li.appendChild(deleteBtn);
    contactList.appendChild(li);
  });
}

function deleteContactById() {
  const id = parseInt(document.getElementById('idToDelete').value.trim());

  if (isNaN(id)) {
    alert('Veuillez entrer un ID valide.');
    return;
  }

}

// === Supprimer un contact ===
function deleteContact(id) {
  
}

// === Recherche par nom ===
function searchByName() {
  const keyword = document.getElementById('searchByName').value.trim().toLowerCase();

  if (!keyword) {
    alert('Veuillez entrer un nom.');
    return;
  }

  const contactList = document.getElementById('contactListByName');
  contactList.innerHTML = '';

}

// === Recherche par email ===
function searchByEmail() {
  const keyword = document.getElementById('searchByEmail').value.trim().toLowerCase();

  if (!keyword) {
    alert('Veuillez entrer un email.');
    return;
  }

  const contactList = document.getElementById('contactListByEmail');
  contactList.innerHTML = '';

}

// === Connexion automatique au chargement ===
window.onload = connectDB;
