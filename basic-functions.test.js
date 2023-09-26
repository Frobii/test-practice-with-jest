const testFunctions = require('./basic-functions');

test('Capitlizes the first letter of a string', () => {
    expect(testFunctions().capitalize('hello!')).toBe('Hello!');
})

