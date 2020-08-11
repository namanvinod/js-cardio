const cardio1 = require('./cardio-1')

const reverseStr = cardio1.reverseStr
const reverseStr_Reduce = cardio1.reverseStr_Reduce
const reverseStrTests = (reverseStrFn) => {
    test(
        'Reverses a string', 
        () => {
            expect(reverseStrFn('hEllo')).toBe('ollEh')
        }
    ),
    test(
        'Returns empty string if input is null', 
        () => {
            expect(reverseStrFn(null)).toBe('')
        }
    ),
    test(
        'Returns empty string if input is undefined', 
        () => {
            expect(reverseStrFn(undefined)).toBe('')
        }
    ),
    test(
        'Reverses input string ignoring trailing or leading whitespaces', 
        () => {
            expect(reverseStrFn('  hello    ')).toBe('olleh')
        }
    )
}

describe(
    'Reverse String Test Suite using array methods',
    () => {
        reverseStrTests(reverseStr)
    }
)

describe(
    'Reverse String Test Suite using reduce',
    () => {
        reverseStrTests(reverseStr_Reduce)
    }
)