function salarioMes(horas = 0, valor = 0) {
    let x = horas * valor * 4
    return `O salário do funcinário será ${x} nesse mes`
}

console.log(salarioMes(42, 11))