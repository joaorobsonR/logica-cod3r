/*
desafio é usar o for para fazer uma meia árvore
de natal sem usar numeros
#
##
###
####
#####
######   desse jeito
*/
let linha = ''

for (let i = 1; i <= 6; i++) {
    linha += '#' //vai concatenando a var linha
    console.log(linha)
}

// agora o desafio, consegui
for (let l = ''; l !== '#######'; l += '#') {
    console.log(l)
}