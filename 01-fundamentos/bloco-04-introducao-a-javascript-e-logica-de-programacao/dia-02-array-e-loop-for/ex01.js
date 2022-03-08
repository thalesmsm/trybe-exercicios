let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('--1--');
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

console.log('--2--');
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log(sum);

console.log('--3--');
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = sum/numbers.length;
console.log(media);

console.log('--4--');
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

console.log('--5--');
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let ordenedNumbers = numbers.sort(function(a, b){return a - b});
console.log(ordenedNumbers[ordenedNumbers.length - 1]);

let maior = numbers[0];
for (i = 0; i < numbers.length; i+=1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);

console.log('--6--');
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let even = [];
let result = 0;
for (i = 0; i < numbers.length; i+=1) {
  if (numbers[i] % 2 !== 0) {
    // even.push(numbers[i]);
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum número ímpar encontrado');
} else {
  console.log(`${result} números ímpares encontrados`);
}
// console.log(even.length + ' numeros impares')
console.log('--7--');
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);

console.log('--8--');
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let de1A25 = [];
for (i = 1; i <= 25; i += 1) {
  de1A25.push(i);
}

console.log(de1A25);

console.log('--9--');
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (i = 0; i < de1A25.length; i += 1) {
  console.log(de1A25[i]/2);
}