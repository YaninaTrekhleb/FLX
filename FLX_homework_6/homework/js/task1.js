function solveQuadraticEquation(a, b, c) {
 
}


const a = parseInt(prompt('Enter A number'));
const b = parseInt(prompt('Enter B number'));
const c = parseInt(prompt('Enter C number'));

const discriminant = b * b - 4 * a * c;

if (discriminant < 0) {
    console.log('Error, no solution');
} else if (discriminant === 0) {
    const x = -1 * b / (2 * a);
    console.log(x);
} else {
    const x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
    console.log(x1, x2);
}

