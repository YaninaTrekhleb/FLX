// eslint-disable-next-line no-unused-vars
function reserveNumber(number) {
    const isNegative = number < 0;
    const numberAsString = Math.abs(number) + '';
    const negativeMultiplier = -1; // to avoid 'no-magic-numbers' eslint error. 
    let revertedNumber = parseInt(numberAsString
        .split('')
        .reverse()
        .join(''));

    if (isNegative) {
        revertedNumber *= negativeMultiplier;
    }

    return revertedNumber;
}
