// Função sem retorno
function somar(a, b){
    console.log(a+b)
}
somar(2, 3)

// Função com retorno
function adicao(a , b = 1){
    return a + b
}
console.log(adicao(2, 4))
console.log(adicao(2))