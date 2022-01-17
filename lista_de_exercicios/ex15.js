function retornaElementoPar(lista) {
    const novalista = []

    for(let indice in lista) {
        if((indice % 2 === 0) && (lista[indice] % 2 === 0)) {
            novalista.push(lista[indice])
        }
    }
    return novalista
}

const array = [3, 4, 5, 6, 18]

console.log(retornaElementoPar(array))