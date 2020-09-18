const soma = function(x, y) {
    return x + y
    
}
const imprimirresultado = function(a, b, operação = soma) {
    console.log(operação(a, b));
    
}
imprimirresultado(3, 4, function(a ,b){
    return a - b
    
})