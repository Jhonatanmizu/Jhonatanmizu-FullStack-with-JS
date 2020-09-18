const imprimirresultado = function(nota) {
   switch (Math.floor(nota)){
        case 10:
    case 9:
            console.log('Quadro de Honra\n');
    break
        case 8:
    case 7:
        console.log('Aprovado');
    break    
        case 4:
    case 3:
        console.log('Reprovado');
        break
    default:
        console.log('nota inválida');
   }
    
}
imprimirresultado(11)