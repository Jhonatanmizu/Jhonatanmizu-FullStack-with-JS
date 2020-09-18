//Cadeia de Protótipos (prototype chain)
Object.prototype.attr0 = 'D'
const avo = { attr:'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr);
console.log(pai.attr0);

const carro = {
  velatual: 0,
  velmax: 150,
  aceleramais(delta) {
    if (this.velatual + delta  <= this.velmax) {
      this.velatual += delta
    }else {
      this.velatual = this.velmax
    }

  },
  status(){
    return  `${this.velatual} km/h de ${this.velmax} km/h`;
  }
}
const ferrari = {
  model: 'f40',
  velmax: 300 //shadowing
}
const volvo = {
  model: 'V40',
  status(){
    return  `${this.model}: ${super.status()}`;
  }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari);
console.log(volvo);

volvo.aceleramais(100)
console.log(volvo.status());

ferrari.aceleramais(300)
console.log(ferrari.status());
