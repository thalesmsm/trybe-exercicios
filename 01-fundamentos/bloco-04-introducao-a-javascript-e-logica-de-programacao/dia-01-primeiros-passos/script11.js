let salario = 1500.1;
let inss;
let ir;

if (salario <= 1556.94) {
  inss = salario * 0.08;
} else if (salario <= 2594.92) {
  inss = salario * 0.09;
} else if (salario <= 5189.82) {
  inss = salario * 0.11;
}else{
  inss = 570.88;
}

const salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
  impr = 0;
} else if (salarioBase <= 2826.25){
  impr = (salarioBase * 0.075) - 142.8
} else if (salarioBase <= 3751.05) {
  impr = (salarioBase * 0.15) - 354.8
} else if (salarioBase <= 4664.68) {
  impr = (salarioBase * 0.225) - 636.13
} else {
  impr = (salarioBase *0.275) - 869.36
}

console.log('Salário: ' + (salarioBase - impr).toFixed(2))