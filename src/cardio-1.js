// Reverse String
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

// Check Anagram

isAnagram = (str1, str2) => {
    if (!str1 || !str2 || str1.trim() === '' || str2.trim() === '')
        return false
    return getCharSet(str1) === getCharSet(str2)
}

isAnagram_Reduce = (str1, str2) => {
    if (!str1 || !str2 || str1.trim() === '' || str2.trim() === '')
        return false
    return getCharSet_Reduce(str1) === getCharSet_Reduce(str2)
}

getCharSet = (str) => [...(str || '').trim().toLowerCase()].sort().join('')

getCharSet_Reduce = (str) => {
    return [...(str || '').trim().toLowerCase()]
        .reduce(
            (acc, curr) => [...acc, curr]
            , []
        )
        .sort()
        .join('')
}

convert_subStr_slice = (str) => {

}

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
    str = sanitizeString(str)
    if (isValidString(str)) {
        return str.matchAll(/(\s+)/).map(word => {
            if (sanitizeString(word) === '')
                return word
            let letterArr = word.split('')
            letterArr[0] = letterArr[0].toUpperCase()
            return letterArr.join('')
        }).join('')
    }
    
    return ''
}

convertCase_Array_Map = (str) => {
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

const maskStr = (str, maskStart = 0, maskEnd = 0, maskChar = '*') => {

}

const maskStr_pad = (str, maskStart = 0, maskLength = 1, maskChar = '*') => {
    
}

function maxOccurance(str) {

}

function longestWord(str) {

}

function flatArr(arr) {

}

// Split an array into chunked arrays of a specific length
// ex. chunkArr([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
function chunkArr(arr) {

}

// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {

}

// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
function addAll() { }

function sumAllPrimes(num) { }

// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() { }

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight() { }

// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() { }

// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
function evenOddSums() { }

exports.reverseString = {
    reverseStr,
    reverseStr_Reduce,
    reverseStr_Spread,
    reverseStr_ReduceRight
}

// exports.reverseStr = reverseStr
// exports.reverseStr_Reduce = reverseStr_Reduce
// exports.reverseStr_Spread = reverseStr_Spread

exports.anagram = {
    isAnagram: isAnagram,
    isAnagram_Reduce: isAnagram_Reduce
}

exports.convertCase = {
    convertCase_Array_Map,
    convertCase_regex,
    convertCase_matchAll
}