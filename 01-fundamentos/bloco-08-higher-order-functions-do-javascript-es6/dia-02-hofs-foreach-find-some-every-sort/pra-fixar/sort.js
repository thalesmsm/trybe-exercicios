// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});

console.log(people);

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

const peopleReverse = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peopleReverse.sort((a, b) => {
  if (a.age < b.age) {
    return 1;
  }
  if (a.age > b.age) {
    return -1;
  }
  return 0;
});

console.log(peopleReverse);