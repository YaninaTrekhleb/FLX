// eslint-disable-next-line no-unused-vars
function isSmaller(a, b) {
    if (a === b) {
        return false;
    }

    // eslint-disable-next-line no-undef
    return !isBigger(a, b);
}
