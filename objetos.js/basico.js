const produto = {
    nome: 'caneta',
    preco: 2.9,
    desconto: 0.2,
    precoComDesconto: function() {
        return (this.preco * (1 - this.desconto)) //a palavra this serve para referenciar os atributos do proprio bojeto muito importante
    } 
}
//formas de acessar os objetos

console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log('\n')
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto) // essa forma é mais utilizada

console.log(produto.preco * (1 - produto.desconto)) //legal

console.log(produto.precoComDesconto())