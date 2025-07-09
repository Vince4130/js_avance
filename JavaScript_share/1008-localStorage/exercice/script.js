// === Charger toutes les données du localStorage dans un tableau ===
function refreshTable() {
  const tbody = document.querySelector('#storageTable tbody');
  tbody.innerHTML = ''; // Vider le tableau avant de le remplir

  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const row = document.createElement('tr');
    
  row.innerHTML = `
    <td>${key}</td>
    <td>${value}</td>
    <td><button onclick='removeByKey("${key}")'>❌ Supprimer</button></td>
    `;
  
  tbody.appendChild(row);
  }
}

// === Sauvegarder une paire clé/valeur ===
function saveCustomData() {
  const key   = document.getElementById('keyInput').value.trim();
  const value = document.getElementById('valueInput').value.trim();
  
  if (!key || !value) { 
    alert('Veuillez entrer une clé et une valeur valides.');
    return;
  }

  localStorage.setItem(key, value); // Enregistrer dans le localStorage
  refreshTable(); // Rafraîchir le tableau pour afficher la nouvelle paire
  clearInputs(['keyInput', 'valueInput']); // vider les champs de saisie
}

// === Supprimer par clé ===
function deleteCustomData() {
  const key = document.getElementById('removeKeyInput').value.trim();
  
  if (!key) {
    alert('Veuillez entrer une clé valide.');
    return;
  }

  localStorage.removeItem(key); // Supprimer la clé du localStorage
  refreshTable(); // Rafraîchir le tableau pour refléter les changements
  alert(`La clé "${key}" a été supprimée.`);
  clearInputs(['removeKeyInput']); // vider les champs de saisie
}

// === Supprimer tout ===
function clearLocalStorage() {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les données ?')) {
    localStorage.clear(); // Vider le localStorage
    refreshTable
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
    localStorage.removeItem(key); // Supprimer la clé du localStorage
    refreshTable(); // Rafraîchir le tableau pour refléter les changements
  }
}

// Charger les données au démarrage
window.onload = refreshTable;
