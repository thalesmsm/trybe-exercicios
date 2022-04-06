const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('verifica se retorna resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('verifica se devolve erro caso receba uma string como parâmetro', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})
