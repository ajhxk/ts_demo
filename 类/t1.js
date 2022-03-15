"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lady {
    constructor() {
        this.content = 'Hi 帅哥';
    }
    sayHello() {
        return this.content;
    }
}
class XJJ extends Lady {
    sayHello() {
        return super.sayHello() + ',你好';
    }
    sayLove() {
        return 'I LOVE YOU';
    }
}
const l2 = new XJJ();
console.log(l2.sayHello());
console.log(l2.sayLove());
