const data = {
    dia: 01,
    mes: 02,
    ano: 2020,
    dataFormatada: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
console.log(data.dataFormatada())

 //mudando o valor do atributo apesar do objeto ser declarado constante

data.mes = 05
data.dia = 15

//criando outro atributo

data.nome = 'isis'

console.log(data.dataFormatada(), data.nome)

