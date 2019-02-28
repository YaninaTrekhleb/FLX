const totalPrice = prompt('Enter total price'); 
const discount = prompt('Enter discount');

let message = '';

if (totalPrice < 0 || totalPrice > 9999999) {
    message = 'Invalid data';
} else if (discount > 99) {
    message = 'Invalid data';
} else {
    let priceWithDiscount = totalPrice * ((100 - discount) / 100);
    priceWithDiscount = Math.round(priceWithDiscount * 100) / 100;
    
    let saved = totalPrice - priceWithDiscount;
    saved = Math.round(saved * 100) / 100;
    
    message = `
    Total price: ${totalPrice},
    Discount: ${discount}%,
    Price with discount: ${priceWithDiscount},
    Saved: ${saved}
    `;
}

alert(message);
