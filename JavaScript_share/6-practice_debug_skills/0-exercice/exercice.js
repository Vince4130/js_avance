// Fonction à corriger
/**
 * Calcule la moyenne pondérée de notes selon leurs coefficients.
 * @param {number[]} notes - Tableau des notes.
 * @param {number[]} coefficients - Tableau des coefficients correspondants.
 * @returns {number|null} La moyenne pondérée arrondie à 2 décimales, ou null en cas d'erreur.
 */
function calculerMoyennePonderee(notes, coefficients) {
  if (notes.length !== coefficients.length) {
    console.error('Les tableaux doivent avoir la même longueur.');
    return null;
  }

  let sommeNotes = 0;
  let sommeCoefficients = 0;

  for (let i = 0; i < notes.length; i++) {
    sommeNotes += notes[i] * coefficients[i];
    sommeCoefficients += coefficients[i];
  }

  if (sommeCoefficients === 0) {
    console.error('Les coefficients ne doivent pas être nuls.');
    return null;
  }

  let moyenne = sommeNotes / sommeCoefficients;

  return moyenne;
}

// Tests unitaires simplifiés
const tests = [
  {
    name: 'Test 1 - Cas normal',
    input: { notes: [12, 15, 10], coefficients: [2, 3, 1] },
    expected: 13.17,
  },
  {
    name: 'Test 2 - Coefficients nuls',
    input: { notes: [10, 20], coefficients: [0, 0] },
    expected: null,
  },
  {
    name: 'Test 3 - Tableaux de tailles différentes',
    input: { notes: [10, 14], coefficients: [1, 2, 3] },
    expected: null,
  },
  {
    name: 'Test 4 - Notes décimales',
    input: { notes: [13.5, 16.5], coefficients: [1, 1] },
    expected: 15,
  },
];

// Fonction d'assertion simple
function assertTest(name, actual, expected) {
  if (
    (typeof actual === 'number' &&
      typeof expected === 'number' &&
      Math.abs(actual - expected) < 0.01) ||
    (actual === null && expected === null)
  ) {
    console.log(`✅ ${name}`);
    return true;
  } else {
    console.error(`❌ ${name} → Attendu: ${expected}, Reçu: ${actual}`);
    return false;
  }
}

// Lancement des tests
let allPassed = true;

for (const test of tests) {
  const result = calculerMoyennePonderee(test.input.notes, test.input.coefficients);
  const passed = assertTest(test.name, result, test.expected);
  if (!passed) allPassed = false;
}

// Résultat final
if (allPassed) {
  console.log('\n🎉 Tous les tests ont réussi ! Vous avez corrigé le code !');
} else {
  console.log('\n🚧 Certains tests ont échoué. Continuez à déboguer !');
}

