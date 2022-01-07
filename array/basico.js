// aparentemete array e muito parecido com lista em Python

const notas = [1, 2.4, 3.1, 4, 5, 6, 7.5];

console.log(notas)
console.log(notas[3])

notas[4] = 50 // não resultará em erro pois os elementos podem ser mudados

console.log(notas)

notas = [1, 21, 4] //resultara um erro pois o array notas não pode ser modificado se fosse let não ocorreria