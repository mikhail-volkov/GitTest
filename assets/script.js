function sum(...arg) {
    const summ = arg.reduce((acc, item) => {
        return acc + item
    }, 0)

    return summ
}

function diff(...arg) {
    console.log(acc)
    const dif = arg.reduce((acc, item) => {
        return acc + -item
    }, 0)
    return dif
}