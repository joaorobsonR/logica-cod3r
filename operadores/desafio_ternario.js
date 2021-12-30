const a = 8;
const b = 4;

let operacao = '/' ;

let resultado = operacao == '+' ? a + b : operacao == '-' ? a - b : operacao == '*' ? a * b : a / b;
console.log('o resultado é', resultado); 

/* 
apesar de ser um programa básico a lógica talvez não
seja entendida de imediato por alguém que não conhece a 
liguagem, existem formas mais intuitivas de resolver esse desafio.
*/