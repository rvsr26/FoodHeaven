import { auth } from './firebase_config.js';
console.log("Authentication Controller Initialized");
export function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
// Handler modularized
