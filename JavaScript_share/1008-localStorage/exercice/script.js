// === Charger toutes les données du localStorage dans un tableau ===
function refreshTable() {
  const tbody = document.querySelector('#storageTable tbody');
  tbody.innerHTML = ''; // Vider le tableau avant de le remplir

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>Clé</td>
    <td>Valeur</td>
    <td><button onclick='removeByKey("Clé")'>❌ Supprimer</button></td>
    `;

  tbody.appendChild(row);
}

// === Sauvegarder une paire clé/valeur ===
function saveCustomData() {
    clearInputs(['keyInput', 'valueInput']); // vider les champs de saisie
}

// === Supprimer par clé ===
function deleteCustomData() {
  
    clearInputs(['removeKeyInput']); // vider les champs de saisie
}

// === Supprimer tout ===
function clearLocalStorage() {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les données ?')) {
    
  }
}

// === Fonction utilitaire pour vider des champs ===
function clearInputs(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// === Supprimer une clé depuis le tableau ===
function removeByKey(key) {
  if (confirm(`Supprimer la clé "${key}" ?`)) {
    
  }
}

// Charger les données au démarrage
window.onload = refreshTable;
