const testFunctions = () => {
    function capitalize(string) {
        return string[0].toUpperCase() + string.substring(1)
    }

    return {
        capitalize,
    }
}

module.exports = testFunctions;