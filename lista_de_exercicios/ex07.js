function verifica(min, max, num, inclu = false) {
    if (inclu === true) {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    }
    if (inclu === false) {
        if (num > min && num < max) {
            return true
        } else {
            return false
        }
    }
} 

console.log(verifica(10, 100, 50))
console.log(verifica(16, 100, 160))
console.log(verifica(3, 150, 3))
console.log(verifica(3, 150, 3, true))