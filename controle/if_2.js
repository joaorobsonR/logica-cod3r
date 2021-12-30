const nota = 4;

if (nota >= 9) {
    console.log('honra de classe')
    console.log('parabéns')
}

console.log('fim');

/*
apesar das poucas linhas nesse exercicio foi explicado
novamente um conceito muito importante sobre blocos, que
é iniciado com os {}, sem os colchetes não é identificado 
o bloco é apenas a sentença seguite da condição é executada,
diferente dao Python onde não é necessário os colchetes.
*/

const notaex = 4;

if (notaex >= 7)
    console.log('honra de classe')
    console.log('parabéns')// essa sentença ainda vai ser executada apesar da indentação

console.log('fim');