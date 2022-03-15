class Lady {
    content = 'Hi 帅哥'
    sayHello() {
        return this.content
    }
}

// const l1 = new Lady()
// console.log(l1.sayHello())

class XJJ extends Lady {
    sayHello() {
        return super.sayHello() + ',你好'
    }
    sayLove() {
        return 'I LOVE YOU'
    }
}

const l2 = new XJJ()
console.log(l2.sayHello())
console.log(l2.sayLove())

export {}