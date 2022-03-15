function getServe(status: number) {
    if (status === 0) {
        return 'massage'
    } else if (status === 1) {
        return 'spa'
    } else if (status === 2) {
        return 'dbj'
    }
}

// const result = getServe(1)
// console.log(result)


const Status = {
    MASSAGE: 0,
    SPA: 1,
    DBJ: 2
}
function getServe1(status: number) {
    if (status === Status.MASSAGE) {
        return 'massage'
    } else if (status === Status.SPA) {
        return 'spa'
    } else if (status === Status.DBJ) {
        return 'dbj'
    }
}
// const result1 = getServe1(1)
// console.log(result1)

enum Status2 {
    MASSAGE = 1,
    SPA = 5,
    DBJ = 3,
    AA
}
function getServe2(status: number) {
    if (status === Status2.MASSAGE) {
        return 'massage'
    } else if (status === Status2.SPA) {
        return 'spa'
    } else if (status === Status2.DBJ) {
        return 'dbj'
    }
}
const result2 = getServe2(1)
console.log(result2)
console.log(Status2)
console.log(Status2.MASSAGE)
console.log(Status2.SPA)
console.log(Status2.DBJ)