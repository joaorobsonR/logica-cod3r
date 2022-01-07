function executar(funcao) {
    if (typeof funcao === 'function') { //validaçao da função
        console.log(funcao())
    }
}

function bomDia() {
    return 'bom dia'
}

executar(3) 
executar(bomDia) // parte central da aula passar função como parametro

const x = bomDia    // tirando os parenteses passamos a função como parametro para executar
const y = bomDia()  // são coisas totalmente diferentes, aqui passa apenas o retorno

console.log(x())
console.log(y)