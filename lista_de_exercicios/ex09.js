function repitir(mostrar , repete) {
    let lista = []
    for (let i = 1; i <= repete; i++) {
        lista.push(mostrar)
    }
    return lista
}

console.log(repitir('codigo', 2))
console.log(repitir(7, 3))