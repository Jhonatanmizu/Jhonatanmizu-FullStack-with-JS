// Object.preventExtensions

const produto = Object.preventExtensions({
    nome:'jaca', preco: 100, tag: 'promoção'
})
console.log("extensível:", Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'azul'
delete produto.tag
console.log(produto);
//Object Seal
const pessoa = {
    nome: 'jack', idade: 19,
}
Object.seal(pessoa)
delete pessoa.nome
console.log('Selado', Object.isSealed(pessoa));