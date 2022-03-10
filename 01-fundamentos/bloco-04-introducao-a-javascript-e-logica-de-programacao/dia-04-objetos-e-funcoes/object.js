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
