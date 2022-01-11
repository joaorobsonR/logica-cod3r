class Data {
    constructor(d = 1, m = 1, a = 2000) {
        this.dia = d
        this.mes = m
        this.ano = a
    }
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const n1 = new Data(29, 04, 1992)

console.log(n1.exibir())