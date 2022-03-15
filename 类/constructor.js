"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p1 = new Person('a');
console.log(p1.name);
class Person2 {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const p2 = new Person2('p2');
console.log(p2.name);
class Teacher extends Person2 {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
}
const t1 = new Teacher(1, 't1');
console.log(t1.name);
