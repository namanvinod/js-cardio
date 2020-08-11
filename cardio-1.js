function reverseStr(str) {
    return (str || '').trim().split('').reverse().join('')
}

function reverseStr_Reduce(str) {
    let strArr = (str || '').trim().split('')
    
    return (
            strArr
                .reduce(
                    (acc, val, index) => {
                        acc[strArr.length - 1 - index] = val
                        return acc
                    }
                    , Array(strArr.length).fill(0)
                )
                .join('')
        )
}

exports.reverseStr = reverseStr
exports.reverseStr_Reduce = reverseStr_Reduce