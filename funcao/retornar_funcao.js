//"salvar parte da função com os parametro já resolvidos"

function somar(a) {
    return function (b) {
        return a + b
    }
}

const somarMais10 = somar(10) //parametro a vai ficar salvo como 10

console.log(somarMais10(15)) // é valor atribuido para o parametro b