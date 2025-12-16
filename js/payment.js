import { cart } from './menu.js';
console.log("Loading checkout with items:", cart);
export function calculateTotal(subtotal) {
    const tax = subtotal * 0.05;
    const delivery = 50;
    return subtotal + tax + delivery;
}
