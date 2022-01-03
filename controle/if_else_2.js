const hora = 9
let saudacao

if (hora < 12) {
    saudacao = 'bom dia'
} else if (hora < 18) {
    saudacao = 'boa tarde'
} else if (hora < 22) {
    saudacao = 'boa noite'
} else {
    saudacao = 'muito tarde'
}

console.log(saudacao)

// mesmo exeplo anterior mas agora usando else if, parecido com o elif do python