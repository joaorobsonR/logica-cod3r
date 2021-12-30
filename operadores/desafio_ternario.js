const a = 8;
const b = 4;

let operacao = '/' ;

let resultado = operacao == '+' ? a + b : operacao == '-' ? a - b : operacao == '*' ? a * b : a / b;
console.log('o resultado é', resultado); 
