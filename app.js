export default class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}


 function sayName(name) {
    console.log(`My name is ${name}!`);
}


 let myObject = {
    id: 1,
    name: 'John'
}

export {sayName, myObject}

// export function sayName(name) {
//     console.log(`My name is ${name}!`);
// }


// export let myObject = {
//     id: 1,
//     name: 'John'
// }

