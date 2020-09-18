function getinteiroaleatori(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}
let opcao = 0
while (opcao != -1) {
    opcao = getinteiroaleatori(-1, 10)
    console.log('a opcao foi', opcao);
    
}
console.log('até a proxima');