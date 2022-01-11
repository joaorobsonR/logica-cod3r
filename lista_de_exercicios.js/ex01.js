function comprimentar(texto) {
    return `Olá, ${texto}!`
}

console.log(comprimentar('Isis'))

// de outro jeito
const compri = function(texto) {
    return `Olá, ${texto}!`
}

console.log(compri('Mundo'))