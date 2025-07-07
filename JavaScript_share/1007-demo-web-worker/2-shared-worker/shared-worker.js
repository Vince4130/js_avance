// Shared workers doivent utiliser 'onconnect'
onconnect = function(e) {
    const port = e.ports[0];

    port.onmessage = function(event) {
        console.log("Message reçu via le port :", port);
        console.dir(port);
        // Réponse au port
        port.postMessage(`Réponse au message : ${event.data}`);
    };
};