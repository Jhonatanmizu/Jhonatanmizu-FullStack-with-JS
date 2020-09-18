function area(base, altura){
    const area = base * altura
    if (area > 20) {
        console.log('acima do permitido:',area);
        
    }
    else{
        return area
    }
    
}
console.log(area(2, 7))