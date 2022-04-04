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
  const chaves = Object.keys(student);
  for (const i in chaves) {
    console.log(`${chaves[i]}, Nível: ${student[chaves[i]]}`);
  }
};

console.log('Estudante 1');
nivel(student1);

console.log('Estudante 2');
nivel(student2);
