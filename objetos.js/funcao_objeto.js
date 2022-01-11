// simplificar o código na aula anterior

function exibirData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const ani_isis = exibirData(15, 05, 2020)

console.log(ani_isis.exibir())