let nota = 4.5

switch (Math.ceil(nota)) {
    case 10:
        console.log('a+')
        break
    case 9:
        console.log('a')
        break
    case 8:
        console.log('b+')
        break
    case 7:
        console.log('b')
        break // é preciso ter um break pois se entrar em algum caso vai entrar em todo resto!
    case 6:
        console.log('c+')
        break
    case 5: //não precisa estar na mesma linha
        console.log('c')
        break
    case 4:
        console.log('d+')
        break
    case 3:
        console.log('d')
        break
    case 2:
        console.log('e+')
        break
    case 1:
        console.log('e')
        break
    case 0:
        console.log('f')
        break
    default:
        console.log('nota inválida')
}