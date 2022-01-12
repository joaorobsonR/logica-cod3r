function retornaSinal(a) {
    let concatena = ''
    for(let i = 1; i <= a; i++) {
        concatena += '+'
    }
    return concatena
}

console.log(retornaSinal(2))
console.log(retornaSinal(4))