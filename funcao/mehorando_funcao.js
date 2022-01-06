const d1 = 10
const m1 = 4
const a1 = 2020

function exibirData1() {
    console.log(`dia: ${d1}`)
    console.log(`mes: ${m1}`)
    console.log(`ano: ${a1}`)
}

function exibirData2() {
    console.log(`${d1}/${m1}/${a1}`)
}

exibirData1()
exibirData2()

//podemos melhora essas funções fazendo apenas uma e passando a usar parâmetros

function exibirData(d, m, a) {
    console.log(`${d}/${m}/${a}`)
}
//usando diferentes dados podemos usar a mesma função

exibirData(d1, m1, a1)