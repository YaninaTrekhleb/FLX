// eslint-disable-next-line no-unused-vars
function isInteger(inputNumber) { 
    for (let number = 2; number < inputNumber; number++) {
        if (inputNumber % number === 0) {
            return false;
        }
    }

    return true;
}