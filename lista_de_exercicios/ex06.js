const verificaValor = function (a) {
    if (typeof a === 'boolean') {
        return !(a)
    } else if (typeof a === 'number') {
        return a * -1
    } else {
        return `boolean ou number esperado, mas o valor é ${typeof a }`
    }
}

console.log(verificaValor(true))
console.log(verificaValor(10))
console.log(verificaValor('nome'))