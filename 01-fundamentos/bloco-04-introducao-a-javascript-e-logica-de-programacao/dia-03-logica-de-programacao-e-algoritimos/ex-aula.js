// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let soma = 0;
for(let i = 50; i <= 100; i += 1){
  soma += i
}

console.log(soma)

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
let counter = 0;
for (let i = 1; i <= 125; i += 1) {
  if (i % 3 === 0) {
    counter ++;
  }
}
if(counter === 50) {
  console.log('mensagem');
}
console.log(counter)

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let p1 = 'tesoura';
let p2 = 'tesoura';

if ((p1 === 'tesoura') && (p2 === 'pedra')) {
  console.log('p2');
} else if ((p1 === 'tesoura') && (p2 === 'papel')) {
  console.log('p1');
} else if ((p1 === 'tesoura') && (p2 === 'tesoura')) {
  console.log('draw');
}


// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let idade = 15;
if (idade > 18) {
  console.log('maior de idade')
} else {
  console.log('menor')
}


// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let Marcella = 11;
let Carlos = 12;
let Camila = 18;

if (Marcella < Carlos && Marcella < Camila) {
  console.log('Marcella');
} else if (Carlos < Marcella && Carlos < Camila) {
  console.log('Carlos');
} else {
  console.log('Camila');
}