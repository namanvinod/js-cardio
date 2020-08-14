const convertCaseTests = (convertCaseFn) => {
    test(
        'Converts case of a string',
        () => expect(convertCaseFn('i am human')).toBe('I Am Human')
    )

    test(
        'Converts case of a string with leading and trailing whitespace',
        () => expect(convertCaseFn('  i am human   ')).toBe('I Am Human')
    )

    test(
        'Converts case of a string with whitespace in between words',
        () => expect(convertCaseFn('i   am     human')).toBe('I   Am     Human')
    )

    test(
        'Converts case of a string with numbers in it',
        () => expect(convertCaseFn('i   am 1human2')).toBe('I   Am 1human2')
    )

    test(
        'Converts case of a empty string',
        () => expect(convertCaseFn('')).toBe('')
    )

    test(
        'Converts case of a null',
        () => expect(convertCaseFn(null)).toBe('')
    )

    test(
        'Converts case of a undefined',
        () => expect(convertCaseFn(undefined)).toBe('')
    )
}

module.exports = convertCaseTests