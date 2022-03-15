// tsconfig.ts
const person: string = 'jsp'

// noImplicitAny 为false时，允许注解类型any不用刻意标明
function test(name: any) {
    return name
}

function test2(name: any) {
    return name
}

// strictNullChecks false 允许使用null
// const jsp: string = null

export { test }