it('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(15).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});