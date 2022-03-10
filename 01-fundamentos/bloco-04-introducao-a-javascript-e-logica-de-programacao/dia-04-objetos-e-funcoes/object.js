let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas'],
  bornInfo: {
    city: 'RJ',
    state: 'RJ'
  }
}

console.log(`O cantor ${singer.name} ${singer.lastName} tem ${singer.age} anos`)
console.log(`O cantor ${singer['name']} ${singer['lastName']} tem ${singer.age} anos`)
singer['fullName'] = singer['name'] + ' ' + singer.lastName
console.log(singer.fullName)
console.table(singer)
console.log(`O cantor ${singer.fullName} nasceu na cidade do ${singer.bornInfo.city}`)


let array = [1, 2 , 'thales',
singer = {
  nome:'thales',
  sobrenome:'maciel'
}
];
console.log((array[3]).nome);

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
  };
  
// diasDaSemana.1; SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    razao: 'TrybeBank'
  }
}

let infoBanco = 'banco';
console.log(conta[infoBanco].razao);
console.log(conta[infoBanco]['razao']);


let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

let penultimoMorador = moradores[moradores.length -2];
console.log(penultimoMorador);
console.log(penultimoMorador['apartamento']);