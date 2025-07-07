// routes/reservations.route.js
const express = require('express');
const router = express.Router();
const { reservations } = require('../data/reservations.data');

// utils/ReservationUtils.js
class ReservationUtils {
  static async validerDisponibilite(salle, debut, fin) {
    const reservationsExistantes = await this._chargerReservations();

    return !reservationsExistantes.some(r =>
      new Date(debut) < new Date(r.fin) && new Date(fin) > new Date(r.debut)
    );
  }

  static _chargerReservations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(require('../data/reservations.data').reservations);
        } else {
          resolve(); 
        }
      }, 200);
    });
  }
}

router.get('/', (req, res) => {
  res.json(reservations);
});

router.post('/', async (req, res) => {
  const { salle, debut, fin, utilisateur } = req.body;

  if (!salle || !debut || !fin || !utilisateur) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  try {
    const disponible = await ReservationUtils.validerDisponibilite(salle, debut, fin);

    if (!disponible) {
      return res.status(409).json({ error: 'La salle est déjà réservée pendant ce créneau.' });
    }

    const nouvelleReservation = {
      id: Date.now(),
      salle,
      debut,
      fin,
      utilisateur
    };

    require('../data/reservations.data').reservations.push(nouvelleReservation);

    return res.status(201).json(nouvelleReservation);
  } catch (err) {
    console.error("Erreur lors de la réservation");
    return res.status(500).json({ error: "Erreur interne" });
  }
});

router.post('/verifier', (req, res) => {
  const { salle, debut, fin } = req.body;

  if (!salle || !debut || !fin) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  const existe = reservations.some(r => r.salle === salle);

  res.json({ disponible: !existe });
});


module.exports = router;