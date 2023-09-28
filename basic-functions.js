const testFunctions = () => {
    function capitalize(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    function reverse(string) {
        let reversedString = [];
        for (let i = string.length; i > 0; i -= 1) {
            reversedString.push(string[i - 1])
        }
        return reversedString.join('');
    }

    const calculator = () => {
        function add(a,b) {
            return a + b
        }
        function subtract(a,b) {
            return a - b
        }
        function multiply(a,b) {
            return a * b
        }
        function divide(a,b) {
            return a / b
        }
        return {
            add,
            subtract,
            multiply,
            divide,
        }
    }

    const caesarCipher = () => {
        function isAlphabetical(char) {
            const regex = /^[a-z]+$/;
            return regex.test(char.toLowerCase());
        };
        function isCapitalized(char) {
            if (char.toUpperCase() === char) {
                return true
            } else {
                return false
            };
        };
        function encodeCharacter(char, num) {
            const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            const charPosition = alphabet.indexOf(char.toLowerCase());
            const encodedCharPosition = (num + charPosition) % 26;
            const encodedCharacter = alphabet[encodedCharPosition];
            if (isCapitalized(char)) {
                return encodedCharacter.toUpperCase()
            } else {
                return encodedCharacter
            };
        };
        function encodeString(string, num) {
            let encodedString = ''
            for (const char of string) {
                if (isAlphabetical(char)) {
                    const encodedChar = encodeCharacter(char,num)
                    encodedString += encodedChar
                } else { 
                    encodedString += char
                }
            }
            return encodedString;
        };
        return {
            encodeString,
        };
    }

    function analyzeArray(array) {
        const length = array.length;
        const sum = array.reduce((partialSum, a) => partialSum + a, 0);
        const average = sum / length;
        const min = Math.min(...array)
        const max = Math.max(...array)

        return {
            average,
            min,
            max,
            length
        }
    }

    return {
        capitalize,
        reverse,
        calculator,
        caesarCipher,
        analyzeArray,
    }
}

module.exports = testFunctions;
