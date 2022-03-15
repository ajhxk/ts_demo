// 泛型

function join(first: string | number, second: string | number) {
    return `${first}${second}`
}

join('a', 1)

function join2<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`
}

join2<string>('a', 'b')
join2<number>(1, 1)

// 泛型 中数组的使用
function myFUnc<ANY>(params: ANY[]) {
    return params
}
myFUnc<string>(['1', '2'])


function myFUnc2<ANY>(params: Array<ANY>) {
    return params
}
myFUnc2<string>(['1', '2'])

function myFUnc3<T>(params: Array<T>) {
    return params
}
myFUnc2<string>(['1', '2'])

function join3<T, P>(first: T, second: P) {
    return `${first}${second}`
}
join3<string, number>('a', 1)

export {}