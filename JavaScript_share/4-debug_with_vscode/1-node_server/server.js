const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [
    { id: 1, content: "Première note" },
    { id: 2, content: "Deuxième note" }
];

// Récupérer toutes les notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Récupérer une note par id
app.get('/notes/:id', (req, res) => {
    debugger; // Point d'arrêt pour débogage
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note non trouvée');
    res.json(note);
});

// Créer une nouvelle note
app.post('/notes', (req, res) => {
    const note = {
        id: notes.length + 1,
        content: req.body.content
    };
    notes.push(note);
    res.status(201).json(note);
});

// Supprimer une note
app.delete('/notes/:id', (req, res) => {
    notes = notes.filter(n => n.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});