/* Closure é o escopo criado quando uma função é declarada
Permite a função acessar e manipular  variáveis externa a função
*/ 
//contexto léxico
const x = 'global'
function fora() {
    const x = 'local'
    function dentro() {
        return x 
        
    }    
    return dentro()
}
const funcao = fora()
console.log(funcao)