const screenResume = (name: string, age: number, bust: number) => {
    // const isNext = () => age < 24 && bust >= 90
    // isNext() ? console.log(`${name}进入面试`) :console.log(`${name}被淘汰`)
    age < 24 && bust >= 90 && console.log(`${name}进入面试`);
    (age >= 24 || bust < 90) && console.log(`${name}被淘汰`);

}

const getResume = (name: string, age: number, bust: number) => {
    console.log(`${name} 年龄是 ${age}`);
    console.log(`${name} 胸围是 ${bust}`);
}

screenResume('dj', 18, 74)
getResume('dj', 18, 90)

// 接口

interface Girl {
    name: string;
    age: number;
    bust: number;
    // 非必填
    waistline ?: number;
}

const girl = {
    name: 'dj',
    age: 18,
    bust: 94
}

const screenResume1 = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
    (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
}

const getResume1 = (girl: Girl) => {
    console.log(`${girl.name} 年龄是 ${girl.age}`);
    console.log(`${girl.name} 胸围是 ${girl.bust}`);
}


screenResume1(girl)
getResume1(girl)


type Girl2  = {
    name: string,
    age: number,
    bust: number,
    waistline ?: number
}

const screenResume2 = (girl: Girl2) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name}进入面试`);
    (girl.age >= 24 || girl.bust < 90) && console.log(`${girl.name}被淘汰`);
}

const getResume2 = (girl: Girl2) => {
    console.log(`${girl.name} 年龄是 ${girl.age}`);
    console.log(`${girl.name} 胸围是 ${girl.bust}`);
}


screenResume2(girl)
getResume2(girl)

export { }