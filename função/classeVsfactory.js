class Pessoa {
constructor(nome){
    this.nome = nome
}
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()
//////
const Pessoa2 = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p2 = Pessoa2('jack')
p2.falar()