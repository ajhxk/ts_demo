"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const total = add(1, 2);
function sayHello() {
    console.log('hello');
}
function errorFunction() {
    throw new Error();
}
function forNever() {
    while (true) { }
}
function addd({ a, b }) {
    return a + b;
}
const tota = addd({ a: 1, b: 2 });
function getNum({ one }) { }
const aa = getNum({ one: 1 });
