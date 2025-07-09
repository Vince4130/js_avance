const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: [
      'http://127.0.0.1:5500',
      'http://localhost:5500',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');
  socket.on('canal1', (msg) => {
    console.log('Message reçu : ' + msg);
    // Répercuter le message à tous les clients
    io.emit('canal1', msg);
  });
  // Dès que l'utilisateur se déconnecte
  socket.on('disconnect', () => {
    console.log("Un utilisateur s\'est déconnecté");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
