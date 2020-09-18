//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto.preco = 300
produto['Marca'] = 'Gaymer'
console.log(produto);
delete produto.nome

const carro = {
    Modelo:'Nissan',
    Valor: 89000,
    proprietário: {
        Nome:'Julio',
        Idade: 69,
        endereco: {
            Cep:48090420,
            Bairro:'JAca'
        }
    }


}
console.log(carro.proprietário);