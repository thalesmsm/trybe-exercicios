
function sum(a, b) {
  return a + b;
};

console.log(sum(2, 4));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function greater(a, b) {
  if (a > b) {
    return a + ' é o maior numero';
  } else {
    return b + ' é o maior numero';
  };
};

console.log(greater(123, 43));

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function greaterOfThree(a, b, c) {
  if (a > b && a > c) {
    return `${a} é o maior`;
  } else if (b > a && b > c) {
    return `${b} é o maior`;
  } else {
    return `${c} é o maior`;
  };
};

console.log(greaterOfThree(842, 834, 329));

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function postiveNegative(n) {
  if (n > 0) {
    return "positive";
  } else {
    return "negative";
  };
};

console.log(postiveNegative(-3))

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function isTriangle(ang1, ang2, ang3) {
  let trinagle = true;
  if ((ang1 + ang2 + ang3) === 180) {
    trinagle;
  } else {
    trinagle = false;
  };
  return trinagle;
};

console.log(isTriangle(20, 50, 90))