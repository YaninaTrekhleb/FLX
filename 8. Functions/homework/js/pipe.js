// eslint-disable-next-line no-unused-vars
function pipe() {
    let x = arguments[0];

    for (let argIndex = 1; argIndex < arguments.length; argIndex++) {
        const currentFunc = arguments[argIndex];
        x = currentFunc(x);
    }

    return x;
}
