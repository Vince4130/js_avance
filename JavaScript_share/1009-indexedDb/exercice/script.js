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
  request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Vérifier si l'object store "contacts" existe déjà
    if (!db.objectStoreNames.contains('contacts')) {
      const store = db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      store.createIndex('nameIndex', 'name', { unique: false });
      store.createIndex('emailIndex', 'email', { unique: true });
    }

    console.log('Base de données et object store créés ou mis à jour.');
  };

  // Gestion des événements pour la réussite de l'ouverture de la base de données
  // et le chargement des contacts existants
  request.onsuccess = function (event) {
    console.log('Base de données ouverte avec succès.');
    db = event.target.result;
    loadContacts();
  };

  // Gestion des événements pour les erreurs lors de l'ouverture de la base de données
  // et l'affichage d'un message d'erreur
  // pour informer l'utilisateur
  request.onerror = function (event) {};
}

// === Ajouter un contact ===
function addContact() {
  const name = document.getElementById('nameInput').value.trim().toLowerCase();
  const email = document.getElementById('emailInput').value.trim();

  if (!name || !email) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  const transaction = db.transaction(['contacts'], 'readwrite');
  const store = transaction.objectStore('contacts');

  const contact = { name, email };

  const request = store.add(contact);

  request.onsuccess = function () {
    console.log('Contact ajouté avec succès !');
    loadContacts();
  };
}

// === Charger tous les contacts ===
function loadContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';

  const transaction = db.transaction(['contacts'], 'readonly');
  const store = transaction.objectStore('contacts');
  const request = store.getAll();
  //contacts = [{ id: 1, name: 'John Doe', email: 'test@test.fr' }];

  request.onsuccess = function (event) {
    console.log('Contacts chargés avec succès !');

    const contacts = event.target.result;

    if (contacts.length === 0) {
      contactList.innerHTML = '<li>Aucun contact trouvé</li>';
      return;
    }

    contacts.forEach((contact) => {
      const li = document.createElement('li');
      li.textContent = `${contact.name} - ${contact.email}`;

      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '❌';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => deleteContact(contact.id);

      li.appendChild(deleteBtn);
      contactList.appendChild(li);
    });
  };
}

function deleteContactById() {
  const id = parseInt(document.getElementById('idToDelete').value.trim());

  deleteContact(id)
 
}

// === Supprimer un contact ===
function deleteContact(id) {
   if (isNaN(id)) {
    alert('Veuillez entrer un ID valide.');
    return;
  }

  const transaction = db.transaction(['contacts'], 'readwrite');
  const store = transaction.objectStore('contacts');
  const request = store.delete(id);

  request.onsuccess = function () {
    console.log(`Contact avec ID ${id} supprimé avec succès !`);
    id.value = ''; // Réinitialiser le champ ID
    loadContacts();
  }
  request.onerror = function () {
    console.error(`Erreur lors de la suppression du contact avec ID ${id}.`);
  };
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

  const transaction = db.transaction(['contacts'], 'readonly');
  const store = transaction.objectStore('contacts');
  const nameIndex = store.index('nameIndex');

  const request = nameIndex.getAll(keyword);

  request.onsuccess = function (event) {
    console.log('Contacts trouvés par nom :', event.target.result);
    const contacts = event.target.result;

    if (contacts.length === 0) {
      contactList.innerHTML = '<li>Aucun contact trouvé</li>';
      return;
    }

    contacts.forEach((contact) => {
      const li = document.createElement('li');
      li.textContent = `${contact.name} - ${contact.email}`;
      contactList.appendChild(li);
    });
  };

  request.onerror = function (event) {
    console.error('Erreur lors de la recherche par nom.');
    contactList.innerHTML = '<li>Erreur lors de la recherche</li>';
  };
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
