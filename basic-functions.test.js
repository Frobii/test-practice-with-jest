const testFunctions = require('./basic-functions');

test('Capitlizes the first letter of a string', () => {
    expect(testFunctions().capitalize('hello!')).toBe('Hello!');
})

test('Reverses a string', () => {
    expect(testFunctions().reverse('!dlroW olleH')).toBe('Hello World!')
})

test('Calculator can add', () => {
    expect(testFunctions().calculator().add(1, 10)).toEqual(11)
})

test('Calculator can subtract', () => {
    expect(testFunctions().calculator().subtract(10, 1)).toEqual(9)
})

test('Calculator can multiply', () => {
    expect(testFunctions().calculator().multiply(10, 11)).toEqual(110)
})

test('Calculator can divide', () => {
    expect(testFunctions().calculator().divide(90, 10)).toEqual(9)
})

test('Caesar cipher can encode a string which wraps the alphabet', () => {
    expect(testFunctions().caesarCipher().encodeString('zyzz',3)).toBe('cbcc')
})

test('Caesar cipher can encode a string which wraps the alphabet', () => {
    expect(testFunctions().caesarCipher().encodeString('zyzz',3)).toBe('cbcc')
})

test('Caesar cipher maintains case', () => {
    expect(testFunctions().caesarCipher().encodeString('ZyZZ',3)).toBe('CbCC')
})

test('Caesar cipher maintains punctuation', () => {
    expect(testFunctions().caesarCipher().encodeString('!!! Hellooo Wooorld !!!', 11)).toBe('!!! Spwwzzz Hzzzcwo !!!')
})