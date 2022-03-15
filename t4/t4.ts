function add(a: number, b: number): number {
    return a + b
}

const total = add(1, 2)

function sayHello(): void {
    console.log('hello')
}

function errorFunction(): never {
    throw new Error()
}

function forNever(): never {
    while (true) { }
}

function addd({ a, b }: { a: number, b: number }) {
    return a + b
}

const tota = addd({ a: 1, b: 2 })

function getNum({ one }: { one: number }) { }

const aa = getNum({ one: 1 })

export { }