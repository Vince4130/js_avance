/**
 * Script du Service Worker pour gérer les événements install, activate et fetch.
 *
 * @constant {string} PREFIX - Préfixe de version utilisé pour les logs et la gestion du cache.
 *
 * @event install
 * Déclenché lors de l'installation du service worker.
 * Journalise l'événement d'installation avec le préfixe de version.
 *
 * @event activate
 * Déclenché lors de l'activation du service worker.
 * Journalise l'événement d'activation avec le préfixe de version.
 *
 * @event fetch
 * Déclenché pour chaque requête réseau effectuée par la page contrôlée.
 * Journalise l'événement fetch et l'URL demandée avec le préfixe de version.
 *
 * Source:
 */
const PREFIX = 'V1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log(`${PREFIX} install`);
});

self.addEventListener('activate', (event) => {
  clients.claim();
  console.log(`${PREFIX} activate`);
});

self.addEventListener('fetch', (event) => {
  console.log(`${PREFIX} FETCH : ${event.request.url}, Mode : ${event.request.mode}`);

  if (event.request.mode === 'navigate') {
    //respondWith(Promise)
    event.respondWith((async () => {
      try {
        /**
         * Réponse préchargée associée à l'événement fetch.
         * 
         * Si la navigation utilise la fonctionnalité de préchargement (navigation preload),
         * cette variable contiendra la réponse préchargée par le navigateur avant que le service worker ne prenne le relais.
         * Utile pour améliorer les performances en servant une réponse déjà disponible.
         * Peut être `undefined` si aucune réponse préchargée n'est disponible.
         *
         * @type {Response|undefined}
         */
        const preloadedResponse = await event.preloadResponse;
        if (preloadedResponse) {
          return preloadedResponse;
        }
        // la requête n'est pas préchargée, on tente de la récupérer depuis le réseau
        // par exmple le passage vers une page HTML
        // ou appelle d'une API
        return await fetch(event.request);
      } catch (error) {
        // Si la requête échoue, on peut retourner une réponse par défaut
        return new Response('Je suis probablement hors ligne');
      }
    })());
  }
});
