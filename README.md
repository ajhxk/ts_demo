# TypeScript


## 安装

```
npm install typescript -g
// tsc ./a.ts 手动编译
```

```
npm install -g ts-node@8.5.4
// ts-node ./a.ts 执行ts文件
```

---

## 静态类型

- 如何定义静态类型
```
let count: number = 1
count = 2   
count = '3'  //错误
```

- 自定义静态类型

```
interface Animal {
    age: number,
    name: string
}

const a: Animal = {
    age: 1,
    name: 'cat'
}

```

---

## next

测试