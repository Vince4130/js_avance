// Ce code tourne dans le worker
onmessage = function(event) {
    console.log("Message reçu du main thread :", event.data);
    
    // Un calcul lourd (exemple)
    let sum = 0;
    for (let i = 0; i < event.data.count; i++) {
        sum += i;
    }

    postMessage(`Résultat : ${sum}`);
};