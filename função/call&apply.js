function getPreco(imposto = 0, moeda = 'R$') {
return  `${moeda} ${this.preco *  (1 - this.desc) * (1 + imposto)} `
    
}
const produto = {
nome: 'caixa',
preco: 20,
desc: 0.15,
getPreco
}
console.log(getPreco())
console.log(produto.getPreco())