const anagramTestList = (anagramFn) => {
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

module.exports = anagramTestList