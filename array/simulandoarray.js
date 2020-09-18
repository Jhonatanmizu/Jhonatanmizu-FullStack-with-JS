const quasearray = {
    0: 'Rafael', 1: 'João', 2: 'ken'
}
console.log(quasearray);
Object.defineProperty(quasearray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})
console.log(quasearray[0]);
const meuArray = ['rafa', 'sam', 'min']
console.log(quasearray.toString(), meuArray);