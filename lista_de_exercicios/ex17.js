function somarArray(array) {
    let soma = 0
    
    for(let n of array) {
        soma += n
    }
    return soma
}

const lista = [10, 14, -10, 10]

console.log(somarArray(lista))