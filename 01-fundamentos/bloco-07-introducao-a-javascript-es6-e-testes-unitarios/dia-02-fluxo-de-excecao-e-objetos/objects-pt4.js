const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const nivel = (student) => {
  const valores = Object.entries(student);
  console.log(valores);
};
console.log('Estudante 1');
nivel(student1);

console.log('Estudante 2');
nivel(student2);
