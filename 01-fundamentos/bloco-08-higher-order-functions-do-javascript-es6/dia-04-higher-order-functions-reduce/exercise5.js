// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// o primeiro reduce retorna todas as palvras. o segundo reduce cria uma array com todas as letras separadas e quantifica no acc quantas letras a e A aparecem
function containsA() {
  return names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') {
        return acc += 1;
      }
      return acc;
    }, 0)
  }, 0)
}

console.log(containsA());