const pilotos = ['vetel', 'hamilton', 'alonso', 'massa']
pilotos.pop()
console.log(pilotos);
pilotos.push('vestapen')
console.log(pilotos);
pilotos.shift()//remove primeiro elemento
console.log(pilotos);
pilotos.unshift('jack')
console.log(pilotos);
//splice pode adicionar ou remover
//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos);
//remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunspiloto = pilotos.slice(2)//novo array a partir do indíce
console.log(algunspiloto);
const algunspiloto2 = pilotos.slice(1, 4)
console.log(algunspiloto2);
