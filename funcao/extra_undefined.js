/*
essa aula é uma introdução a um comportamento de
função que pode retornar um valor undefined(indefinido) 
e o que esse valor signiifica e como se comporta com
outras variáveis.
*/

let a // essa variável tem valor undefined
let b = 7
let c = null
let d = 0

console.log(a + b) //vai retornar um valor NaN pois a não foi definido
console.log(b + c) //vai retornar o valor da soma pois null se comporta como 0 em Javascript
console.log(b + d) //é mais usado que o exemplo acima