const fabricantes = ['mercedes','BMW', 'fiat']
function imprimir(nome, indice){
  //template string usa crase (``)
    console.log(`${indice + 1}. ${nome}`);
    
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
})