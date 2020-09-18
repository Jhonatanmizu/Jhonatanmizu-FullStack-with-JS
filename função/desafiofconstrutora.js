/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()
*/
function CriarPessoa(nome) {
this.nome = nome
this.falar = function(){
    console.log(`Seu nome é ${nome}`)
}
}
const p1 = new CriarPessoa('julio')
p1.falar()