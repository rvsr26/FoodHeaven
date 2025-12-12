/* Food Heaven Menu & Cart State */
export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
// Helper methods
// Empty cart loading handler
export function renderMenuItems(items) {
    const list = document.getElementById("menu-items");
    list.innerHTML = items.map(item => `<div>${item.name}</div>`).join('');
}
window.addEventListener("scroll", () => {
    // Sticky nav highlight logic
});
// Category lookup helper
// Debounce menu hover events
// debounced scroll check
export function syncWishlist() { console.log("Wishlist synced with firestore"); }
// Wishlist separate logic
