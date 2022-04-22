// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 6, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// o map retornanra um array com 3 objetos que recebem uma chave name e outra average
// a chave name recebe o nome dos estudantes do array studants que o map percorre
// a chave average recebe os arrays na posição [i] da array grades que o map percorre
// como grades[i] é um array pode-se usar o reduce para fazer a soma dos valores dentro do array e retornar a media dividindo a soma pela quantidade de notas que é dada pelo comprimento do array.
function studentAverage() {
  return students.map((student, i) => {
    return {
      name: student,
      average: grades[i].reduce((acc, curr) => (acc + curr) ,0)/grades[i].length
    }
  });
}

console.log(studentAverage());
