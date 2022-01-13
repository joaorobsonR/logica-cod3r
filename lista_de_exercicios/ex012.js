const algumObjeto = {
    nome: 'joão',
    profissão: 'pedreiro',
    trabalhando: true,
    codigo: 12547
}

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}

console.log(removerPropriedade(algumObjeto, algumObjeto.codigo))

//parece que não deu certo