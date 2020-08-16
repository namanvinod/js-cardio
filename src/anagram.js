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

module.exports = {
    isAnagram,
    isAnagram_Reduce
}