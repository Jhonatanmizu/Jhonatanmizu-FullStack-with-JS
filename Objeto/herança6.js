function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
    
}
const aula1 = new Aula('Bem vindo\n', 123)
const aula2 = new Aula('até breve\n', 456)
console.log(aula1, aula2);

//simulando o new

function novo(f, ...params) {
const obj = {}
obj.__proto__ = f.prototype
f.apply(obj, params)
return obj    
}
const aula3 = novo(Aula, 'Bem vindo', 8910)
const aula4 = novo(Aula, 'Até', 213)
console.log(aula3, aula4);