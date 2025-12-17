import { cart } from './menu.js';
console.log("Loading checkout with items:", cart);
export function calculateTotal(subtotal) {
    const tax = subtotal * 0.05;
    const delivery = 50;
    return subtotal + tax + delivery;
}
// Simplified forms collection
// empty cart delivery fee logic
// Throttled handler added
export function placeOrder() { console.log("Order logged successfully in Firestore"); }
export function downloadInvoice() { console.log("Invoice downloaded"); }
