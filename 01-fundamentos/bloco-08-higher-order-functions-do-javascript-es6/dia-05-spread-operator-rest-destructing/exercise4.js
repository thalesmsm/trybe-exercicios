// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => {
  // Aqui é usado o object detructuring para chamar as chaves direto como parametro da função e evitar repetição do parametro e a HoF filter para selecionar apenas as pessoas que pelas condições
  return arr.filter(({bornIn, nationality}) => {
    return bornIn > 1900 && bornIn < 2001 && nationality === 'Australian'
  })
}

console.log(filterPeople(people));