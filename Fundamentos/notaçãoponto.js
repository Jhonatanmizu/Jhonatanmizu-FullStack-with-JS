console.log(Math.ceil(6.1));
const obj = {}
obj.nome = 'nada'
//obj['nome'] = 'nada2'
console.log(obj);
function Obj (nome) {
//this torna público
    this.nome = nome
}
console.log(Obj);
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('teclado')
console.log(obj2.nome , obj3.nome);
