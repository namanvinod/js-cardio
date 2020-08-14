const sanitizeString = (str) => (str || '').trim()

const isValidString = (str) => sanitizeString(str) !== ''

module.exports = {
    sanitizeString,
    isValidString
}