function factor(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function factorWhile(n) {
  let result = 1;

  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}

function factorRecurive(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorRecurive(n - 1);
}

const afficherNom = (nom) => {
  console.log(nom);
};

let test = factor(5);
let testR = factorRecurive(5);
let testW = factorWhile(5);

console.log(test);
console.log(testR);
console.log(testW);

afficherNom('Vince');

let tab = [1, 2, 5];

const result = tab.reduce((previousValue, currentValue) => {
  return (previousValue += currentValue);
}, 0);

console.log(result);

(function () {
  console.log('Hello World !!');
})();
