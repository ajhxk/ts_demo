// // 泛型

// class SelectGirl {
//     constructor(private girls: string[]) {

//     }
//     getGirl(index: number): string {
//         return this.girls[index]
//     }
// }

// const sg = new SelectGirl(['a', 'b', 'c'])
// console.log(sg.getGirl(1))

// class SelectGirl3<T> {
//     constructor(private girls: T[]) {}

//     getGirl(index: number): T {
//         return this.girls[index]
//     }
// }

// const sg2 = new SelectGirl3<string>(['a2', 'b2', 'c2'])
// console.log(sg2.getGirl(1))

// interface Girl {
//     name: string
// }

// class SelectGirl3<T extends Girl> {
//     constructor(private girls: T[]) { }

//     getGirl(index: number): string {
//         return this.girls[index].name
//     }
// }

// const sg3 = new SelectGirl3<Girl>([{ name: 'a2' }, { name: 'b2' }, { name: 'c2' }])
// console.log(sg3.getGirl(1))


// 泛型的约束
class SelectGirl3<T extends number | string> {
    constructor(private girls: T[]) { }

    getGirl(index: number): T {
        return this.girls[index]
    }
}

const sg3 = new SelectGirl3<string>(['a2', 'b2', 'c2'])
console.log(sg3.getGirl(1))


export { }

