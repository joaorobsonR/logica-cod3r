const hora = 14
let saudacao

if (hora < 12) {
    saudacao = 'bom dia'
} else {
    if (hora < 18) {
        saudacao = 'boa tarde'
    } else {
        saudacao = 'boa noite'
    }
}

console.log(saudacao)