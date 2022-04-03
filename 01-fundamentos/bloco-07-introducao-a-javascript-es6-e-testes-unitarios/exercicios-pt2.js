const fatorial = (number) => {
  let res = 1;

  for (let i = 2; i <= number; i += 1) {
      res *= i;
  }

  return res;
}

console.log(fatorial(5));


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
