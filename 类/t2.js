"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
}
const person = new Person();
person.name = 'jspang.com';
console.log(person.name);
class Person1 {
    sayHello() {
        console.log(`${this.name} + say Hello`);
    }
}
const p1 = new Person1();
p1.name = 'jspang1.com';
p1.sayHello();
console.log(p1.name);
class Person2 extends Person1 {
    sayBye() {
        console.log(` sex: ${this.sex}`);
    }
}
