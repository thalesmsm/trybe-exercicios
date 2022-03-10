// Crie um algoritmo que retorne o fatorial de 10.
let num = 10;
let res = 1;
for (let i = 1; i <= num; i += 1) {
  res *= i
}

console.log(res);

// desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let word = "socorram me subi no onibus em marrocos";
let reverse = '';
for (i = word.length - 1; i >= 0; i -= 1) {
  reverse += word[i]
}
console.log(reverse);

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (i = 0; i < array.length; i += 1) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}

for (i = 0; i < array.length; i += 1) {
  if (array[i].length < menor.length) {
    menor = array[i];
  }
}

console.log(maior, menor);

// Escreva um algoritmo que retorne o maior número primo entre 0 e 50.


let primos = 0;

for (let numero = 0; numero <= 50; numero += 1) {
  let prime = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      prime = false;
    } else {

      primos = numero;
    }
  }

}

console.log(primos);

//------------------
let n = 5;
let symbol = ' *';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
//------------
let base = 5;
let simbolo = ' *';
let line = '';

for (let i = 0; i <= base; i += 1) {
  console.log(line);
  line = line + simbolo;
};