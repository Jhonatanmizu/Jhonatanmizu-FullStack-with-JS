const pessoa = {
    nome: 'jack',
    sobrenome:'atlas',
    idade: 18,
    saudação: 'bom dia',
    falar(){
        console.log(this.saudação)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e o mundo oo
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();