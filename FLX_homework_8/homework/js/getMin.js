// eslint-disable-next-line no-unused-vars
function getMin() {
    let min;

    for (let i = 0; i < arguments.length; i++) {
        if (min === undefined) {
            min = arguments[i];
        } else if (min > arguments[i]) {
            min = arguments[i];
        }
    }

    return min;
}