// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// A função recebe o array a ser modificado como parametro e retorna um objeto. atraves do object property shorthand reconhece que como o parametro é igual a chave passada, atribui a essa chave o valor da variavel, que vem do array recebido como parametro.
const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio));