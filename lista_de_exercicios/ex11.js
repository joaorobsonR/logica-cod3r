let lista = [1,2,3,6,54]
let novalista = ['olá', 2, 58, 7]

function retornaDois(array = []) {
    let novoArray = []
    novoArray.push(array.pop())
    array.reverse()
    novoArray.push(array.pop())
    return novoArray.reverse()
}

console.log(retornaDois(lista))
console.log(retornaDois(novalista))