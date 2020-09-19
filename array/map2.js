const carrinho = [
  '{"nome": "lápis", "preco": 10}',
  '{"nome": "caderno", "preco": 15}',
  '{"nome": "caneta", "preco": 5}',
]
//retornar  um array apenas com preco
const paraobj = json => JSON.parse(json)
const apenaspreco = produto => produto.preco
const resultado = carrinho.map(paraobj).map(apenaspreco)
console.log(resultado);
