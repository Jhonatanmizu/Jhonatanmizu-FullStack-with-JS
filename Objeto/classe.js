class lancamento{
    constructor(nome = 'genérico', valor = 0){
        this.nome = nome
        this.valor = valor

    }
}
class ciclofinan{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addlancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorcons = 0
        this.lancamentos.forEach(l => {
            valorcons += l.valor
        })
        return valorcons
    }
    
}
const salario = new lancamento('Salario', 4500)
const divida = new lancamento('luz', -220)
const contas = new ciclofinan(6, 2018)
contas.addlancamento(salario, divida)
console.log(contas.sumario());