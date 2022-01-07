/*
nessa aula foi explicado uma caracteristica da linguagem
JavaScript sobre parametros de uma função, diferente de
outras linguagens quando for estabelecido um numero de parametros
que vai ser passado, caso não seje passodo, não será gerado um erro,
o valor será completado como um undefined, e código continuará sendo
executado.
*/

function somar(a, b, c, d) {
    return a + b + c + d
}

console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6)) //interessante foi desconciderado os outros parametro
console.log('fim')

//proxima aula veremos como atribuir valores default para evitar isso