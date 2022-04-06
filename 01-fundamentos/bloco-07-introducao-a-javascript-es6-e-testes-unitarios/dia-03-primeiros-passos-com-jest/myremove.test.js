const myRemove = require('./myremove.js');

describe ('testa função myRemove', () => {
  it ('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it ('Verifica se a chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  
  it ('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

});