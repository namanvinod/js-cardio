const cardio1 = require('./cardio-1')

const reverseString = cardio1.reverseString
const anagram = cardio1.anagram

// const reverseStr = cardio1.reverseStr
// const reverseStr_Reduce = cardio1.reverseStr_Reduce
// const reverseStr_Spread = cardio1.reverseStr_Spread

const reverseStrTests = (reverseStrFn) => {
    test(
        'Reverses a string',
        () => expect(reverseStrFn('hEllo')).toBe('ollEh')
    )
    test(
        'Returns empty string if input is null',
        () => expect(reverseStrFn(null)).toBe('')
    )
    test(
        'Returns empty string if input is undefined',
        () => expect(reverseStrFn(undefined)).toBe('')
    )
    test(
        'Reverses input string ignoring trailing or leading whitespaces',
        () => expect(reverseStrFn('  hello    ')).toBe('olleh')
    )
}

const anagramTests = (anagramFn) => {
    test(
        'checks anagram for two anagram strings',
        () => expect(anagramFn('Asdf', 'fsad')).toBeTruthy()
    )
    test(
        'checks anagram for two anagram strings with capital letters',
        () => expect(anagramFn('AsDf', 'FsaD')).toBeTruthy()
    )
    test(
        'checks anagram for two anagram strings with leading whitespace',
        () => expect(anagramFn('AsDf', '    FsaD  ')).toBeTruthy()
    )
    test(
        'checks anagram for two non-anagram strings',
        () => expect(anagramFn('AsDfff', 'FsaD')).toBeFalsy()
    )
    test(
        'checks anagram for two empty string',
        () => expect(anagramFn('', '')).toBeFalsy()
    )
    test(
        'checks anagram for two empty strings with whitespace',
        () => expect(anagramFn('', '    ')).toBeFalsy()
    )
    test(
        'checks anagram for string and null',
        () => expect(anagramFn('AsDf', null)).toBeFalsy()
    )
    test(
        'checks anagram for string and undefined',
        () => expect(anagramFn('AsDf', undefined)).toBeFalsy()
    )
    test(
        'checks anagram for null and undefined',
        () => expect(anagramFn(null, undefined)).toBeFalsy()
    )
    test(
        'checks anagram for two null',
        () => expect(anagramFn(null, null)).toBeFalsy()
    )
    test(
        'checks anagram for undefined and undefined',
        () => expect(anagramFn(undefined, undefined)).toBeFalsy()
    )
}

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
    'Are two strings anagram',
    () => anagramTests(anagram.isAnagram)
)

describe(
    'Are two strings anagram using reduce',
    () => anagramTests(anagram.isAnagram_Reduce)
)
