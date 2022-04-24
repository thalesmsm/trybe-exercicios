// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// o setTimeout recebe como segundo parametro um math.random que gera um numero aleatorio entre 0 e 1 que qnd multiplicado por 5000 leva um tempo de 0 a 5 segundos para executar a função, que vem da função messageDelay
const sendMarsTemperature = (() => {
  setTimeout(() => {
    console.log(`Mars temprature: ${getMarsTemperature()} degree Celsius`);    
  }, messageDelay());
})

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo