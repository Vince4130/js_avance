// pendu.js

export class Pendu {
  // Constantes
  static NbEssaiMax = 7;
  
  constructor() {
    this.NbEssai = 0;
  }


  AfficherPendu() {
    let template =
      `  --------------     \n` +
      `    |        1       \n` +
      `    |        1       \n` +
      `    |       2 2'      \n` +
      `    |       2'2¤2      \n` +
      `    |      44355     \n` +
      `    |        3       \n` +
      `    |        3       \n` +
      `    |       6 7      \n` +
      `   /|\\     6   7     \n` +
      `  / | \\              \n` +
      ` /  |  \\             `;

    for (let i = 1; i <= this.NbEssaiMax; i++) {
      if (this.NbEssai >= i) {
        if (i !== 2) {
          const replacements = {
            1: '|',
            3: '|',
            4: '-',
            5: '-',
            6: '/',
            7: '\\',
          };
          template = template.replaceAll(i.toString(), replacements[i] || '');
        } else {
          template = template.replace(/2'/g, '\\').replace(/2¤/g, '_').replace(/2/g, '/');
        }
      } else {
        template = template.replaceAll(i.toString(), i === 4 ? ' ' : '');
        template = template.replace(/['¤]/g, '');
      }
    }

    console.log(template);
  }
}
