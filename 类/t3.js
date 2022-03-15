"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class XJJ {
    constructor(_age) {
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
const x1 = new XJJ(29);
console.log(x1.age);
x1.age = 2;
console.log(x1.age);
class Girl {
    static sayLove() {
        return 'I V U';
    }
}
console.log(Girl.sayLove());
