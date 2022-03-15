"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class XiaoJieJie {
    constructor() {
        this.name = 'xh';
        this.age = 18;
        this.bust = 90;
    }
    say() {
        return '欢迎';
    }
}
const girl = {
    name: 'dj',
    age: 18,
    bust: 94,
    waistline: 21,
    sex: '女',
    say() {
        return '欢迎';
    }
};
const screenResume1 = (girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
    (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
};
const getResume1 = (girl) => {
    console.log(`${girl.name} 年龄是 ${girl.age}`);
    console.log(`${girl.name} 胸围是 ${girl.bust}`);
    girl.waistline && console.log(`${girl.name} 腰围是 ${girl.waistline}`);
    girl.sex && console.log(`${girl.name} 性别是 ${girl.sex}`);
    girl.say && console.log(`${girl.name} 说 ${girl.say()}`);
};
screenResume1(girl);
getResume1(girl);
