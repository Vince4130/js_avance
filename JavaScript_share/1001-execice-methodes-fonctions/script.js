function afficherProfil(ville, profession) {
  let pronom = 'Il';

  if (this.sexe === 'f') {
    pronom = 'Elle';
  }

  console.log(
    `${this.nom} a ${this.age} ans. ${pronom} vit à ${ville} et travaille comme ${profession}`
  );
}

const utilisateur1 = {
  nom: 'Simone',
  sexe: 'f',
  age: 28,
};

const utilisateur2 = {
  nom: 'Vince',
  sexe: 'h',
  age: 52,
};

const utilisateur3 = {
  nom: 'Alice',
  sexe: 'f',
  age: 32,
};

afficherProfil.call(utilisateur1, 'Dunkerque', 'Designer');

afficherProfil.apply(utilisateur2, ['Paris', 'Développeur']);

const afficherAlice = afficherProfil.bind(utilisateur3, 'Paris', 'Analyste');

afficherAlice();
