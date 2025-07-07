// server.js

const WebSocket = require('ws');

// Démarrer le serveur sur le port 3000
const wss = new WebSocket.Server({ port: 3000 });

console.log('Serveur WebSocket démarré sur ws://localhost:3000');

wss.on('connection', (ws) => {
  console.log('Nouvelle connexion établie');

  // Quand on reçoit un message du client
  ws.on('message', (message) => {
    const msg = message.toString();
    console.log('Reçu du client :', msg);

    // On répond au client
    ws.send(`Hello Client, vous avez dit : "${msg}"`);
  });

  // Message de bienvenue
  ws.send('Bienvenue ! Écrivez quelque chose…');
});