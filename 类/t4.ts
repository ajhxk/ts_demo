class Person {
    public readonly _age: number
    constructor(public name: string, age: number) {
        this._age = age
    }
}

const p1 = new Person('p1', 1)
console.log(p1.name)
console.log(p1._age)
// p1._age = 2

abstract class Girl {
    abstract skill()
}

class Waiter extends Girl {
    skill() {
        console.log('倒水')
    }
}

class BaseTeacher extends Girl {
    skill() {
        console.log('按摩')
    }
}

class SeniorTeacher extends Girl {
    skill() {
        console.log('洗脚')
    }
}
export { }