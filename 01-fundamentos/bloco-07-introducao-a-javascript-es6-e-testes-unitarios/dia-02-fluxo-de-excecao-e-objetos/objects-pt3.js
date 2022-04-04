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
  const valores = Object.values(student);
  for (const i in valores) {
    console.log(`O nível ${valores[i]}`);
  }
};
console.log('Estudante 1');
nivel(student1);

console.log('Estudante 2');
nivel(student2);
