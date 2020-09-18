class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class pai extends avo {
    constructor(sobrenome, profissao = 'programador'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends pai {
    constructor(){
        super('silva')
        this
    }
}
const filho = new Filho
console.log(filho);
