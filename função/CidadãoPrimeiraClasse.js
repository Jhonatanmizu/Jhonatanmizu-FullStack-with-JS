//Fist Class Object
//Forma Literal 
function fun1() {}
//Armazenar em variável
const fun2 = function() {
    
}
//Armazenar em array
const array = [function(a, b) {
    return a + b
    
}, fun1, fun2]
console.log(array[0](10, 5));

//Armazenar atributo de objeto
const obj = {

}
obj.falar = function(Frase) {
    return 'opa'
    
}
console.log(obj.falar());

//passar funcão como parametro
function run(fun) {
    fun()
    }

run(function() { 
    console.log('executando');
    
})

//uma função pode retornar/ conter uma função
function soma(a , b) {
    return function(c) {
        console.log(a + b + c);
        
    }
    
}
soma(2, 3)(6)