// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

const myList = [1, 2, 3];

// a função swap recebe como parametro o myList e através do array destructuring os valores são trocados de lugar apenas mudando a ordem dos parametros passados
const swap = ([a, b, c]) => [c, b ,a]
console.log(swap(myList));