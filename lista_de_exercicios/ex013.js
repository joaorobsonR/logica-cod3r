const lista = ['web', 'um', 1, 26, 'J', 58, 62, 'jamesWeb']

function filtraNumeros(array) {
    const arrayNumero = []
    for(let a of array) {
        if (typeof a === 'number') {
            arrayNumero.push(a)
        }
    }
    return arrayNumero
}

console.log(filtraNumeros(lista))