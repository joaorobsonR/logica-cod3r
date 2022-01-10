const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mostrar = ''

for (let n of lista.reverse()) { //lembrete não esquecer de colocara as ()
    if ((n % 2) !== 0) {
        mostrar += n + ' '
    }
}
console.log(mostrar)

//demorei um pouco pra resolver por um proablema que acbei colocabdo um lembrete acima
//resolvi antes de ver do professor mais caredito que tenha um jeito mais fácil

//jeito do professor

const novalista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = novalista.length -2; i >= 0; i -= 2) {
    console.log(novalista[i])
}