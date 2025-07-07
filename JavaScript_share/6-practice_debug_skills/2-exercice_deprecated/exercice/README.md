# 🧪 TP : Correction de bugs dans une API de réservation de salles

## 🎯 Objectif

Ce TP a pour but de vous entraîner à identifier et corriger deux bugs dans une application Node.js fournissant une API REST pour la gestion des réservations de salles. Vous devrez analyser le code, comprendre les problèmes et proposer des corrections adaptées.

Les deux bugs à corriger se situent dans les endpoints suivants :

- **POST `/api/reservations/verifier`** : un bug logique empêche la vérification correcte de la disponibilité d'une salle.
- **POST `/api/reservations`** : un bug critique peut provoquer l'arrêt silencieux du serveur lors de la création d'une réservation.

---

## 🔎 Scénarios de test

### Test 1 : Vérification de la disponibilité d'une salle

**Endpoint** : `POST /api/reservations/verifier`  
**Payload JSON** :

```json
{
    "salle": "Réunion A",
    "debut": "2025-04-10T20:30",
    "fin": "2025-04-10T21:30"
}
```

**Attendu** :  
- L'API doit repondre positive dans ce cas.

---

### Test 2 : Création d'une réservation

**Endpoint** : `POST /api/reservations`  
**Payload JSON** :

```json
{
    "salle": "Réunion B",
    "debut": "2025-04-10T11:00",
    "fin": "2025-04-10T12:00",
    "utilisateur": "Charlie"
}
```

**Attendu** :  
- L'API doit répondre avec un code `201 Created` en cas de succès.
- En cas d'erreur (conflit, données invalides, etc.), une réponse explicite doit être renvoyée (ex : `400 Bad Request`, `409 Conflict`).
- Le serveur ne doit jamais s'arrêter ou planter, quelle que soit la requête.

---

## ✅ Conseils

- Analysez les logs et messages d'erreur pour localiser précisément les bugs.
- Vérifiez la gestion des erreurs et des cas limites dans le code.
- Ajoutez des tests unitaires si besoin pour valider vos corrections.

Bonne correction !