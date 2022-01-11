// sem querer fiz esse desafio antes do professor pedir

const dataexibir = {
    nome: 'isis',
    dia: 15,
    mes: 05,
    ano: 2020,
    exibirData: function() {
        return `${this.dia}/${this.mes}/${this.ano}` //referenciar atributo do PROPRIO objeto
    }
}
console.log(dataexibir.exibirData(), dataexibir.nome)