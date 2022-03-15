
// 基础静态类型
// 对象类型

let count: number = 1
// 对象
const xh0: {
    name: string,
    age: number
} = {
    name: 'xh',
    age: 10
}
// 数组
const xjjs: string[] = ['q', 'w', 'e', 'r']
// 类
class Person {}
const xh1: Person = new Person()
// 函数
const seexjj: () => string = () => {
    return 'see xjj'
}

interface XJJ {
    uname: string,
    age: number
}

const xh: XJJ = {
    uname: 'x',
    age: 18
}

export {}