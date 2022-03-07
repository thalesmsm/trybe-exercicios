const custo = 110;
const venda = 153;

let custoTotal = custo * 1.2;

if (custo >= 0 && venda >= 0) {
  let lucro = (venda  - custoTotal) * 1000;
  console.log(lucro);

} else {
  console.log('O valor deve ser maior do que zero');
}