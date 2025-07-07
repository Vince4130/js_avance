
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

self.addEventListener('install', event => {
  // self.skipWaiting(); // Force l'activation immédiate du service worker
  console.log(`${PREFIX} install`);
});

self.addEventListener('activate', event => {
  // clients.claim(); // Prend le contrôle des clients existants
  // utilisation de fetch serait possible à la première activation
  console.log(`${PREFIX} activate`);
});

self.addEventListener('fetch', event => {
  console.log(`${PREFIX} fetch`);
});