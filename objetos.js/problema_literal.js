// nessa aula o professor mostra um problema da forma literal

const d1 = {
    dia: 15,
    mes: 05,
    ano: 2020,
    exibirData: function() {
        return `${this.dia}/${this.mes}/${this.ano}` //referenciar atributo do PROPRIO objeto
    }
}

const d2 = {
    dia: 15,
    mes: 05,
    ano: 2020,
    exibirData: function() {
        return `${this.dia}/${this.mes}/${this.ano}` //referenciar atributo do PROPRIO objeto
    }
}

/*
há uma duplicação de código que sempre deve ser evitada, a solução para esse problema
será feita na outra aula.
*/

function data(dia , mes, ano) {
    return {                                            //retornando um objeto
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

let d = data(29, 04, 1992)

console.log(d.exibir())