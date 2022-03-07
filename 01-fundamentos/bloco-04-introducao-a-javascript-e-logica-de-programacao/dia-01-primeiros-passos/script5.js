const angulo1 = 50;
const angulo2 = 50;
const angulo3 = 80;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Ângulo inválido');  
  
} else if ((angulo1 + angulo2 + angulo3) == 180) {
    console.log(true)
} else {
    console.log(false)
} 
