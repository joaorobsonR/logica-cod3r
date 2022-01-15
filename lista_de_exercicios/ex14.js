const objetosArray = {
    nome: 'isis',
    profissao: 'medica',
    idade: 21
}

function retornaArray(objeto) {
    let resultado = []
    for(let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

function retornaArrayteste(objeto) {        //se essa função gerará um erro de não poder ser iterada
    let resultadoteste = []
    for(let chave of objeto){               // o jeito correto é usar o in
        resultadoteste.push([chave, objeto[chave]])
    }
    return resultadoteste
}

console.log(retornaArray(objetosArray))
console.log(retornaArrayteste(objetosArray))

function objetoParaArray(objeto) { //esse metodo já faz o array de arrays sem trabalho
    return Object.entries(objeto)
}

console.log(objetoParaArray(objetosArray))