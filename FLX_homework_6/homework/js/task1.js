const a = parseInt(prompt('Enter A number'));
const b = parseInt(prompt('Enter B number'));
const c = parseInt(prompt('Enter C number'));

const discriminant = b * b - 4 * a * c;

let message = '';
if (discriminant < 0) {
    message = 'Error, no solution'; 
} else if (discriminant === 0) {
    const x = -1 * b / (2 * a);
    message = `x = ${x}, D = ${discriminant}`;
} else {
    const x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
    message = `x1 = ${x1}, x2 = ${x2}, D = ${discriminant}`;
}

alert(message);
