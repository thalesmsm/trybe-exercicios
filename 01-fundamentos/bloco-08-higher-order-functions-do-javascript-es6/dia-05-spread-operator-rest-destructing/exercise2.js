// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum(...numbers) {
  // a função sum recebe um parametro rest, que reune todos os valores recebidos pela chamada da função em um array, dando a possibilidade de usar uma HoF para percorrer esse array e fazer a soma dos valores.
  return numbers.reduce((acc, curr) => acc + curr)
}

console.log(sum(1, 4, 6, 3));