// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (number) => {
  let res = 1;

  for (let i = 2; i <= number; i += 1) {
      res *= i;
  }

  return res;
}

console.log(fatorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  let arr = phrase.split(' ');
  let maior = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > maior.length) {
      maior = arr[i];
    }
  }
  return maior;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
