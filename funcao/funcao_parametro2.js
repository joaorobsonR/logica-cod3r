function excutar(fn, n1 =1, n2=1) { //passado como padrão para não resultar em NaN
    if (typeof fn === 'function') {
        console.log(fn(n1, n2))  //mostra o retorno
    }
}

function somar(a , b) {
    return a + b
}

function subtrair(a , b) {
    return a - b
}

function multiplicar(a , b) {
    return a * b
}
excutar(somar, 10) // caso não tivesse atribuido um valor padrão na fn excutar não daria certo
excutar(subtrair, 10, 50)
excutar(multiplicar, 10, 50)
excutar(multiplicar) // aqui também


