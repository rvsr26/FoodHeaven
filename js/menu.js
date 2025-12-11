/* Food Heaven Menu & Cart State */
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
// Helper methods
// Empty cart loading handler
export function renderMenuItems(items) {
    const list = document.getElementById("menu-items");
    list.innerHTML = items.map(item => `<div>${item.name}</div>`).join('');
}
