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

module.exports = ReservationUtils;