import Car, { myObject, sayName } from './app.js';

let myCar = new Car("Ford", 2014);
let myCar2 = new Car("Ford", 2014);

console.log(JSON.stringify(myCar) === JSON.stringify(myCar2));

console.log(myCar.age());

console.log(myCar instanceof Car);
console.log(myCar.name);
console.log(myCar.year);

console.log(myObject);
sayName('Maruf');