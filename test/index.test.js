// String Calculatr Kata

function addNumbers(expression) {
    let expr_splited = expression.split(',')
    return expr_splited.reduce(add, 0)
}

function add (a, b) {
    return Number(a) + Number(b)
}

describe("the string calculator", () => {
    it ("sums two numbers separated by commas", () => {
        expect(addNumbers("1, 2")).toBe(3)
        expect(addNumbers("1, 2, 1")).toBe(4)
    })
})

// xit --> excluye el test indicado
// fit / it.only --> ejecuta el test indicado