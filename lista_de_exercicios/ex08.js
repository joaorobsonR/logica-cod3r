function multpli(a , b) {
    let soma = 0
    for (let i = 1; i <= a; i++) {
        soma += b
    }
    return soma
}

console.log(multpli(5, 5))
console.log(multpli(0, 7))
console.log(multpli(7, 7))