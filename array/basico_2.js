/*
essa aula foi uma introdução a programação orientada
a objeto, coneito que teve que ser explicado pelo fato 
do array ser um objeto, pois podemos uasr alguns metodos
já estabelecidos por padrão.
*/

const numeros = []

numeros.push(1)
numeros.push(4)
numeros.push(8)
numeros.push(10.5)

console.log(numeros)
console.log(numeros.length)

const novoArray = []
for (let i = 0; i <= 20; i+= 2) {
    novoArray.push(i)

}
console.log(novoArray)