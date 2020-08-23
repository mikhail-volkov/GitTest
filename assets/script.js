function sum(...arg) {
    const summ = arg.reduce((acc, item) => {
        return acc + item
    }, 0)

    return summ
}

function mult(...arg) {
    const mul = arg.reduce((acc, item) => {
        return acc * item
    }, 1)

    return mul
}

function sub(a, b) {
    return a ** b
}