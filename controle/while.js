let contador = 0
let conttadorTotal = 0
let quant = 0

while ( Math.random() < 0.5) {
    console.log('ainda não')
    quant ++
} // aqui é usado sem um contador
console.log('agora sim foi necessários', quant, 'lops')

while (contador < 20) {
    resultado = Math.random()
    if (resultado >= 0.5) {
        contador += 1
    }
    conttadorTotal ++
}

console.log('a quantidade de lops foi', conttadorTotal)