# Poshak360 – Frontend (User Side)

Poshak360 is a modern e-commerce platform for browsing, searching, and purchasing clothing & accessories.  
The user side delivers a smooth shopping experience with features like smart filtering, autocomplete search, secure checkout, and order tracking.

## 🚀 Live Demo
🔗 [Frontend Live Link](https://poshak360.vercel.app)

## ✨ Features
- 🛍 Product Browsing & Filtering (category, price, size)
- 🔍 Smart Search with autocomplete
- 👤 User Authentication (Email/Password)
- 🛒 Cart & Wishlist
- 💳 Payment Integration (Card, COD)
- 🚚 Order Tracking
- ⭐ Product Reviews & Ratings
- 📦 Return/Exchange Requests

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** Context API
- **Authentication:** JWT
- **Payments:** Stripe / COD
- **File Storage:** Cloudinary
- **Deployment:** Vercel

```bash
Directory structure:
└── client/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    ├── .gitignore
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── assets.js
        ├── components/
        │   ├── BestSeller.jsx
        │   ├── CartTotal.jsx
        │   ├── Footer.jsx
        │   ├── Hero.jsx
        │   ├── LatestCollection.jsx
        │   ├── Navbar.jsx
        │   ├── NewsletterBox.jsx
        │   ├── OurPolicy.jsx
        │   ├── ProductItem.jsx
        │   ├── RelatedProducts.jsx
        │   ├── SearchBar.jsx
        │   └── Title.jsx
        ├── context/
        │   └── ShopContext.jsx
        └── pages/
            ├── About.jsx
            ├── Cart.jsx
            ├── Collection.jsx
            ├── Contact.jsx
            ├── Home.jsx
            ├── Login.jsx
            ├── Orders.jsx
            ├── PlaceOrder.jsx
            ├── PrivacyPolicy.jsx
            ├── Product.jsx
            └── Verify.jsx
```