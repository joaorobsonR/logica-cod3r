const cliente = {
    codigo: 124587,
    nome: 'Ana',
    vip: true,
    endereco: {
        rua: 'das camelias',
        bairro: 'jardim primavera',
        ref: [
            {ponto: 'hospital', proximo: true}, //para imprir qualquer ponto, basta colocar os indices do array
            {ponto: 'shopping', proximo: false},
        ],
    },
    filhos: ['joão, maria']
}

console.log(cliente.endereco.ref[0])
console.log(cliente.codigo)