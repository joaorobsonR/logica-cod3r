// função construtora é semelhante a Classe em java, cria a estrutura de um objeto

function Data(dia = 1, mes = 01, ano = 2000, nome = '') {
    this.dia = dia
    this.mes = mes
    this.ano = ano
    this.nome = nome

    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano} nome: ${this.nome}` //obs:se não colocar this vai usar o valor passado como parametro
    }
}

const d1 = new Data(15, 05, 2020, 'isis') //cria um novo objeto da classe construtora

console.log(d1)             //mostra o objeto criado
console.log(d1.exibir())    //invoca a função exibir da funão construtora

const d2 = new Data(24, 09, 1993, 'maria')

console.log(d2.exibir())

const d4 = new Data()

console.log(d4)

//assim podemos usar o reuso, não precisando duplicar codigos, deixando trabalho mais simples
// criando objetos a partir de uma classe(estrutura)