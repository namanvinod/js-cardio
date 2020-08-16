const { sanitizeString, isValidString } = require('./utility')

function reverseStr(str) {
    return (str || '').trim().split('').reverse().join('')
}

function reverseStr_Reduce(str) {
    let strArr = (str || '').trim().split('')

    return (
        strArr
            .reduce(
                (acc, curr, index) => {
                    acc[strArr.length - 1 - index] = curr
                    return acc
                }
                , Array(strArr.length).fill(0)
            )
            .join('')
    )
}

function reverseStr_ReduceRight(str) {
    let strArr = (str || '').trim().split('')

    return (
        strArr.reduceRight(
            (acc, curr) => {
                acc.push(curr)
                return acc
            }, []
        )
            .join('')
    )
}

function reverseStr_Spread(str) {
    return [...(str || '').trim()].reverse().join('')
}

function reverseStr_Recursion(str) {

}

module.exports = {
    reverseStr,
    reverseStr_Recursion,
    reverseStr_Reduce,
    reverseStr_ReduceRight,
    reverseStr_Spread
}