# 🍽️ Food Heaven(Multi-Cuisine Ordering System)

[![Production Status](https://img.shields.io/badge/status-production--ready-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()
[![Built With](https://img.shields.io/badge/built%20with-Vanilla%20JS%20%26%20Firebase-orange.svg)]()

**Food Heaven** is a production-ready, client-side **Single Page Application (SPA)** that showcases advanced dynamic menu management, custom state persistence, user authentications, responsive UI rendering, and downloadable checkout workflows.

---

## 🚀 Key Features

*   🔄 **Admin-Managed Dynamic Menu**: Real-time Firebase Firestore synchronization. Admins can perform full CRUD operations directly on menu listings.
*   📌 **Dual Sticky Navigation System**: Secondary layout tracker dynamically highlights active section on scrolls.
*   🛒 **Persistent Shopping Cart**: Cross-session active selection storage using HTML5 Local Storage.
*   ❤️ **Cross-Device Wishlist**: Secure user wishlist storage synched automatically via Firestore profile collections.
*   👤 **Secure User Authentication**: Firebase Auth guards endpoints (auth routes, checkout, and admin pages).
*   💳 **Dynamic Invoice Generator**: Calculates values (tax, delivery, promotions) instantly and provides client-side downloadable PDF/text receipts.
*   🌗 **Seamless Dark Theme**: Premium theme toggle with persistence saving user preference automatically.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **UI Skeleton** | `HTML5` | Clean semantic markup & layouts |
| **Styling** | `CSS3` | Flexbox, Grid, CSS Variables, smooth custom transitions |
| **Engine** | `ES Modules JavaScript` | Pure Vanilla client logic (no frameworks) |
| **BaaS Platform** | `Firebase` | Core backend cloud services |
| **Authentication** | `Firebase Auth` | Email/password session security |
| **Database** | `Firebase Firestore` | Real-time documents updates storage |
| **State Persistence** | `Local Storage` | Browser cache persistence |

---

## 📂 Project Structure

```text
├── admin.html             # Admin dashboard UI
├── index.html             # Landing Page/Main portal
├── menu.html              # Multi-cuisine menu viewer UI
├── payment.html           # Billing checkout UI
├── css/
│   ├── a                  # Combined production main CSS
│   ├── menu.css           # Menu specific visual enhancements
│   ├── payment.css        # Checkout and Invoice styling
│   └── signin.css         # Auth screens rules
├── js/
│   ├── admin.js           # Admin Dashboard CRUD controller
│   ├── firebase_config.js # Firestore initialization
│   ├── menu.js            # Home interface, cart system & wishlist sync
│   ├── payment.js         # Totals calculator and receipt generator
│   ├── secure_config.js   # Client configuration keys template
│   └── signin.js          # Authentication handlers
└── README.md              # Advanced repository handbook
```

---

## ⚙️ Setup & Local Deployment

### 1. Prerequisite Variables Setup
Create `js/secure_config.js` with your active Firebase keys credentials configuration:
```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 2. Local Hosting
You can run this application locally using any standard static file server. For npm environments:
```bash
# Install live-server globally
npm install -g live-server

# Launch local server in project root
live-server
```

---

## 📝 Learning Outcomes

*   Creating lightweight frameworkless Single Page Applications.
*   Structured Firestore integration with complex real-time callbacks.
*   Ensuring clean client state sync across page changes via local storage cache.
*   Designing premium interfaces using strict HSL palettes and sleek dark mode styles.
