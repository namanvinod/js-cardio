const reverseStrTests = require('./test-lists/reverse-string-tests')
const anagramTests = require('./test-lists/anagram-tests')
const convertCaseTests = require('./test-lists/convertCase-tests')

const cardio1 = require('./src/cardio-1')
const { reverseStr, reverseStr_Reduce, reverseStr_ReduceRight, reverseStr_Spread } = require('./src/reverse-string')
const { isAnagram, isAnagram_Reduce } = require('./src/anagram')
const { convertCase_array_map, convertCase_matchAll, convertCase_regex } = require('./src/convert-case')

describe(
    'Reverse String Test Suite using array methods',
    () => reverseStrTests(reverseStr)
)

describe(
    'Reverse String Test Suite using reduce',
    () => reverseStrTests(reverseStr_Reduce)
)

describe(
    'Reverse String Test Suite using spread operator',
    () => reverseStrTests(reverseStr_Spread)
)

describe(
    'Reverse String Test Suite using reduceRight',
    () => reverseStrTests(reverseStr_ReduceRight)
)

describe(
    'Are two strings anagram',
    () => anagramTests(isAnagram)
)

describe(
    'Are two strings anagram using reduce',
    () => anagramTests(isAnagram_Reduce)
)

describe(
    'Convert Case',
    () => convertCaseTests(convertCase_array_map)
)

describe(
    'Convert Case with Regex',
    () => convertCaseTests(convertCase_regex)
)

// describe(
//     'Convert Case with Match All',
//     () => convertCaseTests(convertCase_matchAll)
// )