let temDinheiro = true;
let ensolarado = false;

resultadoE = '#1 vai para o shopping? ';
resultadoE += temDinheiro && ensolarado;

console.log(resultadoE);
/* dois simbolos de && trabalha no resultado de 
verdadeiro ou falso, já só um & trabalha com binário
retornando 0 ou 1.
*/

let carroGaragem = true;

resultadoOU = '#2 vai ao shopping? ' // nesse caso não vai depender do dinheiro
resultadoOU += ensolarado || carroGaragem;

console.log(resultadoOU);
/* 
como no primeiro caso esse simbolo || representa
o ou, caso fosse usado um simbolo | retornria um numero binário
*/

console.log(false != false); // esse é o sinal do ou exclusivo para trablhar com binário é ^
console.log(true != false);
console.log(false !== true); //estritamente exclusivo
console.log(true !== false);

console.log('não verdadeiro, ' + !true);
console.log('não falso, ' + !false);