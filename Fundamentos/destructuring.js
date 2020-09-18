const pessoa = {
  nome: 'Ana',
  idade: 18,
  endereço: {
    Bairro: 'Rua do catu',
    número: 123,
    cep: 4801020
  }
}
const { nome, idade} = pessoa
console.log(nome, idade);
const {endereço: { cep, Bairro,}} = pessoa
console.log(cep , Bairro);
