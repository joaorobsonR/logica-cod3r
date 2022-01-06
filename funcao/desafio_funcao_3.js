// DIVIDIR PARA CONQUISTAR
// esse desafio poderia ser resolvido abordando notas invalidas que geram bugs, mas não é a ideia

const nota1 = 10
const nota2 = 1
const nota3 = 2


function mediaNotas(n1, n2) {
    let media = (n1 + n2) / 2
    return media
}

function mediaAluno(n1, n2, n3) {
    if (n2 < n1 && n2 < n3) {
        return mediaNotas(n1, n3)

    } else if (n3 < n1 && n3 < n2) {
        return mediaNotas(n1, n2)

    } else {
        return mediaNotas(n2, n3)
    }
}
let valorFinal = mediaAluno(nota1, nota2, nota3)

function statusAluno(valorFinal) {
    if (valorFinal >= 7) {
        return `aluno aprovado, media final ${valorFinal}`

    } else if (valorFinal < 4) {
        return `aluno reprovado, media final ${valorFinal}`
        
    } else {
        return `aluno recuperação, media final ${valorFinal}`

    }
}

console.log(statusAluno(valorFinal))