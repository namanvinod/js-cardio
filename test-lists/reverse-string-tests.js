const reverseStrTestList = (reverseStrFn) => {
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

module.exports = reverseStrTestList