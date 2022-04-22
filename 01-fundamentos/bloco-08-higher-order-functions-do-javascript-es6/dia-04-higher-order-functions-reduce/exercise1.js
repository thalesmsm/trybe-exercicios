// 

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => {
    acc.push(...curr)
    return acc;
  }, [])
}
console.log(flatten());