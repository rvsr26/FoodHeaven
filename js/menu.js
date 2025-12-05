/* Food Heaven Menu & Cart State */
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
// Helper methods
// Empty cart loading handler
