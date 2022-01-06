function comRetorno() {
    return 1
}
/*
quando uma função tem retorno o seu valor pode ser armazenado
em uma variávele e utilizado da forma que for melhor
*/

console.log(comRetorno() + 99) // por exemplo

function texo_ou_numero(retorna) {
    if (retorna) {
        return 'sou um texo'
    }
    return 123
}

console.log(texo_ou_numero(false))