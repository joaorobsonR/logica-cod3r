function nota_RetornaConceito(nota) {
    switch (Math.ceil(nota)) {
        case 10: case 9:
            return 'A'      //return sai do switch e da função!
        
        case 8: case 7:
            return 'B'

        case 6: case 5:
            return 'C'
        
        case 4: case 3:
            return 'D'

        case 2: case 1:
            return 'E'

        case 0:
            return 'F'

        default:
            return null
    }
}

console.log(nota_RetornaConceito())