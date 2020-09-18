Number.prototype.entre = function (inicio , fim ){
    return this >= inicio && this <= fim
}
const imprimirresultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Quandro de honra');
    }
    else if(nota.entre(7, 8)){
        console.log('Aprovado');
    }
    else if (nota.entre(4, 6.99)){
        console.log('Recuperação');
    }
    else if (nota.entre(2, 3)){
    console.log('Reprovado');
    }
    else{
        console.log('Nota inválida');
    }
}
imprimirresultado(2)