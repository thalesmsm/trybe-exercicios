// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome(text) {
  let reverse = '';
  for (i = text.length - 1; i >= 0; i -= 1) {
    reverse += text[i];
  }
  // return (reverse);
  console.log(reverse);
}
palindrome('thales');


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let num = [2, 3, 6, 7, 10, 1];

function getMax(arr) {
  let maior = arr[0];
  let index = '';
  for (let i in arr) {
    if (arr[i] > maior) {
      maior = arr[i];
      index = i;
    }
  }
  console.log(index);
}
getMax(num);


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


let numbers = [2, 4, 6, 7, 10, 0, -3];

function getMin(arr) {
  let menor = arr[0];
  let index = '';
  for (let i in arr) {
    if (arr[i] < menor) {
      menor = arr[i];
      index = i;
    }
  }
  console.log(index);
}
getMin(numbers);


// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.


function sum(number) {
  let soma = 0;
  for (let i = number; i >= 1; i -= 1) {
    soma += i;
  }
  console.log(soma);
}

sum(5);

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let i = 0; i < fimPalavra.length; i += 1) {
    if (palavra[palavra.length - fimPalavra.length + i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra('acomplishment', 'ment'));