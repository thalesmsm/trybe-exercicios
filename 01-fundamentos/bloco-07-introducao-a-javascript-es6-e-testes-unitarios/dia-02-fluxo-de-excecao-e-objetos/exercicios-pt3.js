const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (obj, key, value) => obj[key] = value;
addTurno(lesson2, 'turno', 'noite');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaKeys = (obj) => console.log(Object.keys(obj));
listaKeys(lesson2);

//Crie uma função para mostrar o tamanho de um objeto.
const tamanhoDoObjeto = (obj) => console.log(`O objeto tem ${Object.keys(obj).length} propriedades`);
tamanhoDoObjeto(lesson1);

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valoresDoObjeto = (obj) => console.log(`O objeto tem ${Object.values(obj)} como valores`);
valoresDoObjeto(lesson1);

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Usando o objeto criado no exercício acima, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalDeEstudantes = (obj) => {
  let total = 0;
  const lessons = Object.keys(obj);
  for (let i in lessons) {
    total += obj[lessons[i]].numeroEstudantes
  }
  return console.log(`0 total de alunos matriculados é ${total}`);
}
totalDeEstudantes(allLessons);

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueByNumber = (obj,number) => console.log(Object.values(obj)[number]);
getValueByNumber(lesson3, 1);

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isTrue = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value){
      isTrue = true ;
    } 
  }
  return isTrue;
};
console.log(verifyPair(lesson3, 'materia', 'Matemática'));

