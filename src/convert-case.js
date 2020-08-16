const utility = require('./utility')

const { sanitizeString, isValidString } = utility

// /(\s+)/ here paranthesis ensure that matching characters are also included. Here, matching character: 1 or more space
convertCase_regex = (str) => {
    str = sanitizeString(str)
    if (isValidString(str)) {
        return str.split(/(\s+)/).map(word => {
            if (sanitizeString(word) === '')
                return word
            let letterArr = word.split('')
            letterArr[0] = letterArr[0].toUpperCase()
            return letterArr.join('')
        }).join('')
    }

    return ''
}

convertCase_matchAll = (str) => {
    // str = sanitizeString(str)
    // if (isValidString(str)) {
    //     console.log(str.matchAll(/(\s+)/g), [...str.matchAll(/(\s+)/g)][0])
        // return [...str.matchAll(/(\s+)/)].map(word => {
        //     if (sanitizeString(word) === '')
        //         return word
        //     let letterArr = word.split('')
        //     letterArr[0] = letterArr[0].toUpperCase()
        //     return letterArr.join('')
        // }).join('')
    // }
    
    // return ''
}

convertCase_array_map = (str) => {
    str = sanitizeString(str)
    if (isValidString(str)) {
        let letterArr = [...str]
        return letterArr.map((letter, index, letterArr) => {
            if (index === 0 || (letter !== ' ' && (index > 0 && letterArr[index - 1] === ' ')))
                return letter.toUpperCase()
            else
                return letter
        }).join('')
    }
    return ''
}

module.exports = {
    convertCase_array_map,
    convertCase_matchAll,
    convertCase_regex
}

convertCase_matchAll('i Am naman')