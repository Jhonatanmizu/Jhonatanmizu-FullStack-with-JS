// usando notação literal
const obj1 = {}
console.log(obj1);
//Object em js
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);
//função construtora

function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new produto('Caneta', 7.99, 0.5)
const p2 = new produto('notebook', 65, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory

function criarfuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario(){
            return (salariobase / 30) * (30 -faltas)
        }
    }
}
const f1 = criarfuncionario(' João', 1200 , 10)
console.log(f1.getsalario());
