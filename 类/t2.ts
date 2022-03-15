// 类的内部和类的外部
class Person {
    name: string;
}

const person = new Person()
person.name = 'jspang.com'

console.log(person.name)


class Person1 {

    public name: string;

    public sayHello() {
        console.log(`${this.name} + say Hello`)
    }

    private age: number
    protected sex: boolean
}
const p1 = new Person1()
p1.name = 'jspang1.com'
p1.sayHello()
// 私有变量 只能在内部访问
// p1.age = 1
// 保护变量 只能在内部访问
// p1.sex = false
console.log(p1.name)


class Person2 extends Person1 {
    public sayBye() {
        console.log(` sex: ${this.sex}`);
        // console.log(` age: ${this.age}`)
    }
}


export { }