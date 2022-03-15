class Person {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}

const p1 = new Person('a')
console.log(p1.name)

class Person2 {

    constructor(public name: string) {
        this.name = name
    }
}

const p2 = new Person2('p2')
console.log(p2.name)


class Teacher extends Person2 {
    constructor(public age: number, public name: string) {
        super(name)
    }
}

const t1 = new Teacher(1, 't1')
console.log(t1.name)


export { }