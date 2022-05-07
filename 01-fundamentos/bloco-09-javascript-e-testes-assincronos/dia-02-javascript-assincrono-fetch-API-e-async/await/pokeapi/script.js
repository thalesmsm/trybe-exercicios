const pokemons = ['ditto', 'charmander', 'bulbasaur', 'squirtle', 'pikachu', 'porygon', 'mewtwo'];

function append(data) {
  const ol = document.querySelector('ol');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.nome;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ol.appendChild(li);
}

// função que faz a reqisição na API e retorna o JSON
async function fetchPokemonData(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((response) => response.json())
}

function fetchPokemon(nomePokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
  .then((response) => response.json())
  .then(({ name, sprites }) => {
    const pokemon = { nome: name, imageUrl: sprites.front_default }
    append(pokemon);
  })
  .catch((error) => console.log(error))
}


async function requestPokemonsInOrder() {
  try {
    const arrayPokemons = [
      await fetchPokemonData('pikachu'),
      await fetchPokemonData('porygon'),
      await fetchPokemonData('ditto'),
      await fetchPokemonData('charmander'),
    ]
    arrayPokemons.forEach(({ name, sprites }) => {
      const pokemonObjeto = { nome: name, imageUrl: sprites.front_default }
      append(pokemonObjeto);
    })
  } catch (error) {

  }
}

function requestPokemons() {
  pokemons.forEach((pokemon) => fetchPokemon(pokemon))
}

window.onload = requestPokemons;