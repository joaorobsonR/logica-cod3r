/*
switch é uma estrutura de controle que não recebe um valor logico
como as anteriores, então a expressão de ira ser recebida é menos complexa
do que as anteriores, mais pode ser muito util dependendo do caso. 
*/

let nota = 12

switch (Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('parabéns')
        break // é preciso ter um break pois se entrar em algum caso vai entrar em todo resto!
    case 6:
    case 5: //não precisa estar na mesma linha
        console.log('recuperação')
        break
    case 4:
    case 3:
    case 2:
        console.log('reprovado')
        break
    case 1:
    case 0:
        console.log('muito reprovado')
        break
    default:
        console.log('nota inválida')
}
/*
o default é para o caso onde a nota não cai em nehum caso
e como está no final não precisa de break, caso não estive
no final  um break seria necessário.
*/