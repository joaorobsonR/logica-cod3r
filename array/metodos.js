const n = [4,5,6,7,8,6,10]

n[0] = 1
n.push(11) //adiciona um novo elemento
let n2 = n.concat(12, 13, 14) //concatena mais não pode sobrescrever

console.log(n)
console.log(n.join(' $ ')) //junta em uma string
console.log(n.indexOf(10)) //devolve o indereço do valor colocado
console.log(n.includes(2)) //procura o valor e retorna um boolean
console.log(n.sort()) //deixa em ordem crescente
console.log(n2)

// lembrete alguns metodos podem modificar o array!!!

n.splice(1, 2) //exclui o elemento a partir do index até a quantidade estabelecida
console.log(n)
console.log(n.pop()) //exclui o ultimo elemento do array

console.log(n2) // o array n2 sofreu as mudanças feitas no array n