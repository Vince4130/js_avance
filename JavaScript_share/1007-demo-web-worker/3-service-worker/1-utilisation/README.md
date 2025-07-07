# Mise en place étape par étape d'une PWA

## 1. Critères d'installation

Consultez la documentation officielle : [Critères d'installation](https://web.dev/articles/install-criteria?hl=fr)

Pour vérifier le respect des heuristiques d'engagement utilisateur, vous pouvez consulter le niveau d'engagement dans Chrome via `chrome://site-engagement`.

## 2. Création du fichier `manifest.json`

Exemple de contenu :

```json
{
    "name": "Demo PWA",
    "icons": [
        {
            "src": "/icons/512.png",
            "type": "image/png",
            "sizes": "512x512"
        },
        {
            "src": "/icons/192.png",
            "type": "image/png",
            "sizes": "192x192"
        }
    ],
    "start_url": "/?source=pwa",
    "display": "standalone"
}
```

Pour lier le manifest à votre fichier HTML :

```html
<link rel="manifest" href="/manifest.json" />
```

## 3. Vérification dans Chrome

Ouvrez l'application dans Chrome, puis rendez-vous dans l'onglet **Application** des outils de développement. Le sous-onglet **Manifest** vous permet de visualiser les informations du manifest et l'icône de l'application.

## 4. Ce qui vas nous interesser c'est l'event.request.mode === navigate
car le mode navigate c'est les navigations de l'utilisateur