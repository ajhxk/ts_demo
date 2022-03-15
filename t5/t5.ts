/**
 * 数组类型定义
 */

let numberArr: number[]

numberArr = [1, 2, 3]

let strArr: string[]
strArr = ['a', 'b']

let undefinedArr: undefined[]
undefinedArr = [undefined, undefined]

let arrNumStr: (number | string)[]
arrNumStr = [1, '2']


let xjjs: { age: number, name: string }[] = [
    {
        age: 1,
        name: 'a'
    },
    {
        age: 2,
        name: 'b'
    }
]

// type alias 类别别名
type Lady = { name: string, age: number }
let xjjs2: Lady[] = [
    {
        age: 1,
        name: 'a'
    },
    {
        age: 2,
        name: 'b'
    }
]

// 类
class Madam {
    name: string;
    age: number;
}

let xjjs3: Madam[] = [
    {
        age: 1,
        name: 'a'
    },
    {
        age: 2,
        name: 'b'
    }
]

export { }