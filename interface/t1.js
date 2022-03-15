"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenResume = (name, age, bust) => {
    age < 24 && bust >= 90 && console.log(`${name}进入面试`);
    (age >= 24 || bust < 90) && console.log(`${name}被淘汰`);
};
const getResume = (name, age, bust) => {
    console.log(`${name} 年龄是 ${age}`);
    console.log(`${name} 胸围是 ${bust}`);
};
screenResume('dj', 18, 74);
getResume('dj', 18, 90);
const girl = {
    name: 'dj',
    age: 18,
    bust: 94
};
const screenResume1 = (girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
    (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
};
const getResume1 = (girl) => {
    console.log(`${girl.name} 年龄是 ${girl.age}`);
    console.log(`${girl.name} 胸围是 ${girl.bust}`);
};
screenResume1(girl);
getResume1(girl);
const screenResume2 = (girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
    (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
};
const getResume2 = (girl) => {
    console.log(`${girl.name} 年龄是 ${girl.age}`);
    console.log(`${girl.name} 胸围是 ${girl.bust}`);
};
screenResume2(girl);
getResume2(girl);
