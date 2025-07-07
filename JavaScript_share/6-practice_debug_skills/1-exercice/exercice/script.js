function ajouterJoursOuvres(dateDepart, nbJours) {
  let date = new Date(dateDepart);
  let joursAjoutes = 0;

  while (joursAjoutes < nbJours) {
    date.setDate(date.getDate() + 1);

    const day = date.getDay();
    if (day !== 0 || day !== 6) { // 0 = Dimanche, 6 = Samedi
      joursAjoutes++;
    }
  }

  return date;
}

function formatDate(date) {
  return date.toISOString().split("T")[0]; 
}


// Tests automatisés
const tests = [
  {
    name: "Test 1 - Départ lundi, 5 jours",
    input: { date: new Date("2025-07-07"), jours: 5 },
    expected: "2025-07-14"
  },
  {
    name: "Test 2 - Départ vendredi, 3 jours",
    input: { date: new Date("2025-07-11"), jours: 3 },
    expected: "2025-07-16"
  },
  {
    name: "Test 3 - Départ jeudi, 1 jour",
    input: { date: new Date("2025-07-10"), jours: 1 },
    expected: "2025-07-11"
  },
  {
    name: "Test 4 - Départ dimanche, 2 jours",
    input: { date: new Date("2025-07-13"), jours: 2 },
    expected: "2025-07-16"
  }
];

// Fonction d'assertion affichée sur la page
function assertTest(test, index) {
  const result = ajouterJoursOuvres(test.input.date, test.input.jours);
  const formattedResult = formatDate(result);
  const expectedDate = test.expected;

  const div = document.createElement("div");
  div.className = "test";
  if (formattedResult === expectedDate) {
    div.textContent = `✅ ${test.name}`;
    div.classList.add("success");
  } else {
    div.textContent = `❌ ${test.name} → Attendu: ${expectedDate}, Reçu: ${formattedResult}`;
    div.classList.add("fail");
  }

  document.getElementById("tests").appendChild(div);
}

// Affichage du résultat final
function afficherExemple() {
  const exempleDate = new Date("2025-04-07");
  const exempleJours = 5;
  const resultat = formatDate(ajouterJoursOuvres(exempleDate, exempleJours));

  const p = document.createElement("p");
  p.id = "resultat";
  p.textContent = `Exemple : Si vous partez le ${formatDate(exempleDate)} pour ${exempleJours} jours, vous revenez le ${resultat}.`;
  document.getElementById("resultat").replaceWith(p);
}

// Événement au clic sur le bouton
document.getElementById("runTests").addEventListener("click", () => {
  document.getElementById("tests").innerHTML = ""; // Réinitialise les tests
  tests.forEach(assertTest);
  afficherExemple();
});