const notas = [7 , 8 , 9 , 10, 6]
//sem callback
let notasBaixa = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixa.push(notas[i])
        
    }
    
}
console.log(notasBaixa);
//Com callback
notasBaixa2 = notas.filter(function(nota){
    return nota < 7

})
console.log(notasBaixa2);

const notasalta = notas.filter(nota => nota > 7)
console.log(notasalta);
