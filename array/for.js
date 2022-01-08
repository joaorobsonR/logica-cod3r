const notas = [8, 6, 5, 7, 8, 9, 1, 2, 4, 7]

//foreach
let valores = ''

for (let nota of notas) { // of vai percorrer os valores do array notas
    valores += nota + ' '
}
console.log(valores)

let novoValores = ''

for(let indice in notas) { // in vai percorrer os indices do array notas
    novoValores += indice + ' '
}
console.log(novoValores)

// jeito mais complicado

valores = ''
novoValores = ''

for (let i = 0; i < notas.length; i++) {
    valores += i + ' '                      //mostra os valores
    novoValores += notas[i] + ' '           //mostra os indices
}
console.log(valores)
console.log(novoValores)