const reverseStrTests = require('./test-lists/reverse-string-tests')
const anagramTests = require('./test-lists/anagram-tests')
const convertCaseTests = require('./test-lists/convertCase-tests')

const cardio1 = require('./src/cardio-1')
const reverseString = cardio1.reverseString
const anagram = cardio1.anagram
const convertCase = cardio1.convertCase

describe(
    'Reverse String Test Suite using array methods',
    () => reverseStrTests(reverseString.reverseStr)
)

describe(
    'Reverse String Test Suite using reduce',
    () => reverseStrTests(reverseString.reverseStr_Reduce)
)

describe(
    'Reverse String Test Suite using spread operator',
    () => reverseStrTests(reverseString.reverseStr_Spread)
)

describe(
    'Reverse String Test Suite using reduceRight',
    () => reverseStrTests(reverseString.reverseStr_ReduceRight)
)

describe(
    'Are two strings anagram',
    () => anagramTests(anagram.isAnagram)
)

describe(
    'Are two strings anagram using reduce',
    () => anagramTests(anagram.isAnagram_Reduce)
)

describe(
    'Convert Case',
    () => convertCaseTests(convertCase.convertCase_Array_Map)
)

describe(
    'Convert Case with Regex',
    () => convertCaseTests(convertCase.convertCase_regex)
)

describe(
    'Convert Case with Match All',
    () => convertCaseTests(convertCase.convertCase_regex)
)