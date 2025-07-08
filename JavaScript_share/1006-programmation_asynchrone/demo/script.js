function simulateApiCall(id, delay = 2000) {
  return new Promise((resolve) => {
    console.log(`Appel API ${id} démarré`);
    setTimeout(() => {
      const result = `Résultat de l'appel API ${id}`;
      console.log(`Appel API ${id} terminé`);
      resolve(result);
    }, delay);
  });
}

// Tâche rapide NON asynchrone
function tacheRapide() {
  console.log('Tâche rapide démarrée');
  const resultat = 'Résultat rapide';
  console.log('Tâche rapide terminée');
  return resultat;
}

async function main_async_await() {
  console.log('Début du programme');

  // On lance l'API en arrière-plan
  const apiPromise = fetch('https://jsonplaceholder.typicode.com/posts/1'); //simulateApiCall(1);

  // La tâche rapide est exécutée immédiatement (non asynchrone)
  const resultatRapide = tacheRapide();

  // On attend que l'API termine
  // const resultatApi = await apiPromise;
  const data = await apiPromise;
  const jsonResponse = await data.json();
  // Tout est fini, on affiche
  console.log('Toutes les opérations sont terminées !');
  console.log('Résultat API :', jsonResponse); //resultatApi
  console.log('Résultat rapide :', resultatRapide);
}

async function main_then_catch1() {
  console.log('Début du programme');

  // On lance l'API en arrière-plan
  const apiPromise = simulateApiCall(1);

  // La tâche rapide est exécutée immédiatement (non asynchrone)
  const resultatRapide = tacheRapide();

  // On attend que l'API termine
  apiPromise
    .then((resultatApi) => {
      console.log('Toutes les opérations sont terminées !');
      console.log('Résultat API :', resultatApi);
      console.log('Résultat rapide :', resultatRapide);
    })
    .catch((erreur) => {
      console.error('Une erreur est survenue :', erreur);
    });
}

async function main_then_catch2() {
  console.log('Début du programme');

  // On lance l'API en arrière-plan
  const apiPromise = simulateApiCall(1);

  // La tâche rapide est exécutée immédiatement (non asynchrone)
  const resultatRapide = tacheRapide();

  let resultatApiLocal;
  // On attend que l'API termine
  apiPromise
    .then((resultatApi) => {
      resultatApiLocal = resultatApi;
    })
    .catch((erreur) => {
      console.error('Une erreur est survenue :', erreur);
    });

  // Tout est fini, on affiche
  console.log('Toutes les opérations sont terminées !');
  console.log('Résultat API :', resultatApiLocal);
  console.log('Résultat rapide :', resultatRapide);
}

async function main_then_catch3() {
  console.log('Début du programme');

  // On lance l'API en arrière-plan
  const apiPromise = simulateApiCall(1);

  // La tâche rapide est exécutée immédiatement (non asynchrone)
  const resultatRapide = tacheRapide();

  function interne(arg1, arg2) {
    // Tout est fini, on affiche
    console.log('Toutes les opérations sont terminées !');
    console.log('Résultat API :', arg1);
    console.log('Résultat rapide :', arg2);
  }

  // On attend que l'API termine
  apiPromise
    .then((resultatApi) => {
      interne(resultatApi, resultatRapide);
    })
    .catch((erreur) => {
      console.error('Une erreur est survenue :', erreur);
    });
}

//main_then_catch3();

main_async_await();
