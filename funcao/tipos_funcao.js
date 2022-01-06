//função com parâmetro e com retorno, obs: utilidade muito maior
function somar(a , b) {
    return a + b
}
let resultado = somar(30, 56)
console.log(resultado)
console.log(somar(30, 56))

//função com parametro e sem retorno o resultado não pode ser utilizado fora da função
function multiplica(a , b) {
    console.log(a * b)
}
multiplica(21, 10)

// função sem parametro e com retorno
function mostraData() {
    return new Date()
}
console.log(mostraData())

//função sem parameetro e sem retorno
function mostraHora() {
    console.log(new Date().getHours())
}
mostraHora()

/*
uma visão minha sobre os tipos de funções até agora, é que todas
são muito importantes e tem suas utilidades em determinadas situações,
apesar de funções com retorna e entrada de parametros ser mais utilizadas,
e essa questão que ainda tinha dúvidas, quando usar uma função com retorno 
ou sem retorno, e até o momento consegui perceber que quando é preciso
armazenar um valor ou usar esse valor em outra operação po exemplo, usamos
uma função com retorno, caso contrário não é necessário.
*/