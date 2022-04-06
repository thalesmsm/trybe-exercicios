const myFizzBuzz = require('./myFizzBuzz');

describe('Testa função FizzBuzz', () => {

  it ('verifica se o número divisível por 3 e 5 retorna a palavra fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });

  it ('verifica se o número divisível por 3 retorna a palavra fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz')
  });

  it ('verifica se o número divisível por 5 retorna a palavra buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz')
  });

  it ('verifica se o número Não é divisível por 3 e/ou 5 retorna o proprio número', () => {
    expect(myFizzBuzz(7)).toBe(7)
  });

  it ('verifica se o parâmetro passado não é um número retorna false', () => {
    expect(myFizzBuzz('trybe')).toBe(false)
  });
});