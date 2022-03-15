"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
}
const p1 = new Person('p1', 1);
console.log(p1.name);
console.log(p1._age);
class Girl {
}
class Waiter extends Girl {
    skill() {
        console.log('倒水');
    }
}
class BaseTeacher extends Girl {
    skill() {
        console.log('按摩');
    }
}
class SeniorTeacher extends Girl {
    skill() {
        console.log('洗脚');
    }
}
