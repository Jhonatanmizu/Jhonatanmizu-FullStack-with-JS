// pessoa 123
const pessoa = {
    nome: 'João',
}
pessoa.nome = 'Pedro'
console.log(pessoa);
// pessoa 456
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome);