// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
// o acc recebe um array vazio que é preenchido com os valores esplahados dos arrays da matriz atraves do curr.
function flatten() {
  return arrays.reduce((acc, curr) => {
    acc.push(...curr)
    return acc;
  }, [])
}
console.log(flatten());