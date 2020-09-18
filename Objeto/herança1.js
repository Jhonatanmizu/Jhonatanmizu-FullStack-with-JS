const ferrari = {
  modelo:'f40',
  velomax: 340,

}
const volvo = {
  modelo:'v40',
  velomax: 300,
}
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__)
