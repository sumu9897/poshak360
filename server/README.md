# Poshak360 – Backend API

The backend API powers the Poshak360 platform with secure data handling, authentication, product management, payment processing, and order management.

## 🚀 Live Backend
🔗 [Backend Link](https://vercel.com/mohammadsumon/ecom-server)

## ✨ Features
- 👤 JWT-based Authentication
- 📦 Product Management (CRUD operations)
- 🛒 Cart & Wishlist APIs
- 💳 Payment Integration (Stripe, COD)
- 🚚 Order Management & Tracking
- ⭐ Reviews & Ratings
- 📦 Return/Exchange Requests
- ☁️ File Storage with Cloudinary

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **Authentication:** JWT
- **Payments:** Stripe / COD
- **File Storage:** Cloudinary
- **Deployment:** Vercel

```bash
Directory structure:
└── server/
    ├── README.md
    ├── package.json
    ├── server.js
    ├── .gitignore
    ├── config/
    │   ├── cloudinary.js
    │   └── db.js
    ├── controllers/
    │   ├── cartController.js
    │   ├── orderController.js
    │   ├── productController.js
    │   └── userController.js
    ├── middleware/
    │   ├── adminAuth.js
    │   ├── auth.js
    │   └── multer.js
    ├── models/
    │   ├── orderModel.js
    │   ├── productModel.js
    │   └── userModel.js
    └── routes/
        ├── cartRoute.js
        ├── orderRoute.js
        ├── productRoute.js
        └── userRoute.js
```