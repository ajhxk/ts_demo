interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher {
    anjiao: boolean;
    skill: () => {}
}

// 联合类型
function judgeWho(people: Waiter | Teacher) {
    // 类型保护
    if (people.anjiao) {
        (people as Teacher).skill()
    } else {
        (people as Waiter).say()
    }
}

// 联合类型
function judgeWho2(people: Waiter | Teacher) {
    // 类型保护 
    if ('skill' in people) {
        people.skill()
    } else {
        people.say()
    }
}

// 联合类型
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}

class NumberObj {
    count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}