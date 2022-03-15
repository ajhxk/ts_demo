class XJJ {
    constructor(
        private _age: number
    ) {

    }
    get age() {
        return this._age
    }
    set age(age: number) {
        this._age = age
    }
}

const x1 = new XJJ(29)
console.log(x1.age)
x1.age = 2
console.log(x1.age)


// static 
class Girl {
    static sayLove() {
        return 'I V U'
    }
}
console.log(Girl.sayLove())
export { }