const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
// como a função simula uma operação assincrona devemos usar o try/catch junto da função done para evitar os falso-positivos
it ('Função retorna string toda em maiúsculas', (done) => {
  uppercase ('string', (str) =>{
    try {
      expect(str).toBe('STRING');
      done();
    } catch (error) {
      done(error);
    }
  })
});